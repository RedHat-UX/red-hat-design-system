import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';
import { cascades } from '@patternfly/pfe-core/decorators.js';

import { BaseTabs } from '@patternfly/elements/pf-tabs/BaseTabs.js';

import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tabs.css';

export { RhTab };

/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 *
 * @cssprop {<color>} --rh-tabs-border-color - Tabs Border color {@default `#c7c7c7`}
 * @cssprop {<length>} --rh-tabs-inset - Tabs inset {@default `auto`}
 *
 * @cssprop --rh-border-width-lg
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-base-on-dark
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-border-subtle-on-dark
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-gray-40
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-xl
 *
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
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @property({ reflect: true, type: Boolean }) centered? = false;

  // cascade doesn't like undefined values as default
  @cascades('rh-tab')
  @property({ reflect: true }) theme?: 'base' | null = null;

  // cascade doesn't like undefined values as default
  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true }) box?: 'box' | 'inset' | null = null;

  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true, type: Boolean }) vertical = false;

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
