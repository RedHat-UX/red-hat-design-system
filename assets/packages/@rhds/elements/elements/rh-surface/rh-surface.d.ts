import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * A surface provides color context to descendants via `color-palette`.
 * Authors must set a `color-palette` and should use surface only when
 * containers like `rh-card` are not appropriate. Each palette provides
 * WCAG-compliant contrast when using the default theme. Surface is
 * non-interactive: Tab and focus pass through to focusable children.
 * Users of AT perceive no additional semantics from this element.
 *
 * @summary Provides background color and theming context for children
 */
export declare class RhSurface extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets the color palette, which controls the element's background color
     * and propagates accessible text and interactive colors to descendants.
     * Accepted values are `lightest`, `lighter`, `light`, `dark`, `darker`,
     * and `darkest`. Surface always overrides the parent's color context.
     * Your theme will influence these colors so check there first if you
     * are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values.
     */
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-surface': RhSurface;
    }
}
