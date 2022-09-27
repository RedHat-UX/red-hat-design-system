import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-header.css';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends BaseAccordionHeader {
  static readonly version = '{{version}}';

  @property({ reflect: true }) icon;

  static readonly styles = [...BaseAccordionHeader.styles, styles];

  constructor() {
    super();
    this.icon = 'web-icon-caret-thin-down';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
