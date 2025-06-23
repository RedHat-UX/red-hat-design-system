import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { consume, provide } from '@lit/context';
import { context, type RhNavigationVerticalContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-vertical.css';
import groupStyles from './rh-navigation-vertical-group.css';
import itemStyles from './rh-navigation-vertical-item.css';


/**
 * TODO: Figure out why when this is broken out into separate files, the context doesn't work correctly.
 * import './rh-navigation-vertical-group.js';
 * import './rh-navigation-vertical-item.js';
 */

/**
 * Navigation Tree View
 * @slot - Place element content here
 */
@customElement('rh-navigation-vertical')
@themable
export class RhNavigationVertical extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  private _depth = 0; // Internal state for depth, initially 0

  @property({ reflect: true }) variant?: 'learning-path';

  /**
   * Provide our own parent information, depth = 0
   */
  @provide({ context: context })
  private _ctx = this.#makeContext();

  render(): TemplateResult<1> {
    return html`
      <nav class="${classMap({ 'learning-path': this.variant === 'learning-path' })}">
        <slot></slot>
      </nav>
    `;
  }

  #makeContext(): RhNavigationVerticalContext {
    return {
      depth: this._depth,
      variant: this.variant,
    };
  }

  @observes('variant')
  protected _openChanged() {
    this._ctx = this.#makeContext();
  }
}

/**
 * Navigation Tree View
 * @slot - Place element content heres
 */
@customElement('rh-navigation-vertical-item')
export class RhNavigationVerticalItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [itemStyles];

  /* Internal state for depth, initially 0 */
  @state()
  private _depth = 0;

  /* Consume the parent context to determine our own depth */
  @consume({ context: context, subscribe: true })
  @state() // Mark as state so changes re-render
  private _upstreamParentInfo?: RhNavigationVerticalContext;

  @property({ reflect: true }) href?: string;

  @property({ attribute: 'current-page', type: Boolean }) currentPage? = false;

  // Lifecycle method to update depth based on consumed context
  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('_upstreamParentInfo')) {
      // If we found an upstream parent context, our depth is theirs + 1
      this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
    }
  }

  render(): TemplateResult<1> {
    const isCurrentPage = this.currentPage ? 'page' : undefined;
    const classes = {
      'root': !!this._depth && this._depth === 1,
      'child': !!this._depth && this._depth > 1,
      'learning-path': this._upstreamParentInfo?.variant === 'learning-path',
    };
    return html`
      <div id="container" class="${classMap(classes)}" data-depth="${this._depth}">
        ${this.href ? html`
          <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
            <slot></slot>
            ${this._upstreamParentInfo?.variant === 'learning-path' ? html`
              <slot name="readtime"></slot>
            ` : ''}
          </a>
        ` : html`
          <slot></slot>
        `}
      </div>
    `;
  }
}

/**
 * Navigation Tree View
 * @slot - Place element content here
 */
@customElement('rh-navigation-vertical-group')
export class RhNavigationVerticalGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [groupStyles];

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

  @property({ type: Boolean, reflect: true }) open = false;

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

  render(): TemplateResult<1> {
    return html`
      <details 
        @toggle="${this.#toggle}" 
        ?open="${this.open}"
        @keydown="${this.#onKeydown}"
        data-depth="${this._depth}">
        <summary>
          <slot name="summary"></slot>
          <rh-icon set="ui" icon="caret-down"></rh-icon>
        </summary>
        <div id="subtree">
          <slot></slot>
        </div>
      </details>
      `;
  }

  #makeContext(): RhNavigationVerticalContext {
    return {
      depth: this._depth,
      variant: this._upstreamParentInfo?.variant,
    };
  }

  #onKeydown(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();
      this.#close();
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
    'rh-navigation-vertical': RhNavigationVertical;
    'rh-navigation-vertical-group': RhNavigationVerticalGroup;
    'rh-navigation-vertical-item': RhNavigationVerticalItem;
  }
}
