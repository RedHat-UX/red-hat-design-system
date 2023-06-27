import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 * @summary Communicates information requiring user input or action
 *
 * @cssprop {<color>} --rh-dialog-close-button-color
 *           Sets the dialog close button color.
 *          {@default `var(--rh-color-icon-secondary-on-dark, #ffffff)`}
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
