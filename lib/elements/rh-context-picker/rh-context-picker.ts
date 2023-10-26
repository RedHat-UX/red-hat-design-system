import { html, LitElement, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import { type ColorPalette } from '../../context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../context/color/consumer.js';

import type { Color } from '@rhds/tokens/js/types.js';
import {
  ColorSurfaceDarkest as darkest,
  ColorSurfaceDarker as darker,
  ColorSurfaceDark as dark,
  ColorSurfaceLight as light,
  ColorSurfaceLighter as lighter,
  ColorSurfaceLightest as lightest,
} from '@rhds/tokens/color.js';

import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';

import style from './rh-context-picker.css';

export class ContextChangeEvent extends Event {
  constructor(public colorPalette: ColorPalette) {
    super('change', { bubbles: true });
  }
}

@customElement('rh-context-picker')
export class RhContextPicker extends LitElement {
  static formAssociated = true;

  static readonly styles = [style];

  static readonly palettes = new Map<ColorPalette, Color>(Object.entries({
    darkest,
    darker,
    dark,
    light,
    lighter,
    lightest,
  }) as [ColorPalette, Color][]);

  private static offsets: Partial<Record<ColorPalette, number>> = {
    darkest: -4,
    darker: -3,
    dark: -3,
    light: -1,
    lighter: 1,
    lightest: 2,
  };

  private static paletteNames = Array.from(RhContextPicker.palettes, ([name]) => name);

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string;

  @property() value: ColorPalette = 'darkest';

  @query('#context-range') private range?: HTMLInputElement;

  @colorContextConsumer() private on?: ColorTheme;

  #offset = RhContextPicker.offsets[this.value];

  #internals = this.attachInternals();

  #target: HTMLElement | null = null;

  willUpdate() {
    this.#offset = RhContextPicker.offsets[this.value];
  }

  render() {
    const { on = 'dark', value = 'darkest' } = this;
    const derivedLabel = this.#internals.ariaLabel ?? Array.from(this.#internals.labels, x => x.textContent).join();
    return html`
      <div id="container" class="${classMap({ [on]: true })}">
          <input id="context-range"
                 class="${classMap({ [value]: true })}"
                 name="range"
                 type="range"
                 list="palettes"
                 max="5"
                 aria-label="${derivedLabel}"
                 style="${styleMap({ '--offset': `${this.#offset}px` })}"
                 @input="${this.#onInput}">
          <datalist id="palettes">${Array.from(RhContextPicker.palettes, ([palette]) => html`
            <option id="option-${palette}"
                    value="${palette}"
                    title="${palette}"
                    @click="${() => this.#setValue(palette)}">
              <span class="visually-hidden">${palette}</span>
            </option>`)}
          </datalist>
      </div>
    `;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value') && this.range) {
      this.range.value = RhContextPicker.paletteNames.indexOf(this.value).toString();
    }
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

  #onInput(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      event.stopPropagation();
      const value = RhContextPicker.paletteNames[+event.target.value];
      this.#setValue(value);
    }
  }

  #setValue(value: string) {
    this.#internals.setFormValue(value);
    this.value = value as this['value'];
    if (this.dispatchEvent(new ContextChangeEvent(this.value))) {
      this.sync();
    }
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    }
  }
}
