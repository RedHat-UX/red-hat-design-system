var _SlotController_instances, _a, _SlotController_slotRecords, _SlotController_slotNames, _SlotController_deprecations, _SlotController_initSlotMap, _SlotController_mo, _SlotController_initialize, _SlotController_getSlotElement;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
export function isObjectSpread(config) {
    return config.length === 1 && typeof config[0] === 'object' && config[0] !== null;
}
function isContent(node) {
    switch (node.nodeType) {
        case Node.TEXT_NODE:
            return !!node.textContent?.trim();
        case Node.COMMENT_NODE:
            return false;
        default:
            return true;
    }
}
class SlotRecord {
    constructor(slot, name, host) {
        this.slot = slot;
        this.name = name;
        this.host = host;
    }
    get elements() {
        return this.slot?.assignedElements?.();
    }
    get hasContent() {
        if (this.name === SlotController.default) {
            return !!this.elements.length
                || !![...this.host.childNodes]
                    .some(node => {
                    if (node instanceof Element) {
                        return !node.hasAttribute('slot');
                    }
                    else {
                        return isContent(node);
                    }
                });
        }
        else {
            return !!this.slot.assignedNodes()
                .some(isContent);
        }
    }
}
export class SlotController {
    constructor(host, ...args) {
        _SlotController_instances.add(this);
        this.host = host;
        _SlotController_slotRecords.set(this, new Map());
        _SlotController_slotNames.set(this, []);
        _SlotController_deprecations.set(this, {});
        _SlotController_initSlotMap.set(this, async () => {
            const { host } = this;
            await host.updateComplete;
            const slotRecords = __classPrivateFieldGet(this, _SlotController_slotRecords, "f");
            // Loop over the properties provided by the schema
            for (let slotName of __classPrivateFieldGet(this, _SlotController_slotNames, "f").concat(Object.values(__classPrivateFieldGet(this, _SlotController_deprecations, "f")))) {
                slotName || (slotName = _a.default);
                const slot = __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_getSlotElement).call(this, slotName);
                if (slot) {
                    slotRecords.set(slotName, new SlotRecord(slot, slotName, host));
                }
            }
            host.requestUpdate();
        });
        _SlotController_mo.set(this, new MutationObserver(__classPrivateFieldGet(this, _SlotController_initSlotMap, "f")));
        host.addController(this);
        __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_initialize).call(this, ...args);
        if (!__classPrivateFieldGet(this, _SlotController_slotNames, "f").length) {
            __classPrivateFieldSet(this, _SlotController_slotNames, [null], "f");
        }
    }
    async hostConnected() {
        __classPrivateFieldGet(this, _SlotController_mo, "f").observe(this.host, { childList: true });
        // Map the defined slots into an object that is easier to query
        __classPrivateFieldGet(this, _SlotController_slotRecords, "f").clear();
        await this.host.updateComplete;
        __classPrivateFieldGet(this, _SlotController_initSlotMap, "f").call(this);
        // insurance for framework integrations
        await this.host.updateComplete;
        this.host.requestUpdate();
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
        if (!slotNames.length || slotNames.length === 1 && slotNames.at(0) === null) {
            return (__classPrivateFieldGet(this, _SlotController_slotRecords, "f").get(_a.default)?.elements ?? []);
        }
        else {
            return slotNames.flatMap(slotName => __classPrivateFieldGet(this, _SlotController_slotRecords, "f").get(slotName ?? _a.default)?.elements ?? []);
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
        return slotNames.some(slotName => {
            const slot = __classPrivateFieldGet(this, _SlotController_slotRecords, "f").get(slotName);
            if (!slot) {
                return false;
            }
            else {
                return slot.hasContent;
            }
        });
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
_a = SlotController, _SlotController_slotRecords = new WeakMap(), _SlotController_slotNames = new WeakMap(), _SlotController_deprecations = new WeakMap(), _SlotController_initSlotMap = new WeakMap(), _SlotController_mo = new WeakMap(), _SlotController_instances = new WeakSet(), _SlotController_initialize = function _SlotController_initialize(...config) {
    if (isObjectSpread(config)) {
        const [{ slots, deprecations }] = config;
        __classPrivateFieldSet(this, _SlotController_slotNames, slots, "f");
        __classPrivateFieldSet(this, _SlotController_deprecations, deprecations ?? {}, "f");
    }
    else if (config.length >= 1) {
        __classPrivateFieldSet(this, _SlotController_slotNames, config, "f");
        __classPrivateFieldSet(this, _SlotController_deprecations, {}, "f");
    }
}, _SlotController_getSlotElement = function _SlotController_getSlotElement(slotId) {
    const selector = slotId === _a.default ? 'slot:not([name])' : `slot[name="${slotId}"]`;
    return this.host.shadowRoot?.querySelector?.(selector) ?? null;
};
SlotController.default = Symbol('default slot');
/** @deprecated use `default` */
SlotController.anonymous = _a.default;
//# sourceMappingURL=slot-controller.js.map