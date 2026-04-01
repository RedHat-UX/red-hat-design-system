var _RhAudioPlayerAbout_headings, _RhAudioPlayerAbout_label;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
import { css } from "lit";
const panelStyles = css `:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`;
const styles = css `:host{--rh-avatar-size:var(--rh-size-icon-05,48px)}.media-info{display:var(--_about-mediatitle-display,none)}#title{display:var(--_about-heading-display,flex)}#mediaseries{letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);line-height:var(--rh-line-height-body-text,1.5);height:18px;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-medium,500);margin:0 0 var(--rh-space-md,8px)}#mediatitle{min-height:26px}#mediatitle>*{font-size:var(--rh-font-size-heading-xs,1.25rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3);margin:0 0 var(--rh-space-lg,16px);height:26px;padding:0}[part=heading]{height:unset;min-height:26px}[part=body]{max-height:114px;overflow-y:auto;border:1px solid var(--_border-color);color:var(--_static-text-color);background-color:var(--_static-surface-color);padding:var(--_player-padding,var(--rh-space-md,8px))}div[part=body] ::slotted(:first-of-type){margin-block-start:0}::slotted([slot=profile]:nth-of-type(2)),div[part=body] ::slotted(:last-of-type){margin-block-end:0}::slotted([slot=profile]:nth-of-type(n+3)){display:none!important}[part=profile]{display:grid;gap:var(--rh-space-lg,16px);margin-block-start:var(--rh-space-lg,16px)}`;
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
/**
 * Provides episode details and speaker attribution for `rh-audio-player`.
 * Use when you need show notes or speaker profiles. Must be placed in
 * the `about` slot. Authors should provide a heading and may include up
 * to two `rh-avatar` elements for attribution. Rendered inside an
 * ARIA dialog panel so screen readers can navigate its content.
 *
 * @summary Displays episode description and speaker attribution
 *
 * @csspart heading - The panel heading container with scrolling overflow.
 * @csspart body - The scrollable description content area.
 * @csspart profile - The speaker profile / avatar area.
 */
let RhAudioPlayerAbout = class RhAudioPlayerAbout extends LitElement {
    constructor() {
        super(...arguments);
        _RhAudioPlayerAbout_headings.set(this, new HeadingLevelContextConsumer(this));
        _RhAudioPlayerAbout_label.set(this, void 0);
    }
    render() {
        const { label, mediaseries, mediatitle } = this;
        const hasContent = isServer || ((this.content?.length ?? 0) >= 1);
        const heading = __classPrivateFieldGet(this, _RhAudioPlayerAbout_headings, "f").wrap(mediatitle ?? '');
        return html `
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        <!-- summary: Panel heading
             description: |
               Accepts a heading block element like \`<h3>\` for the panel
               title. Should use an appropriate heading level for the page
               so screen readers can navigate the panel hierarchy. -->
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
      <div part="body" ?hidden="${!hasContent}" tabindex=0>
        <!-- summary: Episode description
             description: |
               Accepts block elements like \`<p>\` for episode show notes
               or description text. Content is focusable and scrollable
               so keyboard and screen reader users can read it. -->
        <slot></slot>
      </div>
      <!--
        slot:
          summary: Speaker attribution
          description: |
            Accepts up to two \`<rh-avatar>\` block elements for speaker
            attribution. Additional elements beyond two are hidden.
        part:
          description: |
            panel profile / avatar
      -->
      <slot part="profile" name="profile"></slot>`;
    }
    set menuLabel(label) {
        __classPrivateFieldSet(this, _RhAudioPlayerAbout_label, label, "f");
        this.requestUpdate();
    }
    get menuLabel() {
        return this.label || __classPrivateFieldGet(this, _RhAudioPlayerAbout_label, "f") || 'About the episode';
    }
    /** Triggers the scrolling text animation on all panel headings that overflow their container. */
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