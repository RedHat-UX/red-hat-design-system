import { hiddenInputMap, formsMap, formElementsMap, internalsMap, } from "./maps.js";
/**
 * Set attribute if its value differs from existing one.
 *
 * In comparison to other attribute modification methods (removeAttribute and
 * toggleAttribute), setAttribute always triggers attributeChangedCallback
 * even if the actual value has not changed.
 *
 * This polyfill relies heavily on attributes to pass aria information to
 * screen readers. This behaviour differs from native implementation which does
 * not change attributes.
 *
 * To limit this difference we only set attribute value when it is different
 * from the current state.
 *
 * @param {ICustomElement | Element} ref - The custom element instance
 * @param {string} name - The attribute name
 * @param {string} value - The attribute value
 * @returns
 */
export const setAttribute = (ref, name, value) => {
    if (ref.getAttribute(name) === value) {
        return;
    }
    ref.setAttribute(name, value);
};
/**
 * Toggle's the disabled state (attributes & callback) on the given element
 * @param {HTMLElement} ref - The custom element instance
 * @param {boolean} disabled - The disabled state
 */
export const setDisabled = (ref, disabled) => {
    ref.toggleAttribute("internals-disabled", disabled);
    if (disabled) {
        setAttribute(ref, "aria-disabled", "true");
    }
    else {
        ref.removeAttribute("aria-disabled");
    }
    if (ref.formDisabledCallback) {
        ref.formDisabledCallback.apply(ref, [disabled]);
    }
};
/**
 * Removes all hidden inputs for the given element internals instance
 * @param {ElementInternals} internals - The element internals instance
 * @return {void}
 */
export const removeHiddenInputs = (internals) => {
    const hiddenInputs = hiddenInputMap.get(internals);
    hiddenInputs.forEach((hiddenInput) => {
        hiddenInput.remove();
    });
    hiddenInputMap.set(internals, []);
};
/**
 * Creates a hidden input for the given ref
 * @param {HTMLElement} ref - The element to watch
 * @param {ElementInternals} internals - The element internals instance for the ref
 * @return {HTMLInputElement} The hidden input
 */
export const createHiddenInput = (ref, internals) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = ref.getAttribute("name");
    ref.after(input);
    hiddenInputMap.get(internals).push(input);
    return input;
};
/**
 * Set up labels for the ref
 * @param {HTMLElement} ref - The ref to add labels to
 * @param {NodeList} labels - A list of the labels
 * @return {void}
 */
export const initLabels = (ref, labels) => {
    if (labels.length) {
        const labelList = Array.from(labels);
        labelList.forEach((label) => label.addEventListener("click", ref.click.bind(ref)));
        const [firstLabel] = labelList;
        let firstLabelId = firstLabel.id;
        if (!firstLabel.id) {
            firstLabelId = `${firstLabel.htmlFor}_Label`;
            firstLabel.id = firstLabelId;
        }
        setAttribute(ref, "aria-labelledby", firstLabelId);
    }
};
/**
 * Sets the internals-valid and internals-invalid attributes
 * based on form validity.
 * @param {HTMLFormElement} - The target form
 * @return {void}
 */
export const setFormValidity = (form) => {
    const nativeControlValidity = Array.from(form.elements)
        .filter((element) => !element.tagName.includes("-") && element.validity)
        .map((element) => element.validity.valid);
    const polyfilledElements = formElementsMap.get(form) || [];
    const polyfilledValidity = Array.from(polyfilledElements)
        .filter((control) => control.isConnected)
        .map((control) => internalsMap.get(control).validity.valid);
    const hasInvalid = [...nativeControlValidity, ...polyfilledValidity].includes(false);
    form.toggleAttribute("internals-invalid", hasInvalid);
    form.toggleAttribute("internals-valid", !hasInvalid);
};
/**
 * The global form input callback. Updates the form's validity
 * attributes on input.
 * @param {Event} - The form input event
 * @return {void}
 */
export const formInputCallback = (event) => {
    setFormValidity(findParentForm(event.target));
};
/**
 * The global form change callback. Updates the form's validity
 * attributes on change.
 * @param {Event} - The form change event
 * @return {void}
 */
export const formChangeCallback = (event) => {
    setFormValidity(findParentForm(event.target));
};
/**
 * The global form submit callback. We need to cancel any submission
 * if a nested internals is invalid.
 * @param {HTMLFormElement} - The form element
 * @return {void}
 */
