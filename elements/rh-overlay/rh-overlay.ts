import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-overlay.css';

/**
 * Overlay
 * @slot - Place element content here
 */
@customElement('rh-overlay')
export class RhOverlay extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-overlay': RhOverlay;
  }
}
