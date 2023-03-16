import { ICustomElement, IElementInternals, LabelsList } from './types.js';
/**
 * Toggle's the disabled state (attributes & callback) on the given element
 * @param {ICustomElement} ref - The custom element instance
 * @param {boolean} disabled - The disabled state
 */
export declare const setDisabled: (ref: ICustomElement, disabled: boolean) => void;
/**
 * Removes all hidden inputs for the given element internals instance
 * @param {IElementInternals} internals - The element internals instance
 * @return {void}
 */
export declare const removeHiddenInputs: (internals: IElementInternals) => void;
/**
 * Creates a hidden input for the given ref
 * @param {ICustomElement} ref - The element to watch
 * @param {IElementInternals} internals - The element internals instance for the ref
 * @return {HTMLInputElement} The hidden input
 */
export declare const createHiddenInput: (ref: ICustomElement, internals: IElementInternals) => HTMLInputElement | null;
/**
 * Initialize a ref by setting up an attribute observe on it
 * looking for changes to disabled
 * @param {ICustomElement} ref - The element to watch
 * @param {IElementInternals} internals - The element internals instance for the ref
 * @return {void}
 */
export declare const initRef: (ref: ICustomElement, internals: IElementInternals) => void;
/**
 * Set up labels for the ref
 * @param {ICustomElement} ref - The ref to add labels to
 * @param {LabelsList} labels - A list of the labels
 * @return {void}
 */
export declare const initLabels: (ref: ICustomElement, labels: LabelsList) => void;
/**
 * Sets the internals-valid and internals-invalid attributes
 * based on form validity.
 * @param {HTMLFormElement} - The target form
 * @return {void}
 */
export declare const setFormValidity: (form: HTMLFormElement) => void;
/**
 * The global form input callback. Updates the form's validity
 * attributes on input.
 * @param {Event} - The form input event
 * @return {void}
 */
export declare const formInputCallback: (event: Event) => void;
/**
 * The global form change callback. Updates the form's validity
 * attributes on change.
 * @param {Event} - The form change event
 * @return {void}
 */
export declare const formChangeCallback: (event: Event) => void;
/**
 * The global form submit callback. We need to cancel any submission
 * if a nested internals is invalid.
 * @param {HTMLFormElement} - The form element
 * @return {void}
 */
export declare const wireSubmitLogic: (form: HTMLFormElement) => void;
/**
 * The global form reset callback. This will loop over added
 * inputs and call formResetCallback if applicable
 * @return {void}
 */
export declare const formResetCallback: (event: Event) => void;
/**
 * Initialize the form. We will need to add submit and reset listeners
 * if they don't already exist. If they do, just add the new ref to the form.
 * @param {HTMLElement} ref - The element ref that includes internals
 * @param {HTMLFormElement} form - The form the ref belongs to
 * @param {ElementInternals} internals - The internals for ref
 * @return {void}
 */
export declare const initForm: (ref: ICustomElement, form: HTMLFormElement, internals: IElementInternals) => void;
/**
 * Recursively look for an element's parent form
 * @param {Element} elem - The element to look for a parent form
 * @return {HTMLFormElement|null} - The parent form, if one exists
 */
export declare const findParentForm: (elem: any) => any;
/**
 * Throw an error if the element ref is not form associated
 * @param ref {ICustomElement} - The element to check if it is form associated
 * @param message {string} - The error message to throw
 * @param ErrorType {any} - The error type to throw, defaults to DOMException
 */
export declare const throwIfNotFormAssociated: (ref: ICustomElement, message: string, ErrorType?: any) => void;
/**
 * Called for each HTMLFormElement.checkValidity|reportValidity
 * will loop over a form's added components and call the respective
 * method modifying the default return value if needed
 * @param form {HTMLFormElement} - The form element to run the method on
 * @param returnValue {boolean} - The initial result of the original method
 * @param method {'checkValidity'|'reportValidity'} - The original method
 * @returns {boolean} The form's validity state
 */
export declare const overrideFormMethod: (form: HTMLFormElement, returnValue: boolean, method: 'checkValidity' | 'reportValidity') => boolean;
/**
 * Will upgrade an ElementInternals instance by initializing the
 * instance's form and labels. This is called when the element is
 * either constructed or appended from a DocumentFragment
 * @param ref {ICustomElement} - The custom element to upgrade
 */
export declare const upgradeInternals: (ref: ICustomElement) => void;
