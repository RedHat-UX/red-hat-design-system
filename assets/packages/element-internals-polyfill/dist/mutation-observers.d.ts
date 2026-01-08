/**
 * Initialize a ref by setting up an attribute observe on it
 * looking for changes to disabled
 * @param {HTMLElement} ref - The element to watch
 * @param {ElementInternals} internals - The element internals instance for the ref
 * @return {void}
 */
export declare const initRef: (ref: HTMLElement, internals: ElementInternals) => void;
/**
 * If a fieldset's disabled state is toggled, the formDisabledCallback
 * on any child form-associated cusotm elements.
 */
export declare const walkFieldset: (node: HTMLFieldSetElement, firstRender?: boolean) => void;
export declare const disabledOrNameObserverConfig: MutationObserverInit;
export declare const disabledOrNameObserver: MutationObserver;
export declare function observerCallback(mutationList: MutationRecord[]): void;
/**
 * This observer callback is just for document fragments
 * it will upgrade an ElementInternals instance if was appended
 * from a document fragment.
 */
export declare function fragmentObserverCallback(mutationList: MutationRecord[]): void;
/**
 * Defer the upgrade of nodes withing a DocumentFragment
 * @param fragment {DocumentFragment}
 */
export declare const deferUpgrade: (fragment: DocumentFragment) => void;
export declare const observer: MutationObserver;
export declare const observerConfig: MutationObserverInit;
