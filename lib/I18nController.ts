import { isServer, type ReactiveController, type ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

export type LanguageCode = string;

export type Microcopy = Record<LanguageCode, Record<string, string>>;

export class I18nController implements ReactiveController {
  #defaultLanguage = 'en-US';

  language = this.#defaultLanguage;

  #logger: Logger;

  #mo = new MutationObserver(() => this.update());

  #microcopy = new Map<string, Map<string, string>>();

  constructor(private host: ReactiveElement, defaults: Microcopy) {
    this.#logger = new Logger(host);
    for (const [language, copy] of Object.entries(defaults)) {
      this.#microcopy.set(language, new Map(Object.entries(copy)));
    }
  }

  hostConnected(): void {
    this.#mo.observe(this.host, { childList: true, attributes: true, attributeFilter: ['lang'] });
    this.update();
  }

  hostDisconnected(): void {
    this.#mo.disconnect();
  }

  #getLanguage() {
    if (isServer) {
      return this.#defaultLanguage;
    }
    let lang =
      this.host.getAttribute('lang')
        || this.host.closest('[lang]')?.getAttribute('lang');
    let root = this.host.getRootNode();
    while (!lang && root instanceof ShadowRoot) {
      lang = root.host.closest('[lang]')?.getAttribute('lang') as string;
      root = root.host.getRootNode();
    }
    return lang ?? this.language;
  }

  #useDefaultLanguage() {
    this.#logger.log(`Using ${this.#defaultLanguage} instead.`);
    if (this.language !== this.#defaultLanguage) {
      this.language = this.#defaultLanguage;
      this.#updateMicrocopy();
      this.host.requestUpdate();
    }
  }

  #updateMicrocopy() {
    this.language = this.#getLanguage();
    for (const script of this.host.querySelectorAll?.(
      'script[type="application/json"][data-language]'
    ) ?? []) {
      const { language } = (script as HTMLElement).dataset;
      if (language) {
        let content = {};
        try {
          content = JSON.parse(script.textContent ?? '{}');
        } catch {
          this.#logger.error('Could not parse microcopy...', language);
          this.#useDefaultLanguage();
        }
        this.#microcopy.set(language, new Map(Object.entries(content)));
      }
    }
  }

  #ensure(lang: LanguageCode) {
    if (!this.#microcopy.has(lang)) {
      this.#microcopy.set(lang, new Map());
    }
  }

  update() {
    this.language = this.#getLanguage();
    this.#updateMicrocopy();
    this.host.requestUpdate();
  }

  async loadTranslation(url: URL, lang: LanguageCode = this.language, force = false) {
    if (!!url && (!!force || !this.#microcopy.has(lang))) {
      try {
        const file = await fetch(url).then(result => result.json());
        return this.join(file, lang);
      } catch (e) {
        this.#logger.error(`Could not load microcopy for ${lang} from ${url}.`);
        this.#useDefaultLanguage();
      }
    }
    this.update();
  }

  get(key: string, lang: LanguageCode = this.language) {
    return this.#microcopy.get(lang)?.get(key) ?? key;
  }

  set(key: string, value: string, lang: LanguageCode = this.language) {
    this.#ensure(lang);
    this.#microcopy.get(lang)?.set(key, value);
    this.host.requestUpdate();
    return this;
  }

  clear(lang: LanguageCode = this.language) {
    this.#microcopy.get(lang)?.clear();
    this.host.requestUpdate();
  }

  clearAll() {
    this.#microcopy.clear();
    this.host.requestUpdate();
  }

  delete(key: string, lang: LanguageCode = this.language) {
    const r = this.#microcopy.get(lang)?.delete(key) ?? false;
    this.host.requestUpdate();
    return r;
  }

  join(obj: Microcopy[LanguageCode], lang: LanguageCode = this.language) {
    this.#ensure(lang);
    const map = this.#microcopy.get(lang) as Map<string, string>;
    for (const [key, value] of Object.entries(obj)) {
      map.set(key, value);
    }
    this.host.requestUpdate();
    return this;
  }

  toJSON() {
    return Object.fromEntries(
      [...this.#microcopy.entries()].map(([k, v]) => [k, Object.fromEntries(v)])
    );
  }
}
