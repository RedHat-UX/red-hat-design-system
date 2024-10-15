import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-accordion-panel.css';

import { consume } from '@lit/context';
import { context, type RhAccordionContext } from './context.js';

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

  @property({ type: Boolean, reflect: true })
  accessor expanded = false;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  accessor colorPalette: ColorPalette | undefined;

  @colorContextConsumer()
  private accessor on: ColorTheme | undefined;

  // @ts-expect-error: lit's types are wrong
  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private accessor ctx: RhAccordionContext | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.setAttribute('role', 'region');
  }

  override render() {
    const { on = '', expanded } = this;
    const { large = false } = this.ctx ?? {};
    return html`
      <div id="container"
           class="${classMap({ on: true, [on]: !!on, large, expanded, content: true })}"
           part="container"
           tabindex="-1">
        <slot class="body"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
