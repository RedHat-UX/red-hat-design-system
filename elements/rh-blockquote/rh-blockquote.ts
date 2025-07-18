import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-blockquote.css';

/**
 * A blockquote is styled quote text with an icon and attribution text.
 *
 * @summary  Highlights quotations and citations with text styles
 *
 * @alias blockquote
 *
 */
@customElement('rh-blockquote')
@colorPalettes
@themable
export class RhBlockquote extends LitElement {
  static readonly styles = styles;

  @property({ type: String }) title = 'Blockquote';

  /**
   * Set the colorPalette of the blockquote. Possible values are:
   * - `lightest` (default)
   * - `darkest`
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Set the alignment of the blockquote. Possible values are:
   * - `left` (default)
   * - `center`
   */
  @property({ reflect: true }) align: 'center' | 'inline-start' = 'inline-start';

  /** Optional highlight attribute that, when present, shows a highlight on side of blockquote. */
  @property({ reflect: true, type: Boolean }) highlight = false;

  /**
   * Set the text size of the blockquote. Possible values are:
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
          <!-- Provide a quote for the blockquote -->
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><!-- Provide an author for the blockquote --><slot name="author"></slot></p>
          <p id="title"><!-- Provide an author title for the blockquote --><slot name="title"></slot></p>
        </figcaption>
      </figure>
    `;
  }
}
