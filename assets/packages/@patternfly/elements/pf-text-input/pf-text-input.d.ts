import { LitElement, type TemplateResult } from 'lit';
/**
 * A **text input** is used to gather free-form text from a user.
 * @alias Text Input
 */
export declare class PfTextInput extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Trim text on left */
    leftTruncated: boolean;
    /**
     * Value to indicate if the input is modified to show that validation state.
     * If set to success, input will be modified to indicate valid state.
     * If set to warning,  input will be modified to indicate warning state.
     * Invalid inputs will display an error state
     */
    validated?: 'success' | 'warning';
    /** icon variant */
    icon?: 'calendar' | 'clock' | 'search';
    /** Accessible label for the input when no `<label>` element is provided. */
    accessibleLabel?: string;
    /** Custom icon url to set as the text input's background-image */
    customIconUrl?: string;
    /** Dimensions for the custom icon set as the text input's background-size */
    customIconDimensions?: string;
    plain: boolean;
    /** Type that the input accepts. */
    type?: 'text' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'time' | 'url';
    /** Flag to show if the input is disabled. */
    disabled: boolean;
    /** Flag to show if the input is required. */
    required: boolean;
    /** Validation pattern, like `<input>` */
    pattern?: string;
    /** Flag to show if the input is read only. */
    readonly: boolean;
    /** Helper text is text below a form field that helps a user provide the right information, like "Enter a unique name". */
    helperText?: string;
    /** If set to 'blur', will validate when focus leaves the input */
    validateOn?: 'blur';
    /** Displayed when validation fails */
    errorText?: string;
    /** Input placeholder. */
    placeholder?: string;
    /** Value of the input. */
    value: string;
    willUpdate(): void;
    render(): TemplateResult<1>;
    formStateRestoreCallback(state: string, mode: string): Promise<void>;
    formDisabledCallback(): Promise<void>;
    setCustomValidity(message: string): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-text-input': PfTextInput;
    }
}
