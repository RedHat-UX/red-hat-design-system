import { LitElement } from 'lit';
/**
 * Table head
 * @slot - Place element content here
 */
export declare class PfThead extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-thead': PfThead;
    }
}
