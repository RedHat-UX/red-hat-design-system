/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import type { Context, ContextType } from '../create-context.js';
import type { ReactiveController, ReactiveControllerHost } from '@lit/reactive-element';
export interface Options<C extends Context<unknown, unknown>> {
    context: C;
    callback?: (value: ContextType<C>, dispose?: () => void) => void;
    subscribe?: boolean;
}
/**
 * A ReactiveController which adds context consuming behavior to a custom
 * element by dispatching `context-request` events.
 *
 * When the host element is connected to the document it will emit a
 * `context-request` event with its context key. When the context request
 * is satisfied the controller will invoke the callback, if present, and
 * trigger a host update so it can respond to the new value.
 *
 * It will also call the dispose method given by the provider when the
 * host element is disconnected.
 */
export declare class ContextConsumer<C extends Context<unknown, unknown>, HostElement extends ReactiveControllerHost & HTMLElement> implements ReactiveController {
    protected host: HostElement;
    private context;
    private callback?;
    private subscribe;
    private provided;
    value?: ContextType<C>;
    constructor(host: HostElement, options: Options<C>);
    /** @deprecated Use new ContextConsumer(host, options) */
    constructor(host: HostElement, context: C, callback?: (value: ContextType<C>, dispose?: () => void) => void, subscribe?: boolean);
    private unsubscribe?;
    hostConnected(): void;
    hostDisconnected(): void;
    private dispatchRequest;
    private _callback;
}
//# sourceMappingURL=context-consumer.d.ts.map