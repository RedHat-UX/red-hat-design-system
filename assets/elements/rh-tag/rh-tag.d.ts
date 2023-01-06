import { BaseLabel } from '@patternfly/pfe-label/BaseLabel.js';
import '@patternfly/pfe-icon';
export type TagColor = ('blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey');
/**
 * Tooltip
 * @slot icon - Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot -  Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop {<length>} --rh-tag-padding-block-start   {@default `4px`}
 * @cssprop {<length>} --rh-tag-padding-inline-end    {@default `8px`}
 * @cssprop {<length>} --rh-tag-padding-block-end     {@default `4px`}
 * @cssprop {<length>} --rh-tag-padding-inline-start  {@default `8px`}
 *
 * @cssprop {<length>} --rh-tag-margin-inline-end     {@default `4px`}
 *
 *
 */
export declare class RhTag extends BaseLabel {
    static readonly styles: import("lit").CSSResult[];
    icon?: string;
    variant?: 'filled';
    color?: TagColor;
    /**
     * RhIcon does not yet exist, so we are using pfe-icon until available
     * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
     */
    protected renderDefaultIcon(): import("lit-html").TemplateResult<1> | "";
    protected renderSuffix(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tag': RhTag;
    }
}
