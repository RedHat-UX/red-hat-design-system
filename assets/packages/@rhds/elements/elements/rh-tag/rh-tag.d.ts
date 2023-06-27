import { BaseLabel } from '@patternfly/elements/pf-label/BaseLabel.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
export type TagColor = ('blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey');
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
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
export declare class RhTag extends BaseLabel {
    static readonly styles: import("lit").CSSResult[];
    /** The icon to display in the label. */
    icon?: string;
    /** The variant of the label. */
    variant?: 'filled' | 'outline';
    /** The color of the label. */
    color?: TagColor;
    private on?;
    /**
     * RhIcon does not yet exist, so we are using pfe-icon until available
     * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
     */
    protected renderDefaultIcon(): import("lit-html").TemplateResult<1> | "";
    render(): import("lit-html").TemplateResult<1>;
    protected renderSuffix(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tag': RhTag;
    }
}
