import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';
import { cascades } from '@patternfly/pfe-core/decorators.js';

import { BaseTabs } from '@patternfly/pfe-tabs/BaseTabs.js';

import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';

import { colorContextProvider, colorContextConsumer } from '../../lib/context/color.js';

import styles from './rh-tabs.css';

/**
 * Tabs
 */
@customElement('rh-tabs')
export class RhTabs extends BaseTabs {
  static readonly styles = [...BaseTabs.styles, styles];

  static isTab(element: HTMLElement): element is RhTab {
    return element instanceof RhTab;
  }

  static isPanel(element: HTMLElement): element is RhTabPanel {
    return element instanceof RhTabPanel;
  }

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  // cascade doesn't like undefined values as default
  @cascades('rh-tab')
  @property({ reflect: true }) theme?: null | 'base' = null;

  // cascade doesn't like undefined values as default
  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true }) box?: 'box' | 'inset' | null = null;

  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true, type: Boolean }) vertical = false;

  @cascades('rh-tab')
  @property({ attribute: 'border-bottom' }) borderBottom: 'true' | 'false' = 'true';

  // TODO: remove when BaseTabs is updated via PFE RC
  inset?: string | undefined;

  protected get canShowScrollButtons(): boolean {
    return !this.vertical;
  }

  render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tabs': RhTabs;
  }
}
