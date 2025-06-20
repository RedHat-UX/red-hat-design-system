import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { consume, provide } from '@lit/context';
import { rhNavigationVerticalParentContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-vertical.css';
import groupStyles from './rh-navigation-vertical-group.css';
import itemStyles from './rh-navigation-vertical-item.css';


/**
 * TODO: Figure out why when this is broken out into separate files, the context doesn't work correctly.
 * import './rh-navigation-vertical-group.js';
 * import './rh-navigation-vertical-item.js';
 */

export interface RhNavigationVerticalParent {
  parent: HTMLElement;
  depth: number;
}

/**
 * Navigation Tree View
 * @slot - Place element content here
 */
@customElement('rh-navigation-vertical')
@themable
export class RhNavigationVertical extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  private _depth = 0; // Internal state for depth, initially 0

  /**
   * Provide our own parent information, depth = 0
   */
  @provide({ context: rhNavigationVerticalParentContext })
  parentInfo: RhNavigationVerticalParent = { parent: this, depth: this._depth };

  render(): TemplateResult<1> {
    return html`
      <nav>
        <div id="container">
          <slot></slot>
        </div>
      </nav>
    `;
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
  @consume({ context: rhNavigationVerticalParentContext, subscribe: true })
  @state() // Mark as state so changes re-render
  private _upstreamParentInfo?: { parent: HTMLElement; depth: number };

  @property() href?: string;

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
      root: !!this._depth && this._depth === 1,
      child: !!this._depth && this._depth > 1,
    };
    return html`
      <div id="container" class="${classMap(classes)}">
        <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
          <slot></slot>
        </a>
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
  @consume({ context: rhNavigationVerticalParentContext, subscribe: true })
  @state()
  private _upstreamParentInfo?: RhNavigationVerticalParent;

  /**
   * Provide our own parent information, including our calculated depth
   */
  @provide({ context: rhNavigationVerticalParentContext })
  parentInfo: RhNavigationVerticalParent = { parent: this, depth: this._depth };

  // Lifecycle method to update depth based on consumed context
  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('_upstreamParentInfo')) {
      // If we found an upstream parent context, our depth is theirs + 1
      this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
      // Update the provided context value when _depth changes
      this.parentInfo = { parent: this, depth: this._depth };
    }
  }

  render(): TemplateResult<1> {
    const classes = {
      root: !!this._depth && this._depth === 0,
      child: !!this._depth && this._depth > 0,
    };
    return html`
      <details id="group" class="${classMap(classes)}">
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
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-vertical': RhNavigationVertical;
    'rh-navigation-vertical-group': RhNavigationVerticalGroup;
    'rh-navigation-vertical-item': RhNavigationVerticalItem;
  }
}
