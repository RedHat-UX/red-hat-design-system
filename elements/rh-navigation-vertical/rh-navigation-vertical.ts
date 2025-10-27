import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { query } from 'lit/decorators/query.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { provide } from '@lit/context';
import { context, type RhNavigationVerticalContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import './rh-navigation-vertical-list.js';

import styles from './rh-navigation-vertical.css';

/**
 * A vertical navigation list of top-level and grouped navigation items, typically used in a side navigation pattern.
 * @summary Vertical navigation
 * @alias navigation-vertical
 */
@customElement('rh-navigation-vertical')
@themable
export class RhNavigationVertical extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  #internals = InternalsController.of(this, { role: 'navigation' });

  private _depth = 0; // Internal state for depth, initially 0

  @query('#title')
  private _title!: HTMLHeadingElement;

  /**
   * Optional bordered attribute that adds a border to the inline-start
   * of the navigation items and groups that are greater then a depth of 1.
   * Defaults to undefined.
   */
  @property({ reflect: true }) bordered?: 'inline-start';

  /**
   * The accessible-label attribute labels the navigation using a visually hidden heading.
   * Defaults to 'Navigation'. This label should be changed if other navigation elements
   * are present or when translations are needed.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Navigation';

  /**
   * Provide our own parent information, depth = 0
   */
  @provide({ context: context })
  private _ctx = this.#makeContext();

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    if (!isServer) {
      if (this._title) {
        this.#internals.ariaLabelledByElements = [this._title];
      }
    }
  }

  render(): TemplateResult<1> {
    const { bordered = '' } = this;
    const classes = {
      [bordered]: !!bordered,
    };
    return html`
      <h2 class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" class="${classMap(classes)}" role="list">
          <!--
            Use this slot for \`<rh-navigation-link>\` elements to provide a list of navigation links  
            and \`<rh-navigation-vertical-list>\` when providing a grouped list of navigation links. 
          -->
        <slot></slot>
      </div>
    `;
  }

  #makeContext(): RhNavigationVerticalContext {
    return {
      depth: this._depth,
      bordered: this.bordered,
    };
  }

  @observes('bordered')
  protected _openChanged() {
    this._ctx = this.#makeContext();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-vertical': RhNavigationVertical;
  }
}
