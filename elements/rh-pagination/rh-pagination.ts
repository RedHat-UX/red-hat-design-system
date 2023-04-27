import type { PropertyValues } from 'lit';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-pagination.css';

const L1 = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M.3 6.26 6.24.3C6.63-.1 7.3-.1 7.7.3l.99.99c.4.4.4 1.07 0 1.48L4.49 7l4.2 4.22c.41.4.41 1.07 0 1.48l-.98 1c-.41.4-1.07.4-1.48 0L.31 7.73a1.05 1.05 0 0 1 0-1.48Z"/>
  </svg>`;

const L2 = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.44 14">
    <path d="M8.7 6.26 14.66.3a1.05 1.05 0 0 1 1.49 0l.98.99c.42.4.42 1.07 0 1.48L12.92 7l4.2 4.22c.42.4.42 1.07 0 1.48l-.98 1c-.41.4-1.08.4-1.48 0L8.7 7.73a1.05 1.05 0 0 1 0-1.48zM.3 7.74l5.96 5.95c.4.41 1.07.41 1.48 0l.99-.99c.4-.4.4-1.07 0-1.48L4.52 7l4.21-4.22c.41-.4.41-1.07 0-1.48l-.99-1a1.05 1.05 0 0 0-1.48 0L.31 6.27a1.05 1.05 0 0 0 0 1.48z"/>
  </svg>`;

/**
 * A paginator allows users to navigate between pages of related content.
 *
 * @summary Allows users to navigate between pages of related content.
 *
 * @slot            - An ordered list of links
 * @slot go-to-page - "go to page" text
 * @slot out-of     - "of" text
 *
 * @csspart
 * @fires
 * @cssprop
 */
