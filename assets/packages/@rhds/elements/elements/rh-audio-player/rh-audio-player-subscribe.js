var _RhAudioPlayerSubscribe_headings, _RhAudioPlayerSubscribe_label;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import './rh-audio-player-scrolling-text-overflow.js';
import { css } from "lit";
const panelStyles = css `:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-heading-xs, 1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading, 1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-font-letter-spacing-body-text, .0125rem);font-size:var(--rh-font-size-body-text-xs, .75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`;
const styles = css `[part=body]{max-height:240px;overflow-y:auto}::slotted([slot=link]){display:block}@media (min-width:576px){slot[part=links]{display:flex;align-items:stretch;justify-content:space-between;flex-wrap:wrap}}`;
/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 * @csspart heading - scrolling text overflow
 * @csspart body - body content slot
 */
let RhAudioPlayerSubscribe = class RhAudioPlayerSubscribe extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayerSubscribe_headings.set(this, new HeadingLevelContextConsumer(this));
        _RhAudioPlayerSubscribe_label.set(this, void 0);
    }
    render() {
        return html `
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${__classPrivateFieldGet(this, _RhAudioPlayerSubscribe_headings, "f").wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <slot part="body" ?hidden="${(this.body?.length ?? 0) < 1}"></slot>
      <slot name="link" part="links"></slot>`;
    }
    set menuLabel(label) {
        __classPrivateFieldSet(this, _RhAudioPlayerSubscribe_label, label, "f");
        this.requestUpdate();
    }
    get menuLabel() {
        return this.label || __classPrivateFieldGet(this, _RhAudioPlayerSubscribe_label, "f") || 'Subscribe';
    }
    scrollText() {
        this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
    }
};
_RhAudioPlayerSubscribe_headings = new WeakMap(), _RhAudioPlayerSubscribe_label = new WeakMap();
RhAudioPlayerSubscribe.styles = [panelStyles, styles];
__decorate([
    property()
], RhAudioPlayerSubscribe.prototype, "heading", void 0);
__decorate([
    property()
], RhAudioPlayerSubscribe.prototype, "label", void 0);
__decorate([
    queryAssignedElements({ slot: '' })
], RhAudioPlayerSubscribe.prototype, "body", void 0);
RhAudioPlayerSubscribe = __decorate([
    customElement('rh-audio-player-subscribe')
], RhAudioPlayerSubscribe);
export { RhAudioPlayerSubscribe };
//# sourceMappingURL=rh-audio-player-subscribe.js.map