import { LitElement, type TemplateResult } from 'lit';
/**
 * Table head
 * @slot - Place element content here
 */
export declare class PfThead extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private thRowContext;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-thead': PfThead;
    }
}
