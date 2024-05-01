var _BaseButton_instances, _BaseButton_internals, _BaseButton_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host([hidden]) {\n  display: none !important;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.pf-button {\n  cursor: pointer;\n  position: relative;\n  font-family: inherit;\n}\n\n.pf-button {\n  border-width: 0;\n  border-style: solid;\n}\n\n.pf-button::after {\n  position: absolute;\n  inset: 0 0 0 0;\n  content: "";\n  border-style: solid;\n}\n\n:host(:is(:disabled, [aria-disabled=true])),\n:host(:is(:disabled, [aria-disabled=true])) #container,\n:host(:is(:disabled, [aria-disabled=true])) .pf-button,\n:host(:is(:disabled, [aria-disabled=true])[danger]) .pf-button,\n:host(:is(:disabled, [aria-disabled=true])[variant=link]) .pf-button {\n  pointer-events: none;\n  cursor: default;\n}\n\n[part=icon] {\n  display: none;\n  pointer-events: none;\n}\n\n.pf-button.hasIcon {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.pf-button.hasIcon [part=icon] {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  width: 16px;\n}\n\n:host(:not([disabled])) .hasIcon [part=icon] {\n  cursor: pointer;\n}\n\n[part=icon] ::slotted(*) {\n  width: 16px;\n  max-width: 16px;\n  height: 16px;\n  max-height: 16px;\n}\n\n.hasIcon button {\n  position: absolute;\n  inset: 0;\n}\n`;
/**
 * Base button class
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon
 *       Contains the button's icon or state indicator, e.g. a spinner.
 * @slot
 *       Must contain exactly one `<button>` element as the only content not assigned to a named slot.
 */
export class BaseButton extends LitElement {
    constructor() {
        super(...arguments);
        _BaseButton_instances.add(this);
        /** Disables the button */
        this.disabled = false;
        _BaseButton_internals.set(this, InternalsController.of(this));
    }
    get hasIcon() {
        return !!this.icon;
    }
    render() {
        const { disabled, hasIcon, 
        // @ts-expect-error: will no longer be a problem after closing issue #2616
        plain, } = this;
        return html `
      <button aria-label="${ifDefined(this.label)}"
              class="pf-button ${classMap({ disabled, hasIcon, plain })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${__classPrivateFieldGet(this, _BaseButton_instances, "m", _BaseButton_onClick)}"
              ?disabled="${this.disabled || __classPrivateFieldGet(this, _BaseButton_internals, "f").formDisabled}">
        <slot id="icon" part="icon" aria-hidden="true" name="icon">${this.renderDefaultIcon()}</slot>
        <slot id="text" aria-hidden=${String(!!this.label)}></slot>
      </button>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
}
_BaseButton_internals = new WeakMap(), _BaseButton_instances = new WeakSet(), _BaseButton_onClick = function _BaseButton_onClick() {
    switch (this.type) {
        case 'reset':
            return __classPrivateFieldGet(this, _BaseButton_internals, "f").reset();
        default:
            return __classPrivateFieldGet(this, _BaseButton_internals, "f").submit();
    }
};
BaseButton.styles = [styles];
BaseButton.formAssociated = true;
BaseButton.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
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
//# sourceMappingURL=BaseButton.js.map