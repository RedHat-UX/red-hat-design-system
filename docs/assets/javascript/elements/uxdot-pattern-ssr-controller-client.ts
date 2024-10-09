import { isServer } from 'lit';
import type { UxdotPattern } from './uxdot-pattern.js';

export class UxdotPatternSSRControllerClient {
  allContent?: Node;
  htmlContent?: Node;
  jsContent?: Node;
  cssContent?: Node;
  hasCss = false;
  hasJs = false;
  hostUpdate?(): void;
  /**
   * Hydrate the results of SSR on the client
   * @param host no place like home
   */
  constructor(public host: UxdotPattern) {
    const { shadowRoot, hasUpdated } = this.host;
    if (!isServer && shadowRoot && !hasUpdated) {
      this.allContent ||= shadowRoot.getElementById('content')!;
      this.htmlContent ||= shadowRoot.querySelector('.language-html')!;
      this.jsContent ||= shadowRoot.querySelector('.language-js')!;
      this.cssContent ||= shadowRoot.querySelector('.language-css')!;
      this.hasCss = !this.cssContent?.textContent?.trim();
      this.hasJs = !this.jsContent?.textContent?.trim();
    }
  }
}

