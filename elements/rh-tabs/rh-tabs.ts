import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseTabs } from '@patternfly/pfe-tabs/BaseTabs';

import { RhTab } from './rh-tab';
import { RhTabPanel } from './rh-tab-panel';

import styles from './rh-tabs.css';

/**
 * Tabs
 * @slot - Place element content here
 */
@customElement('rh-tabs')
export class RhTabs extends BaseTabs {
  static readonly styles = [styles];

  static isTab(element: HTMLElement): element is RhTab {
    return element instanceof RhTab;
  }

  static isPanel(element: HTMLElement): element is RhTabPanel {
    return element instanceof RhTabPanel;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tabs': RhTabs;
  }
}
