import { LitElement } from 'lit';
/**
 * Table data cell
 * @slot - Place element content here
 */
export declare class PfTd extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    compoundExpand?: string;
    expanded: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-td': PfTd;
    }
}
