import { html } from 'lit';
import { UxdotRepoElement } from './uxdot-repo.js';
import { css } from "lit";
const style = css `:host{display:block;container-type:inline-size;container-name:host}#container{position:relative}#inner-container{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);margin-block-start:var(--rh-space-lg)}#header-container{display:flex;justify-content:space-between;align-items:center}.checklist{font-size:var(--rh-font-size-body-text-sm);position:absolute;inset-inline-end:0;translate:0 -4em}a{color:var(--rh-color-interactive-primary-default)}a:hover{color:var(--rh-color-interactive-primary-hover)}a:focus-within,a:focus-within:hover{color:var(--rh-color-interactive-primary-focus)}a:visited{color:var(--rh-color-interactive-primary-visited-default)}a:visited:hover{color:var(--rh-color-interactive-primary-visited-hover)}dl{display:flex;flex-direction:column;align-items:flex-start;gap:var(--rh-space-lg);margin-block:var(--rh-space-lg)!important;margin-inline:var(--rh-space-xl)!important}@container host (width >= 768px){dl{flex-direction:row;column-gap:var(--rh-space-lg)}}@container host (width >= 992px){dl{column-gap:var(--rh-space-2xl)}}dl>div{display:flex;column-gap:var(--rh-space-md);align-items:center}dl>div>dt{font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md)}dl>div dd{margin:0}`;
export class UxdotRepoStatusList extends UxdotRepoElement {
    render() {
        const status = this.getStatus(this.element);
        return html `
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <div id="container">
        <a href="#status-checklist" class="checklist">What do these mean?</a>
        <div id="inner-container">
          <dl>${status?.libraries.map(x => x.key === 'docs' ? '' : html `
            <div>
              <dt>${x.name}:</dt>
              <dd>
                <rh-tag color="${x.color}"
                        variant="${x.variant}"
                        icon="${x.icon}">${x.status}</rh-tag>
              </dd>
            </div>`)}
          </dl>
        </div>
      </div>
    `;
    }
}
UxdotRepoStatusList.properties = {
    element: {}
};
UxdotRepoStatusList.styles = [style];
customElements.define("uxdot-repo-status-list", UxdotRepoStatusList);
//# sourceMappingURL=uxdot-repo-status-list.js.map