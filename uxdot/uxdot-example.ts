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

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  accessor colorPalette: ColorPalette | undefined;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private accessor on: ColorTheme | undefined;

  /* force a transparent background */
  @property({ type: Boolean })
  accessor transparent = false;

  /* full width variant with no padding */
  @property({ type: String, reflect: true })
  accessor variant: 'full' | undefined;

  /* width in pixels, defaults to 100% */
  @property({ type: String, attribute: 'width-adjustment' })
  accessor widthAdjustment = '100%';

  /* display a border around the example content */
  @property({ type: Boolean, attribute: 'no-border' })
  accessor noBorder = false;

  /* danger status */
  @property({ type: Boolean, reflect: true })
  accessor danger = false;

  @property({ type: String })
  accessor alignment = 'center';

  render() {
    const { on = '', widthAdjustment, alignment } = this;
    return html`
      <div id="container"
           part="container"
           class="on ${classMap({ [on]: !!on, widthAdjustment: widthAdjustment !== '100%' })}"
           style="--_width: ${widthAdjustment}; --_alignment: ${alignment}">
        <slot></slot>
      </div>
    `;
  }
}
