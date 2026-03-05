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
 * An individual item within the primary navigation. Renders as either a simple
 * link container or an expandable dropdown with a `<details>`/`<summary>`
 * disclosure widget. The element has ARIA `listitem` role and MUST be a direct
 * child of `rh-navigation-primary`. Users activate dropdowns via Enter, Return,
 * or Space, and close them with Escape. Tab moves focus to the next interactive
 * element inside or outside the dropdown.
 *
 * @summary       A navigation item used as a link or expandable dropdown within primary navigation
 *
 * @slot          - Default slot for link content (when `variant="link"`) or dropdown panel content (when `variant="dropdown"`). For dropdowns, this content appears inside `rh-navigation-primary-item-menu`.
 * @slot icon     - USE this slot to place an icon before the summary text in dropdown variants. Typically an `rh-icon` or `rh-avatar` element.
 * @slot summary  - USE this slot to provide the visible trigger label text for dropdown variants. Typically a `<span>` element.
 *
 * @fires {Event} toggle - Fires when the dropdown opens or closes. Bubbles to `rh-navigation-primary`. The `open` property on the element reflects the current state.
 *
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

  /**
   * Whether the dropdown is currently expanded. Reflects to the `open`
   * attribute. Only applies when `variant="dropdown"`. Controlled
   * internally by the `<details>` toggle or via `show()`/`hide()` methods.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Summary text displayed as the dropdown trigger label. Only used when
   * `variant="dropdown"`. SHOULD be set via the `summary` slot for richer
   * content, or via this attribute for plain text.
   */
  @property() summary?: string;

  /**
   * Controls the rendering mode. `'link'` (default) renders the default slot
   * directly for simple anchor links. `'dropdown'` renders a
   * `<details>`/`<summary>` disclosure widget with the default slot as the
   * expandable panel content.
   */
  @property() variant?: 'link' | 'dropdown' = 'link';

  /**
   * Hides the element below a container-query-based breakpoint. USE this to
   * progressively hide utility items at smaller viewport sizes. Valid values:
   * `'xs'` (320px), `'sm'` (567px), `'md'` (768px), `'lg'` (992px),
   * `'xl'` (1200px), `'2xl'` (not currently mapped). The element is hidden
   * by default when this attribute is present and shown once the container
   * reaches the specified minimum width.
   */
  @property({ reflect: true, attribute: 'hide-at' })
  hideAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /**
   * Shorthand for the `icon` slot. Sets the icon name rendered before the
   * summary text in dropdown variants. USE the `icon` slot instead for
   * non-standard icon content like `rh-avatar`.
   */
  @property() icon?: IconNameFor<IconSetName>;

  /**
   * Icon set for the `icon` property. Defaults to `'ui'` when not specified.
   * Common values: `'ui'`, `'microns'`.
   */
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
