import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
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

import { DirController } from '../../lib/DirController.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { context, type RhTabsContext } from './context.js';

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
 * @cssprop {<color>} [--rh-tabs-border-color=#c7c7c7] - Tabs Border color
 * @cssprop {<length>} [--rh-tabs-inset=auto] - Tabs inset
 */
@customElement('rh-tabs')
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

  @property({ attribute: false }) activeTab?: RhTab;

  @colorContextConsumer() private on?: ColorTheme;

  /** Sets color context for child components, overrides parent context */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /** Aligns tabs to the center */
  @property({ reflect: true, type: Boolean }) centered? = false;

  /** Sets tabs to a boxed style with or without an inset */
  @property({ reflect: true }) box?: 'box' | 'inset';

  /** Sets the alignment of the tabs vertical */
  @property({ reflect: true, type: Boolean }) vertical = false;

  @query('[part="tabs"]') private tabList!: HTMLElement;

  get #ctx(): RhTabsContext {
    const { activeTab, manual, vertical } = this;
    const box = this.box === null || this.box === '' as 'box' ? 'box' : this.box;
    const firstTab = this.#firstTab;
    const lastTab = this.#lastTab;
    return { activeTab, box, firstTab, lastTab, manual, vertical };
  }

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

  #dir = new DirController(this);

  get tabs(): RhTab[] {
    return this.#tabs.tabs;
  }

  get panels() {
    return this.tabs.map(tab => this.#tabs.panelFor(tab));
  }

  get #firstTab(): RhTab | undefined {
    const [tab] = this.tabs;
    return tab;
  }

  get #lastTab(): RhTab | undefined {
    return this.tabs.at(-1);
  }

  @provide({ context }) private ctx = this.#ctx;

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
    this.ctx = this.#ctx;
  }

  async firstUpdated() {
    this.tabList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
    if (this.tabs.length && this.activeIndex === -1) {
      this.select(this.tabs.findIndex(x => !x.disabled));
    }
    this.#onSlotchange();
  }

  override render() {
    const { on = '', vertical = false, box = false, centered = false } = this;
    const inset = this.box === 'inset' ? 'inset' : '';
    const rtl = this.#dir.dir === 'rtl';
    return html`
      <div id="rhds-container" class="${classMap({ on: true, [on]: !!on, rtl, vertical, box, inset, centered })}">
        <div part="container" class="${classMap({ overflow: this.#overflow.showScrollButtons })}">
          <div part="tabs-container">${!this.#overflow.showScrollButtons ? '' : html`
            <button id="previous-tab" tabindex="-1"
                    aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                    ?disabled="${!this.#overflow.overflowLeft}"
                    @click="${() => !rtl ? this.#overflow.scrollLeft() : this.#overflow.scrollRight()}">
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
                    @click="${() => !rtl ? this.#overflow.scrollRight() : this.#overflow.scrollLeft()}">
               <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
            </button>`}
          </div>
          <slot part="panels" @slotchange="${this.#onSlotchange}"></slot>
        </div>
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
