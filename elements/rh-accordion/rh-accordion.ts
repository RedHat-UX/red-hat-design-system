import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';

import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';

import { cascades } from '@patternfly/pfe-core/decorators/cascades.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion.css';
import { BaseAccordion } from '@patternfly/pfe-accordion/BaseAccordion.js';
import './rh-accordion-header.js';
import './rh-accordion-panel.js';


/**
 * Accordions toggle the visibility of sections of content.
 * They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 *
 * @summary Toggle the visibility of sections of content
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 *
 */

@customElement('rh-accordion')
export class RhAccordion extends BaseAccordion {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordion.styles, styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  @cascades('rh-accordion', 'rh-accordion-header', 'rh-accordion-panel')
  @property({ reflect: true })
    large?: 'true' | 'false';

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
