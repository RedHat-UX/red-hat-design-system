import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;margin-block:var(--rh-space-2xl,32px)}#container{display:flex;flex-direction:column;gap:var(--rh-space-2xl,32px);margin-block:var(--rh-space-2xl,32px)}span{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);display:flex;flex-direction:row;align-items:center;gap:var(--rh-space-md,8px)}#do span{color:var(--rh-color-status-success)}#dont span{color:var(--rh-color-status-danger)}#caution span{color:light-dark(var(--rh-color-yellow-60,#96640f),var(--rh-color-status-warning-on-dark,#ffcc17))}#caution rh-icon{color:var(--rh-color-status-warning)}::slotted(uxdot-example){margin:0!important}figure{margin:0!important}`;
let UxdotBestPractice = class UxdotBestPractice extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'do';
    }
    render() {
        const { variant } = this;
        const iconMap = {
            do: 'check-circle-fill',
            dont: 'close-circle-fill',
            caution: 'warning-fill',
        };
        const titleMap = {
            do: 'Do',
            dont: 'Don\'t',
            caution: 'Caution',
        };
        return html `
      <figure id="container">
        <slot name="image"></slot>
        <figcaption id="${variant}">
          <span><rh-icon set="ui" icon="${iconMap[variant]}" size="md"></rh-icon>${titleMap[variant]}</span>
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
    themable,
    customElement('uxdot-best-practice')
], UxdotBestPractice);
export { UxdotBestPractice };
//# sourceMappingURL=uxdot-best-practice.js.map