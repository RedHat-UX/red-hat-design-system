import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-blockquote.css' with { type: 'css' };

/**
 * Provides a styled blockquote for featuring quotes with an icon
 * and attribution. Use when highlighting a customer testimonial,
 * expert opinion, or notable statement. Authors MUST provide quoted
 * text and SHOULD include an author. Uses `<figure>` semantics
 * with `<blockquote>` and `<figcaption>`, so screen readers convey the quote
 * and its source. AVOID placing interactive elements inside.
 *
 * @summary Highlights quotations and citations with text styles
 *
 * @alias blockquote
 */
@customElement('rh-blockquote')
@colorPalettes
@themable
export class RhBlockquote extends LitElement {
  static readonly styles = styles;

  /**
   * The author's name or pseudonym. Overridden by the `author` slot.
   * Should not contain long strings of text.
   */
  @property({ type: String }) author?: string;

  /**
   * The author's job title or role. Overridden by the `subtitle` slot.
   * Should not contain long strings of text. May contain links.
   */
  @property({ type: String }) subtitle?: string;

  /**
   * built-in tooltip blockquote figure element.
   * Defaults to 'Blockquote'.
   *
   * @deprecated use subtitle
   */
  @property({ type: String }) title = 'Blockquote';

  /**
   * Sets the color palette for the blockquote and its child content.
   * Adapts text and icon colors for light or dark backgrounds.
   * Possible values are:
   * - `lightest` (default)
   * - `darkest`
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Controls the horizontal alignment of the blockquote content.
   * Use `center` for short quotes in visually prominent layouts.
   * AVOID centering long text, as it reduces readability.
   * Possible values are:
   * - `inline-start` (default)
   * - `center`
   */
  @property({ reflect: true }) align: 'center' | 'inline-start' = 'inline-start';

  /**
   * When present, renders a brand-colored emphasis border on the
   * inline-start side of the blockquote for additional visual prominence.
   */
  @property({ reflect: true, type: Boolean }) highlight = false;

  /**
   * Controls the text size of the quoted passage. Use `large` for
   * short, impactful quotes and `default` for longer passages.
   * Possible values are:
   * - `default`
   * - `large`
   */
  @property({ reflect: true }) size: 'default' | 'large' = 'default';

  render() {
    const { highlight } = this;
    return html`
      <figure id="container" class="${classMap({ highlight })}">
        <rh-icon set="standard" icon="quotemark-open"></rh-icon>
        <blockquote id="quote">
          <!-- Block elements like \`<p>\` for the quoted passage.
               Screen readers announce this within the \`figure\` landmark. -->
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><!--
            Inline text for the quoted person's name.
            Screen readers announce this as attribution for the quote.
            Overrides the \`author\` attribute.
          --><slot name="author">${this.author}</slot></p>
          <p id="title"><!--
            Inline text for the author's job title or role.
            Screen readers announce this in the figcaption.
            Deprecated: use \`subtitle\`.
          --><slot name="title"></slot>
            <!--
              Inline text for the author's job title or role.
              Screen readers announce this in the figcaption.
              Overrides the \`subtitle\` attribute.
              Should not contain long strings of text. May contain links.
            -->
             <slot name="subtitle">${this.subtitle}</slot>
          </p>
        </figcaption>
      </figure>
    `;
  }
}
