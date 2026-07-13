import { PropertyObserverController } from '../controllers/property-observer-controller.js';
// eslint-disable-next-line jsdoc/require-jsdoc
export function observed(...as) {
    if (as.length === 1) {
        const [methodNameOrCb] = as;
        return configuredDecorator(methodNameOrCb);
    }
    else {
        return executeBareDecorator(...as);
    }
}
/**
 * @param proto element prototype
 * @param propertyName propertyName
 * @example ```typescript
 *          @observed @property() foo?: string;
 *          ```
 */
function executeBareDecorator(proto, propertyName) {
    const klass = proto.constructor;
    klass.addInitializer(x => initialize(x, propertyName, x[`_${propertyName}Changed`]));
}
/**
 * @param methodNameOrCb string name of callback or function
 * @example ```typescript
 *          @observed('_myCallback') @property() foo?: string;
 *          @observed((old) => console.log(old)) @property() bar?: string;
 *          ```
 */
function configuredDecorator(methodNameOrCb) {
    return function (proto, key) {
        const propertyName = key;
        const klass = proto.constructor;
        if (typeof methodNameOrCb === 'function') {
            const callback = methodNameOrCb;
            klass.addInitializer(x => initialize(x, propertyName, callback));
        }
        else {
            klass.addInitializer(x => initialize(x, propertyName, x[methodNameOrCb]));
        }
    };
}
function initialize(instance, propertyName, callback) {
    const controller = new PropertyObserverController(instance, { propertyName, callback });
    instance.addController(controller);
}
//# sourceMappingURL=observed.js.map