import type { RhAccordion } from './rh-accordion.js';
import type { RhAccordionContext } from './context.js';

import { html, LitElement, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { consume } from '@lit/context';
import { context } from './context.js';

import styles from './rh-accordion-header.css' with { type: 'css' };

export class AccordionHeaderChangeEvent extends Event {
  declare target: RhAccordionHeader;
  constructor(
    public expanded: boolean,
    public toggle: RhAccordionHeader,
  ) {
    super('change', { bubbles: true, cancelable: true });
  }
}

/**
 * Clickable toggle for an accordion panel. Each header controls the visibility
 * of its adjacent `rh-accordion-panel` sibling. Renders as an accessible button
 * with `role="heading"` at the appropriate aria-level.
 *
 * MUST be a direct child of `rh-accordion`. SHOULD contain concise title text
 * (max 65 characters). AVOID writing titles that sound like calls to action.
 *
 * Supports keyboard activation with `Enter` or `Space`. Automatically manages
 * `aria-expanded` and `aria-controls` for its associated panel.
 *
 * @fires {AccordionHeaderChangeEvent} change - Fires when the header's expanded
 *   state changes, either by user click or programmatic toggle. The event
 *   `expanded` property indicates the new state.
 */
@customElement('rh-accordion-header')
@themable
export class RhAccordionHeader extends LitElement {
  static readonly styles = [styles];

  // Allow focus to apply to shadow button
  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Whether this header's associated panel is expanded. When true, the caret
   * icon rotates upward and the panel content is visible. Managed automatically
   * by the parent `rh-accordion` — set `expanded-index` on the accordion to
   * control initial state declaratively.
   */
  @property({ type: Boolean, reflect: true }) expanded = false;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhAccordionContext;

  #internals = InternalsController.of(this, {
    role: 'heading',
    ariaLevel: '2',
  });

  #heading = new HeadingLevelContextConsumer(this);

  #belongsTo?: RhAccordion | null;

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    if (!isServer) {
      this.#belongsTo = this.closest<RhAccordion>('rh-accordion');
      const heading = this.closest('h1,h2,h3,h4,h5,h6');
      if (heading && this.#belongsTo?.contains(heading)) {
        this.#internals.ariaLevel = heading.localName.replace('h', '');
        heading.replaceWith(this);
      } else {
        if (!this.#internals.ariaLevel) {
          this.#internals.ariaLevel = Math.max(2, this.#heading.level).toString();
        }
      }
      this.removeAttribute('role');
    }
  }

  render() {
    const { expanded } = this;
    const { accents, large = false } = this.ctx ?? {};
    return html`
      <button id="button"
              class="${classMap({ toggle: true, large, expanded })}"
              @click="${this.#onClick}">
        <span id="header-container" class="${classMap({ [accents ?? '']: !!accents })}">
          <!-- inline element containing the heading text or slotted heading content -->
          <span id="header-text" part="text">
            <!-- summary: panel's title text or heading content
                 description: |
                   Contains the primary label that describes what content will be revealed when the panel expands.
                   Title text should be written concisely (max 65 characters) so users know what to expect.
                   Avoid writing titles that sound like calls to action - make it easy for users to understand
                   the content within. Title text that is too long should be broken into separate sections, and
                   text that is too vague may not help users understand the panel content.

                   @see [Title text](https://ux.redhat.com/elements/accordion/guidelines/#title-text) in Guidelines documentation -->
            <slot></slot>
          </span>
          <!-- container for accents within the header -->
          <span part="accents">
           <!-- summary: decorations like icons or tags
                description: |
                 These elements will appear inline by default with the header title, between the header and the chevron
                 (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom -->
            <slot name="accents"></slot>
          </span>
        </span>
        <svg id="icon"
             role="presentation"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </button>
    `;
  }

  #onClick() {
    this.expanded = !this.expanded;
  }

  #dispatchChange() {
    this.dispatchEvent(new AccordionHeaderChangeEvent(this.expanded, this));
  }

  @observes('expanded')
  private expandedChanged() {
    this.#internals.ariaExpanded = String(!!this.expanded) as 'true' | 'false';
    this.#dispatchChange();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
