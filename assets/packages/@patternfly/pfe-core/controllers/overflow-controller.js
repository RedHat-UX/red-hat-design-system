var _OverflowController_instances, _OverflowController_container, _OverflowController_items, _OverflowController_scrollTimeoutDelay, _OverflowController_scrollTimeout, _OverflowController_hideOverflowButtons, _OverflowController_setOverflowState;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isElementInView } from '@patternfly/pfe-core/functions/isElementInView.js';
export class OverflowController {
    get firstItem() {
        return __classPrivateFieldGet(this, _OverflowController_items, "f").at(0);
    }
    get lastItem() {
        return __classPrivateFieldGet(this, _OverflowController_items, "f").at(-1);
    }
    constructor(host, options) {
        _OverflowController_instances.add(this);
        this.host = host;
        this.options = options;
        /** Overflow container */
        _OverflowController_container.set(this, void 0);
        /** Children that can overflow */
        _OverflowController_items.set(this, []);
        _OverflowController_scrollTimeoutDelay.set(this, 0);
        _OverflowController_scrollTimeout.set(this, void 0);
        /** Default state */
        _OverflowController_hideOverflowButtons.set(this, false);
        this.showScrollButtons = false;
        this.overflowLeft = false;
        this.overflowRight = false;
        this.onScroll = () => {
            clearTimeout(__classPrivateFieldGet(this, _OverflowController_scrollTimeout, "f"));
            __classPrivateFieldSet(this, _OverflowController_scrollTimeout, setTimeout(() => __classPrivateFieldGet(this, _OverflowController_instances, "m", _OverflowController_setOverflowState).call(this), __classPrivateFieldGet(this, _OverflowController_scrollTimeoutDelay, "f")), "f");
        };
        this.host.addController(this);
        if (options?.hideOverflowButtons) {
            __classPrivateFieldSet(this, _OverflowController_hideOverflowButtons, options?.hideOverflowButtons, "f");
        }
    }
    init(container, items) {
        __classPrivateFieldSet(this, _OverflowController_container, container, "f");
        // convert HTMLCollection to HTMLElement[]
        __classPrivateFieldSet(this, _OverflowController_items, items, "f");
    }
    scrollLeft() {
        if (!__classPrivateFieldGet(this, _OverflowController_container, "f")) {
            return;
        }
        const leftScroll = __classPrivateFieldGet(this, _OverflowController_container, "f").scrollLeft - __classPrivateFieldGet(this, _OverflowController_container, "f").clientWidth;
        __classPrivateFieldGet(this, _OverflowController_container, "f").scroll({ left: leftScroll, behavior: 'smooth' });
        __classPrivateFieldGet(this, _OverflowController_instances, "m", _OverflowController_setOverflowState).call(this);
    }
    scrollRight() {
        if (!__classPrivateFieldGet(this, _OverflowController_container, "f")) {
            return;
        }
        const leftScroll = __classPrivateFieldGet(this, _OverflowController_container, "f").scrollLeft + __classPrivateFieldGet(this, _OverflowController_container, "f").clientWidth;
        __classPrivateFieldGet(this, _OverflowController_container, "f").scroll({ left: leftScroll, behavior: 'smooth' });
        __classPrivateFieldGet(this, _OverflowController_instances, "m", _OverflowController_setOverflowState).call(this);
    }
    update() {
        __classPrivateFieldGet(this, _OverflowController_instances, "m", _OverflowController_setOverflowState).call(this);
    }
    hostConnected() {
        this.onScroll();
        __classPrivateFieldGet(this, _OverflowController_instances, "m", _OverflowController_setOverflowState).call(this);
    }
}
_OverflowController_container = new WeakMap(), _OverflowController_items = new WeakMap(), _OverflowController_scrollTimeoutDelay = new WeakMap(), _OverflowController_scrollTimeout = new WeakMap(), _OverflowController_hideOverflowButtons = new WeakMap(), _OverflowController_instances = new WeakSet(), _OverflowController_setOverflowState = function _OverflowController_setOverflowState() {
    if (!this.firstItem || !this.lastItem || !__classPrivateFieldGet(this, _OverflowController_container, "f")) {
        return;
    }
    this.overflowLeft = !__classPrivateFieldGet(this, _OverflowController_hideOverflowButtons, "f") && !isElementInView(__classPrivateFieldGet(this, _OverflowController_container, "f"), this.firstItem);
    this.overflowRight = !__classPrivateFieldGet(this, _OverflowController_hideOverflowButtons, "f") && !isElementInView(__classPrivateFieldGet(this, _OverflowController_container, "f"), this.lastItem);
    let scrollButtonsWidth = 0;
    if (this.overflowLeft || this.overflowRight) {
        scrollButtonsWidth = (__classPrivateFieldGet(this, _OverflowController_container, "f").parentElement?.querySelector('button')?.getBoundingClientRect().width || 0) * 2;
    }
    this.showScrollButtons = !__classPrivateFieldGet(this, _OverflowController_hideOverflowButtons, "f") &&
        __classPrivateFieldGet(this, _OverflowController_container, "f").scrollWidth > (__classPrivateFieldGet(this, _OverflowController_container, "f").clientWidth + scrollButtonsWidth);
    this.host.requestUpdate();
};
//# sourceMappingURL=overflow-controller.js.map