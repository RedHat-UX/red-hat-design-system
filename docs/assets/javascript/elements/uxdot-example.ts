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
class UxdotExample extends LitElement {
  static styles = [styles];

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /* force a transparent background */
  @property({ reflect: true, type: Boolean })
  transparent = false;

  /* full width variant with no padding */
  @property({ reflect: true })
  variant?: 'full';

  /* width in pixels, defaults to 100% */
  @property({ reflect: true, attribute: 'width-adjustment' })
  widthAdjustment = '100%';

  /* display a border around the example content */
  @property({ reflect: true, attribute: 'no-border', type: Boolean })
  noBorder = false;

  /* danger status */
  @property({ reflect: true, type: Boolean })
  danger = false;

  /* set alignment: left, right, defaults to center */
  @property({ reflect: true })
  alignment = 'center';

  render() {
    const { on = '', widthAdjustment, alignment } = this;
    return html`
      <div id="container" 
          part="container" 
          class="${classMap({ [on]: !!on })}" 
          style="--_width: ${widthAdjustment}; --_alignment: ${alignment};">
        <slot></slot>
      </div>
    `;
  }
}
