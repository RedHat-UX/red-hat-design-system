import { LitElement, html, isServer, render } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-breadcrumb.css';

const truncationBtn = html`
  <button type="button" class="rhds-truncate-btn" aria-expanded="false" title="Show middle breadcrumb items">
    <span aria-hidden="true">&#8230;</span>
    <span class="rhds-truncate-visually-hidden">
      Show middle breadcrumb items
    </span>
  </button>`;

/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
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
  static readonly styles = [styles];
  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "Breadcrumb" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Sets variants to breadcrumbs
   */
  @property({ reflect: true }) variant?: 'subtle';

  /**
 * Breadcrumbs over four items will be truncated and include a button to expand the middle breadcrumb items
 */
  @property({ reflect: true, type: Boolean }) truncate? = false;

  #list: HTMLOListElement | null = null;
  #listItems: NodeListOf<HTMLLIElement> | null | undefined = null;
  #truncateBtnContainerClass = 'rhds-truncate-btn-container';

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Breadcrumb';
    return html`
      <nav 
        aria-label="${label}"
        @click="${this.truncate ? this.#handleTruncationClick : undefined}"
        @keyup="${this.truncate ? this.#onKeyUp : undefined}"
        id="container"
        part="container">
        <slot></slot>
      </nav>
    `;
  }

  firstUpdated(): void {
    this.#updateLightDOM();
  }

  #updateLightDOM(): void {
    if (isServer || !this.truncate) {
      return;
    }

    this.#list = this.querySelector('ol');
    if (!this.#list) {
      return;
    }

    if (this.#list.children.length < 5) {
      return;
    }

    const middleItems = this.#list.querySelectorAll('li:nth-child(n+2):nth-last-child(n+3)');
    for (const item of middleItems) {
      item.setAttribute('hidden', 'true');
    }

    const container = document.createElement('li');
    container.className = this.#truncateBtnContainerClass;
    render(truncationBtn, container);
    middleItems[0].before(container);
  }

  #handleTruncationClick(event: Event): void {
    if (isServer) {
      return;
    }

    const target = event.target as HTMLButtonElement;
    if (!target.closest('.rhds-truncate-btn')) {
      return;
    }

    this.#listItems = this.#list?.querySelectorAll('li');
    if (!this.#listItems) {
      return;
    }
    for (const item of this.#listItems) {
      item.removeAttribute('hidden');
    }

    target.closest(`.${this.#truncateBtnContainerClass}`)?.remove();
  }

  // appease linter
  #onKeyUp() {
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-breadcrumb': RhBreadcrumb;
  }
}
