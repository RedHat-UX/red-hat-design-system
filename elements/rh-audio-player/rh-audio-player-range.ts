import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import styles from './rh-audio-player-range.css';

export class AudioPlayerRangeInputEvent extends Event {
  constructor(
    public value: number,
    public originalEvent: Event,
  ) {
    super('input', { bubbles: true });
  }
}
/**
 * Audio Player Range Slider
 * @cssprop --rh-audio-player-range-thumb-color -  - {@default var(--rh-color-brand-red-on-light, #ee0000)}
 * @cssprop --rh-audio-player-range-progress-color -  - {@default var(--rh-audio-player-range-thumb-color, #ee0000)}
 * @fires {AudioPlayerRangeInputEvent} input - when the range changes
 */
@customElement('rh-audio-player-range')
export class RhAudioPlayerRange extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true, type: Boolean }) hidden = false;

  @property({ reflect: true, type: Boolean }) readonly = false;

  @property({ type: Number }) min = 0;

  @property({ type: Number }) max = 1;

  @property({ type: Number }) step?: number;

  @property({ type: Number }) value?: number;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  #style = getComputedStyle(this);

  render() {
    const { on = '' } = this;
    const { direction } = this.#style;
    return html`
      <input class="${classMap({ [on]: !!on, [direction || 'auto']: true })}"
             type="range"
             min="${this.min}"
             max="${this.max}"
             step=${ifDefined(this.step || undefined)}
             value=${ifDefined(this.value || undefined)}
             ?disabled="${this.disabled}"
             ?readonly="${this.readonly}"
             @input=${this.#onInput}>
    `;
  }

  /**
   * handles time input changes by seeking to input value
   */
  #onInput(event: Event & { target: HTMLInputElement }) {
    event.stopPropagation();
    this.setAttribute('value', event.target?.value);
    return this.dispatchEvent(new AudioPlayerRangeInputEvent(parseFloat(event.target.value), event));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-range': RhAudioPlayerRange;
  }
}
