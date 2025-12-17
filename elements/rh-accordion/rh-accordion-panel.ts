import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { consume } from '@lit/context';
import { context, type RhAccordionContext } from './context.js';

import styles from './rh-accordion-panel.css' with { type: 'css' };

/**
 * Accordion Panel
 */
@customElement('rh-accordion-panel')
@themable
export class RhAccordionPanel extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true }) expanded = false;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhAccordionContext;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.setAttribute('role', 'region');
  }

  override render() {
    const { expanded } = this;
    const { large = false } = this.ctx ?? {};
    return html`
      <div id="container"
           class="${classMap({ large, expanded, content: true })}"
           part="container"
           tabindex="-1">
        <!-- The content of the accordion panel can be any basic markup including but not limited
             to div, paragraph, or nested accordion panels. -->
        <slot class="body"></slot>
      </div>
    `;
  }

  @observes('expanded')
  private expandedChanged() {
    this.hidden = !this.expanded;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-panel': RhAccordionPanel;
  }
}
