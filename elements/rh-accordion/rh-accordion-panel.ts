import type { ColorPalette } from '../../lib/context/color.js';

import { colorContextProvider } from '../../lib/context/color.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-panel.css';
import { BaseAccordionPanel } from '@patternfly/pfe-accordion/BaseAccordionPanel.js';

/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
*/

@customElement('rh-accordion-panel')
export class RhAccordionPanel extends BaseAccordionPanel {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordionPanel.styles, styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
