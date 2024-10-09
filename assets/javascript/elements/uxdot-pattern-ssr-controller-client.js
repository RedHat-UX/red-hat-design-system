import { isServer } from 'lit';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
    constructor(host) {
        super(host);
        this.hasCss = false;
        this.hasJs = false;
        const { shadowRoot, hasUpdated } = this.host;
        if (!isServer && shadowRoot && !hasUpdated) {
            this.allContent || (this.allContent = shadowRoot.getElementById('content'));
            this.htmlContent || (this.htmlContent = shadowRoot.querySelector('.language-html'));
            this.jsContent || (this.jsContent = shadowRoot.querySelector('.language-js'));
            this.cssContent || (this.cssContent = shadowRoot.querySelector('.language-css'));
            this.hasCss = !this.cssContent?.textContent?.trim();
            this.hasJs = !this.jsContent?.textContent?.trim();
        }
    }
}
//# sourceMappingURL=uxdot-pattern-ssr-controller-client.js.map