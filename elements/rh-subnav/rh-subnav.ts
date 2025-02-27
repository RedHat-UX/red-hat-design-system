import { LitElement, html, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { property } from 'lit/decorators/property.js';

import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-subnav.css';


/**
 * A subnavigation allows users to navigate between a small number of page links.
 * @summary Organizes content into sections using tabbed pages
 * @slot - Navigation links, expects collection of `<a>` elements
 * @csspart container - container, `<div>` element
 * @csspart links     - `<slot>` element
 */
@customElement('rh-subnav')
export class RhSubnav extends LitElement {
  static readonly styles = [styles];

  /** Icon name to use for the scroll left button */
  protected static readonly scrollIconLeft = 'caret-left';

  /** Icon name to use for the scroll right button */
  protected static readonly scrollIconRight = 'caret-right';

  /** Icon set to use for the scroll buttons */
  protected static readonly scrollIconSet = 'ui';

  private static instances = new Set<RhSubnav>();

  static {
    // on resize check for overflows to add or remove scroll buttons
    if (!isServer) {
      globalThis.addEventListener('resize', () => {
      // this appears to be an eslint bug.
      // `this` should refer to the class, but in the minified bundle, it is void
        const { instances } = RhSubnav;
        for (const instance of instances) {
          instance.#overflow.onScroll();
        }
      }, { capture: false });
    }
  }

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "subnavigation" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'subnavigation';

  @queryAssignedElements() private links!: HTMLAnchorElement[];

  @query('[part="links"]') private linkList!: HTMLElement;

  #allLinkElements: HTMLAnchorElement[] = [];

  #overflow = new OverflowController(this);

  get #allLinks() {
    return this.#allLinkElements;
  }

  set #allLinks(links: HTMLAnchorElement[]) {
    this.#allLinkElements = links.filter(link => link instanceof HTMLAnchorElement);
  }

  get #firstLink(): HTMLAnchorElement {
    const [link] = this.#allLinks;
    return link;
  }

  get #lastLink(): HTMLAnchorElement {
    return this.#allLinks.at(-1) as HTMLAnchorElement;
  }

  connectedCallback() {
    super.connectedCallback();
    RhSubnav.instances.add(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    RhSubnav.instances.delete(this);
  }

  render() {
    const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor as typeof RhSubnav;
    const { showScrollButtons } = this.#overflow;
    const { on = 'light' } = this;
    return html`
      <nav part="container" aria-label="${this.accessibleLabel}" class="${classMap({ on: true, [on]: !!on })}">${!showScrollButtons ? '' : html`
        <button id="previous" tabindex="-1" aria-hidden="true"
                ?disabled="${!this.#overflow.overflowLeft}"
                @click="${this.#scrollLeft}">
          <rh-icon icon="${scrollIconLeft}"
                   set="${scrollIconSet}"
                   loading="eager"></rh-icon>
        </button>`}
        <slot part="links"
              @slotchange="${this.#onSlotchange}"></slot>${!showScrollButtons ? '' : html`
        <button id="next" tabindex="-1" aria-hidden="true"
                ?disabled="${!this.#overflow.overflowRight}"
                @click="${this.#scrollRight}">
          <rh-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></rh-icon>
        </button>`}
      </nav>
    `;
  }

  firstUpdated() {
    this.linkList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
  }

  #onSlotchange() {
    this.#allLinks = this.links;
    this.#overflow.init(this.linkList, this.#allLinks);
    this.#firstLastClasses();
  }

  #firstLastClasses() {
    this.#firstLink.classList.add('first');
    this.#lastLink.classList.add('last');
  }

  #scrollLeft() {
    this.#overflow.scrollLeft();
  }

  #scrollRight() {
    this.#overflow.scrollRight();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-subnav': RhSubnav;
  }
}
