var _RhNavigationSecondaryMenu_screenSize;
import { __classPrivateFieldGet } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{display:block}#container{position:relative;color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--rh-color-surface-lightest,#fff)}#container:not(:is(.visible)){display:none}#sections{padding:var(--rh-space-xl,24px)}:host(:not([type=fixed-width])) #sections{display:grid;grid-template-columns:var(--rh-navigation-secondary-menu-section-grid,repeat(auto-fit,minmax(15.5rem,1fr)));grid-template-rows:auto;gap:var(--rh-navigation-secondary-menu-section-grid-gap,var(--rh-space-2xl,32px))}::slotted(:is(ul,ol)){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--rh-font-size-body-text-md,1rem)}@media screen and (min-width:992px){#container.visible{position:absolute;left:0;right:0;padding:var(--rh-space-4xl,64px) var(--rh-space-2xl,32px) var(--rh-space-3xl,48px);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);z-index:-1;max-height:calc(100vh - var(--rh-space-4xl, 64px) - var(--_nav-min-height));overflow-y:scroll}:host([layout=fixed-width]) #container{position:absolute;inset:var(--_nav-height) auto auto auto;margin-top:0;padding:0}#sections{padding:0;max-width:var(--rh-navigation-secondary-menu-content-max-width,1136px);margin:auto}:host([layout=fixed-width]) #sections{padding:var(--rh-space-2xl,32px)}}@media screen and (min-width:1200px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-2xl,32px)}}@media screen and (min-width:1440px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-4xl,64px)}}@media screen and (min-width:1600px){#full-width{margin:auto}}`;
/**
 * Dropdown menu for secondary nav, available in full-width and fixed-with sizes
 * @summary 'Dropdown menu for secondary nav, available in full-width and fixed-with sizes'
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 * @cssprop  [--rh-navigation-secondary-menu-section-grid=repeat(auto-fit, minmax(15.5rem, 1fr))]
 *          grid-template-columns for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-section-grid-gap=32px]
 *           grid-gap for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-content-max-width=1136px]
 *           max-width for menu content
 */
export class RhNavigationSecondaryMenu extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationSecondaryMenu_screenSize.set(this, new ScreenSizeController(this));
        /**
         * Color palette (default: lightest)
         * Secondary nav menus are always represented on the lightest color palette.
         */
        this.colorPalette = 'lightest';
        /**
         * Layout (default: full-width)
         * Secondary nav menus by default are always full-width, but can be set to fixed-width for special cases.
         */
        this.layout = 'full-width';
        /**
         * `visible` toggles on click (default: false)
         */
        this.visible = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('rh-navigation-secondary-menu'));
    }
    render() {
        const { visible } = this;
        const compact = __classPrivateFieldGet(this, _RhNavigationSecondaryMenu_screenSize, "f").matches.has('md');
        return html `
      <div id="container" class="${classMap({ compact, visible })}">${this.layout === 'full-width' ? html `
        <div id="full-width" part="full-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
        </div>` : html `
        <div id="fixed-width" part="fixed-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
        </div>`}
      </div>
    `;
    }
}
_RhNavigationSecondaryMenu_screenSize = new WeakMap();
RhNavigationSecondaryMenu.properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    layout: { reflect: true },
    visible: { type: Boolean }
};
RhNavigationSecondaryMenu.styles = [styles];
customElements.define("rh-navigation-secondary-menu", RhNavigationSecondaryMenu);
//# sourceMappingURL=rh-navigation-secondary-menu.js.map