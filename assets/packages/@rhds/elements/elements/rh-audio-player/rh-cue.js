var _RhCue_instances, _RhCue_headings, _RhCue_hasVoice_get, _RhCue_linkTemplate, _RhCue_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import { css } from "lit";
const styles = css `:host{display:inline;font-size:var(--rh-font-size-body-text-md,1rem)}:host([voice]){display:block}:host(:first-of-type),:host(:first-of-type)>:first-child{margin-block-start:0}:host(:last-of-type),:host(:last-of-type)>:last-child{margin-block-end:0}a{text-decoration:none;color:currentcolor}a[id$=text]{border-block-end:1px dotted #0000}a[id$=text]:hover{background-color:var(--_static-surface-color);border-block-end-color:var(--_static-underline-color)}a[active][id$=text]{color:var(--_static-text-color);background-color:var(--_static-highlight-color)}a:empty{display:none}h1,h2,h3,h4,h5,h6{font-size:var(--rh-font-size-body-text-md,1rem)!important;margin-block-end:0}#voice{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif)}#start{font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace)}a #start{text-decoration:underline}a:hover #start{text-decoration:none}`;
/**
 * formats time in seconds as `mm:ss.ms` string
 */
export const getFormattedTime = (seconds) => {
    const ss = seconds ?? 0;
    return (typeof seconds === 'undefined' ? ''
        : `${Math.floor(ss % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(ss % 60).toString().padStart(2, '0')}`);
};
/**
 * non-capturing group (_optional_):
 * > named capture group 1 `hh`:
 * > > **0-9** (_2x_)
 * > `:`
 * non-capturing group:
 * > named capture group 2 `mm`:
 * > > **0-9** (_2x_)
 * > `:`
 * named capture group 3 `ss`:
 * > **0-9** (_2x_)
 * non-capturing group (_optional_):
 * > `.`
 * > named capture group 4 `ms`:
 * > > **0-9** (_>= 1x_)
 */
const SECONDS_RE = /(?:(?<hh>\d{2}):)?(?:(?<mm>\d{2}):)(?<ss>\d{2})(?:\.(?<ms>\d+))?/;
/**
 * gets seconds from a string formatted as `mm:ss.mss` or `hh:mm:ss.mss`
 */
export const getSeconds = (str) => {
    if (!str) {
        return undefined;
    }
    const match = str.match(SECONDS_RE);
    if (!match) {
        return undefined;
    }
    else {
        const { hh = 0, mm = 0, ss = 0, ms = 0 } = match.groups ?? {};
        return (hh * 3600) + (mm * 60) + (ss * 1) + (ms / 1000);
    }
};
/**
 * Media Transcript Cue
 * @slot - text of cue
 * @fires cueseek - when user clicks a time cue
 */
let RhCue = class RhCue extends LitElement {
    constructor() {
        super(...arguments);
        _RhCue_instances.add(this);
        /** Whether this cue is active right now */
        this.active = false;
        _RhCue_headings.set(this, new HeadingLevelContextConsumer(this));
    }
    get startTime() {
        return this.start ? getSeconds(this.start) : undefined;
    }
    get endTime() {
        return this.end ? getSeconds(this.end) : undefined;
    }
    get downloadText() {
        const { textContent } = this;
        const voiceContent = this.voice || '';
        const text = (textContent || '').trim();
        const voice = (voiceContent || '').trim();
        const time = this.end ? [this.start, this.end].join(' - ') : this.start;
        const heading = voice.length > 0 ? [time, voice].join(': ') : time;
        return text.length > 0 ? [heading, text].join('\n') : heading;
    }
    render() {
        const { start, voice } = this;
        return html `${!__classPrivateFieldGet(this, _RhCue_instances, "a", _RhCue_hasVoice_get) ? nothing : __classPrivateFieldGet(this, _RhCue_headings, "f").wrap(__classPrivateFieldGet(this, _RhCue_instances, "m", _RhCue_linkTemplate).call(this, html `
      <span id="start">${start}</span> - <span id="voice">${voice}</span>`, true))}${__classPrivateFieldGet(this, _RhCue_instances, "m", _RhCue_linkTemplate).call(this, html `
      <slot></slot>
    `)}`;
    }
};
_RhCue_headings = new WeakMap();
_RhCue_instances = new WeakSet();
_RhCue_hasVoice_get = function _RhCue_hasVoice_get() {
    return !!this.voice && this.voice.trim()?.length > 0;
};
_RhCue_linkTemplate = function _RhCue_linkTemplate(content = nothing, heading = false) {
    const id = [
        this.id,
        this.startTime && `t${this.startTime}-`,
        this.endTime,
        heading ? 'heading' : 'text',
    ].filter(Boolean).join('');
    return html `
      <a id="${id}"
         href="#${id}"
         ?active="${this.active && !heading}"
         @click=${__classPrivateFieldGet(this, _RhCue_instances, "m", _RhCue_onClick)}>${content}</a>`;
};
_RhCue_onClick = function _RhCue_onClick() {
    this.dispatchEvent(new Event('cueseek', { bubbles: true }));
};
RhCue.styles = [styles];
__decorate([
    property()
], RhCue.prototype, "start", void 0);
__decorate([
    property()
], RhCue.prototype, "end", void 0);
__decorate([
    property()
], RhCue.prototype, "text", void 0);
__decorate([
    property({ reflect: true })
], RhCue.prototype, "voice", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCue.prototype, "active", void 0);
RhCue = __decorate([
    customElement('rh-cue')
], RhCue);
export { RhCue };
//# sourceMappingURL=rh-cue.js.map