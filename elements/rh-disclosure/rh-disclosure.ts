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
 * cancelable. Calling `preventDefault()` on the event prevents the
 * disclosure from changing state. The event carries no `detail`
 * payload; read the `open` property on `event.target` to determine
 * whether the disclosure is expanding or collapsing.
 */
export class DisclosureToggleEvent extends Event {
  constructor() {
    super('toggle', { bubbles: true, cancelable: true });
  }
}

/**
 * A disclosure allows users to toggle supplementary content via a
 * trigger. Authors should provide a title through the `summary`
 * attribute or slot. It renders a native `<details>`/`<summary>`
 * pair; screen readers announce state changes. Enter or Space
 * toggles the panel, Tab moves focus in, and Escape closes it.
 * Avoid nesting; use `rh-accordion` instead.
 *
 * @summary A disclosure toggles the visibility of content when triggered
 *
 * @fires {DisclosureToggleEvent} toggle - Fires when the disclosure
 *        opens or closes. The event has no `detail` payload; read
 *        `event.target.open` to determine the new state. The event
 *        bubbles and is cancelable — calling `preventDefault()` blocks
 *        the state change.
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
                 Accepts inline text or a heading element (e.g.
                 \`<h2>\`, \`<h3>\`). When a heading is slotted, it
                 renders inline. Falls back to the \`summary\` attribute
                 value when no slot content is provided. Authors should
                 keep the summary short and descriptive; screen readers
                 announce it as the accessible name for the disclosure
                 trigger. When using a heading element, ensure its level
                 fits the page outline so assistive technology presents
                 correct heading hierarchy. -->
          <slot name="summary">${summary}</slot>
        </summary>
        <div id="details-content">
          <!-- summary: Content revealed when the disclosure is open.
               description: |
                 Accepts block-level elements such as paragraphs, lists,
                 or nested components. Interactive children receive
                 focus via Tab when the panel is expanded. Slotted
                 content should follow WCAG reading order so screen
                 readers present it logically. Authors should ensure
                 that interactive elements inside the panel have
                 visible focus indicators and accessible labels so
                 keyboard and assistive-technology users can operate
                 them. The escape key returns focus to the summary
                 trigger unless the focused element is an input,
                 select, textarea, or media control, in which case
                 Escape is passed through to that element. -->
          <slot></slot>
        </div>
      </details>
    `;
  }

  #onToggle(): void {
    const event = new DisclosureToggleEvent();
    if (this.dispatchEvent(event) && !event.defaultPrevented) {
      this.open = this.detailsEl.open;
    }
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
