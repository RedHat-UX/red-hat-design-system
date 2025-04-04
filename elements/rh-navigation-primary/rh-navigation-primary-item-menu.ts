import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import styles from './rh-navigation-primary-item-menu.css';

/**
 * Navigation Menu
 * @slot - Place element content here
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
    }
  }

  render() {
    const { compact } = this;
    return html`
      <div id="container" class="${classMap({ compact: !!compact, dehydrated: !this.#hydrated })}">
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
