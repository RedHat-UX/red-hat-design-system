var _SlotController_instances, _a, _SlotController_nodes, _SlotController_logger, _SlotController_firstUpdated, _SlotController_mo, _SlotController_slotNames, _SlotController_deprecations, _SlotController_onSlotChange, _SlotController_onMutation, _SlotController_getChildrenForSlot, _SlotController_initSlot;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Logger } from './logger.js';
function isObjectConfigSpread(config) {
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
    constructor(host, ...config) {
        _SlotController_instances.add(this);
        this.host = host;
        _SlotController_nodes.set(this, new Map());
        _SlotController_logger.set(this, void 0);
        _SlotController_firstUpdated.set(this, false);
        _SlotController_mo.set(this, new MutationObserver(records => __classPrivateFieldGet(this, _SlotController_onMutation, "f").call(this, records)));
        _SlotController_slotNames.set(this, void 0);
        _SlotController_deprecations.set(this, {});
        _SlotController_onSlotChange.set(this, (event) => {
            const slotName = event.target.name;
            __classPrivateFieldGet(this, _SlotController_initSlot, "f").call(this, slotName);
            this.host.requestUpdate();
        });
        _SlotController_onMutation.set(this, async (records) => {
            const changed = [];
            for (const { addedNodes, removedNodes } of records) {
                for (const node of [...addedNodes, ...removedNodes]) {
                    if (node instanceof HTMLElement && node.slot) {
                        __classPrivateFieldGet(this, _SlotController_initSlot, "f").call(this, node.slot);
                        changed.push(node.slot);
                    }
                }
            }
            this.host.requestUpdate();
        });
        _SlotController_initSlot.set(this, (slotName) => {
            const name = slotName || _a.default;
            const elements = __classPrivateFieldGet(this, _SlotController_nodes, "f").get(name)?.slot?.assignedElements?.()
                ?? __classPrivateFieldGet(this, _SlotController_instances, "m", _SlotController_getChildrenForSlot).call(this, name);
            const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
            const slot = this.host.shadowRoot?.querySelector?.(selector) ?? null;
            const hasContent = !!elements.length;
            __classPrivateFieldGet(this, _SlotController_nodes, "f").set(name, { elements, name: slotName ?? '', hasContent, slot });
            __classPrivateFieldGet(this, _SlotController_logger, "f").debug(slotName, hasContent);
        });
        __classPrivateFieldSet(this, _SlotController_logger, new Logger(this.host), "f");
        if (isObjectConfigSpread(config)) {
            const [{ slots, deprecations }] = config;
            __classPrivateFieldSet(this, _SlotController_slotNames, slots, "f");
            __classPrivateFieldSet(this, _SlotController_deprecations, deprecations ?? {}, "f");
        }
        else if (config.length >= 1) {
            __classPrivateFieldSet(this, _SlotController_slotNames, config, "f");
            __classPrivateFieldSet(this, _SlotController_deprecations, {}, "f");
        }
        else {
            __classPrivateFieldSet(this, _SlotController_slotNames, [null], "f");
        }
        host.addController(this);
    }
    async hostConnected() {
        this.host.addEventListener('slotchange', __classPrivateFieldGet(this, _SlotController_onSlotChange, "f"));
        __classPrivateFieldSet(this, _SlotController_firstUpdated, false, "f");
        __classPrivateFieldGet(this, _SlotController_mo, "f").observe(this.host, { childList: true });
        // Map the defined slots into an object that is easier to query
        __classPrivateFieldGet(this, _SlotController_nodes, "f").clear();
        // Loop over the properties provided by the schema
        __classPrivateFieldGet(this, _SlotController_slotNames, "f").forEach(__classPrivateFieldGet(this, _SlotController_initSlot, "f"));
        Object.values(__classPrivateFieldGet(this, _SlotController_deprecations, "f")).forEach(__classPrivateFieldGet(this, _SlotController_initSlot, "f"));
        this.host.requestUpdate();
        // insurance for framework integrations
        await this.host.updateComplete;
        this.host.requestUpdate();
    }
    hostUpdated() {
        if (!__classPrivateFieldGet(this, _SlotController_firstUpdated, "f")) {
            __classPrivateFieldGet(this, _SlotController_slotNames, "f").forEach(__classPrivateFieldGet(this, _SlotController_initSlot, "f"));
            __classPrivateFieldSet(this, _SlotController_firstUpdated, true, "f");
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
_a = SlotController, _SlotController_nodes = new WeakMap(), _SlotController_logger = new WeakMap(), _SlotController_firstUpdated = new WeakMap(), _SlotController_mo = new WeakMap(), _SlotController_slotNames = new WeakMap(), _SlotController_deprecations = new WeakMap(), _SlotController_onSlotChange = new WeakMap(), _SlotController_onMutation = new WeakMap(), _SlotController_initSlot = new WeakMap(), _SlotController_instances = new WeakSet(), _SlotController_getChildrenForSlot = function _SlotController_getChildrenForSlot(name) {
    const children = Array.from(this.host.children);
    return children.filter(isSlot(name));
};
SlotController.default = Symbol('default slot');
/** @deprecated use `default` */
SlotController.anonymous = _a.default;
//# sourceMappingURL=slot-controller.js.map