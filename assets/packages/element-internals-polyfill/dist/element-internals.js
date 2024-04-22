import { connectedCallbackMap, internalsMap, refMap, refValueMap, shadowHostsMap, shadowRootMap, validationAnchorMap, validityMap, validationMessageMap, validityUpgradeMap, } from './maps.js';
import { createHiddenInput, findParentForm, initRef, mutationObserverExists, removeHiddenInputs, setDisabled, throwIfNotFormAssociated, upgradeInternals } from './utils.js';
import { initAom } from './aom.js';
import { ValidityState, reconcileValidity, setValid } from './ValidityState.js';
import { deferUpgrade, observerCallback, observerConfig } from './mutation-observers.js';
import { CustomStateSet } from './CustomStateSet.js';
import { patchFormPrototype } from './patch-form-prototype.js';
export class ElementInternals {
    static get isPolyfilled() {
        return true;
    }
    constructor(ref) {
        if (!ref || !ref.tagName || ref.tagName.indexOf('-') === -1) {
            throw new TypeError('Illegal constructor');
        }
        const rootNode = ref.getRootNode();
        const validity = new ValidityState();
        this.states = new CustomStateSet(ref);
        refMap.set(this, ref);
        validityMap.set(this, validity);
        internalsMap.set(ref, this);
        initAom(ref, this);
        initRef(ref, this);
        Object.seal(this);
        /**
         * If appended from a DocumentFragment, wait until it is connected
         * before attempting to upgrade the internals instance
         */
        if (rootNode instanceof DocumentFragment) {
            deferUpgrade(rootNode);
        }
    }
    /**
     * Will return true if the element is in a valid state
     */
    checkValidity() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element.`);
        /** If the element will not validate, it is necessarily valid by default */
        if (!this.willValidate) {
            return true;
        }
        const validity = validityMap.get(this);
        if (!validity.valid) {
            const validityEvent = new Event('invalid', {
                bubbles: false,
                cancelable: true,
                composed: false
            });
            ref.dispatchEvent(validityEvent);
        }
        return validity.valid;
    }
    /** The form element the custom element is associated with */
    get form() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.`);
        let form;
        if (ref.constructor['formAssociated'] === true) {
            form = findParentForm(ref);
        }
        return form;
    }
    /** A list of all relative form labels for this element */
    get labels() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.`);
        const id = ref.getAttribute('id');
        const hostRoot = ref.getRootNode();
        if (hostRoot && id) {
            return hostRoot.querySelectorAll(`[for="${id}"]`);
        }
        return [];
    }
    /** Will report the elements validity state */
    reportValidity() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.`);
        /** If the element will not validate, it is valid by default */
        if (!this.willValidate) {
            return true;
        }
        const valid = this.checkValidity();
        const anchor = validationAnchorMap.get(this);
        if (anchor && !ref.constructor['formAssociated']) {
            throw new DOMException(`Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.`);
        }
        if (!valid && anchor) {
            ref.focus();
            anchor.focus();
        }
        return valid;
    }
    /** Sets the element's value within the form */
    setFormValue(value) {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element.`);
        removeHiddenInputs(this);
        if (value != null && !(value instanceof FormData)) {
            if (ref.getAttribute('name')) {
                const hiddenInput = createHiddenInput(ref, this);
                hiddenInput.value = value;
            }
        }
        else if (value != null && value instanceof FormData) {
            Array.from(value).reverse().forEach(([formDataKey, formDataValue]) => {
                if (typeof formDataValue === 'string') {
                    const hiddenInput = createHiddenInput(ref, this);
                    hiddenInput.name = formDataKey;
                    hiddenInput.value = formDataValue;
                }
            });
        }
        refValueMap.set(ref, value);
    }
    /**
     * Sets the element's validity. The first argument is a partial ValidityState object
     * reflecting the changes to be made to the element's validity. If the element is invalid,
     * the second argument sets the element's validation message.
     *
     * If the field is valid and a message is specified, the method will throw a TypeError.
     */
    setValidity(validityChanges, validationMessage, anchor) {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element.`);
        if (!validityChanges) {
            throw new TypeError('Failed to execute \'setValidity\' on \'ElementInternals\': 1 argument required, but only 0 present.');
        }
        validationAnchorMap.set(this, anchor);
        const validity = validityMap.get(this);
        const validityChangesObj = {};
        for (const key in validityChanges) {
            validityChangesObj[key] = validityChanges[key];
        }
        if (Object.keys(validityChangesObj).length === 0) {
            setValid(validity);
        }
        const check = { ...validity, ...validityChangesObj };
        delete check.valid;
        const { valid } = reconcileValidity(validity, check, this.form);
        if (!valid && !validationMessage) {
            throw new DOMException(`Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.`);
        }
        validationMessageMap.set(this, valid ? '' : validationMessage);
        // check to make sure the host element is connected before adding attributes
        // because safari doesnt allow elements to have attributes added in the constructor
        if (ref.isConnected) {
            ref.toggleAttribute('internals-invalid', !valid);
            ref.toggleAttribute('internals-valid', valid);
            ref.setAttribute('aria-invalid', `${!valid}`);
        }
        else {
            validityUpgradeMap.set(ref, this);
        }
    }
    get shadowRoot() {
        const ref = refMap.get(this);
        const shadowRoot = shadowRootMap.get(ref);
        if (shadowRoot) {
            return shadowRoot;
        }
        return null;
    }
    /** The element's validation message set during a call to ElementInternals.setValidity */
    get validationMessage() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element.`);
        return validationMessageMap.get(this);
    }
    /** The current validity state of the object */
    get validity() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element.`);
        const validity = validityMap.get(this);
        return validity;
    }
    /** If true the element will participate in a form's constraint validation. */
    get willValidate() {
        const ref = refMap.get(this);
        throwIfNotFormAssociated(ref, `Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element.`);
        if ((ref.disabled || ref.hasAttribute('disabled')) ||
            ref.hasAttribute('readonly')) {
            return false;
        }
        return true;
    }
}
export function isElementInternalsSupported() {
    if (typeof window === 'undefined' || !window.ElementInternals || !HTMLElement.prototype.attachInternals) {
        return false;
    }
    class ElementInternalsFeatureDetection extends HTMLElement {
        constructor() {
            super();
            this.internals = this.attachInternals();
        }
    }
    const randomName = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, '')}`;
    customElements.define(randomName, ElementInternalsFeatureDetection);
    const featureDetectionElement = new ElementInternalsFeatureDetection();
    return [
        'shadowRoot',
        'form',
        'willValidate',
        'validity',
        'validationMessage',
        'labels',
        'setFormValue',
        'setValidity',
        'checkValidity',
        'reportValidity'
    ].every(prop => prop in featureDetectionElement.internals);
}
let hasElementInternalsPolyfillBeenApplied = false;
let hasCustomStateSetPolyfillBeenApplied = false;
/**
 * Forcibly applies the polyfill for CustomStateSet.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet
 */
export function forceCustomStateSetPolyfill(attachInternals) {
    if (hasCustomStateSetPolyfillBeenApplied) {
        return;
    }
    hasCustomStateSetPolyfillBeenApplied = true;
    window.CustomStateSet = CustomStateSet;
    if (attachInternals) {
        HTMLElement.prototype.attachInternals = function (...args) {
            const internals = attachInternals.call(this, args);
            internals.states = new CustomStateSet(this);
            return internals;
        };
    }
}
/**
 * Forcibly applies the polyfill for ElementInternals. Useful for situations
 * like Chrome extensions where Chrome supports ElementInternals, but the
 * CustomElements polyfill is required.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals
 *
 * @param forceCustomStateSet Optional: when true, forces the
 * [CustomStateSet](https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet)
 * polyfill as well.
 */
export function forceElementInternalsPolyfill(forceCustomStateSet = true) {
    if (hasElementInternalsPolyfillBeenApplied) {
        return;
    }
    hasElementInternalsPolyfillBeenApplied = true;
    if (typeof window !== 'undefined') {
        /** @ts-expect-error: we need to replace the default ElementInternals */
        window.ElementInternals = ElementInternals;
    }
    if (typeof CustomElementRegistry !== 'undefined') {
        const define = CustomElementRegistry.prototype.define;
        CustomElementRegistry.prototype.define = function (name, constructor, options) {
            if (constructor.formAssociated) {
                const connectedCallback = constructor.prototype.connectedCallback;
                constructor.prototype.connectedCallback = function () {
                    if (!connectedCallbackMap.has(this)) {
                        connectedCallbackMap.set(this, true);
                        if (this.hasAttribute('disabled')) {
                            setDisabled(this, true);
                        }
                    }
                    if (connectedCallback != null) {
                        connectedCallback.apply(this);
                    }
                    // always upgradeInternals in connectedCallback instead of constructor
                    upgradeInternals(this);
                };
            }
            define.call(this, name, constructor, options);
        };
    }
    /**
     * Attaches an ElementInternals instance to a custom element. Calling this method
     * on a built-in element will throw an error.
     */
    if (typeof HTMLElement !== 'undefined') {
        HTMLElement.prototype.attachInternals = function () {
            if (!this.tagName) {
                /** This happens in the LitSSR environment. Here we can generally ignore internals for now */
                return {};
            }
            else if (this.tagName.indexOf('-') === -1) {
                throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.`);
            }
            if (internalsMap.has(this)) {
                throw new DOMException(`DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.`);
            }
            return new ElementInternals(this);
        };
    }
    if (typeof Element !== 'undefined') {
        function attachShadowObserver(...args) {
            const shadowRoot = attachShadow.apply(this, args);
            shadowRootMap.set(this, shadowRoot);
            if (mutationObserverExists()) {
                const observer = new MutationObserver(observerCallback);
                if (window.ShadyDOM) {
                    observer.observe(this, observerConfig);
                }
                else {
                    observer.observe(shadowRoot, observerConfig);
                }
                shadowHostsMap.set(this, observer);
            }
            return shadowRoot;
        }
        const attachShadow = Element.prototype.attachShadow;
        Element.prototype.attachShadow = attachShadowObserver;
    }
    if (mutationObserverExists() && typeof document !== 'undefined') {
        const documentObserver = new MutationObserver(observerCallback);
        documentObserver.observe(document.documentElement, observerConfig);
    }
    /**
     * Keeps the polyfill from throwing in environments where HTMLFormElement
     * is undefined like in a server environment
     */
    if (typeof HTMLFormElement !== 'undefined') {
        patchFormPrototype();
    }
    if (forceCustomStateSet ||
        (typeof window !== "undefined" && !window.CustomStateSet)) {
        forceCustomStateSetPolyfill();
    }
}
