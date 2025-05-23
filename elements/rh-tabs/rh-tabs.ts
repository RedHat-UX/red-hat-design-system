import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { provide } from '@lit/context';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { TabsAriaController } from '@patternfly/pfe-core/controllers/tabs-aria-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { RhTab, TabExpandEvent } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import {
  rhTabsActiveTabContext,
  rhTabsBoxContext,
  rhTabsVerticalContext,
  rhTabsLastTabContext,
  rhTabsManualContext,
  rhTabsFirstTabContext,
} from './context.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tabs.css';

export { RhTab };

/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 * @summary Arranges content in a contained view on the same page
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 * @cssprop {<length>} [--rh-tabs-inset=auto] - Tabs inset
 */
@customElement('rh-tabs')
@colorPalettes
@themable
export class RhTabs extends LitElement {
  static readonly styles = [styles];

  /**
   * Label for the scroll left button
   */
  @property({ reflect: true, attribute: 'label-scroll-left' }) labelScrollLeft = 'Scroll left';

  /**
   * Label for the scroll right button
   */
  @property({ reflect: true, attribute: 'label-scroll-right' }) labelScrollRight = 'Scroll right';

  /**
   * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
   * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
   */
  @provide({ context: rhTabsManualContext })
  @property({ reflect: true, type: Boolean }) manual = false;

  /**
   * Index of the active tab
   */
  @property({ attribute: 'active-index', type: Number })
  get activeIndex() {
    return this.#activeIndex;
  }

  set activeIndex(v: number) {
    this.#tabindex.atFocusedItemIndex = v;
    this.#activeIndex = v;
    this.activeTab = this.tabs[v];
    for (const tab of this.tabs) {
      if (!this.activeTab?.disabled) {
        tab.active = tab === this.activeTab;
      }
      this.#tabs.panelFor(tab)?.toggleAttribute('hidden', !tab.active);
    }
  }

  @provide({ context: rhTabsActiveTabContext })
  @property({ attribute: false }) activeTab?: RhTab;

  /** Sets color context for child components, overrides parent context */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /** Aligns tabs to the center */
  @property({ reflect: true, type: Boolean }) centered? = false;

  /** Sets tabs to a boxed style with or without an inset */
  @provide({ context: rhTabsBoxContext })
  @property({ reflect: true }) box?: 'box' | 'inset';

  /** Sets the alignment of the tabs vertical */
  @provide({ context: rhTabsVerticalContext })
  @property({ reflect: true, type: Boolean }) vertical = false;

  @provide({ context: rhTabsFirstTabContext })
  @state() private firstTab: RhTab | null = null;

  @provide({ context: rhTabsLastTabContext })
  @state() private lastTab: RhTab | null = null;

  @query('[part="tabs"]') private tabList!: HTMLElement;

  protected get canShowScrollButtons(): boolean {
    return !this.vertical;
  }

  #activeIndex = -1;

  #overflow = new OverflowController(this);

  #tabs = new TabsAriaController<RhTab, RhTabPanel>(this, {
    isTab: (x): x is RhTab => (x as HTMLElement).localName === 'rh-tab',
    isPanel: (x): x is RhTabPanel => (x as HTMLElement).localName === 'rh-tab-panel',
    isActiveTab: x => x.active,
  });

  #tabindex = RovingTabindexController.of(this, {
    getItemsContainer: () => this.tabList,
    getItems: () => this.tabs ?? [],
  });

  get tabs(): RhTab[] {
    return this.#tabs.tabs;
  }

  get panels() {
    return this.tabs.map(tab => this.#tabs.panelFor(tab));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('expand', this.#onExpand);
    this.activeIndex = this.#tabindex.atFocusedItemIndex;
  }

  override willUpdate(): void {
    if (!this.manual && this.activeIndex !== this.#tabindex.atFocusedItemIndex) {
      this.activeIndex = this.#tabindex.atFocusedItemIndex;
    }
    this.firstTab = this.tabs.at(0) ?? null;
    this.lastTab = this.tabs.at(-1) ?? null;
  }

  async firstUpdated() {
    this.tabList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
    if (this.tabs.length && this.activeIndex === -1) {
      this.select(this.tabs.findIndex(x => !x.disabled));
    }
    this.#onSlotchange();
  }

  override render() {
    const { vertical = false, box = false, centered = false } = this;
    const inset = this.box === 'inset' ? 'inset' : '';
    return html`
      <div id="container" part="container" class="${classMap({ vertical, box, inset, centered, overflow: this.#overflow.showScrollButtons })}">
        <div part="tabs-container">${!this.#overflow.showScrollButtons ? '' : html`
          <button id="previous-tab" tabindex="-1"
                  aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                  ?disabled="${!this.#overflow.overflowLeft}"
                  @click="${() => !this.matches(':dir(rtl)') ? this.#overflow.scrollLeft() : this.#overflow.scrollRight()}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
          <div id="tablist" role="tablist">
            <slot name="tab"
                  part="tabs"
                  @slotchange="${this.#onSlotchange}"></slot>
          </div>${!this.#overflow.showScrollButtons ? '' : html`
          <button id="next-tab"
                  tabindex="-1"
                  aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                  ?disabled="${!this.#overflow.overflowRight}"
                  @click="${() => !this.matches(':dir(rtl)') ? this.#overflow.scrollRight() : this.#overflow.scrollLeft()}">
             <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
          </button>`}
        </div>
        <slot part="panels" @slotchange="${this.#onSlotchange}"></slot>
      </div>
    `;
  }

  @observes('activeTab')
  protected activeTabChanged(old?: RhTab, activeTab?: RhTab): void {
    if (activeTab?.disabled) {
      this.activeIndex = 0;
    } if (activeTab) {
      this.activeIndex = this.tabs.indexOf(activeTab);
    }
  }

  #onSlotchange() {
    this.#overflow.init(this.tabList, this.tabs);
  }

  #onExpand(event: Event) {
    if (event instanceof TabExpandEvent
      && !event.defaultPrevented && this.tabs.includes(event.tab)) {
      this.select(event.tab);
    }
  }

  select(option: RhTab | number) {
    if (typeof option === 'number') {
      this.activeIndex = option;
    } else {
      this.activeIndex = this.#tabindex.items.indexOf(option);
    }
    this.#overflow.update();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tabs': RhTabs;
  }
}
