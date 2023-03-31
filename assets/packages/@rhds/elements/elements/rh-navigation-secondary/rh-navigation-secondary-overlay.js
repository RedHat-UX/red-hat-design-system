import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{position:fixed;--_g9:var(--rh-color-gray-90-rgb, 21 21 21);background-color:rgb(var(--_g9) / var(--rh-opacity-80,80%));top:0;width:100vw;height:100vh;z-index:var(--rh-navigation-secondary-overlay-z-index,var(--rh-secondary-nav-overlay-z-index,-1))}:host([open]){display:block}:host(:not([open])){display:none}`;
/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
let RhNavigationSecondaryOverlay = class RhNavigationSecondaryOverlay extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
};
RhNavigationSecondaryOverlay.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationSecondaryOverlay.prototype, "open", void 0);
RhNavigationSecondaryOverlay = __decorate([
    customElement('rh-navigation-secondary-overlay')
], RhNavigationSecondaryOverlay);
export { RhNavigationSecondaryOverlay };
//# sourceMappingURL=rh-navigation-secondary-overlay.js.map