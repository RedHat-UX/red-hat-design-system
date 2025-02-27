import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-blockquote.css';

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
@customElement('rh-blockquote')
@colorContextConsumer
export class RhBlockquote extends LitElement {
  static readonly styles = styles;

  @property({ type: String }) title = 'Blockquote';

  /**
   * Set the colorPalette of the blockquote. Possible values are:
   * - `lightest` (default)
   * - `darkest`
   */
  @colorContextProvider()
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
          <slot></slot>
        </blockquote>
        <figcaption>
          <p id="author"><slot name="author"></slot></p>
          <p id="title"><slot name="title"></slot></p>
        </figcaption>
      </figure>
    `;
  }
}
