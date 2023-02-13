var _RovingTabindexController_instances, _RovingTabindexController_activeItem, _RovingTabindexController_items, _RovingTabindexController_focusableItems_get, _RovingTabindexController_activeIndex_get, _RovingTabindexController_itemIndex_get, _RovingTabindexController_onKeydown;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
const isFocusableElement = (el) => !!el &&
    !el.hasAttribute('disabled') &&
    !el.ariaHidden &&
    !el.hasAttribute('hidden');
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving
 * tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)
 */
export class RovingTabindexController {
    /**
     * active item of array of items
     */
    get activeItem() {
        return __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f");
    }
    /**
     * first item in array of focusable items
     */
    get firstItem() {
        return __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)[0];
    }
    /**
     * last item in array of focusable items
     */
    get lastItem() {
        return __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).at(-1);
    }
    /**
     * next item  after active item in array of focusable items
     */
    get nextItem() {
        return (__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) < __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).length - 1 ? __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)[__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) + 1]
            : this.firstItem);
    }
    /**
     * previous item  after active item in array of focusable items
     */
    get prevItem() {
        return (__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) > 0 ? __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)[__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) - 1]
            : this.lastItem);
    }
    constructor(host) {
        this.host = host;
        _RovingTabindexController_instances.add(this);
        /** active focusable element */
        _RovingTabindexController_activeItem.set(this, void 0);
        /** array of all focusable elements */
        _RovingTabindexController_items.set(this, []);
        this.host.addController(this);
    }
    /**
     * sets tabindex of item based on whether or not it is active
     */
    updateActiveItem(item) {
        if (item) {
            if (!!__classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f") && item !== __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f")) {
                __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f").tabIndex = -1;
            }
            item.tabIndex = 0;
            __classPrivateFieldSet(this, _RovingTabindexController_activeItem, item, "f");
        }
    }
    /**
     * focuses on an item and sets it as active
     */
    focusOnItem(item) {
        this.updateActiveItem(item || this.firstItem);
        __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f")?.focus();
    }
    /**
     * Focuses next focusable item
     */
    updateItems(items) {
        const sequence = [...items.slice(__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_itemIndex_get)), ...items.slice(0, __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_itemIndex_get))];
        const first = sequence.find(item => __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).includes(item));
        this.focusOnItem(first || this.firstItem);
    }
    /**
     * from array of HTML items, and sets active items
     */
    initItems(items) {
        __classPrivateFieldSet(this, _RovingTabindexController_items, items ?? [], "f");
        const focusableItems = __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get);
        const [focusableItem] = focusableItems;
        __classPrivateFieldSet(this, _RovingTabindexController_activeItem, focusableItem, "f");
        for (const item of focusableItems) {
            item.tabIndex = __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f") === item ? 0 : -1;
        }
    }
    hostConnected() {
        this.host.addEventListener('keydown', __classPrivateFieldGet(this, _RovingTabindexController_instances, "m", _RovingTabindexController_onKeydown).bind(this));
    }
}
_RovingTabindexController_activeItem = new WeakMap(), _RovingTabindexController_items = new WeakMap(), _RovingTabindexController_instances = new WeakSet(), _RovingTabindexController_focusableItems_get = function _RovingTabindexController_focusableItems_get() {
    return __classPrivateFieldGet(this, _RovingTabindexController_items, "f").filter(isFocusableElement);
}, _RovingTabindexController_activeIndex_get = function _RovingTabindexController_activeIndex_get() {
    return !!__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get) && !!this.activeItem ? __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).indexOf(this.activeItem) : -1;
}, _RovingTabindexController_itemIndex_get = function _RovingTabindexController_itemIndex_get() {
    return this.activeItem ? __classPrivateFieldGet(this, _RovingTabindexController_items, "f").indexOf(this.activeItem) : -1;
}, _RovingTabindexController_onKeydown = function _RovingTabindexController_onKeydown(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).length < 1) {
        return;
    }
    const item = this.activeItem;
    let shouldPreventDefault = false;
    const horizontalOnly = !item ? false
        : item.tagName === 'SELECT' ||
            item.getAttribute('aria-expanded') === 'true' ||
            item.getAttribute('role') === 'spinbutton';
    switch (event.key) {
        case 'ArrowLeft':
            this.focusOnItem(this.prevItem);
            shouldPreventDefault = true;
            break;
        case 'ArrowRight':
            this.focusOnItem(this.nextItem);
            shouldPreventDefault = true;
            break;
        case 'ArrowUp':
            if (horizontalOnly) {
                return;
            }
            this.focusOnItem(this.prevItem);
            shouldPreventDefault = true;
            break;
        case 'ArrowDown':
            if (horizontalOnly) {
                return;
            }
            this.focusOnItem(this.nextItem);
            shouldPreventDefault = true;
            break;
        case 'Home':
            this.focusOnItem(this.firstItem);
            shouldPreventDefault = true;
            break;
        case 'PageUp':
            if (horizontalOnly) {
                return;
            }
            this.focusOnItem(this.firstItem);
            shouldPreventDefault = true;
            break;
        case 'End':
            this.focusOnItem(this.lastItem);
            shouldPreventDefault = true;
            break;
        case 'PageDown':
            if (horizontalOnly) {
                return;
            }
            this.focusOnItem(this.lastItem);
            shouldPreventDefault = true;
            break;
        default:
            break;
    }
    if (shouldPreventDefault) {
        event.stopPropagation();
        event.preventDefault();
    }
};
//# sourceMappingURL=roving-tabindex-controller.js.map