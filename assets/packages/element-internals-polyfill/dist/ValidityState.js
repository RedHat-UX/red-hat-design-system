import { setFormValidity } from './utils.js';
/** Emulate the browser's default ValidityState object */
export class ValidityState {
    constructor() {
        this.badInput = false;
        this.customError = false;
        this.patternMismatch = false;
        this.rangeOverflow = false;
        this.rangeUnderflow = false;
        this.stepMismatch = false;
        this.tooLong = false;
        this.tooShort = false;
        this.typeMismatch = false;
        this.valid = true;
        this.valueMissing = false;
        Object.seal(this);
    }
}
/**
 * Reset a ValidityState object back to valid
 * @param {ValidityState} validityObject - The object to modify
 * @return {ValidityState} - The modified ValidityStateObject
 */
export const setValid = (validityObject) => {
    validityObject.badInput = false;
    validityObject.customError = false;
    validityObject.patternMismatch = false;
    validityObject.rangeOverflow = false;
    validityObject.rangeUnderflow = false;
    validityObject.stepMismatch = false;
    validityObject.tooLong = false;
    validityObject.tooShort = false;
    validityObject.typeMismatch = false;
    validityObject.valid = true;
    validityObject.valueMissing = false;
    return validityObject;
};
/**
 * Reconcile a ValidityState object with a new state object
 * @param {ValidityState} - The base object to reconcile with new state
 * @param {Object} - A partial ValidityState object to override the original
 * @return {ValidityState} - The updated ValidityState object
 */
export const reconcileValidity = (validityObject, newState, form) => {
    validityObject.valid = isValid(newState);
    Object.keys(newState).forEach(key => validityObject[key] = newState[key]);
    if (form) {
        setFormValidity(form);
    }
    return validityObject;
};
/**
 * Check if a partial ValidityState object should be valid
 * @param {Object} - A partial ValidityState object
 * @return {Boolean} - Should the new object be valid
 */
export const isValid = (validityState) => {
    let valid = true;
    for (let key in validityState) {
        if (key !== 'valid' && validityState[key] !== false) {
            valid = false;
        }
    }
    return valid;
};
