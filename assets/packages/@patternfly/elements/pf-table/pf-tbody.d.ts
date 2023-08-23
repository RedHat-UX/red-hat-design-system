import { LitElement } from 'lit';
/**
 * Table body
 * @slot - Place element content here
 */
export declare class PfTbody extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tbody': PfTbody;
    }
}
