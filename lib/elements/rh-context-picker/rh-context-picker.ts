import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import type { Color } from '@rhds/tokens/js/types.js';
import type { ColorTheme } from '@rhds/elements/lib/context/color/consumer.js';

import { html, LitElement, type ComplexAttributeConverter } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

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

export const ColorPaletteListConverter: ComplexAttributeConverter = {
  fromAttribute(list: string) {
    return list?.split(',')
        ?.map(x => x.trim())
        ?.filter(x => paletteNames.includes(x as ColorPalette)) ?? [];
  },
  toAttribute(list: ColorPalette[]) {
    return list.join(',');
  },
};

export const paletteMap = new Map<ColorPalette, Color>(Object.entries({
  lightest,
  lighter,
  light,
  dark,
  darker,
  darkest,
}) as [ColorPalette, Color][]);

export const paletteNames = Array.from(paletteMap, ([name]) => name);

@customElement('rh-context-picker')
export class RhContextPicker extends LitElement {
  static formAssociated = true;

  static readonly styles = [style];

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string;

  @property() value: ColorPalette = 'darkest';

  @colorContextConsumer() private on?: ColorTheme;

  @property({ converter: ColorPaletteListConverter })
  allow = paletteNames;

  #internals = InternalsController.of(this);

  #target: HTMLElement | null = null;

  render() {
    const { allow, on = 'dark', value = 'darkest' } = this;
    return html`
      <div id="host-label"
           class="visually-hidden">${this.#internals.computedLabelText}</div>
      <div id="container"
           @input="${this.#onInput}"
           class="on ${classMap({ [on]: true })}">
        ${allow.map(palette => html`
        <label for="radio-${palette}" class="visually-hidden">${palette}</label>
        <rh-tooltip>
          <span slot="content">${palette}</span>
          <input id="radio-${palette}" class="${classMap({ [palette]: true })}"
                 name="palette"
                 type="radio"
                 value="${palette}"
                 aria-describedby="host-label"
                 ?checked="${value === palette}">`)}
        </rh-tooltip>
      </div>
    `;
  }

  formStateRestoreCallback(state: string) {
    this.#setValue(state as this['value']);
  }

  firstUpdated() {
    for (const label of this.#internals.labels) {
      label.addEventListener('click', () => this.focus());
    }
    if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      this.#target = root.getElementById(this.target);
      this.sync();
    } else {
      this.#target = this.closest('rh-surface');
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

  override focus() {
    const input: HTMLInputElement | null =
         this.shadowRoot.querySelector('input[checked]')
      ?? this.shadowRoot.querySelector('input');
    input?.focus();
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    }
  }
}
