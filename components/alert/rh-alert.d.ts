import { LitElement } from 'lit';
/**
 * Alert
 * @slot - Place element content here
 */
export declare class RhAlert extends LitElement {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult;
    get icon(): import("lit-html").TemplateResult<2> | "";
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
