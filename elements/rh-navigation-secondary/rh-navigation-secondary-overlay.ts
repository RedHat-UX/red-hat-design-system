import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-secondary-overlay.css' with { type: 'css' };

/**
 * Semi-transparent backdrop overlay that dims page content when a secondary
 * navigation dropdown or mobile menu is expanded. Clicking the overlay closes
 * all open menus. Managed automatically by `<rh-navigation-secondary>`.
 * AVOID using standalone. Screen readers SHOULD ignore this element as it
 * serves a purely visual purpose. Keyboard: Escape closes the overlay.
 *
 * @summary Backdrop overlay for expanded secondary navigation menus
 */
@customElement('rh-navigation-secondary-overlay')
export class RhNavigationSecondaryOverlay extends LitElement {
  static readonly styles = [styles];

  /**
   * Controls the visibility of the navigation overlay.
   *
   * When `true`, displays a semi-transparent overlay covering page content behind
   * the secondary navigation. When `false`, the overlay is hidden.
   *
   * ## Usage guidelines
   * - Automatically managed by `<rh-navigation-secondary>` parent component
   * - Displays when dropdowns are expanded in desktop view
   * - Displays when mobile menu is open in mobile view
   * - Clicking the overlay closes all open navigation menus
   *
   * ## Accessibility
   * - Provides visual focus on navigation by dimming page content
   * - Prevents interaction with page content while navigation is active
   * - Works with keyboard navigation (ESC key closes overlay)
   * - Helps users understand the navigation modal context
   */
  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-overlay': RhNavigationSecondaryOverlay;
  }
}
