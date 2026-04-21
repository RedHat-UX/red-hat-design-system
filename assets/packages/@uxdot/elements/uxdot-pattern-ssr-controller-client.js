import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { ssrAdopt } from './ssr-adopt-directive.js';
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
    constructor() {
        super(...arguments);
        this.allContent = ssrAdopt();
        this.htmlContent = ssrAdopt();
        this.cssContent = ssrAdopt();
        this.jsContent = ssrAdopt();
        this.hasCss = false;
        this.hasJs = false;
    }
    hostConnected() {
        const root = this.host.shadowRoot;
        if (!root) {
            return;
        }
        this.hasCss = !!root.querySelector('#css-panel rh-code-block pre')?.textContent?.trim();
        this.hasJs = !!root.querySelector('#js-panel rh-code-block pre')?.textContent?.trim();
        this.host.requestUpdate();
    }
}
//# sourceMappingURL=uxdot-pattern-ssr-controller-client.js.map