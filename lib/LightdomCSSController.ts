import type { ReactiveController, ReactiveElement } from 'lit';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import type { RHDSSSRController } from './ssr-controller.js';

const handleAsText = (r: Response) => r.text();

export class LightdomCSSController implements ReactiveController, RHDSSSRController {
  isRHDSSSRController = true;

  host: ReactiveElement;

  #tagName: string;

  /** URL to lightdom sheet, by convention it must be the tagName, with `-lightdom.css` suffix */
  #url: URL;

  #logger: Logger;

  #computedStyles?: CSSStyleDeclaration;

  constructor(
    host: ReactiveElement,
    /** import.meta.url from the element definition module */
    url: string,
  ) {
    this.host = host;
    this.#tagName = host.localName;
    this.#url = new URL(`${this.#tagName}-lightdom.css`, url);
    this.#logger = new Logger(host);
    host.addController(this);
  }

  async hostConnected(): Promise<void> {
    this.#computedStyles ??= getComputedStyle(this.host);
    if (this.#computedStyles.getPropertyValue('--_rhds-lightdom') !== this.#tagName) {
      const root = this.host.getRootNode();
      if (root instanceof Document || root instanceof ShadowRoot) {
        try {
          const sheet = new CSSStyleSheet();
          const css = await fetch(this.#url).then(handleAsText);
          sheet.replaceSync(css);
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
        } catch (error) {
          this.#logger.error(error);
        }
      }
    }
  };
}
