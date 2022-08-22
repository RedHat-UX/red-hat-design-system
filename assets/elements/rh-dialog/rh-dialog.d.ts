import { PfeModal } from '@patternfly/pfe-modal';
/**
 * Dialog
 */
export declare class RhDialog extends PfeModal {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    protected static closeOnOutsideClick: boolean;
    type?: 'video';
    open: boolean;
    render(): import("lit-html").TemplateResult<1>;
    protected _openChanged(oldValue?: boolean, newValue?: boolean): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-dialog': RhDialog;
    }
}
