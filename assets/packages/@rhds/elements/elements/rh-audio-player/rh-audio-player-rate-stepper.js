var _RhAudioPlayerRateStepper_instances, _a, _RhAudioPlayerRateStepper_dir, _RhAudioPlayerRateStepper_playbackRates_get, _RhAudioPlayerRateStepper_onPlaybackRateSelect, _RhAudioPlayerRateStepper_validPlaybackRate, _RhAudioPlayerRateStepper_inc, _RhAudioPlayerRateStepper_dec, _RhAudioPlayerRateStepper_fire;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { DirController } from '@rhds/elements/lib/DirController.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host,button,rh-icon,rh-tooltip,select{color:inherit}:host,div{display:flex;align-items:center}select{font-size:var(--rh-font-size-code-md,1rem);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);appearance:none;line-height:36px;padding:2px 0;border:none;background:#0000}.rtl{text-align:right}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`;
/**
 */
export class RhAudioPlayerRateStepper extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayerRateStepper_instances.add(this);
        _RhAudioPlayerRateStepper_dir.set(this, new DirController(this));
        /** Playback rate */
        this.playbackRate = 1;
        /** Playback rate */
        this.disabled = false;
    }
    /** template for playback rate controls */
    render() {
        const { pbrFixed } = _a;
        const rtl = __classPrivateFieldGet(this, _RhAudioPlayerRateStepper_dir, "f").dir === 'rtl';
        return html `
      <rh-tooltip class="${classMap({ rtl })}">
        <div>
          <button id="stepdown"
                  class="tabbable playback-rate-step"
                  tabindex="-1"
                  aria-label="<"
                  ?disabled="${this.disabled || this.playbackRate < 0.5}"
                  @click="${__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_dec)}">
            <rh-icon icon="caret-left" set="microns"></rh-icon>
          </button>
          <select id="playback-rate"
                  class="tabbable"
                  aria-label="${ifDefined(this.label)}"
                  ?disabled="${this.disabled}"
                  @click="${__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_onPlaybackRateSelect)}"
                  @change="${__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_onPlaybackRateSelect)}"
                  .value="${this.playbackRate?.toFixed(pbrFixed)}">${__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "a", _RhAudioPlayerRateStepper_playbackRates_get).map(step => html `
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
                  @click="${__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_inc)}">
            <rh-icon icon="caret-right" set="microns"></rh-icon>
          </button>
        </div>
        <span slot="content">${this.label}</span>
      </rh-tooltip>
    `;
    }
}
_a = RhAudioPlayerRateStepper, _RhAudioPlayerRateStepper_dir = new WeakMap(), _RhAudioPlayerRateStepper_instances = new WeakSet(), _RhAudioPlayerRateStepper_playbackRates_get = function _RhAudioPlayerRateStepper_playbackRates_get() {
    const { pbrMax, pbrStep, pbrMin } = _a;
    return [
        ...Array(Math.round(pbrMax / pbrStep)).keys()
    ].map(k => k * pbrStep + pbrMin);
}, _RhAudioPlayerRateStepper_onPlaybackRateSelect = function _RhAudioPlayerRateStepper_onPlaybackRateSelect(event) {
    if (!this.disabled && event.target instanceof HTMLSelectElement) {
        const val = !event.target.value ? 1.00 : parseFloat(event.target.value);
        this.dispatchEvent(new RhAudioPlayerRateSelectEvent(val));
    }
}, _RhAudioPlayerRateStepper_validPlaybackRate = function _RhAudioPlayerRateStepper_validPlaybackRate(number) {
    const { pbrMax, pbrStep, pbrMin } = _a;
    // ensures number between min and maxk
    const inRange = Math.max(pbrMin, Math.min(pbrMax, number));
    // used to round number to nearest step
    const multiplier = 1 / pbrStep;
    return Math.round(inRange * multiplier) / multiplier;
}, _RhAudioPlayerRateStepper_inc = function _RhAudioPlayerRateStepper_inc() {
    __classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_fire).call(this, this.playbackRate + _a.pbrStep);
}, _RhAudioPlayerRateStepper_dec = function _RhAudioPlayerRateStepper_dec() {
    __classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_fire).call(this, this.playbackRate - _a.pbrStep);
}, _RhAudioPlayerRateStepper_fire = function _RhAudioPlayerRateStepper_fire(rate) {
    if (__classPrivateFieldGet(this, _RhAudioPlayerRateStepper_instances, "m", _RhAudioPlayerRateStepper_validPlaybackRate).call(this, rate)) {
        const event = new RhAudioPlayerRateSelectEvent(rate);
        this.dispatchEvent(event);
    }
};
RhAudioPlayerRateStepper.properties = {
    playbackRate: { reflect: true, type: Number, attribute: 'playback-rate' },
    disabled: { reflect: true, type: Boolean },
    label: {}
};
RhAudioPlayerRateStepper.styles = [styles];
RhAudioPlayerRateStepper.pbrMin = 0.25;
RhAudioPlayerRateStepper.pbrMax = 2;
RhAudioPlayerRateStepper.pbrStep = 0.25;
RhAudioPlayerRateStepper.pbrFixed = 2;
customElements.define("rh-audio-player-rate-stepper", RhAudioPlayerRateStepper);
export class RhAudioPlayerRateSelectEvent extends Event {
    constructor(playbackRate) {
        super('playback-rate-select', { bubbles: true, cancelable: true });
        this.playbackRate = playbackRate;
    }
}
//# sourceMappingURL=rh-audio-player-rate-stepper.js.map