import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import styles from './rh-navigation-vertical-list.css' with { type: 'css' };

/**
 * A disclosure menu of grouped navigation items in a vertical navigation list.
 * @summary Vertical navigation group
 * @alias navigation-vertical-list
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
   * Optional open attribute that, sets the open state of the group.
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
          <!-- A summary slot for the group title, overrides the summary attribute -->
          <slot name="summary">${this.summary}</slot>
          <rh-icon set="microns" icon="caret-down"></rh-icon>
        </summary>
        <div id="subtree" role="list">
          <!-- 
            Use this slot for \`<rh-navigation-link>\` or \`<rh-navigation-vertical-list>\` elements.
          -->
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

