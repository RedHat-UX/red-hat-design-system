import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import './rh-navigation-primary-item-menu.js';

import styles from './rh-navigation-primary-item.css' with { type: 'css' };

/**
 * A navigation item represents an interactive element within the primary
 * navigation bar. It supports link and dropdown variants, adapting its
 * presentation based on the navigation's compact state and slot placement.
 *
 * @summary Interactive link or dropdown within the primary navigation
 *
 * @fires toggle - when the dropdown opens or closes
 */
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

  @query('summary')
  private _summary!: HTMLElement;

  @consume({ context, subscribe: true })
  @state()
  private compact?: boolean;

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


  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      const nav = this.closest('rh-navigation-primary');
      if (!nav) {
        this.compact = true; /* default to true if nav returns false */
      } else {
        this.compact = nav.offsetWidth < 1200;
      }
      /**
       * SSR Adds the role, but then removes when ElementInternals is hydrated
       * However, axe-dev tools then complains as it doesn't handle Internals correctly
       * So.... lets readd it for brevity, then when axe decides to fix their stuff,
       * we can remove at a later date.
       */
      this.role = 'listitem';
    }
  }

  render() {
    const { variant = '' } = this;
    const compact = this.compact ?? true;
    const hamburger = (!this.getAttribute('slot'));
    return html`
      <div id="container" class="${classMap({
      [variant]: true,
      highlight: !!this.#highlight,
      compact,
      standalone: !hamburger,
      hamburger: hamburger,
      dehydrated: !this.#hydrated,
    })}">${this.variant === 'dropdown' ? html`
        <details @toggle="${this.#detailsToggle}" ?open="${this.open}">
          <summary>${hamburger ? '' : html`
            <!--
              Use this slot to provide a custom icon before the summary text.
              If the \`icon\` property is set, it will be used as the default slot content.
            -->
            <slot name="icon">${!this.icon ? '' : html`
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <div id="summary-text">
              <!--
                Use this slot to provide custom label content for the dropdown toggle.
                If the \`summary\` property is set, it will be used as the default slot content.
              -->
              <slot name="summary">${this.summary}</slot>
            </div>
            <rh-icon icon="caret-down" set="microns" class="${hamburger ? '' : 'hidden'}"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <!--
              Use this slot for dropdown menu content, displayed when the item is open.
              Typically contains links, nested menus, or other navigational content.
            -->
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html`
        <!--
          Use this slot for link variant content, typically an \`<a>\` or
          \`<rh-navigation-link>\` element.
        -->
        <slot></slot>`}
      </div>
    `;
  }

  #detailsToggle() {
    this.open = this._details.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
  }

  /** @summary hides the dropdown */
  public async hide() {
    this.open = false;
    this.requestUpdate();
    await this.updateComplete;
  }

  /** @summary shows the dropdown */
  public async show() {
    this.open = true;
    this.requestUpdate();
    await this.updateComplete;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-item': RhNavigationPrimaryItem;
  }
}
