import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { noChange } from 'lit';
/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
    constructor() {
        super(...arguments);
        this.allContent = noChange;
        this.htmlContent = noChange;
        this.jsContent = noChange;
        this.cssContent = noChange;
        this.hasCss = noChange;
        this.hasJs = noChange;
        this.hasWorkedAroundHydrationWoes = false;
    }
    hostUpdated() {
        // workaround for awful terrible no good very bad ssr hydration lib problems
        const containers = this.host.shadowRoot.querySelectorAll('#container');
        if (containers.length > 1) {
            const [, ...rest] = containers;
            for (const bad of rest) {
                bad.remove();
            }
            for (const sigh of this.host.shadowRoot.querySelectorAll('[defer-hydration]')) {
                sigh.removeAttribute('defer-hydration');
                sigh.requestUpdate?.();
            }
            this.host.requestUpdate();
        }
        this.hasWorkedAroundHydrationWoes || (this.hasWorkedAroundHydrationWoes = (this.host.requestUpdate(), true));
    }
}
//# sourceMappingURL=uxdot-pattern-ssr-controller-client.js.map