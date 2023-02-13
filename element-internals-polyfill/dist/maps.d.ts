/**
 * This file contains the WeakMaps used throughout this project. The WeakMaps exist to tie
 * objects together without polluting the objects themselves with references we'd rather keep
 * hidden. This allows the polyfill to work as transparently as possible.
 */
import { IElementInternals, ICustomElement } from './types';
/** Use an ElementInternals instance to get a reference to the element it is attached to */
export declare const refMap: WeakMap<IElementInternals, ICustomElement>;
/** Usee an ElementsInternals instance to get its ValidityState object */
export declare const validityMap: WeakMap<IElementInternals, ValidityState>;
/** Use an ElementInternals instance to get its attached input[type="hidden"] */
export declare const hiddenInputMap: WeakMap<IElementInternals, HTMLInputElement[]>;
/** Use a custom element to get its attached ElementInternals instance */
export declare const internalsMap: WeakMap<ICustomElement, IElementInternals>;
/** Use an ElementInternals instance to get the attached validation message */
export declare const validationMessageMap: WeakMap<IElementInternals, string>;
/** Use a form element to get attached custom elements and ElementInternals instances */
export declare const formsMap: WeakMap<HTMLFormElement, Object>;
/** Use a custom element or other object to get their associated MutationObservers */
export declare const shadowHostsMap: WeakMap<ICustomElement, MutationObserver>;
/** Use a form element to get a set of attached custom elements */
export declare const formElementsMap: WeakMap<HTMLFormElement, Set<ICustomElement>>;
/** Use an ElementInternals instance to get a reference to an element's value */
export declare const refValueMap: WeakMap<ICustomElement, any>;
/** Elements that need to be upgraded once added to the DOM */
export declare const upgradeMap: WeakMap<Element, IElementInternals>;
/** Save references to shadow roots for inclusion in internals instance */
export declare const shadowRootMap: WeakMap<ICustomElement, ShadowRoot>;
/** Save a reference to the internals' validation anchor */
export declare const validationAnchorMap: WeakMap<IElementInternals, HTMLElement>;
/** Map DocumentFragments to their MutationObservers so we can disconnect once elements are removed */
export declare const documentFragmentMap: WeakMap<DocumentFragment, MutationObserver>;
/** Whether connectedCallback has already been called. */
export declare const connectedCallbackMap: WeakMap<ICustomElement, boolean>;
/** Save a reference to validity state for elements that need to upgrade after being connected */
export declare const validityUpgradeMap: WeakMap<ICustomElement, IElementInternals>;
