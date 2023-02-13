/** Emulate the browser's default ValidityState object */
export declare class ValidityState implements globalThis.ValidityState {
    badInput: boolean;
    customError: boolean;
    patternMismatch: boolean;
    rangeOverflow: boolean;
    rangeUnderflow: boolean;
    stepMismatch: boolean;
    tooLong: boolean;
    tooShort: boolean;
    typeMismatch: boolean;
    valid: boolean;
    valueMissing: boolean;
    constructor();
}
/**
 * Reset a ValidityState object back to valid
 * @param {ValidityState} validityObject - The object to modify
 * @return {ValidityState} - The modified ValidityStateObject
 */
export declare const setValid: (validityObject: ValidityState) => ValidityState;
/**
 * Reconcile a ValidityState object with a new state object
 * @param {ValidityState} - The base object to reconcile with new state
 * @param {Object} - A partial ValidityState object to override the original
 * @return {ValidityState} - The updated ValidityState object
 */
export declare const reconcileValidity: (validityObject: ValidityState, newState: Partial<ValidityState>, form: HTMLFormElement) => ValidityState;
/**
 * Check if a partial ValidityState object should be valid
 * @param {Object} - A partial ValidityState object
 * @return {Boolean} - Should the new object be valid
 */
export declare const isValid: (validityState: Partial<ValidityState>) => boolean;
