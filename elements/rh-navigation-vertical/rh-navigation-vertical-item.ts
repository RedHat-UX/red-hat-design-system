import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { consume } from '@lit/context';
import { context, type RhNavigationVerticalContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-navigation-vertical-item.css';


/**
 * Navigation Tree View
 * @slot - Place element content heres
 */
@customElement('rh-navigation-vertical-item')
export class RhNavigationVerticalItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'listitem' });

  /* Internal state for depth, initially 0 */
  @state()
  private _depth = 0;

  /* Consume the parent context to determine our own depth */
  @consume({ context: context, subscribe: true })
  @state() // Mark as state so changes re-render
  private _upstreamParentInfo?: RhNavigationVerticalContext;

  /**
   * Optional href attribute that, sets the href of the anchor element.
   * If not set the element assumes you've slotted your own <a> element.
   * Defaults to undefined.
   */
  @property({ reflect: true }) href?: string;

  /**
   * Optional highlight attribute that, emphasizes the item.
   * Used for chapter index/landing pages
   */
  @property({ reflect: true, type: Boolean }) highlight = false;

  /**
   * Optional current-page attribute that, highlights the item as the current page.
   * Used to pass the aria-current attribute to the anchor element.
   */
  @property({ attribute: 'current-page', type: Boolean }) currentPage? = false;

  // Lifecycle method to update depth based on consumed context
  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('_upstreamParentInfo')) {
      // If we found an upstream parent context, our depth is theirs + 1
      this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
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
    const isCurrentPage = this.currentPage ? 'page' : undefined;
    const { variant = '', bordered = '' } = this._upstreamParentInfo ?? {};
    const classes = {
      'root': !!this._depth && this._depth === 1,
      'child': !!this._depth && this._depth > 1,
      [variant]: !!variant,
      [bordered]: !!bordered,
    };
    return html`
      <div id="container" class="${classMap(classes)}" data-depth="${this._depth}">
        ${this.href ? html`
          <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
            <slot></slot>
            ${this._upstreamParentInfo?.variant === 'learning-path' ? html`
              <slot name="footer"></slot>
            ` : ''}
          </a>
        ` : html`
          <slot></slot>
        `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-vertical-item': RhNavigationVerticalItem;
  }
}
