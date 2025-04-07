var _RhAudioPlayerScrollingTextOverflow_instances, _RhAudioPlayerScrollingTextOverflow_scrolling, _RhAudioPlayerScrollingTextOverflow_style, _RhAudioPlayerScrollingTextOverflow_isScrollable_get;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:flex;overflow:hidden;flex-direction:column;align-items:stretch;width:100%;min-height:1em}:host([hidden]),[hidden]{display:none!important}#outer{position:relative;width:100%;min-width:6em;flex:1 0 auto;overflow-y:visible;--_fade-color:light-dark(var(--rh-audio-player-scrolling-text-overflow-background-color,var(--rh-color-surface-lightest,#fff)),var(--rh-audio-player-scrolling-text-overflow-background-color,var(--rh-color-surface-darkest,#151515)))}#outer:dir(rtl){text-align:right}#inner{margin:0 auto;white-space:nowrap;overflow:hidden;position:absolute;top:0;bottom:0;min-height:100%}slot{display:inline-block}::slotted(*){margin:0!important}#fade{position:absolute;height:150%;content:" ";top:-25%;right:0;width:3em;box-shadow:-1em 0 1.5em 0 var(--_fade-color) inset}#fade:dir(rtl){left:0;right:unset;box-shadow:1em 0 1.5em 0 var(--_fade-color) inset}slot.scrolling.scrollable{animation:ltr var(--_animation-ms,1s) ease-out}slot.scrolling.scrollable:dir(rtl){animation:rtl var(--_animation-ms,1s) ease-out}@keyframes ltr{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes rtl{0%{transform:translate(0)}to{transform:translate(100%)}}`;
/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 * @cssprop [--rh-audio-player-scrolling-text-overflow-background-color=var(--rh-color-surface-lightest, #ffffff)]
 *          color of fade effect (should match background)
 */
let RhAudioPlayerScrollingTextOverflow = class RhAudioPlayerScrollingTextOverflow extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayerScrollingTextOverflow_instances.add(this);
        _RhAudioPlayerScrollingTextOverflow_scrolling.set(this, false);
        _RhAudioPlayerScrollingTextOverflow_style.set(this, void 0);
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldSet(this, _RhAudioPlayerScrollingTextOverflow_style, getComputedStyle(this), "f");
    }
    firstUpdated() {
        const letters = this.textContent?.length || 0;
        const ms = Math.round(letters * 400);
        this.style.setProperty('--_animation-ms', `${ms / 1000}s`);
        this.requestUpdate();
    }
    render() {
        const { direction } = __classPrivateFieldGet(this, _RhAudioPlayerScrollingTextOverflow_style, "f") ?? {};
        return html `
      <div id="outer"
           class="${classMap({ [direction || 'auto']: true })}"
           @mouseover=${this.startScrolling}
           @mouseout=${this.stopScrolling}
           @focus=${this.startScrolling}
           @blur=${this.stopScrolling}>
        <div id="inner">
          <slot class="${__classPrivateFieldGet(this, _RhAudioPlayerScrollingTextOverflow_scrolling, "f") ? 'scrolling' : ''} ${__classPrivateFieldGet(this, _RhAudioPlayerScrollingTextOverflow_instances, "a", _RhAudioPlayerScrollingTextOverflow_isScrollable_get) ? 'scrollable' : ''}"></slot>
        </div>
        ${__classPrivateFieldGet(this, _RhAudioPlayerScrollingTextOverflow_instances, "a", _RhAudioPlayerScrollingTextOverflow_isScrollable_get) ? html `<span id="fade"></span>` : ''}
      </div>`;
    }
    stopScrolling() {
        __classPrivateFieldSet(this, _RhAudioPlayerScrollingTextOverflow_scrolling, false, "f");
        this.requestUpdate();
    }
    startScrolling() {
        if (__classPrivateFieldGet(this, _RhAudioPlayerScrollingTextOverflow_instances, "a", _RhAudioPlayerScrollingTextOverflow_isScrollable_get)) {
            __classPrivateFieldSet(this, _RhAudioPlayerScrollingTextOverflow_scrolling, true, "f");
            this.requestUpdate();
        }
    }
};
_RhAudioPlayerScrollingTextOverflow_scrolling = new WeakMap();
_RhAudioPlayerScrollingTextOverflow_style = new WeakMap();
_RhAudioPlayerScrollingTextOverflow_instances = new WeakSet();
_RhAudioPlayerScrollingTextOverflow_isScrollable_get = function _RhAudioPlayerScrollingTextOverflow_isScrollable_get() {
    const outer = this.shadowRoot?.getElementById('outer');
    return (outer?.scrollWidth ?? 0) > (outer?.clientWidth ?? 0);
};
RhAudioPlayerScrollingTextOverflow.styles = [styles];
RhAudioPlayerScrollingTextOverflow = __decorate([
    customElement('rh-audio-player-scrolling-text-overflow'),
    themable
], RhAudioPlayerScrollingTextOverflow);
export { RhAudioPlayerScrollingTextOverflow };
//# sourceMappingURL=rh-audio-player-scrolling-text-overflow.js.map