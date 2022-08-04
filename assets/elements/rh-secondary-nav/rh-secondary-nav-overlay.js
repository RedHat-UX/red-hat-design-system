import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { observed } from '@patternfly/pfe-core/decorators.js';
import styles from "./rh-secondary-nav-overlay.css.js";
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