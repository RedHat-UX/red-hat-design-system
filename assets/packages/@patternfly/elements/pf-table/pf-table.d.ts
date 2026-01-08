import { LitElement, type TemplateResult } from 'lit';
import { PfTr } from './pf-tr.js';
export * from './pf-caption.js';
export * from './pf-thead.js';
export * from './pf-tbody.js';
export * from './pf-tr.js';
export * from './pf-th.js';
export * from './pf-td.js';
/**
 * A **table** is used to display large data sets that can be easily laid out in a simple grid with column headers.
 * @alias Table
 */
export declare class PfTable extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    get rows(): NodeListOf<PfTr>;
    private columns;
    private thRowContext;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    private static getNodeContentForSort;
    private static sortByContent;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-table': PfTable;
    }
}
