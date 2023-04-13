import type { ReactiveController, ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

export type LanguageCode = string;

export type Microcopy = Record<LanguageCode, Record<string, string>>;

export class I18nController implements ReactiveController {
  language = 'en-US';

  #logger: Logger;

  #mo = new MutationObserver(() => this.update());

  #microcopy = new Map<string, Map<string, string>>();

  constructor(private host: ReactiveElement, defaults: Microcopy) {
    this.#logger = new Logger(host);
    for (const [language, copy] of Object.entries(defaults)) {
      this.#microcopy.set(language, new Map(Object.entries(copy)));
    }
    this.update();
  }

  hostConnected(): void {
    this.#mo.observe(this.host, { childList: true, attributes: true, attributeFilter: ['lang'] });
    this.update();
  }

  hostDisconnected(): void {
    this.#mo.disconnect();
  }

  #getLanguage() {
    let lang = this.host.getAttribute('lang') || this.host.closest('[lang]')?.getAttribute('lang');
    let root = this.host.getRootNode();
    while (!lang && root instanceof ShadowRoot) {
      lang = root.host.closest('[lang]')?.getAttribute('lang');
      root = root.host.getRootNode();
    }
    return lang ?? this.language;
  }

  #updateLanguage() {
    this.language = this.#getLanguage();
  }

  #updateMicrocopy() {
    this.#updateLanguage();
    const lightLangs = this.host.querySelectorAll<HTMLScriptElement>('script[type="application/json"][data-language]');
    for (const script of lightLangs) {
      const { language } = script.dataset;
      if (language) {
        let content = {};
        try {
          content = JSON.parse(script.textContent ?? '{}');
        } catch {
          this.#logger.error('Could not parse microcopy', language);
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
    this.#updateLanguage();
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
    return Object.fromEntries([...this.#microcopy.entries()].map(([k, v]) => [k, Object.fromEntries(v)]));
  }
}
