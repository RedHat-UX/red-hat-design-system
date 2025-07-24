import { LitElement } from 'lit';
/**
 * A menu section which auto upgrades accessibility for headers and sibling list
 * @summary 'A menu section which auto upgrades accessibility for headers and sibling list'
 */
export declare class RhNavigationSecondaryMenuSection extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-menu-section': RhNavigationSecondaryMenuSection;
    }
}
