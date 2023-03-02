import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { css } from "lit";
const styles = css `:host{position:fixed;background:rgb(21,21,21,.75);top:0;width:100vw;height:100vh;z-index:var(--rh-secondary-nav-overlay-z-index,-1)}:host([open]){display:block}:host(:not([open])){display:none}`;
export class SecondaryNavOverlayChangeEvent extends ComposedEvent {
    constructor(open, toggle) {
        super('overlay-change');
        this.open = open;
        this.toggle = toggle;
    }
}
/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
let RhSecondaryNavOverlay = class RhSecondaryNavOverlay extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    render() {
        return html ``;
    }
    _openChanged(_oldValue, newValue) {
        this.toggleAttribute('open', newValue);
    }
};
RhSecondaryNavOverlay.styles = [styles];
__decorate([
    observed,
    state()
], RhSecondaryNavOverlay.prototype, "open", void 0);
RhSecondaryNavOverlay = __decorate([
    customElement('rh-secondary-nav-overlay')
], RhSecondaryNavOverlay);
export { RhSecondaryNavOverlay };
//# sourceMappingURL=rh-secondary-nav-overlay.js.map