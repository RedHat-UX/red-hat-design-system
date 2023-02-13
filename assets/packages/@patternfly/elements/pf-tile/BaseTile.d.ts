import { LitElement } from 'lit';
/**
 * @slot icon           - Icon expects a `<pf-icon>` or `<svg>`
 * @slot title          - the title of the tile should be a heading
 * @slot                - The content should be a paragraph
 *
 * @csspart icon        - container for the icon
 * @csspart title       - container for the title
 * @csspart body        - container for the body content
 */
export declare abstract class BaseTile extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
