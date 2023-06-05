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
 * @cssprop --rh-border-radius-pill
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-blue-50
 * @cssprop --rh-color-blue-100
 * @cssprop --rh-color-blue-400
 * @cssprop --rh-color-blue-600
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-cyan-50
 * @cssprop --rh-color-cyan-100
 * @cssprop --rh-color-cyan-300
 * @cssprop --rh-color-cyan-400
 * @cssprop --rh-color-cyan-500
 * @cssprop --rh-color-green-50
 * @cssprop --rh-color-green-100
 * @cssprop --rh-color-green-500
 * @cssprop --rh-color-green-600
 * @cssprop --rh-color-orange-50
 * @cssprop --rh-color-orange-100
 * @cssprop --rh-color-orange-300
 * @cssprop --rh-color-orange-500
 * @cssprop --rh-color-orange-700
 * @cssprop --rh-color-purple-50
 * @cssprop --rh-color-purple-100
 * @cssprop --rh-color-purple-500
 * @cssprop --rh-color-purple-700
 * @cssprop --rh-color-red-50
 * @cssprop --rh-color-red-600
 * @cssprop --rh-color-red-800
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-space-md
 * @cssprop --rh-space-xs
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
