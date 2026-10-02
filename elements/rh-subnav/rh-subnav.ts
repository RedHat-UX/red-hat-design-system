import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';

import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';

import { RhNavigationLink } from '@rhds/elements/rh-navigation-link/rh-navigation-link.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-subnav.css' with { type: 'css' };


/**
 * A subnavigation provides a horizontal list of links for navigating
 * related pages. Authors should slot `<rh-navigation-link>` elements as
 * children. Each link must have visible text content for accessibility.
 * When more than one subnav appears on a page, authors should set
 * `accessible-label` so screen readers can distinguish them.
 *
 * Overflow scroll buttons appear when links exceed the available space.
 * All links are keyboard accessible via Tab and Enter.
 *
 * @summary Displays a horizontal list of navigation links for related pages
 *
 * @alias Subnavigation
 *
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
  @property({ reflect: true, attribute: 'label-scroll-left' })
  labelScrollLeft = 'Scroll back';

  /**
   * Label for the scroll forward button
   */
  @property({ reflect: true, attribute: 'label-scroll-right' })
  labelScrollRight = 'Scroll forward';


  @query('#link-container') private linkList!: HTMLElement;


  get #allLinks() {
    return this.#allLinkElements;
  }

  set #allLinks(links: RhNavigationLink[]) {
    this.#allLinkElements = links.filter(link => link);
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
      <!-- The nav container wrapping the link list -->
      <nav part="container"
           aria-label="${this.accessibleLabel}">
        ${!this.#overflow.showScrollButtons ? '' : html`
          <button id="previous"
                  tabindex="-1"
                  data-direction="start"
                  aria-label="${this.labelScrollLeft}"
                  ?disabled="${!this.#overflow.overflowLeft}"
                  @click="${this.#onClickScroll}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
        <div id="link-container" role="list">
          <!--
            part:
              description: The scrollable link list container
            slot:
              summary: Sub navigation links
              description: |
                Expects a collection of \`<rh-navigation-link>\` elements.
                Each link must have text content for screen readers.
          -->
          <div part="links">
            <slot @slotchange="${this.#onSlotchange}"></slot>
          </div>
        </div>
        ${!this.#overflow.showScrollButtons ? '' : html`
          <button id="next"
                  tabindex="-1"
                  data-direction="end"
                  aria-label="${this.labelScrollRight}"
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
      const assignedElements = (slot?.assignedElements() || [])
          .filter(el => el instanceof RhNavigationLink);

      this.#allLinks = assignedElements;

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
