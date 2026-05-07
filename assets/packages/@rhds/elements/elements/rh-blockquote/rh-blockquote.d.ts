import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
/**
 * Provides a styled blockquote for featuring quotes with an icon
 * and attribution. Use when highlighting a customer testimonial,
 * expert opinion, or notable statement. Authors must provide quoted
 * text and should include an author. Uses `<figure>` semantics
 * with `<blockquote>` and `<figcaption>`, so screen readers convey the quote
 * and its source. Avoid placing interactive elements inside.
 *
 * @summary Highlights quotations and citations with text styles
 */
export declare class RhBlockquote extends LitElement {
    static readonly styles: CSSStyleSheet;
    /**
     * The author's name or pseudonym. Overridden by the `author` slot.
     * Should not contain long strings of text.
     */
    author?: string;
    /**
     * The author's job title or role. Overridden by the `subtitle` slot.
     * Should not contain long strings of text. May contain links.
     */
    subtitle?: string;
    /**
     * built-in tooltip blockquote figure element.
     * Defaults to 'Blockquote'.
     *
     * @deprecated use subtitle
     */
    title: string;
    /**
     * Sets the color palette for the blockquote and its child content.
     * Adapts text and icon colors for light or dark backgrounds.
     * Possible values are:
     * - `lightest` (default)
     * - `darkest`
     */
    colorPalette?: ColorPalette;
    /**
     * Controls the horizontal alignment of the blockquote content.
     * Use `center` for short quotes in visually prominent layouts.
     * Avoid centering long text, as it reduces readability.
     * Possible values are:
     * - `inline-start` (default)
     * - `center`
     */
    align: 'center' | 'inline-start';
    /**
     * When present, renders a brand-colored emphasis border on the
     * inline-start side of the blockquote for additional visual prominence.
     */
    highlight: boolean;
    /**
     * Controls the text size of the quoted passage. Use `large` for
     * short, impactful quotes and `default` for longer passages.
     * Possible values are:
     * - `default`
     * - `large`
     */
    size: 'default' | 'large';
    render(): import("lit-html").TemplateResult<1>;
}
