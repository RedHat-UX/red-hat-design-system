import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './systems-status.css';

/**
 * Status
 * @slot - Place element content here
 */
@customElement('systems-status')
export class SystemsStatus extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'systems-status': SystemsStatus;
  }
}
