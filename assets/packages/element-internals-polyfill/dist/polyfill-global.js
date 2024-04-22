export function isElementInternalsSupported() {
    if (typeof window === 'undefined' || !window.ElementInternals || !HTMLElement.prototype.attachInternals) {
        return false;
    }
}
export function determineNeededPolyfills() {
    class ElementInternalsFeatureDetection extends HTMLElement {
        constructor() {
            super();
            this.internals = this.attachInternals();
        }
    }
    const randomName = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, '')}`;
    customElements.define(randomName, ElementInternalsFeatureDetection);
    const featureDetectionElement = new ElementInternalsFeatureDetection();
    const isFormAssociatedPolyfillNeeded = [
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
    const isCustomStateSetPolyfillNeeded = featureDetectionElement.internals.states;
    return {
        isFormAssociatedPolyfillNeeded,
        isCustomStateSetPolyfillNeeded
    };
}
export function maybePolyfillGlobalElementInternalsObject() {
    if (!isElementInternalsSupported()) {
        class ElementInternals {
            constructor(ref) {
                if (!ref || !ref.tagName || ref.tagName.indexOf('-') === -1) {
                    throw new TypeError('Illegal constructor');
                }
                /**
                 * Other initialization work can be done in the attachInternals
                 * HTMLElement prototype method
                 */
            }
        }
        /**
         * Expect error because the our mocked constructor needs to throw if
         * someone attempts to call it without a ref element
         */
        /** @ts-expect-error */
        globalThis.ElementInternals = ElementInternals;
    }
}
