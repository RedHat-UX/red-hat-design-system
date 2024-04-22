var _RhAudioPlayerSubscribe_headings, _RhAudioPlayerSubscribe_label;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import './rh-audio-player-scrolling-text-overflow.js';
import panelStyles from "./rh-audio-player-panel.css.js";
import { css } from "lit";
const styles = css `[part=body]{max-height:240px;overflow-y:auto}::slotted([slot=link]){display:block}@media (min-width:576px){slot[part=links]{display:flex;align-items:stretch;justify-content:space-between;flex-wrap:wrap}}`;
/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 * @csspart heading - scrolling text overflow
 * @csspart body - body content slot
 * @csspart links - subscribe links
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
_RhAudioPlayerSubscribe_headings = new WeakMap();
_RhAudioPlayerSubscribe_label = new WeakMap();
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