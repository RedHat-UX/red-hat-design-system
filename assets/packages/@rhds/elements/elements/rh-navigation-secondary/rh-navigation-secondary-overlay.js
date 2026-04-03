import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{position:fixed;background-color:rgb(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%));top:0;width:100vw;height:100vh;z-index:var(--rh-navigation-secondary-overlay-z-index,var(--rh-secondary-nav-overlay-z-index,-1))}:host([open]){display:block}:host(:not([open])){display:none}`;
/**
 * Semi-transparent backdrop for dimming page content when a secondary
 * navigation dropdown or mobile menu is expanded. Provides a click
 * target that allows users to close all open menus. Managed
 * automatically by `<rh-navigation-secondary>`; avoid using
 * standalone. Screen readers should ignore this element as it serves
 * a purely visual purpose. Keyboard: Escape closes the overlay.
 *
 * @summary Backdrop overlay for expanded secondary navigation menus
 */
let RhNavigationSecondaryOverlay = class RhNavigationSecondaryOverlay extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * When `true`, displays the overlay. Managed automatically by the
         * parent `<rh-navigation-secondary>` when dropdowns or the mobile
         * menu expand. Defaults to `false`.
         */
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