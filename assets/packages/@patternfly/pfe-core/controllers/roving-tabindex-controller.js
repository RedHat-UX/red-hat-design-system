var _RovingTabindexController_logger, _RovingTabindexController_gainedInitialFocus, _RovingTabindexController_itemsSet;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { isServer } from 'lit';
import { ATFocusController } from './at-focus-controller.js';
import { Logger } from './logger.js';
import { bound } from '../decorators/bound.js';
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving tabindex][rti]
 *
 * [rti]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export class RovingTabindexController extends ATFocusController {
    static of(host, options) {
        return new RovingTabindexController(host, options);
    }
    get atFocusedItemIndex() {
        return super.atFocusedItemIndex;
    }
    /**
     * Sets the DOM Focus on the item with assistive technology focus
     * @param item item
     */
    set atFocusedItemIndex(index) {
        super.atFocusedItemIndex = index;
        const item = this.items.at(this.atFocusedItemIndex);
        for (const i of this.items) {
            i.tabIndex = item === i ? 0 : -1;
        }
        if (__classPrivateFieldGet(this, _RovingTabindexController_gainedInitialFocus, "f")) {
            item?.focus();
        }
        this.host.requestUpdate();
    }
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
        __classPrivateFieldSet(this, _RovingTabindexController_itemsSet, new Set(items), "f");
        const pivot = Math.max(0, this.atFocusedItemIndex);
        const [firstFocusable] = this.atFocusableItems;
        const firstFocusableIndex = firstFocusable ? items.indexOf(firstFocusable) : -1;
        const pivotFocusableIndex = items.indexOf(this.items
            .slice(pivot)
            .concat(this.items.slice(0, pivot))
            .find(item => this.atFocusableItems.includes(item)));
        this.atFocusedItemIndex = Math.max(firstFocusableIndex, pivotFocusableIndex);
        this.host.requestUpdate();
    }
    constructor(host, options) {
        super(host, options);
        this.host = host;
        _RovingTabindexController_logger.set(this, new Logger(this.host));
        _RovingTabindexController_gainedInitialFocus.set(this, false);
        _RovingTabindexController_itemsSet.set(this, new Set());
        this.initItems();
        const container = options.getItemsContainer?.() ?? this.host;
        if (!isServer) {
            if (container instanceof HTMLElement) {
                container.addEventListener('focusin', () => __classPrivateFieldSet(this, _RovingTabindexController_gainedInitialFocus, true, "f"), { once: true });
            }
            else {
                __classPrivateFieldGet(this, _RovingTabindexController_logger, "f").warn('RovingTabindexController requires a getItemsContainer function');
            }
        }
    }
    onKeydown(event) {
        if (!event.ctrlKey
            && !event.altKey
            && !event.metaKey
            && !!this.atFocusableItems.length
            && !!event.composedPath().some(node => __classPrivateFieldGet(this, _RovingTabindexController_itemsSet, "f").has(node))) {
            super.onKeydown(event);
        }
    }
}
_RovingTabindexController_logger = new WeakMap(), _RovingTabindexController_gainedInitialFocus = new WeakMap(), _RovingTabindexController_itemsSet = new WeakMap();
__decorate([
    bound
], RovingTabindexController.prototype, "onKeydown", null);
//# sourceMappingURL=roving-tabindex-controller.js.map