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
const styles = css `:host{display:flex}.empty{display:none!important}#row{grid-column:2}#header-actions{grid-column:3;justify-self:end}#close-button{inset-block-start:calc(var(--rh-space-md, 8px)*-1);inset-inline-end:calc(var(--rh-space-md, 8px)*-1);position:relative}#close-button::part(button){block-size:var(--rh-length-lg,16px);inline-size:var(--rh-length-lg,16px);padding:var(--rh-space-lg,16px)}#body{padding-inline-start:var(--rh-space-lg,16px)}#body ::slotted(p){margin-block:0!important}#image{align-items:center;display:flex;justify-content:center}#container{background:var(--rh-color-surface);color:var(--rh-color-text-primary);container:announcement/inline-size;display:grid;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);grid-template-columns:1fr auto 1fr;inline-size:100%;line-height:var(--rh-line-height-body-text,1.5);padding:var(--rh-space-lg,16px);text-align:center}#container.block-start #content,#container.inline-start #content{text-align:start}#container.inline-start #row{display:flex}#container.inline-start #image{align-items:flex-start;flex:1}#container.inline-start #cta{padding-inline-start:var(--rh-space-lg,16px)}@container announcement (min-width: 768px){#row{display:flex;justify-content:center;margin-inline:auto;max-inline-size:1170px}#content{align-items:center;display:flex}#body{padding-inline:var(--rh-space-lg,16px);text-align:start}#body ::slotted(p){font-size:var(--rh-font-size-body-text-lg,1.125rem)!important}#container.inline-start #image{align-items:center}#container.inline-start #cta{padding-inline-start:0}#cta,#image{flex-shrink:0;min-inline-size:max-content}}@container announcement (min-width: 992px){#body{padding-inline:var(--rh-space-2xl,32px)}}@container announcement (max-width: 767px){#content{font-size:var(--rh-font-size-body-text-md,1rem)}#container:not(.inline-start) #body{padding-block:var(--rh-space-lg,16px) var(--rh-space-md,8px);padding-inline-end:var(--rh-space-lg,16px)}#container.block-start #row{display:block}#container.block-start #image{justify-content:flex-start}#container.block-start #body{padding-inline-start:0}}`;
export class AnnouncementCloseEvent extends Event {
    constructor() {
        super('close', { bubbles: true, cancelable: true });
    }
}
/**
 * Announcements are flexible surfaces used to group information in a full width banner layout, traditionally across the top of a page.
 * They are used to announce new features, promos, or news.
 * @summary Arranges content and interactive elements in a layout
 *
 * @alias announcement
 *
 * @slot    image
 *          If this slot is used, we expect an image tag with a width and height set.
 *          An icon, svg, or use of the icon component are also valid in this region.
 * @slot    Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot    cta
 *          If this slot is used, we expect a rh-cta component.
 * @fires   {AnnouncementCloseEvent} close
 *          When a user clicks the close/dismiss button on an announcement.
 * @csspart row
 *          The row for the banner. Contains the image and content divs.
 * @csspart image
 *          The image for the banner. Contains the image slot.
 */
let RhAnnouncement = class RhAnnouncement extends LitElement {
    constructor() {
        super(...arguments);
        _RhAnnouncement_instances.add(this);
        /**
         * Make an announcement dismissable
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
        <div id="row" part="row">
          <div id="image"
               part="image"
               class="${classMap({ empty: !__classPrivateFieldGet(this, _RhAnnouncement_slots, "f").hasSlotted('image') })}">
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: __classPrivateFieldGet(this, _RhAnnouncement_slots, "f").isEmpty(null) })}">
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !__classPrivateFieldGet(this, _RhAnnouncement_slots, "f").hasSlotted('cta') })}">
              <slot name="cta"></slot>
            </div>
          </div>
        </div>
        <div id="header-actions"
             ?hidden="${!this.dismissable}"
             ?inert="${!this.dismissable}">
          <rh-button id="close-button"
                  label="Close"
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