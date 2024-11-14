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
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--FontSize=1rem]
 *          Dropdown item font size
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--FontWeight=400]
 *          Dropdown item font weight
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--LineHeight=1.5]
 *          Dropdown item line height
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--Color=#151515]
 *          Dropdown item color
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--BackgroundColor=transparent]
 *          Dropdown item background color
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--PaddingTop=0.5rem]
 *          Dropdown item padding top
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--PaddingRight=1rem]
 *          Dropdown item padding right
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--PaddingBottom=0.5rem]
 *          Dropdown item padding bottom
 *
 * @cssprop {<length>} [--pf-c-dropdown__menu-item--PaddingLeft=1rem]
 *          Dropdown item padding left
 *
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
