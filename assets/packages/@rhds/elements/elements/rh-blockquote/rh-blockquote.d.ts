import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A blockquote is a styled quotation and citation offset from other text styles on the page.
 *
 * @summary  Highlights quotations and citations with text styles
 *
 * @slot         - Provide a quote for the blockquote
 * @slot author  - Provide an author for the blockquote
 * @slot title   - Provide an author title for the blockquote
 *
 */
export declare class RhBlockquote extends LitElement {
    static readonly styles: CSSStyleSheet;
    title: string;
    /**
     * Set the colorPalette of the blockquote. Possible values are:
     * - `lightest` (default)
     * - `darkest`
     */
    colorPalette?: ColorPalette;
    private on?;
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