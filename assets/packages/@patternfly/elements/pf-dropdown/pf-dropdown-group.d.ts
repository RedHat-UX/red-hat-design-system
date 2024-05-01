import { LitElement } from 'lit';
/**
 * Represents a group of items for a dropdown component.
 * @slot
 *     Content for the group of dropdown items
 */
export declare class PfDropdownGroup extends LitElement {
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    /**
     * The label for the group of dropdown items.
     */
    label?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-group': PfDropdownGroup;
    }
}
