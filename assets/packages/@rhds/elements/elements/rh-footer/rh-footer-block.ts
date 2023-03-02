import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-block.css';

@customElement('rh-footer-block')
export class RhFooterBlock extends LitElement {
  static readonly styles = style;

  render() {
    return html`
      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-block': RhFooterBlock;
  }
}
