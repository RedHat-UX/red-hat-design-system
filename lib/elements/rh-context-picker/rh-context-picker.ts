import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

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

import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';

import style from './rh-context-picker.css';

export class ContextChangeEvent extends Event {
  constructor(public colorPalette: ColorPalette) {
    super('change', { bubbles: true, cancelable: true });
  }
}

const capitalize = (x: string) => `${x.at(0)?.toUpperCase()}${x.slice(1)}`;

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

  private static paletteNames = Array.from(RhContextPicker.palettes, ([name]) => name);

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string;

  @property() value: ColorPalette = 'darkest';

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

  #internals = this.attachInternals();

  #target: HTMLElement | null = null;

  render() {
    const { allow, on = 'dark', value = 'darkest' } = this;
    return html`
      <div id="container"
           @input="${this.#onInput}"
           class="${classMap({ [`on-${on}`]: true })}">
        ${allow.map(palette => html`
        <input class="${classMap({ [palette]: true })}"
               name="palette"
               title="${capitalize(palette)}"
               type="radio"
               value="${palette}"
               checked="${value === palette}"
               aria-label="${palette}">
          `)}
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
    if (event instanceof ContextChangeEvent) {
      event.stopPropagation();
    }
  }

  #onInput(event: Event) {
    if (event.target instanceof HTMLInputElement && event.target.checked) {
      event.stopPropagation();
      const { value } = event.target;
      if (value) {
        this.#setValue(value as this['value']);
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
