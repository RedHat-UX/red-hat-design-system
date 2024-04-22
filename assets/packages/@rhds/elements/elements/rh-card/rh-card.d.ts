import { LitElement } from 'lit';
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 * @summary     Arranges content and interactive elements in a layout
 * @slot        header
 *              If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        footer
 *              Use this slot for anything that you want to be stuck to the base of the card.
 * @csspart     container
 *              The container for the card. Contains the header, body, and footer.
 * @csspart     header
 *              The header for the card. Contains the header slot.
 * @csspart     body
 *              The body for the card. Contains the default slot.
 * @csspart     footer
 *              The footer for the card. Contains the footer slot.
 * @cssprop     {<length>} --rh-card-header-font-size
 *              Font size for header on card
 *              {@default `1.5rem`}
 */
export declare class RhCard extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static styles: CSSStyleSheet[];
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
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-card': RhCard;
    }
}
