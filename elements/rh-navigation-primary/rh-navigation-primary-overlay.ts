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

  /**
   * Controls the visibility of the navigation overlay.
   *
   * When `true`, displays a semi-transparent overlay that covers the page content
   * behind the navigation. When `false`, the overlay is hidden.
   *
   * ## Usage guidelines
   * - Automatically managed by `<rh-navigation-primary>` parent component
   * - Displays when dropdowns or mobile menu (hamburger) are open
   * - Clicking the overlay closes all open navigation menus
   * - Provides visual focus on navigation and prevents interaction with page content
   *
   * ## Accessibility
   * - Overlay helps users understand the navigation modal context
   * - Prevents accidental clicks on page content while navigation is open
   * - Works with keyboard navigation (ESC key closes overlay)
   */
  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-overlay': RhNavigationPrimaryOverlay;
  }
}
