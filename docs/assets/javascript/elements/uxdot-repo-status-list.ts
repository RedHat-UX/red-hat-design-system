import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './uxdot-repo-status-list.css';

@customElement('uxdot-repo-status-list')
export class UxdotRepoStatusList extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div id="container">
        <div id="header-container">
          <slot name="header"></slot>
          <slot name="checklist"></slot>
        </div>
        <div id="inner-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
