import { LitElement } from 'lit';
/**
 * Table head
 * @slot - Place element content here
 */
export declare class PfThead extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-thead': PfThead;
    }
}
