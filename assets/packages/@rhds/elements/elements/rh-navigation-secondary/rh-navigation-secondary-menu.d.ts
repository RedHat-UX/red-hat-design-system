import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
/**
 * Dropdown menu for secondary nav, available in full-width and fixed-with sizes
 * @summary 'Dropdown menu for secondary nav, available in full-width and fixed-with sizes'
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 * @cssprop  [--rh-navigation-secondary-menu-section-grid=repeat(auto-fit, minmax(15.5rem, 1fr))]
 *          grid-template-columns for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-section-grid-gap=32px]
 *           grid-gap for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-content-max-width=1136px]
 *           max-width for menu content
 */
export declare class RhNavigationSecondaryMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Color palette (default: lightest)
     * Secondary nav menus are always represented on the lightest color palette.
     */
    colorPalette: ColorPalette;
    /**
     * Layout (default: full-width)
     * Secondary nav menus by default are always full-width, but can be set to fixed-width for special cases.
     */
    layout: 'fixed-width' | 'full-width';
    /**
     * `visible` toggles on click (default: false)
     */
    visible: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-menu': RhNavigationSecondaryMenu;
    }
}
