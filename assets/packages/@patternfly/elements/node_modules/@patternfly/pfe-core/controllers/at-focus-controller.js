var _ATFocusController_instances, _ATFocusController_itemsContainerElement, _ATFocusController_atFocusedItemIndex, _ATFocusController_initContainer, _ATFocusController_getNextFocusableItem;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
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
    set atFocusedItemIndex(requestedIndex) {
        const { items, atFocusableItems } = this;
        if (!atFocusableItems.length) {
            __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, requestedIndex, "f");
            return;
        }
        // Fast path: requested item is already focusable
        if (requestedIndex >= 0
            && requestedIndex < items.length
            && atFocusableItems.includes(items[requestedIndex])) {
            __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, requestedIndex, "f");
            return;
        }
        const lastFocusableIndex = items.indexOf(atFocusableItems.at(-1));
        // Navigated before start → wrap to last focusable
        if (requestedIndex < 0) {
            __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, lastFocusableIndex, "f");
            return;
        }
        const firstFocusableIndex = items.indexOf(atFocusableItems[0]);
        // Navigated past end or past last focusable → wrap to first focusable
        if (requestedIndex >= items.length
            || requestedIndex > lastFocusableIndex) {
            __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, firstFocusableIndex, "f");
            return;
        }
        // Before first focusable (e.g. disabled placeholder at index 0).
        // ArrowUp from first focusable → wrap to last; otherwise snap to first.
        if (requestedIndex < firstFocusableIndex) {
            __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, __classPrivateFieldGet(this, _ATFocusController_atFocusedItemIndex, "f") === firstFocusableIndex ? lastFocusableIndex
                : firstFocusableIndex, "f");
            return;
        }
        // Mid-list non-focusable item: find nearest focusable in the navigation direction
        __classPrivateFieldSet(this, _ATFocusController_atFocusedItemIndex, items.indexOf(__classPrivateFieldGet(this, _ATFocusController_instances, "m", _ATFocusController_getNextFocusableItem).call(this, requestedIndex)), "f");
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
     * Initialize the items and itemsContainerElement fields.
     * Call this when the list of items has changed
     * (e.g. when a parent controller sets items).
     * @internal not for use by element authors
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
            case 'Home': {
                if (!(event.target instanceof HTMLElement
                    && (event.target.hasAttribute('aria-activedescendant')
                        || event.target.ariaActiveDescendantElement))) {
                    // Use first focusable index so the setter doesn't see 0 (reserved for Up-from-first wrap).
                    const first = this.atFocusableItems.at(0);
                    this.atFocusedItemIndex = first != null ? this.items.indexOf(first) : 0;
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            }
            case 'End': {
                if (!(event.target instanceof HTMLElement
                    && (event.target.hasAttribute('aria-activedescendant')
                        || event.target.ariaActiveDescendantElement))) {
                    // Use last focusable index for consistency with lists that have non-focusable items.
                    const last = this.atFocusableItems.at(-1);
                    this.atFocusedItemIndex = last != null ? this.items.indexOf(last) : this.items.length - 1;
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            }
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
}, _ATFocusController_getNextFocusableItem = function _ATFocusController_getNextFocusableItem(requestedIndex) {
    const { items, atFocusableItems } = this;
    if (requestedIndex > __classPrivateFieldGet(this, _ATFocusController_atFocusedItemIndex, "f")) {
        return atFocusableItems.find(item => items.indexOf(item) > requestedIndex);
    }
    else {
        return atFocusableItems.findLast(item => items.indexOf(item) < requestedIndex);
    }
};
//# sourceMappingURL=at-focus-controller.js.map