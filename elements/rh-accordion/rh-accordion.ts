import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { colorContextProvider } from '../../lib/context/color.js';
import { cascades } from '@patternfly/pfe-core/decorators/cascades.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion.css';
import { BaseAccordion } from '@patternfly/pfe-accordion/BaseAccordion';
import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import './rh-accordion-header.js';
import './rh-accordion-panel.js';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion')
export class RhAccordion extends BaseAccordion {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordion.styles, styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  @cascades('rh-accordion-header', 'rh-accordion-panel')
  @property({ reflect: true })
    large?: 'true'|'false';

  @cascades('rh-accordion-header', 'rh-accordion-panel')
    bordered = true;

  constructor() {
    super();
    this.single = 'false';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }
}
