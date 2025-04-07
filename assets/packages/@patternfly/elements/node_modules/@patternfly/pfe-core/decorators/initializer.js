import { LightDOMController } from '../controllers/light-dom-controller.js';
/**
 * Runs the decorated method in `connectedCallback`,
 * provided the element has light children, and sets
 * up a mutation observer to re-run the callback,
 * unless opted-out with `{ observe: false }`
 * @param  options        Set `observe` to `false` to skip mutation observer setup, or pass a MutationObserverInit as options
 */
export function initializer(options) {
    return function (proto, key) {
        // @TODO: allow multiple initializers
        proto.constructor.addInitializer(instance => {
            const initializer = proto[key];
            const controller = new LightDOMController(instance, initializer, options);
            if (instance.isConnected) {
                controller.hostConnected();
            }
        });
    };
}
//# sourceMappingURL=initializer.js.map