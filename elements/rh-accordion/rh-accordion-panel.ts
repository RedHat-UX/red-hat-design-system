import { colorContextProvider, ColorPalette } from '../../lib/context/color.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-panel.css';
import { BaseAccordionPanel } from '@patternfly/pfe-accordion/BaseAccordionPanel';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion-panel')
export class RhAccordionPanel extends BaseAccordionPanel {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordionPanel.styles, styles];

  @property({ type: String, reflect: true }) disclosure?: 'true'|'false';

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
