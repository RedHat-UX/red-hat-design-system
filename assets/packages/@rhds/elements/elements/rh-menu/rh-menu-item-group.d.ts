import { LitElement, type TemplateResult } from 'lit';
/**
 * Menu Dropdown Item Group
 * @alias Menu Dropdown
 */
export declare class RhMenuItemGroup extends LitElement {
    static readonly styles: CSSStyleSheet[];
    groupHeading?: string;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu-item-group': RhMenuItemGroup;
    }
}
