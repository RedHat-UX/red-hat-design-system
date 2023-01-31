import { LitElement, html } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';

import { isElementInView } from '@patternfly/pfe-core/functions/isElementInView.js';

import styles from './rh-subnav.css';

/**
 * Subnav
 * @slot - Place element content here
 */
@customElement('rh-subnav')
export class RhSubnav extends LitElement {
  static readonly styles = [styles];

  static isLink(element: HTMLAnchorElement): element is HTMLAnchorElement {
    return element instanceof HTMLAnchorElement;
  }

  @queryAssignedElements() private links!: HTMLAnchorElement[];

  @query('[part="links"]') private linkList!: HTMLElement;

  #_allLinks: HTMLAnchorElement[] = [];

  #showScrollButtons = false;

  #overflowOnLeft = false;

  #overflowOnRight = false;

  #scrollTimeout?: ReturnType<typeof setTimeout>;

  get #allLinks() {
    return this.#_allLinks;
  }

  set #allLinks(links: HTMLAnchorElement[]) {
    this.#_allLinks = links.filter(link => (this.constructor as typeof RhSubnav).isLink(link));
  }

  /** Time in milliseconds to debounce between scroll events and updating scroll button state */
  protected static readonly scrollTimeoutDelay: number = 0;
  /** Icon name to use for the scroll left button */
  protected static readonly scrollIconLeft: string = 'angle-left';
  /** Icon name to use for the scroll right button */
  protected static readonly scrollIconRight: string = 'angle-right';
  /** Icon set to use for the scroll buttons */
  protected static readonly scrollIconSet: string = 'fas';

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.#setOverflowState();
    window.addEventListener('resize', () => {
      this.#onScroll();
    }, { capture: false });
  }

  render() {
    const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor as typeof RhSubnav;

    return html`
      <nav part="container">${!this.#showScrollButtons ? '' : html`
        <button id="previousLink"
            aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
            ?disabled="${!this.#overflowOnLeft}"
            @click="${this.#scrollLeft}">
          <pfe-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pfe-icon>
        </button>`}
        <slot part="links" @slotchange="${this.#onSlotchange}"></slot> ${!this.#showScrollButtons ? '' : html`
        <button id="nextLink"
            aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
            ?disabled="${!this.#overflowOnRight}"
            @click="${this.#scrollRight}">
          <pfe-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pfe-icon>
        </button>`}
      </nav>
    `;
  }

  /** override to prevent scroll buttons from showing */
  protected get canShowScrollButtons() {
    return true;
  }

  get #firstLink(): HTMLAnchorElement {
    const [link] = this.#allLinks;
    return link;
  }

  get #lastLink(): HTMLAnchorElement {
    return this.#allLinks.at(-1) as HTMLAnchorElement;
  }

  #onSlotchange() {
    this.#allLinks = this.links;
    this.#firstLastClasses();
  }

  #firstLastClasses() {
    this.#firstLink.classList.add('first');
    this.#lastLink.classList.add('last');
  }

  #onScroll = () => {
    clearTimeout(this.#scrollTimeout);
    const { scrollTimeoutDelay } = (this.constructor as typeof RhSubnav);
    this.#scrollTimeout = setTimeout(() => this.#setOverflowState(), scrollTimeoutDelay);
  };

  #setOverflowState(): void {
    const { canShowScrollButtons } = this;
    this.#overflowOnLeft = canShowScrollButtons && !isElementInView(this.linkList, this.#firstLink);
    this.#overflowOnRight = canShowScrollButtons && !isElementInView(this.linkList, this.#lastLink);
    this.#showScrollButtons = canShowScrollButtons && (this.#overflowOnLeft || this.#overflowOnRight);
    this.requestUpdate();
  }

  #scrollLeft(): void {
    const container = this.linkList;
    const childrenArr = this.#allLinks;
    let firstElementInView: HTMLAnchorElement | undefined;
    let lastElementOutOfView: HTMLAnchorElement | undefined;
    for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
      if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
        firstElementInView = childrenArr[i];
        lastElementOutOfView = childrenArr[i - 1];
      }
    }
    if (lastElementOutOfView) {
      container.scrollLeft -= lastElementOutOfView.scrollWidth;
    }
    this.#setOverflowState();
  }

  #scrollRight(): void {
    const container = this.linkList;
    const childrenArr = this.#allLinks;
    let lastElementInView: HTMLAnchorElement | undefined;
    let firstElementOutOfView: HTMLAnchorElement | undefined;
    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
      if (isElementInView(container, childrenArr[i] as HTMLElement, false)) {
        lastElementInView = childrenArr[i];
        firstElementOutOfView = childrenArr[i + 1];
      }
    }
    if (firstElementOutOfView) {
      container.scrollLeft += firstElementOutOfView.scrollWidth;
    }
    this.#setOverflowState();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-subnav': RhSubnav;
  }
}
