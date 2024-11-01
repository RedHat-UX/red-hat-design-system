import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';

import styles from './rh-navigation-universal-dropdown.css';

/**
 * A universal navigation dropdown is an element that is slotted into
 * the universal navigation. It uses the details and summary
 * elements to create a dropdown menu inside universal navigation.
 * @summary A dropdown sub component for universal navigation.
 * @slot - Place content to display in the dropdown.
 * @slot summary-label - The dropdown `<summary>` text. Defaults to "All Red Hat".
 */

@customElement('rh-navigation-universal-dropdown')
export class RhNavigationUniversalDropdown extends LitElement {
  static readonly styles = [styles];

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render() {
    return html`
      <details @keydown=${this.#closeDetails}>
        <summary>
          <span id="summary-shift">
            <slot name="summary-label">All Red Hat</slot>
          </span>
        </summary>
        <div id="details-content">
          <slot></slot>
        </div>
      </details>
    `;
  }

  #closeDetails(event: KeyboardEvent): void {
    if (!this.detailsEl.hasAttribute('open')) {
      return;
    }
    if (event.code === 'Escape') {
      this.summaryEl.focus();
      this.detailsEl.removeAttribute('open');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-universal-dropdown': RhNavigationUniversalDropdown;
  }
}
