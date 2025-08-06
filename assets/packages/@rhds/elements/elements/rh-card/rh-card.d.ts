import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 *
 * @summary     Arranges content and interactive elements in a layout
 *
 * @alias card
 *
 */
export declare class RhCard extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    /**
     * Change the style of the card to be a "Promo"
     */
    variant?: 'promo';
    /**
     * Change a promo with an image + body + footer to use the `full-width` style
     */
    fullWidth?: boolean | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-card': RhCard;
    }
}
