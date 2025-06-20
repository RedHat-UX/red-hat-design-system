import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { consume, provide } from '@lit/context';
import { parentContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-tree-view.css';
import groupStyles from './rh-navigation-tree-view-group.css';
import itemStyles from './rh-navigation-tree-view-item.css';


/**
 * TODO: Figure out why when this is broken out into separate files, the context doesn't work correctly.
 * import './rh-navigation-tree-view-group.js';
 * import './rh-navigation-tree-view-item.js';
 */


export interface RhNavigationTreeViewParent {
  parent: HTMLElement;
  depth: number;
}


/**
 * Navigation Tree View
 * @slot - Place element content here
 */
@customElement('rh-navigation-tree-view')
@themable
export class RhNavigationTreeView extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  #internals = InternalsController.of(this, { role: 'tree' });

  private _depth = 0; // Internal state for depth, initially 0

  // Provide our own parent information, including our calculated depth
  // This @provide will be reactive to changes in _depth
  @provide({ context: parentContext })
  parentInfo: RhNavigationTreeViewParent = { parent: this, depth: this._depth };

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
 * @slot - Place element content here
 */
@customElement('rh-navigation-tree-view-item')
export class RhNavigationTreeViewItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [itemStyles];

  #internals = InternalsController.of(this, { role: 'treeitem' });

  // @state() is used here because depth will be updated dynamically based on consumed context
  @state()
  private _depth = 0; // Internal state for depth, initially 0

  // Consume the parent context to determine our own depth
  @consume({ context: parentContext, subscribe: true })
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
@customElement('rh-navigation-tree-view-group')
export class RhNavigationTreeViewGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [groupStyles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'treeitem' });

  // @state() is used here because depth will be updated dynamically based on consumed context
  @state()
  private _depth = 0; // Internal state for depth, initially 0

  // Consume the parent context to determine our own depth
  @consume({ context: parentContext, subscribe: true })
  @state() // Mark as state so changes re-render
  private _upstreamParentInfo?: RhNavigationTreeViewParent;

  // Provide our own parent information, including our calculated depth
  // This @provide will be reactive to changes in _depth
  @provide({ context: parentContext })
  parentInfo: RhNavigationTreeViewParent = { parent: this, depth: this._depth };

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
    'rh-navigation-tree-view': RhNavigationTreeView;
    'rh-navigation-tree-view-group': RhNavigationTreeViewGroup;
    'rh-navigation-tree-view-item': RhNavigationTreeViewItem;
  }
}
