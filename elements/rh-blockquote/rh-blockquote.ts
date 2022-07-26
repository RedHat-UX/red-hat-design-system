import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-blockquote.css';

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
@customElement('rh-blockquote')
export class RhBlockquote extends LitElement {
  static readonly styles = styles;

  @property({ type: String }) title = 'Blockquote';

  /**
   * Set the colorPalette of the blockquote. Possible values are:
   * - `lightest` (default)
   * - `darkest`
   */
  @property({ reflect: true, attribute: 'color-palette' })
    colorPalette: 'darkest'|'lightest' = 'lightest';

  /**
   * Set the alignment of the blockquote. Possible values are:
   * - `left` (default)
   * - `center`
   */
  @property({ reflect: true })
    align: 'center'|'inline-start' = 'inline-start';

  /** Optional highlight attribute that, when present, shows a highlight on side of blockquote. */
  @property({ reflect: true, type: Boolean })
    highlight = false;

  /**
   * Set the text size of the blockquote. Possible values are:
   * - `default`
   * - `large`
   */
  @property({ reflect: true })
    size: 'default'|'large' = 'default';

  render() {
    const { align, highlight, colorPalette, size } = this;
    return html`
      <figure id="container">
        <svg fill="currentColor" height="20px" width="29px" aria-hidden="true" role="img" viewBox="4.3799147605896 8.372319221496582 27.240171432495117 19.24776840209961">
          <g>
            <path d="M 10,15.38 H 5.63 C 5.7110461,11.992437 8.6223137,9.3690967 12,9.64 12.344668,9.6747086 12.649028,9.4157753 12.67,9.07 12.72,8.44 12.04,8.34 11.55,8.38 7.5982208,8.3522481 4.3799026,11.548123 4.38,15.5 V 27 C 4.3743,27.34475 4.6552502,27.6257 5,27.62 h 11 c 0.34475,0.0057 0.6257,-0.27525 0.62,-0.62 V 22 C 16.614493,18.346158 13.653842,15.385507 10,15.38 Z"></path>
            <path d="M 25,15.38 H 20.63 C 20.71105,11.992437 23.622314,9.3690967 27,9.64 27.342787,9.668766 27.643464,9.4129672 27.67,9.07 27.72,8.44 27.04,8.34 26.55,8.38 c -3.932267,0 -7.12,3.187733 -7.12,7.12 V 27 c -0.0057,0.34475 0.27525,0.6257 0.62,0.62 H 31 c 0.34475,0.0057 0.6257,-0.27525 0.62,-0.62 V 22 C 31.614493,18.346158 28.653842,15.385507 25,15.38 Z"></path>
          </g>
        </svg>
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
