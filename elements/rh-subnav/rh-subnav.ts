import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';

import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-subnav.css';

/**
 * A subnavigation allows users to navigate between a small number of page links.
 *
 * @summary Organizes content into sections using tabbed pages
 *
 * @alias subnavigation
 */
@customElement('rh-subnav')
@themable
export class RhSubnav extends LitElement {
  static readonly styles = [styles];

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

  #allLinkElements: RhNavigationLink[] = [];

  #overflow = new OverflowController(this);


  /**
   * Customize the default `aria-label` on the `<nav>` container.
   * Defaults to "subnavigation" if no attribute/property is set.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'subnavigation';

  /**
   * Label for the scroll back button
   */
  @property({ reflect: true, attribute: 'label-scroll-back' })
  labelScrollBack = 'Scroll back';

  /**
   * Label for the scroll forward button
   */
  @property({ reflect: true, attribute: 'label-scroll-forward' })
  labelScrollForward = 'Scroll forward';


  @query('[part="links"]') private linkList!: HTMLElement;


  get #allLinks() {
    return this.#allLinkElements;
  }

  set #allLinks(links: RhNavigationLink[]) {
    this.#allLinkElements = links.filter(link => link instanceof RhNavigationLink);
  }


  override connectedCallback() {
    super.connectedCallback();
    RhSubnav.instances.add(this);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    RhSubnav.instances.delete(this);
  }

  protected override firstUpdated() {
    this.linkList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
    this.#onSlotchange();
  }

  override render() {
    return html`
      <!-- container, \`<div>\` element -->
      <nav part="container" 
           aria-label="${this.accessibleLabel}">
        ${!this.#overflow.showScrollButtons ? '' : html`
          <button id="previous"
                  tabindex="-1"
                  data-direction="start"
                  aria-label="${this.labelScrollBack}"
                  ?disabled="${!this.#overflow.overflowLeft}"
                  @click="${this.#onClickScroll}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
        <!--
          slot:
            description: Sub navigation links, expects collection of \`<rh-navigation-link>\` elements
          part:
            description: the anonymous slot
        -->
        <div role="list" part="links"><slot @slotchange="${this.#onSlotchange}"></slot></div>
        ${!this.#overflow.showScrollButtons ? '' : html`
          <button id="next"
                  tabindex="-1"
                  data-direction="end"
                  aria-label="${this.labelScrollForward}"
                  ?disabled="${!this.#overflow.overflowRight}"
                  @click="${this.#onClickScroll}">
            <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
          </button>`}
      </nav>
    `;
  }

  async #onSlotchange() {
    if (!isServer) {
      const slot = this.shadowRoot?.querySelector('slot');
      this.#allLinks = slot?.assignedElements() as RhNavigationLink[];
      this.#overflow.init(this.linkList, this.#allLinks);
      await this.updateComplete;
    }
  }

  #onClickScroll(event: Event) {
    if (event.target instanceof HTMLElement) {
      switch (event.target.dataset.direction) {
        case 'start':
          if (this.matches(':dir(rtl)')) {
            this.#overflow.scrollRight();
          } else {
            this.#overflow.scrollLeft();
          }
          break;
        case 'end':
          if (this.matches(':dir(rtl)')) {
            this.#overflow.scrollLeft();
          } else {
            this.#overflow.scrollRight();
          }
          break;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-subnav': RhSubnav;
  }
}
