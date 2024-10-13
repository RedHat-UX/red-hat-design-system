var _PfDropdownMenu_instances, _PfDropdownMenu_internals, _PfDropdownMenu_items_get, _PfDropdownMenu_tabindex, _PfDropdownMenu_onItemChange, _PfDropdownMenu_onSlotChange, _PfDropdownMenu_onMenuitemFocusin, _PfDropdownMenu_onMenuitemClick, _PfDropdownMenu_focusItem, _PfDropdownMenu_getSlottedItems;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { consume } from '@lit/context';
import { state } from 'lit/decorators/state.js';
import { context } from './context.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { PfDropdownItem, DropdownItemChange } from './pf-dropdown-item.js';
import { PfDropdownGroup } from './pf-dropdown-group.js';
import { css } from "lit";
const styles = css `:host {\n  background: var(--pf-c-dropdown__menu--BackgroundColor, #fff);\n}\n\n.disabled {\n  --pf-c-dropdown__menu-item--Color: var(\n    --pf-c-dropdown__menu-item--disabled--Color,\n    var(--pf-global--Color--dark-200, #6a6e73)\n  ) !important;\n  --pf-c-dropdown__menu-item--BackgroundColor: var(\n    --pf-c-dropdown__menu-item--disabled--BackgroundColor,\n    transparent\n  ) !important;\n}\n\n:host([hidden]),\n[hidden] {\n  display: none !important;\n}\n\n::slotted(hr) {\n  margin: 0;\n  border-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  border-style: solid;\n}\n\n::slotted([role="separator"]:not(hr)) {\n  width: 100%;\n  height: 1px;\n  background-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  display: block;\n  pointer-events: none;\n}\n\n`;
import { classMap } from 'lit/directives/class-map.js';
function isDisabledItemClick(event) {
    const item = event.composedPath().find((x) => x instanceof PfDropdownItem);
    return !!item?.disabled;
}
let PfDropdownMenu = class PfDropdownMenu extends LitElement {
    constructor() {
        super(...arguments);
        _PfDropdownMenu_instances.add(this);
        _PfDropdownMenu_internals.set(this, InternalsController.of(this, { role: 'menu' }));
        _PfDropdownMenu_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => __classPrivateFieldGet(this, _PfDropdownMenu_instances, "a", _PfDropdownMenu_items_get),
        }));
    }
    /**
     * current active descendant in menu
     */
    get activeItem() {
        return __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").items.at(__classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").atFocusedItemIndex)
            ?? __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").atFocusableItems.at(0)
            ?? null;
    }
    /**
     * index of current active descendant in menu
     */
    get activeIndex() {
        return __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").atFocusedItemIndex;
    }
    get items() {
        return __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_getSlottedItems).call(this, this.shadowRoot?.querySelector('slot'));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('focusin', __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_onMenuitemFocusin));
        this.addEventListener('click', __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_onMenuitemClick));
    }
    willUpdate() {
        __classPrivateFieldGet(this, _PfDropdownMenu_internals, "f").ariaDisabled = String(!!this.ctx?.disabled);
    }
    render() {
        const { disabled = false } = this.ctx ?? {};
        return html `
      <slot class="${classMap({ disabled })}"
            @slotchange="${__classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_onSlotChange)}"
            @change="${__classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_onItemChange)}"></slot>
    `;
    }
};
_PfDropdownMenu_internals = new WeakMap();
_PfDropdownMenu_tabindex = new WeakMap();
_PfDropdownMenu_instances = new WeakSet();
_PfDropdownMenu_items_get = function _PfDropdownMenu_items_get() {
    return this.items.map(x => x.menuItem);
};
_PfDropdownMenu_onItemChange = function _PfDropdownMenu_onItemChange(event) {
    if (event instanceof DropdownItemChange) {
        __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_onSlotChange).call(this);
    }
};
_PfDropdownMenu_onSlotChange = function _PfDropdownMenu_onSlotChange() {
    __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").items = __classPrivateFieldGet(this, _PfDropdownMenu_instances, "a", _PfDropdownMenu_items_get);
};
_PfDropdownMenu_onMenuitemFocusin = function _PfDropdownMenu_onMenuitemFocusin(event) {
    if (this.ctx?.disabled) {
        event.preventDefault();
        event.stopPropagation();
    }
    else if (event.target instanceof PfDropdownItem) {
        __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_focusItem).call(this, event.target.menuItem);
    }
};
_PfDropdownMenu_onMenuitemClick = function _PfDropdownMenu_onMenuitemClick(event) {
    if (this.ctx?.disabled || isDisabledItemClick(event)) {
        event.preventDefault();
        event.stopPropagation();
    }
    else if (event.target instanceof PfDropdownItem) {
        __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_focusItem).call(this, event.target.menuItem);
    }
};
_PfDropdownMenu_focusItem = function _PfDropdownMenu_focusItem(item) {
    const itemIndex = __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").items.indexOf(item);
    if (itemIndex !== __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").atFocusedItemIndex) {
        __classPrivateFieldGet(this, _PfDropdownMenu_tabindex, "f").atFocusedItemIndex = itemIndex;
    }
};
_PfDropdownMenu_getSlottedItems = function _PfDropdownMenu_getSlottedItems(slot) {
    return slot
        ?.assignedElements()
        .flatMap(element => {
        if (element instanceof HTMLSlotElement) {
            return __classPrivateFieldGet(this, _PfDropdownMenu_instances, "m", _PfDropdownMenu_getSlottedItems).call(this, element);
        }
        else if (element instanceof PfDropdownItem) {
            return [element];
        }
        else if (element instanceof PfDropdownGroup) {
            return Array.from(element.querySelectorAll('pf-dropdown-item'));
        }
        else {
            return [];
        }
    }) ?? [];
};
PfDropdownMenu.styles = [styles];
PfDropdownMenu.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfDropdownMenu.version = "4.0.2";
__decorate([
    consume({ context, subscribe: true }),
    state()
], PfDropdownMenu.prototype, "ctx", void 0);
PfDropdownMenu = __decorate([
    customElement('pf-dropdown-menu')
], PfDropdownMenu);
export { PfDropdownMenu };
//# sourceMappingURL=pf-dropdown-menu.js.map