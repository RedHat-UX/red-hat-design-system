import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-blockquote.css' with { type: 'css' };

/**
 * A blockquote for featuring quotes with an icon and attribution.
 * Authors MUST provide quoted text and SHOULD include an author.
 * Renders a semantic ARIA figure with blockquote and figcaption,
 * so screen readers convey the quote and its source. AVOID placing
 * interactive elements inside, as it is not keyboard focusable.
 *
 * @summary Highlights quotations and citations with text styles
 *
 * @slot - Block elements like `\<p\>` for the quoted passage. Screen readers
 *         announce this as quoted content within the ARIA figure landmark.
 * @slot author - Inline text for the quoted person's name. Rendered inside a
 *                figcaption so screen readers announce the attribution.
 * @slot title - Inline text for the author's job title or role. Rendered in
 *               the figcaption alongside the author for screen reader context.
 *
 */
@customElement('rh-blockquote')
@colorPalettes
@themable
export class RhBlockquote extends LitElement {
  static readonly styles = styles;

  /** Accessible label for the blockquote figure element. Defaults to 'Blockquote'. */
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
               Screen readers announce this within the ARIA figure landmark. -->
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><!-- Inline text for the quoted person's name.
                 Screen readers announce this as figcaption attribution. --><slot name="author"></slot></p>
          <p id="title"><!-- Inline text for the author's job title or role.
                 Screen readers announce this in the figcaption. --><slot name="title"></slot></p>
        </figcaption>
      </figure>
    `;
  }
}
