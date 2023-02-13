import { observedController, PropertyObserverController, } from '../controllers/property-observer-controller.js';
export function observed(...as) {
    /** @observed('_myCustomChangeCallback') */
    if (as.length === 1) {
        const [methodNameOrCallback] = as;
        return function (proto, key) {
            proto.constructor
                .addInitializer(x => new PropertyObserverController(x));
            observeProperty(proto, key, methodNameOrCallback);
        };
    }
    else {
        const [proto, key] = as;
        proto.constructor
            .addInitializer(x => new PropertyObserverController(x));
        observeProperty(proto, key);
    }
}
export function observeProperty(proto, key, callbackOrMethod) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, key);
    Object.defineProperty(proto, key, {
        ...descriptor,
        configurable: true,
        set(newVal) {
            const oldVal = this[key];
            // first, call any pre-existing setters, e.g. `@property`
            descriptor?.set?.call(this, newVal);
            // if the user passed a callback, call it
            // e.g. `@observed((_, newVal) => console.log(newVal))`
            // safe to call before connectedCallback, because it's impossible to get a `this` ref.
            if (typeof callbackOrMethod === 'function') {
                callbackOrMethod.call(this, oldVal, newVal);
            }
            else {
                // if the user passed a string method name, call it on `this`
                // e.g. `@observed('_renderOptions')`
                // otherwise, use a default method name e.g. `_fooChanged`
                const actualMethodName = callbackOrMethod || `_${key}Changed`;
                // if the component has already connected to the DOM, run the callback
                // otherwise, If the component has not yet connected to the DOM,
                // cache the old and new values. See PropertyObserverController above
                if (this.hasUpdated) {
                    this[actualMethodName]?.(oldVal, newVal);
                }
                else {
                    this[observedController].cache(key, actualMethodName, oldVal, newVal);
                }
            }
        },
    });
}
//# sourceMappingURL=observed.js.map