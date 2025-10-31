var _RhMenu_instances, _RhMenu_items, _RhMenu_tabindex, _RhMenu_internals, _RhMenu_onSlotchange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhMenuItem } from './rh-menu-item.js';
import { RhMenuItemGroup } from './rh-menu-item-group.js';
import { css } from "lit";
const styles = css `:host{display:contents}slot{display:inline-flex;align-items:stretch;flex-direction:column;width:100%}::slotted(a){padding:5px!important;color:var(--rh-color-interactive-primary-default)}::slotted(a:hover){color:var(--rh-color-interactive-primary-hover)!important}::slotted(a:visited){color:var(--rh-color-interactive-primary-visited-default)!important}::slotted(a:visited:hover){color:var(--rh-color-interactive-primary-visited-default)!important}::slotted(hr){border:0;border-top:var(--rh-border-width-sm,1px) solid light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070));width:100%}`;
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
 */
let RhMenu = class RhMenu extends LitElement {
    constructor() {
        super(...arguments);
        _RhMenu_instances.add(this);
        _RhMenu_items.set(this, void 0);
        _RhMenu_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => this.getItems(__classPrivateFieldGet(this, _RhMenu_items, "f") ? __classPrivateFieldGet(this, _RhMenu_items, "f") : this._menuItems),
        }));
        // eslint-disable-next-line no-unused-private-class-members
        _RhMenu_internals.set(this, InternalsController.of(this, { role: 'menubar' }));
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
        __classPrivateFieldGet(this, _RhMenu_instances, "m", _RhMenu_onSlotchange).call(this);
    }
    render() {
        return html `
      <!-- menu items -->
      <slot @slotchange="${__classPrivateFieldGet(this, _RhMenu_instances, "m", _RhMenu_onSlotchange)}" part="menu"></slot>
    `;
    }
    activateItem(item) {
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _RhMenu_tabindex, "f").items.indexOf(item);
    }
    focus() {
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").items[__classPrivateFieldGet(this, _RhMenu_tabindex, "f").atFocusedItemIndex]?.focus();
    }
};
_RhMenu_items = new WeakMap();
_RhMenu_tabindex = new WeakMap();
_RhMenu_internals = new WeakMap();
_RhMenu_instances = new WeakSet();
_RhMenu_onSlotchange = function _RhMenu_onSlotchange() {
    if (!isServer) {
        __classPrivateFieldSet(this, _RhMenu_items, this._menuItems.flatMap((element) => {
            if (element instanceof HTMLSlotElement) {
                const assigned = element.assignedElements().filter((el) => !(el instanceof HTMLHRElement));
                const items = assigned.flatMap(el => {
                    if (el instanceof RhMenuItemGroup) {
                        return Array.from(el.querySelectorAll('rh-menu-item'));
                    }
                    return [el];
                });
                return items;
            }
            else {
                if (element instanceof HTMLHRElement) {
                    // Skip <hr> elements
                    return [];
                }
                if (element instanceof RhMenuItem) {
                    return [element];
                }
                else if (element instanceof RhMenuItemGroup) {
                    return Array.from(element.querySelectorAll('rh-menu-item'));
                }
                else if (element instanceof HTMLElement) {
                    if (!element.hasAttribute('role')) {
                        element.setAttribute('role', 'menuitem');
                    }
                    return [element];
                }
                else {
                    return [];
                }
            }
        }), "f");
        __classPrivateFieldGet(this, _RhMenu_tabindex, "f").hostUpdate();
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