import { LitElement } from 'lit';
/**
 * Navigation Menu
 * @slot - Place element content here
 */
export declare class RhNavigationPrimaryItemMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private compact?;
    protected firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary-item-menu': RhNavigationPrimaryItemMenu;
    }
}
