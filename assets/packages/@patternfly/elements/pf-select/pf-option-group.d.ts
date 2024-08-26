import { LitElement, type TemplateResult } from 'lit';
/**
 * Group of options within a listbox
 * @slot - `<pf-option>` or `<hr>` elements
 * @slot label - Group label. Overrides the `label` attribute.
 */
export declare class PfOptionGroup extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Group description. Overridden by `label` slot. */
    label?: string;
    /** whether group is disabled */
    disabled: boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-option-group': PfOptionGroup;
    }
}
