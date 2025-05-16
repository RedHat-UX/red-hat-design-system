import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{position:fixed;background-color:rgb(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%));inset:0;inline-size:100dvw;block-size:100dvh;z-index:var(--rh-overlay-z-index,1)}:host([open]){display:block}:host(:not([open])){display:none}`;
/**
 * Overlay
 * @slot - Place element content here
 */
let RhNavigationPrimaryOverlay = class RhNavigationPrimaryOverlay extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
};
RhNavigationPrimaryOverlay.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationPrimaryOverlay.prototype, "open", void 0);
RhNavigationPrimaryOverlay = __decorate([
    customElement('rh-navigation-primary-overlay')
], RhNavigationPrimaryOverlay);
export { RhNavigationPrimaryOverlay };
//# sourceMappingURL=rh-navigation-primary-overlay.js.map