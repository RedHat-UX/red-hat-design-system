import type { PropertyValues } from 'lit';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-pagination.css' with { type: 'css' };

const L1 = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M.3 6.26 6.24.3C6.63-.1 7.3-.1 7.7.3l.99.99c.4.4.4 1.07 0 1.48L4.49 7l4.2 4.22c.41.4.41 1.07 0 1.48l-.98 1c-.41.4-1.07.4-1.48 0L.31 7.73a1.05 1.05 0 0 1 0-1.48Z"/>
  </svg>`;

const L2 = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.44 14">
    <path d="M8.7 6.26 14.66.3a1.05 1.05 0 0 1 1.49 0l.98.99c.42.4.42 1.07 0 1.48L12.92 7l4.2 4.22c.42.4.42 1.07 0 1.48l-.98 1c-.41.4-1.08.4-1.48 0L8.7 7.73a1.05 1.05 0 0 1 0-1.48zM.3 7.74l5.96 5.95c.4.41 1.07.41 1.48 0l.99-.99c.4-.4.4-1.07 0-1.48L4.52 7l4.21-4.22c.41-.4.41-1.07 0-1.48l-.99-1a1.05 1.05 0 0 0-1.48 0L.31 6.27a1.05 1.05 0 0 0 0 1.48z"/>
  </svg>`;

/**
 * Provides page navigation for content using stepper buttons, numbered
 * links, and a page-input field. Authors MUST provide an `<ol>` with
 * `<li><a>` page links. SHOULD use `aria-current="page"` on the active
 * link. Screen readers announce the `<nav>` landmark via `label`. Tab
 * moves focus through steppers and input; Enter activates.
 *
 * @summary Navigate between pages of content with steppers and input
 *
 * @alias pagination
 *
 */
@customElement('rh-pagination')
@themable
export class RhPagination extends LitElement {
  static readonly styles = [styles];

  private static instances = new Set<RhPagination>();

  static {
    if (!isServer) {
      globalThis.addEventListener('hashchange', () => {
        for (const instance of RhPagination.instances) {
          instance.requestUpdate();
        }
      });
    }
  }

  /**
   * Controls which end(s) of the page list are truncated with ellipsis.
   * Accepts `'start'` | `'end'` | `'both'` | `null`. Computed automatically
   * from page count and current index. Reflected to the host attribute so
   * light-DOM CSS can hide overflow `<li>` elements. Defaults to `null`.
   */
  @property({ reflect: true }) overflow: 'start' | 'end' | 'both' | null = null;

  /** Accessible label for the `<nav>` landmark. SHOULD be unique when multiple paginations exist on a page. Defaults to `'Page navigation'`. */
  @property() label = 'Page navigation';

  /** Accessible label for the first-page stepper button. Used by screen readers. Defaults to `'first page'`. */
  @property({ attribute: 'label-first' }) labelFirst = 'first page';

  /** Accessible label for the previous-page stepper button. Used by screen readers. Defaults to `'previous page'`. */
  @property({ attribute: 'label-previous' }) labelPrevious = 'previous page';

  /** Accessible label for the next-page stepper button. Used by screen readers. Defaults to `'next page'`. */
  @property({ attribute: 'label-next' }) labelNext = 'next page';

  /** Accessible label for the last-page stepper button. Used by screen readers. Defaults to `'last page'`. */
  @property({ attribute: 'label-last' }) labelLast = 'last page';

  /** Controls pagination size. Accepts `'sm'` for smaller touch targets (WCAG AA) or `null` for default (WCAG AAA). Defaults to `null`. */
  @property({ reflect: true }) size: 'sm' | null = null;

  /** Visual variant. Accepts `'open'` for transparent backgrounds with bottom borders, or `null` for the default box variant. Defaults to `null`. */
  @property({ reflect: true, converter: {
    fromAttribute(value: string | null) {
      // Silent aliasing: convert 'open' to 'borderless'
      return value === 'open' ? 'borderless' : value as 'borderless' | null;
    },
  } }) variant?: 'borderless' | null = null;

  @query('input') private input?: HTMLInputElement;

  #mo = new MutationObserver(() => this.requestUpdate());
  #logger = new Logger(this);

  #ol = isServer ? null : this.querySelector('ol');
  #links = this.#ol?.querySelectorAll<HTMLAnchorElement>('li a');

  #firstLink: HTMLAnchorElement | null = null;
  #lastLink: HTMLAnchorElement | null = null;
  #nextLink: HTMLAnchorElement | null = null;
  #prevLink: HTMLAnchorElement | null = null;
  #currentLink = this.#getCurrentLink();
  #currentIndex = 0;

  @state() private total = 0;
  @state() private firstHref?: string;
  @state() private lastHref?: string;
  @state() private nextHref?: string;
  @state() private prevHref?: string;
  @state() private currentHref?: string;

  get #currentPage() {
    return this.#currentIndex + 1;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    RhPagination.instances.add(this);
    // Validate DOM
    if (!isServer) {
      this.#mo.observe(this, { childList: true, subtree: true });
      if (!this.#ol || [...this.children].filter(x => !x.slot).length > 1) {
        this.#logger.warn('must have a single <ol> element as it\'s only child');
      }
      this.#currentLink = this.#getCurrentLink();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    RhPagination.instances.delete(this);
    this.#mo.disconnect();
  }

  override update(changed: PropertyValues<this>): void {
    if (!isServer) {
      this.#updateLightDOMRefs();
      this.total = this.#links?.length ?? 0;
      this.firstHref = this.#firstLink?.href;
      this.lastHref = this.#lastLink?.href;
      this.prevHref = this.#prevLink?.href;
      this.nextHref = this.#nextLink?.href;
      this.currentHref = this.#currentLink?.href;
      this.overflow = this.#getOverflow();
    }
    super.update(changed);
  }

