import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host{display:block;container-type:inline-size;container-name:host}#inner-container{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);margin-block-start:var(--rh-space-lg)}#header-container{display:flex;justify-content:space-between;align-items:center}[name=checklist]::slotted(a){font-size:var(--rh-font-size-body-text-sm)}::slotted(dl){display:flex;flex-direction:column;align-items:flex-start;gap:var(--rh-space-lg);margin-block:var(--rh-space-lg)!important;margin-inline:var(--rh-space-xl)!important}@container host (min-width: 768px){::slotted(dl){flex-direction:row;column-gap:var(--rh-space-lg)}}@container host (min-width: 992px){::slotted(dl){column-gap:var(--rh-space-2xl)}}`;
let UxdotRepoStatusList = class UxdotRepoStatusList extends LitElement {
    render() {
        return html `
      <div id="container">
        <div id="header-container">
          <slot name="header"></slot>
          <slot name="checklist"></slot>
        </div>
        <div id="inner-container">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
UxdotRepoStatusList.styles = [style];
UxdotRepoStatusList = __decorate([
    customElement('uxdot-repo-status-list')
], UxdotRepoStatusList);
export { UxdotRepoStatusList };
//# sourceMappingURL=uxdot-repo-status-list.js.map