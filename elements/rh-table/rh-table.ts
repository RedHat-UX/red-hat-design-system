import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-table.css';

/**
 * Table
 * @slot - Place element content here
 */
@customElement('rh-table')
export class RhTable extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
    <div id="container" part="container">
      <slot></slot>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-table': RhTable;
  }
}
