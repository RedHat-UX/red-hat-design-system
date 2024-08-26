import { LitElement, type TemplateResult } from 'lit';
/**
 * Table data cell
 * @slot - Place element content here
 */
export declare class PfTd extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    compoundExpand?: string;
    expanded: boolean;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-td': PfTd;
    }
}
