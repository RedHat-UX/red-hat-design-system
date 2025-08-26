import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';
import type { RepoStatusRecord } from '../docs/_plugins/types.js';

import '@rhds/elements/rh-table/rh-table.js';
import '@rhds/elements/rh-tag/rh-tag.js';


import style from './uxdot-repo-status-table.css';

@customElement('uxdot-repo-status-table')
export class UxdotRepoStatusTable extends UxdotRepoElement {
  static styles = [style];

  @property({ attribute: 'status-data', type: Object }) statusData: RepoStatusRecord[] = [];

  private getStatusInfo(status?: string) {
    if (!status) {
      return null;
    }
    return UxdotRepoElement.legend[status as keyof typeof UxdotRepoElement.legend] || null;
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
            <tbody>${this.statusData.map(x => {
              const figmaInfo = this.getStatusInfo(x.libraries?.figma);
              const rhdsInfo = this.getStatusInfo(x.libraries?.rhds);
              const sharedInfo = this.getStatusInfo(x.libraries?.shared);
              const docsInfo = this.getStatusInfo(x.libraries?.docs);
              const overallInfo = this.getStatusInfo(x.overallStatus);

              return html`
              <tr>
                <td>
                  <a href="/elements/${x.tagName}/">${x.name}</a>${x.overallStatus === 'ready' ? '' : html`
                  <rh-tag color="${overallInfo?.color || 'gray'}"
                          variant="${overallInfo?.variant || 'outline'}"
                          icon="${overallInfo?.icon || 'ban'}">${x.overallStatus}</rh-tag>`}
                </td>
                <td>${!figmaInfo ? '' : html`
                  <rh-tag color="${figmaInfo.color}"
                          variant="${figmaInfo.variant}"
                          icon="${figmaInfo.icon}">${figmaInfo.pretty}</rh-tag>`}
                </td>
                <td>${!rhdsInfo ? '' : html`
                  <rh-tag color="${rhdsInfo.color}"
                          variant="${rhdsInfo.variant}"
                          icon="${rhdsInfo.icon}">${rhdsInfo.pretty}</rh-tag>`}
                </td>
                <td>${!sharedInfo ? '' : html`
                  <rh-tag color="${sharedInfo.color}"
                          variant="${sharedInfo.variant}"
                          icon="${sharedInfo.icon}">${sharedInfo.pretty}</rh-tag>`}
                </td>
                <td>${!docsInfo ? '' : html`
                  <rh-tag color="${docsInfo.color}"
                          variant="${docsInfo.variant}"
                          icon="${docsInfo.icon}">${docsInfo.pretty}</rh-tag>`}
                </td>
              </tr>`;
            })}
            </tbody>
          </table>
        </rh-table>
      </div>
    `;
  }
}
