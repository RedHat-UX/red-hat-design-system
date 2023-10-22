import { type ColorPalette } from '../../context/color/provider.js';
import { html, LitElement, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import type { Color } from '@rhds/tokens/js/types.js';
import {
  ColorSurfaceDarkest as darkest,
  ColorSurfaceDarker as darker,
  ColorSurfaceDark as dark,
  ColorSurfaceLight as light,
  ColorSurfaceLighter as lighter,
  ColorSurfaceLightest as lightest,
} from '@rhds/tokens/color.js';

import style from './rh-context-picker.css';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('rh-context-picker')
export class RhContextPicker extends LitElement {
  static formAssociated = true;

  static readonly styles = [style];

  static readonly palettes = new Map(Object.entries({
    darkest,
    darker,
    dark,
    light,
    lighter,
    lightest,
  } satisfies Record<Exclude<ColorPalette, 'base' | 'accent' | 'complement'>, Color>));

  private static offsets = {
    darkest: -4,
    darker: -3,
    dark: -3,
    light: -1,
    lighter: 1,
    lightest: 2,
  };

  private static paletteNames = Array.from(RhContextPicker.palettes, ([name]) => name);

  declare shadowRoot: ShadowRoot;

  #internals = this.attachInternals();

  #target: HTMLElement | null = null;

  /** ID of context element to toggle (same root) */
  @property() target?: string;

  @property() value?: Exclude<ColorPalette, 'base' | 'complement' | 'accent'>;

  @property() label = 'Color Palette';

  @query('#context-range') range?: HTMLInputElement;

  render() {
    const offset = RhContextPicker.offsets[this.value ?? 'darkest'];
    return html`
      <div id="container">
        <input id="context-range"
               name="range"
               type="range"
               list="palettes"
               max="5"
               style="${styleMap({ '--offset': `${offset}px` })}"
               @input="${this.#onInput}">
        <datalist id="palettes">${Array.from(RhContextPicker.palettes, ([palette, { hex }]) => html`
          <option value="${palette}"
                  title="palette" style="--c:var(--rh-color-surface-${palette},#${hex})">
            <span class="visually-hidden">${palette}</span>
          </option> `)}
        </datalist>
        <label for="context-range">${this.label}</label>
      </div>
    `;
  }

  formStateRestoreCallback(state: string) {
    this.#setValue(state);
  }

  firstUpdated() {
    if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      this.#target = root.getElementById(this.target);
      this.sync();
    } else {
      this.#target = this.closest('rh-context-provider');
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value') && this.value && this.range) {
      this.range.value = RhContextPicker.paletteNames.indexOf(this.value).toString();
    }
  }

  #onInput(e: Event & { target: HTMLInputElement }) {
    const value = RhContextPicker.paletteNames[+e.target.value];
    this.#setValue(value);
  }

  #setValue(value: string) {
    this.#internals.setFormValue(value);
    this.value = value as this['value'];
    this.sync();
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    }
  }
}
