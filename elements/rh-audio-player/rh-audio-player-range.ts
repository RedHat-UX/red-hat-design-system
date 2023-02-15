import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import styles from './rh-audio-player-range.css';

/**
 * Audio Player Range Slider
 * @cssprop --rh-audio-player-range-thumb-color -  - {@default var(--rh-color-brand-red-on-light, #ee0000)}
 * @cssprop --rh-audio-player-range-progress-color -  - {@default var(--rh-audio-player-range-thumb-color, #ee0000)}
 */
@customElement('rh-audio-player-range')
export class RhAudioPlayerRange extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true, type: Boolean }) disabled = false;
  @property({ reflect: true, type: Boolean }) hidden = false;
  @property({ reflect: true, type: Boolean }) readonly = false;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 1;
  @property({ type: Number }) step = undefined;
  @property({ type: Number }) value = undefined;

  @colorContextConsumer()
  @property() on?:ColorTheme;

  get #stepAttribute():number|undefined {
    return this.step ? this.step : undefined;
  }

  get #valueAttribute():number|undefined {
    return this.value ? this.value : undefined;
  }

  render() {
    const dir = getComputedStyle(this).direction || 'auto';
    return html`<input 
      class="${classMap({ [this.on || 'light']: !!this.on, [dir]: !!dir })}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      type="range" 
      min="${this.min}" 
      max="${this.max}" 
      @input=${this.#handleInput}
      step=${ifDefined(this.#stepAttribute)}
      value=${ifDefined(this.#valueAttribute)}>
    `;
  }

  /**
   * handles time input changes by seeking to input value
   */
  #handleInput(event:Event):void {
    event.stopPropagation();
    const target = event.target as HTMLInputElement;
    this.setAttribute('value', target?.value);
    this.dispatchEvent(new CustomEvent('input', { ...event, detail: parseFloat(target?.value) as number }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-range': RhAudioPlayerRange;
  }
}
