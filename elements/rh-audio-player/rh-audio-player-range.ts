import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

// import {msg} from '@lit/localize';

import styles from './rh-audio-player-range.css';


/**
 * Audio Player Range Slider
 * @cssprop --rh-audio-player-range-thumb-color -  - {@default var(--rh-color-brand-red-on-light, #ee0000)}
 * @cssprop --rh-audio-player-range-progress-color -  - {@default var(--rh-audio-player-range-thumb-color, #ee0000)}
 */
@customElement('rh-audio-player-range')
export class RhAudioPlayerRange extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true, type: Number }) min = 0;
  @property({ reflect: true, type: Boolean }) disabled = false;
  @property({ reflect: true, type: Boolean }) hidden = false;
  @property({ reflect: true, type: Boolean }) readonly = false;
  @property({ reflect: true, type: Number }) max = 1;
  @property({ reflect: true, type: Number }) step = undefined;
  @property({ reflect: true, type: Number }) value = undefined;

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  get #stepAttribute():number|undefined {
    return this.step ? this.step : undefined;
  }

  get #valueAttribute():number|undefined {
    return this.value ? this.value : undefined;
  }

  render() {
    return html`<input 
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
