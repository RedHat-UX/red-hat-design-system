import { customElement } from 'lit/decorators.js';

import styles from './rh-accordion-header.css';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends BaseAccordionHeader {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordionHeader.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
