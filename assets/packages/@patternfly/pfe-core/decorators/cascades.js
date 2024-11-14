import { CascadeController } from '../controllers/cascade-controller.js';
/**
 * Cascades the decorated attribute to children
 * @param items
 * @deprecated use context, especially via `@patternfly/pfe-core/functions/context.js`;
 */
export function cascades(...items) {
    return function (proto, key) {
        proto.constructor.addInitializer(x => {
            const instance = x;
            // You can have multiple `@cascades` decorators on an element
            // and it will only get one CascadeController for all of them
            if (!CascadeController.instances.has(instance)) {
                CascadeController.instances.set(instance, new CascadeController(instance));
            }
            CascadeController.instances.get(instance)?.initProp(key, items);
        });
    };
}
//# sourceMappingURL=cascades.js.map