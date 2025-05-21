import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { UxdotRepoElement } from './uxdot-repo.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-list')
export class UxdotRepoStatusList extends UxdotRepoElement {
  static styles = [style];

  @property() element?: string;

  render() {
    const status = this.getStatus(this.element!);
    return html`
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css" rel="stylesheet">
      <div id="container">
        <a class="checklist" href="#status-checklist">What do these mean?</a>
        <div id="inner-container">
          <dl>${status?.libraries.map(x => x.key === 'docs' ? '' : html`
            <div>
              <dt>${x.name}:</dt>
              <dd>
                <rh-tag color="${x.color}"
                        icon="${x.icon}"
                        variant="${x.variant}">${x.status}</rh-tag>
              </dd>
            </div>`)}
          </dl>
        </div>
      </div>
    `;
  }
}
