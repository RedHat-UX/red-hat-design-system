import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-code-block.css';

@customElement('rh-code-block')
export class RhCodeBlock extends LitElement {
  static styles = [style];
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}
