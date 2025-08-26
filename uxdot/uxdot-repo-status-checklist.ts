import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';
import type { ComputedTagStatus } from './uxdot-repo.js';

import '@rhds/elements/rh-table/rh-table.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-checklist')
export class UxdotRepoStatusChecklist extends UxdotRepoElement {
  static styles = [style];

  @property({ 
    attribute: 'status-data',
    type: Object
  }) statusData?: ComputedTagStatus;

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
            </colgroup>
            <thead>
              <tr>
                <th scope="col" width="20%">Property</th>
                <th scope="col" width="20%">Status</th>
                <th scope="col" width="60%">Meaning</th>
              </tr>
            </thead>
            <tbody>${this.statusData?.libraries.map(x => x.key === 'docs' ? '' : html`
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
}
