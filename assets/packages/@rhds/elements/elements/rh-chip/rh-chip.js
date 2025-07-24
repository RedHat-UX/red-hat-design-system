var _RhChip_instances, _RhChip_internals, _RhChip_formDisabled, _RhChip_onChecked;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators/property.js';
import { consume } from '@lit/context';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { rhChipGroupSizeCtx } from './context.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{--_spacer:var(--rh-space-lg,16px);display:inline-block;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-body-text,1.5)!important;margin-block:2px;margin-inline-end:var(--rh-space-md,8px)}label{border-radius:var(--rh-border-radius-pill,64px);display:flex;margin-block-end:var(--_spacer);outline:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);padding:var(--rh-space-xs,4px) var(--rh-space-md,8px);position:relative;text-wrap:balance;font-size:var(--rh-font-size-body-text-sm,.875rem)!important}label.size-sm{font-size:var(--rh-font-size-body-text-xs,.75rem)!important}label:focus-within,label:hover{cursor:pointer;outline-width:var(--rh-border-width-md,2px)}label:focus-within:after{content:"";border-radius:var(--rh-border-radius-default,3px);inset:var(--rh-length-3xs,2px) var(--rh-length-md,8px);outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive);position:absolute}label:has(input[aria-disabled=true]),label:has(input[aria-disabled=true]:checked){background-color:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-surface-dark,#383838));color:light-dark(var(--rh-color-text-secondary),var(--rh-color-gray-40,#a3a3a3));outline-color:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-surface-dark,#383838));pointer-events:none}label:has(input:checked){background-color:light-dark(var(--rh-color-blue-10,#e0f0ff),var(--rh-color-blue-70,#036));color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-blue-10,#e0f0ff));outline-color:light-dark(var(--rh-color-blue-30,#92c5f9),var(--rh-color-blue-50,#06c))}label:has(input:checked):hover{outline-color:light-dark(var(--rh-color-blue-30,#92c5f9),var(--rh-color-blue-50,#06c))}#close-icon{block-size:0;inline-size:0;opacity:0;transition-behavior:allow-discrete;transition-duration:.2s;transition-property:inline-size,block-size,opacity,margin-inline-start;transition-timing-function:ease-in-out}input{appearance:none;cursor:pointer;margin:0}input:focus{outline:0}input:checked+#close-icon{block-size:auto;inline-size:auto;margin-inline-start:var(--rh-space-md,8px);opacity:1}`;
import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
export class ChipChangeEvent extends Event {
    constructor(checked) {
        super('change', {
            bubbles: true,
            cancelable: true,
        });
        this.checked = checked;
    }
}
/**
 * A chip is used to filter information or indicate that a selection was made.
 * @summary Filter information or indicate that a selection was made
 *
 * @alias chip
 *
 * @fires {ChipCheckedEvent} chip-checked - when chip is checked/unchecked
 */
let RhChip = class RhChip extends LitElement {
    constructor() {
        super(...arguments);
        _RhChip_instances.add(this);
        /**
         * Whether the chip is checked.
         */
        this.checked = false;
        /**
         * Whether the chip is disabled.
         */
        this.disabled = false;
        _RhChip_internals.set(this, InternalsController.of(this));
        _RhChip_formDisabled.set(this, false);
    }
    formDisabledCallback(disabled) {
        __classPrivateFieldSet(this, _RhChip_formDisabled, disabled, "f");
        this.requestUpdate();
    }
    formStateRestoreCallback(state, mode) {
        this.checked = !!state;
    }
    render() {
        return html `
      <!-- The main chip container -->
      <label part="chip" class=${classMap({ [`size-${this.size}`]: !!this.size })}>
        <!-- The label of the checkbox -->
        <slot></slot>
        <input type="checkbox"
               value="${ifDefined(this.value)}"
               @change="${__classPrivateFieldGet(this, _RhChip_instances, "m", _RhChip_onChecked)}"
               .checked="${this.checked}"
               aria-disabled="${String(this.disabled || __classPrivateFieldGet(this, _RhChip_formDisabled, "f"))}">
        <rh-icon id="close-icon" set="ui" icon="close-circle"></rh-icon>
      </label>
    `;
    }
    checkedChanged() {
        if (this.checked) {
            __classPrivateFieldGet(this, _RhChip_internals, "f").setFormValue(this.value ?? this.textContent);
        }
        else {
            __classPrivateFieldGet(this, _RhChip_internals, "f").setFormValue(null);
        }
    }
};
_RhChip_internals = new WeakMap();
_RhChip_formDisabled = new WeakMap();
_RhChip_instances = new WeakSet();
_RhChip_onChecked = function _RhChip_onChecked(event) {
    event.stopPropagation();
    if (this.disabled) {
        event.preventDefault();
        event.target.checked = this.checked;
        return;
    }
    if (this.dispatchEvent(new ChipChangeEvent(this.checked))) {
        this.checked = event.target.checked;
    }
};
RhChip.styles = [styles];
RhChip.formAssociated = true;
__decorate([
    property({ type: Boolean, reflect: true })
], RhChip.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhChip.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], RhChip.prototype, "value", void 0);
__decorate([
    consume({ context: rhChipGroupSizeCtx, subscribe: true })
], RhChip.prototype, "size", void 0);
__decorate([
    observes('checked')
], RhChip.prototype, "checkedChanged", null);
RhChip = __decorate([
    customElement('rh-chip'),
    themable
], RhChip);
export { RhChip };
//# sourceMappingURL=rh-chip.js.map