import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseTab } from '@patternfly/pfe-tabs/BaseTab';

import styles from './rh-tab.css';

/**
 * Tabs
 * @slot - Place element content here
 */
@customElement('rh-tab')
export class RhTab extends BaseTab {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
