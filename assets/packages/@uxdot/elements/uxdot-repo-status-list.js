import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { legend } from './uxdot-repo.js';
import { css } from "lit";
const style = css `:host{display:block;container-type:inline-size;container-name:host}#container{position:relative}#inner-container{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);margin-block-start:var(--rh-space-lg)}#header-container{display:flex;justify-content:space-between;align-items:center}.checklist{font-size:var(--rh-font-size-body-text-sm);position:absolute;inset-inline-end:0;translate:0 -4em}a{color:var(--rh-color-interactive-primary-default)}a:hover{color:var(--rh-color-interactive-primary-hover)}a:focus-within,a:focus-within:hover{color:var(--rh-color-interactive-primary-focus)}a:visited{color:var(--rh-color-interactive-primary-visited-default)}a:visited:hover{color:var(--rh-color-interactive-primary-visited-hover)}dl{display:flex;flex-direction:column;align-items:flex-start;gap:var(--rh-space-lg);margin-block:var(--rh-space-lg)!important;margin-inline:var(--rh-space-xl)!important}@container host (width >= 768px){dl{flex-direction:row;column-gap:var(--rh-space-lg)}}@container host (width >= 992px){dl{column-gap:var(--rh-space-2xl)}}dl>div{display:flex;column-gap:var(--rh-space-md);align-items:center}dl>div>dt{font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md)}dl>div dd{margin:0}`;
let UxdotRepoStatusList = class UxdotRepoStatusList extends LitElement {
    getStatusInfo(status) {
        if (!status) {
            return null;
        }
        return legend[status] || null;
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
        <a href="#status-checklist" class="checklist">What do these mean?</a>
        <div id="inner-container">
          <dl>${libraries.map(lib => {
            const statusInfo = this.getStatusInfo(lib.status);
            return statusInfo ? html `
              <div>
                <dt>${lib.name}:</dt>
                <dd>
                  <rh-tag color="${statusInfo.color}"
                          variant="${statusInfo.variant}"
                          icon="${statusInfo.icon}">${statusInfo.pretty}</rh-tag>
                </dd>
              </div>` : '';
        })}
          </dl>
        </div>
      </div>
    `;
    }
};
UxdotRepoStatusList.styles = [style];
__decorate([
    property({ attribute: 'figma-status' })
], UxdotRepoStatusList.prototype, "figmaStatus", void 0);
__decorate([
    property({ attribute: 'rhds-status' })
], UxdotRepoStatusList.prototype, "rhdsStatus", void 0);
__decorate([
    property({ attribute: 'shared-status' })
], UxdotRepoStatusList.prototype, "sharedStatus", void 0);
UxdotRepoStatusList = __decorate([
    customElement('uxdot-repo-status-list')
], UxdotRepoStatusList);
export { UxdotRepoStatusList };
//# sourceMappingURL=uxdot-repo-status-list.js.map