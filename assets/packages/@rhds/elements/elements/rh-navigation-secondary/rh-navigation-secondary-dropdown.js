var _RhNavigationSecondaryDropdown_instances, _RhNavigationSecondaryDropdown_slots, _RhNavigationSecondaryDropdown_logger, _RhNavigationSecondaryDropdown_open, _RhNavigationSecondaryDropdown_close, _RhSecondaryNavDropdown_logger;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { RhNavigationSecondaryMenu } from './rh-navigation-secondary-menu.js';
export class SecondaryNavDropdownExpandEvent extends ComposedEvent {
    constructor(expanded, toggle) {
        super('expand-request');
        this.expanded = expanded;
        this.toggle = toggle;
    }
}
import { css } from "lit";
const styles = css `:host{display:block}#container{border-inline-start:3px solid transparent;border-inline-end:1px solid transparent;display:block;height:100%}#container.expanded{border-inline-start-color:var(--rh-color-text-brand-on-light,#ee0000);border-inline-end-color:var(--rh-color-border-subtle-on-light,#d2d2d2);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}::slotted([slot=link]){justify-content:space-between;position:relative;gap:calc(var(--rh-font-size-body-text-md,1rem)/ 2)}::slotted([slot=link]):after{box-sizing:content-box!important;content:"";display:block;width:var(--_chevron-size);height:var(--_chevron-size);border-inline-end:var(--_chevron-thickness) solid var(--_chevron-color);border-block-end:var(--_chevron-thickness) solid var(--_chevron-color);transform:var(--_chevron-transform-collapsed)}#container.expanded ::slotted([slot=link]):after{transform:var(--_chevron-transform-expanded)}@media screen and (min-width:992px){#container{border-inline-start:none;border-inline-end:none}#container.expanded{box-shadow:none}::slotted([slot=link][aria-expanded=true]){background:var(--rh-color-surface-lightest,#fff)!important;border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000);color:var(--rh-color-text-primary-on-light,#151515);--_chevron-color:var(--rh-color-text-primary-on-light, #151515)}}`;
/**
 * @summary A wrapper component to upgrade a top level nav link to include dropdown functionality
 *
 * @slot link   - Link for dropdown, expects `<a>`
 * @slot menu   - Menu for dropdown, expects `<rh-navigation-secondary-menu>`
 *
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
**/
let RhNavigationSecondaryDropdown = class RhNavigationSecondaryDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationSecondaryDropdown_instances.add(this);
        _RhNavigationSecondaryDropdown_slots.set(this, new SlotController(this, { slots: ['link', 'menu'] }));
        _RhNavigationSecondaryDropdown_logger.set(this, new Logger(this));
        this.expanded = false;
        this.colorPalette = 'light';
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('rh-navigation-secondary-dropdown'));
        const [link] = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('link');
        const [menu] = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('menu');
        if (link === undefined) {
            __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_logger, "f").warn('[rh-navigation-secondary-dropdown][slot="link"] expects a slotted <a> tag');
            return;
        }
        if (menu === undefined) {
            __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_logger, "f").warn('[rh-navigation-secondary-dropdown][slot="menu"] expects a slotted <rh-navigation-secondary-menu> tag');
            return;
        }
        link.setAttribute('role', 'button');
        link.setAttribute('aria-expanded', 'false');
        link.setAttribute('aria-controls', menu.id);
        link.addEventListener('click', this._clickHandler);
    }
    render() {
        const classes = { 'expanded': this.expanded };
        return html `
      <div id="container" part="container" class="${classMap(classes)}">
        <slot name="link"></slot>
        <slot name="menu"></slot>
      </div>
    `;
    }
    /**
     * When expanded property changes, check the new value, if true
     * run the `#open()` method, if false run the `#close()` method.
     * @param oldVal {string} - Boolean value in string form
     * @param newVal {string} - Boolean value in string form
     * @returns {void}
     */
    _expandedChanged(oldVal, newVal) {
        if (newVal === oldVal) {
            return;
        }
        newVal ? __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_instances, "m", _RhNavigationSecondaryDropdown_open).call(this) : __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_instances, "m", _RhNavigationSecondaryDropdown_close).call(this);
    }
    /**
     * When a dropdown is clicked set expanded to the opposite of the expanded property
     * and then dispatch that value in a SecondaryNavDropdownExpandEvent
     * @param event {MouseEvent}
     */
    _clickHandler(event) {
        event.preventDefault();
        this.expanded = !this.expanded;
        // trigger change event which evokes the mutation on this.expanded
        this.dispatchEvent(new SecondaryNavDropdownExpandEvent(this.expanded, this));
    }
};
_RhNavigationSecondaryDropdown_slots = new WeakMap(), _RhNavigationSecondaryDropdown_logger = new WeakMap(), _RhNavigationSecondaryDropdown_instances = new WeakSet(), _RhNavigationSecondaryDropdown_open = function _RhNavigationSecondaryDropdown_open() {
    const link = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    // menu as a RhNavigationSecondaryMenu in the slotted child is specific to rh-navigation-secondary.
    // If this component is abstracted to a standalone component. The RhNavigationSecondaryMenu
    // could possibly become a sub component of the abstraction instead.
    const menu = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('menu').find(child => child instanceof RhNavigationSecondaryMenu);
    menu.visible = true;
}, _RhNavigationSecondaryDropdown_close = function _RhNavigationSecondaryDropdown_close() {
    const link = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    // Same as comment in #open()
    // The RhNavigationSecondaryMenu could possibly become a sub component of the abstraction instead.
    const menu = __classPrivateFieldGet(this, _RhNavigationSecondaryDropdown_slots, "f").getSlotted('menu').find(child => child instanceof RhNavigationSecondaryMenu);
    menu.visible = false;
};
RhNavigationSecondaryDropdown.styles = [styles];
__decorate([
    query('#container')
], RhNavigationSecondaryDropdown.prototype, "_container", void 0);
__decorate([
    observed,
    state()
], RhNavigationSecondaryDropdown.prototype, "expanded", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhNavigationSecondaryDropdown.prototype, "colorPalette", void 0);
__decorate([
    bound
], RhNavigationSecondaryDropdown.prototype, "_clickHandler", null);
RhNavigationSecondaryDropdown = __decorate([
    customElement('rh-navigation-secondary-dropdown')
], RhNavigationSecondaryDropdown);
export { RhNavigationSecondaryDropdown };
let RhSecondaryNavDropdown = class RhSecondaryNavDropdown extends RhNavigationSecondaryDropdown {
    constructor() {
        super();
        _RhSecondaryNavDropdown_logger.set(this, new Logger(this));
        __classPrivateFieldGet(this, _RhSecondaryNavDropdown_logger, "f").warn('rh-secondary-nav-dropdown is deprecated. Use rh-navigation-secondary-dropdown instead.');
    }
};
_RhSecondaryNavDropdown_logger = new WeakMap();
RhSecondaryNavDropdown = __decorate([
    customElement('rh-secondary-nav-dropdown')
], RhSecondaryNavDropdown);
//# sourceMappingURL=rh-navigation-secondary-dropdown.js.map