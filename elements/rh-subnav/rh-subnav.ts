import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
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
@colorPalettes
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

  @state() private hasNavigationLinks = false;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   * @deprecated `<rh-subnav>` reacts to the parent set color-scheme and should not set its own color-palette. 
   * The color-palette attribute will be removed in a future release.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

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


  @query('[part="links"]') private linkList!: HTMLElement;


  get #allLinks() {
    return this.#allLinkElements;
  }

  set #allLinks(links: HTMLElement[]) {
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
                  aria-label="${this.labelScrollLeft}"
                  ?disabled="${!this.#overflow.overflowLeft}"
                  @click="${this.#onClickScroll}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
        <!--
          slot:
            description: Sub navigation links, expects collection of \`<a>\` or \`<rh-navigation-link>\` elements
            Slotting a \`<a>\` element is deprecated and will be removed in a future release. Use \`<rh-navigation-link>\` instead.
          part:
            description: the anonymous slot
        -->
        <div role="${ifDefined(this.hasNavigationLinks ? 'list' : undefined)}" part="links"><slot @slotchange="${this.#onSlotchange}"></slot></div>
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
      const assignedElements = (slot?.assignedElements() || []) as HTMLElement[];

      // Only use role="list" if we have rh-navigation-link elements
      this.hasNavigationLinks = assignedElements.some(el => el instanceof RhNavigationLink);

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
