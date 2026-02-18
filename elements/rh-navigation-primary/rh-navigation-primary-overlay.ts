import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-primary-overlay.css' with { type: 'css' };

/**
 * A navigation overlay provides a full-viewport backdrop that displays behind
 * open dropdown menus in the primary navigation. This element MUST be used
 * exclusively within the shadow root of `rh-navigation-primary` and SHOULD NOT
 * be used independently. The overlay uses `--rh-color-gray-90` at
 * `--rh-opacity-80` for its backdrop color.
 *
 * @summary Full-viewport backdrop for open navigation menus
 */
@customElement('rh-navigation-primary-overlay')
export class RhNavigationPrimaryOverlay extends LitElement {
  static readonly styles = [styles];

  /**
   * Whether the overlay is currently visible. SHOULD NOT be set directly;
   * it is controlled by the parent `rh-navigation-primary` element when
   * dropdown menus are opened. Defaults to `false`.
   */
  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-overlay': RhNavigationPrimaryOverlay;
  }
}
