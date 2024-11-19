import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-disclosure.css';

/**
 * @summary A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary - The title of the disclosure
 * @csspart caret - The caret icon in the shadow DOM
 */
@customElement('rh-disclosure')
export class RhDisclosure extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the disclosure to be in its open state
   */
  @property({ type: Boolean, reflect: true }) open = false;

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render() {
    return html`
      <details
        ?open="${this.open}"
        @keydown="${this.#onKeydown}"
        @toggle="${this.#onToggle}">
        <summary>
          <rh-icon part="caret" id="caret" set="ui" icon="caret-down"></rh-icon>
          <slot name="summary"></slot>
        </summary>
        <div id="details-content">
          <slot></slot>
        </div>
      </details>
    `;
  }

  #onToggle(): void {
    this.open = this.detailsEl.open;
  }

  #onKeydown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();
      this.#closeDetails();
    }
  }

  #closeDetails(): void {
    this.detailsEl.open = false;
    this.open = false;
    this.summaryEl.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-disclosure': RhDisclosure;
  }
}
