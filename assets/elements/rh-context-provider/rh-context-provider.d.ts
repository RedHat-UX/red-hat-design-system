import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { LitElement } from 'lit';
export declare class ContextProvider extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    /**
     * Sets color theme based on parent context
     */
    on?: ColorTheme;
    render(): import("lit-html").TemplateResult<1>;
}
