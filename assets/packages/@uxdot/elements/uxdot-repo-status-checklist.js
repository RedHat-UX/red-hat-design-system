import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { legend, checklist } from './uxdot-repo.js';
import '@rhds/elements/rh-table/rh-table.js';
import '@rhds/elements/rh-tag/rh-tag.js';
import { css } from "lit";
const style = css `:host{display:block;container-type:inline-size;container-name:host}#container{position:relative}#inner-container{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);margin-block-start:var(--rh-space-lg)}#header-container{display:flex;justify-content:space-between;align-items:center}.checklist{font-size:var(--rh-font-size-body-text-sm);position:absolute;inset-inline-end:0;translate:0 -4em}a{color:var(--rh-color-interactive-primary-default)}a:hover{color:var(--rh-color-interactive-primary-hover)}a:focus-within,a:focus-within:hover{color:var(--rh-color-interactive-primary-focus)}a:visited{color:var(--rh-color-interactive-primary-visited-default)}a:visited:hover{color:var(--rh-color-interactive-primary-visited-hover)}dl{display:flex;flex-direction:column;align-items:flex-start;gap:var(--rh-space-lg);margin-block:var(--rh-space-lg)!important;margin-inline:var(--rh-space-xl)!important}@container host (width >= 768px){dl{flex-direction:row;column-gap:var(--rh-space-lg)}}@container host (width >= 992px){dl{column-gap:var(--rh-space-2xl)}}dl>div{display:flex;column-gap:var(--rh-space-md);align-items:center}dl>div>dt{font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md)}dl>div dd{margin:0}`;
let UxdotRepoStatusChecklist = class UxdotRepoStatusChecklist extends LitElement {
    getStatusInfo(status) {
        if (!status) {
            return null;
        }
        return legend[status] || null;
    }
    getStatusDescription(library, status) {
        if (!status) {
            return '';
        }
        return checklist[library]?.[status] || '';
    }
    render() {
        const libraries = [
            { key: 'figma', name: 'Figma library', status: this.figmaStatus },
            { key: 'rhds', name: 'RH Elements', status: this.rhdsStatus },
            { key: 'shared', name: 'RH Shared Libs', status: this.sharedStatus },
        ];
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
            <tbody>${libraries.map(lib => {
            const statusInfo = this.getStatusInfo(lib.status);
            const description = this.getStatusDescription(lib.key, lib.status);
            return statusInfo ? html `
                <tr>
                  <td data-label="Property">${lib.name}</td>
                  <td data-label="Status">
                    <span>
                      <rh-tag color="${statusInfo.color}"
                              variant="${statusInfo.variant}"
                              icon="${statusInfo.icon}">${statusInfo.pretty}</rh-tag>
                    </span>
                  </td>
                  <td>${description}</td>
                </tr>` : '';
        })}
            </tbody>
          </table>
        </rh-table>
      </div>
    `;
    }
};
UxdotRepoStatusChecklist.styles = [style];
__decorate([
    property({ attribute: 'figma-status' })
], UxdotRepoStatusChecklist.prototype, "figmaStatus", void 0);
__decorate([
    property({ attribute: 'rhds-status' })
], UxdotRepoStatusChecklist.prototype, "rhdsStatus", void 0);
__decorate([
    property({ attribute: 'shared-status' })
], UxdotRepoStatusChecklist.prototype, "sharedStatus", void 0);
UxdotRepoStatusChecklist = __decorate([
    customElement('uxdot-repo-status-checklist')
], UxdotRepoStatusChecklist);
export { UxdotRepoStatusChecklist };
//# sourceMappingURL=uxdot-repo-status-checklist.js.map