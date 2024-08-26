import { LitElement } from 'lit';
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 * @summary     Arranges content and interactive elements in a layout
 * @slot        header
 *              If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        image
 *              Use this slot for the promo variant of the card. Images & CTA's are most often slotted here.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        footer
 *              Use this slot for anything that you want to be stuck to the base of the card.
 * @csspart     container
 *              The container for the card. Contains the image, header, body, and footer.
 * @csspart     header
 *              The header for the card. Contains the header slot.
 * @csspart     image
 *              The image for the promo variant for the card. Contains the image slot.
 * @csspart     body
 *              The body for the card. Contains the default slot.
 * @csspart     footer
 *              The footer for the card. Contains the footer slot.
 * @cssprop     [--rh-card-heading-font-family=--rh-font-family-heading]
 *              The font family for headings in the header and body
 * @cssprop     [--rh-card-heading-font-size=--rh-font-size-heading-sm]
 *              The font size for headings in the header and body
 * @cssprop     [--rh-card-heading-font-weight=--rh-font-weight-body-text-medium]
 *              The font weight for headings in the header and body
 */
export declare class RhCard extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static styles: CSSStyleSheet[];
    private static slots;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     *
     * Card always resets its context to `base`, unless explicitly provided with a `color-palette`.
     */
    colorPalette?: 'darkest' | 'lightest' | 'lighter';
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
