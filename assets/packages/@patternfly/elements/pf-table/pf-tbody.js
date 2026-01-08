import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host {
  --pf-c-table--cell--PaddingTop: var(--pf-c-table--tbody--cell--PaddingTop);
  --pf-c-table--cell--PaddingBottom: var(--pf-c-table--tbody--cell--PaddingBottom);
  display: grid;
}

@media (max-width: 768px) {
  :host {
    position: relative;
  }
  
  :host:first-of-type {
    border-bottom: var(--pf-c-table--border-width--base) solid var(--pf-c-table--BorderColor);
  }
}

`;
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
PfTbody.version = "4.3.0";
PfTbody = __decorate([
    customElement('pf-tbody')
], PfTbody);
export { PfTbody };
//# sourceMappingURL=pf-tbody.js.map