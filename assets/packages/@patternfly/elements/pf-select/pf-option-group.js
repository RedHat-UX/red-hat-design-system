var _PfOptionGroup_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n  border-bottom: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);\n}\n\n:host([disabled]) {\n  pointer-events: none;\n  cursor: not-allowed;\n  color: var(--pf-global--Color--200, #6a6e73) !important;\n  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  --_active-descendant-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  --_svg-color: var(--pf-global--Color--200, #6a6e73) !important;\n}\n\nslot {\n  display: block;\n  padding: var(--pf-global--spacer--md, 1rem) 0;\n}\n\nslot[name="label"] {\n  font-size: var(--pf-global--FontSize--xs, 0.75rem);\n  color: var(--pf-global--Color--dark-200, #6a6e73);\n  padding: var(--pf-global--spacer--md, 1rem) var(--pf-global--spacer--md, 1rem) 0;\n}\n`;
let PfOptionGroup = class PfOptionGroup extends LitElement {
    constructor() {
        super(...arguments);
        /** whether group is disabled */
        this.disabled = false;
        // for the role
        // eslint-disable-next-line no-unused-private-class-members
        _PfOptionGroup_internals.set(this, InternalsController.of(this, { role: 'group' }));
    }
    render() {
        const { disabled } = this;
        return html `
      <div id="label-container"
           role="presentation">
        <slot class="${classMap({ disabled })}"
              name="label">${this.label}</slot>
      </div>
      <slot class="${classMap({ disabled })}"></slot>
    `;
    }
};
_PfOptionGroup_internals = new WeakMap();
PfOptionGroup.styles = [styles];
PfOptionGroup.version = "4.1.0";
__decorate([
    property()
], PfOptionGroup.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfOptionGroup.prototype, "disabled", void 0);
PfOptionGroup = __decorate([
    customElement('pf-option-group')
], PfOptionGroup);
export { PfOptionGroup };
//# sourceMappingURL=pf-option-group.js.map