import type { TemplateResult } from 'lit';

import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { ComposedEvent } from '@patternfly/pfe-core';

import { DirController } from '../../lib/DirController.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-accordion-header.css';
import { BaseAccordion } from './BaseAccordion.js';

const isPorHeader =
  (el: Node): el is HTMLElement =>
    el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);

export class AccordionHeaderChangeEvent extends ComposedEvent {
  declare target: RhAccordionHeader;
  constructor(
    public expanded: boolean,
    public toggle: RhAccordionHeader,
    public accordion: BaseAccordion
  ) {
    super('change');
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

  static readonly styles = [styles];

  static override readonly shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  @property({ type: Boolean, reflect: true }) expanded = false;

  @property({ reflect: true, attribute: 'heading-text' }) headingText?: string;

  @property({ reflect: true, attribute: 'heading-tag' }) headingTag?: string;

  @property({ reflect: true }) icon = 'angle-down';

  @colorContextConsumer() private on?: ColorTheme;

  #generatedHtag?: HTMLHeadingElement;

  #logger = new Logger(this);

  #header?: HTMLElement;

  #dir = new DirController(this);

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.#onClick);
    this.hidden = true;
    this.id ||= getRandomId(this.localName);
    this.#initHeader();
  }

  render(): Array<TemplateResult> {
    const { on = '' } = this;
    const rtl = this.#dir.dir === 'rtl';
    const res = [];
    res.push(html`<div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">`);
    switch (this.headingTag) {
      case 'h1': res.push(html`<h1 id="heading">${this.#renderHeaderContent()}</h1>`); break;
      case 'h2': res.push(html`<h2 id="heading">${this.#renderHeaderContent()}</h2>`); break;
      case 'h3': res.push(html`<h3 id="heading">${this.#renderHeaderContent()}</h3>`); break;
      case 'h4': res.push(html`<h4 id="heading">${this.#renderHeaderContent()}</h4>`); break;
      case 'h5': res.push(html`<h5 id="heading">${this.#renderHeaderContent()}</h5>`); break;
      case 'h6': res.push(html`<h6 id="heading">${this.#renderHeaderContent()}</h6>`); break;
      default: res.push(this.#renderHeaderContent());
    }
    res.push(html`</div>`);
    return res;
  }

  async #initHeader() {
    if (this.headingText && !this.headingTag) {
      this.headingTag = 'h3';
    }
    this.#header = this.#getOrCreateHeader();

    // prevent double-logging
    if (this.#header !== this.#generatedHtag) {
      this.#generatedHtag = undefined;
    }

    do {
      await this.updateComplete;
    } while (!await this.updateComplete);

    // Remove the hidden attribute after upgrade
    this.hidden = false;
  }

  #renderAfterButton() {
    // Font-Awesome free angle-down
    // TODO: use rh-icon when it's ready
    return html`
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    `;
  }

  #renderHeaderContent() {
    const headingText = this.headingText?.trim() ?? this.#header?.textContent?.trim();
    return html`
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded) as 'true' | 'false'}">
        <span part="text">${headingText ?? html`
          <slot></slot>`}
        </span>
        ${this.#renderAfterButton?.()}
      </button>
    `;
  }

  #getOrCreateHeader(): HTMLElement | undefined {
    // Check if there is no nested element or nested textNodes
    if (!this.firstElementChild && !this.firstChild) {
      return void this.#logger.warn('No header content provided');
    } else if (this.firstElementChild) {
      const [heading, ...otherContent] = Array.from(this.children)
        .filter((x): x is HTMLElement => !x.hasAttribute('slot') && isPorHeader(x));

      // If there is no content inside the slot, return empty with a warning
      // else, if there is more than 1 element in the slot, capture the first h-tag
      if (!heading) {
        return void this.#logger.warn('No heading information was provided.');
      } else if (otherContent.length) {
        this.#logger.warn('Heading currently only supports 1 tag; extra tags will be ignored.');
      }
      return heading;
    } else {
      if (!this.#generatedHtag) {
        this.#logger.warn('Header should contain at least 1 heading tag for correct semantics.');
      }
      this.#generatedHtag = document.createElement('h3');

      // If a text node was provided but no semantics, default to an h3
      // otherwise, incorrect semantics were used, create an H3 and try to capture the content
      if (this.firstChild?.nodeType === Node.TEXT_NODE) {
        this.#generatedHtag.textContent = this.firstChild.textContent;
      } else {
        this.#generatedHtag.textContent = this.textContent;
      }

      return this.#generatedHtag;
    }
  }

  #onClick(event: MouseEvent) {
    const expanded = !this.expanded;
    const acc = event.composedPath().find(BaseAccordion.isAccordion);
    if (acc) {
      this.dispatchEvent(new AccordionHeaderChangeEvent(expanded, this, acc));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-accordion-header': RhAccordionHeader;
  }
}
