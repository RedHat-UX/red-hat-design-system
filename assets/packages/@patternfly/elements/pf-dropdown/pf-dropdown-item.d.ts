import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
export declare class DropdownItemChange extends Event {
    constructor();
}
/**
 * Represents an item for a dropdown component.
 * @slot icon
 *      Optional slot for an icon
 * @slot description
 *      Optional slot for item description
 * @slot -
 *      Content for the dropdown item
 */
export declare class PfDropdownItem extends LitElement {
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * The value associated with the dropdown item.
     * This value can be used to identify the selected item
     */
    value?: string;
    /**
     * href for link dropdown items
     */
    href?: string;
    /**
     * Flag indicating whether the item is active
     */
    active: boolean;
    /**
     * Indicates whether the dropdown item is disabled.
     * A disabled item cannot be selected.
     */
    disabled: boolean;
    /** Item description; overridden by `description` slot */
    description?: string;
    private ctx?;
    /** @internal */
    menuItem: HTMLElement;
    protected updated(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-item': PfDropdownItem;
    }
}
