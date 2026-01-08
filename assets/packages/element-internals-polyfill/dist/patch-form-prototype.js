import { HTMLFormControlsCollection } from './HTMLFormControlsCollection.js';
import { formElementsMap } from './maps.js';
import { overrideFormMethod } from './utils.js';
/**
 * Patch the HTMLElement prototype
 *
 * This function patches checkValidity, reportValidity and elements
 */
export function patchFormPrototype() {
    const checkValidity = HTMLFormElement.prototype.checkValidity;
    HTMLFormElement.prototype.checkValidity = checkValidityOverride;
    const reportValidity = HTMLFormElement.prototype.reportValidity;
    HTMLFormElement.prototype.reportValidity = reportValidityOverride;
    function checkValidityOverride(...args) {
        let returnValue = checkValidity.apply(this, args);
        return overrideFormMethod(this, returnValue, 'checkValidity');
    }
    function reportValidityOverride(...args) {
        let returnValue = reportValidity.apply(this, args);
        return overrideFormMethod(this, returnValue, 'reportValidity');
    }
    const { get } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'elements');
    Object.defineProperty(HTMLFormElement.prototype, 'elements', {
        get(...args) {
            const elements = get.call(this, ...args);
            const polyfilledElements = Array.from(formElementsMap.get(this) || []);
            // If there are no polyfilled elements, return the native elements collection
            if (polyfilledElements.length === 0) {
                return elements;
            }
            // Merge the native elements with the polyfilled elements
            // and order them by their position in the DOM
            const orderedElements = Array.from(elements).concat(polyfilledElements).sort((a, b) => {
                if (a.compareDocumentPosition) {
                    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
                }
                return 0;
            });
            return new HTMLFormControlsCollection(orderedElements);
        },
    });
}
