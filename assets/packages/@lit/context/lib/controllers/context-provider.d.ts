/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ContextRequestEvent } from '../context-request-event.js';
import { ValueNotifier } from '../value-notifier.js';
import type { Context, ContextType } from '../create-context.js';
import type { ReactiveController, ReactiveControllerHost } from '@lit/reactive-element';
declare global {
    interface HTMLElementEventMap {
        /**
         * A 'context-provider' event can be emitted by any element which hosts
         * a context provider to indicate it is available for use.
         */
        'context-provider': ContextProviderEvent<Context<unknown, unknown>>;
    }
}
export declare class ContextProviderEvent<C extends Context<unknown, unknown>> extends Event {
    readonly context: C;
    /**
     *
     * @param context the context which this provider can provide
     */
    constructor(context: C);
}
export interface Options<C extends Context<unknown, unknown>> {
    context: C;
    initialValue?: ContextType<C>;
}
type ReactiveElementHost = Partial<ReactiveControllerHost> & HTMLElement;
/**
 * A ReactiveController which adds context provider behavior to a
 * custom element.
 *
 * This controller simply listens to the `context-request` event when
 * the host is connected to the DOM and registers the received callbacks
 * against its observable Context implementation.
 *
 * The controller may also be attached to any HTML element in which case it's
 * up to the user to call hostConnected() when attached to the DOM. This is
 * done automatically for any custom elements implementing
 * ReactiveControllerHost.
 */
export declare class ContextProvider<T extends Context<unknown, unknown>, HostElement extends ReactiveElementHost = ReactiveElementHost> extends ValueNotifier<ContextType<T>> implements ReactiveController {
    protected readonly host: HostElement;
    private readonly context;
    constructor(host: HostElement, options: Options<T>);
    /** @deprecated Use new ContextProvider(host, options) */
    constructor(host: HostElement, context: T, initialValue?: ContextType<T>);
    onContextRequest: (ev: ContextRequestEvent<Context<unknown, unknown>>) => void;
    /**
     * When we get a provider request event, that means a child of this element
     * has just woken up. If it's a provider of our context, then we may need to
     * re-parent our subscriptions, because is a more specific provider than us
     * for its subtree.
     */
    onProviderRequest: (ev: ContextProviderEvent<Context<unknown, unknown>>) => void;
    private attachListeners;
    hostConnected(): void;
}
export {};
//# sourceMappingURL=context-provider.d.ts.map