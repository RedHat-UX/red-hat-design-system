var _RhDialog_screenSize, _RhDialog_headerId, _RhDialog_triggerElement, _RhDialog_header, _RhDialog_body, _RhDialog_headings, _RhDialog_cancelling, _RhDialog_slots;
var RhDialog_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `:host{display:block;position:relative;--_spacer-align-top:var(--rh-space-md,8px);--_height-offset:min(var(--_spacer-align-top),var(--rh-space-3xl,48px))}[hidden]{display:none!important}section{display:flex;position:fixed;height:100%;width:100%;top:0;left:0;align-items:center;justify-content:center;z-index:500}#container{position:relative;max-height:inherit}[part=overlay]{position:fixed;height:100%;width:100%;top:0;left:0;background-color:#0303039e}[part=dialog]{position:relative;margin:0 auto;width:var(--_box-width,calc(100% - var(--rh-space-2xl, 32px)));max-height:var(--_box-max-height,calc(100% - var(--rh-space-3xl, 48px)));box-shadow:0 1rem 2rem 0 #03030329,0 0 .5rem 0 #0303031a;padding:var(--rh-space-xl,24px);margin-inline:var(--rh-space-lg,16px);background-color:var(--rh-color-surface-lightest,#fff);max-width:min(90%,1140px);border-radius:var(--rh-border-radius-default,3px);color:var(--rh-color-text-primary-on-light,#151515);font-family:inherit}:host([variant]) [part=dialog],:host([width]) [part=dialog]{margin-inline:0}:host([variant=small]) [part=dialog],:host([width=small]) [part=dialog]{--_box-width:35rem}:host([variant=medium]) [part=dialog],:host([width=medium]) [part=dialog]{--_box-width:52.5rem}:host([variant=large]) [part=dialog],:host([width=large]) [part=dialog]{--_box-width:70rem}[part=content]{overflow-y:auto;overscroll-behavior:contain;max-height:var(--_box-max-height,calc(100vh - var(--rh-space-3xl, 48px)));box-sizing:border-box;border-radius:var(--rh-border-radius-default,3px)}[part=content] ::slotted([slot=header]){margin-top:0!important}header{position:sticky;top:0;background-color:var(--rh-color-surface-lightest,#fff)}header ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot=header]){font-size:var(--rh-font-size-heading-sm,1.5rem);font-weight:var(--rh-font-weight-body-text-regular,400);font-family:Red Hat Display,RedHatDisplay,Overpass,Helvetica,sans-serif}[part=close-button]{color:var(--rh-color-icon-subtle,#707070);background-color:initial;border:none;margin:0;padding:0;text-align:left;position:absolute;cursor:pointer;line-height:24px;padding-block:.375rem;padding-inline:var(--rh-space-lg,16px);top:0;right:calc(var(--rh-space-xl, 24px)/-3)}[part=close-button]>svg{font-size:16px;width:var(--rh-space-lg,16px);aspect-ratio:1/1}[part=close-button]:is(:hover,:focus-within,:focus-visible) svg:is(svg,:hover){fill:var(--rh-color-icon-secondary-on-light,#151515)}:host([position=top]) #dialog{align-self:start;margin-block:var(--rh-space-2xl,32px);margin-inline:var(--rh-space-lg,16px);width:100%;max-width:calc(100% - min(var(--rh-space-2xl, 32px) * 2, var(--rh-space-2xl, 32px)));max-height:calc(100% - var(--_height-offset) - var(--_spacer-align-top))}footer{display:flex;align-items:center;gap:var(--rh-space-md,8px)}#rhds-wrapper{display:contents;font-family:Red Hat Text,RedHatText,Overpass,Helvetica,sans-serif;--offset:var(--rh-space-md,8px);--offset-top:var(--offset);--offset-right:var(--offset)}:host([type=video]){--rh-dialog-close-button-color:var(--rh-color-icon-secondary-on-dark,#fff)}:host([type=video]) [part=close-button]{top:var(--offset-top);right:var(--offset-right);padding:var(--rh-space-sm,6px);color:var(--rh-color-icon-secondary-on-dark,#fff)}:host([type=video]) [part=content]{overflow:hidden}:host([type=video][open]) [part=overlay]{--_gray-90-rgb:var(--rh-color-gray-90-rgb,31 31 31);background-color:rgb(var(--_gray-90-rgb)/var(--rh-opacity-60,60%))}:host([type=video][open]) [part=dialog]{--_aspect-ratio:var(--rh-dialog-video-aspect-ratio,16/9);aspect-ratio:var(--_aspect-ratio);max-width:min(90%,calc(90vh*var(--_aspect-ratio) + var(--offset-top)));padding:0;margin:0}:host([type=video]) #rhds-wrapper.mobile [part=close-button]{--offset-right:var(--rh-space-sm,6px)}:host([type=video]) #container,:host([type=video]) ::slotted(:not([slot])),:host([type=video]) [part=content]{aspect-ratio:var(--rh-dialog-video-aspect-ratio,16/9);width:calc(100% + 1px);position:absolute;inset:0;max-height:none}`;
import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@rhds/elements/rh-surface/rh-surface.js';
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
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart overlay - The dialog overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} --rh-dialog-video-aspect-ratio
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *           Sets the dialog close button color.
 */
