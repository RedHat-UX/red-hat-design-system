import type { ColorTheme } from '../../lib/context/color.js';

import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-header.css';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader';

import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends BaseAccordionHeader {
  static readonly version = '{{version}}';

  @property({ reflect: true }) icon;

  static readonly styles = [...BaseAccordionHeader.styles, styles];

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  constructor() {
    super();
    this.icon = 'arrow-down';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
