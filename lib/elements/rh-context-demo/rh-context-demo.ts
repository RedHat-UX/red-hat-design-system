import { LitElement, type PropertyValues, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';

import { type ColorPalette } from '../../context/color/provider.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import style from './rh-context-demo.css';

import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';

@customElement('rh-context-demo')
export class RhContextDemo extends LitElement {
  static readonly styles = [style, consumerStyles];

  static formAssociated = true;

  @property() value: ColorPalette = 'darkest';

  @property() label = 'Color Palette';

  @property({ attribute: 'color-palette', reflect: true })
  colorPalette = this.value;

  #internals = this.attachInternals();

  protected override render() {
    const { value = 'darkest' } = this;
    const on = this.value.replace(/est|er/, '');
    return html`
      <rh-surface id="provider"
                  color-palette="${value}"
                  @change="${this.#onChange}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${this.value}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
            <slot name="controls"></slot>
          </div>
        <slot part="demo"></slot>
      </rh-surface>
    `;
  }

  protected override willUpdate(changed: PropertyValues<this>) {
    if (changed.has('colorPalette')) {
      this.value = this.colorPalette;
    }
    if (changed.has('value')) {
      this.colorPalette = this.value;
    }
  }

  protected formStateRestoreCallback(state: string) {
    this.#setValue(state as ColorPalette);
  }

  #onChange(event: Event) {
    const picker = this.shadowRoot?.getElementById('picker');
    if (event instanceof ContextChangeEvent) {
      if (event.target !== picker && event.provider && (event.provider !== this)) {
        return;
      }
      this.#setValue(event.colorPalette);
      event.preventDefault();
    }
  }

  #setValue(value: ColorPalette) {
    if (value) {
      this.#internals.setFormValue(value);
      this.value = value;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-context-demo': RhContextDemo;
  }
}
