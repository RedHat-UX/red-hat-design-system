import { LitElement } from 'lit';
/**
 * An alert to display information on a website.
 *
 * By default it is black text on a black background
 *
 * @summary An alert to display information on a website.
 *
 *
 * @slot         - Provide a description for the alert message
 * @slot header  - Provide a header for the alert message.
 * @slot actions - Provide actions that the user can take for the alert
 *
 */
export declare class RhAlert extends LitElement {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult;
    private get icon();
    state: 'default' | 'error' | 'success' | 'warning' | 'danger' | 'info';
    variant: boolean;
    toast: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-alert': RhAlert;
    }
}
