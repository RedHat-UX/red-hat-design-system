import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { consume } from '@lit/context';
import { compactContext } from './context.js';

import styles from './rh-navigation-primary-item-menu.css';

/**
 * Navigation Menu
 * @slot - Place element content here
 */
@customElement('rh-navigation-primary-item-menu')
export class RhNavigationPrimaryItemMenu extends LitElement {
  static readonly styles = [styles];

  @consume({ context: compactContext, subscribe: true })
  @property({ attribute: false })
  private compact?: boolean;

  render() {
    const { compact = true } = this;
    return html`
      <div id="container" class="${classMap({ compact })}">
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
