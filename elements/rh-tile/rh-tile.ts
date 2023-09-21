import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-tile.css';
import { property } from 'lit/decorators/property';

export type TileType = 'link' | 'radio' | 'checkbox';

/**
 * Tile
 * @slot - Place element content here
 */
@customElement('rh-tile')
export class RhTile extends LitElement {
  static readonly styles = [styles];

  @property({ attribute: 'type', type: String }) type: TileType = 'link';
  @property({ attribute: 'mini', type: Boolean }) mini = false;

  render() {
    return html`
      <slot name="logo"><div class="empty"></div></slot>
      <slot name="icon"><div class="empty"></div></slot>
      <slot name="title"><div class="empty"></div></slot>
      <slot name="header"><div class="empty"></div></slot>
      <slot><div class="empty"></div></slot>
      <slot name="footer"><div class="empty"></div></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile': RhTile;
  }
}
