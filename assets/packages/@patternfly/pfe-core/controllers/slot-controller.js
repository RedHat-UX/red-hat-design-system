var _SlotController_instances, _a, _SlotController_nodes, _SlotController_slotMapInitialized, _SlotController_slotNames, _SlotController_deprecations, _SlotController_mo, _SlotController_initialize, _SlotController_initSlotMap, _SlotController_getSlotElement, _SlotController_getChildrenForSlot;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export function isObjectSpread(config) {
    return config.length === 1 && typeof config[0] === 'object' && config[0] !== null;
}
/**
 * If it's a named slot, return its children,
 * for the default slot, look for direct children not assigned to a slot
 * @param n slot name
 */
const isSlot = (n) => (child) => n === SlotController.default ? !child.hasAttribute('slot')
    : child.getAttribute('slot') === n;
export class SlotController {
    constructor(host, ...args) {
        _SlotController_instances.add(this);
        this.host = host;
        _SlotController_nodes.set(this, new Map());
        _SlotController_slotMapInitialized.set(this, false);
        _SlotController_slotNames.set(this, []);
        _SlotController_deprecations.set(this, {});
        _SlotController_mo.set(this, new MutationObserver(__classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_initSlotMap).bind(this)));
        __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_initialize).call(this, ...args);
        host.addController(this);
        if (!__classPrivateFieldGet(this, _SlotController_slotNames, "f").length) {
            __classPrivateFieldSet(this, _SlotController_slotNames, [null], "f");
        }
    }
    async hostConnected() {
        __classPrivateFieldGet(this, _SlotController_mo, "f").observe(this.host, { childList: true });
        // Map the defined slots into an object that is easier to query
        __classPrivateFieldGet(this, _SlotController_nodes, "f").clear();
        __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_initSlotMap).call(this);
        // insurance for framework integrations
        await this.host.updateComplete;
        this.host.requestUpdate();
    }
    hostUpdated() {
        if (!__classPrivateFieldGet(this, _SlotController_slotMapInitialized, "f")) {
            __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_initSlotMap).call(this);
        }
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _SlotController_mo, "f").disconnect();
    }
    /**
     * Given a slot name or slot names, returns elements assigned to the requested slots as an array.
     * If no value is provided, it returns all children not assigned to a slot (without a slot attribute).
     * @param slotNames slots to query
     * @example Get header-slotted elements
     *          ```js
     *          this.getSlotted('header')
     *          ```
     * @example Get header- and footer-slotted elements
     *          ```js
     *          this.getSlotted('header', 'footer')
     *          ```
     * @example Get default-slotted elements
     *          ```js
     *          this.getSlotted();
     *          ```
     */
    getSlotted(...slotNames) {
        if (!slotNames.length) {
            return (__classPrivateFieldGet(this, _SlotController_nodes, "f").get(_a.default)?.elements ?? []);
        }
        else {
            return slotNames.flatMap(slotName => __classPrivateFieldGet(this, _SlotController_nodes, "f").get(slotName)?.elements ?? []);
        }
    }
    /**
     * Returns a boolean statement of whether or not any of those slots exists in the light DOM.
     * @param names The slot names to check.
     * @example this.hasSlotted('header');
     */
    hasSlotted(...names) {
        const slotNames = Array.from(names, x => x == null ? _a.default : x);
        if (!slotNames.length) {
            slotNames.push(_a.default);
        }
        return slotNames.some(x => __classPrivateFieldGet(this, _SlotController_nodes, "f").get(x)?.hasContent ?? false);
    }
    /**
     * Whether or not all the requested slots are empty.
     * @param  names The slot names to query.  If no value is provided, it returns the default slot.
     * @example this.isEmpty('header', 'footer');
     * @example this.isEmpty();
     * @returns
     */
    isEmpty(...names) {
        return !this.hasSlotted(...names);
    }
}
_a = SlotController, _SlotController_nodes = new WeakMap(), _SlotController_slotMapInitialized = new WeakMap(), _SlotController_slotNames = new WeakMap(), _SlotController_deprecations = new WeakMap(), _SlotController_mo = new WeakMap(), _SlotController_instances = new WeakSet(), _SlotController_initialize = function _SlotController_initialize(...config) {
    if (isObjectSpread(config)) {
        const [{ slots, deprecations }] = config;
        __classPrivateFieldSet(this, _SlotController_slotNames, slots, "f");
        __classPrivateFieldSet(this, _SlotController_deprecations, deprecations ?? {}, "f");
    }
    else if (config.length >= 1) {
        __classPrivateFieldSet(this, _SlotController_slotNames, config, "f");
        __classPrivateFieldSet(this, _SlotController_deprecations, {}, "f");
    }
}, _SlotController_initSlotMap = function _SlotController_initSlotMap() {
    // Loop over the properties provided by the schema
    for (const slotName of __classPrivateFieldGet(this, _SlotController_slotNames, "f")
        .concat(Object.values(__classPrivateFieldGet(this, _SlotController_deprecations, "f")))) {
        const slotId = slotName || _a.default;
        const name = slotName ?? '';
        const elements = __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_getChildrenForSlot).call(this, slotId);
        const slot = __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_getSlotElement).call(this, slotId);
        const hasContent = !!elements.length || !!slot?.assignedNodes?.()?.filter(x => x.textContent?.trim()).length;
        __classPrivateFieldGet(this, _SlotController_nodes, "f").set(slotId, { elements, name, hasContent, slot });
    }
    this.host.requestUpdate();
    __classPrivateFieldSet(this, _SlotController_slotMapInitialized, true, "f");
}, _SlotController_getSlotElement = function _SlotController_getSlotElement(slotId) {
    const selector = slotId === _a.default ? 'slot:not([name])' : `slot[name="${slotId}"]`;
    return this.host.shadowRoot?.querySelector?.(selector) ?? null;
}, _SlotController_getChildrenForSlot = function _SlotController_getChildrenForSlot(name) {
    if (__classPrivateFieldGet(this, _SlotController_nodes, "f").has(name)) {
        return (__classPrivateFieldGet(this, _SlotController_nodes, "f").get(name).slot?.assignedElements?.() ?? []);
    }
    else {
        const children = Array.from(this.host.children);
        return children.filter(isSlot(name));
    }
};
SlotController.default = Symbol('default slot');
/** @deprecated use `default` */
SlotController.anonymous = _a.default;
//# sourceMappingURL=slot-controller.js.map