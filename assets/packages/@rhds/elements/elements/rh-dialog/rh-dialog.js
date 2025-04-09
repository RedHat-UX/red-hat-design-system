var _RhDialog_instances, _RhDialog_screenSize, _RhDialog_headerId, _RhDialog_triggerElement, _RhDialog_header, _RhDialog_body, _RhDialog_headings, _RhDialog_cancelling, _RhDialog_slots, _RhDialog_onClick, _RhDialog_onKeyDown;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{--_dialog-backdrop-bg-color:oklch(from var(--rh-color-surface-darker) l c h/0.68);display:block;position:relative}[hidden]{display:none!important}.visually-hidden{block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}#rhds-wrapper{--_offset:var(--rh-space-xl,24px);--_offset-top:var(--_offset);--_offset-right:var(--_offset);display:contents;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}::backdrop{background-color:var(--_dialog-backdrop-bg-color)}#dialog{background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-dark,#383838));border-radius:var(--rh-border-radius-default,3px);border:0;box-shadow:var(--rh-box-shadow-xl,0 8px 24px 3px #15151559);box-sizing:border-box;color:var(--rh-color-text-primary);font-family:inherit;inline-size:100%;margin-inline:auto;max-block-size:var(--_box-max-block-size,calc(100vh - var(--rh-space-3xl, 48px)));max-inline-size:var(--_box-width,min(90%,1140px));overflow-y:auto;overscroll-behavior:contain;padding:var(--rh-space-xl,24px);position:relative}:host([variant=small]) #dialog,:host([width=small]) #dialog{--_box-width:35rem}:host([variant=medium]) #dialog,:host([width=medium]) #dialog{--_box-width:52.5rem}:host([variant=large]) #dialog,:host([width=large]) #dialog{--_box-width:70rem}#content{margin-block-start:calc(var(--_offset-top)*-1)}#header{background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-dark,#383838));inset-block-start:0;margin-block-end:var(--rh-space-lg,16px);position:relative}#header:before{block-size:100%;inset-block-start:calc(var(--_offset-top)*-1)}#header:after,#header:before{background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-dark,#383838));content:"";inline-size:100%;position:absolute;z-index:-1}#header:after{block-size:var(--rh-space-lg,16px)}@media (min-height:768px){#header{position:sticky}}@media (min-width:768px) and (min-height:576px){#header{position:sticky}}@media (min-width:1200px){#header{margin-block-end:var(--rh-space-xl,24px)}}#header[hidden]+#body{max-inline-size:calc(100% - var(--rh-space-xl, 24px))}#header,#header[hidden]+#body{padding-inline-end:var(--rh-space-3xl,48px)}@media (min-width:1200px){#rhds-wrapper{--_offset:var(--rh-space-2xl,32px)}#dialog{padding:var(--rh-space-2xl,32px)}#content:has(#header[hidden]){--_offset-top:var(--rh-space-xl,24px)}#header[hidden]+#body{max-inline-size:calc(100% - var(--rh-space-2xl, 32px))}}#content ::slotted([slot=header]){margin-block:0!important}#header ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot=header]){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-sm,1.5rem);font-weight:var(--rh-font-weight-body-text-regular,400)}#body ::slotted(p){margin-block:0 var(--rh-space-lg,16px)!important}#body ::slotted(p:last-of-type){margin-block-end:var(--rh-space-xl,24px)!important}#close-button{color:var(--rh-dialog-close-button-color,var(--rh-color-icon-secondary));cursor:pointer;display:block;inset-block-start:0;margin-inline-start:auto;max-inline-size:var(--rh-length-xl,24px);position:sticky;z-index:500}#close-button::part(button){background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-dark,#383838));block-size:var(--rh-length-xl,24px);border-radius:var(--rh-border-radius-default,3px);inline-size:var(--rh-length-xl,24px)}:host([position=top]) #dialog{inline-size:100%;margin-block-start:var(--rh-space-2xl,32px);max-inline-size:var(--_box-width,calc(100% - var(--rh-space-2xl, 32px)))}#footer{align-items:center;display:flex;gap:var(--rh-space-md,8px)}:host([type=video]){--_gray-90-rgb:var(--rh-color-gray-90-rgb,31 31 31);--_dialog-backdrop-bg-color:rgb(var(--_gray-90-rgb)/var(--rh-opacity-60,60%));background-color:var(--_dialog-backdrop-bg-color)}:host([type=video]) #rhds-wrapper{--_offset:var(--rh-space-md,8px)}:host([type=video][open]) #dialog{--_aspect-ratio:var(--rh-dialog-video-aspect-ratio,16/9);aspect-ratio:var(--_aspect-ratio);background-color:var(--_dialog-backdrop-bg-color);max-inline-size:var(--_box-width,min(90%,calc(90vh*var(--_aspect-ratio) + var(--_offset-top))));padding:0}:host([type=video]) #close-button{inset-inline-end:var(--_offset-right);inset-block-start:var(--_offset-top);margin-inline-end:0;position:absolute}:host([type=video]) #rhds-wrapper.mobile #close-button{--_offset-right:var(--rh-space-sm,6px)}:host([type=video]) #close-button::part(button){background-color:initial}:host([type=video]) #close-button::part(icon){color:var(--rh-dialog-close-button-color,var(--rh-color-surface-lightest,#fff));filter:drop-shadow(1px 0 1px var(--_dialog-backdrop-bg-color))}:host([type=video]) #content{margin-block-start:0;overflow:hidden;padding:0}:host([type=video]) #content,:host([type=video]) ::slotted(:not([slot])){aspect-ratio:var(--rh-dialog-video-aspect-ratio,16/9);max-inline-size:none;inline-size:100%}:host([type=video]) ::slotted(:not([slot])){inset:0;position:absolute}`;
import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
export class DialogCancelEvent extends Event {
    constructor() {
        super('cancel', { bubbles: true, cancelable: true });
    }
}
export class DialogCloseEvent extends Event {
    constructor() {
        super('close', { bubbles: true, cancelable: true });
    }
}
export class DialogOpenEvent extends Event {
    constructor(
    /** The trigger element which triggered the dialog to open */
    trigger) {
        super('open', { bubbles: true, cancelable: true });
        this.trigger = trigger;
    }
}
async function pauseYoutube(iframe) {
    const { pauseVideo } = await import('./yt-api.js');
    await pauseVideo(iframe);
}
/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 * @summary Communicates information requiring user input or action
 * @fires {DialogOpenEvent} open - Fires when a user clicks on the trigger or manually opens a dialog.
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel - Fires when a user clicks outside the dialog or hits ESC on their keyboard.
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} [--rh-dialog-video-aspect-ratio=16/9]
 *          Aspect ratio for the video inside the dialog
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *          Sets the dialog close button color.
 */
