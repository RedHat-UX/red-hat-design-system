var _RhSecondaryNavMenu_screenSize;
import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RhSecondaryNavDropdown } from './rh-secondary-nav-dropdown.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import styles from "./rh-secondary-nav-menu.css.js";
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
    /**
     * Checks if passed in element is a RhSecondaryNavDropdown
     * @param element:
     * @returns {boolean}
     */
    static isDropdown(element) {
        return element instanceof RhSecondaryNavDropdown;
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