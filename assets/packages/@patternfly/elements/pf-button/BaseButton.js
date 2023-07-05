import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;height:max-content}:host([hidden]){display:none!important}[hidden]{display:none!important}button{cursor:pointer;position:relative;font-family:inherit}button{border-width:0;border-style:solid}button::after{position:absolute;inset:0 0 0 0;content:"";border-style:solid}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) #container,:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{pointer-events:none;cursor:default}[part=icon]{display:none;pointer-events:none}.hasIcon{position:relative;display:flex;align-items:center}.hasIcon [part=icon]{display:inline-flex;align-items:center;position:absolute;width:16px}:host(:not([disabled])) .hasIcon [part=icon]{cursor:pointer}[part=icon] ::slotted(*){width:16px;max-width:16px;height:16px;max-height:16px}.hasIcon button{position:absolute;inset:0}`;
/**
 * Base button class
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon
 *       Contains the button's icon or state indicator, e.g. a spinner.
 * @slot
 *       Must contain exactly one `<button>` element as the only content not assigned to a named slot.
 */
class BaseButton extends LitElement {
    constructor() {
        super(...arguments);
        /** Disables the button */
        this.disabled = false;
        this.#internals = new InternalsController(this);
    }
    static { this.styles = [styles]; }
    static { this.formAssociated = true; }
    static { this.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true }; }
    #internals;
    get hasIcon() {
        return !!this.icon;
    }
    render() {
        const { hasIcon } = this;
        return html `
      <button aria-label="${ifDefined(this.label)}"
              class="${classMap({ hasIcon })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${this.#onClick}"
              ?disabled="${this.disabled || this.#internals.formDisabled}">
        <slot id="icon" part="icon" aria-hidden="true" name="icon">${this.renderDefaultIcon()}</slot>
        <slot id="text" aria-hidden=${String(!!this.label)}></slot>
      </button>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    #onClick() {
        switch (this.type) {
            case 'reset':
                return this.#internals.reset();
            default:
                return this.#internals.submit();
        }
    }
}
__decorate([
    property({ reflect: true, type: Boolean })
], BaseButton.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], BaseButton.prototype, "type", void 0);
__decorate([
    property()
], BaseButton.prototype, "label", void 0);
__decorate([
    property()
], BaseButton.prototype, "value", void 0);
__decorate([
    property()
], BaseButton.prototype, "name", void 0);
__decorate([
    property()
], BaseButton.prototype, "icon", void 0);
export { BaseButton };
//# sourceMappingURL=BaseButton.js.map