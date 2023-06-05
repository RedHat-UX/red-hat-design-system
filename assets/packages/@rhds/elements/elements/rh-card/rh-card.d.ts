import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
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
 * @cssprop     --rh-border-width-lg
 * @cssprop     --rh-color-border-subtle-on-dark
 * @cssprop     --rh-color-border-subtle-on-light
 * @cssprop     --rh-color-surface-darkest
 * @cssprop     --rh-color-surface-lightest
 * @cssprop     --rh-color-text-primary-on-dark
 * @cssprop     --rh-color-text-primary-on-light
 * @cssprop     --rh-font-family-body-text
 * @cssprop     --rh-font-size-heading-sm
 * @cssprop     --rh-font-weight-body-text-medium
 * @cssprop     --rh-line-height-body-text
 * @cssprop     --rh-space-lg
 * @cssprop     --rh-space-xl
 * @cssprop     --rh-space-2xl
 *
 */
export declare class RhCard extends LitElement {
    static readonly version = "{{version}}";
    static styles: import("lit").CSSResult[];
    protected slots: SlotController;
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
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-card': RhCard;
    }
}
