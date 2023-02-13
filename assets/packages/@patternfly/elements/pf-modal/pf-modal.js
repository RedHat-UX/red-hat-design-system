var _PfModal_headerId, _PfModal_triggerElement, _PfModal_header, _PfModal_body, _PfModal_headings, _PfModal_cancelling, _PfModal_slots;
var PfModal_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { bound, deprecation, initializer, observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative;--_spacer-align-top:var(--pf-c-modal-box--m-align-top--spacer,\n    var(--pf-global--spacer--sm, 0.5rem));--_height-offset:min(var(--_spacer-align-top), var(--pf-global--spacer--2xl, 3rem))}[hidden]{display:none!important}section{display:flex;position:fixed;height:100%;width:100%;top:0;left:0;align-items:center;justify-content:center;z-index:var(--pf-c-modal-box--ZIndex,var(--pf-global--ZIndex--xl,500))}#container{position:relative;max-height:inherit}[part=overlay]{position:fixed;height:100%;width:100%;top:0;left:0;background-color:var(--pf-c-backdrop--BackgroundColor,var(--pf-global--BackgroundColor--dark-transparent-100,rgba(3,3,3,.62)))}[part=dialog]{position:relative;margin:0 auto;width:var(--pf-c-modal-box--Width,calc(100% - var(--pf-global--spacer--xl,2rem)));max-width:var(--pf-c-modal-box--MaxWidth,calc(100% - var(--pf-global--spacer--xl,2rem)));max-height:var(--pf-c-modal-box--MaxHeight,calc(100% - var(--pf-global--spacer--2xl,3rem)));box-shadow:var(--pf-c-modal-box--BoxShadow,var(--pf-global--BoxShadow--xl,0 1rem 2rem 0 rgba(3,3,3,.16),0 0 .5rem 0 rgba(3,3,3,.1)));background-color:var(--pf-c-modal-box--BackgroundColor,var(--pf-global--BackgroundColor--100,var(--pf-global--BackgroundColor--100,#fff)));padding:var(--pf-global--spacer--lg,1.5rem);margin-inline:var(--pf-global--spacer--md,1rem)}:host([variant]) [part=dialog],:host([width]) [part=dialog]{margin-inline:0}:host([variant=small]) [part=dialog],:host([width=small]) [part=dialog]{--pf-c-modal-box--Width:var(--pf-c-modal-box--m-sm--sm--MaxWidth, 35rem)}:host([variant=medium]) [part=dialog],:host([width=medium]) [part=dialog]{--pf-c-modal-box--Width:var(--pf-c-modal-box--m-md--Width, 52.5rem)}:host([variant=large]) [part=dialog],:host([width=large]) [part=dialog]{--pf-c-modal-box--Width:var(--pf-c-modal-box--m-lg--lg--MaxWidth, 70rem)}[part=content]{overflow-y:auto;overscroll-behavior:contain;max-height:var(--pf-c-modal-box--MaxHeight,calc(100vh - var(--pf-global--spacer--2xl,3rem)));box-sizing:border-box}[part=content] ::slotted([slot=header]){margin-top:0!important}header{position:sticky;top:0;background-color:var(--pf-c-modal-box--BackgroundColor,var(--pf-global--BackgroundColor--100,var(--pf-global--BackgroundColor--100,#fff)))}header ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot=header]){font-size:var(--pf-c-modal-box__title--FontSize,\n    var(--pf-global--FontSize--2xl,\n      1.5rem));font-weight:var(--pf-global--FontWeight--normal,400);font-family:var(--pf-c-modal-box__title--FontFamily,\n    var(--pf-global--FontFamily--heading--sans-serif,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatDisplayUpdated", "Overpass", overpass, helvetica, arial, sans-serif)))}[part=close-button]{background-color:transparent;border:none;margin:0;padding:0;text-align:left;position:absolute;cursor:pointer;line-height:24px;padding-block:var(--pf-c-button--PaddingTop,var(--pf-global--spacer--form-element,0.375rem));padding-inline:var(--pf-c-button--PaddingRight,var(--pf-global--spacer--md,1rem));top:0;right:calc(var(--pf-global--spacer--lg,1.5rem)/ -3);color:var(--pf-c-button--m-plain--Color,var(--pf-global--Color--200,#6a6e73));font-size:var(--pf-c-button--FontSize,\n    var(--pf-global--FontSize--md,\n      1rem))}[part=close-button]:is(:focus-within,:focus-visible,:hover){color:var(--pf-c-button--m-plain--focus--Color,var(--pf-global--Color--100,#151515))}[part=close-button]>svg{font-size:16px;width:var(--pf-global--spacer--md,1rem);aspect-ratio:1/1}:host([position=top]) #dialog{align-self:start;margin-block:var(--pf-c-modal-box--m-align-top--MarginTop,var(--pf-c-modal-box--m-align-top--spacer,2rem));margin-inline:var(--pf-global--spacer--md,1rem);width:100%;max-width:var(--pf-c-modal-box--m-align-top--MaxWidth,calc(100% - min(var(--pf-c-modal-box--m-align-top--spacer,2rem) * 2,var(--pf-global--spacer--xl,2rem))));max-height:var(--pf-c-modal-box--m-align-top--MaxHeight,calc(100% - var(--_height-offset) - var(--_spacer-align-top)))}footer{display:flex;align-items:center;gap:var(--pf-global--spacer--xl,.5rem)}`;
export class ModalCancelEvent extends ComposedEvent {
    constructor() {
        super('cancel');
    }
}
export class ModalCloseEvent extends ComposedEvent {
    constructor() {
        super('close');
    }
}
export class ModalOpenEvent extends ComposedEvent {
    constructor(
    /** The trigger element which triggered the modal to open */
    trigger) {
        super('open');
        this.trigger = trigger;
    }
}
/**
 * Modals display information in a window or help a user focus on a task without navigating them away from the page.
 * A user can’t perform other actions until the modal is dismissed.
 *
 * @summary Displays information or helps a user focus on a task
 *
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the modal window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the modal window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 *
 * @fires {ModalOpenEvent} open - Fires when a user clicks on the trigger or manually opens a modal.
 * @fires {ModalCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a modal.
 *
 * @csspart overlay - The modal overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The modal's close button
 * @csspart footer - Actions footer container
 *
 * @cssprop {<length>} --pf-c-modal-box--ZIndex {@default 500}
 * @cssprop {<length>} --pf-c-modal-box--Width - Width of the modal {@default calc(100% - 2rem)}
 * @cssprop {<length>} --pf-c-modal-box--MaxWidth - Max width of the modal {@default calc(100% - 2rem)}
 * @cssprop {<length>} --pf-c-modal-box--m-sm--sm--MaxWidth - Max width of the small variant modal {@default 35rem}
 * @cssprop {<length>} --pf-c-modal-box--m-md--MaxWidth - Max width of the small variant modal {@default 52.5rem}
 * @cssprop {<length>} --pf-c-modal-box--m-lg--lg--MaxWidth - Max width of the large variant modal {@default 70rem}
 * @cssprop {<length>} --pf-c-modal-box--MaxHeight - Max height of the modal {@default calc(100% - 3rem)}
 * @cssprop {<length>} --pf-c-modal-box--BoxShadow - {@default var(--pf-global--BoxShadow--xl)}
 * @cssprop {<length>} --pf-c-modal-box__title--FontSize - {@default 1.5rem}
 * @cssprop {<length>} --pf-c-modal-box--m-align-top--MarginTop - {@default 2rem}
 * @cssprop {<length>} --pf-c-modal-box--m-align-top--MaxWidth
 * @cssprop {<length>} --pf-c-modal-box--m-align-top--MaxHeight
 * @cssprop {<color>} --pf-c-modal-box--BackgroundColor - {@default #fff}
 * @cssprop --pf-c-modal-box__title--FontFamily - default font family for header-slotted headings
 */
