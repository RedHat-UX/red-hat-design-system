import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import styles from './rh-navigation-primary-item-menu.css' with { type: 'css' };

/**
 * Internal container for dropdown menu panel content within a primary
 * navigation item. This element manages responsive layout between compact
 * (mobile) and desktop modes via context from the parent
 * `rh-navigation-primary`. Authors SHOULD NOT use this element directly;
 * it is rendered automatically by `rh-navigation-primary-item` when
 * `variant="dropdown"`.
 *
 * @summary       Responsive dropdown menu panel container for primary navigation items
 *
 * @slot          - Dropdown panel content projected from the parent `rh-navigation-primary-item` default slot. Content SHOULD include headings, links, and structured layout for the mega-menu pattern.
 *
 */
@customElement('rh-navigation-primary-item-menu')
export class RhNavigationPrimaryItemMenu extends LitElement {
  static readonly styles = [styles];

  #hydrated = false;

  @consume({ context, subscribe: true })
  @state()
  private compact?: boolean;

  protected async firstUpdated(): Promise<void> {
    // ensure we update initially on client hydration
    const _isHydrated = isServer && !this.hasUpdated;
    if (!_isHydrated) {
      this.#hydrated = true;
      const root = this.getRootNode();
      if (root === document || !(root instanceof ShadowRoot)) {
        return;
      }
      const nav = root.host.closest('rh-navigation-primary');
      await nav?.updateComplete;
      if (!nav) {
        this.compact = true; /* default to true if nav returns false */
      } else {
        this.compact = nav.offsetWidth < 1200;
      }
      this.requestUpdate();
    }
  }

  render() {
    const compact = !this.#hydrated ? true : this.compact ?? true;
    return html`
      <div id="container" class="${classMap({ compact: compact, dehydrated: !this.#hydrated })}">
        <!--
          summary: Dropdown panel content from the parent navigation item.
          description: |
            Content is projected from \`rh-navigation-primary-item\` default slot.
            SHOULD include structured layout with headings, links, and columns.
        -->
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-item-menu': RhNavigationPrimaryItemMenu;
  }
}
