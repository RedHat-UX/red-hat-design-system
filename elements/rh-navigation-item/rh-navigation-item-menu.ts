import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { DirController } from '../../lib/DirController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-navigation-item-menu.css';

/**
 * Navigation Menu
 * @slot - Place element content here
 */
@customElement('rh-navigation-item-menu')
export class RhNavigationItemMenu extends LitElement {
  static readonly styles = [styles];

  #dir = new DirController(this);

  /**
   * Color palette restricted to color-palette lightest
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { on = '' } = this;
    const classes = { rtl, on: true, [on]: !!on, dehydrated: isServer };
    return html`
      <div id="container" class="${classMap(classes)}">
        <slot></slot>
      </div>
      
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-item-menu': RhNavigationItemMenu;
  }
}
