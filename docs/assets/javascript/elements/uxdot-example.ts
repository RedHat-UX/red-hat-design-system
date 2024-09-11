import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import {
  colorContextProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';

import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './uxdot-example.css';

@customElement('uxdot-example')
export class UxdotExample extends LitElement {
  static styles = [styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  @property({ type: Boolean })
  transparent = false;

  @property({ type: String, reflect: true })
  variant?: 'full';

  @property({ type: String, attribute: 'width-adjustment' })
  widthAdjustment = '100%';

  @property({ type: Boolean, attribute: 'no-border' })
  noBorder = false;

  @property({ type: Boolean, reflect: true })
  danger = false;

  @property({ type: String })
  alignment = 'center';

  render() {
    const { on = '', widthAdjustment, alignment } = this;
    return html`
      <div id="container"
           part="container"
           class="on ${classMap({ [on]: !!on })}"
           style="--_width: ${widthAdjustment}; --_alignment: ${alignment}">
        <slot></slot>
      </div>
    `;
  }
}
