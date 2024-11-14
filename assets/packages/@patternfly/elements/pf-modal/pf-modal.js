var _PfModal_headerId, _PfModal_triggerElement, _PfModal_header, _PfModal_body, _PfModal_headings, _PfModal_cancelling, _PfModal_slots;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const style = css `:host {\n\tdisplay: block;\n\tposition: relative;\n  --_spacer-align-top: var(--pf-c-modal-box--m-align-top--spacer,\n    var(--pf-global--spacer--sm, 0.5rem));\n  --_height-offset: min(var(--_spacer-align-top), var(--pf-global--spacer--2xl, 3rem));\n}\n\n[hidden] {\n  display: none !important;\n}\n\nsection {\n  display: flex;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  z-index: var(--pf-c-modal-box--ZIndex,\n    var(--pf-global--ZIndex--xl,\n      500));\n}\n\n#container {\n  position: relative;\n  max-height: inherit;\n}\n\n[part=overlay] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: var(--pf-c-backdrop--BackgroundColor,\n      var(--pf-global--BackgroundColor--dark-transparent-100,\n        rgba(3, 3, 3, 0.62)));\n}\n\n[part=dialog] {\n  position: relative;\n  margin: 0 auto;\n\n  width: var(--pf-c-modal-box--Width,\n    calc(100% - var(--pf-global--spacer--xl,2rem)));\n\n  max-width: var(--pf-c-modal-box--MaxWidth,\n    calc(100% - var(--pf-global--spacer--xl,2rem)));\n\n  max-height: var(--pf-c-modal-box--MaxHeight,\n    calc(100% - var(--pf-global--spacer--2xl,3rem)));\n\n  box-shadow: var(--pf-c-modal-box--BoxShadow,\n    var(--pf-global--BoxShadow--xl,\n      0 1rem 2rem 0 rgba(3, 3, 3, 0.16),\n      0 0 0.5rem 0 rgba(3, 3, 3, 0.1)));\n\n\tbackground-color: var(--pf-c-modal-box--BackgroundColor,\n    var(--pf-global--BackgroundColor--100,\n      var(--pf-global--BackgroundColor--100, #fff)));\n\n  padding: var(--pf-global--spacer--lg, 1.5rem);\n  margin-inline: var(--pf-global--spacer--md, 1rem);\n}\n\n:host([width]) [part=dialog],\n:host([variant]) [part=dialog] {\n  margin-inline: 0;\n}\n\n:host([width="small"]) [part=dialog],\n:host([variant="small"]) [part=dialog] {\n  --pf-c-modal-box--Width: var(--pf-c-modal-box--m-sm--sm--MaxWidth, 35rem);\n}\n\n:host([width="medium"]) [part=dialog],\n:host([variant="medium"]) [part=dialog] {\n  --pf-c-modal-box--Width: var(--pf-c-modal-box--m-md--Width, 52.5rem);\n}\n\n:host([width="large"]) [part=dialog],\n:host([variant="large"]) [part=dialog] {\n  --pf-c-modal-box--Width: var(--pf-c-modal-box--m-lg--lg--MaxWidth, 70rem);\n}\n\n[part=content] {\n  overflow-y: auto;\n  overscroll-behavior: contain;\n\n  max-height: var(--pf-c-modal-box--MaxHeight,\n    calc(100vh - var(--pf-global--spacer--2xl,\n      3rem)));\n\n  box-sizing: border-box;\n}\n\n[part=content] ::slotted([slot="header"]) {\n  margin-top: 0 !important;\n}\n\nheader {\n  position: sticky;\n  top: 0;\n\tbackground-color: var(--pf-c-modal-box--BackgroundColor,\n    var(--pf-global--BackgroundColor--100,\n      var(--pf-global--BackgroundColor--100,\n        #fff)));\n}\n\nheader ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot="header"]) {\n  font-size: var(--pf-c-modal-box__title--FontSize,\n    var(--pf-global--FontSize--2xl,\n      1.5rem));\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n  font-family: var(--pf-c-modal-box__title--FontFamily,\n    var(--pf-global--FontFamily--heading--sans-serif,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatDisplayUpdated", "Overpass", overpass, helvetica, arial, sans-serif)));\n}\n\n[part=close-button] {\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n\n  position: absolute;\n  cursor: pointer;\n  line-height: 24px;\n  padding-block:\n    var(--pf-c-button--PaddingTop,\n      var(--pf-global--spacer--form-element, 0.375rem));\n  padding-inline:\n    var(--pf-c-button--PaddingRight,\n      var(--pf-global--spacer--md, 1rem));\n  top: 0;\n  right: calc(var(--pf-global--spacer--lg, 1.5rem) / -3);\n  color: var(--pf-c-button--m-plain--Color,\n    var(--pf-global--Color--200,\n      #6a6e73));\n  font-size: var(--pf-c-button--FontSize,\n    var(--pf-global--FontSize--md,\n      1rem));\n}\n\n[part=close-button]:is(:focus-within, :focus-visible, :hover) {\n  color: var(--pf-c-button--m-plain--focus--Color, var(--pf-global--Color--100, #151515));\n}\n\n[part=close-button] > svg {\n  font-size: 16px;\n  width: var(--pf-global--spacer--md, 1rem);\n  aspect-ratio: 1/1;\n}\n\n:host([position="top"]) #dialog {\n  align-self: start;\n\n  margin-block: var(--pf-c-modal-box--m-align-top--MarginTop,\n    var(--pf-c-modal-box--m-align-top--spacer,\n      2rem));\n\n  margin-inline: var(--pf-global--spacer--md, 1rem);\n\n  width: 100%;\n\n  max-width: var(--pf-c-modal-box--m-align-top--MaxWidth,\n    calc(100% - min(\n      var(--pf-c-modal-box--m-align-top--spacer, 2rem) * 2,\n      var(--pf-global--spacer--xl, 2rem))));\n\n  max-height: var(--pf-c-modal-box--m-align-top--MaxHeight,\n    calc(100% - var(--_height-offset) - var(--_spacer-align-top)));\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  gap: var(--pf-global--spacer--xl, 0.5rem);\n}\n`;
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
let PfModal = class PfModal extends LitElement {
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
    async openChanged(oldValue, newValue) {
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
    triggerChanged() {
        if (this.trigger) {
            __classPrivateFieldSet(this, _PfModal_triggerElement, this.getRootNode()
                .getElementById(this.trigger), "f");
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
     * @param returnValue dialog return value
     */
    close(returnValue) {
        if (typeof returnValue === 'string') {
            this.returnValue = returnValue;
        }
        this.open = false;
    }
};
_PfModal_headerId = new WeakMap();
_PfModal_triggerElement = new WeakMap();
_PfModal_header = new WeakMap();
_PfModal_body = new WeakMap();
_PfModal_headings = new WeakMap();
_PfModal_cancelling = new WeakMap();
_PfModal_slots = new WeakMap();
PfModal.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfModal.styles = [style];
/** Should the dialog close when user clicks outside the dialog? */
PfModal.closeOnOutsideClick = false;
PfModal.version = "4.0.2";
__decorate([
    property({ reflect: true })
], PfModal.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], PfModal.prototype, "position", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfModal.prototype, "open", void 0);
__decorate([
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
    observes('open')
], PfModal.prototype, "openChanged", null);
__decorate([
    observes('trigger')
], PfModal.prototype, "triggerChanged", null);
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
PfModal = __decorate([
    customElement('pf-modal')
], PfModal);
export { PfModal };
//# sourceMappingURL=pf-modal.js.map