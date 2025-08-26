import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';
import type { ComputedTagStatus } from './uxdot-repo.js';

import '@rhds/elements/rh-table/rh-table.js';

import style from './uxdot-repo-status-table.css';

@customElement('uxdot-repo-status-table')
export class UxdotRepoStatusTable extends UxdotRepoElement {
  static styles = [style];

  @property({
    attribute: 'status-data',
    type: Object,
  }) statusData?: ComputedTagStatus[];

  get allStatus(): ComputedTagStatus[] {
    // In browser, check for global data first, then fall back to attribute
    if (typeof window !== 'undefined') {
      return (window as any).__REPO_STATUS_DATA__ || this.statusData || [];
    }
    // In SSR, only use attribute data
    return this.statusData || [];
  }

  render() {
    return html`
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <div id="container">
        <rh-table>
          <table>
            <colgroup>
              <col>
              <col>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Figma library</th>
                <th scope="col">RH Elements</th>
                <th scope="col">RH Shared Libs</th>
                <th scope="col">Documentation</th>
              </tr>
            </thead>
            <tbody>${this.allStatus.map(x => html`
              <tr>
                <td>
                  <a href="/elements/${x.slug}/">${x?.name}</a>${x?.overallStatus === 'ready' ? '' : html`
                  <rh-tag color="${x?.color}"
                          variant="${x?.variant}"
                          icon="${x?.icon}">${x?.overallStatus}</rh-tag>`}
                </td>${x?.libraries.map(lib => html`
                <td>
                  <rh-tag color="${lib.color}"
                          variant="${lib.variant}"
                          icon="${lib.icon}">${lib.status}</rh-tag>
                </td>`)}
              </tr>`)}
            </tbody>
          </table>
        </rh-table>
      </div>
    `;
  }
}
