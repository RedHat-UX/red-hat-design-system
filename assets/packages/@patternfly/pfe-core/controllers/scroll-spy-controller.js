var _ScrollSpyController_instances, _ScrollSpyController_tagNames, _ScrollSpyController_activeAttribute, _ScrollSpyController_io, _ScrollSpyController_passedLinks, _ScrollSpyController_force, _ScrollSpyController_intersected, _ScrollSpyController_root, _ScrollSpyController_rootMargin, _ScrollSpyController_threshold, _ScrollSpyController_rootNode, _ScrollSpyController_getHash, _ScrollSpyController_linkChildren_get, _ScrollSpyController_initIo, _ScrollSpyController_markPassed, _ScrollSpyController_setActive, _ScrollSpyController_nextIntersection, _ScrollSpyController_onIo;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export class ScrollSpyController {
    get root() {
        return __classPrivateFieldGet(this, _ScrollSpyController_root, "f");
    }
    set root(v) {
        __classPrivateFieldSet(this, _ScrollSpyController_root, v, "f");
        __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.disconnect();
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_initIo).call(this);
    }
    get rootMargin() {
        return __classPrivateFieldGet(this, _ScrollSpyController_rootMargin, "f");
    }
    set rootMargin(v) {
        __classPrivateFieldSet(this, _ScrollSpyController_rootMargin, v, "f");
        __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.disconnect();
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_initIo).call(this);
    }
    get threshold() {
        return __classPrivateFieldGet(this, _ScrollSpyController_threshold, "f");
    }
    set threshold(v) {
        __classPrivateFieldSet(this, _ScrollSpyController_threshold, v, "f");
        __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.disconnect();
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_initIo).call(this);
    }
    constructor(host, options) {
        this.host = host;
        _ScrollSpyController_instances.add(this);
        _ScrollSpyController_tagNames.set(this, void 0);
        _ScrollSpyController_activeAttribute.set(this, void 0);
        _ScrollSpyController_io.set(this, void 0);
        /** Which link's targets have already scrolled past? */
        _ScrollSpyController_passedLinks.set(this, new Set());
        /** Ignore intersections? */
        _ScrollSpyController_force.set(this, false);
        /** Has the intersection observer found an element? */
        _ScrollSpyController_intersected.set(this, false);
        _ScrollSpyController_root.set(this, void 0);
        _ScrollSpyController_rootMargin.set(this, void 0);
        _ScrollSpyController_threshold.set(this, void 0);
        _ScrollSpyController_rootNode.set(this, void 0);
        _ScrollSpyController_getHash.set(this, void 0);
        host.addController(this);
        __classPrivateFieldSet(this, _ScrollSpyController_tagNames, options.tagNames, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_root, options.root, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_rootMargin, options.rootMargin, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_activeAttribute, options.activeAttribute ?? 'active', "f");
        __classPrivateFieldSet(this, _ScrollSpyController_threshold, options.threshold ?? 0.85, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_rootNode, options.rootNode ?? host.getRootNode(), "f");
        __classPrivateFieldSet(this, _ScrollSpyController_getHash, options?.getHash ?? ((el) => el.getAttribute('href')), "f");
    }
    hostConnected() {
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_initIo).call(this);
    }
    /** Explicitly set the active item */
    async setActive(link) {
        __classPrivateFieldSet(this, _ScrollSpyController_force, true, "f");
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(this, link);
        let sawActive = false;
        for (const child of __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get)) {
            __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_markPassed).call(this, child, !sawActive);
            if (child === link) {
                sawActive = true;
            }
        }
        await __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_nextIntersection).call(this);
        __classPrivateFieldSet(this, _ScrollSpyController_force, false, "f");
    }
}
_ScrollSpyController_tagNames = new WeakMap(), _ScrollSpyController_activeAttribute = new WeakMap(), _ScrollSpyController_io = new WeakMap(), _ScrollSpyController_passedLinks = new WeakMap(), _ScrollSpyController_force = new WeakMap(), _ScrollSpyController_intersected = new WeakMap(), _ScrollSpyController_root = new WeakMap(), _ScrollSpyController_rootMargin = new WeakMap(), _ScrollSpyController_threshold = new WeakMap(), _ScrollSpyController_rootNode = new WeakMap(), _ScrollSpyController_getHash = new WeakMap(), _ScrollSpyController_instances = new WeakSet(), _ScrollSpyController_linkChildren_get = function _ScrollSpyController_linkChildren_get() {
    return Array.from(this.host.querySelectorAll(__classPrivateFieldGet(this, _ScrollSpyController_tagNames, "f").join(',')))
        .filter(__classPrivateFieldGet(this, _ScrollSpyController_getHash, "f"));
}, _ScrollSpyController_initIo = function _ScrollSpyController_initIo() {
    const rootNode = __classPrivateFieldGet(this, _ScrollSpyController_rootNode, "f");
    if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
        const { rootMargin, threshold, root } = this;
        __classPrivateFieldSet(this, _ScrollSpyController_io, new IntersectionObserver(r => __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_onIo).call(this, r), { root, rootMargin, threshold }), "f");
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get)
            .map(x => __classPrivateFieldGet(this, _ScrollSpyController_getHash, "f").call(this, x))
            .filter((x) => !!x)
            .map(x => rootNode.getElementById(x.replace('#', '')))
            .filter((x) => !!x)
            .forEach(target => __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.observe(target));
    }
}, _ScrollSpyController_markPassed = function _ScrollSpyController_markPassed(link, force) {
    if (force) {
        __classPrivateFieldGet(this, _ScrollSpyController_passedLinks, "f").add(link);
    }
    else {
        __classPrivateFieldGet(this, _ScrollSpyController_passedLinks, "f").delete(link);
    }
}, _ScrollSpyController_setActive = function _ScrollSpyController_setActive(link) {
    for (const child of __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get)) {
        child.toggleAttribute(__classPrivateFieldGet(this, _ScrollSpyController_activeAttribute, "f"), child === link);
    }
}, _ScrollSpyController_nextIntersection = async function _ScrollSpyController_nextIntersection() {
    __classPrivateFieldSet(this, _ScrollSpyController_intersected, false, "f");
    // safeguard the loop
    setTimeout(() => __classPrivateFieldSet(this, _ScrollSpyController_intersected, false, "f"), 3000);
    while (!__classPrivateFieldGet(this, _ScrollSpyController_intersected, "f")) {
        await new Promise(requestAnimationFrame);
    }
}, _ScrollSpyController_onIo = async function _ScrollSpyController_onIo(entries) {
    if (!__classPrivateFieldGet(this, _ScrollSpyController_force, "f")) {
        for (const { target, boundingClientRect, intersectionRect } of entries) {
            const selector = `:is(${__classPrivateFieldGet(this, _ScrollSpyController_tagNames, "f").join(',')})[href="#${target.id}"]`;
            const link = this.host.querySelector(selector);
            if (link) {
                __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_markPassed).call(this, link, boundingClientRect.top < intersectionRect.top);
            }
        }
        const link = [...__classPrivateFieldGet(this, _ScrollSpyController_passedLinks, "f")];
        const last = link.at(-1);
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(this, last ?? __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get).at(0));
    }
    __classPrivateFieldSet(this, _ScrollSpyController_intersected, true, "f");
};
//# sourceMappingURL=scroll-spy-controller.js.map