@customElement('rh-pagination')
export class RhPagination extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /**
   * Override `overflow` values set from HTML or JS.
   * `overflow` should ideally be private, but because
   * we can't do `::slotted(nav ol li)`, we need to reflect
   * it to a host attribute, so that lightdom CSS can target
   * the list items.
   */
  @property({ reflect: true }) overflow: 'start' | 'end' | 'both' | null = null;

  /** Accessible label for the 'nav' element */
  @property() label = 'Page navigation';

  /** Accessible label for the 'first page' button */
  @property({ attribute: 'label-first' }) labelFirst = 'first page';

  /** Accessible label for the 'previous page' button */
  @property({ attribute: 'label-previous' }) labelPrevious = 'previous page';

  /** Accessible label for the 'next page' button */
  @property({ attribute: 'label-next' }) labelNext = 'next page';

  /** Accessible label for the 'last page' button */
  @property({ attribute: 'label-last' }) labelLast = 'last page';

  @query('input') private input?: HTMLInputElement;

  #mo = new MutationObserver(() => this.#update());
  #screen = new ScreenSizeController(this);
  #logger = new Logger(this);

  #ol = this.querySelector('ol');
  #links = this.#ol?.querySelectorAll<HTMLAnchorElement>('li a');

  #firstLink: HTMLAnchorElement | null = null;
  #lastLink: HTMLAnchorElement | null = null;
  #nextLink: HTMLAnchorElement | null = null;
  #prevLink: HTMLAnchorElement | null = null;
  #currentLink = this.#getCurrentLink();
  #currentIndex = 0;
  get #currentPage() {
    return this.#currentIndex + 1;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.#mo.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#mo.disconnect();
  }

  update(changed: PropertyValues<this>): void {
    this.#update();
    super.update(changed);
  }

  render() {
    const { mobile, size } = this.#screen;
    const { label, labelFirst, labelPrevious, labelNext, labelLast } = this;
    const firstHref = this.#currentLink === this.#firstLink ? undefined : this.#firstLink?.href;
    const prevHref = this.#prevLink?.href;
    const nextHref = this.#nextLink?.href;
    const lastHref = this.#currentLink === this.#lastLink ? undefined : this.#lastLink?.href;
    const currentPage = this.#currentPage.toString();
    return html`
      <div id="container" class=${classMap({ mobile, [size as string]: true })}>
        <a id="first" class="stepper" href=${ifDefined(firstHref)} ?inert=${!firstHref} aria-label=${labelFirst}>${L2}</a>
        <a id="prev" class="stepper" href=${ifDefined(prevHref)} ?inert=${!prevHref} aria-label=${labelPrevious}>${L1}</a>

        <nav ?hidden=${mobile} ?inert=${mobile} aria-label=${label}>
          <slot></slot>
        </nav>

        <a id="next" class="stepper" href=${ifDefined(nextHref)} ?inert=${!nextHref} aria-label=${labelNext}>${L1}</a>
        <a id="last" class="stepper" href=${ifDefined(lastHref)} ?inert=${!lastHref} aria-label=${labelLast}>${L2}</a>

        <div id="numeric">
          <span id="go-to-page">
            <slot name="go-to-page">Go to page</slot>
          </span>
          <input inputmode="numeric"
              required
              min=1 max=${this.#links?.length ?? 1}
              aria-labelledby="go-to-page"
              @change=${this.#onChange}
              @keyup=${this.#onKeyup}
              .value=${currentPage}>
          <slot name="out-of">of</slot>
          <a href=${ifDefined(lastHref)}>${this.#links?.length}</a>
        </div>
      </div>
    `;
  }

  #update() {
    this.querySelector('[aria-current="page"]')?.removeAttribute('aria-current');
    this.#updateLightDOMRefs();
    this.overflow = this.#getOverflow();
    this.#checkValidity();
  }

  #getOverflow(): 'start' | 'end' | 'both' | null {
    const overflowAt = 9;
    const length = this.#links?.length ?? 0;
    if (length <= overflowAt) {
      return null;
    }

    const current = this.#currentIndex + 1;

    if (current > (overflowAt - 4) && current < (length - 4)) {
      return 'both';
    } else if (current <= (overflowAt - 4)) {
      return 'end';
    } else {
      return 'start';
    }
  }

  #getCurrentLink(): HTMLAnchorElement | null {
    const ariaCurrent = this.querySelector<HTMLAnchorElement>('li a[aria-current="page"]');
    if (ariaCurrent) {
      return ariaCurrent;
    }
    for (const link of this.#links ?? []) {
      const url = new URL(link.href);
      if (url.pathname === location.pathname && url.search === location.search && url.hash === location.hash) {
        return link;
      }
    }
    this.#logger.warn('could not determine current link');
    return null;
  }

  #updateLightDOMRefs(): void {
    // NB: order of operations! must set up state
    this.#ol = this.querySelector('ol');
    this.#links = this.querySelectorAll('li a');
    this.#firstLink = this.querySelector('li:first-child a');
    this.#lastLink = this.querySelector('li:last-child a');
    this.#currentLink = this.#getCurrentLink();
    if (this.#currentLink) {
      const links = Array.from(this.#links);
      this.#currentIndex = links.indexOf(this.#currentLink);
      this.#prevLink = this.#links[this.#currentIndex - 1];
      this.#nextLink = this.#links[this.#currentIndex + 1];
      for (const link of this.querySelectorAll('[data-page]')) {
        link.removeAttribute('data-page');
      }
      this.#currentLink.closest('li')?.setAttribute('data-page', 'current');
      this.#prevLink?.closest('li')?.setAttribute('data-page', 'previous');
      this.#nextLink?.closest('li')?.setAttribute('data-page', 'next');
      if (this.#currentLink?.getAttribute('aria-current') !== 'page') {
        this.#currentLink?.setAttribute('aria-current', 'page');
      }
    }
  }

  #checkValidity(): boolean {
    let message = '';
    // Validate DOM
    if (!this.#ol || this.children.length > 1) {
      message = 'must have a single <ol> element as it\'s only child';
    }
    // Validate user input
    if (this.input && this.#links) {
      if (Number.isNaN(this.#currentPage)) {
        message = `${this.#currentPage} is not a valid page number`;
      } else if (this.#currentPage > this.#links.length || this.#currentPage < 1) {
        message = `cannot navigate to page ${this.#currentPage}`;
      }
      this.input.setCustomValidity(message);
    }
    if (message) {
      this.#logger.warn(this.input?.validationMessage || 'could not navigate');
    }
    this.input?.reportValidity();
    return !message;
  }

  /**
   * 1. Normalize the element state
   * 2. validate and act on the input
   * 3. update the element in case a full browser navigation was prevented (e.g. SPA routing)
   */
  async #go(id: 'first' | 'prev' | 'next' | 'last' | number) {
    await this.updateComplete;
    if (typeof id === 'number') {
      const link = this.#links?.[id - 1];
      link?.click?.();
    } else {
      this.shadowRoot?.getElementById(id)?.click();
    }
    this.requestUpdate();
    await this.updateComplete;
    return this.#currentIndex;
  }

  #onKeyup(event: Event) {
    if (!(event.target instanceof HTMLInputElement) || !this.#links) { return; }
    const max = this.#links.length.toString();
    const input = event.target;
    if (parseInt(input.value) > parseInt(max)) {
      input.value = max;
    }
  }

  #onChange() {
    if (!this.input || !this.#links) { return; }
    const inputNum = parseInt(this.input.value);
    this.#currentIndex = inputNum - 1;
    if (this.#checkValidity()) {
      this.#go(this.#currentPage);
    }
  }

  /** Navigate to the first page */
  first() {
    return this.#go('first');
  }

  /** Navigate to the previous page */
  prev() {
    return this.#go('prev');
  }

  /** Navigate to the next page */
  next() {
    return this.#go('next');
  }

  /** Navigate to the last page */
  last() {
    return this.#go('last');
  }

  /** Navigate to a specific page */
  go(page: 'first' | 'prev' | 'next' | 'last' | number) {
    return this.#go(page);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-pagination': RhPagination;
  }
}
