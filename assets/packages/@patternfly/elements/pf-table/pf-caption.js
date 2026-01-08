import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host {
  display: table-caption;
  /* stylelint-disable-next-line max-line-length */
  padding: var(--pf-c-table-caption--PaddingTop, var(--pf-global--spacer--md, 1rem)) var(--pf-c-table-caption--PaddingRight, var(--pf-global--spacer--lg, 1.5rem)) var(--pf-c-table-caption--PaddingBottom, var(--pf-global--spacer--md, 1rem)) var(--pf-c-table-caption--PaddingLeft, var(--pf-global--spacer--lg, 1.5rem));
  font-size: var(--pf-c-table-caption--FontSize, var(--pf-global--FontSize--sm, 0.875rem));
  color: var(--pf-c-table-caption--Color, var(--pf-global--Color--200, #6a6e73));
  text-align: left;
  background-color: var(--pf-c-table--BackgroundColor);
}`;
let PfCaption = class PfCaption extends LitElement {
    render() {
        return html `
      <slot></slot>
    `;
    }
};
PfCaption.styles = [styles];
PfCaption.version = "4.3.0";
PfCaption = __decorate([
    customElement('pf-caption')
], PfCaption);
export { PfCaption };
//# sourceMappingURL=pf-caption.js.map