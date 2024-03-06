import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-footnote-list.css';

/**
 * Footnote
 * @slot - Place element content here
 */
@customElement('rh-footnote')
export class RhFootnote extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footnote': RhFootnote;
  }
}
