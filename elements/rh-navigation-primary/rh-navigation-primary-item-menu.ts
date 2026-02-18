import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import styles from './rh-navigation-primary-item-menu.css' with { type: 'css' };

/**
 * A navigation menu is a responsive content container for navigation item
 * dropdowns that adapts its layout based on the primary navigation's compact
 * state.
 *
 * @summary Content container for navigation item dropdowns
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
          Use this slot for navigation item dropdown content, typically links
          and nested menus. Content layout adapts based on the primary
          navigation's compact state.
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
