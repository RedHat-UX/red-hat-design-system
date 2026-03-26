import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators.js';

import { themable } from '@rhds/elements/lib/themable.js';
import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-disclosure.css' with { type: 'css' };

/**
 * Fired when a disclosure is opened or closed. The event bubbles and is
 * cancelable. The event has no additional properties; read the `open` property
 * on the event target to determine the current state.
 */
export class DisclosureToggleEvent extends Event {
  constructor() {
    super('toggle', { bubbles: true, cancelable: true });
  }
}

/**
 * A disclosure provides a way to toggle content visibility when triggered.
 * When used correctly, assistive technology announces expanded or collapsed state
 * (WCAG 4.1.2). Users SHOULD provide a title via the `summary` attribute or slot.
 *
 * @summary A disclosure toggles the visibility of content when triggered
 *
 * @alias disclosure
 *
 * @fires {DisclosureToggleEvent} toggle - Fires when a user opens or closes
 *        a disclosure. The event has no detail; read `open` on the host to
 *        determine current state.
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
   * Sets the disclosure to be in its open (expanded) state
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Borderless: Removes the outer and left border from the disclosure.
   * The background is `surface-light`/`surface-dark` when expanded.
   * Compact: decreases disclosure padding.
   */
  @property({ reflect: true }) variant?: 'borderless' | 'compact';

  /**
   * Sets the disclosure title via an attribute
   */
  @property({ reflect: true }) summary?: string;

  @state() private hasJumpLinks = false;

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render() {
    const { open, summary, hasJumpLinks } = this;
    return html`
      <details
          ?open="${open}"
          class="${classMap({ hasJumpLinks })}"
          @keydown="${this.#onKeydown}"
          @toggle="${this.#onToggle}">
        <summary>
          <rh-icon id="caret" set="ui" icon="caret-down"></rh-icon>
          <!-- summary: The clickable title text for the disclosure.
               description: |
                 Accepts inline text or a heading element. When a heading
                 is slotted, it renders inline. Falls back to the
                 \`summary\` attribute value when no slot content is
                 provided. Screen readers announce this text as the
                 accessible name for the disclosure trigger. -->
          <slot name="summary">${summary}</slot>
        </summary>
        <div id="details-content">
          <!-- summary: Content revealed when the disclosure is open.
               description: |
                 Accepts block-level elements such as paragraphs, lists,
                 or nested components. Interactive children receive
                 focus via Tab when the panel is expanded. Slotted
                 content SHOULD follow WCAG reading order so screen
                 readers present it logically. Care has been taken to ensure
                 that the escape key does not close the disclosure when focus
                 is on an interactive element. -->
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
