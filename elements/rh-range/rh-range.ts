import { LitElement, html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { DirController } from '../../lib/DirController.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import styles from './rh-range.css';

export class RangeInputEvent extends Event {
  constructor(
    public value: number,
    public originalEvent: Event,
  ) {
    super('input', { bubbles: true });
  }
}
/**
 * Range Slider
 * @cssprop --rh-range-thumb-color -  - {@default var(--rh-color-brand-red-on-light, #ee0000)}
 * @cssprop --rh-range-progress-color -  - {@default var(--rh-range-thumb-color, #ee0000)}
 * @fires {RangeInputEvent} input - when the range changes
 */
@customElement('rh-range')
export class RhRange extends LitElement {
  static readonly styles = [styles];

  static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static formAssociated = true;

  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true, type: Boolean }) hidden = false;

  @property({ reflect: true, type: Boolean }) readonly = false;

  @property({ reflect: true, type: Number }) min = 0;

  @property({ reflect: true, type: Number }) max = 100;

  @property({ reflect: true, type: Number }) step?: number;

  @property({ reflect: true, type: Number }) value?: number;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  #dir = new DirController(this);

  #internals = new InternalsController(this, {
    role: 'slider',
    ariaValueMin: `${this.min}`,
    ariaValueMax: `${this.max}`,
    ariaValueNow: `${this.value}`,
  });

  render() {
    const { on = '' } = this;
    const { dir } = this.#dir;
    return html`
      <input class="${classMap({ [on]: !!on, [dir]: !!dir })}"
             aria-hidden="true"
             type="range"
             min="${this.min}"
             max="${this.max}"
             .step=${this.step as unknown as string}
             .value=${this.value as unknown as string}
             ?disabled="${this.disabled}"
             ?readonly="${this.readonly}"
             @input=${this.#onInput}>
    `;
  }

  willUpdate(changed: PropertyValues<this>) {
    if (changed.has('min') || changed.has('max') || changed.has('value')) {
      this.#internals.ariaValueMin = `${this.min}`;
      this.#internals.ariaValueMax = `${this.max}`;
      this.#internals.ariaValueNow = `${this.value}`;
    }
  }

  /**
   * handles time input changes by seeking to input value
   */
  #onInput(event: Event & { target: HTMLInputElement }) {
    event.stopPropagation();
    this.value = (+event.target.value);
    return this.dispatchEvent(new RangeInputEvent(this.value, event));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-range': RhRange;
  }
}
