import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A subnavigation allows users to navigate between a small number of page links.
 *
 * @summary Organizes content into sections using tabbed pages
 *
 * @alias subnavigation
 */
export declare class RhSubnav extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    private hasNavigationLinks;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     * @deprecated `<rh-subnav>` reacts to the parent set color-scheme and should not set its own color-palette.
     * The color-palette attribute will be removed in a future release.
     */
    colorPalette?: ColorPalette;
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "subnavigation" if no attribute/property is set.
     */
    accessibleLabel: string;
    /**
     * Label for the scroll back button
     */
    labelScrollLeft: string;
    /**
     * Label for the scroll forward button
     */
    labelScrollRight: string;
    private linkList;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-subnav': RhSubnav;
    }
}
