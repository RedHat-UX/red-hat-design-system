import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-secondary-dsd-overlay.css';

/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
@customElement('rh-navigation-secondary-dsd-overlay')
export class RhNavigationSecondaryDsdOverlay extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-dsd-overlay': RhNavigationSecondaryDsdOverlay;
  }
}
