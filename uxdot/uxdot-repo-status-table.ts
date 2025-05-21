import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';

import '@rhds/elements/rh-table/rh-table.js';

import style from './uxdot-repo-status-table.css';

@customElement('uxdot-repo-status-table')
export class UxdotRepoStatusTable extends UxdotRepoElement {
  static styles = [style];

  @property() element?: string;

  render() {
    const status = this.getStatus();
    return html`
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css" rel="stylesheet">
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
            <tbody>${status.map(x => this.getStatus(x.tagName)).map(x => html`
              <tr>
                <td>
                  <a href="/elements/${x.slug}/">${x?.name}</a>${x?.overallStatus === 'ready' ? '' : html`
                  <rh-tag color="${x?.color}"
                          icon="${x?.icon}"
                          variant="${x?.variant}">${x?.overallStatus}</rh-tag>`}
                </td>${x?.libraries.map(x => html`
                <td>
                  <rh-tag color="${x.color}"
                          icon="${x.icon}"
                          variant="${x.variant}">${x.status}</rh-tag>
                </td>`)}
              </tr>`)}
            </tbody>
          </table>
        </rh-table>
      </div>
    `;
  }
}
