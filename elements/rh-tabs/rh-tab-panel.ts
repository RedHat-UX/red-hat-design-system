import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseTabPanel } from '@patternfly/pfe-tabs/BaseTabPanel';

import styles from './rh-tab-panel.css';

/**
 * Tabs
 * @slot - Place element content here
 */
@customElement('rh-tab-panel')
export class RhTabPanel extends BaseTabPanel {
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
    'rh-tab-panel': RhTabPanel;
  }
}
