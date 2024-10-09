import type { UxdotPattern } from './uxdot-pattern.js';
import { isServer } from 'lit';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';

/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
  allContent?: Node;
  htmlContent?: Node;
  jsContent?: Node;
  cssContent?: Node;
  hasCss = false;
  hasJs = false;
  constructor(host: UxdotPattern) {
    super(host);
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

