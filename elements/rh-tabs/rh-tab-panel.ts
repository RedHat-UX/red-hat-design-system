import { customElement, property } from 'lit/decorators.js';

import { BaseTabPanel } from '@patternfly/pfe-tabs/BaseTabPanel';

import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { colorContextProvider, colorContextConsumer } from '../../lib/context/color.js';

import styles from './rh-tab-panel.css';

/**
 * Tabs
 * @slot - Place element content here
 */
@customElement('rh-tab-panel')
export class RhTabPanel extends BaseTabPanel {
  static readonly version = '{{version}}';

  static readonly styles = [styles];


  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
   @colorContextProvider()
   @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

   /**
    * Sets color theme based on parent context
    */
   @colorContextConsumer()
   @property({ reflect: true }) on?: ColorTheme;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab-panel': RhTabPanel;
  }
}
