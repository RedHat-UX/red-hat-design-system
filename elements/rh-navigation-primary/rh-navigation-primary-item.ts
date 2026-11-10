import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { consume } from '@lit/context';
import { context, searchInlineContext } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import './rh-navigation-primary-item-menu.js';

import styles from './rh-navigation-primary-item.css' with { type: 'css' };

/**
 * A navigation item provides an interactive link or dropdown for the
 * primary navigation bar. It must be placed inside
 * `rh-navigation-primary`. Keyboard users press Enter
 * or Space to open or follow the link. Escape closes and returns focus to the toggle.
 * Link items should contain one `<a>` for an accessible name.
 *
 * @summary Interactive link or dropdown for the primary navigation
 *
 * @fires {Event} toggle - Fires when the dropdown opens or closes. The event
 *   has no custom detail; read the element's `open` property for the new state.
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
   * Whether the search content is laid out inline in the navigation rather
   * than in the disclosure panel, which happens when the containing
   * navigation is at least 992px wide. Provided by `rh-navigation-primary`,
   * which owns the measurement so the breakpoint has a single source of
   * truth.
   */
  @consume({ context: searchInlineContext, subscribe: true })
  @state()
  private searchInline?: boolean;

  /**
   * Whether the item is currently expanded. Applies when `variant` is
   * `dropdown` or `search`.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Sets the label text for the dropdown toggle, or the accessible label for
   * the search toggle. When `variant` is `dropdown`, either this
   * property or the `summary` slot must be provided so the toggle has an
   * accessible name. For `search`, defaults to `'Search'`.
   */
  @property() summary?: string;

  /**
   * Controls the presentation style of the navigation item. Set to `dropdown`
   * when the item provides an expandable menu. Set to `search` for a
   * search field placed in the primary navigation's `search` slot. Below
   * 992px the item renders a search toggle that opens the field in a dropdown
   * panel below the bar; at 992px and above the field is displayed inline and
   * open. Otherwise it should remain `link` for simple anchor-style items.
   * Defaults to `link`.
   */
  @property() variant?: 'link' | 'dropdown' | 'search' = 'link';

  /**
   * Hides the element below a given container-query breakpoint and reveals it
   * when the navigation is at or above that width. Allows progressive
   * disclosure of navigation items at wider viewports. Avoid hiding critical
   * navigation items, as they will be inaccessible below the breakpoint. Does
   * not apply to `variant="search"`, whose region is laid out by the
   * navigation. Defaults to `undefined`.
   */
  @property({ reflect: true, attribute: 'hide-at' })
  hideAt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /**
   * Shorthand for the `icon` slot. Sets the icon name from the given icon set.
   * should be used with the `dropdown` variant for standalone secondary items
   * such as account or search toggles. Defaults to `undefined`.
   */
  @property() icon?: IconNameFor<IconSetName>;

  /**
   * Icon set for the `icon` property. must match a registered icon set name.
   * Defaults to `ui`.
   */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;


  protected firstUpdated(): void {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      /**
       * SSR Adds the role, but then removes when ElementInternals is hydrated
       * However, axe-dev tools then complains as it doesn't handle Internals correctly
       * So.... lets readd it for brevity, then when axe decides to fix their stuff,
       * we can remove at a later date.
       */
      if (this.variant !== 'search') {
        // The search variant sits in the nav's search region, not a list.
        this.role = 'listitem';
      }
    }
  }

  @observes('searchInline')
  protected searchInlineChanged(_oldVal: boolean | undefined, newVal: boolean | undefined): void {
    if (this.variant === 'search' && newVal && this.open) {
      // the content is displayed inline at this size, so collapse the
      // disclosure and let the navigation close its overlay
      this.#setOpen(false);
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
      open: this.open,
    })}">${this.variant === 'search' ? html`
        <details ?open="${this.open || this.searchInline}" @toggle="${this.#detailsToggle}">
          <summary aria-label="${this.summary?.trim() || 'Search'}">
            <rh-icon icon="search" set="ui" aria-hidden="true"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu class="details-content">
            <!--
              Use this slot for the search content shown by the search
              variant. Below 992px the content is displayed in a dropdown panel
              below the navigation bar; at 992px and above it is displayed
              inline and open.
            -->
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : this.variant === 'dropdown' ? html`
        <details @toggle="${this.#detailsToggle}" ?open="${this.open}">
          <summary>${hamburger ? '' : html`
            <!--
              Use this slot to provide a custom icon before the summary text,
              typically an \`<rh-icon>\` or \`<rh-avatar>\` element. For
              accessibility, the icon is treated as decorative; the summary
              slot provides the accessible name for the toggle.
            -->
            <slot name="icon">${!this.icon ? '' : html`
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <div id="summary-text">
              <!--
                Use this slot to provide custom label content for the dropdown
                toggle, typically a \`<span>\` with visible text. For
                accessibility, this content provides the accessible name read
                by screen readers; it must not be empty.
              -->
              <slot name="summary">${this.summary}</slot>
            </div>
            <rh-icon icon="caret-down" set="microns" ?hidden="${!hamburger}"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <!--
              Use this slot for dropdown menu content such as headings,
              link lists, and structured columns. For accessibility, content
              is hidden from assistive technology until the dropdown is
              opened via the disclosure widget.
            -->
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html`
        <!--
          Use this slot for link variant content, typically a single \`<a>\`
          or \`<rh-navigation-link>\` element. For accessibility, the link
          text provides the accessible name for this navigation item.
        -->
        <slot></slot>`}
      </div>
    `;
  }

  #detailsToggle() {
    if (this.variant === 'search' && this.searchInline) {
      // the search details is forced open while the content is displayed
      // inline; its state is not user-controlled, so collapse `open` without
      // notifying the navigation
      this.#setOpen(false, false);
      return;
    }
    this.#setOpen(this._details.open);
  }

  /**
   * Sets `open` and, unless suppressed, notifies the navigation so it can
   * update its overlay. Suppress the notification when the disclosure was
   * forced open by `searchInline` rather than by the user.
   *
   * @param open the new value of `open`
   * @param notify whether to dispatch a `toggle` event for the navigation
   */
  #setOpen(open: boolean, notify = true): void {
    this.open = open;
    if (notify) {
      this.dispatchEvent(new Event('toggle', { bubbles: true }));
    }
  }

  /** Sets `open` to `false`; only affects `dropdown` and `search` items. */
  public async hide(): Promise<void> {
    await this.#updateOpen(false);
  }

  /** Sets `open` to `true`; only affects `dropdown` and `search` items. */
  public async show(): Promise<void> {
    await this.#updateOpen(true);
  }

  async #updateOpen(open: boolean): Promise<void> {
    this.open = open;
    this.requestUpdate();
    await this.updateComplete;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-item': RhNavigationPrimaryItem;
  }
}
