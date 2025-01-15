var _RhTranscript_instances, _RhTranscript_autoscroll, _RhTranscript_duration, _RhTranscript_headings, _RhTranscript_updateCues, _RhTranscript_onScrollClick, _RhTranscript_onDownloadClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { RhCue, getFormattedTime } from './rh-cue.js';
import { HeadingLevelContextConsumer } from '@rhds/elements/lib/context/headings/consumer.js';
import { HeadingLevelContextProvider } from '@rhds/elements/lib/context/headings/provider.js';
import { css } from "lit";
const buttonStyles = css `:host{--_button-size:40px;--rh-icon-size:var(--rh-size-icon-03,32px)}#container{--_outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}rh-tooltip{display:flex;height:var(--_button-size);width:var(--_button-size);margin-inline:var(--_icon-margin);--_icon-margin:calc(var(--_icon-gap)/2 - var(--_icon-padding));--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2)}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}rh-tooltip *{outline:none}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`;
const panelStyles = css `:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`;
const styles = css `.panel-toolbar{display:flex;align-items:center;justify-content:flex-end;border:1px solid var(--_static-border-color);color:var(--_static-text-color);background-color:var(--_static-surface-color)}#download-tooltip,label{flex:0 0 auto}#download-tooltip{margin-inline-start:var(--rh-space-md,8px);--rh-icon-size:18px}#cues{display:block;max-height:240px;overflow-y:auto;border:1px solid var(--_static-border-color);padding:var(--_player-padding,var(--rh-space-md,8px));color:var(--_static-text-color);background-color:var(--_static-surface-color)}button,rh-icon{color:inherit}`;
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-cue` elements
 * @csspart heading - scrolling text overflow
 * @csspart toolbar - toolbar area above cues list
 */
let RhTranscript = class RhTranscript extends LitElement {
    constructor() {
        super(...arguments);
        _RhTranscript_instances.add(this);
        _RhTranscript_autoscroll.set(this, true);
        _RhTranscript_duration.set(this, void 0);
        _RhTranscript_headings.set(this, new HeadingLevelContextProvider(this, {
            offset: 0,
            parent: new HeadingLevelContextConsumer(this),
        }));
    }
    set autoscrollLabel(label) {
        this._autoscroll = label;
    }
    get autoscrollLabel() {
        return this._autoscroll || 'Autoscroll';
    }
    set downloadLabel(label) {
        this._download = label;
    }
    get downloadLabel() {
        return this._download || 'Download';
    }
    get downloadText() {
        return this._cues.map(cue => cue.downloadText).join('\n\n');
    }
    set menuLabel(label) {
        this._label = label;
    }
    get menuLabel() {
        return this.label || this._label || 'About the episode';
    }
    render() {
        return html `
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${__classPrivateFieldGet(this, _RhTranscript_headings, "f").wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <div class="panel-toolbar" part="toolbar">${this._cues.length < 0 ? '' : html `
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${__classPrivateFieldGet(this, _RhTranscript_autoscroll, "f")}"
                 @click="${__classPrivateFieldGet(this, _RhTranscript_instances, "m", _RhTranscript_onScrollClick)}">
            ${this.autoscrollLabel}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${__classPrivateFieldGet(this, _RhTranscript_instances, "m", _RhTranscript_onDownloadClick)}" aria-label="${this.downloadLabel}">
            <rh-icon set="ui" icon="download"></rh-icon>
          </button>
          <span slot="content">${this.downloadLabel}</span>
        </rh-tooltip>`}
      </div>
      <slot id="cues"></slot>
    `;
    }
    setActiveCues(currentTime = 0) {
        __classPrivateFieldGet(this, _RhTranscript_instances, "m", _RhTranscript_updateCues).call(this, currentTime);
    }
    setDuration(mediaDuration) {
        if (!!mediaDuration && __classPrivateFieldGet(this, _RhTranscript_duration, "f") !== mediaDuration) {
            __classPrivateFieldSet(this, _RhTranscript_duration, mediaDuration, "f");
            this.requestUpdate();
            __classPrivateFieldGet(this, _RhTranscript_instances, "m", _RhTranscript_updateCues).call(this);
        }
    }
    scrollText() {
        this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
    }
};
_RhTranscript_autoscroll = new WeakMap();
_RhTranscript_duration = new WeakMap();
_RhTranscript_headings = new WeakMap();
_RhTranscript_instances = new WeakSet();
_RhTranscript_updateCues = function _RhTranscript_updateCues(currentTime) {
    let activeCue;
    this._cues.forEach((cue, index) => {
        if (!cue.start) {
            const prevCue = this._cues[index - 1];
            const prevEnd = prevCue?.end;
            if (prevEnd) {
                cue.start = prevEnd || '0:00';
            }
        }
        if (!cue.end) {
            const nextCue = this._cues[index + 1];
            const nextStart = nextCue?.start;
            const duration = getFormattedTime(__classPrivateFieldGet(this, _RhTranscript_duration, "f"));
            if (!!nextStart || !!duration) {
                cue.end = nextStart || duration;
            }
        }
        if (currentTime) {
            const started = !!cue.startTime
                && Math.round(cue.startTime) < Math.round(currentTime) ?
                true : false;
            const ended = !!cue.endTime
                && Math.round(cue.endTime) < Math.round(currentTime) ?
                true : false;
            const active = started && !ended;
            cue.active = active;
            if (active) {
                activeCue = cue;
            }
        }
        const cuesContainer = this.shadowRoot?.getElementById('cues');
        if (activeCue && __classPrivateFieldGet(this, _RhTranscript_autoscroll, "f") && !!cuesContainer) {
            const anchor = activeCue.offsetTop + (0.5 * activeCue.offsetHeight);
            const scroll = anchor - cuesContainer.offsetTop - (0.5 * cuesContainer?.offsetHeight);
            setTimeout(() => {
                if (cuesContainer) {
                    cuesContainer.scrollTop = scroll;
                }
            }, 250);
        }
    });
};
_RhTranscript_onScrollClick = function _RhTranscript_onScrollClick() {
    __classPrivateFieldSet(this, _RhTranscript_autoscroll, !__classPrivateFieldGet(this, _RhTranscript_autoscroll, "f"), "f");
    this.requestUpdate();
};
_RhTranscript_onDownloadClick = function _RhTranscript_onDownloadClick() {
    this.dispatchEvent(new Event('transcriptdownload', { bubbles: true }));
};
RhTranscript.styles = [buttonStyles, panelStyles, styles];
__decorate([
    property()
], RhTranscript.prototype, "heading", void 0);
__decorate([
    property()
], RhTranscript.prototype, "label", void 0);
__decorate([
    property({ reflect: true })
], RhTranscript.prototype, "lang", void 0);
__decorate([
    state()
], RhTranscript.prototype, "_label", void 0);
__decorate([
    state()
], RhTranscript.prototype, "_autoscroll", void 0);
__decorate([
    state()
], RhTranscript.prototype, "_download", void 0);
__decorate([
    queryAssignedElements({ selector: 'rh-cue' })
], RhTranscript.prototype, "_cues", void 0);
RhTranscript = __decorate([
    customElement('rh-transcript')
], RhTranscript);
export { RhTranscript };
//# sourceMappingURL=rh-transcript.js.map