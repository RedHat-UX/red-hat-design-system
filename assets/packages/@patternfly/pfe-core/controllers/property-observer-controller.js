export const observedController = Symbol('observed properties controller');
/** This controller holds a cache of observed property values which were set before the element updated */
export class PropertyObserverController {
    delete(key) {
        this.values.delete(key);
    }
    constructor(host) {
        this.host = host;
        this.values = new Map();
        if (PropertyObserverController.hosts.get(host)) {
            return PropertyObserverController.hosts.get(host);
        }
        host.addController(this);
        host[observedController] = this;
    }
    /** Set any cached valued accumulated between constructor and connectedCallback */
    hostUpdate() {
        for (const [key, [methodName, [oldVal, newVal]]] of this.values) {
            // @ts-expect-error: be cool, typescript
            this.host[methodName]?.(oldVal, newVal);
            this.delete(key);
        }
    }
    /** Once the element has updated, we no longer need this controller, so we remove it */
    hostUpdated() {
        this.host.removeController(this);
    }
    cache(key, methodName, ...vals) {
        this.values.set(key, [methodName, vals]);
    }
}
PropertyObserverController.hosts = new WeakMap();
//# sourceMappingURL=property-observer-controller.js.map