import { LitElement, PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RHDSScreenSizeController } from '../../lib/RHDSScreenSizeController.js';

import styles from './rh-pagination.css';

/**
 * Pagination
 * @slot - Place element content here
 */
@customElement('rh-pagination')
export class RhPagination extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property() type: 'serp' | 'data' = 'serp';

  @property({ reflect: true }) overflow: 'start' | 'end' | 'both' | null = null;

  #screenSize = new RHDSScreenSizeController(this);
  #logger = new Logger(this);
  #nav: HTMLElement | null = this.querySelector('nav');
  #links = this.#nav?.querySelectorAll<HTMLAnchorElement>('li a');
  #currentIndex: number | null = null;
  #currentLink: HTMLAnchorElement | null = this.#getCurrentLink();
  #nextLink: HTMLAnchorElement | null = null;
  #prevLink: HTMLAnchorElement | null = null;
  #lastLink: HTMLAnchorElement | null = null;

  update(changed: PropertyValues<this>): void {
    this.#update();
    super.update(changed);
  }

  render() {
    const { mobile, size } = this.#screenSize;
    return html`
    <div id="container" class=${classMap({ mobile, [size as string]: true })}>
      <a id="prev" class="stepper" href=${ifDefined(this.#prevLink?.href)}>
        <slot name="prev-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path d="M810.709 85.094c0 8.906-3.448 16.777-10.285 23.615 0 0-403.234 403.234-403.234 403.234s403.234 403.233 403.234 403.233c6.837 6.838 10.285 14.709 10.285 23.615s-3.448 16.778-10.285 23.615c0 0-51.309 51.309-51.309 51.309-6.838 6.838-14.709 10.285-23.615 10.285s-16.777-3.447-23.615-10.285c0 0-478.1-478.1-478.1-478.1-6.838-6.838-10.285-14.709-10.285-23.615s3.447-16.777 10.285-23.615c0 0 478.1-478.1 478.1-478.1 6.838-6.838 14.709-10.285 23.615-10.285s16.777 3.447 23.615 10.285c0 0 51.309 51.309 51.309 51.309 6.837 6.837 10.285 14.709 10.285 23.615 0 0 0-0.115 0-0.115"></path>
          </svg>
        </slot>
      </a>
      <div id="nav-container" ?hidden=${mobile}>
        <slot @slotchange=${this.#update}></slot>
      </div>
      <a id="next" class="stepper" href=${ifDefined(this.#nextLink?.href)}>
        <slot name="next-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path d="M810.709 85.094c0 8.906-3.448 16.777-10.285 23.615 0 0-403.234 403.234-403.234 403.234s403.234 403.233 403.234 403.233c6.837 6.838 10.285 14.709 10.285 23.615s-3.448 16.778-10.285 23.615c0 0-51.309 51.309-51.309 51.309-6.838 6.838-14.709 10.285-23.615 10.285s-16.777-3.447-23.615-10.285c0 0-478.1-478.1-478.1-478.1-6.838-6.838-10.285-14.709-10.285-23.615s3.447-16.777 10.285-23.615c0 0 478.1-478.1 478.1-478.1 6.838-6.838 14.709-10.285 23.615-10.285s16.777 3.447 23.615 10.285c0 0 51.309 51.309 51.309 51.309 6.837 6.837 10.285 14.709 10.285 23.615 0 0 0-0.115 0-0.115"></path>
          </svg>
        </slot>
      </a>
      <div id="numeric" ?hidden=${!(this.type === 'data' || mobile)}>
        <span id="go-to-page">
          <slot name="go-to-page">Go to page</slot>
        </span>
        <input inputmode="numeric" aria-labelledby="go-to-page" value="${this.#currentIndex + 1}"/>
        <slot name="out-of">of</slot>
        <a href=${ifDefined(this.#lastLink?.href)}>${this.#links?.length}</a>
      </div>
    </div>
    `;
  }

  #getOverflow(): 'start' | 'end' | 'both' | null {
    if (this.#currentIndex === null) {
      return null;
    }

    const overflowAt = this.type === 'serp' ? 9 : 6;
    const length = this.#links?.length ?? 0;
    const current = this.#currentIndex + 1;

    if (current > (overflowAt - 4) && current < (length - 4)) {
      return 'both';
    } else if (current <= (overflowAt - 4)) {
      return 'end';
    } else {
      return 'start';
    }
  }

  #update() {
    // NB: order of operations! must set up state
    this.#nav = this.querySelector('nav');
    this.#links = this.querySelectorAll('li a');
    this.#lastLink = this.querySelector('li:last-child a');
    this.#currentLink = this.#getCurrentLink();
    if (this.#currentLink) {
      const links = Array.from(this.#links);
      this.#currentIndex = links.indexOf(this.#currentLink);
      // TODO: index bounds
      this.#prevLink = this.#links[this.#currentIndex - 1];
      this.#nextLink = this.#links[this.#currentIndex + 1];
      for (const link of this.querySelectorAll('[data-page]')) {
        link.removeAttribute('data-page');
      }
      this.#currentLink.closest('li')?.setAttribute('data-page', 'current');
      this.#prevLink?.closest('li')?.setAttribute('data-page', 'previous');
      this.#nextLink?.closest('li')?.setAttribute('data-page', 'next');
    }
    this.overflow = this.#getOverflow();
    this.#validateA11y();
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

  #validateA11y() {
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
