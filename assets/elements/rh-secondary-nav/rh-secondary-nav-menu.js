var _RhSecondaryNavMenu_screenSize;
import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `:host{display:block}#container{position:relative}#container:not(:is(.visible)){display:none}#container.visible{background-color:var(--rh-color-surface-lightest,#fff)}#sections{padding:var(--rh-space-xl,24px)}:host(:not([type=fixed-width])) #sections{display:grid;grid-template-columns:var(--rh-secondary-nav-menu-section-grid,repeat(auto-fit,minmax(15.5rem,1fr)));grid-template-rows:auto;gap:var(--rh-secondary-nav-menu-section-grid-gap,var(--rh-space-2xl,32px))}::slotted(:is(ul,ol)){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--rh-font-size-body-text-md,1rem)}@media screen and (min-width:992px){#container.visible{position:absolute;left:0;right:0;padding:var(--rh-space-4xl,64px) var(--rh-space-2xl,32px) var(--rh-space-3xl,48px);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2));z-index:-1;max-height:calc(100vh - (var(--rh-space-4xl,64px)) - var(--_nav-min-height));overflow-y:scroll}:host([layout=fixed-width]) #container{position:absolute;top:var(--_nav-height);left:auto;right:auto;bottom:auto;margin-top:0;padding:0}#sections{padding:0;max-width:var(--rh-secondary-nav-menu-content-max-width,1136px);margin:auto}:host([layout=fixed-width]) #sections{padding:var(--rh-space-2xl,32px)}}@media screen and (min-width:1200px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-2xl,32px)}}@media screen and (min-width:1440px){#container.visible{padding:var(--rh-space-3xl,48px) var(--rh-space-4xl,64px)}}@media screen and (min-width:1600px){#full-width{margin:auto}}`;
/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot section          - Section, expects `<ul>, <ol>, <rh-secondary-nav-section>` elements, applies auto grid styles on full-width
 * @slot cta              - Menu level CTA, expects a `<rh-cta>`
 *
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 * @csspart cta           - container - <div> element, wrapper for cta
 */
let RhSecondaryNavMenu = class RhSecondaryNavMenu extends LitElement {
    constructor() {
        super(...arguments);
        this.layout = 'full-width';
        _RhSecondaryNavMenu_screenSize.set(this, new ScreenSizeController(this));
        /**
         * `compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
         * Property is observed for changes, and its value is updated using matchMediaController
         * when viewport changes at breakpoint or first load of the component.
         */
        this._compact = false;
        /**
         * ScreenSizeController effects callback to set _compact
         */
        this.screenSize = new ScreenSizeController(this, 'tabletLandscape', {
            onChange: matches => {
                this._compact = !matches;
            }
        });
        /**
         * `visible` property is false initially then when a dropdown is clicked is toggled
         */
        this.visible = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('rh-secondary-nav-menu'));
    }
    render() {
        const classes = { 'compact': this._compact, 'visible': this.visible };
        return html `
      <div id="container" class="${classMap(classes)}">${this.layout === 'full-width' ? html `
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
_RhSecondaryNavMenu_screenSize = new WeakMap();
RhSecondaryNavMenu.styles = [styles];
__decorate([
    property({ reflect: true })
], RhSecondaryNavMenu.prototype, "layout", void 0);
__decorate([
    query('#container')
], RhSecondaryNavMenu.prototype, "_container", void 0);
__decorate([
    observed,
    state()
], RhSecondaryNavMenu.prototype, "_compact", void 0);
__decorate([
    state()
], RhSecondaryNavMenu.prototype, "visible", void 0);
RhSecondaryNavMenu = __decorate([
    customElement('rh-secondary-nav-menu')
], RhSecondaryNavMenu);
export { RhSecondaryNavMenu };
//# sourceMappingURL=rh-secondary-nav-menu.js.map