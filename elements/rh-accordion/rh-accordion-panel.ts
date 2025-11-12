import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { consume } from '@lit/context';
import { context, type RhAccordionContext } from './context.js';

import styles from './rh-accordion-panel.css';

/**
 * Accordion Panel
 */
@customElement('rh-accordion-panel')
@themable
export class RhAccordionPanel extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the initial visibility state of the panel content.
   * When `true`, the panel is expanded and its content is visible.
   * When `false` (default), the panel is collapsed and its content is hidden.
   *
   * ## Usage guidelines
   * - Use to draw attention to important content that should be immediately visible
   * - Set on the first panel in a FAQ or help section to show the most common question
   * - Supports multiple panels being expanded simultaneously for content comparison
   * - Users can expand and collapse panels one at a time by default, or multiple panels
   *   when implementing "Expand all" functionality
   *
   * By default, all panels are collapsed (expanded=false). Users expand panels by clicking
   * the header, which animates the caret icon and reveals the content.
   *
   * @see [Expanding and collapsing panels](https://ux.redhat.com/elements/accordion/guidelines/#expanding-and-collapsing-panels) in Guidelines documentation
   */
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
      <!-- summary: main wrapper region that contains the panel content
           description: |
             The container part represents the structural element that holds the panel's body content.
             It maintains the color scheme context to ensure proper text visibility and color contrast,
             and should match the color palette of the container it's in. This part defines the overall
             styling and boundaries for the panel's revealed content area. -->
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
