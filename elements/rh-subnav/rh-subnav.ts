import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { property } from 'lit/decorators/property.js';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-subnav.css';

/**
 * Organizes content into sections using tabbed pages
 * @slot - Navigation links, expects collection of `<a>` elements
 *
 * @csspart container - container, `<div>` element
 * @csspart links     - `<slot>` element
 *
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-accent-brand-on-light
 * @cssprop --rh-color-accent-brand-on-dark
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-border-subtle-on-dark
 * @cssprop --rh-color-border-interactive-on-light
 * @cssprop --rh-color-border-interactive-on-dark
 * @cssprop --rh-color-interactive-blue-darker
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-2xl
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-border-width-md
 * @cssprop --rh-border-width-lg
 * @cssprop --rh-color-gray-10
 */
@customElement('rh-subnav')
export class RhSubnav extends LitElement {
  static readonly styles = [styles];

  /** Icon name to use for the scroll left button */
  protected static readonly scrollIconLeft: string = 'angle-left';

  /** Icon name to use for the scroll right button */
  protected static readonly scrollIconRight: string = 'angle-right';

  /** Icon set to use for the scroll buttons */
  protected static readonly scrollIconSet: string = 'fas';

  private static instances = new Set<RhSubnav>();

  static {
    // on resize check for overflows to add or remove scroll buttons
    window.addEventListener('resize', () => {
      // this appears to be an eslint bug.
      // `this` should refer to the class, but in the minified bundle, it is void
      const { instances } = RhSubnav;
      for (const instance of instances) {
        instance.#overflow.onScroll();
      }
    }, { capture: false });
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

  @queryAssignedElements() private links!: HTMLAnchorElement[];

  @query('[part="links"]') private linkList!: HTMLElement;

  #allLinkElements: HTMLAnchorElement[] = [];

  #tabindex = new RovingTabindexController(this);

  #overflow = new OverflowController(this);

  #mo = new MutationObserver(() => this.#update());

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

  get #activeItem(): HTMLAnchorElement {
    const activeLink = this.#allLinks.find(link => link.matches('[active]'));
    return activeLink ?? this.#firstLink;
  }

  connectedCallback() {
    super.connectedCallback();
    RhSubnav.instances.add(this);
    this.#mo.observe(this, { subtree: true, attributes: true, attributeFilter: ['active'] });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    RhSubnav.instances.delete(this);
    this.#mo.disconnect();
  }

  render() {
    const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor as typeof RhSubnav;
    const { showScrollButtons } = this.#overflow;
    const { on = '' } = this;
    return html`
      <nav part="container" class="${classMap({ [on]: !!on })}">${!showScrollButtons ? '' : html`
        <button id="previous" tabindex="-1" aria-hidden="true"
                ?disabled="${!this.#overflow.overflowLeft}"
                @click="${this.#scrollLeft}">
          <pf-icon size="sm"
                   icon="${scrollIconLeft}"
                   set="${scrollIconSet}"
                   loading="eager"></pf-icon>
        </button>`}
        <slot part="links"
              @slotchange="${this.#onSlotchange}"></slot>${!showScrollButtons ? '' : html`
        <button id="next" tabindex="-1" aria-hidden="true"
                ?disabled="${!this.#overflow.overflowRight}"
                @click="${this.#scrollRight}">
          <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
        </button>`}
      </nav>
    `;
  }

  firstUpdated() {
    this.linkList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
  }

  #update() {
    this.#tabindex.updateActiveItem(this.#activeItem);
  }

  #onSlotchange() {
    this.#allLinks = this.links;
    this.#tabindex.initItems(this.#allLinks);
    this.#overflow.init(this.linkList, this.#allLinks);
    this.#firstLastClasses();
    this.#update();
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
