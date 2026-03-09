import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-primary-overlay.css' with { type: 'css' };

/**
 * A full-viewport semi-transparent overlay displayed behind open navigation
 * menus. Clicking the overlay closes all open dropdowns and the hamburger
 * menu. Authors SHOULD NOT use this element directly; it is managed
 * internally by `rh-navigation-primary`.
 *
 * @summary       Background overlay for open navigation menus
 *
 */
@customElement('rh-navigation-primary-overlay')
export class RhNavigationPrimaryOverlay extends LitElement {
  static readonly styles = [styles];

  /**
   * Whether the overlay is currently visible. When `true`, a fixed
   * semi-transparent backdrop covers the viewport behind the navigation.
   * Managed internally by `rh-navigation-primary`.
   */
  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-overlay': RhNavigationPrimaryOverlay;
  }
}
