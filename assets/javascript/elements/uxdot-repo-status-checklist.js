import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { UxdotRepoElement } from './uxdot-repo.js';
import '@rhds/elements/rh-table/rh-table.js';
import { css } from "lit";
const style = css `:host{display:block;container-type:inline-size;container-name:host}#container{position:relative}#inner-container{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);margin-block-start:var(--rh-space-lg)}#header-container{display:flex;justify-content:space-between;align-items:center}.checklist{font-size:var(--rh-font-size-body-text-sm);position:absolute;inset-inline-end:0;translate:0 -4em}a{color:var(--rh-color-interactive-primary-default)}a:hover{color:var(--rh-color-interactive-primary-hover)}a:focus-within,a:focus-within:hover{color:var(--rh-color-interactive-primary-focus)}a:visited{color:var(--rh-color-interactive-primary-visited-default)}a:visited:hover{color:var(--rh-color-interactive-primary-visited-hover)}dl{display:flex;flex-direction:column;align-items:flex-start;gap:var(--rh-space-lg);margin-block:var(--rh-space-lg)!important;margin-inline:var(--rh-space-xl)!important}@container host (width >= 768px){dl{flex-direction:row;column-gap:var(--rh-space-lg)}}@container host (width >= 992px){dl{column-gap:var(--rh-space-2xl)}}dl>div{display:flex;column-gap:var(--rh-space-md);align-items:center}dl>div>dt{font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md)}dl>div dd{margin:0}`;
let UxdotRepoStatusChecklist = class UxdotRepoStatusChecklist extends UxdotRepoElement {
    render() {
        const status = this.getStatus(this.element);
        return html `
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <div id="container">
        <rh-table>
          <table>
            <colgroup>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
              <tr>
                <th scope="col" width="20%">Property</th>
                <th scope="col" width="20%">Status</th>
                <th scope="col" width="60%">Meaning</th>
              </tr>
            </thead>
            <tbody>${status?.libraries.map(x => x.key === 'docs' ? '' : html `
              <tr>
                <td data-label="Property">${x.name}</td>
                <td data-label="Status">
                  <span>
                    <rh-tag color="${x.color}"
                            variant="${x.variant}"
                            icon="${x.icon}">${x.status}</rh-tag>
                  </span>
                </td>
                <td>${x.description}</td>
              </tr>`)}
            </tbody>
          </table>
        </rh-table>
      </div>
    `;
    }
};
UxdotRepoStatusChecklist.styles = [style];
__decorate([
    property()
], UxdotRepoStatusChecklist.prototype, "element", void 0);
UxdotRepoStatusChecklist = __decorate([
    customElement('uxdot-repo-status-checklist')
], UxdotRepoStatusChecklist);
export { UxdotRepoStatusChecklist };
//# sourceMappingURL=uxdot-repo-status-checklist.js.map