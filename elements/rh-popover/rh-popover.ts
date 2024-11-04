import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-popover.css';

/**
 * Popover
 * @slot - Place element content here
 */
@customElement('rh-popover')
export class RhPopover extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-popover': RhPopover;
  }
}
