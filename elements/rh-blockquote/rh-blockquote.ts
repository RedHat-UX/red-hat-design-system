import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-blockquote.css';

const quote = new URL('../../assets/rh-quotemark-open.svg', import.meta.url).href;
const text = "In open source, we feel strongly that to really do something well, you have to get a lot of people involved.";
const author = "Linus Torvalds";

@customElement('rh-blockquote') @pfelement()
export class RhBlockquote extends LitElement {
  @property({ type: String }) title = 'Blockquote';

  /**
   * Set the theme of the blockquote. Possible values are:
   * - `light` (default)
   * - `dark`
   */
  @property({ reflect: true, attribute: 'blockquoteThemetheme' })
    blockquoteTheme: 'dark'|'light' = 'light';

  /**
   * Set the alignment of the blockquote. Possible values are:
   * - `left` (default)
   * - `center`
   */
  @property({ reflect: true, attribute: 'blockquoteAlign' })
    blockquoteAlign: 'center'|'left' = 'left';

  /** Optional boolean attribute that, when present, shows a highlight on side of blockquote. */
  @property({ type: Boolean, attribute: 'blockquoteHighlight', reflect: true })
    blockquoteHighlight = false;

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--rh-element-background-color);
    }

    main {
      flex-grow: 1;
    }

    .quotemark {
      width: 32px;
      --pfe-icon--size: var(--rh-social-icon--size, 32px);
    }

  `;

  connectedCallback() {
    super.connectedCallback();
    // load these lazily, outside of the constructor. Must do this for SSR to work
    import("@patternfly/pfe-icon/dist/pfe-icon.js");
  }

  render() {
    const { blockquoteAlign, blockquoteTheme } = this;
    return html`
      <main>
        <h1>${this.title}</h1>
        <figure>
          <img class="quotemark" alt="quotemark" src=${quote} />
          <blockquote>
            <p>${text}</p>
          </blockquote>
          <figcaption>${author} <span class="title"></span>
          </figcaption>
        </figure>
      </main>
    `;
  }
}