let RhDialog = RhDialog_1 = class RhDialog extends LitElement {
    constructor() {
        super(...arguments);
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
        this.addEventListener('keydown', this.onKeydown);
        this.addEventListener('click', this.onClick);
    }
    render() {
        const headerId = (__classPrivateFieldGet(this, _RhDialog_header, "f") || __classPrivateFieldGet(this, _RhDialog_headings, "f").length) ? __classPrivateFieldGet(this, _RhDialog_headerId, "f") : undefined;
        const headerLabel = __classPrivateFieldGet(this, _RhDialog_triggerElement, "f") ? __classPrivateFieldGet(this, _RhDialog_triggerElement, "f").innerText : undefined;
        const hasHeader = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('header');
        const hasDescription = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('description');
        const hasFooter = __classPrivateFieldGet(this, _RhDialog_slots, "f").hasSlotted('footer');
        const { mobile } = __classPrivateFieldGet(this, _RhDialog_screenSize, "f");
        return html `
      <rh-surface id="rhds-wrapper"
                           class="${classMap({ mobile })}"
                           color-palette="lightest">
        <section ?hidden=${!this.open}>
          <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
          <div id="dialog"
               part="dialog"
               tabindex="0"
               role="dialog"
               aria-labelledby=${ifDefined(headerId)}
               aria-label=${ifDefined(headerLabel)}
               ?hidden="${!this.open}">
            <div id="container">
              <div id="content" part="content" class=${classMap({ hasHeader, hasDescription, hasFooter })}>
                <header part="header">
                  <slot name="header"></slot>
                  <div part="description" ?hidden=${!hasDescription}>
                    <slot name="description"></slot>
                  </div>
                </header>
                <slot></slot>
                <footer ?hidden=${!hasFooter} part="footer">
                  <slot name="footer"></slot>
                </footer>
              </div>
              <button id="close-button"
                      part="close-button"
                      aria-label="Close dialog"
                      @keydown=${this.onKeydown}
                      @click=${this.close}>
                <svg fill="currentColor" viewBox="0 0 352 512">
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </rh-surface>
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.onKeydown);
        __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")?.removeEventListener('click', this.onTriggerClick);
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
            // Set the focus to the container
            this.dialog?.focus();
            this.dispatchEvent(new DialogOpenEvent(__classPrivateFieldGet(this, _RhDialog_triggerElement, "f")));
        }
        else {
            // Return scrollability
            document.body.style.overflow = 'auto';
            const event = __classPrivateFieldGet(this, _RhDialog_cancelling, "f") ? new DialogCancelEvent() : new DialogCloseEvent();
            await this.updateComplete;
            if (__classPrivateFieldGet(this, _RhDialog_triggerElement, "f")) {
                __classPrivateFieldGet(this, _RhDialog_triggerElement, "f").focus();
            }
            this.dispatchEvent(event);
        }
    }
    _triggerChanged() {
        if (this.trigger) {
            __classPrivateFieldSet(this, _RhDialog_triggerElement, this.getRootNode().getElementById(this.trigger), "f");
            __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")?.addEventListener('click', this.onTriggerClick);
        }
    }
    onTriggerClick(event) {
        event.preventDefault();
        this.showModal();
    }
    onClick(event) {
        const { open, overlay, dialog } = this;
        if (open) {
            const path = event.composedPath();
            const { closeOnOutsideClick } = this.constructor;
            if (closeOnOutsideClick && path.includes(overlay) && !path.includes(dialog)) {
                event.preventDefault();
                this.cancel();
            }
        }
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Tab':
                if (event.target === this.closeButton) {
                    event.preventDefault();
                    this.dialog?.focus();
                }
                return;
            case 'Escape':
            case 'Esc':
                event.preventDefault();
                this.cancel();
                return;
            case 'Enter':
                if (event.target === __classPrivateFieldGet(this, _RhDialog_triggerElement, "f")) {
                    event.preventDefault();
                    this.showModal();
                }
                return;
        }
    }
    async cancel() {
        __classPrivateFieldSet(this, _RhDialog_cancelling, true, "f");
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
        this.open = !this.open;
    }
    /**
     * Manually opens the dialog.
     * ```js
     * dialog.show();
     * ```
     */
    show() {
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
RhDialog.version = '{{version}}';
RhDialog.styles = [styles];
RhDialog.closeOnOutsideClick = true;
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "position", void 0);
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
    query('#overlay')
], RhDialog.prototype, "overlay", void 0);
__decorate([
    query('#dialog')
], RhDialog.prototype, "dialog", void 0);
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
__decorate([
    bound
], RhDialog.prototype, "onClick", null);
__decorate([
    bound
], RhDialog.prototype, "onKeydown", null);
__decorate([
    bound
], RhDialog.prototype, "toggle", null);
__decorate([
    bound
], RhDialog.prototype, "show", null);
__decorate([
    bound
], RhDialog.prototype, "showModal", null);
__decorate([
    bound
], RhDialog.prototype, "close", null);
RhDialog = RhDialog_1 = __decorate([
    customElement('rh-dialog')
], RhDialog);
export { RhDialog };
//# sourceMappingURL=rh-dialog.js.map