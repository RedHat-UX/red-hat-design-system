import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Dropdown menu for secondary nav, available in full-width and fixed-with sizes
 * @summary 'Dropdown menu for secondary nav, available in full-width and fixed-with sizes'
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
