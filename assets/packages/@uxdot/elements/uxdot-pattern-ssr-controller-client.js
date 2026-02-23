var _UxdotPatternSSRControllerClient_instances, _UxdotPatternSSRControllerClient_extractSSRContent;
import { __classPrivateFieldGet } from "tslib";
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { noChange } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
/** Hydrate the results of SSR on the client */
export class UxdotPatternSSRControllerClient extends RHDSSSRController {
    constructor() {
        super(...arguments);
        _UxdotPatternSSRControllerClient_instances.add(this);
        this.allContent = noChange;
        this.htmlContent = noChange;
        this.jsContent = noChange;
        this.cssContent = noChange;
        this.hasCss = noChange;
        this.hasJs = noChange;
        this.hasWorkedAroundHydrationWoes = false;
    }
    async hostConnected() {
        // Extract SSR content synchronously BEFORE the first update/hydration.
        // This provides unsafeHTML() directive values instead of noChange primitives,
        // ensuring forceRender recovery (if hydration fails) has content to work with.
        __classPrivateFieldGet(this, _UxdotPatternSSRControllerClient_instances, "m", _UxdotPatternSSRControllerClient_extractSSRContent).call(this);
        await this.host.updateComplete;
        this.host.requestUpdate('colorPalette', null);
        this.host.requestUpdate('activeTab', null);
        await this.host.updateComplete;
        // workaround for awful terrible no good very bad ssr hydration lib problems
        const containers = this.host.shadowRoot.querySelectorAll('#container');
        if (containers.length > 1) {
            // Keep the LAST container (Lit-managed with proper bindings and content);
            // remove earlier containers (SSR with broken hydration state)
            const last = containers[containers.length - 1];
            for (const container of containers) {
                if (container !== last) {
                    container.remove();
                }
            }
            for (const sigh of this.host.shadowRoot.querySelectorAll('[defer-hydration]')) {
                sigh.removeAttribute('defer-hydration');
                sigh.requestUpdate?.();
            }
            this.host.requestUpdate();
        }
        this.hasWorkedAroundHydrationWoes || (this.hasWorkedAroundHydrationWoes = (this.host.requestUpdate(), true));
    }
    hostUpdated() {
        if (!this.hasWorkedAroundHydrationWoes) {
            this.hostConnected();
        }
    }
}
_UxdotPatternSSRControllerClient_instances = new WeakSet(), _UxdotPatternSSRControllerClient_extractSSRContent = function _UxdotPatternSSRControllerClient_extractSSRContent() {
    const root = this.host.shadowRoot;
    if (!root) {
        return;
    }
    const surface = root.querySelector('#content');
    if (surface) {
        // Strip Lit SSR hydration comment markers
        const content = surface.innerHTML.replace(/<!--\/?lit-[^>]*-->/g, '').trim();
        if (content) {
            this.allContent = unsafeHTML(content);
        }
    }
    // Extract highlighted code from each tab's code block
    for (const [panel, prop] of [
        ['#html-panel', 'htmlContent'],
        ['#css-panel', 'cssContent'],
        ['#js-panel', 'jsContent'],
    ]) {
        const pre = root.querySelector(`${panel} rh-code-block pre`);
        if (pre) {
            this[prop] = unsafeHTML(pre.outerHTML);
        }
    }
    this.hasCss = !!root.querySelector('#css-panel rh-code-block pre')?.textContent?.trim();
    this.hasJs = !!root.querySelector('#js-panel rh-code-block pre')?.textContent?.trim();
};
//# sourceMappingURL=uxdot-pattern-ssr-controller-client.js.map