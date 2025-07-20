import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * A blockquote is styled quote text with an icon and attribution text.
 *
 * @summary  Highlights quotations and citations with text styles
 *
 * @alias blockquote
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