  override updated() {
    if (!isServer && this.hasUpdated) {
      this.#checkValidity();
    }
  }

  override render() {
    const {
      label,
      labelFirst,
      labelPrevious,
      labelNext,
      labelLast,
      firstHref,
      prevHref,
      nextHref,
      lastHref,
    } = this;
    const currentPage = this.#currentPage.toString();

    return html`
      <!-- The outer flex container wrapping stepper buttons, nav, and numeric input -->
      <div id="container" part="container">
        <a id="first"
           class="stepper"
           href="${ifDefined(firstHref)}"
           ?inert="${!firstHref || this.#currentLink === this.#firstLink}"
           aria-label="${labelFirst}">${L2}</a>
        <a id="prev"
           class="stepper"
           href="${ifDefined(prevHref)}"
           ?inert="${!prevHref || this.#currentLink === this.#prevLink || this.#currentLink === this.#firstLink}"
           aria-label="${labelPrevious}">${L1}</a>
        <nav aria-label="${label}">
          <!-- summary: page link list (default slot)
               description: |
                 An \`<ol>\` containing \`<li><a>\` elements for each page. The
                 active page link MUST have \`aria-current="page"\` or match the
                 current URL. Screen readers announce this as a navigation
                 landmark labeled by the \`label\` property. -->
          <slot></slot>
        </nav>
        <a id="next"
           class="stepper"
           href="${ifDefined(nextHref)}"
           ?inert="${!nextHref || this.#currentLink === this.#nextLink || this.#currentLink === this.#lastLink}"
           aria-label="${labelNext}">${L1}</a>
        <a id="last"
           class="stepper"
           href="${ifDefined(lastHref)}"
           ?inert="${!lastHref || this.#currentLink === this.#lastLink}"
           aria-label="${labelLast}">${L2}</a>
        <!-- The container for the page input, separator text, and total page link -->
        <div id="numeric" part="numeric">
          <form @submit="${this.#onSubmit}">
            <label for="page" class="go-to-page-text">
              <!-- summary: page input label text (go-to-page slot)
                   description: |
                     Label text preceding the page number input field. Defaults to
                     "Page". Customize for internationalization. Visually hidden at
                     very small widths but always accessible to screen readers via
                     \`aria-labelledby\`. -->
              <slot name="go-to-page">
                Page
              </slot>
            </label>
            <input id="page"
                   type="number"
                   enterkeyhint="go"
                   required
                   name="page"
                   min=1
                   max="${this.total}"
                   .value="${currentPage}">
          </form>
        <!-- summary: preposition text between page input and total (default: "of")
             description: |
               Contains the text displayed between the current page input field and the total page count.
               Defaults to "of" but can be customized for internationalization or alternate phrasing. -->
          <slot ?hidden="${!this.total}" name="out-of">of</slot>
          <a ?hidden="${!this.total}" href="${ifDefined(lastHref)}">${this.total}</a>
        </div>
      </div>
    `;
  }

  #getOverflow(): 'start' | 'end' | 'both' | null {
    const overflowAt = 9;
    const length = this.total;
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
    if (isServer) {
      return null;
    }
    for (const link of this.#links ?? []) {
      if (!link.href) {
        return null;
      }
      const url = new URL(link.href);
      if (url.pathname === location.pathname
        && url.search === location.search
        && url.hash === location.hash) {
        return link;
      }
    }
    return this.querySelector<HTMLAnchorElement>('li a[aria-current="page"]')
      ?? (this.#logger.warn('could not determine current link'), null);
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
      // if any other links have aria-current="page", remove it unless it is the current link
      for (const link of links) {
        if (link === this.#currentLink) {
          continue;
        }
        if (link.getAttribute('aria-current') === 'page') {
          link.removeAttribute('aria-current');
        }
      }

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
    // Validate user input
    if (this.input && this.#links) {
      if (Number.isNaN(this.#currentPage)) {
        message = `${this.#currentPage} is not a valid page number`;
      } else if (this.#currentPage > this.total || this.#currentPage < 1) {
        message = `cannot navigate to page ${this.#currentPage}`;
      }
      this.input.setCustomValidity(message);
    }
    if (message) {
      this.#logger.warn(this.input?.validationMessage || 'could not navigate');
    }
    return !message;
  }

  /**
   * Navigate by clicking the corresponding link element.
   * Numeric ids click light DOM links synchronously (preserving user gesture).
   * String ids click shadow DOM steppers after rendering ensures their href is set.
   * After the click, request an update in case a SPA prevented full navigation.
   * @param id stepper name or 1-based page number
   */
  async #go(id: 'first' | 'prev' | 'next' | 'last' | number) {
    if (typeof id === 'number') {
      this.#links?.[id - 1]?.click();
    } else {
      await this.updateComplete;
      this.shadowRoot?.getElementById(id)?.click();
    }
    this.requestUpdate();
    await this.updateComplete;
  }

  #onSubmit(event: Event) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement | null)?.querySelector('input');
    if (!input || !this.#links) {
      return;
    }
    const newValue = parseInt(input.value);
    this.#currentIndex = newValue - 1;
    if (this.#checkValidity()) {
      this.#go(this.#currentPage);
    } else {
      input.reportValidity();
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

  /**
   * Navigate to a specific page
   * @param page
   */
  go(page: 'first' | 'prev' | 'next' | 'last' | number) {
    return this.#go(page);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-pagination': RhPagination;
  }
}
