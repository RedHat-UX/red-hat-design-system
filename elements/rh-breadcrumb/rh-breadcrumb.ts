import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-breadcrumb.css';

/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 *
 * @alias breadcrumb
 *
 */

@customElement('rh-breadcrumb')
@themable
export class RhBreadcrumb extends LitElement {
  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "Breadcrumb" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Sets variants to breadcrumbs
   */
  @property({ reflect: true }) variant?: 'subtle';

  static readonly styles = [styles];

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
    return html`
      <!-- container element for slotted breadcrumb -->
      <nav aria-label="${label}" part="container" id="container">
        <!-- Place an ordered list (\`<ol>\`) of your breadcrumbs into the slot -->
        <slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-breadcrumb': RhBreadcrumb;
  }
}
