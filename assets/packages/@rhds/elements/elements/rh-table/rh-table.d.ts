import { LitElement } from 'lit';
/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 *
 * @summary Organizes and displays information from a data set
 *
 * @slot               - an HTML table
 * @slot    summary    - a brief description of the data
 *
 * @cssprop {<color>} --rh-table-row-background-color - deprecated use --rh-table-row-background-hover-color {@default `224 224 224 / 40%`}
 * @cssprop {<color>} --rh-table-column-background-color - deprecated use --rh-table-column-background-hover-color {@default `0 102 204 / 10%`}
 * @cssprop {<color>} --rh-table-row-background-hover-color - row hover background color {@default `224 224 224 / 40%`}
 * @cssprop {<color>} --rh-table-column-background-hover-color - column hover background color {@default `0 102 204 / 10%`}
 * @cssprop --rh-table-row-border - row border {@default `1px solid #c7c7c7`}
 */
export declare class RhTable extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    private on?;
    private static getNodeContentForSort;
    private static sortByContent;
    connectedCallback(): void;
    protected willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-table': RhTable;
    }
}
