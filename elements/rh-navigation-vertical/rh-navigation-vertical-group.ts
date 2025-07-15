import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { consume, provide } from '@lit/context';
import { context, type RhNavigationVerticalContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-vertical-group.css';

/**
 * A disclosure menu of grouped navigation items in a vertical navigation list.
 * @summary Vertical navigation group
 * @slot - Default slot for navigation items or additional sub groups.
 * @slot summary - A summary slot for the group title, overrides the summary attribute.
 */
@customElement('rh-navigation-vertical-group')
export class RhNavigationVerticalGroup extends LitElement {
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

  /* Internal state for depth, initially 0 */
  @state()
  private _depth = 0;

  /* Consume the parent context to determine our own depth */
  @consume({ context: context, subscribe: true })
  @state()
  private _upstreamParentInfo?: RhNavigationVerticalContext;

  /**
   * Provide our own parent information, including our calculated depth
   */
  @provide({ context: context })
  private _ctx = this.#makeContext();

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

  @query('details') private detailsEl!: HTMLDetailsElement;
  @query('summary') private summaryEl!: HTMLElement;

  // Lifecycle method to update depth based on consumed context
  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('_upstreamParentInfo')) {
      // If we found an upstream parent context, our depth is theirs + 1
      this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
      // Update the provided context value when _depth changes
      this._ctx = this.#makeContext();
    }
  }

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      /**
       * SSR Adds the role, but then removes when ElementInternals is hydrated
       * However, axe-dev tools then complains as it doesn't handle Internals correctly
       * So.... lets readd it for brevity, then when axe decides to fix their stuff,
       * we can remove at a later date.
       */
      this.role = 'listitem';
    }
  }

  render(): TemplateResult<1> {
    const { bordered = '' } = this._upstreamParentInfo ?? {};
    const classes = {
      [bordered]: !!bordered,
    };
    return html`
      <details 
        @toggle="${this.#toggle}" 
        ?open="${this.open}"
        @keydown="${this.#onKeydown}"
        data-depth="${this._depth}"
        class="${classMap(classes)}">
        <summary>
          <slot name="summary">${this.summary}</slot>
          <rh-icon set="ui" icon="caret-down"></rh-icon>
        </summary>
        <div id="subtree" role="list">
          <slot></slot>
        </div>
      </details>
      `;
  }

  #makeContext(): RhNavigationVerticalContext {
    return {
      depth: this._depth,
      bordered: this._upstreamParentInfo?.bordered,
    };
  }

  #onKeydown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();

      const escapeGuardElement =
        event.composedPath().reverse().find((element: EventTarget | null) => {
          return (element instanceof Element
            && element.matches(RhNavigationVerticalGroup.preventEscElements));
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
    'rh-navigation-vertical-group': RhNavigationVerticalGroup;
  }
}

