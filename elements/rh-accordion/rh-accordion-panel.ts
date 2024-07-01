import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-accordion-panel.css';

/**
 * Accordion Panel
 *
 * @slot
 *       The content of the accordion panel can be any basic markup including but not limited to div, paragraph, or nested accordion panels.
 */
@customElement('rh-accordion-panel')
export class RhAccordionPanel extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) expanded = false;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorPalette;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.setAttribute('role', 'region');
  }

  override render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">
        <div tabindex="-1">
          <div id="container" class="content" part="container">
            <div class="body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