let PfModal = PfModal_1 = class PfModal extends LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
        /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
        this.returnValue = '';
        _PfModal_headerId.set(this, getRandomId());
        _PfModal_triggerElement.set(this, null);
        _PfModal_header.set(this, null);
        _PfModal_body.set(this, []);
        _PfModal_headings.set(this, []);
        _PfModal_cancelling.set(this, false);
        _PfModal_slots.set(this, new SlotController(this, null, 'header', 'description', 'footer'));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.onKeydown);
        this.addEventListener('click', this.onClick);
    }
    render() {
        const headerId = (__classPrivateFieldGet(this, _PfModal_header, "f") || __classPrivateFieldGet(this, _PfModal_headings, "f").length) ? __classPrivateFieldGet(this, _PfModal_headerId, "f") : undefined;
        const headerLabel = __classPrivateFieldGet(this, _PfModal_triggerElement, "f") ? __classPrivateFieldGet(this, _PfModal_triggerElement, "f").innerText : undefined;
        const hasHeader = __classPrivateFieldGet(this, _PfModal_slots, "f").hasSlotted('header');
        const hasDescription = __classPrivateFieldGet(this, _PfModal_slots, "f").hasSlotted('description');
        const hasFooter = __classPrivateFieldGet(this, _PfModal_slots, "f").hasSlotted('footer');
        return html `
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
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.onKeydown);
        __classPrivateFieldGet(this, _PfModal_triggerElement, "f")?.removeEventListener('click', this.onTriggerClick);
    }
    async _init() {
        await this.updateComplete;
        __classPrivateFieldSet(this, _PfModal_header, this.querySelector(`[slot$="header"]`), "f");
        __classPrivateFieldSet(this, _PfModal_body, [...this.querySelectorAll(`*:not([slot])`)], "f");
        __classPrivateFieldSet(this, _PfModal_headings, __classPrivateFieldGet(this, _PfModal_body, "f").filter(el => el.tagName.slice(0, 1) === 'H'), "f");
        if (__classPrivateFieldGet(this, _PfModal_triggerElement, "f")) {
            __classPrivateFieldGet(this, _PfModal_triggerElement, "f").addEventListener('click', this.onTriggerClick);
            this.removeAttribute('hidden');
        }
        if (__classPrivateFieldGet(this, _PfModal_header, "f")) {
            __classPrivateFieldGet(this, _PfModal_header, "f").id = __classPrivateFieldGet(this, _PfModal_headerId, "f");
        }
        else if (__classPrivateFieldGet(this, _PfModal_headings, "f").length > 0) {
            // Get the first heading in the modal if it exists
            __classPrivateFieldGet(this, _PfModal_headings, "f")[0].id = __classPrivateFieldGet(this, _PfModal_headerId, "f");
        }
    }
    async _openChanged(oldValue, newValue) {
        // loosening types to prevent running these effects in unexpected circumstances
        // eslint-disable-next-line eqeqeq
        if (oldValue == null || newValue == null || oldValue == newValue) {
            return;
        }
        else if (this.open) {
            // This prevents background scroll
            document.body.style.overflow = 'hidden';
            await this.updateComplete;
            // Set the focus to the container
            this.dialog?.focus();
            this.dispatchEvent(new ModalOpenEvent(__classPrivateFieldGet(this, _PfModal_triggerElement, "f")));
        }
        else {
            // Return scrollability
            document.body.style.overflow = 'auto';
            await this.updateComplete;
            if (__classPrivateFieldGet(this, _PfModal_triggerElement, "f")) {
                __classPrivateFieldGet(this, _PfModal_triggerElement, "f").focus();
            }
            this.dispatchEvent(__classPrivateFieldGet(this, _PfModal_cancelling, "f") ? new ModalCancelEvent() : new ModalCloseEvent());
        }
    }
    _triggerChanged() {
        if (this.trigger) {
            __classPrivateFieldSet(this, _PfModal_triggerElement, this.getRootNode().getElementById(this.trigger), "f");
            __classPrivateFieldGet(this, _PfModal_triggerElement, "f")?.addEventListener('click', this.onTriggerClick);
        }
    }
    onTriggerClick(event) {
        event.preventDefault();
        // TODO: in non-modal case, toggle the dialog
        this.showModal();
    }
    onClick(event) {
        const { open, overlay, dialog } = this;
        if (open) {
            const path = event.composedPath();
            const { closeOnOutsideClick } = this.constructor;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
                if (event.target === __classPrivateFieldGet(this, _PfModal_triggerElement, "f")) {
                    event.preventDefault();
                    this.showModal();
                }
                return;
        }
    }
    async cancel() {
        __classPrivateFieldSet(this, _PfModal_cancelling, true, "f");
        this.open = false;
        await this.updateComplete;
        __classPrivateFieldSet(this, _PfModal_cancelling, false, "f");
    }
    setTrigger(element) {
        __classPrivateFieldSet(this, _PfModal_triggerElement, element, "f");
        __classPrivateFieldGet(this, _PfModal_triggerElement, "f").addEventListener('click', this.onTriggerClick);
    }
    /**
     * Manually toggles the modal.
     * ```js
     * modal.toggle();
     * ```
     */
    toggle() {
        this.open = !this.open;
    }
    /**
     * Manually opens the modal.
     * ```js
     * modal.open();
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
     * Manually closes the modal.
     * ```js
     * modal.close();
     * ```
     */
    close(returnValue) {
        if (typeof returnValue === 'string') {
            this.returnValue = returnValue;
        }
        this.open = false;
    }
};
_PfModal_headerId = new WeakMap(), _PfModal_triggerElement = new WeakMap(), _PfModal_header = new WeakMap(), _PfModal_body = new WeakMap(), _PfModal_headings = new WeakMap(), _PfModal_cancelling = new WeakMap(), _PfModal_slots = new WeakMap();
PfModal.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
PfModal.styles = [style];
/** Should the dialog close when user clicks outside the dialog? */
PfModal.closeOnOutsideClick = false;
__decorate([
    property({ reflect: true })
], PfModal.prototype, "variant", void 0);
__decorate([
    deprecation({ alias: 'variant', attribute: 'width' })
], PfModal.prototype, "width", void 0);
__decorate([
    property({ reflect: true })
], PfModal.prototype, "position", void 0);
__decorate([
    observed,
    property({ type: Boolean, reflect: true })
], PfModal.prototype, "open", void 0);
__decorate([
    observed,
    property()
], PfModal.prototype, "trigger", void 0);
__decorate([
    query('#overlay')
], PfModal.prototype, "overlay", void 0);
__decorate([
    query('#dialog')
], PfModal.prototype, "dialog", void 0);
__decorate([
    query('#close-button')
], PfModal.prototype, "closeButton", void 0);
__decorate([
    initializer()
], PfModal.prototype, "_init", null);
__decorate([
    bound
], PfModal.prototype, "onTriggerClick", null);
__decorate([
    bound
], PfModal.prototype, "onClick", null);
__decorate([
    bound
], PfModal.prototype, "onKeydown", null);
__decorate([
    bound
], PfModal.prototype, "toggle", null);
__decorate([
    bound
], PfModal.prototype, "show", null);
__decorate([
    bound
], PfModal.prototype, "showModal", null);
__decorate([
    bound
], PfModal.prototype, "close", null);
PfModal = PfModal_1 = __decorate([
    customElement('pf-modal')
], PfModal);
export { PfModal };
//# sourceMappingURL=pf-modal.js.map