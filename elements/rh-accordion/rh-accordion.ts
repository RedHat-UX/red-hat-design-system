import { customElement } from 'lit/decorators.js';

import styles from './rh-accordion.css';
import { BaseAccordion } from '@patternfly/pfe-accordion/BaseAccordion';

/**
 * Accordion
 * @slot - Place element content here
 */
@customElement('rh-accordion')
export class RhAccordion extends BaseAccordion {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordion.styles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }
}
