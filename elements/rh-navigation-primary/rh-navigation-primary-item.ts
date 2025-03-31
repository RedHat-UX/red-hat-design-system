import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import './rh-navigation-primary-item-menu.js';

import styles from './rh-navigation-primary-item.css';

@themable
@customElement('rh-navigation-primary-item')
export class RhNavigationPrimaryItem extends LitElement {
  static readonly styles = [styles];

  #highlight = false;

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'listitem' });

  #hydrated = false;

  @query('details')
  private _details!: HTMLDetailsElement;

  @property({ type: Boolean, reflect: true }) open = false;

  /* Summary text for dropdown variants only */
  @property() summary?: string;

  /* Variants 'link' | 'dropdown', link is the default if no variant is given */
  @property() variant?: 'link' | 'dropdown' = 'link';

  /**
   * Hides the element at various container query based breakpoints.
   * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
   */
  @property({ reflect: true, attribute: 'hide-at' })
  hideAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @consume({ context, subscribe: true })
  @state()
  private compact?: boolean;


  /**
   * Color palette
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      const nav = this.closest('rh-navigation-primary');
      this.compact = nav ? nav.offsetWidth < 1200 : true; /* failover to true */
    }
  }

  render() {
    const { hideAt = '', variant = '' } = this;
    const compact = this.compact ?? true;
    const hamburger = (!this.getAttribute('slot'));
    return html`
      <div id="container" class="${classMap({
      [variant]: true,
      highlight: !!this.#highlight,
      hide: !!hideAt,
      compact,
      standalone: !hamburger,
      hamburger: hamburger,
      dehydrated: !this.#hydrated,
    })}">${this.variant === 'dropdown' ? html`
        <details @toggle="${this.#detailsToggle}">
          <summary>${hamburger ? '' : html`
            <slot name="icon">${!this.icon ? '' : html`
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <div id="summary-text"><slot name="summary">${this.summary}</slot></div>
            <rh-icon icon="caret-down" set="microns"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html`
        <slot></slot>`}
      </div>
    `;
  }

  #detailsToggle() {
    this.open = this._details.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
  }

  public hide() {
    this._details.open = false;
  }

  public show() {
    this._details.open = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-item': RhNavigationPrimaryItem;
  }
}
