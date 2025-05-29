import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import styles from './rh-disclosure.css';

export class DisclosureToggleEvent extends Event {
  constructor() {
    super('toggle', { bubbles: true, cancelable: true });
  }
}

const hasJumpLinksStyleSheet = new CSSStyleSheet();
if (!isServer) {
  hasJumpLinksStyleSheet.replaceSync(/* css */`
    details.has-jump-links[open]:before {
      border-inline-start-color: transparent;
    }
  `);
}

/**
 * A disclosure toggles the visibility of content when triggered.
 * @summary A disclosure toggles the visibility of content when triggered
 * @slot - Place the content you want to disclose in the default slot. This content is hidden by default.
 * @slot summary - The title of the disclosure
 * @fires {DisclosureToggleEvent} toggle - Fires when a user opens or closes a disclosure.
 * @csspart caret - The caret icon in the shadow DOM
 */
@customElement('rh-disclosure')
@colorPalettes
@themable
export class RhDisclosure extends LitElement {
  static readonly styles = [styles];

  private static readonly preventEscElements = [
    'input:not([type="hidden"]):not([type="radio"])',

    // Elements that need the :disabled selector:
    ...[
      'input[type="radio"]',
      'select',
      'textarea',
      'rh-audio-player',
      'rh-dialog',
    ].map(selector => `${selector}:not([inert]):not([inert] *):not([tabindex^='-']):not(:disabled)`),

    // Elements that don't need the :disabled selector:
    ...[
      'iframe',
      'audio[controls]',
      'video[controls]',
      '[contenteditable]',
    ].map(selector => `${selector}:not([inert]):not([inert] *):not([tabindex^='-'])`),
  ].join(',');

  /**
   * Set the colorPalette of the disclosure. Overrides parent context. Possible values are:
   * - `lightest` (default)
   * - `lighter`
   * - `light`
   * - `dark`
   * - `darker`
   * - `darkest`
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets the disclosure to be in its open state
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Sets the disclosure title via an attribute
   */
  @property({ reflect: true }) summary?: string;

  @state() private hasJumpLinks = false;

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render() {
    return html`
      <details
          ?open="${this.open}"
          class=${classMap({ 'has-jump-links': this.hasJumpLinks })}
          @keydown="${this.#onKeydown}"
          @toggle="${this.#onToggle}">
        <summary>
          <rh-icon id="caret" set="ui" icon="caret-down"></rh-icon>
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
    if (event.code === 'Escape') {
      event.stopPropagation();

      const escapeGuardElement =
        event.composedPath().reverse().find((element: EventTarget | null) => {
          return (element instanceof Element && element.matches(RhDisclosure.preventEscElements));
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
    this.open = false;
    this.summaryEl.focus();
  }

  @observes('open')
  protected _openChanged() {
    if (!isServer) {
      this.hasJumpLinks = !!this.querySelector('rh-jump-links');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-disclosure': RhDisclosure;
  }
}
