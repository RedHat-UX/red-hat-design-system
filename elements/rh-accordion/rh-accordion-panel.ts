import type { TemplateResult } from 'lit';
import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';

import { colorContextProvider, colorContextConsumer } from '../../lib/context/color.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './rh-accordion-panel.css';
import { BaseAccordionPanel } from '@patternfly/pfe-accordion/BaseAccordionPanel.js';

import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
@customElement('rh-accordion-panel')
export class RhAccordionPanel extends BaseAccordionPanel {
  static readonly version = '{{version}}';

  static readonly styles = [...BaseAccordionPanel.styles, styles];

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @property({ reflect: true })
  private on?: ColorTheme;

  override render() {
    const { on = 'light' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
