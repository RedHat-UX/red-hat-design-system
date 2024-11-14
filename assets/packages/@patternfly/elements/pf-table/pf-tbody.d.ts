import { LitElement, type TemplateResult } from 'lit';
/**
 * Table body
 * @slot - Place element content here
 */
export declare class PfTbody extends LitElement {
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tbody': PfTbody;
    }
}
