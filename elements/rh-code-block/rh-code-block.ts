import { type ColorTheme, colorContextConsumer } from '../../lib/context/color/consumer.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';

import style from './rh-code-block.css';

@customElement('rh-code-block')
export class RhCodeBlock extends LitElement {
  static styles = [style];

  @property({ type: Boolean, reflect: true }) compact = false;

  @property({ type: Boolean, reflect: true }) resizable = false;

  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  @colorContextConsumer()
  @state() private on?: ColorTheme;

  render() {
    const { on = '' } = this;
    return html`
      <slot id="content" part="content" class="${classMap({ [on]: !!on })}"></slot>
      <slot id="actions" name="actions" class="${classMap({ [on]: !!on })}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-code-block': RhCodeBlock;
  }
}
