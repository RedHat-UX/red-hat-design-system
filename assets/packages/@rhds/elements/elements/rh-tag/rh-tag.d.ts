import { LitElement } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
 *
 * @fires close - when a removable label's close button is clicked
 *
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 *
 * @slot
 *       Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop  {<length>} --rh-tag-margin-inline-end
 *           The margin at the end of the direction parallel to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-start
 *           The padding at the start of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-end
 *           The padding at the end of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-inline-start
 *           The padding at the start of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop  {<length>} --rh-tag-padding-inline-end
 *           The padding at the end of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop --pf-icon--size
 *
 */
export declare class RhTag extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** The icon to display in the label. */
    icon?: string;
    /** The variant of the label. */
    variant?: 'filled' | 'outline';
    /** The color of the label. */
    color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
    private on?;
    render(): import("lit").TemplateResult<1>;
}
export type TagColor = RhTag['color'];
declare global {
    interface HTMLElementTagNameMap {
        'rh-tag': RhTag;
    }
}
