import type { TemplateResult } from 'lit';

import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { DirController } from '../../lib/DirController.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { BaseAccordionHeader } from '@patternfly/elements/pf-accordion/BaseAccordionHeader.js';

import styles from './rh-accordion-header.css';


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

  static readonly styles = [...BaseAccordionHeader.styles, styles];

  @property({ reflect: true }) icon = 'angle-down';

  @property({ reflect: true, type: Boolean }) expanded = false;

  #dir = new DirController(this);

  @colorContextConsumer() private on?: ColorTheme;

  override render(): TemplateResult {
    const { on = '' } = this;
    const rtl = this.#dir.dir === 'rtl';
    return html`
      <div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">${super.render()}</div>
    `;
  }

  renderAfterButton() {
    // Font-Awesome free angle-down
    // TODO: use rh-icon when it's ready
    return html`
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
