import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-secondary-overlay.css';

/**
 * @summary An overlay element to cover content with an opacity when navigation is expanded.
 */
@customElement('rh-navigation-secondary-overlay')
export class RhNavigationSecondaryOverlay extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-overlay': RhNavigationSecondaryOverlay;
  }
}
