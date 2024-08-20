import type { RhAccordion } from './rh-accordion.js';
import type { RhAccordionContext } from './context.js';

import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { consume } from '@lit/context';

import { context } from './context.js';

import styles from './rh-accordion-header.css';

const isPorHeader =
  (el: Node): el is HTMLElement =>
    el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);

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
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true }) expanded = false;

  @property({ reflect: true, attribute: 'heading-text' }) headingText?: string;

  @property({ reflect: true, attribute: 'heading-tag' }) headingTag?: string;

  @colorContextConsumer() private on?: ColorTheme;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhAccordionContext;

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

  render() {
    const { on = '' } = this;
    const rtl = this.#dir.dir === 'rtl';
    return html`
      <div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">
        ${(() => {
          switch (this.headingTag) {
            case 'h1': return html`<h1 id="heading">${this.#renderHeaderContent()}</h1>`;
            case 'h2': return html`<h2 id="heading">${this.#renderHeaderContent()}</h2>`;
            case 'h3': return html`<h3 id="heading">${this.#renderHeaderContent()}</h3>`;
            case 'h4': return html`<h4 id="heading">${this.#renderHeaderContent()}</h4>`;
            case 'h5': return html`<h5 id="heading">${this.#renderHeaderContent()}</h5>`;
            case 'h6': return html`<h6 id="heading">${this.#renderHeaderContent()}</h6>`;
            default: return this.#renderHeaderContent();
          }
        })()}
      </div>
    `;
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

  #renderHeaderContent() {
    const { accents } = this.ctx ?? {};
    const headingText = this.headingText?.trim() ?? this.#header?.textContent?.trim();

    return html`
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded) as 'true' | 'false'}">
        <span id="header-container" class="${ifDefined(accents)}">
          <span part="text">${headingText ?? html`
          <slot></slot>`}
          </span>
          <span part="accents">
            <slot name="accents"></slot>
          </span>
        </span>
        <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
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
    const acc = event.composedPath().find((x): x is RhAccordion =>
      x instanceof HTMLElement && x.localName === 'rh-accordion');
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
