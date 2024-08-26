import { LitElement, type TemplateResult } from 'lit';
/**
 * Represents a group of items for a dropdown component.
 * @slot
 *     Content for the group of dropdown items
 */
export declare class PfDropdownGroup extends LitElement {
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * The label for the group of dropdown items.
     */
    label?: string;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-group': PfDropdownGroup;
    }
}
