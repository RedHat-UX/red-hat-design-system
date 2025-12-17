import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-audio-player-rate-stepper.css' with { type: 'css' };

/**
 */
@customElement('rh-audio-player-rate-stepper')
export class RhAudioPlayerRateStepper extends LitElement {
  static readonly styles = [styles];

  private static pbrMin = 0.25;

  private static pbrMax = 2;

  private static pbrStep = 0.25;

  private static pbrFixed = 2;

  /** Playback rate */
  @property({ reflect: true, type: Number, attribute: 'playback-rate' }) playbackRate = 1;

  /** Playback rate */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /** Playback rate */
  @property() label?: string;

  /**
   * gets list of allowable playback rates
   */
  get #playbackRates() {
    const { pbrMax, pbrStep, pbrMin } = RhAudioPlayerRateStepper;
    return [
      ...Array(Math.round(pbrMax / pbrStep)).keys()].map(k =>
      k * pbrStep + pbrMin
    );
  }


  /** template for playback rate controls */
  render() {
    const { pbrFixed } = RhAudioPlayerRateStepper;

    return html`
      <rh-tooltip>
        <div>
          <button id="stepdown"
                  class="tabbable playback-rate-step"
                  tabindex="-1"
                  aria-label="<"
                  ?disabled="${this.disabled || this.playbackRate < 0.5}"
                  @click="${this.#dec}">
            <rh-icon icon="caret-left" set="microns"></rh-icon>
          </button>
          <select id="playback-rate"
                  class="tabbable"
                  aria-label="${ifDefined(this.label)}"
                  ?disabled="${this.disabled}"
                  @click="${this.#onPlaybackRateSelect}"
                  @change="${this.#onPlaybackRateSelect}"
                  .value="${this.playbackRate?.toFixed(pbrFixed)}">${this.#playbackRates.map(step => html`
            <option .value="${step.toFixed(pbrFixed)}"
                    ?selected=${this.playbackRate.toFixed(pbrFixed) === step.toFixed(pbrFixed)}>
              ${step.toFixed(pbrFixed)}x
            </option>`)}
          </select>
          <button id="stepup"
                  class="tabbable playback-rate-step"
                  tabindex="-1"
                  aria-label=">"
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
    const { pbrMax, pbrStep, pbrMin } = RhAudioPlayerRateStepper;
    // ensures number between min and maxk
    const inRange = Math.max(pbrMin, Math.min(pbrMax, number));
    // used to round number to nearest step
    const multiplier = 1 / pbrStep;
    return Math.round(inRange * multiplier) / multiplier;
  }

  /**
   * Increases media playback rate by playback rate step value
   */
  #inc() {
    this.#fire(this.playbackRate + RhAudioPlayerRateStepper.pbrStep);
  }

  /**
   * Decreases media playback rate by playback rate step value
   */
  #dec() {
    this.#fire(this.playbackRate - RhAudioPlayerRateStepper.pbrStep);
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
