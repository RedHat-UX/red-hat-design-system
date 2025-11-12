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

  @query('summary')
  private _summary!: HTMLElement;

  @consume({ context, subscribe: true })
  @state()
  private compact?: boolean;

  /**
   * Controls whether the dropdown menu is expanded or collapsed.
   *
   * When `true`, the dropdown menu content is visible. When `false`, the menu is hidden.
   * Only applies to items with `variant="dropdown"`.
   *
   * ## Usage guidelines
   * - Automatically toggled when users click the dropdown summary
   * - Can be set declaratively in HTML: `<rh-navigation-primary-item open>`
   * - Use programmatically with `show()` and `hide()` methods
   * - Only one dropdown should be open at a time in navigation
   *
   * @see [Navigation](https://ux.redhat.com/elements/navigation/) documentation
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Text label displayed for dropdown menu items.
   *
   * Provides the clickable text that users see to open the dropdown menu.
   * Only relevant when `variant="dropdown"`. Alternatively, use the `summary` slot
   * for more complex content like icons with text.
   *
   * ## Usage guidelines
   * - Use concise, descriptive labels (e.g., "Account", "Search", "More")
   * - Prefer the `summary` slot for custom markup or icons
   * - Keep labels short for better mobile experience
   * - Ensure labels clearly indicate the dropdown purpose
   */
  @property() summary?: string;

  /**
   * Defines the navigation item's presentation and behavior.
   *
   * - `link` (default) - Standard navigation link without dropdown functionality
   * - `dropdown` - Interactive dropdown menu that expands to show additional content
   *
   * ## Usage guidelines
   * - Use `link` for direct navigation to pages or sections
   * - Use `dropdown` for menus with multiple options (search, account, categories)
   * - Dropdown variant requires content in the default slot for the menu
   * - Link variant typically contains a single anchor element
   */
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
            <!-- summary: icon displayed before dropdown label
                 description: |
                   Contains an icon that appears before the dropdown summary text in the secondary
                   navigation area. Use for visual identification of dropdown purpose.

                   **Common patterns:**
                   - Search icon for search dropdowns
                   - User avatar or profile icon for account menus
                   - Custom brand or feature icons

                   **Best practices:**
                   - Use the \`icon\` property as shorthand for standard icons
                   - Slot custom SVG or image elements for unique icons
                   - Ensure icons are decorative and don't convey critical information alone
                   - Keep icon size consistent across navigation items

                   @see [Navigation](https://ux.redhat.com/elements/navigation/) documentation -->
            <slot name="icon">${!this.icon ? '' : html`
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <!-- summary: dropdown label text or custom content
                 description: |
                   Contains the text label for the dropdown menu. This is the clickable area
                   that users interact with to expand/collapse the dropdown.

                   **Common patterns:**
                   - Simple text labels ("Account", "Search", "Help")
                   - Text with icons or badges
                   - Customized markup for specific use cases

                   **Best practices:**
                   - Use the \`summary\` property for simple text labels
                   - Use this slot for custom HTML or complex content
                   - Keep labels concise and descriptive
                   - Ensure content is accessible with proper ARIA labels if needed

                   @see [Navigation](https://ux.redhat.com/elements/navigation/) documentation -->
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

  /**
   * Programmatically closes the dropdown menu.
   *
   * Sets the `open` property to `false`, collapsing the dropdown menu content.
   * This method is asynchronous and waits for the component to finish updating.
   *
   * ## Usage guidelines
   * - Use to close dropdowns programmatically in response to user actions
   * - Called automatically when users click outside the dropdown
   * - Useful for closing menus after selection or navigation
   * - Coordinates with navigation overlay to manage multiple open dropdowns
   *
   * @example
   * ```javascript
   * const dropdown = document.querySelector('rh-navigation-primary-item');
   * await dropdown.hide();
   * ```
   */
  public async hide() {
    this.open = false;
    this.requestUpdate();
    await this.updateComplete;
  }

  /**
   * Programmatically opens the dropdown menu.
   *
   * Sets the `open` property to `true`, expanding the dropdown menu content.
   * This method is asynchronous and waits for the component to finish updating.
   *
   * ## Usage guidelines
   * - Use to open dropdowns programmatically in response to events
   * - Called automatically when users click the dropdown summary
   * - Closes other open dropdowns when navigation is in single-dropdown mode
   * - Triggers overlay display for modal-like dropdown presentation
   *
   * @example
   * ```javascript
   * const dropdown = document.querySelector('rh-navigation-primary-item');
   * await dropdown.show();
   * ```
   */
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