let RhDialog = class RhDialog extends LitElement {
    constructor() {
        super(...arguments);
        _RhDialog_instances.add(this);
        /**
         * `open` / `open="open"` declaratively opens the dialog
         */
        this.open = false;
        /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
        this.returnValue = '';
        _RhDialog_screenSize.set(this, new ScreenSizeController(this));
        _RhDialog_headerId.set(this, getRandomId());
        _RhDialog_triggerElement.set(this, null);
        _RhDialog_header.set(this, null);
        _RhDialog_body.set(this, []);
        _RhDialog_headings.set(this, []);
        _RhDialog_cancelling.set(this, false);
        _RhDialog_slots.set(this, new SlotController(this, null, 'header', 'description', 'footer'));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhDialog_instances, "m", _RhDialog_onKeyDown));
        this.addEventListener('click', __classPrivateFieldGet(this, _RhDialog_instances, "m", _RhDialog_onClick));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")?.removeEventListener('click', this.onTriggerClick);
    }
    render() {
        const headerId = (__classPrivateFieldGet(this, _RhDialog_header, "f") || __classPrivateFieldGet(this, _RhDialog_headings, "f").length) ? __classPrivateFieldGet(this, _RhDialog_headerId, "f") : undefined;
        const triggerLabel = __classPrivateFieldGet(this, _RhDialog_triggerElement, "f") ? __classPrivateFieldGet(this, _RhDialog_triggerElement, "f").innerText : undefined;
        const hasHeader = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('header');
        const hasDescription = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('description');
        const hasFooter = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('footer');
        const { mobile } = __classPrivateFieldGet(this, _RhDialog_screenSize, "f");
        return html `
      <div id="rhds-wrapper" class="${classMap({ mobile })}">
        <rh-surface class="${classMap({ hasHeader, hasDescription, hasFooter })}"
                    ?hidden="${!this.open}">
          <dialog id="dialog"
                  part="dialog"
                  aria-labelledby=${ifDefined(this.accessibleLabel ? undefined : headerId)}
                  aria-label=${ifDefined(this.accessibleLabel ? this.accessibleLabel : (!headerId ? triggerLabel : undefined))}>
            <rh-button variant="close"
                       id="close-button"
                       part="close-button"
                       type="button"
                       @click=${this.close}>
              <span class="visually-hidden">Close Dialog</span>
            </rh-button>
            <div id="content" part="content">
              <div id="header"
                   part="header"
                   ?hidden=${!hasHeader}>
                <slot name="header"></slot>
                <div part="description" ?hidden=${!hasDescription}>
                  <slot name="description"></slot>
                </div>
              </div>
              <div id="body" part="body">
                <slot></slot>
              </div>
              <div id="footer"
                   part="footer"
                   ?hidden=${!hasFooter}>
                <slot name="footer"></slot>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    `;
    }
    async _init() {
        await this.updateComplete;
        __classPrivateFieldSet(this, _RhDialog_header, this.querySelector(`[slot$="header"]`), "f");
        __classPrivateFieldSet(this, _RhDialog_body, [...this.querySelectorAll(`*:not([slot])`)], "f");
        __classPrivateFieldSet(this, _RhDialog_headings, __classPrivateFieldGet(this, _RhDialog_body, "f").filter(el => el.tagName.slice(0, 1) === 'H'), "f");
        if (__classPrivateFieldGet(this, _RhDialog_triggerElement, "f")) {
            __classPrivateFieldGet(this, _RhDialog_triggerElement, "f").addEventListener('click', this.onTriggerClick);
            this.removeAttribute('hidden');
        }
        if (__classPrivateFieldGet(this, _RhDialog_header, "f")) {
            __classPrivateFieldGet(this, _RhDialog_header, "f").id = __classPrivateFieldGet(this, _RhDialog_headerId, "f");
        }
        else if (__classPrivateFieldGet(this, _RhDialog_headings, "f").length > 0) {
            // Get the first heading in the dialog if it exists
            __classPrivateFieldGet(this, _RhDialog_headings, "f")[0].id = __classPrivateFieldGet(this, _RhDialog_headerId, "f");
        }
    }
    async _openChanged(oldValue, open) {
        if (this.type === 'video') {
            if (oldValue === true && this.open === false) {
                this.querySelector('video')?.pause?.();
                const iframe = this.querySelector('iframe');
                if (iframe?.src.match(/youtube/)) {
                    pauseYoutube(iframe);
                }
            }
        }
        else if (oldValue == null
            || open == null
            // loosening types to prevent running these effects in unexpected circumstances
            // eslint-disable-next-line eqeqeq
            || oldValue == open) {
            return;
        }
        else if (open) {
            // This prevents background scroll
            document.body.style.overflow = 'hidden';
            await this.updateComplete;
            this.dispatchEvent(new DialogOpenEvent(__classPrivateFieldGet(this, _RhDialog_triggerElement, "f")));
        }
        else {
            // Return scrollability
            document.body.style.overflow = 'auto';
            const event = __classPrivateFieldGet(this, _RhDialog_cancelling, "f") ? new DialogCancelEvent() : new DialogCloseEvent();
            await this.updateComplete;
            this.dispatchEvent(event);
        }
    }
    _triggerChanged() {
        if (this.trigger) {
            __classPrivateFieldSet(this, _RhDialog_triggerElement, this.getRootNode().getElementById(this.trigger), "f");
            __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")?.addEventListener('click', this.onTriggerClick);
        }
    }
    async onTriggerClick(event) {
        event.preventDefault();
        this.showModal();
        await this.updateComplete;
        this.closeButton?.focus();
    }
    async cancel() {
        __classPrivateFieldSet(this, _RhDialog_cancelling, true, "f");
        this.close();
        this.open = false;
        await this.updateComplete;
        __classPrivateFieldSet(this, _RhDialog_cancelling, false, "f");
    }
    setTrigger(element) {
        __classPrivateFieldSet(this, _RhDialog_triggerElement, element, "f");
        __classPrivateFieldGet(this, _RhDialog_triggerElement, "f").addEventListener('click', this.onTriggerClick);
    }
    /**
     * Manually toggles the dialog.
     * ```js
     * dialog.toggle();
     * ```
     */
    toggle() {
        if (!this.open) {
            this.showModal();
            this.open = true;
        }
        else {
            this.close();
        }
    }
    /**
     * Manually opens the dialog.
     * ```js
     * dialog.show();
     * ```
     */
    show() {
        this.dialog?.showModal();
        this.open = true;
    }
    showModal() {
        // TODO: non-modal mode
        this.show();
    }
    /**
     * Manually closes the dialog.
     * @param [returnValue] dialog return value.
     * @example ```js
     *          dialog.close();
     *          ```
     */
    close(returnValue) {
        if (typeof returnValue === 'string') {
            this.returnValue = returnValue;
        }
        this.dialog?.close();
        this.open = false;
    }
};
_RhDialog_screenSize = new WeakMap();
_RhDialog_headerId = new WeakMap();
_RhDialog_triggerElement = new WeakMap();
_RhDialog_header = new WeakMap();
_RhDialog_body = new WeakMap();
_RhDialog_headings = new WeakMap();
_RhDialog_cancelling = new WeakMap();
_RhDialog_slots = new WeakMap();
_RhDialog_instances = new WeakSet();
_RhDialog_onClick = function _RhDialog_onClick(event) {
    const { open, content } = this;
    if (open) {
        const path = event.composedPath();
        if (!path.includes(content)) {
            event.preventDefault();
            this.cancel();
        }
    }
};
_RhDialog_onKeyDown = function _RhDialog_onKeyDown(event) {
    switch (event.key) {
        case 'Escape':
        case 'Esc':
            this.cancel();
            return;
        case 'Enter':
            if (event.target === __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")) {
                event.preventDefault();
                this.showModal();
            }
            return;
    }
};
RhDialog.styles = [styles];
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "position", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhDialog.prototype, "accessibleLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhDialog.prototype, "open", void 0);
__decorate([
    property()
], RhDialog.prototype, "trigger", void 0);
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "type", void 0);
__decorate([
    query('#dialog')
], RhDialog.prototype, "dialog", void 0);
__decorate([
    query('#content')
], RhDialog.prototype, "content", void 0);
__decorate([
    query('#close-button')
], RhDialog.prototype, "closeButton", void 0);
__decorate([
    initializer()
], RhDialog.prototype, "_init", null);
__decorate([
    observes('open')
], RhDialog.prototype, "_openChanged", null);
__decorate([
    observes('trigger')
], RhDialog.prototype, "_triggerChanged", null);
__decorate([
    bound
], RhDialog.prototype, "onTriggerClick", null);
RhDialog = __decorate([
    customElement('rh-dialog'),
    themable
], RhDialog);
export { RhDialog };
//# sourceMappingURL=rh-dialog.js.map