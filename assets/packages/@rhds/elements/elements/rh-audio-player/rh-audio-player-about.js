var _RhAudioPlayerAbout_headings, _RhAudioPlayerAbout_label;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
import { css } from "lit";
const panelStyles = css `:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`;
const styles = css `:host{--rh-avatar-size:var(--rh-size-icon-05,48px)}.media-info{display:var(--_about-mediatitle-display,none)}#title{display:var(--_about-heading-display,flex)}#mediaseries{letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);line-height:var(--rh-line-height-body-text,1.5);height:18px;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-medium,500);margin:0 0 var(--rh-space-md,8px)}#mediatitle{min-height:26px}#mediatitle>*{font-size:var(--rh-font-size-heading-xs,1.25rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display","Noto Sans Arabic","Noto Sans Hebrew","Noto Sans JP","Noto Sans KR","Noto Sans Malayalam","Noto Sans SC","Noto Sans TC","Noto Sans Thai",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3);margin:0 0 var(--rh-space-lg,16px);height:26px;padding:0}[part=heading]{height:unset;min-height:26px}[part=body]{max-height:114px;overflow-y:auto;border:1px solid var(--_border-color);color:var(--_static-text-color);background-color:var(--_static-surface-color);padding:var(--_player-padding,var(--rh-space-md,8px))}div[part=body] ::slotted(:first-of-type){margin-block-start:0}::slotted([slot=profile]:nth-of-type(2)),div[part=body] ::slotted(:last-of-type){margin-block-end:0}::slotted([slot=profile]:nth-of-type(n+3)){display:none!important}[part=profile]{display:grid;gap:var(--rh-space-lg,16px);margin-block-start:var(--rh-space-lg,16px)}`;
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
/**
 * Audio Player About Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot profile - `<rh-avatar>` for attribution
 * @csspart heading - panel heading
 * @csspart body - panel body
 * @csspart profile - panel profile / avatar
 */
let RhAudioPlayerAbout = class RhAudioPlayerAbout extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayerAbout_headings.set(this, new HeadingLevelContextConsumer(this));
        _RhAudioPlayerAbout_label.set(this, void 0);
    }
    render() {
        const { label, mediaseries, mediatitle } = this;
        const hasContent = (this.content?.length ?? 0) >= 1;
        const heading = __classPrivateFieldGet(this, _RhAudioPlayerAbout_headings, "f").wrap(mediatitle ?? '');
        return html `
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        <slot name="heading">${label}</slot>
      </rh-audio-player-scrolling-text-overflow>${!mediatitle ? `` : !mediaseries ? heading : html `
      <hgroup class="media-info" part="heading">${!mediaseries ? '' : html `
        <rh-audio-player-scrolling-text-overflow id="mediaseries">
          ${mediaseries}
        </rh-audio-player-scrolling-text-overflow>`}
        <rh-audio-player-scrolling-text-overflow id="mediatitle">
          ${heading}
        </rh-audio-player-scrolling-text-overflow>
      </hgroup>`}
      <div part="body" ?hidden="${!hasContent}" tabindex=0><slot></slot></div>
      <slot part="profile" name="profile"></slot>`;
    }
    set menuLabel(label) {
        __classPrivateFieldSet(this, _RhAudioPlayerAbout_label, label, "f");
        this.requestUpdate();
    }
    get menuLabel() {
        return this.label || __classPrivateFieldGet(this, _RhAudioPlayerAbout_label, "f") || 'About the episode';
    }
    scrollText() {
        const scrollers = this.shadowRoot?.querySelectorAll('rh-audio-player-scrolling-text-overflow');
        for (const scroller of scrollers ?? []) {
            scroller?.startScrolling();
        }
    }
};
_RhAudioPlayerAbout_headings = new WeakMap();
_RhAudioPlayerAbout_label = new WeakMap();
RhAudioPlayerAbout.styles = [panelStyles, styles];
__decorate([
    property()
], RhAudioPlayerAbout.prototype, "label", void 0);
__decorate([
    property({ attribute: 'series' })
], RhAudioPlayerAbout.prototype, "mediaseries", void 0);
__decorate([
    property({ attribute: 'mediatitle' })
], RhAudioPlayerAbout.prototype, "mediatitle", void 0);
__decorate([
    queryAssignedElements()
], RhAudioPlayerAbout.prototype, "content", void 0);
RhAudioPlayerAbout = __decorate([
    customElement('rh-audio-player-about')
], RhAudioPlayerAbout);
export { RhAudioPlayerAbout };
//# sourceMappingURL=rh-audio-player-about.js.map