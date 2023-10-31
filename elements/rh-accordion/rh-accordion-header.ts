import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { HeadingLevelController } from '@rhds/elements/lib/context/headings/controller.js';
import { DirController } from '@rhds/elements/lib/DirController.js';

import { RhAccordion } from './rh-accordion.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-accordion-header.css';

export class AccordionHeaderChangeEvent extends Event {
  declare target: RhAccordionHeader;
  constructor(
    public expanded: boolean,
    public toggle: RhAccordionHeader,
    public accordion: RhAccordion
  ) {
    super('change', { bubbles: true, cancelable: true });
  }
}

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
export class RhAccordionHeader extends LitElement {
  static readonly version = '{{version}}';

  static override readonly shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static readonly styles = [styles];

  @property({ reflect: true, type: Boolean }) expanded = false;

  @colorContextConsumer() private on?: ColorTheme;

  #dir = new DirController(this);

  #levels = new HeadingLevelController(this);

  #mo = new MutationObserver(() => this.requestUpdate());

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.#onClick);
    this.hidden = true;
    this.id ||= getRandomId(this.localName);
    this.#mo.observe(this, { childList: true });
  }

  override render() {
    const { on = '' } = this;
    const rtl = this.#dir.dir === 'rtl';
    const headingTag = this.querySelector(`:is(h1,h2,h3,h4,h5,h6)`);
    // icon is Font-Awesome free angle-down
    // TODO: use rh-icon when it's ready
    return this.#levels.wrap(html`
      <button id="button"
              class="toggle ${classMap({ [on]: !!on, rtl })}"
              aria-expanded="${String(!!this.expanded) as 'true' | 'false'}">
        <slot></slot>
        <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </button>
    `, { forceWrap: !headingTag });
  }

  #onClick(event: MouseEvent) {
    const expanded = !this.expanded;
    const acc = event.composedPath().find(RhAccordion.isAccordion);
    if (acc) {
      this.dispatchEvent(new AccordionHeaderChangeEvent(
        expanded,
        this,
        acc as RhAccordion,
      ));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
