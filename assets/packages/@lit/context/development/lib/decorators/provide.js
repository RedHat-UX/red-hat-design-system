/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ContextProvider } from '../controllers/context-provider.js';
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */
/**
 * A property decorator that adds a ContextProvider controller to the component
 * making it respond to any `context-request` events from its children consumer.
 *
 * @param context A Context identifier value created via `createContext`
 *
 * @example
 *
 * ```ts
 * import {provide} from '@lit/context';
 * import {Logger} from 'my-logging-library';
 * import {loggerContext} from './logger-context.js';
 *
 * class MyElement {
 *   @provide({context: loggerContext})
 *   logger = new Logger();
 * }
 * ```
 * @category Decorator
 */
export function provide({ context: context, }) {
    return ((protoOrTarget, nameOrContext) => {
        // Map of instances to controllers
        const controllerMap = new WeakMap();
        if (typeof nameOrContext === 'object') {
            // Standard decorators branch
            nameOrContext.addInitializer(function () {
                controllerMap.set(this, new ContextProvider(this, { context }));
            });
            return {
                get() {
                    return protoOrTarget.get.call(this);
                },
                set(value) {
                    controllerMap.get(this)?.setValue(value);
                    return protoOrTarget.set.call(this, value);
                },
                init(value) {
                    controllerMap.get(this)?.setValue(value);
                    return value;
                },
            };
        }
        else {
            // Experimental decorators branch
            protoOrTarget.constructor.addInitializer((element) => {
                controllerMap.set(element, new ContextProvider(element, { context }));
            });
            // proxy any existing setter for this property and use it to
            // notify the controller of an updated value
            const descriptor = Object.getOwnPropertyDescriptor(protoOrTarget, nameOrContext);
            let newDescriptor;
            if (descriptor === undefined) {
                const valueMap = new WeakMap();
                newDescriptor = {
                    get: function () {
                        return valueMap.get(this);
                    },
                    set: function (value) {
                        controllerMap.get(this).setValue(value);
                        valueMap.set(this, value);
                    },
                    configurable: true,
                    enumerable: true,
                };
            }
            else {
                const oldSetter = descriptor.set;
                newDescriptor = {
                    ...descriptor,
                    set: function (value) {
                        controllerMap.get(this).setValue(value);
                        oldSetter?.call(this, value);
                    },
                };
            }
            Object.defineProperty(protoOrTarget, nameOrContext, newDescriptor);
            return;
        }
    });
}
//# sourceMappingURL=provide.js.map