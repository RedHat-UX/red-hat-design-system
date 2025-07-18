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
 * @slot - Place an ordered list (`<ol>`) of your breadcrumbs into the slot
 * @csspart container - container element for slotted breadcrumb
 * @cssprop [--rh-breadcrumb-link-color=var(--rh-color-interactive-blue-darker, #0066cc)]
 *         The link color for each anchor in the list
 * @cssprop [--rh-breadcrumb-link-color-current-page=var(--rh-color-text-primary-on-light, #151515)]
 *         The current page's color
 * @cssprop [--rh-breadcrumb-link-color-current-page-subtle=var(--rh-color-text-secondary-on-light, #4d4d4d)]
 *         The current page's color for the `subtle` variant
 * @cssprop [--rh-breadcrumb-link-color-hover=var(--rh-color-interactive-blue-darkest, #003366)]
 *         The link color on hover/focus/active for each anchor in the list
 * @cssprop [--rh-breadcrumb-link-color-visited=var(--rh-color-interactive-purple-darker, #5e40be)]
 *         The visited color for each breadcrumb link
 * @cssprop [--rh-breadcrumb-link-color-visited-hover=var(--rh-color-interactive-purple-darkest, #21134d)]
 *         The visited color on hover for each breadcrumb link
 * @cssprop [--rh-breadcrumb-link-focus-outline-color=var(--rh-color-border-interactive-on-light, #0066cc)]
 *         The link focus outline color
 * @cssprop [--rh-breadcrumb-li-padding-inline-end=var(--rh-breadcrumb-li-padding-inline-end, 42px)]
 *          Sets the spacing between each breadcrumb item.
 * @cssprop --rh-breadcrumb-caret-image
 *          The default background image separating each breadcrumb item
 * @cssprop --rh-breadcrumb-caret-image-subtle
 *          The `subtle` variant background image separating each breadcrumb item
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
      <nav aria-label="${label}" part="container" id="container">
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
