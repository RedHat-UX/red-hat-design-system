import { html, type TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { observed } from '@patternfly/pfe-core/decorators/observed.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { BaseAccordion } from '@patternfly/elements/pf-accordion/BaseAccordion.js';

import styles from './rh-accordion.css';

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

  @colorContextConsumer() private on?: ColorTheme;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @observed(function largeChanged(this: RhAccordion) {
    [...this.headers, ...this.panels].forEach(el => el.toggleAttribute('large', this.large));
  })
  @property({ reflect: true, type: Boolean }) large = false;

  @property({ reflect: true, type: Boolean }) bordered = true;

  override render(): TemplateResult {
    const { on = '' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion': RhAccordion;
  }
}

