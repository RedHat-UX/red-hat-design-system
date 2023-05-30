import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 * @summary Displays important information to users without requiring them to navigate away from the page
 *
 * @cssprop {<color>} --rh-dialog-close-button-color
 *           Sets the dialog close button color.
 *          {@default `var(--rh-color-icon-secondary-on-dark, #ffffff)`}
 * @cssprop --rh-border-radius-default
 * @cssprop --rh-color-gray-90-rgb
 * @cssprop --rh-color-icon-secondary-on-dark
 * @cssprop --rh-color-icon-secondary-on-light
 * @cssprop --rh-color-icon-subtle
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-modal-video-aspect-ratio
 * @cssprop --rh-opacity-60
 * @cssprop --rh-space-md
 * @cssprop --rh-space-sm
 */
export declare class RhDialog extends PfModal {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    protected static closeOnOutsideClick: boolean;
    type?: 'video';
    open: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-dialog': RhDialog;
    }
}
