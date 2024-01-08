import { html, LitElement } from 'lit';
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
    super('change', { bubbles: true, cancelable: true });
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

  @property({
    converter: {
      fromAttribute(list: string) {
        return list?.split(',')
          ?.map(x => x.trim())
          ?.filter(x => RhContextPicker.paletteNames.includes(x as ColorPalette)) ?? [];
      },
      toAttribute(list: ColorPalette[]) {
        return list.join(',');
      },
    },
  }) allow = RhContextPicker.paletteNames;

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
                 min="0"
                 max="${this.allow.length - 1}"
                .value="${this.allow.indexOf(this.value).toString()}"
                 aria-label="${derivedLabel}"
                 style="${styleMap({
                   '--count': `${this.allow.length}`,
                   '--offset': `${this.#offset}px`,
                  })}"
                 @input="${this.#onInput}">
          <datalist id="palettes">${this.allow.map(palette => html`
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

  formStateRestoreCallback(state: string) {
    this.#setValue(state as this['value']);
  }

  firstUpdated() {
    const oldTarget = this.#target;
    if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      this.#target = root.getElementById(this.target);
      this.sync();
    } else {
      this.#target = this.closest('rh-surface');
    }
    oldTarget?.removeEventListener('change', this.#onChange);
    this.#target?.addEventListener('change', this.#onChange);
  }

  #onChange(event: Event) {
    if (event instanceof ContextChangeEvent) { event.stopPropagation(); }
  }

  #onInput(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      event.stopPropagation();
      const value = this.allow.at(+event.target.value);
      if (value) {
        this.#setValue(value);
      }
    }
  }

  #setValue(value: this['value']) {
    this.#internals.setFormValue(value);
    if (value !== this.value && this.dispatchEvent(new ContextChangeEvent(value))) {
      this.value = value;
      this.sync();
    }
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    }
  }
}