export const wireSubmitLogic = (form) => {
    const submitButtonSelector = [
        "button[type=submit]",
        "input[type=submit]",
        "button:not([type])",
    ]
        .map((sel) => `${sel}:not([disabled])`)
        .map((sel) => `${sel}:not([form])${form.id ? `,${sel}[form='${form.id}']` : ""}`)
        .join(",");
    form.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(submitButtonSelector)) {
            // validate
            const elements = formElementsMap.get(form);
            /**
             * If this form does not validate then we're done
             */
            if (form.noValidate) {
                return;
            }
            /** If the Set has items, continue */
            if (elements.size) {
                const nodes = Array.from(elements);
                /** Check the internals.checkValidity() of all nodes */
                const validityList = nodes.reverse().map((node) => {
                    const internals = internalsMap.get(node);
                    return internals.reportValidity();
                });
                /** If any node is false, stop the event */
                if (validityList.includes(false)) {
                    event.preventDefault();
                }
            }
        }
    });
};
/**
 * The global form reset callback. This will loop over added
 * inputs and call formResetCallback if applicable
 * @return {void}
 */
export const formResetCallback = (event) => {
    /** Get the Set of elements attached to this form */
    const elements = formElementsMap.get(event.target);
    /** Some forms won't contain form associated custom elements */
    if (elements && elements.size) {
        /** Loop over the elements and call formResetCallback if applicable */
        elements.forEach((element) => {
            if (element.constructor.formAssociated &&
                element.formResetCallback) {
                element.formResetCallback.apply(element);
            }
        });
    }
};
/**
 * Initialize the form. We will need to add submit and reset listeners
 * if they don't already exist. If they do, just add the new ref to the form.
 * @param {HTMLElement} ref - The element ref that includes internals
 * @param {HTMLFormElement} form - The form the ref belongs to
 * @param {ElementInternals} internals - The internals for ref
 * @return {void}
 */
export const initForm = (ref, form, internals) => {
    if (form) {
        /** This will be a WeakMap<HTMLFormElement, Set<HTMLElement> */
        const formElements = formElementsMap.get(form);
        if (formElements) {
            /** If formElements exists, add to it */
            formElements.add(ref);
        }
        else {
            /** If formElements doesn't exist, create it and add to it */
            const initSet = new Set();
            initSet.add(ref);
            formElementsMap.set(form, initSet);
            /** Add listeners to emulate validation and reset behavior */
            wireSubmitLogic(form);
            form.addEventListener("reset", formResetCallback);
            form.addEventListener("input", formInputCallback);
            form.addEventListener("change", formChangeCallback);
        }
        formsMap.set(form, { ref, internals });
        /** Call formAssociatedCallback if applicable */
        if (ref.constructor["formAssociated"] && ref.formAssociatedCallback) {
            setTimeout(() => {
                ref.formAssociatedCallback.apply(ref, [form]);
            }, 0);
        }
        setFormValidity(form);
    }
};
/**
 * Recursively look for an element's parent form
 * @param {Element} elem - The element to look for a parent form
 * @return {HTMLFormElement|null} - The parent form, if one exists
 */
export const findParentForm = (elem) => {
    let parent = elem.parentNode;
    if (parent && parent.tagName !== "FORM") {
        parent = findParentForm(parent);
    }
    return parent;
};
/**
 * Throw an error if the element ref is not form associated
 * @param ref {HTMLElement} - The element to check if it is form associated
 * @param message {string} - The error message to throw
 * @param ErrorType {any} - The error type to throw, defaults to DOMException
 */
export const throwIfNotFormAssociated = (ref, message, ErrorType = DOMException) => {
    if (!ref.constructor["formAssociated"]) {
        throw new ErrorType(message);
    }
};
/**
 * Called for each HTMLFormElement.checkValidity|reportValidity
 * will loop over a form's added components and call the respective
 * method modifying the default return value if needed
 * @param form {HTMLFormElement} - The form element to run the method on
 * @param returnValue {boolean} - The initial result of the original method
 * @param method {'checkValidity'|'reportValidity'} - The original method
 * @returns {boolean} The form's validity state
 */
export const overrideFormMethod = (form, returnValue, method) => {
    const elements = formElementsMap.get(form);
    /** Some forms won't contain form associated custom elements */
    if (elements && elements.size) {
        elements.forEach((element) => {
            const internals = internalsMap.get(element);
            const valid = internals[method]();
            if (!valid) {
                returnValue = false;
            }
        });
    }
    return returnValue;
};
/**
 * Will upgrade an ElementInternals instance by initializing the
 * instance's form and labels. This is called when the element is
 * either constructed or appended from a DocumentFragment
 * @param ref {HTMLElement} - The custom element to upgrade
 */
export const upgradeInternals = (ref) => {
    let attached = false;
    if (ref.constructor["formAssociated"]) {
        let internals = internalsMap.get(ref);
        // we might have cases where the internals are not set
        if (internals === undefined) {
            ref.attachInternals();
            internals = internalsMap.get(ref);
            attached = true;
        }
        const { labels, form } = internals;
        initLabels(ref, labels);
        initForm(ref, form, internals);
    }
    return attached;
};
/**
 * Check to see if MutationObserver exists in the current
 * execution context. Will likely return false on the server
 * @returns {boolean}
 */
export function mutationObserverExists() {
    return typeof MutationObserver !== "undefined";
}
