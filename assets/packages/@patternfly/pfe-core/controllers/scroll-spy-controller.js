var _ScrollSpyController_instances, _a, _ScrollSpyController_instances_1, _ScrollSpyController_tagNames, _ScrollSpyController_activeAttribute, _ScrollSpyController_io, _ScrollSpyController_passedLinks, _ScrollSpyController_force, _ScrollSpyController_forceAbort, _ScrollSpyController_forceTimeout, _ScrollSpyController_intersected, _ScrollSpyController_root, _ScrollSpyController_rootMargin, _ScrollSpyController_threshold, _ScrollSpyController_intersectingTargets, _ScrollSpyController_linkTargetMap, _ScrollSpyController_getRootNode, _ScrollSpyController_getHash, _ScrollSpyController_onIntersection, _ScrollSpyController_linkChildren_get, _ScrollSpyController_initializing, _ScrollSpyController_releaseForce, _ScrollSpyController_initIo, _ScrollSpyController_markPassed, _ScrollSpyController_setActive, _ScrollSpyController_activateHash, _ScrollSpyController_nextIntersection, _ScrollSpyController_onIo;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
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
        _ScrollSpyController_instances.add(this);
        this.host = host;
        _ScrollSpyController_tagNames.set(this, void 0);
        _ScrollSpyController_activeAttribute.set(this, void 0);
        _ScrollSpyController_io.set(this, void 0);
        /** Which link's targets have already scrolled past? */
        _ScrollSpyController_passedLinks.set(this, new Set());
        /** Ignore intersections? */
        _ScrollSpyController_force.set(this, false);
        /** AbortController to cancel previous force-release listeners */
        _ScrollSpyController_forceAbort.set(this, void 0);
        /** Timeout handle for force-release safety valve */
        _ScrollSpyController_forceTimeout.set(this, void 0);
        /** Has the intersection observer found an element? */
        _ScrollSpyController_intersected.set(this, false);
        _ScrollSpyController_root.set(this, void 0);
        _ScrollSpyController_rootMargin.set(this, void 0);
        _ScrollSpyController_threshold.set(this, void 0);
        _ScrollSpyController_intersectingTargets.set(this, new Set());
        _ScrollSpyController_linkTargetMap.set(this, new Map());
        _ScrollSpyController_getRootNode.set(this, void 0);
        _ScrollSpyController_getHash.set(this, void 0);
        _ScrollSpyController_onIntersection.set(this, void 0);
        _ScrollSpyController_initializing.set(this, true);
        host.addController(this);
        __classPrivateFieldSet(this, _ScrollSpyController_tagNames, options.tagNames, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_root, options.root, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_rootMargin, options.rootMargin, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_activeAttribute, options.activeAttribute ?? 'active', "f");
        __classPrivateFieldSet(this, _ScrollSpyController_threshold, options.threshold ?? 0.85, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_getRootNode, () => options.rootNode ?? host.getRootNode?.() ?? null, "f");
        __classPrivateFieldSet(this, _ScrollSpyController_getHash, options?.getHash ?? ((el) => el.getAttribute('href')), "f");
        __classPrivateFieldSet(this, _ScrollSpyController_onIntersection, options?.onIntersection, "f");
    }
    hostConnected() {
        __classPrivateFieldGet(_a, _a, "f", _ScrollSpyController_instances_1).add(this);
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_initIo).call(this);
    }
    hostDisconnected() {
        __classPrivateFieldGet(_a, _a, "f", _ScrollSpyController_instances_1).delete(this);
        __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.disconnect();
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_releaseForce).call(this);
    }
    /**
     * Explicitly set the active item
     * @param link usually an `<a>`
     */
    async setActive(link) {
        // Cancel any previous programmatic scroll's force state
        __classPrivateFieldGet(this, _ScrollSpyController_forceAbort, "f")?.abort();
        clearTimeout(__classPrivateFieldGet(this, _ScrollSpyController_forceTimeout, "f"));
        __classPrivateFieldSet(this, _ScrollSpyController_force, true, "f");
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(this, link);
        let sawActive = false;
        for (const child of __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get)) {
            __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_markPassed).call(this, child, !sawActive);
            if (child === link) {
                sawActive = true;
            }
        }
        // Force is released when the scroll completes (scrollend event),
        // or after a 3-second safety timeout
        __classPrivateFieldSet(this, _ScrollSpyController_forceAbort, new AbortController(), "f");
        const { signal } = __classPrivateFieldGet(this, _ScrollSpyController_forceAbort, "f");
        addEventListener('scrollend', () => __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_releaseForce).call(this), { once: true, signal });
        __classPrivateFieldSet(this, _ScrollSpyController_forceTimeout, setTimeout(() => __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_releaseForce).call(this), 3000), "f");
    }
}
_a = ScrollSpyController, _ScrollSpyController_tagNames = new WeakMap(), _ScrollSpyController_activeAttribute = new WeakMap(), _ScrollSpyController_io = new WeakMap(), _ScrollSpyController_passedLinks = new WeakMap(), _ScrollSpyController_force = new WeakMap(), _ScrollSpyController_forceAbort = new WeakMap(), _ScrollSpyController_forceTimeout = new WeakMap(), _ScrollSpyController_intersected = new WeakMap(), _ScrollSpyController_root = new WeakMap(), _ScrollSpyController_rootMargin = new WeakMap(), _ScrollSpyController_threshold = new WeakMap(), _ScrollSpyController_intersectingTargets = new WeakMap(), _ScrollSpyController_linkTargetMap = new WeakMap(), _ScrollSpyController_getRootNode = new WeakMap(), _ScrollSpyController_getHash = new WeakMap(), _ScrollSpyController_onIntersection = new WeakMap(), _ScrollSpyController_initializing = new WeakMap(), _ScrollSpyController_instances = new WeakSet(), _ScrollSpyController_linkChildren_get = function _ScrollSpyController_linkChildren_get() {
    if (isServer) {
        return [];
    }
    else {
        return Array.from(this.host.querySelectorAll(__classPrivateFieldGet(this, _ScrollSpyController_tagNames, "f").join(',')))
            .filter(__classPrivateFieldGet(this, _ScrollSpyController_getHash, "f"));
    }
}, _ScrollSpyController_releaseForce = function _ScrollSpyController_releaseForce() {
    if (!__classPrivateFieldGet(this, _ScrollSpyController_force, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ScrollSpyController_force, false, "f");
    __classPrivateFieldGet(this, _ScrollSpyController_forceAbort, "f")?.abort();
    __classPrivateFieldSet(this, _ScrollSpyController_forceAbort, undefined, "f");
    clearTimeout(__classPrivateFieldGet(this, _ScrollSpyController_forceTimeout, "f"));
    __classPrivateFieldSet(this, _ScrollSpyController_forceTimeout, undefined, "f");
}, _ScrollSpyController_initIo = async function _ScrollSpyController_initIo() {
    const rootNode = __classPrivateFieldGet(this, _ScrollSpyController_getRootNode, "f").call(this);
    if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
        const { rootMargin, threshold, root } = this;
        __classPrivateFieldSet(this, _ScrollSpyController_io, new IntersectionObserver(r => __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_onIo).call(this, r), { root, rootMargin, threshold }), "f");
        for (const link of __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get)) {
            const id = __classPrivateFieldGet(this, _ScrollSpyController_getHash, "f").call(this, link)?.replace('#', '');
            if (id) {
                const target = document.getElementById(id);
                if (target) {
                    __classPrivateFieldGet(this, _ScrollSpyController_io, "f")?.observe(target);
                    __classPrivateFieldGet(this, _ScrollSpyController_linkTargetMap, "f").set(link, target);
                }
            }
        }
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
}, _ScrollSpyController_activateHash = async function _ScrollSpyController_activateHash() {
    const links = __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get);
    const { hash } = location;
    if (!hash) {
        this.setActive(links.at(0) ?? null);
    }
    else {
        await __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_nextIntersection).call(this);
        this.setActive(links.find(x => __classPrivateFieldGet(this, _ScrollSpyController_getHash, "f").call(this, x) === hash) ?? null);
    }
}, _ScrollSpyController_nextIntersection = async function _ScrollSpyController_nextIntersection() {
    __classPrivateFieldSet(this, _ScrollSpyController_intersected, false, "f");
    // safeguard: break the loop after 3s even if no intersection fires
    const timer = setTimeout(() => __classPrivateFieldSet(this, _ScrollSpyController_intersected, true, "f"), 3000);
    while (!__classPrivateFieldGet(this, _ScrollSpyController_intersected, "f")) {
        await new Promise(requestAnimationFrame);
    }
    clearTimeout(timer);
}, _ScrollSpyController_onIo = async function _ScrollSpyController_onIo(entries) {
    if (!__classPrivateFieldGet(this, _ScrollSpyController_force, "f")) {
        for (const entry of entries) {
            const { target, boundingClientRect } = entry;
            const selector = `:is(${__classPrivateFieldGet(this, _ScrollSpyController_tagNames, "f").join(',')})[href="#${target.id}"]`;
            const link = this.host.querySelector(selector);
            if (link) {
                // Mark as passed if the element's top has reached the root's top edge.
                // Using rootBounds (not intersectionRect) so that elements exactly AT the
                // viewport top are correctly considered "passed" (the current section).
                const rootTop = entry.rootBounds?.top ?? 0;
                __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_markPassed).call(this, link, boundingClientRect.top <= rootTop + 2);
            }
        }
        // Sort passed links by DOM order rather than Set insertion order
        const linkOrder = __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get);
        const passed = [...__classPrivateFieldGet(this, _ScrollSpyController_passedLinks, "f")]
            .sort((a, b) => linkOrder.indexOf(a) - linkOrder.indexOf(b));
        const last = passed.at(-1);
        __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(this, last ?? linkOrder.at(0));
    }
    __classPrivateFieldSet(this, _ScrollSpyController_intersected, true, "f");
    __classPrivateFieldGet(this, _ScrollSpyController_intersectingTargets, "f").clear();
    for (const entry of entries) {
        if (entry.isIntersecting) {
            __classPrivateFieldGet(this, _ScrollSpyController_intersectingTargets, "f").add(entry.target);
        }
    }
    if (__classPrivateFieldGet(this, _ScrollSpyController_initializing, "f")) {
        const ints = entries?.filter(x => x.isIntersecting) ?? [];
        if (__classPrivateFieldGet(this, _ScrollSpyController_intersectingTargets, "f").size > 0) {
            const [{ target = null } = {}] = ints;
            const { id } = target ?? {};
            if (id) {
                const link = __classPrivateFieldGet(this, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get).find(link => __classPrivateFieldGet(this, _ScrollSpyController_getHash, "f").call(this, link) === `#${id}`);
                if (link) {
                    __classPrivateFieldGet(this, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(this, link);
                }
            }
        }
        __classPrivateFieldSet(this, _ScrollSpyController_initializing, false, "f");
    }
    __classPrivateFieldGet(this, _ScrollSpyController_onIntersection, "f")?.call(this);
};
_ScrollSpyController_instances_1 = { value: new Set };
(() => {
    if (!isServer) {
        addEventListener('scroll', () => {
            if (Math.round(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                __classPrivateFieldGet(_a, _a, "f", _ScrollSpyController_instances_1).forEach(ssc => {
                    __classPrivateFieldGet(ssc, _ScrollSpyController_instances, "m", _ScrollSpyController_setActive).call(ssc, __classPrivateFieldGet(ssc, _ScrollSpyController_instances, "a", _ScrollSpyController_linkChildren_get).at(-1));
                });
            }
        }, { passive: true });
        addEventListener('hashchange', () => {
            __classPrivateFieldGet(_a, _a, "f", _ScrollSpyController_instances_1).forEach(ssc => {
                __classPrivateFieldGet(ssc, _ScrollSpyController_instances, "m", _ScrollSpyController_activateHash).call(ssc);
            });
        });
    }
})();
//# sourceMappingURL=scroll-spy-controller.js.map