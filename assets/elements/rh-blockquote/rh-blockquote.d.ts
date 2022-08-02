import { LitElement } from 'lit';
/**
 * A blockquote for displaying quote, author, and author title.
 *
 *
 * @summary  A blockquote for displaying quote, author, and author title.
 *
 *
 * @slot         - Provide a quote for the blockquote
 * @slot author  - Provide an author for the blockquote
 * @slot title   - Provide an author title for the blockquote
 *
 */
export declare class RhBlockquote extends LitElement {
    static readonly styles: import("lit").CSSResult;
    title: string;
    /**
     * Set the colorPalette of the blockquote. Possible values are:
     * - `lightest` (default)
     * - `darkest`
     */
    colorPalette: 'darkest' | 'lightest';
    /**
     * Set the alignment of the blockquote. Possible values are:
     * - `left` (default)
     * - `center`
     */
    align: 'center' | 'inline-start';
    /** Optional highlight attribute that, when present, shows a highlight on side of blockquote. */
    highlight: boolean;
    /**
     * Set the text size of the blockquote. Possible values are:
     * - `default`
     * - `large`
     */
    size: 'default' | 'large';
    render(): import("lit-html").TemplateResult<1>;
}
