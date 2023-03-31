import { LitElement } from 'lit';
/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot section          - Section, expects `<ul>, <ol>, <rh-navigation-secondary-section>` elements, applies auto grid styles on full-width
 * @slot cta              - Menu level CTA, expects a `<rh-cta>`
 *
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 * @csspart cta           - container - <div> element, wrapper for cta
 */
export declare class RhNavigationSecondaryMenu extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    layout: 'fixed-width' | 'full-width';
    /**
     * `visible` property is false initially then when a dropdown is clicked is toggled
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
