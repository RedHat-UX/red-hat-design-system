import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { DirController } from '../../lib/DirController.js';

import { consume } from '@lit/context';
import { context, type RhNavigationPrimaryItemContext } from './context.js';

import styles from './rh-navigation-primary-item-menu.css';

/**
 * Navigation Menu
 * @slot - Place element content here
 */
@customElement('rh-navigation-primary-item-menu')
export class RhNavigationPrimaryItemMenu extends LitElement {
  static readonly styles = [styles];

  #dir = new DirController(this);

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhNavigationPrimaryItemContext;

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { compact = true } = this.ctx ?? {};
    const classes = { rtl, compact };
    return html`
      <div id="container" class="${classMap(classes)}">
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
