var _a;
import {} from './slot-controller.js';
export class SlotController {
    constructor(host, ..._) {
        this.host = host;
        host.addController(this);
    }
    fromAttribute(slots) {
        return (slots ?? '')
            .split(/[, ]/)
            .map(x => x.trim());
    }
    getSlotted(..._) {
        return [];
    }
    hasSlotted(...names) {
        const attr = this.host.getAttribute(_a.attribute);
        const anon = this.host.hasAttribute(_a.anonymousAttribute);
        const hints = new Set(this.fromAttribute(attr));
        return names.every(x => x === null ? anon : hints.has(x));
    }
    isEmpty(...names) {
        return !this.hasSlotted(...names);
    }
}
_a = SlotController;
SlotController.default = Symbol('default slot');
/** @deprecated use `default` */
SlotController.anonymous = _a.default;
SlotController.attribute = 'ssr-hint-has-slotted';
SlotController.anonymousAttribute = 'ssr-hint-has-slotted-default';
//# sourceMappingURL=slot-controller-server.js.map