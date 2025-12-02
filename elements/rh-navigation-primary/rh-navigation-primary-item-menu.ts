import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import styles from './rh-navigation-primary-item-menu.css';

/**
 * Navigation Menu
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
        <!-- summary: dropdown menu content and navigation items (default slot)
             description: |
               Contains the menu content displayed when a navigation dropdown is expanded.
               Typically includes links, buttons, or custom content organized in a menu structure.

               **Common patterns:**
               - Links organized into groups or sections
               - Search forms or input fields
               - User account information and settings links
               - Hierarchical navigation with categories

               **Best practices:**
               - Use semantic HTML (lists, links) for navigation items
               - Ensure all interactive elements are keyboard accessible
               - Provide clear labels and organize content logically
               - Keep menu depth shallow (avoid deeply nested menus)

               @see [Navigation](https://ux.redhat.com/elements/navigation/) documentation -->
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
