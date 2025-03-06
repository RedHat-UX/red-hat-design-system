import { LitElement } from 'lit';
import { css } from "lit";
const styles = css `:host{position:fixed;--_gray-90-rgb:var(--rh-color-gray-90-rgb,31 31 31);background-color:rgb(var(--_gray-90-rgb)/var(--rh-opacity-80,80%));top:0;width:100vw;height:100vh;z-index:var(--rh-navigation-secondary-overlay-z-index,var(--rh-secondary-nav-overlay-z-index,-1))}:host([open]){display:block}:host(:not([open])){display:none}`;
/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
export class RhNavigationSecondaryOverlay extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
}
RhNavigationSecondaryOverlay.properties = {
    open: { type: Boolean, reflect: true }
};
RhNavigationSecondaryOverlay.styles = [styles];
customElements.define("rh-navigation-secondary-overlay", RhNavigationSecondaryOverlay);
//# sourceMappingURL=rh-navigation-secondary-overlay.js.map