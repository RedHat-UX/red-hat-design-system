import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-secondary-overlay.css' with { type: 'css' };

/**
 * Semi-transparent backdrop for dimming page content when a secondary
 * navigation dropdown or mobile menu is expanded. Provides a click
 * target that allows users to close all open menus. Managed
 * automatically by `<rh-navigation-secondary>`; avoid using
 * standalone. Screen readers should ignore this element as it serves
 * a purely visual purpose. Keyboard: Escape closes the overlay.
 *
 * @summary Backdrop overlay for expanded secondary navigation menus
 */
@customElement('rh-navigation-secondary-overlay')
export class RhNavigationSecondaryOverlay extends LitElement {
  static readonly styles = [styles];

  /**
   * When `true`, displays the overlay. Managed automatically by the
   * parent `<rh-navigation-secondary>` when dropdowns or the mobile
   * menu expand. Defaults to `false`.
   */
  @property({ type: Boolean, reflect: true }) open = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-overlay': RhNavigationSecondaryOverlay;
  }
}
