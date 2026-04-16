import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import styles from './rh-navigation-vertical-list.css' with { type: 'css' };

/**
 * A collapsible group for organizing related links within an
 * `<rh-navigation-vertical>` element. Allows users to expand and
 * collapse sections. Authors should set `summary` to provide a
 * label. Pressing Escape closes the group and returns focus to the
 * summary. Uses an ARIA `listitem` role for screen readers.
 *
 * @summary Vertical navigation group
 * @alias navigation-vertical-list
 *
 * @fires {Event} toggle - Fires when the group opens or closes. The
 *        event has no detail; check the `open` property on the element
 *        to determine the current state.
 */
@customElement('rh-navigation-vertical-list')
export class RhNavigationVerticalList extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

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

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'listitem' });

  /**
   * Optional open attribute that sets the open state of the group.
   * Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Optional summary attribute, sets the summary text.
   * Overridden by the summary slot.
   */
  @property({ type: String }) summary?: string;

  /**
   * Bolds the first `<rh-navigation-link>` of the group. Should not be used if the first child is a `<rh-navigation-vertical-list>`.
   * Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) highlight = false;

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  render(): TemplateResult<1> {
    const { highlight = false } = this;
    const classes = {
      highlight: !!highlight,
    };
    return html`
      <details
        class="${classMap(classes)}"
        @toggle="${this.#toggle}"
        ?open="${this.open}"
        @keydown="${this.#onKeydown}">
        <summary>
          <!-- summary: Group heading label
               description: |
                 Accepts inline text or a \`<span>\`. Overrides the
                 \`summary\` attribute. Screen readers use this as
                 the ARIA label for the disclosure toggle. -->
          <slot name="summary">${this.summary}</slot>
          <rh-icon set="microns" icon="caret-down"></rh-icon>
        </summary>
        <div id="subtree" role="list">
          <!-- summary: Navigation group items
               description: |
                 Place \`<rh-navigation-link>\` or nested
                 \`<rh-navigation-vertical-list>\` elements. ARIA
                 listitem role provides screen reader context.
                 Avoid nesting deeper than five levels. -->
          <slot></slot>
        </div>
      </details>
      `;
  }

  #onKeydown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();

      const escapeGuardElement =
        event.composedPath().reverse().find((element: EventTarget | null) => {
          return (element instanceof Element
            && element.matches(RhNavigationVerticalList.preventEscElements));
        });

      if (!escapeGuardElement) {
        this.#close();
      }
    }
  }

  #toggle() {
    this.open = this.detailsEl.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
  }

  #close() {
    this.open = false;
    this.summaryEl.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-vertical-list': RhNavigationVerticalList;
  }
}

