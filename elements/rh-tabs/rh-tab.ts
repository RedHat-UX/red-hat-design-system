import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';

import { observed } from '@patternfly/pfe-core/decorators.js';

import { BaseTab } from '@patternfly/pfe-tabs/BaseTab.js';

import { colorContextProvider, colorContextConsumer } from '../../lib/context/color.js';

import styles from './rh-tab.css';

/**
 * Tabs
 * @slot - Place element content here
 */
@customElement('rh-tab')
export class RhTab extends BaseTab {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseTab.styles, styles];

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

  @observed
  @property({ reflect: true, type: Boolean }) active = false;

  @observed
  @property({ reflect: true, type: Boolean }) disabled = false;

  render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
