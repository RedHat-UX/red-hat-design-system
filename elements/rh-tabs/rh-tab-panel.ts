import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';

import { BaseTabPanel } from '@patternfly/elements/pf-tabs/BaseTabPanel.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tab-panel.css';

/**
 * Tabs
 * @slot - Place element content here
 * @cssprop {<length>} --rh-tab-panel-padding - Panel padding {@default `24px`}
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
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
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
