import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';

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
   * Customize the default "All Red Hat" text in the `<summary>` element.
   * Only relevant for the bordered variant.
   */
  @property({ attribute: 'summary-label' }) summaryLabel?: string;

  /**
   * Sets the variant to bordered, pushes the navigation to the right, adds borders on hover
   */
  @property({ reflect: true }) variant?: 'bordered';

  static readonly styles = [styles];

  #slots = new SlotController(this, 'personalization-link', null, 'details-content');

  firstUpdated() {
    if (this.variant === 'bordered') {
      this.#appendListItem();
    }
  }

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Universal Navigation';
    const personalizationHtml = html`
      <div id="personalization"
           ?hidden="${this.#slots.isEmpty('personalization-link')}"
           part="personalization">
        <rh-icon set="ui" icon="information-fill"></rh-icon>
        <slot name="personalization-link"></slot>
        <rh-icon set="ui" icon="caret-right"></rh-icon>
      </div>
    `;
    return html`
      <nav aria-label="${label}" id="container" part="container">
        ${this.variant === 'bordered' ? personalizationHtml : ''}
        <slot id="nav-universal-default-slot"></slot>
        <slot hidden name="details-content"></slot>
      </nav>
    `;
  }

  #findUnorderedList(): HTMLUListElement | null {
    const slot = this.shadowRoot?.querySelector('slot:not(slot[name])');

    const content = slot?.assignedElements().find(node => {
      return node.nodeName.toLowerCase() === 'ul';
    });

    if (!(content instanceof HTMLUListElement)) {
      return null;
    }

    return content;
  }

  #getDetailsContentHTML(): any { // TODO: Fix `any`
    const slot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="details-content"]');

    const fragment = document.createDocumentFragment();
    const nodes = slot?.assignedNodes();
    if (!nodes) {
      return;
    }

    for (const node of nodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        fragment.appendChild(node.cloneNode(true));
      }
    }

    return fragment;
  }

  #appendListItem(): void {
    const summaryLabel = this.summaryLabel ? this.summaryLabel : 'All Red Hat';
    const ul = this.#findUnorderedList();
    const li = document.createElement('li');
    const allRedHatContent = `
      <details id="nav-universal-details">
        <summary id="nav-universal-summary">
          <span id="nav-universal-summary-shift">${summaryLabel}</span>
        </summary>
        <div id="nav-universal-details-content"></div>
      </details>
    `;
    li.innerHTML = allRedHatContent;
    const getDetailsContentEl = li.querySelector('#nav-universal-details-content');
    getDetailsContentEl?.appendChild(this.#getDetailsContentHTML());
    ul?.appendChild(li);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-universal': RhNavigationUniversal;
  }
}
