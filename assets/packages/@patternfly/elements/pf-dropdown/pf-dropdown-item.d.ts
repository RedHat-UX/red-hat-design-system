import { LitElement, type PropertyValues } from 'lit';
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
 * @cssprop {<length>} --pf-c-dropdown__menu-item--FontSize
 *          Dropdown item font size
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--FontWeight
 *          Dropdown item font weight
 *          {@default `400`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--LineHeight
 *          Dropdown item line height
 *          {@default `1.5`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--Color
 *          Dropdown item color
 *          {@default `#151515`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--BackgroundColor
 *          Dropdown item background color
 *          {@default `transparent`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--PaddingTop
 *          Dropdown item padding top
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--PaddingRight
 *          Dropdown item padding right
 *          {@default `1rem`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--PaddingBottom
 *          Dropdown item padding bottom
 *          {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-dropdown__menu-item--PaddingLeft
 *          Dropdown item padding left
 *          {@default `1rem`}
 */
export declare class PfDropdownItem extends LitElement {
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-dropdown-item': PfDropdownItem;
    }
}
