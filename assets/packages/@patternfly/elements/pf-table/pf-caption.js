import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host {\n  display: table-caption;\n  /* stylelint-disable-next-line max-line-length */\n  padding: var(--pf-c-table-caption--PaddingTop, var(--pf-global--spacer--md, 1rem)) var(--pf-c-table-caption--PaddingRight, var(--pf-global--spacer--lg, 1.5rem)) var(--pf-c-table-caption--PaddingBottom, var(--pf-global--spacer--md, 1rem)) var(--pf-c-table-caption--PaddingLeft, var(--pf-global--spacer--lg, 1.5rem));\n  font-size: var(--pf-c-table-caption--FontSize, var(--pf-global--FontSize--sm, 0.875rem));\n  color: var(--pf-c-table-caption--Color, var(--pf-global--Color--200, #6a6e73));\n  text-align: left;\n  background-color: var(--pf-c-table--BackgroundColor);\n}`;
let PfCaption = class PfCaption extends LitElement {
    render() {
        return html `
      <slot></slot>
    `;
    }
};
PfCaption.styles = [styles];
PfCaption.version = "4.0.2";
PfCaption = __decorate([
    customElement('pf-caption')
], PfCaption);
export { PfCaption };
//# sourceMappingURL=pf-caption.js.map