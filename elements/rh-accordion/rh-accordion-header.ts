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
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline by default with the header title, between the header and the chevron
 *       (or after the chevron and header in disclosure mode). There is an option to set the accents placement to bottom
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 */
@customElement('rh-accordion-header')
export class RhAccordionHeader extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true }) expanded = false;

  @property({ reflect: true, attribute: 'heading-text' }) headingText?: string;

  @property({ reflect: true, attribute: 'heading-tag' }) headingTag?: string | number;

  /** @deprecated */
  @property({ reflect: true }) icon = 'angle-down';

  @colorContextConsumer() private on?: ColorTheme;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhAccordionContext;

  #dir = new DirController(this);

  #mo = new MutationObserver(() => this.requestUpdate());

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.#onClick);
    this.hidden = true;
    this.id ||= getRandomId(this.localName);
    this.#mo.observe(this, { childList: true });
  }

  render() {
    const { on = '' } = this;
    const rtl = this.#dir.dir === 'rtl';
    const headingTag =
      this.headingTag ?? this.querySelector?.('h1, h2, h3, h4, h5, h6')?.localName ?? 'h3';
    return html`
      <div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">
        ${(() => {
          switch (`h${headingTag}`.replace('hh', 'h')) {
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

  #renderHeaderContent() {
    const { accents } = this.ctx ?? {};
    const headingText = this.headingText ?? this.textContent;

    return html`
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded) as 'true' | 'false'}">
        <span id="header-container" class="${ifDefined(accents)}">
          <span part="text">${headingText?.trim()}</span>
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
