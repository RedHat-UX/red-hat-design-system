import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-disclosure.css';

/**
 * @summary A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary-label - The title of the disclosure
 * @csspart caret - The caret icon in the shadow DOM
 */

@customElement('rh-disclosure')
export class RhDisclosure extends LitElement {
  static readonly styles = [styles];

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render() {
    return html`
      <details @keydown=${!isServer && this.#closeDetails}>
        <summary>
          <rh-icon part="caret" id="caret" set="ui" icon="caret-down"></rh-icon>
          <slot name="summary-label">Panel Title</slot>
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
      event.stopPropagation();
      this.detailsEl.removeAttribute('open');
      this.summaryEl.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-disclosure': RhDisclosure;
  }
}
