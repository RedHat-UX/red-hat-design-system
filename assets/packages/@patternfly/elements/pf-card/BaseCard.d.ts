import { LitElement } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
/**
 * This element creates a header, body, and footer region in which to place
 * content or other components.
 *
 * @summary Gives a preview of information in a small layout
 *
 * @slot header
 *       If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *       An icon, svg, or use of the icon component are also valid in this region.
 * @slot - Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot footer
 *       Use this slot for anything that you want to be stuck to the base of the card.
 *
 * @csspart header - The container for *header* content
 * @csspart body - The container for *body* content
 * @csspart footer - The container for *footer* content
 */
export declare abstract class BaseCard extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    protected slots: SlotController;
    render(): import("lit-html").TemplateResult<1>;
}
