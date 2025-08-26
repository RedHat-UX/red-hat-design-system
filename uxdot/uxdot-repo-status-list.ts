import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';
import type { RepoStatus } from '../docs/_plugins/types.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-list')
export class UxdotRepoStatusList extends UxdotRepoElement {
  static styles = [style];

  @property({ attribute: 'figma-status' }) figmaStatus?: RepoStatus;
  @property({ attribute: 'rhds-status' }) rhdsStatus?: RepoStatus;
  @property({ attribute: 'shared-status' }) sharedStatus?: RepoStatus;

  private getStatusInfo(status?: RepoStatus) {
    if (!status) {
      return null;
    }
    return UxdotRepoElement.legend[status] || null;
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
        <a href="#status-checklist" class="checklist">What do these mean?</a>
        <div id="inner-container">
          <dl>${libraries.map(lib => {
            const statusInfo = this.getStatusInfo(lib.status);
            return statusInfo ? html`
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
}
