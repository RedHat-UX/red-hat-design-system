import { colorPalettes, type ColorPalette } from '../../context/color/provider.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { ContextChangeEvent } from '../rh-context-picker/rh-context-picker.js';

import style from './rh-context-demo.css';

@customElement('rh-context-demo')
@colorPalettes
export class RhContextDemo extends LitElement {
  static readonly styles = [style];

  static formAssociated = true;

  @property() label = 'Color Palette';

  @property({ attribute: 'color-palette', reflect: true }) colorPalette: ColorPalette = 'darkest';

  #internals = InternalsController.of(this);

  protected override render() {
    const { colorPalette } = this;
    return html`
      <div id="provider" @change="${this.#onChange}">
          <div id="picker-container">
            <rh-context-picker id="picker"
                               .value="${colorPalette}"
                               target="provider"></rh-context-picker>
            <label for="picker">${this.label}</label>
            <slot name="controls"></slot>
          </div>
        <slot part="demo"></slot>
      </div>
    `;
  }

  @observes('colorPalette')
  protected colorPaletteChanged() {
    this.#setValue(this.colorPalette);
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
      if (this.colorPalette !== value) {
        this.colorPalette = value;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-context-demo': RhContextDemo;
  }
}
