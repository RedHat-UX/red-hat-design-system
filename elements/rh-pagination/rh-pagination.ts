import { LitElement, PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
 * Pagination
 * @slot - Place element content here
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

  /** Accessible label for the 'first page' button */
  @property({ attribute: 'label-first' }) labelFirst = 'first page';
  /** Accessible label for the 'previous page' button */
  @property({ attribute: 'label-previous' }) labelPrevious = 'previous page';
  /** Accessible label for the 'next page' button */
  @property({ attribute: 'label-next' }) labelNext = 'next page';
  /** Accessible label for the 'last page' button */
  @property({ attribute: 'label-last' }) labelLast = 'last page';

  #screenSize = new ScreenSizeController(this);
  #logger = new Logger(this);

  #nav = this.querySelector('nav');
  #links = this.#nav?.querySelectorAll<HTMLAnchorElement>('li a');
  #currentLink = this.#getCurrentLink();

  #currentIndex = -1;
  #firstLink: HTMLAnchorElement | null = null;
  #lastLink: HTMLAnchorElement | null = null;
  #nextLink: HTMLAnchorElement | null = null;
  #prevLink: HTMLAnchorElement | null = null;

  update(changed: PropertyValues<this>): void {
    this.#update();
    super.update(changed);
  }

  render() {
    const { mobile, size } = this.#screenSize;
    const { labelFirst, labelPrevious, labelNext, labelLast } = this;
    const firstHref = this.#currentLink === this.#firstLink ? undefined : this.#firstLink?.href;
    const prevHref = this.#prevLink?.href;
    const nextHref = this.#nextLink?.href;
    const lastHref = this.#currentLink === this.#lastLink ? undefined : this.#lastLink?.href;
    return html`
      <div id="container" class=${classMap({ mobile, [size as string]: true })}>
        <a id="first" class="stepper" href=${ifDefined(firstHref)} aria-label=${labelFirst}>${L2}</a>
        <a id="prev" class="stepper" href=${ifDefined(prevHref)} aria-label=${labelPrevious}>${L1}</a>

        <div id="nav-container" ?hidden=${mobile}>
          <slot @slotchange=${this.#update}></slot>
        </div>

        <a id="next" class="stepper" href=${ifDefined(nextHref)} aria-label=${labelNext}>${L1}</a>
        <a id="last" class="stepper" href=${ifDefined(lastHref)} aria-label=${labelLast}>${L2}</a>

        <div id="numeric" ?hidden=${!mobile} ?inert=${!mobile}>
          <span id="go-to-page">
            <slot name="go-to-page">Go to page</slot>
          </span>
          <input inputmode="numeric" aria-labelledby="go-to-page" value=${(this.#currentIndex ?? 0) + 1} />
          <slot name="out-of">of</slot>
          <a href=${ifDefined(lastHref)}>${this.#links?.length}</a>
        </div>
      </div>
    `;
  }

  #update() {
    this.#updateLightDOMRefs();
    this.overflow = this.#getOverflow();
    this.#validateA11y();
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
    this.#nav = this.querySelector('nav');
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
    }
  }

  #validateA11y(): void {
    if (!this.#nav || this.children.length > 1) {
      this.#logger.warn('must have a single <nav> element as it\'s only child');
    }
    if (!this.#nav?.getAttribute('aria-label')) {
      this.#logger.warn('<nav> must have an aria-label attribute');
      this.#nav?.setAttribute('aria-label', 'Pagination Navigation');
    }
    if (!this.#nav?.querySelector('ol')) {
      this.#logger.warn('<nav> must have an <ol> as it\'s only child');
    }
    if (this.#currentLink?.getAttribute('aria-current') !== 'page') {
      this.#currentLink?.setAttribute('aria-current', 'page');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-pagination': RhPagination;
  }
}
