import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{display:block;margin-block:var(--rh-space-2xl)}#container{display:flex;flex-direction:column;gap:var(--rh-space-2xl);margin-block:var(--rh-space-2xl)}span{font-family:var(--rh-font-family-heading);font-size:var(--rh-font-size-heading-xs);font-weight:var(--rh-font-weight-heading-medium);display:flex;flex-direction:row;align-items:center;gap:var(--rh-space-sm);color:var(--_bp-color)}#do{--_bp-color:var(--rh-color-status-success-on-light,#63993d)}#dont{--_bp-color:var(--rh-color-status-danger-on-light,#f0561d)}::slotted(uxdot-example){margin:0!important}figure{margin:0!important}`;
let UxdotBestPractice = class UxdotBestPractice extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'do';
    }
    render() {
        const { variant } = this;
        const icon = variant === 'do' ? 'check-circle' : 'close-circle';
        const title = variant === 'do' ? 'Do' : 'Don\'t';
        return html `
      <figure id="container">
        <slot name="image"></slot>
        <figcaption id="${variant}">
          <span><rh-icon set="ui" icon="${icon}" size="md"></rh-icon>${title}</span>
          <slot></slot>
        </figcaption>
      </figure>
    `;
    }
};
UxdotBestPractice.styles = [styles];
__decorate([
    property({ reflect: true })
], UxdotBestPractice.prototype, "variant", void 0);
UxdotBestPractice = __decorate([
    customElement('uxdot-best-practice')
], UxdotBestPractice);
export { UxdotBestPractice };
//# sourceMappingURL=uxdot-best-practice.js.map