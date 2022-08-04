var _RhSecondaryNavDropdown_instances, _RhSecondaryNavDropdown_slots, _RhSecondaryNavDropdown_logger, _RhSecondaryNavDropdown_open, _RhSecondaryNavDropdown_close;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RhSecondaryNavMenu } from './rh-secondary-nav-menu.js';
export class SecondaryNavDropdownExpandEvent extends ComposedEvent {
    constructor(expanded, toggle) {
        super('expand-request');
        this.expanded = expanded;
        this.toggle = toggle;
    }
}
import styles from "./rh-secondary-nav-dropdown.css.js";
/**
 * @summary A wrapper component to upgrade a top level nav link to include dropdown functionality
 *
 * @slot link   - Link for dropdown, expects `<a>`
 * @slot menu   - Menu for dropdown, expects `<rh-secondary-nav-menu>`
 *
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
**/
let RhSecondaryNavDropdown = class RhSecondaryNavDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _RhSecondaryNavDropdown_instances.add(this);
        _RhSecondaryNavDropdown_slots.set(this, new SlotController(this, { slots: ['link', 'menu'] }));
        _RhSecondaryNavDropdown_logger.set(this, new Logger(this));
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('rh-secondary-nav-dropdown'));
        const [link] = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('link');
        const [menu] = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('menu');
        if (link === undefined) {
            __classPrivateFieldGet(this, _RhSecondaryNavDropdown_logger, "f").warn('[rh-secondary-nav-dropdown][slot="link"] expects a slotted <a> tag');
            return;
        }
        if (menu === undefined) {
            __classPrivateFieldGet(this, _RhSecondaryNavDropdown_logger, "f").warn('[rh-secondary-nav-dropdown][slot="menu"] expects a slotted <rh-secondary-nav-menu> tag');
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
        newVal ? __classPrivateFieldGet(this, _RhSecondaryNavDropdown_instances, "m", _RhSecondaryNavDropdown_open).call(this) : __classPrivateFieldGet(this, _RhSecondaryNavDropdown_instances, "m", _RhSecondaryNavDropdown_close).call(this);
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
_RhSecondaryNavDropdown_slots = new WeakMap(), _RhSecondaryNavDropdown_logger = new WeakMap(), _RhSecondaryNavDropdown_instances = new WeakSet(), _RhSecondaryNavDropdown_open = function _RhSecondaryNavDropdown_open() {
    const link = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    // menu as a RhSecondaryNavMenu in the slotted child is specific to rh-secondary-nav.
    // If this component is abstracted to a standalone component. The RhSecondaryNavMenu
    // could possibly become a sub component of the abstraction instead.
    const menu = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu);
    menu.visible = true;
}, _RhSecondaryNavDropdown_close = function _RhSecondaryNavDropdown_close() {
    const link = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    // Same as comment in #open()
    // The RhSecondaryNavMenu could possibly become a sub component of the abstraction instead.
    const menu = __classPrivateFieldGet(this, _RhSecondaryNavDropdown_slots, "f").getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu);
    menu.visible = false;
};
RhSecondaryNavDropdown.styles = [styles];
__decorate([
    query('#container')
], RhSecondaryNavDropdown.prototype, "_container", void 0);
__decorate([
    observed,
    state()
], RhSecondaryNavDropdown.prototype, "expanded", void 0);
__decorate([
    bound
], RhSecondaryNavDropdown.prototype, "_clickHandler", null);
RhSecondaryNavDropdown = __decorate([
    customElement('rh-secondary-nav-dropdown')
], RhSecondaryNavDropdown);
export { RhSecondaryNavDropdown };
//# sourceMappingURL=rh-secondary-nav-dropdown.js.map