import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { legend, checklist } from './uxdot-repo.js';
import type { RepoStatus } from '../docs/_plugins/types.js';

import '@rhds/elements/rh-table/rh-table.js';
import '@rhds/elements/rh-tag/rh-tag.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-checklist')
export class UxdotRepoStatusChecklist extends LitElement {
  static styles = [style];

  @property({ attribute: 'figma-status' }) figmaStatus?: RepoStatus;
  @property({ attribute: 'rhds-status' }) rhdsStatus?: RepoStatus;
  @property({ attribute: 'shared-status' }) sharedStatus?: RepoStatus;

  private getStatusInfo(status?: RepoStatus) {
    if (!status) {
      return null;
    }
    return legend[status] || null;
  }

  private getStatusDescription(library: string, status?: RepoStatus) {
    if (!status) {
      return '';
    }
    return checklist[library as keyof typeof checklist]?.[status] || '';
  }

  render() {
    const libraries = [
      { key: 'figma', name: 'Figma library', status: this.figmaStatus },
      { key: 'rhds', name: 'RH Elements', status: this.rhdsStatus },
      { key: 'shared', name: 'RH Shared Libs', status: this.sharedStatus },
    ];

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
            <tbody>${libraries.map(lib => {
              const statusInfo = this.getStatusInfo(lib.status);
              const description = this.getStatusDescription(lib.key, lib.status);
              return statusInfo ? html`
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
}
