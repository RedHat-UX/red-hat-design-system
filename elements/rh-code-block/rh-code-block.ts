import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';

import style from './rh-code-block.css';
import { classMap } from 'lit/directives/class-map.js';

@customElement('rh-code-block')
export class RhCodeBlock extends LitElement {
  static styles = [style];
  @colorContextConsumer()

  @state() private on?: ColorTheme;

  render() {
    const { on = '' } = this;
    return html`<slot class="${classMap({ [on]: !!on })}"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}
