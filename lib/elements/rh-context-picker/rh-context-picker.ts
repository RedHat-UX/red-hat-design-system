import { type ColorPalette } from '../../context/color/provider.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

@customElement('rh-context-picker')
export class RhContextPicker extends LitElement {
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

  render() {
    return html`
      <form>
        <h2>Color Context</h2>
        <label for="context-range">Color Palette</label>
        <input id="context-range"
               name="range"
               type="range"
               list="palettes"
               max="5"
               value="3"
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

  connectedCallback() {
    super.connectedCallback();
    if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      this.#target = root.getElementById(this.target);
      this.sync();
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
