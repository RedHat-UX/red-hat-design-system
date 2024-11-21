import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-disclosure.css';

export class DisclosureToggleEvent extends Event {
  constructor() {
    super('toggle', { bubbles: true, cancelable: true });
  }
}

/**
 * @summary A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary - The title of the disclosure
 * @fires {DisclosureToggleEvent} toggle - Fires when a user opens or closes a disclosure.
 * @csspart caret - The caret icon in the shadow DOM
 */
@customElement('rh-disclosure')
export class RhDisclosure extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the disclosure to be in its open state
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Sets the disclosure title via an attribute
   */
  @property({ reflect: true }) summary?: string;

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
          <slot name="summary">${this.summary}</slot>
        </summary>
        <div id="details-content">
          <slot></slot>
        </div>
      </details>
    `;
  }

  #onToggle(): void {
    this.open = this.detailsEl.open;
    const event = new DisclosureToggleEvent();
    this.dispatchEvent(event);
  }

  #onKeydown(event: KeyboardEvent): void {
    const preventEscElements = `
      input:not([type='hidden']):not([type='radio']):not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled),
      input[type='radio']:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled),
      select:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled),
      textarea:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled),
      iframe:not([inert]):not([inert] *):not([tabindex^='-']),
      audio[controls]:not([inert]):not([inert] *):not([tabindex^='-']),
      video[controls]:not([inert]):not([inert] *):not([tabindex^='-']),
      [contenteditable]:not([inert]):not([inert] *):not([tabindex^='-']),
      rh-audio-player:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled),
      rh-dialog:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled)
    `;

    if (event.code === 'Escape') {
      event.stopPropagation();

      const escapeGuardElement =
        event.composedPath().reverse().find((element: EventTarget | null) => {
          return (element instanceof Element && element.matches(preventEscElements));
        });

      if (!escapeGuardElement) {
        this.#closeDisclosure();
      }
    }
  }


  #closeDisclosure(): void {
    if (!this.open) {
      return;
    }
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
