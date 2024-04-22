/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * A ContextRoot can be used to gather unsatisfied context requests and
 * re-dispatch them when new providers which satisfy matching context keys are
 * available.
 *
 * This allows providers to be added to a DOM tree, or upgraded, after the
 * consumers.
 */
export declare class ContextRoot {
    private pendingContextRequests;
    /**
     * Attach the ContextRoot to a given element to intercept `context-request` and
     * `context-provider` events.
     *
     * @param element an element to add event listeners to
     */
    attach(element: HTMLElement): void;
    /**
     * Removes the ContextRoot event listeners from a given element.
     *
     * @param element an element from which to remove event listeners
     */
    detach(element: HTMLElement): void;
    private onContextProvider;
    private onContextRequest;
}
//# sourceMappingURL=context-root.d.ts.map