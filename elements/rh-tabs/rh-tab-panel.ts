import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { BaseTabPanel } from '@patternfly/elements/pf-tabs/BaseTabPanel.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tab-panel.css';

/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 *
 * @slot - Panel content should follow guidelines for [tab panel content layout](../guidelines)
 *
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-3xl
 * @cssprop --rh-space-4xl
 */
@customElement('rh-tab-panel')
export class RhTabPanel extends BaseTabPanel {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab-panel': RhTabPanel;
  }
}
