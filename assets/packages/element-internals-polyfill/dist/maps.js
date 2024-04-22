/** Use an ElementInternals instance to get a reference to the element it is attached to */
export const refMap = new WeakMap();
/** Usee an ElementsInternals instance to get its ValidityState object */
export const validityMap = new WeakMap();
/** Use an ElementInternals instance to get its attached input[type="hidden"] */
export const hiddenInputMap = new WeakMap();
/** Use a custom element to get its attached ElementInternals instance */
export const internalsMap = new WeakMap();
/** Use an ElementInternals instance to get the attached validation message */
export const validationMessageMap = new WeakMap();
/** Use a form element to get attached custom elements and ElementInternals instances */
export const formsMap = new WeakMap();
/** Use a custom element or other object to get their associated MutationObservers */
export const shadowHostsMap = new WeakMap();
/** Use a form element to get a set of attached custom elements */
export const formElementsMap = new WeakMap();
/** Use an ElementInternals instance to get a reference to an element's value */
export const refValueMap = new WeakMap();
/** Elements that need to be upgraded once added to the DOM */
export const upgradeMap = new WeakMap();
/** Save references to shadow roots for inclusion in internals instance */
export const shadowRootMap = new WeakMap();
/** Save a reference to the internals' validation anchor */
export const validationAnchorMap = new WeakMap();
/** Map DocumentFragments to their MutationObservers so we can disconnect once elements are removed */
export const documentFragmentMap = new WeakMap();
/** Whether connectedCallback has already been called. */
export const connectedCallbackMap = new WeakMap();
/** Save a reference to validity state for elements that need to upgrade after being connected */
export const validityUpgradeMap = new WeakMap();
