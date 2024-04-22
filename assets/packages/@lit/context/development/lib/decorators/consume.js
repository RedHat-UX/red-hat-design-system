/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ContextConsumer } from '../controllers/context-consumer.js';
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */
/**
 * A property decorator that adds a ContextConsumer controller to the component
 * which will try and retrieve a value for the property via the Context API.
 *
 * @param context A Context identifier value created via `createContext`
 * @param subscribe An optional boolean which when true allows the value to be updated
 *   multiple times.
 *
 * @example
 *
 * ```ts
 * import {consume} from '@lit/context';
 * import {loggerContext, Logger} from 'community-protocols/logger';
 *
 * class MyElement {
 *   @consume({context: loggerContext})
 *   logger?: Logger;
 *
 *   doThing() {
 *     this.logger!.log('thing was done');
 *   }
 * }
 * ```
 * @category Decorator
 */
export function consume({ context, subscribe, }) {
    return ((protoOrTarget, nameOrContext) => {
        if (typeof nameOrContext === 'object') {
            // Standard decorators branch
            nameOrContext.addInitializer(function () {
                new ContextConsumer(this, {
                    context,
                    callback: (value) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        this[nameOrContext.name] = value;
                    },
                    subscribe,
                });
            });
        }
        else {
            // Experimental decorators branch
            protoOrTarget.constructor.addInitializer((element) => {
                new ContextConsumer(element, {
                    context,
                    callback: (value) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        element[nameOrContext] = value;
                    },
                    subscribe,
                });
            });
        }
    });
}
//# sourceMappingURL=consume.js.map