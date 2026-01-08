/**
 * This file contains the WeakMaps used throughout this project. The WeakMaps exist to tie
 * objects together without polluting the objects themselves with references we'd rather keep
 * hidden. This allows the polyfill to work as transparently as possible.
 */
/** Use an ElementInternals instance to get a reference to the element it is attached to */
export declare const refMap: WeakMap<ElementInternals, FormAssociatedCustomElement>;
/** Usee an ElementsInternals instance to get its ValidityState object */
export declare const validityMap: WeakMap<ElementInternals, ValidityState>;
/** Use an ElementInternals instance to get its attached input[type="hidden"] */
export declare const hiddenInputMap: WeakMap<ElementInternals, HTMLInputElement[]>;
/** Use a custom element to get its attached ElementInternals instance */
export declare const internalsMap: WeakMap<FormAssociatedCustomElement, ElementInternals>;
/** Use an ElementInternals instance to get the attached validation message */
export declare const validationMessageMap: WeakMap<ElementInternals, string>;
/** Use a form element to get attached custom elements and ElementInternals instances */
export declare const formsMap: WeakMap<HTMLFormElement, Object>;
/** Use a custom element or other object to get their associated MutationObservers */
export declare const shadowHostsMap: WeakMap<FormAssociatedCustomElement, MutationObserver>;
/** Use a form element to get a set of attached custom elements */
export declare const formElementsMap: WeakMap<HTMLFormElement, Set<FormAssociatedCustomElement>>;
/** Use an ElementInternals instance to get a reference to an element's value */
export declare const refValueMap: WeakMap<FormAssociatedCustomElement, any>;
/** Elements that need to be upgraded once added to the DOM */
export declare const upgradeMap: WeakMap<Element, ElementInternals>;
/** Save references to shadow roots for inclusion in internals instance */
export declare const shadowRootMap: WeakMap<FormAssociatedCustomElement, ShadowRoot>;
/** Save a reference to the internals' validation anchor */
export declare const validationAnchorMap: WeakMap<ElementInternals, HTMLElement>;
/** Map DocumentFragments to their MutationObservers so we can disconnect once elements are removed */
export declare const documentFragmentMap: WeakMap<DocumentFragment, MutationObserver>;
/** Whether connectedCallback has already been called. */
export declare const connectedCallbackMap: WeakMap<FormAssociatedCustomElement, boolean>;
/** Save a reference to validity state for elements that need to upgrade after being connected */
export declare const validityUpgradeMap: WeakMap<FormAssociatedCustomElement, ElementInternals>;
