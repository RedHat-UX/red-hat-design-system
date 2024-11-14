import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host {\n  --pf-c-table--cell--PaddingTop: var(--pf-c-table--tbody--cell--PaddingTop);\n  --pf-c-table--cell--PaddingBottom: var(--pf-c-table--tbody--cell--PaddingBottom);\n  display: grid;\n}\n\n@media (max-width: 768px) {\n  :host {\n    position: relative;\n  }\n  \n  :host:first-of-type {\n    border-bottom: var(--pf-c-table--border-width--base) solid var(--pf-c-table--BorderColor);\n  }\n}\n\n`;
let PfTbody = class PfTbody extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
};
PfTbody.styles = [styles];
PfTbody.version = "4.0.2";
PfTbody = __decorate([
    customElement('pf-tbody')
], PfTbody);
export { PfTbody };
//# sourceMappingURL=pf-tbody.js.map