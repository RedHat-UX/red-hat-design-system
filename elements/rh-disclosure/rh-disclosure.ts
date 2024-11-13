import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-disclosure.css';

/**
 * @summary A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
 * @slot - Place the `details`, `summary`, and `.details-content` elements in the default slot.
 */

@customElement('rh-disclosure')
export class RhDisclosure extends LitElement {
  static readonly styles = [styles];

  #details?: HTMLDetailsElement;
  #summary?: HTMLElement;

  firstUpdated() {
    this.#details = this.querySelector<HTMLDetailsElement>('details')!;
    this.#summary = this.querySelector<HTMLElement>('details summary')!;
    if (!isServer) {
      this.#details?.addEventListener('keydown', this.#handleKeyDown.bind(this));
    }
  }

  disconnectedCallback() {
    if (!isServer && this.#details) {
      this.#details.removeEventListener('keydown', this.#handleKeyDown.bind(this));
    }
    super.disconnectedCallback();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  #handleKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();
      this.#closeDetails();
    }
  }

  #closeDetails(): void {
    if (this.#details?.open) {
      this.#details.open = false;
      this.#summary?.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-disclosure': RhDisclosure;
  }
}
