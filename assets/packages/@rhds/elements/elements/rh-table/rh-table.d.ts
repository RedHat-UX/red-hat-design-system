import { LitElement } from 'lit';
/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 *
 * @summary Organizes and displays information from a data set
 *
 * @alias table
 *
 */
export declare class RhTable extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static getNodeContentForSort;
    private static sortByContent;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-table': RhTable;
    }
}
