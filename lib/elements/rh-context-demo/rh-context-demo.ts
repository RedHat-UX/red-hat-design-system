import { LitElement, type PropertyValues, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { type ColorPalette } from '../../context/color/provider.js';
import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';

import '@rhds/elements/rh-surface/rh-surface.js';

import style from './rh-context-demo.css';

@customElement('rh-context-demo')
export class RhContextDemo extends LitElement {
  static readonly styles = [style];

  static formAssociated = true;

  @property() value: ColorPalette = 'darkest';

  @property() label = 'Color Palette';

  @property({ attribute: 'color-palette', reflect: true }) colorPalette = this.value;

  #internals = this.attachInternals();

  render() {
    const { value = 'darkest' } = this;
    const [on = 'dark'] = value.match(/dark|light/) ?? [];
    return html`
      <rh-surface id="provider"
                           color-palette="${value}"
                           class="${classMap({ [on]: true })}"
                           @change="${this.#onChange}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${this.value}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
          </div>
        <slot part="demo"></slot>
      </rh-surface>
    `;
  }

  willUpdate(changed: PropertyValues<this>) {
    if (changed.has('colorPalette')) {
      this.value = this.colorPalette;
    }
    if (changed.has('value')) {
      this.colorPalette = this.value;
    }
  }

  formStateRestoreCallback(state: string) {
    this.#setValue(state as ColorPalette);
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) {
      this.#setValue(event.colorPalette);
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
