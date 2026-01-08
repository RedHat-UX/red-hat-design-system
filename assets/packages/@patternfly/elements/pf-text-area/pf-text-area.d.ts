import { LitElement, type TemplateResult } from 'lit';
/**
 * A **text area** component is used for entering a paragraph of text that is longer than one line.
 * @alias Text Area
 */
export declare class PfTextArea extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Accessible label for the input when no `<label>` element is provided. */
    accessibleLabel?: string;
    /**
     * Value to indicate if the input is modified to show that validation state.
     * If set to success, input will be modified to indicate valid state.
     * If set to warning,  input will be modified to indicate warning state.
     * Invalid inputs will display an error state
     */
    validated?: 'success' | 'warning';
    /** Flag to show if the input is disabled. */
    disabled: boolean;
    /** Flag to show if the text area is required. */
    required: boolean;
    /** Flag to show if the input is read only. */
    readonly: boolean;
    /** Input placeholder. */
    placeholder?: string;
    /** Value of the input. */
    value: string;
    /** Sets the orientation to limit the resize to */
    resize?: 'horizontal' | 'vertical' | 'both';
    /** Flag to modify height based on contents. */
    autoResize: boolean;
    willUpdate(): void;
    render(): TemplateResult<1>;
    firstUpdated(): void;
    formDisabledCallback(): Promise<void>;
    setCustomValidity(message: string): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-text-area': PfTextArea;
    }
}
