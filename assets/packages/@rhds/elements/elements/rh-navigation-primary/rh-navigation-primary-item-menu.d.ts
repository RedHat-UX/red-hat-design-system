import { LitElement } from 'lit';
/**
 * A navigation menu provides a responsive content container for navigation
 * item dropdowns. This element must be a child of `rh-navigation-primary-item`
 * and should not be used independently. Slotted content should use semantic
 * heading and list elements for screen reader navigation. Focus is managed
 * within this container; Tab moves through focusable children and Escape
 * closes the parent dropdown.
 *
 * @summary Content container for navigation item dropdowns
 *
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
