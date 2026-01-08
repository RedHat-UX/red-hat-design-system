import { CustomState } from "./CustomStateSet.js";
import { ElementInternals } from "./element-internals.js";
declare global {
    interface ARIAMixin {
        /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBrailleLabel) */
        ariaBrailleLabel: string | null;
        /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaBrailleRoleDescription) */
        ariaBrailleRoleDescription: string | null;
        /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaColIndexText) */
        ariaColIndexText: string | null;
        /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaRelevant) */
        ariaRelevant: string | null;
        /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaRowIndexText) */
        ariaRowIndexText: string | null;
    }
    interface ElementInternals extends ARIAMixin {
        checkValidity: () => boolean;
        readonly form: HTMLFormElement | null;
        readonly labels: NodeList;
        reportValidity: () => boolean;
        setFormValue: (value: File | string | FormData | null, state?: File | string | FormData | null) => void;
        setValidity: (flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement) => void;
        readonly shadowRoot: ShadowRoot | null;
        readonly states: CustomStateSet;
        readonly validationMessage: string;
        readonly validity: ValidityState;
        readonly willValidate: boolean;
    }
    interface FormAssociatedCustomElement extends HTMLElement {
        formDisabledCallback?: (isDisabled: boolean) => void;
        formResetCallback: () => void;
        formAssociatedCallback: (form: HTMLFormElement) => void;
    }
    interface CustomStateSet extends Set<CustomState> {
    }
}
export interface ICustomElement extends HTMLElement {
    constructor: (...args: any[]) => HTMLElement;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attachedCallback(): void;
    attachInternals(): ElementInternals;
    formDisabledCallback(isDisabled: boolean): void;
    formResetCallback(): void;
    formAssociatedCallback(form: HTMLFormElement): void;
    disabled?: boolean;
}
export type LabelsList = NodeListOf<HTMLLabelElement>;
declare global {
    interface HTMLElement {
        attachInternals(): ElementInternals;
    }
}
