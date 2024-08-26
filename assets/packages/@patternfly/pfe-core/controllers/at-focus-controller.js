var _ATFocusController_instances, _ATFocusController_itemsContainerElement, _ATFocusController_atFocusedItemIndex, _ATFocusController_initContainer;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
import { bound } from '../decorators/bound.js';
function isATFocusableItem(el) {
    return !!el
        && el.ariaHidden !== 'true'
        && !el.hasAttribute('inert')
        && !el.hasAttribute('hidden');
}
export class ATFocusController {
    /**
     * Index of the Item which currently has assistive technology focus
     * Set this to change focus. Setting to an out-of-bounds value will
     * wrap around to the other side of the list.
     */
    get atFocusedItemIndex() {
        return __classPrivateFieldGet(this, _ATFocusController_atFocusedItemIndex, "f");
    }
    set atFocusedItemIndex(index) {
        const previousIndex = __classPrivateFieldGet(this, _ATFocusController_atFocusedItemIndex, "f");
        const direction = index > previousIndex ? 1 : -1;
        const { items, atFocusableItems } = this;
        const itemsIndexOfLastATFocusableItem = items.indexOf(this.atFocusableItems.at(-1));
        let itemToGainFocus = items.at(index);
        let itemToGainFocusIsFocusable = atFocusableItems.includes(itemToGainFocus);
        if (atFocusableItems.length) {
            let count = 0;
            while (!itemToGainFocus || !itemToGainFocusIsFocusable && count++ <= 1000) {
                if (index < 0) {
                    index = itemsIndexOfLastATFocusableItem;
                }
                else if (index >= itemsIndexOfLastATFocusableItem) {
                    index = 0;
                }
                else {
                    index = index + direction;
                }
                itemToGainFocus = items.at(index);
                itemToGainFocusIsFocusable = atFocusableItems.includes(itemToGainFocus);
            }
            if (count >= 1000) {
                throw new Error('Could not atFocusedItemIndex');
            }
        }
        __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, index, "f");
    }
    /** Elements which control the items container e.g. a combobox input */
    get controlsElements() {
        return this.options.getControlsElements?.() ?? [];
    }
    /** All items which are able to receive assistive technology focus */
    get atFocusableItems() {
        return this._items.filter(isATFocusableItem);
    }
    /** The element containing focusable items, e.g. a listbox */
    get itemsContainerElement() {
        return __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f") ?? null;
    }
    set itemsContainerElement(container) {
        if (container !== __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f")) {
            __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f")?.removeEventListener('keydown', this.onKeydown);
            __classPrivateFieldSet(this, _ATFocusController_itemsContainerElement, container, "f");
            __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f")?.addEventListener('keydown', this.onKeydown);
            this.host.requestUpdate();
        }
    }
    constructor(host, options) {
        _ATFocusController_instances.add(this);
        this.host = host;
        this.options = options;
        _ATFocusController_itemsContainerElement.set(this, null);
        _ATFocusController_atFocusedItemIndex.set(this, -1);
        this._items = [];
        this.host.updateComplete.then(() => this.initItems());
    }
    /**
     * Initialize the items and itemsContainerElement fields
     */
    initItems() {
        this.items = this.options.getItems();
        this.itemsContainerElement ?? (this.itemsContainerElement = __classPrivateFieldGet(this, _ATFocusController_instances, "m", _ATFocusController_initContainer).call(this));
    }
    hostConnected() {
        this.hostUpdate();
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f")?.removeEventListener('keydown', this.onKeydown);
    }
    hostUpdate() {
        this.itemsContainerElement ?? (this.itemsContainerElement = __classPrivateFieldGet(this, _ATFocusController_instances, "m", _ATFocusController_initContainer).call(this));
    }
    /**
     * Override and conditionally call `super.onKeydown` to filter out keyboard events
     * which should not result in a focus change. Ensure that subclass' method is bound
     * @param event keyboard event
     */
    onKeydown(event) {
        const orientation = this.options.getOrientation?.() ?? __classPrivateFieldGet(this, _ATFocusController_itemsContainerElement, "f")
            ?.getAttribute('aria-orientation');
        const item = this._items.at(this.atFocusedItemIndex);
        const horizontalOnly = orientation === 'horizontal'
            || item?.tagName === 'SELECT'
            || item?.getAttribute('role') === 'spinbutton';
        const verticalOnly = orientation === 'vertical';
        switch (event.key) {
            case 'ArrowLeft':
                if (verticalOnly) {
                    return;
                }
                this.atFocusedItemIndex--;
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'ArrowRight':
                if (verticalOnly) {
                    return;
                }
                this.atFocusedItemIndex++;
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'ArrowUp':
                if (horizontalOnly) {
                    return;
                }
                this.atFocusedItemIndex--;
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'ArrowDown':
                if (horizontalOnly) {
                    return;
                }
                this.atFocusedItemIndex++;
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'Home':
                if (!(event.target instanceof HTMLElement
                    && (event.target.hasAttribute('aria-activedescendant')
                        || event.target.ariaActiveDescendantElement))) {
                    this.atFocusedItemIndex = 0;
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            case 'End':
                if (!(event.target instanceof HTMLElement
                    && (event.target.hasAttribute('aria-activedescendant')
                        || event.target.ariaActiveDescendantElement))) {
                    this.atFocusedItemIndex = this.items.length - 1;
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            default:
                break;
        }
        this.host.requestUpdate();
    }
    ;
}
_ATFocusController_itemsContainerElement = new WeakMap(), _ATFocusController_atFocusedItemIndex = new WeakMap(), _ATFocusController_instances = new WeakSet(), _ATFocusController_initContainer = function _ATFocusController_initContainer() {
    return this.options.getItemsContainer?.()
        ?? (!isServer && this.host instanceof HTMLElement ? this.host : null);
};
//# sourceMappingURL=at-focus-controller.js.map