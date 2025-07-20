var _RhMenu_instances, _RhMenu_tabindex, _RhMenu_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:contents}slot{display:inline-flex;align-items:stretch;flex-direction:column;width:max-content}::slotted(a){padding:5px!important;color:var(--rh-color-interactive-primary-default)}::slotted(a:hover){color:var(--rh-color-interactive-primary-hover)!important}::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default)!important}::slotted(a:visited:hover){color:var(--rh-color-interactive-primary-visited-default)!important}`;
export class MenuToggleEvent extends Event {
    constructor(open, menu) {
        super('toggle', { bubbles: true });
        this.open = open;
        this.menu = menu;
    }
}
/**
 * Menu
 *
 * @alias menu
 *
 * @slot - menu items
 */
let RhMenu = class RhMenu extends LitElement {
    constructor() {
        super(...arguments);
        _RhMenu_instances.add(this);
        _RhMenu_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => this.getItems(this._menuItems),
        }));
    }
    /**
     * override or set to add items to the roving tab index controller
     * @param items original list of items
     */
    getItems(items) {
        return items;
    }
    get activeItem() {
        return __classPrivateFieldGet(this, _RhMenu_tabindex, "f").items.at(__classPrivateFieldGet(this, _RhMenu_tabindex, "f").atFocusedItemIndex);
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('menu'));
        this.setAttribute('role', 'menu'); // TODO: use InternalsController.role when support/polyfill is better
        if (!isServer) {
            __classPrivateFieldGet(this, _RhMenu_instances, "m", _RhMenu_onSlotchange).call(this);
        }
    }
    render() {
        return html `
      <slot part="menu"
            @slotchange="${__classPrivateFieldGet(this, _RhMenu_instances, "m", _RhMenu_onSlotchange)}"></slot>
    `;
    }
    activateItem(item) {
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _RhMenu_tabindex, "f").items.indexOf(item);
    }
    focus() {
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").items[__classPrivateFieldGet(this, _RhMenu_tabindex, "f").atFocusedItemIndex]?.focus();
    }
};
_RhMenu_tabindex = new WeakMap();
_RhMenu_instances = new WeakSet();
_RhMenu_onSlotchange = function _RhMenu_onSlotchange() {
    for (const item of this._menuItems ?? []) {
        item.setAttribute('role', 'menuitem');
    }
};
RhMenu.styles = [styles];
RhMenu.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    queryAssignedElements()
], RhMenu.prototype, "_menuItems", void 0);
RhMenu = __decorate([
    customElement('rh-menu'),
    themable
], RhMenu);
export { RhMenu };
//# sourceMappingURL=rh-menu.js.map