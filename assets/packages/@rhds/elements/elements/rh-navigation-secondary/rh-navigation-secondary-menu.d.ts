import { LitElement } from 'lit';
/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 *
 * @cssprop  --rh-navigation-secondary-menu-section-grid - grid-template-columns for menu sections {@default `repeat(auto-fit, minmax(15.5rem, 1fr))`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-section-grid-gap - grid-gap for menu sections {@default `32px`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-content-max-width - max-width for menu content {@default `1136px`}
 *
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-space-xl
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-3xl
 * @cssprop --rh-space-4xl
 * @cssprop --rh-box-shadow-sm
 */
export declare class RhNavigationSecondaryMenu extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    layout: 'fixed-width' | 'full-width';
    /**
     * `visible` toggles on click (default: false)
     */
    visible: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare class RhSecondaryNavMenu extends RhNavigationSecondaryMenu {
    #private;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-menu': RhNavigationSecondaryMenu;
        'rh-secondary-nav-menu': RhSecondaryNavMenu;
    }
}
export {};
