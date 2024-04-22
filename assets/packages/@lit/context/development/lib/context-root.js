/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ContextRequestEvent } from './context-request-event.js';
/**
 * A ContextRoot can be used to gather unsatisfied context requests and
 * re-dispatch them when new providers which satisfy matching context keys are
 * available.
 *
 * This allows providers to be added to a DOM tree, or upgraded, after the
 * consumers.
 */
export class ContextRoot {
    constructor() {
        this.pendingContextRequests = new Map();
        this.onContextProvider = (event) => {
            const pendingRequestData = this.pendingContextRequests.get(event.context);
            if (pendingRequestData === undefined) {
                // No pending requests for this context at this time
                return;
            }
            // Clear our list. Any still unsatisfied requests will re-add themselves
            // when we dispatch the events below.
            this.pendingContextRequests.delete(event.context);
            // Loop over all pending requests and re-dispatch them from their source
            const { requests } = pendingRequestData;
            for (const { elementRef, callbackRef } of requests) {
                const element = elementRef.deref();
                const callback = callbackRef.deref();
                if (element === undefined || callback === undefined) {
                    // The element was GC'ed. Do nothing.
                }
                else {
                    // Re-dispatch if we still have the element and callback
                    element.dispatchEvent(new ContextRequestEvent(event.context, callback, true));
                }
            }
        };
        this.onContextRequest = (event) => {
            // Events that are not subscribing should not be buffered
            if (event.subscribe !== true) {
                return;
            }
            // Note, it's important to use the initial target via composedPath()
            // since that's the requesting element and the event may be re-targeted
            // to an outer host element.
            const element = event.composedPath()[0];
            const callback = event.callback;
            let pendingContextRequests = this.pendingContextRequests.get(event.context);
            if (pendingContextRequests === undefined) {
                this.pendingContextRequests.set(event.context, (pendingContextRequests = {
                    callbacks: new WeakMap(),
                    requests: [],
                }));
            }
            let callbacks = pendingContextRequests.callbacks.get(element);
            if (callbacks === undefined) {
                pendingContextRequests.callbacks.set(element, (callbacks = new WeakSet()));
            }
            if (callbacks.has(callback)) {
                // We're already tracking this element/callback pair
                return;
            }
            callbacks.add(callback);
            pendingContextRequests.requests.push({
                elementRef: new WeakRef(element),
                callbackRef: new WeakRef(callback),
            });
        };
    }
    /**
     * Attach the ContextRoot to a given element to intercept `context-request` and
     * `context-provider` events.
     *
     * @param element an element to add event listeners to
     */
    attach(element) {
        element.addEventListener('context-request', this.onContextRequest);
        element.addEventListener('context-provider', this.onContextProvider);
    }
    /**
     * Removes the ContextRoot event listeners from a given element.
     *
     * @param element an element from which to remove event listeners
     */
    detach(element) {
        element.removeEventListener('context-request', this.onContextRequest);
        element.removeEventListener('context-provider', this.onContextProvider);
    }
}
//# sourceMappingURL=context-root.js.map