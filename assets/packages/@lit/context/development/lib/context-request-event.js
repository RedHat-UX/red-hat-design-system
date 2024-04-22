/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * An event fired by a context requester to signal it desires a specified context with the given key.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `subscribe` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass an `unsubscribe`
 * method to the callback which consumers can invoke to indicate they no longer wish to receive these updates.
 *
 * If no `subscribe` value is present in the event, then the provider can assume that this is a 'one time'
 * request for the context and can therefore not track the consumer.
 */
export class ContextRequestEvent extends Event {
    /**
     *
     * @param context the context key to request
     * @param callback the callback that should be invoked when the context with the specified key is available
     * @param subscribe when, true indicates we want to subscribe to future updates
     */
    constructor(context, callback, subscribe) {
        super('context-request', { bubbles: true, composed: true });
        this.context = context;
        this.callback = callback;
        this.subscribe = subscribe ?? false;
    }
}
//# sourceMappingURL=context-request-event.js.map