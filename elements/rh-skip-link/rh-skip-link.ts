import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-skip-link.css';

/**
 * Skip Link
 * @slot - Place element content here
 */
@customElement('rh-skip-link')
export class RhSkipLink extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-skip-link': RhSkipLink;
  }
}
