import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { provide } from '@lit/context';
import { context, type RhNavigationVerticalContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import './rh-navigation-vertical-group.js';
import './rh-navigation-vertical-item.js';

import styles from './rh-navigation-vertical.css';


/**
 * A vertical navigation list of top-level and grouped navigation items, typically used in a side navigation pattern.
 * @summary Vertical navigation
 * @slot - Default slot for navigation items and groups
 */
@customElement('rh-navigation-vertical')
@themable
export class RhNavigationVertical extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'navigation' });

  private _depth = 0; // Internal state for depth, initially 0

  /**
   * Optional bordered attribute that adds a border to the inline-start
   * of the navigation items and groups that are greater then a depth of 1.
   * Defaults to undefined.
   */
  @property({ reflect: true }) bordered?: 'inline-start';

  /**
   * Optional accessible-label attribute that sets the aria-label for the navigation.
   * Defaults to 'main'
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'main';

  /**
   * Provide our own parent information, depth = 0
   */
  @provide({ context: context })
  private _ctx = this.#makeContext();

  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.#upgradeAccessibility();
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
      this.role = 'navigation';
    }
  }

  render(): TemplateResult<1> {
    const { bordered = '' } = this;
    const classes = {
      [bordered]: !!bordered,
    };
    return html`
      <div id="container" class="${classMap(classes)}" role="list">
        <slot></slot>
      </div>
    `;
  }

  /**
   * Upgrades the aria attributes on upgrade
   */
  #upgradeAccessibility(): void {
    this.#internals.ariaLabel = this.accessibleLabel;
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
