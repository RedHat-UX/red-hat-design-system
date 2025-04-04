import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-primary-overlay.css';

/**
 * Overlay
 * @slot - Place element content here
 */
@customElement('rh-navigation-primary-overlay')
export class RhNavigationPrimaryOverlay extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-overlay': RhNavigationPrimaryOverlay;
  }
}
