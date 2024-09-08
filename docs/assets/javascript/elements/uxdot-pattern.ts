import { LitElement, html, isServer } from 'lit';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import {
  colorContextProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';
import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';

import {
  ColorPaletteListConverter,
  ContextChangeEvent,
  paletteNames,
} from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

import styles from './uxdot-pattern.css';

@customElement('uxdot-pattern')
export class UxdotPattern extends LitElement {
  static styles = [styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette: ColorPalette = 'lightest';

  @colorContextConsumer() private on?: ColorTheme;

  @property({ reflect: true })
  target = 'container';

  @property({ type: Boolean })
  noColorPicker = false;

  @property({ type: Boolean })
  stacked = false;

  @property({ converter: ColorPaletteListConverter })
  allow = paletteNames;

  #slots = new SlotController(this, 'html', 'css', 'js');

  render() {
    const { noColorPicker, stacked, on = 'light' } = this;
    const hasHtml = this.#slots.hasSlotted('html');
    const hasCss = this.#slots.hasSlotted('css');
    const hasJs = this.#slots.hasSlotted('js');

    const target = isServer || (this.target === 'container') ? this.target
      : (this.getRootNode() as Document).getElementById(this.target);
    return html`
      <rh-surface id="container"
                  part="container"
                  class="${classMap({ on: true, [on]: true, noColorPicker, stacked })}">
        <form id="color-picker" @submit="${(e: Event) => e.preventDefault()}">
          <label for="picker">Color palette</label>
          <rh-context-picker id="picker"
                             .target="${target}"
                             value="${this.colorPalette}"
                             @change="${this.#onChange}"
                             .allow="${this.allow}"></rh-context-picker>
        </form>
        <div id="example" part="example">
          <slot name="heading"><h3>Example</h3></slot>
          <slot></slot>
        </div>
        <div id="code">${!hasHtml ? '' : html`
          <div id="html">
            <slot name="html-heading"><h3>HTML</h3></slot>
            <slot name="html"></slot>
          </div>`}${!hasCss ? '' : html`
          <div id="css">
            <slot name="css-heading"><h3>CSS</h3></slot>
            <slot name="css"></slot>
          </div>`}${!hasJs ? '' : html`
          <div id="js">
            <slot name="js-heading"><h3>JS</h3></slot>
            <slot name="js"></slot>
          </div>`}
        </div>
      </rh-surface>
    `;
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      this.colorPalette = event.colorPalette;
    }
  }
}
