import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';

import { UxdotRepoElement } from './uxdot-repo.js';
import type { ComputedTagStatus } from './uxdot-repo.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-list')
export class UxdotRepoStatusList extends UxdotRepoElement {
  static styles = [style];

  @property() element?: string;
  @state() private status?: ComputedTagStatus;

  protected async updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('element') && this.element) {
      try {
        this.status = await this.getStatus(this.element);
      } catch {
        this.status = undefined;
      }
    }
  }

  render() {
    return html`
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <div id="container">
        <a href="#status-checklist" class="checklist">What do these mean?</a>
        <div id="inner-container">
          <dl>${this.status?.libraries.map(x => x.key === 'docs' ? '' : html`
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
