import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
/**
 * Dialog
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
