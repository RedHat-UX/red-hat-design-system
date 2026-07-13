import {} from './slot-controller.js';
export class SlotController {
    constructor(host, ..._args) {
        this.host = host;
        host.addController(this);
    }
    fromAttribute(slots) {
        return (slots ?? '')
            .split(/[, ]/)
            .map(x => x.trim());
    }
    getSlotted(..._names) {
        return [];
    }
    hasSlotted(...names) {
        const attr = this.host.getAttribute(SlotController.attribute);
        const anon = this.host.hasAttribute(SlotController.anonymousAttribute);
        const hints = new Set(this.fromAttribute(attr));
        if (!names.length) {
            names.push(null);
        }
        return names.every(x => x === null ? anon : hints.has(x));
    }
    isEmpty(...names) {
        return !this.hasSlotted(...names);
    }
}
SlotController.default = Symbol('default slot');
SlotController.attribute = 'ssr-hint-has-slotted';
SlotController.anonymousAttribute = 'ssr-hint-has-slotted-default';
//# sourceMappingURL=slot-controller-server.js.map