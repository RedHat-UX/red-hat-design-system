import { IElementInternals, ICustomElement, LabelsList } from './types.js';
import { CustomStateSet } from './CustomStateSet.js';
export declare class ElementInternals implements IElementInternals {
    ariaAtomic: string;
    ariaAutoComplete: string;
    ariaBusy: string;
    ariaChecked: string;
    ariaColCount: string;
    ariaColIndex: string;
    ariaColIndexText: string;
    ariaColSpan: string;
    ariaCurrent: string;
    ariaDisabled: string;
    ariaExpanded: string;
    ariaHasPopup: string;
    ariaHidden: string;
    ariaInvalid: string;
    ariaKeyShortcuts: string;
    ariaLabel: string;
    ariaLevel: string;
    ariaLive: string;
    ariaModal: string;
    ariaMultiLine: string;
    ariaMultiSelectable: string;
    ariaOrientation: string;
    ariaPlaceholder: string;
    ariaPosInSet: string;
    ariaPressed: string;
    ariaReadOnly: string;
    ariaRelevant: string;
    ariaRequired: string;
    ariaRoleDescription: string;
    ariaRowCount: string;
    ariaRowIndex: string;
    ariaRowIndexText: string;
    ariaRowSpan: string;
    ariaSelected: string;
    ariaSetSize: string;
    ariaSort: string;
    ariaValueMax: string;
    ariaValueMin: string;
    ariaValueNow: string;
    ariaValueText: string;
    role: string;
    states: CustomStateSet;
    static get isPolyfilled(): boolean;
    constructor(ref: ICustomElement);
    /**
     * Will return true if the element is in a valid state
     */
    checkValidity(): boolean;
    /** The form element the custom element is associated with */
    get form(): HTMLFormElement;
    /** A list of all relative form labels for this element */
    get labels(): LabelsList;
    /** Will report the elements validity state */
    reportValidity(): boolean;
    /** Sets the element's value within the form */
    setFormValue(value: string | FormData | null): void;
    /**
     * Sets the element's validity. The first argument is a partial ValidityState object
     * reflecting the changes to be made to the element's validity. If the element is invalid,
     * the second argument sets the element's validation message.
     *
     * If the field is valid and a message is specified, the method will throw a TypeError.
     */
    setValidity(validityChanges: Partial<globalThis.ValidityState>, validationMessage?: string, anchor?: HTMLElement): void;
    get shadowRoot(): ShadowRoot | null;
    /** The element's validation message set during a call to ElementInternals.setValidity */
    get validationMessage(): string;
    /** The current validity state of the object */
    get validity(): globalThis.ValidityState;
    /** If true the element will participate in a form's constraint validation. */
    get willValidate(): boolean;
}
declare global {
    interface CustomElementConstructor {
        formAssociated?: boolean;
    }
    interface Window {
        ElementInternals: typeof ElementInternals;
    }
}
export declare function isElementInternalsSupported(): boolean;
