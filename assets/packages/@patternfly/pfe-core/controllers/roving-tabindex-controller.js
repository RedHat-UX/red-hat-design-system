var _RovingTabindexController_instances, _a, _RovingTabindexController_activeItem, _RovingTabindexController_itemsContainer, _RovingTabindexController_items, _RovingTabindexController_gainedInitialFocus, _RovingTabindexController_focusableItems_get, _RovingTabindexController_activeIndex_get, _RovingTabindexController_itemIndex_get, _RovingTabindexController_options, _RovingTabindexController_initContainer, _RovingTabindexController_onKeydown;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
const isFocusableElement = (el) => !!el &&
    !el.ariaHidden &&
    !el.hasAttribute('hidden');
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving tabindex][rti]
 *
 * [rti]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export class RovingTabindexController {
    static of(host, options) {
        return new _a(host, options);
    }
    /**
     * active item of array of items
     */
    get activeItem() {
        return __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f");
    }
    /**
     * all items from array
     */
    get items() {
        return __classPrivateFieldGet(this, _RovingTabindexController_items, "f");
    }
    /**
     * all focusable items from array
     */
    get focusableItems() {
        return __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get);
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
        return (__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) >= __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).length - 1 ? this.firstItem
            : __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)[__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) + 1]);
    }
    /**
     * previous item  after active item in array of focusable items
     */
    get prevItem() {
        return (__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) > 0 ? __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)[__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_activeIndex_get) - 1]
            : this.lastItem);
    }
    constructor(host, options) {
        _RovingTabindexController_instances.add(this);
        this.host = host;
        /** active focusable element */
        _RovingTabindexController_activeItem.set(this, void 0);
        /** closest ancestor containing items */
        _RovingTabindexController_itemsContainer.set(this, void 0);
        /** array of all focusable elements */
        _RovingTabindexController_items.set(this, []);
        /** flags whether the host's element has gained focus at least once */
        _RovingTabindexController_gainedInitialFocus.set(this, false);
        _RovingTabindexController_options.set(this, void 0);
        /**
         * handles keyboard navigation
         */
        _RovingTabindexController_onKeydown.set(this, (event) => {
            if (!(event instanceof KeyboardEvent) ||
                event.ctrlKey ||
                event.altKey ||
                event.metaKey ||
                !__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).length ||
                !event.composedPath().some(x => __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).includes(x))) {
                return;
            }
            const orientation = __classPrivateFieldGet(this, _RovingTabindexController_options, "f").getHTMLElement()?.getAttribute('aria-orientation');
            const item = this.activeItem;
            let shouldPreventDefault = false;
            const horizontalOnly = !item ? false
                : item.tagName === 'SELECT' ||
                    item.getAttribute('role') === 'spinbutton' || orientation === 'horizontal';
            const verticalOnly = orientation === 'vertical';
            switch (event.key) {
                case 'ArrowLeft':
                    if (verticalOnly) {
                        return;
                    }
                    this.setActiveItem(this.prevItem);
                    shouldPreventDefault = true;
                    break;
                case 'ArrowRight':
                    if (verticalOnly) {
                        return;
                    }
                    this.setActiveItem(this.nextItem);
                    shouldPreventDefault = true;
                    break;
                case 'ArrowUp':
                    if (horizontalOnly) {
                        return;
                    }
                    this.setActiveItem(this.prevItem);
                    shouldPreventDefault = true;
                    break;
                case 'ArrowDown':
                    if (horizontalOnly) {
                        return;
                    }
                    this.setActiveItem(this.nextItem);
                    shouldPreventDefault = true;
                    break;
                case 'Home':
                    this.setActiveItem(this.firstItem);
                    shouldPreventDefault = true;
                    break;
                case 'End':
                    this.setActiveItem(this.lastItem);
                    shouldPreventDefault = true;
                    break;
                default:
                    break;
            }
            if (shouldPreventDefault) {
                event.stopPropagation();
                event.preventDefault();
            }
        });
        __classPrivateFieldSet(this, _RovingTabindexController_options, {
            getHTMLElement: options?.getHTMLElement ??
                options?.getElement ??
                (() => host instanceof HTMLElement ? host : null),
            getItems: options?.getItems,
            getItemContainer: options?.getItemContainer,
        }, "f");
        const instance = _a.hosts.get(host);
        if (instance) {
            return instance;
        }
        _a.hosts.set(host, this);
        this.host.addController(this);
        this.updateItems();
    }
    hostUpdated() {
        const oldContainer = __classPrivateFieldGet(this, _RovingTabindexController_itemsContainer, "f");
        const newContainer = __classPrivateFieldGet(this, _RovingTabindexController_options, "f").getHTMLElement();
        if (oldContainer !== newContainer) {
            oldContainer?.removeEventListener('keydown', __classPrivateFieldGet(this, _RovingTabindexController_onKeydown, "f"));
            _a.elements.delete(oldContainer);
            this.updateItems();
        }
        if (newContainer) {
            __classPrivateFieldGet(this, _RovingTabindexController_instances, "m", _RovingTabindexController_initContainer).call(this, newContainer);
        }
    }
    /**
     * removes event listeners from items container
     */
    hostDisconnected() {
        __classPrivateFieldGet(this, _RovingTabindexController_itemsContainer, "f")?.removeEventListener('keydown', __classPrivateFieldGet(this, _RovingTabindexController_onKeydown, "f"));
        __classPrivateFieldSet(this, _RovingTabindexController_itemsContainer, undefined, "f");
        __classPrivateFieldSet(this, _RovingTabindexController_gainedInitialFocus, false, "f");
    }
    /**
     * Sets the active item and focuses it
     */
    setActiveItem(item) {
        __classPrivateFieldSet(this, _RovingTabindexController_activeItem, item, "f");
        for (const item of __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get)) {
            item.tabIndex = __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f") === item ? 0 : -1;
        }
        this.host.requestUpdate();
        if (__classPrivateFieldGet(this, _RovingTabindexController_gainedInitialFocus, "f")) {
            __classPrivateFieldGet(this, _RovingTabindexController_activeItem, "f")?.focus();
        }
    }
    /**
     * Focuses next focusable item
     */
    updateItems(items = __classPrivateFieldGet(this, _RovingTabindexController_options, "f").getItems?.() ?? []) {
        __classPrivateFieldSet(this, _RovingTabindexController_items, items, "f");
        const sequence = [...__classPrivateFieldGet(this, _RovingTabindexController_items, "f").slice(__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_itemIndex_get) - 1), ...__classPrivateFieldGet(this, _RovingTabindexController_items, "f").slice(0, __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_itemIndex_get) - 1)];
        const first = sequence.find(item => __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).includes(item));
        const [focusableItem] = __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get);
        const activeItem = focusableItem ?? first ?? this.firstItem;
        this.setActiveItem(activeItem);
    }
    /** @deprecated use setActiveItem */
    focusOnItem(item) {
        this.setActiveItem(item);
    }
    /**
     * from array of HTML items, and sets active items
     * @deprecated: use getItems and getItemContainer option functions
     */
    initItems(items, itemsContainer) {
        const element = itemsContainer ?? __classPrivateFieldGet(this, _RovingTabindexController_options, "f")?.getItemContainer?.() ?? __classPrivateFieldGet(this, _RovingTabindexController_options, "f").getHTMLElement();
        if (element) {
            __classPrivateFieldGet(this, _RovingTabindexController_instances, "m", _RovingTabindexController_initContainer).call(this, element);
        }
        this.updateItems(items);
    }
}
_a = RovingTabindexController, _RovingTabindexController_activeItem = new WeakMap(), _RovingTabindexController_itemsContainer = new WeakMap(), _RovingTabindexController_items = new WeakMap(), _RovingTabindexController_gainedInitialFocus = new WeakMap(), _RovingTabindexController_options = new WeakMap(), _RovingTabindexController_onKeydown = new WeakMap(), _RovingTabindexController_instances = new WeakSet(), _RovingTabindexController_focusableItems_get = function _RovingTabindexController_focusableItems_get() {
    return __classPrivateFieldGet(this, _RovingTabindexController_items, "f").filter(isFocusableElement);
}, _RovingTabindexController_activeIndex_get = function _RovingTabindexController_activeIndex_get() {
    return !!__classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get) && !!this.activeItem ? __classPrivateFieldGet(this, _RovingTabindexController_instances, "a", _RovingTabindexController_focusableItems_get).indexOf(this.activeItem) : -1;
}, _RovingTabindexController_itemIndex_get = function _RovingTabindexController_itemIndex_get() {
    return this.activeItem ? __classPrivateFieldGet(this, _RovingTabindexController_items, "f").indexOf(this.activeItem) : -1;
}, _RovingTabindexController_initContainer = function _RovingTabindexController_initContainer(container) {
    _a.elements.set(container, this);
    __classPrivateFieldSet(this, _RovingTabindexController_itemsContainer, container, "f");
    __classPrivateFieldGet(this, _RovingTabindexController_itemsContainer, "f").addEventListener('keydown', __classPrivateFieldGet(this, _RovingTabindexController_onKeydown, "f"));
    __classPrivateFieldGet(this, _RovingTabindexController_itemsContainer, "f").addEventListener('focusin', () => {
        __classPrivateFieldSet(this, _RovingTabindexController_gainedInitialFocus, true, "f");
    }, { once: true });
};
RovingTabindexController.hosts = new WeakMap();
/** @internal */
RovingTabindexController.elements = new WeakMap();
//# sourceMappingURL=roving-tabindex-controller.js.map