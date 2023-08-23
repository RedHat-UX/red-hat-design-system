import { LitElement } from 'lit';
/**
 * Caption
 * @slot - Place element content here
 */
export declare class PfCaption extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-caption': PfCaption;
    }
}
