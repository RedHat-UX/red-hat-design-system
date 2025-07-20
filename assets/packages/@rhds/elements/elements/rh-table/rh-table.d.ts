import { LitElement } from 'lit';
/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 *
 * @summary Organizes and displays information from a data set
 *
 * @alias table
 *
 * @slot               - an HTML table
 * @slot    summary    - a brief description of the data
 * @cssprop {<color>} [--rh-table-row-background-hover-color=224 224 224 / 40%] - row hover background color
 * @cssprop {<color>} [--rh-table-column-background-hover-color=0 102 204 / 10%] - column hover background color
 * @cssprop [--rh-table-row-border=1px solid #c7c7c7] - row border
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
