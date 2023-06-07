import { type ColorPalette } from '../../context/color/provider.js';
import { html, LitElement, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import style from './rh-context-picker.css';
@customElement('rh-context-picker')
export class RhContextPicker extends LitElement {
  static readonly styles = [style];

  static readonly palettes: ColorPalette[] = [
    'darkest',
    'darker',
    'dark',
    'light',
    'lighter',
    'lightest',
  ];

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string;

  #target: HTMLElement | null = null;

  @property() value?: ColorPalette;

  @query('#context-range') range?: HTMLInputElement;

  render() {
    return html`
      <form>
        <label for="context-range">Color Palette</label>
        <input id="context-range"
               name="range"
               type="range"
               list="palettes"
               max="5"
               @input="${this.#onInput}">
        <datalist id="palettes">
          <option value="0" label="darkest"></option>
          <option value="1" label="darker"></option>
          <option value="2" label="dark"></option>
          <option value="3" label="light"></option>
          <option value="4" label="lighter"></option>
          <option value="5" label="lightest"></option>
        </datalist>
      </form>
    `;
  }

  firstUpdated() {
    if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      this.#target = root.getElementById(this.target);
      this.sync();
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value') && this.value && this.range) {
      this.range.value = RhContextPicker.palettes.indexOf(this.value).toString();
    }
  }

  #onInput(e: Event & { target: HTMLInputElement }) {
    this.value = RhContextPicker.palettes[+e.target.value];
    this.sync();
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    }
  }
}
