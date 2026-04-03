import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Expandable dropdown menu panel for secondary navigation. Provides
 * `full-width` (default) and `fixed-width` layouts with content
 * organized in a CSS grid. Must be placed inside the `menu` slot of
 * an `<rh-navigation-secondary-dropdown>`. Tab navigates through
 * menu content; Escape closes the menu. Screen readers access
 * content via section headings and `aria-labelledby` associations.
 *
 * @summary Expandable dropdown menu panel for secondary navigation
 */
export declare class RhNavigationSecondaryMenu extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Color palette for the menu panel surface. Should remain `'lightest'`
     * (default) as secondary nav menus always render on a light surface.
     * Defaults to `'lightest'`.
     */
    colorPalette: ColorPalette;
    /**
     * Controls the menu panel width. `'full-width'` (default) spans the browser
     * width with content in a responsive grid. `'fixed-width'` constrains the
     * panel to its content width, positioned below the trigger link. USE
     * `'fixed-width'` for simple menus with fewer sections. Defaults to `'full-width'`.
     */
    layout: 'fixed-width' | 'full-width';
    /**
     * Controls whether the menu panel is visible. Managed automatically by the
     * parent `<rh-navigation-secondary-dropdown>`. When `true`, the menu is
     * displayed; when `false`, it is hidden. AVOID setting directly.
     * Defaults to `false`.
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
