var _PfOptionGroup_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {
  display: block;
  border-bottom: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);
}

:host([disabled]) {
  pointer-events: none;
  cursor: not-allowed;
  color: var(--pf-global--Color--200, #6a6e73) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  --_active-descendant-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  --_svg-color: var(--pf-global--Color--200, #6a6e73) !important;
}

slot {
  display: block;
  padding: var(--pf-global--spacer--md, 1rem) 0;
}

slot[name="label"] {
  font-size: var(--pf-global--FontSize--xs, 0.75rem);
  color: var(--pf-global--Color--dark-200, #6a6e73);
  padding: var(--pf-global--spacer--md, 1rem) var(--pf-global--spacer--md, 1rem) 0;
}
`;
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
PfOptionGroup.version = "4.3.0";
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