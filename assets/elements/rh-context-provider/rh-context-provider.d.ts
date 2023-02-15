import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export declare class RhContextProvider extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
