var _PfOption_value, _PfOption_internals;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedNodes } from 'lit/decorators/query-assigned-nodes.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n}\n\n:host([hidden]),\n*[hidden] {\n  display: none !important;\n}\n\n:host([disabled]) {\n  pointer-events: none !important;\n  cursor: not-allowed !important;\n}\n\n:host(:focus) #outer,\n:host(:hover) #outer,\n#outer.selected {\n  background-color: #e0e0e0;\n}\n\n#outer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  padding: var(--pf-global--spacer--sm, 0.5rem) var(--pf-global--spacer--md, 1rem);\n  min-height: calc(44px - 2 * var(--pf-global--spacer--sm, 0.5rem));\n  min-width: calc(44px - 2 * var(--pf-global--spacer--md, 1rem));\n}\n\n#outer.active {\n  background-color: var(--_active-descendant-color, var(--pf-theme--color--surface--lighter, #f0f0f0));\n}\n\n:host([disabled]) #outer {\n  color: var(--pf-global--Color--dark-200, #6a6e73) !important;\n}\n\ninput[type="checkbox"] {\n  margin-inline-end: 1em;\n  display: var(--_pf-option-checkboxes-display, none);\n  pointer-events: none;\n  flex: 0 0 auto;\n}\n\nspan {\n  flex: 1 1 auto;\n}\n\nsvg {\n  font-size: var(--pf-c-select__menu-item-icon--FontSize, var(--pf-global--icon--FontSize--sm, 0.675rem));\n  color: var(--_svg-color, var(--pf-theme--color--accent, #0066cc));\n  width: 1em;\n  height: 1em;\n  margin-inline-start: 1em;\n  text-align: right;\n  flex: 0 0 auto;\n  display: var(--_pf-option-svg-display, block);\n}\n\n#description {\n  display: block;\n  flex: 1 0 100%;\n}\n\nslot[name="description"] {\n  font-size: var(--pf-global--FontSize--xs, 0.75rem);\n  color: var(--pf-global--Color--dark-200, #6a6e73);\n}\n\n::slotted([slot="icon"]) {\n  margin-inline-end: 0.5em;\n}\n\n`;
let PfOption = class PfOption extends LitElement {
    constructor() {
        super(...arguments);
        /** whether option is disabled */
        this.disabled = false;
        /** whether option is selected */
        this.selected = false;
        /** whether option is active descendant */
        this.active = false;
        /** Optional option description; overridden by description slot. */
        this.description = '';
        _PfOption_value.set(this, void 0);
        _PfOption_internals.set(this, InternalsController.of(this, { role: 'option' }));
    }
    /** form value for this option */
    get value() {
        return (__classPrivateFieldGet(this, _PfOption_value, "f") ?? this.textContent ?? '').trim();
    }
    set value(v) {
        __classPrivateFieldSet(this, _PfOption_value, v, "f");
    }
    /**
     * this option's position relative to the other options
     */
    set posInSet(posInSet) {
        __classPrivateFieldGet(this, _PfOption_internals, "f").ariaPosInSet = `${Math.max(0, posInSet ?? 0)}`;
    }
    get posInSet() {
        const parsed = parseInt(__classPrivateFieldGet(this, _PfOption_internals, "f").ariaPosInSet ?? '0');
        return Number.isNaN(parsed) ? null : parsed;
    }
    /**
     * total number of options
     */
    set setSize(setSize) {
        __classPrivateFieldGet(this, _PfOption_internals, "f").ariaSetSize = `${Math.max(0, setSize ?? 0)}`;
    }
    get setSize() {
        try {
            const int = parseInt(__classPrivateFieldGet(this, _PfOption_internals, "f").ariaSetSize ?? '0');
            if (Number.isNaN(int)) {
                return 0;
            }
            else {
                return int;
            }
        }
        catch {
            return 0;
        }
    }
    render() {
        const { disabled, active, selected } = this;
        return html `
      <div id="outer" class="${classMap({ active, disabled, selected })}">
        <input type="checkbox"
               inert
               role="presentation"
               tabindex="-1"
               ?checked="${this.selected}"
               ?disabled="${this.disabled}">
        <slot name="icon"></slot>
        <span>
          <slot name="create"></slot>
          <slot>${this.value}</slot>
        </span>
        <svg ?hidden="${!this.selected}"
             viewBox="0 0 512 512"
             fill="currentColor"
             aria-hidden="true">
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>
        <slot id="description" name="description">${this.description ?? ''}</slot>
      </div>
    `;
    }
    selectedChanged() {
        __classPrivateFieldGet(this, _PfOption_internals, "f").ariaSelected = String(!!this.selected);
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _PfOption_internals, "f").ariaDisabled = String(!!this.disabled);
    }
    /**
     * text content within option (used for filtering)
     */
    get optionText() {
        return this._slottedText.map(node => node.textContent).join('').trim();
    }
};
_PfOption_value = new WeakMap();
_PfOption_internals = new WeakMap();
PfOption.styles = [styles];
PfOption.version = "4.1.0";
__decorate([
    property({ type: Boolean, reflect: true })
], PfOption.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], PfOption.prototype, "value", null);
__decorate([
    property({ type: Boolean, reflect: true })
], PfOption.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfOption.prototype, "active", void 0);
__decorate([
    property()
], PfOption.prototype, "description", void 0);
__decorate([
    queryAssignedNodes({ slot: '', flatten: true })
], PfOption.prototype, "_slottedText", void 0);
__decorate([
    observes('selected')
], PfOption.prototype, "selectedChanged", null);
__decorate([
    observes('disabled')
], PfOption.prototype, "disabledChanged", null);
PfOption = __decorate([
    customElement('pf-option')
], PfOption);
export { PfOption };
//# sourceMappingURL=pf-option.js.map