import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n}\n\n[hidden] {\n  display: none !important;\n}\n\np {\n  margin: 0;\n  font-size: 14px;\n  font-weight: normal;\n  color: #777;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: #6a6e73;\n}\n\n::slotted(hr) {\n  margin: 0;\n  border-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  border-style: solid;\n}\n\n::slotted([role="separator"]:not(hr)) {\n  width: 100%;\n  height: 1px;\n  background-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  display: block;\n  pointer-events: none;\n}\n`;
let PfDropdownGroup = class PfDropdownGroup extends LitElement {
    render() {
        return html `
      <p ?hidden="${!this.label}" role="presentation">${this.label}</p>
      <slot></slot>
    `;
    }
};
PfDropdownGroup.styles = [styles];
PfDropdownGroup.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfDropdownGroup.version = "4.0.2";
__decorate([
    property({ reflect: true })
], PfDropdownGroup.prototype, "label", void 0);
PfDropdownGroup = __decorate([
    customElement('pf-dropdown-group')
], PfDropdownGroup);
export { PfDropdownGroup };
//# sourceMappingURL=pf-dropdown-group.js.map