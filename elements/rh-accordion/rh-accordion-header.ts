import type { RhAccordion } from './rh-accordion.js';
import type { RhAccordionContext } from './context.js';

import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { consume } from '@lit/context';

import { context } from './context.js';

import styles from './rh-accordion-header.css';
import { HeadingLevelController } from '@rhds/elements/lib/context/headings/controller.js';

export class AccordionHeaderChangeEvent extends Event {
  declare target: RhAccordionHeader;
  constructor(
    public expanded: boolean,
    public toggle: RhAccordionHeader,
    public accordion: RhAccordion,
  ) {
    super('change', { bubbles: true, cancelable: true });
  }
}

const isAccordion = (x: EventTarget): x is RhAccordion =>
  x instanceof HTMLElement && x.localName === 'rh-accordion';

/**
 * Accordion Header
 * We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @slot - accordion toggle content
 * @slot accents -
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends LitElement {
  static readonly styles = [styles];

  @property({ type: Boolean, reflect: true })
  accessor expanded = false;

  // @ts-expect-error: lit's types are wrong
  @consume({ context, subscribe: true })
  private accessor ctx: RhAccordionContext | undefined;

  @colorContextConsumer()
  private accessor on: ColorTheme | undefined;

  #dir = new DirController(this);

  #internals = InternalsController.of(this, {
    role: 'heading',
    ariaLevel: '2',
  });

  #heading = new HeadingLevelController(this);

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    const accordion = this.closest('rh-accordion');
    const heading = this.closest('h1,h2,h3,h4,h5,h6');
    if (heading && accordion?.contains(heading)) {
      this.#internals.ariaLevel = heading.localName.replace('h', '');
      heading.replaceWith(this);
    } else {
      this.#internals.ariaLevel = Math.max(2, this.#heading.level).toString();
    }
  }

  render() {
    const { expanded, on = '' } = this;
    const { accents, large = false } = this.ctx ?? {};
    const rtl = this.#dir.dir === 'rtl';
    return html`
      <div id="container" class="${classMap({ on: true, [on]: !!on, rtl, large, expanded })}">
        <button id="button"
                class="toggle"
                @click="${this.#onClick}">
          <span id="header-container" class="${classMap({ [accents ?? '']: !!accents })}">
            <span id="header-text" part="text"><slot></slot></span>
            <span part="accents"><slot name="accents"></slot></span>
          </span>
          <svg id="icon"
               role="presentation"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
          </svg>
        </button>
      </div>
    `;
  }

  #onClick(event: MouseEvent) {
    const accordion = event.composedPath().find(isAccordion);
    if (accordion) {
      this.dispatchEvent(new AccordionHeaderChangeEvent(!this.expanded, this, accordion));
    }
  }

  @observes('expanded')
  private expandedChanged() {
    this.#internals.ariaExpanded = String(!!this.expanded) as 'true' | 'false';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
