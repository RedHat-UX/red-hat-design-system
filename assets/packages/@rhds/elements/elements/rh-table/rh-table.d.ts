import { LitElement } from 'lit';
/**
 * A table provides a container for displaying tabular data, allowing
 * users to scan and compare information. Authors must include a
 * `<table>` with `<thead>`, `<tbody>`, and scoped `<th>` for ARIA
 * screen reader navigation. Should use `<col>` for column hover and
 * `<caption>` for context. Tab and arrow keys scroll overflow. Avoid
 * using tables for layout.
 *
 * @summary Organizes and displays information from a data set
 *
 * @alias table
 *
 * @csspart container - The outer wrapper around the table and summary
 *                      slots. Use to customize padding or background.
 *
 *              style. Uses `--rh-border-width-sm` width and
 *              `--rh-color-border-subtle-on-light` color tokens.
 *              Row hover background. Uses `--rh-color-gray-40`
 *              token at 10% opacity for the light theme.
 *              Column hover background. Uses `--rh-color-blue-50`
 *              token at 10% opacity for the light theme.
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
