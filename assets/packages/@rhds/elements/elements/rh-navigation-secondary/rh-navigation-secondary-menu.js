var _RhNavigationSecondaryMenu_screenSize, _RhSecondaryNavMenu_logger;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `:host{display:block}#container{position:relative}#container:not(:is(.visible)){display:none}#container.visible{background-color:var(--rh-color-surface-lightest,#fff)}#sections{padding:var(--rh-space-xl,24px)}:host(:not([type=fixed-width])) #sections{display:grid;grid-template-columns:var(--rh-navigation-secondary-menu-section-grid,var(--rh-secondary-nav-menu-section-grid,repeat(auto-fit,minmax(15.5rem,1fr))));grid-template-rows:auto;gap:var(--rh-navigation-secondary-menu-section-grid-gap,var(--rh-secondary-nav-menu-section-grid-gap,var(--rh-space-2xl,32px)))}::slotted(:is(ul,ol)){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--rh-font-size-body-text-md,1rem)}@media screen and (min-width:992px){#container.visible{position:absolute;left:0;right:0;padding:var(--rh-space-4xl,64px) var(--rh-space-2xl,32px) var(--rh-space-3xl,48px);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2));z-index:-1;max-height:calc(100vh - (var(--rh-space-4xl,64px)) - var(--_nav-min-height));overflow-y:scroll}:host([layout=fixed-width]) #container{position:absolute;inset:var(--_nav-height) auto auto auto;margin-top:0;padding:0}#sections{padding:0;max-width:var(--rh-navigation-secondary-menu-content-max-width,var(--rh-secondary-nav-menu-content-max-width,1136px));margin:auto}:host([layout=fixed-width]) #sections{padding:var(--rh-space-2xl,32px)}}@media screen and (min-width:1200px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-2xl,32px)}}@media screen and (min-width:1440px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-4xl,64px)}}@media screen and (min-width:1600px){#full-width{margin:auto}}`;
/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 *
 * @cssprop  --rh-navigation-secondary-menu-section-grid - grid-template-columns for menu sections {@default `repeat(auto-fit, minmax(15.5rem, 1fr))`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-section-grid-gap - grid-gap for menu sections {@default `32px`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-content-max-width - max-width for menu content {@default `1136px`}
 *
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-space-xl
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-3xl
 * @cssprop --rh-space-4xl
 * @cssprop --rh-box-shadow-sm
 */
let RhNavigationSecondaryMenu = class RhNavigationSecondaryMenu extends LitElement {
    constructor() {
        super(...arguments);
        this.layout = 'full-width';
        _RhNavigationSecondaryMenu_screenSize.set(this, new ScreenSizeController(this));
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
};
_RhNavigationSecondaryMenu_screenSize = new WeakMap();
RhNavigationSecondaryMenu.styles = [styles];
__decorate([
    property({ reflect: true })
], RhNavigationSecondaryMenu.prototype, "layout", void 0);
__decorate([
    property({ type: Boolean })
], RhNavigationSecondaryMenu.prototype, "visible", void 0);
RhNavigationSecondaryMenu = __decorate([
    customElement('rh-navigation-secondary-menu')
], RhNavigationSecondaryMenu);
export { RhNavigationSecondaryMenu };
let RhSecondaryNavMenu = class RhSecondaryNavMenu extends RhNavigationSecondaryMenu {
    constructor() {
        super();
        _RhSecondaryNavMenu_logger.set(this, new Logger(this));
        __classPrivateFieldGet(this, _RhSecondaryNavMenu_logger, "f").warn('rh-secondary-nav-menu is deprecated. Use rh-navigation-secondary-menu instead.');
    }
};
_RhSecondaryNavMenu_logger = new WeakMap();
RhSecondaryNavMenu = __decorate([
    customElement('rh-secondary-nav-menu')
], RhSecondaryNavMenu);
//# sourceMappingURL=rh-navigation-secondary-menu.js.map