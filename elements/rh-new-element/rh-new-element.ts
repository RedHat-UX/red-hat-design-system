import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-new-element.css';

/**
 * New Element
 * @slot - Place element content here
 */
@customElement('rh-new-element')
export class RhNewElement extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-new-element': RhNewElement;
  }
}
