import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import {
  colorSchemeProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';
import { colorSchemeConsumer } from '@rhds/elements/lib/context/color/consumer.js';

import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './uxdot-example.css';

@customElement('uxdot-example')
@colorSchemeProvider()
@colorSchemeConsumer
export class UxdotExample extends LitElement {
  static styles = [styles];

  /**
   * Sets color context for child components, overrides parent context
   */
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;

  /* force a transparent background */
  @property({ type: Boolean })
  transparent = false;

  /* full width variant with no padding */
  @property({ type: String, reflect: true })
  variant?: 'full';

  /* width in pixels, defaults to 100% */
  @property({ type: String, attribute: 'width-adjustment' })
  widthAdjustment = '100%';

  /* display a border around the example content */
  @property({ type: Boolean, attribute: 'no-border' })
  noBorder = false;

  /* danger status */
  @property({ type: Boolean, reflect: true })
  danger = false;

  @property({ type: String })
  alignment = 'center';

  render() {
    const { widthAdjustment, alignment } = this;
    return html`
      <div id="container"
           part="container"
           class="on ${classMap({ widthAdjustment: widthAdjustment !== '100%' })}"
           style="--_width: ${widthAdjustment}; --_alignment: ${alignment}">
        <slot></slot>
      </div>
    `;
  }
}
