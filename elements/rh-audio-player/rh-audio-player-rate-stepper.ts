import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { DirController } from '@rhds/elements/lib/DirController.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-audio-player-rate-stepper.css';

/**
 */
@customElement('rh-audio-player-rate-stepper')
export class RhAudioPlayerRateStepper extends LitElement {
  static readonly styles = [styles];

  /** Playback rate */
  @property({ reflect: true, type: Number, attribute: 'playback-rate' }) playbackRate = 1;

  /** Playback rate */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /** Playback rate */
  @property() label?: string;

  #dir = new DirController(this);

  #pbrMin = 0.25;

  #pbrMax = 2;

  #pbrStep = 0.25;

  #pbrFixed = 2;

  /**
   * gets list of allowable playback rates
   */
  get #playbackRates() {
    return [
      ...Array(Math.round(this.#pbrMax / this.#pbrStep)).keys()].map(k =>
      k * this.#pbrStep + this.#pbrMin
    );
  }


  /** template for playback rate controls */
  render() {
    const rtl = this.#dir.dir === 'rtl';

    return html`
      <rh-tooltip class="${classMap({ rtl })}">
        <div>
          <button id="stepdown"
                  class="playback-rate-step"
                  tabindex="-1"
                  aria-hidden="true"
                  ?disabled="${this.disabled || this.playbackRate < 0.5}"
                  @click="${this.#dec}">
            <rh-icon icon="caret-left" set="microns"></rh-icon>
          </button>
          <select id="playback-rate"
                  aria-label="${ifDefined(this.label)}"
                  ?disabled="${this.disabled}"
                  @click="${this.#onPlaybackRateSelect}"
                  @change="${this.#onPlaybackRateSelect}"
                  .value="${this.playbackRate?.toFixed(this.#pbrFixed)}">${this.#playbackRates.map(step => html`
            <option .value="${step.toFixed(this.#pbrFixed)}"
                    ?selected=${this.playbackRate.toFixed(this.#pbrFixed) === step.toFixed(this.#pbrFixed)}>
              ${step.toFixed(this.#pbrFixed)}x
            </option>`)}
          </select>
          <button id="stepup"
                  class="playback-rate-step"
                  tabindex="-1"
                  aria-hidden="true"
                  ?disabled="${this.disabled || this.playbackRate > 1.75}"
                  @click="${this.#inc}">
            <rh-icon icon="caret-right" set="microns"></rh-icon>
          </button>
        </div>
        <span slot="content">${this.label}</span>
      </rh-tooltip>
    `;
  }

  #onPlaybackRateSelect(event: Event) {
    if (!this.disabled && event.target instanceof HTMLSelectElement) {
      const val = !event.target.value ? 1.00 : parseFloat(event.target.value);
      this.dispatchEvent(new RhAudioPlayerRateSelectEvent(val));
    }
  }

  #validPlaybackRate(number: number) {
    // ensures number between min and maxk
    const inRange = Math.max(this.#pbrMin, Math.min(this.#pbrMax, number));
    // used to round number to nearest step
    const multiplier = 1 / this.#pbrStep;
    return Math.round(inRange * multiplier) / multiplier;
  }

  /**
   * Increases media playback rate by playback rate step value
   */
  #inc() {
    this.#fire(this.playbackRate + this.#pbrStep);
  }

  /**
   * Decreases media playback rate by playback rate step value
   */
  #dec() {
    this.#fire(this.playbackRate - this.#pbrStep);
  }

  #fire(rate: number) {
    if (this.#validPlaybackRate(rate)) {
      const event = new RhAudioPlayerRateSelectEvent(rate);
      this.dispatchEvent(event);
    }
  }
}

export class RhAudioPlayerRateSelectEvent extends Event {
  constructor(public playbackRate: number) {
    super('playback-rate-select', { bubbles: true, cancelable: true });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-rate-stepper': RhAudioPlayerRateStepper;
  }
  interface HTMLElementEventMap {
    'playback-rate-select': RhAudioPlayerRateSelectEvent;
    'rh-audio-player-rate-stepper': RhAudioPlayerRateStepper;
  }
}
