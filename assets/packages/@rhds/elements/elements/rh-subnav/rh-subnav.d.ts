import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A subnavigation provides a horizontal list of links for navigating
 * related pages. Authors should slot `<rh-navigation-link>` elements
 * as children; authors should avoid slotting bare `<a>` elements, which
 * are deprecated. Each link must have visible text content for
 * accessibility. When more than one subnav appears on a page, authors
 * should set `accessible-label` so screen readers can distinguish them.
 *
 * Overflow scroll buttons appear when links exceed the available space.
 * All links are keyboard accessible via Tab and Enter.
 *
 * @summary Displays a horizontal list of navigation links for related pages
 *
 * @alias subnavigation
 *
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
