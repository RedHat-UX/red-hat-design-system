import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import styles from './rh-tile-link.css';

/**
 * Tile
 * @slot - Place element content here
 */
@customElement('rh-tile-link')
export class RhTileLink extends LitElement {
  static readonly styles = [styles];

  /**
   * whether headline link text is a desaturated color instead of blue;
   * `true` sets headline color to white on dark tiles or black on light tiles
   */
  @property({ reflect: true, attribute: 'desaturated', type: Boolean }) desaturated = false;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile-link': RhTileLink;
  }
}
