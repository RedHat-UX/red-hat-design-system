import type { ColorTheme } from '../../lib/context/color.js';

import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-header.css';
import { BaseAccordionHeader } from '@patternfly/pfe-accordion/BaseAccordionHeader.js';

import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';

/**
 * Accordion Header
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
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
    this.icon = 'angle-down';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
