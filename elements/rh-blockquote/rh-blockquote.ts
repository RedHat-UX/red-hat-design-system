import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-blockquote.css';

const quote = new URL('../../assets/rh-quotemark-open.svg', import.meta.url).href;
const text = "In open source, we feel strongly that to really do something well, you have to get a lot of people involved.";
const author = "Linus Torvalds";


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
@customElement('rh-blockquote') @pfelement()
export class RhBlockquote extends LitElement {

  static readonly styles = styles;

  @property({ type: String }) title = 'Blockquote';

  /**
   * Set the theme of the blockquote. Possible values are:
   * - `light` (default)
   * - `dark`
   */
  @property({ reflect: true, attribute: 'theme' })
    theme: 'dark'|'light' = 'light';

  /**
   * Set the alignment of the blockquote. Possible values are:
   * - `left` (default)
   * - `center`
   */
  @property({ reflect: true, attribute: 'align' })
    align: 'center'|'left' = 'left';

  /** Optional boolean attribute that, when present, shows a highlight on side of blockquote. */
  @property({ type: Boolean, attribute: 'highlight', reflect: true })
    highlight = false;

  render() {
    const { align, highlight, theme } = this;
    return html`
      <figure id="container">
        <svg style="vertical-align:-0.125em" fill="#e00" height="1em" width="1.25em" aria-hidden="true" role="img">
          <g>
            <path class="bf58b4e1-dd3d-459d-a217-877551437f03" d="M10,15.38H5.63A5.9,5.9,0,0,1,12,9.64a.61.61,0,0,0,.67-.57c.05-.63-.63-.73-1.12-.69A7.12,7.12,0,0,0,4.38,15.5c0,.68,0,10.54,0,11.5a.61.61,0,0,0,.62.62H16a.61.61,0,0,0,.62-.62V22A6.63,6.63,0,0,0,10,15.38Zm5.38,11H5.62V16.62H10A5.39,5.39,0,0,1,15.38,22Z"/>
            <path class="bf58b4e1-dd3d-459d-a217-877551437f03" d="M25,15.38H20.63A5.9,5.9,0,0,1,27,9.64a.62.62,0,0,0,.67-.57c.05-.63-.63-.73-1.12-.69a7.12,7.12,0,0,0-7.12,7.12c0,.68,0,10.54,0,11.5a.61.61,0,0,0,.62.62H31a.61.61,0,0,0,.62-.62V22A6.63,6.63,0,0,0,25,15.38Zm5.38,11H20.62V16.62H25A5.39,5.39,0,0,1,30.38,22Z"/>
          </g>
        </svg>
        <blockquote id="quote">
          <slot name="quote"></slot>
        </blockquote>
        <figcaption>
          <span id="author"><slot name="author"></slot></span>,
          <span id="title"><slot name="title"></slot></span>
        </figcaption>
      </figure>
    `;
  }
}
