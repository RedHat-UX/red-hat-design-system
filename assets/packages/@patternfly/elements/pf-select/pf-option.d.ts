import { LitElement, type TemplateResult } from 'lit';
/**
 * Option within a listbox
 * @slot -
 *        option text
 * @slot icon
 *        optional icon
 * @slot description
 *        optional description
 */
export declare class PfOption extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** whether option is disabled */
    disabled: boolean;
    /** form value for this option */
    get value(): string;
    set value(v: string);
    /** whether option is selected */
    selected: boolean;
    /** whether option is active descendant */
    active: boolean;
    /** Optional option description; overridden by description slot. */
    description: string;
    private _slottedText;
    /**
     * this option's position relative to the other options
     */
    set posInSet(posInSet: number | null);
    get posInSet(): number | null;
    /**
     * total number of options
     */
    set setSize(setSize: number | null);
    get setSize(): number | null;
    render(): TemplateResult<1>;
    private selectedChanged;
    private disabledChanged;
    /**
     * text content within option (used for filtering)
     */
    get optionText(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-option': PfOption;
    }
}
