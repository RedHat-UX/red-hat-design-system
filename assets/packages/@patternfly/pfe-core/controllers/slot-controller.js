import { __decorate } from "tslib";
import { bound } from '../decorators/bound.js';
import { Logger } from './logger.js';
function isObjectConfigSpread(config) {
    return config.length === 1 && typeof config[0] === 'object' && config[0] !== null;
}
/**
 * If it's a named slot, return its children,
 * for the default slot, look for direct children not assigned to a slot
 */
const isSlot = (n) => (child) => n === SlotController.anonymous ? !child.hasAttribute('slot')
    : child.getAttribute('slot') === n;
class SlotController {
    constructor(host, ...config) {
        this.host = host;
        this.nodes = new Map();
        this.firstUpdated = false;
        this.mo = new MutationObserver(this.onMutation);
        this.deprecations = {};
        this.logger = new Logger(this.host);
        if (isObjectConfigSpread(config)) {
            const [{ slots, deprecations }] = config;
            this.slotNames = slots;
            this.deprecations = deprecations ?? {};
        }
        else if (config.length >= 1) {
            this.slotNames = config;
            this.deprecations = {};
        }
        else {
            this.slotNames = [null];
        }
        host.addController(this);
    }
    hostConnected() {
        this.host.addEventListener('slotchange', this.onSlotChange);
        this.firstUpdated = false;
        this.mo.observe(this.host, { childList: true });
        this.init();
    }
    hostUpdated() {
        if (!this.firstUpdated) {
            this.slotNames.forEach(this.initSlot);
            this.firstUpdated = true;
        }
    }
    hostDisconnected() {
        this.mo.disconnect();
    }
    /**
     * Returns a boolean statement of whether or not any of those slots exists in the light DOM.
     *
     * @param {String|Array} name The slot name.
     * @example this.hasSlotted("header");
     */
    hasSlotted(...names) {
        if (!names.length) {
            this.logger.warn(`Please provide at least one slot name for which to search.`);
            return false;
        }
        else {
            return names.some(x => this.nodes.get(x)?.hasContent ?? false);
        }
    }
    /**
     * Given a slot name or slot names, returns elements assigned to the requested slots as an array.
     * If no value is provided, it returns all children not assigned to a slot (without a slot attribute).
     *
     * @example Get header-slotted elements
     * ```js
     * this.getSlotted('header')
     * ```
     *
     * @example Get header- and footer-slotted elements
     * ```js
     * this.getSlotted('header', 'footer')
     * ```
     *
     * @example Get default-slotted elements
     * ```js
     * this.getSlotted();
     * ```
     */
    getSlotted(...slotNames) {
        if (!slotNames.length) {
            return (this.nodes.get(SlotController.anonymous)?.elements ?? []);
        }
        else {
            return slotNames.flatMap(slotName => this.nodes.get(slotName)?.elements ?? []);
        }
    }
    onSlotChange(event) {
        const slotName = event.target.name;
        this.initSlot(slotName);
        this.host.requestUpdate();
    }
    async onMutation(records) {
        const changed = [];
        for (const { addedNodes, removedNodes } of records) {
            for (const node of [...addedNodes, ...removedNodes]) {
                if (node instanceof HTMLElement && node.slot) {
                    this.initSlot(node.slot);
                    changed.push(node.slot);
                }
            }
        }
        if (changed.length) {
            this.host.requestUpdate();
        }
    }
    getChildrenForSlot(name) {
        const children = Array.from(this.host.children);
        return children.filter(isSlot(name));
    }
    initSlot(slotName) {
        const name = slotName || SlotController.anonymous;
        const elements = this.nodes.get(name)?.slot?.assignedElements?.() ?? this.getChildrenForSlot(name);
        const selector = slotName ? `slot[name="${slotName}"]` : 'slot:not([name])';
        const slot = this.host.shadowRoot?.querySelector?.(selector) ?? null;
        const hasContent = !!elements.length;
        this.nodes.set(name, { elements, name: slotName ?? '', hasContent, slot });
        this.logger.log(slotName, hasContent);
    }
    /**
     * Maps the defined slots into an object that is easier to query
     */
    init() {
        this.nodes.clear();
        // Loop over the properties provided by the schema
        this.slotNames.forEach(this.initSlot);
        Object.values(this.deprecations).forEach(this.initSlot);
        this.host.requestUpdate();
    }
}
SlotController.anonymous = Symbol('anonymous slot');
__decorate([
    bound
], SlotController.prototype, "onSlotChange", null);
__decorate([
    bound
], SlotController.prototype, "onMutation", null);
__decorate([
    bound
], SlotController.prototype, "initSlot", null);
__decorate([
    bound
], SlotController.prototype, "init", null);
export { SlotController };
//# sourceMappingURL=slot-controller.js.map