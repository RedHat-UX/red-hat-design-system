import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
 * @summary Provides background color context for elements placed on top
 *
 * @alias surface
 *
 * @slot - The `<rh-surface>` element has a single anonymous slot which accepts any content and does not provide additional layout styling
 *
 * @example A surface providing a theme to a spinner
 *          ```html
 *          <rh-surface color-palette="light">
 *            <rh-spinner>Loading...</rh-spinner>
 *          </rh-surface>
 *          ```
 */
export declare class RhSurface extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets color palette, which affects the element's styles as well as
     * descendants' color theme. The default surface color palette is 'lightest',
     * Surface always overrides the parent's color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-surface': RhSurface;
    }
}
