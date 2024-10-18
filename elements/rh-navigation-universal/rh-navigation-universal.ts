import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-navigation-universal.css';

/**
 * A universal navigation is a secondary navigation element consisting of a list
 * of commonly used links. It is displayed after a skip link and before a
 * primary navigation.
 * @summary Commonly visited links displayed at the very top of a page.
 * @slot - Place an unordered list (`<ul>`) of links into the slot
 * @csspart container - container element for slotted universal navigation
 */
@customElement('rh-navigation-universal')
export class RhNavigationUniversal extends LitElement {
  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "Universal Navigation" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Sets the variant to bordered, pushes the navigation to the right, adds borders on hover
   */
  @property({ reflect: true }) variant?: 'bordered';

  static readonly styles = [styles];

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Universal Navigation';
    return html`
      <nav aria-label="${label}" id="container" part="container">
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-universal': RhNavigationUniversal;
  }
}
