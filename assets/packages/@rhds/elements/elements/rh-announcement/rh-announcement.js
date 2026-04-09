var _RhAnnouncement_instances, _RhAnnouncement_slots, _RhAnnouncement_closeHandler;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-button/rh-button.js';
import { css } from "lit";
const styles = css `:host{--_rh-cta-white-space:normal;display:flex}.empty{display:none!important}#row{grid-column:2}#header-actions{grid-column:3;justify-self:end}#close-button{inset-block-start:calc(var(--rh-space-md, 8px)*-1);inset-inline-end:calc(var(--rh-space-md, 8px)*-1);position:relative}#close-button::part(button){block-size:var(--rh-length-lg,16px);inline-size:var(--rh-length-lg,16px);padding:var(--rh-space-lg,16px)}#body{padding-inline-start:var(--rh-space-lg,16px)}#body ::slotted(p){margin-block:0!important}#image{align-items:center;display:flex;justify-content:center}#container{background:var(--rh-color-surface);color:var(--rh-color-text-primary);container:announcement/inline-size;display:grid;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);grid-template-columns:1fr auto 1fr;inline-size:100%;line-height:var(--rh-line-height-body-text,1.5);padding:var(--rh-space-lg,16px);text-align:center}:is(#container.inline-start,#container.block-start) #content{text-align:start}#container.inline-start #row{display:flex}#container.inline-start #image{align-items:flex-start;flex:1}#container.inline-start #cta{padding-inline-start:var(--rh-space-lg,16px)}@container announcement (min-width: 768px){:host{--_rh-cta-white-space:nowrap}#row{display:flex;justify-content:center;margin-inline:auto;max-inline-size:1170px}#content{align-items:center;display:flex}#body{padding-inline:var(--rh-space-lg,16px);text-align:start}#body ::slotted(p){font-size:var(--rh-font-size-body-text-lg,1.125rem)!important}#container.inline-start #image{align-items:center}#container.inline-start #cta{padding-inline-start:0}#cta,#image{flex-shrink:0;min-inline-size:max-content}}@container announcement (min-width: 992px){#body{padding-inline:var(--rh-space-2xl,32px)}}@container announcement (max-width: 767px){#content{font-size:var(--rh-font-size-body-text-md,1rem)}#container:not(.inline-start) #body{padding-block:var(--rh-space-lg,16px) var(--rh-space-md,8px);padding-inline-end:var(--rh-space-lg,16px)}#container.block-start #row{display:block}#container.block-start #image{justify-content:flex-start}#container.block-start #body{padding-inline-start:0}}`;
/**
 * Event fired when a user dismisses an announcement by clicking the close
 * button. The event is cancelable; calling `preventDefault()` on it will
 * prevent the announcement from being removed from the DOM: users must
 * ensure that an appropriate UI (e.g. a confirm dialog) appears.
 */
export class AnnouncementCloseEvent extends Event {
    constructor() {
        super('close', { bubbles: true, cancelable: true });
    }
}
/**
 * Announcements are flexible surfaces used to group information in a full width
 * banner layout, traditionally across the top of a page. They are used to
 * announce new features, promos, or news. Use `dismissable` to add a close
 * button. Supports `color-palette` for light/dark themes. Keyboard users
 * should be able to tab to and activate interactive elements. Slotted content
 * provides screen reader context and should include meaningful text.
 *
 * @summary Full-width promotional or informational banner
 *
 * @alias announcement
 *
 * @fires {AnnouncementCloseEvent} close - Fires when the user clicks the dismiss button.
 *        Cancelling this event prevents the element from being removed from the page.
 *        When cancelling the event, you must ensure that some UI appears - e.g. a confirm
 *        dialog - to avoid confusing the user with a close button that does nothing.
 */
let RhAnnouncement = class RhAnnouncement extends LitElement {
    constructor() {
        super(...arguments);
        _RhAnnouncement_instances.add(this);
        /**
         * When true, renders a close button that allows the user to dismiss the
         * announcement. Pressing Enter or Space on the close button fires a
         * cancelable `close` event. If the event is not canceled, the element is
         * removed from the DOM.
         */
        this.dismissable = false;
        _RhAnnouncement_slots.set(this, new SlotController(this, 'image', null, 'cta'));
    }
    render() {
        const { dismissable } = this;
        const imagePosInlineStart = this.imagePosition === 'inline-start';
        const imagePosBlockStart = this.imagePosition === 'block-start';
        return html `
      <div id="container"
           class="${classMap({
            dismissable,
            'inline-start': imagePosInlineStart,
            'block-start': imagePosBlockStart,
            'empty': __classPrivateFieldGet(this, _RhAnnouncement_slots, "f").isEmpty(null),
        })}">
        <!-- The row for the banner. Contains the image and content divs. -->
        <div id="row" part="row">
          <!-- The image for the banner. Contains the image slot. -->
          <div id="image"
               part="image"
               class="${classMap({ empty: !__classPrivateFieldGet(this, _RhAnnouncement_slots, "f").hasSlotted('image') })}">
            <!-- summary: optional visual such as an icon, logo, or image
                 description: |
                   Accepts an \`<img>\`, \`<svg>\`, or \`<rh-icon>\` element.
                   Should have explicit \`width\` and \`height\` attributes set.
                   Images using this slot must follow accessibility best practices.
                   Max recommended height is 48px for image logos/icons or 20-25px for text-based logos. -->
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: __classPrivateFieldGet(this, _RhAnnouncement_slots, "f").isEmpty(null) })}">
              <!-- summary: main body text content for the announcement
                   description: |
                     Use a \`<p>\` element for body text. Content should be
                     concise (65 characters max recommended). Screen readers
                     will read this content in DOM order. Avoid long or
                     multi-paragraph content. -->
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !__classPrivateFieldGet(this, _RhAnnouncement_slots, "f").hasSlotted('cta') })}">
              <!-- summary: call-to-action link for the announcement
                   description: |
                     Must contain an \`<rh-cta>\` element with an \`href\`
                     attribute. CTA text should follow established guidelines;
                     ideally keeping character counts to less than 25 characters. -->
              <slot name="cta"></slot>
            </div>
          </div>
        </div>
        <div id="header-actions"
             ?hidden="${!this.dismissable}"
             ?inert="${!this.dismissable}">
          <rh-button id="close-button"
                  accessible-label="Close"
                  confirm
                  variant="close"
                  @click=${__classPrivateFieldGet(this, _RhAnnouncement_instances, "m", _RhAnnouncement_closeHandler)}></rh-button>
        </div>
      </div>
    `;
    }
};
_RhAnnouncement_slots = new WeakMap();
_RhAnnouncement_instances = new WeakSet();
_RhAnnouncement_closeHandler = function _RhAnnouncement_closeHandler() {
    const event = new AnnouncementCloseEvent();
    if (this.dispatchEvent(event)) {
        this.remove();
    }
};
RhAnnouncement.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhAnnouncement.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAnnouncement.prototype, "dismissable", void 0);
__decorate([
    property({ reflect: true, attribute: 'image-position' })
], RhAnnouncement.prototype, "imagePosition", void 0);
RhAnnouncement = __decorate([
    customElement('rh-announcement'),
    colorPalettes,
    themable
], RhAnnouncement);
export { RhAnnouncement };
//# sourceMappingURL=rh-announcement.js.map