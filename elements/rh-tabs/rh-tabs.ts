import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { cascades, deprecation } from '@patternfly/pfe-core/decorators.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { RhTab, TabExpandEvent } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tabs.css';

export { RhTab };

/* TODO: Remove attrs in JSDoc below when updated use TabsController after PFE 3.0 release */

/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 *
 * @cssprop {<color>} --rh-tabs-border-color - Tabs Border color {@default `#c7c7c7`}
 * @cssprop {<length>} --rh-tabs-inset - Tabs inset {@default `auto`}
 *
 */
@customElement('rh-tabs')
export class RhTabs extends LitElement {
  static readonly styles = [styles];

  static isTab(element: HTMLElement): element is RhTab {
    return element instanceof RhTab;
  }

  static isPanel(element: HTMLElement): element is RhTabPanel {
    return element instanceof RhTabPanel;
  }

  /** Time in milliseconds to debounce between scroll events and updating scroll button state */
  protected static readonly scrollTimeoutDelay: number = 0;

  /** Icon name to use for the scroll left button */
  protected static readonly scrollIconLeft: string = 'angle-left';

  /** Icon name to use for the scroll right button */
  protected static readonly scrollIconRight: string = 'angle-right';

  /** Icon set to use for the scroll buttons */
  protected static readonly scrollIconSet: string = 'fas';

  private static instances = new Set<RhTabs>();

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
  @property({ attribute: false })
  get activeIndex() {
    return this.#activeIndex;
  }

  set activeIndex(index: number) {
    const oldIndex = this.activeIndex;
    const tab = this.#allTabs[index];
    if (tab) {
      if (tab.disabled) {
        this.#logger.warn(`Disabled tabs can not be active, setting first focusable tab to active`);
        this.#tabindex.setActiveItem(this.#firstFocusable);
        index = this.#activeItemIndex;
      } else if (!tab.active) {
        // if the activeIndex was set through the CLI e.g.`$0.activeIndex = 2`
        tab.active = true;
        return;
      }
    }

    if (index === -1) {
      this.#logger.warn(`No active tab found, setting first focusable tab to active`);
      const first = this.#tabindex.firstItem;
      this.#tabindex.setActiveItem(first);
      index = this.#activeItemIndex;
    }
    this.#activeIndex = index;
    this.requestUpdate('activeIndex', oldIndex);

    this.#allPanels[this.#activeIndex].hidden = false;
    // close all tabs that are not the activeIndex
    this.#deactivateExcept(this.#activeIndex);
  }

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Aligns tabs to the center
   */
  @property({ reflect: true, type: Boolean }) centered? = false;

  /**
   * Sets the theme for the tabs and panels
   * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
   */
  @cascades('rh-tab')
  @deprecation({
    alias: 'css property --rh-tabs-active-border-color',
    reflect: true,
    attribute: 'theme',
  }) theme?: 'base' | null = null;

  /**
   * Sets tabs to a boxed style with or without an inset
   */
  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true }) box?: 'box' | 'inset' | null = null;

  /**
   * Sets the alignment of the tabs vertical
   */
  @cascades('rh-tab', 'rh-tab-panel')
  @property({ reflect: true, type: Boolean }) vertical = false;

  protected get canShowScrollButtons(): boolean {
    return !this.vertical;
  }

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  get #activeTab() {
    const [tab] = this.#_allTabs.filter(tab => tab.active);
    return tab;
  }

  get #allTabs() {
    return this.#_allTabs;
  }

  set #allTabs(tabs: RhTab[]) {
    this.#_allTabs = tabs.filter(tab => (this.constructor as typeof RhTabs).isTab(tab));
  }

  get #allPanels() {
    return this.#_allPanels;
  }

  set #allPanels(panels: RhTabPanel[]) {
    this.#_allPanels = panels.filter(panel => (this.constructor as typeof RhTabs).isPanel(panel));
  }

  @queryAssignedElements({ slot: 'tab' }) private tabs!: RhTab[];

  @queryAssignedElements() private panels!: RhTabPanel[];

  @query('[part="tabs"]') private tabList!: HTMLElement;

  #tabindex = new RovingTabindexController<RhTab>(this);

  #overflow = new OverflowController(this);

  #logger = new Logger(this);

  #_allTabs: RhTab[] = [];

  #_allPanels: RhTabPanel[] = [];

  #activeIndex = 0;

  get #firstFocusable(): RhTab | undefined {
    return this.#tabindex.firstItem;
  }

  get #firstTab(): RhTab | undefined {
    const [tab] = this.#allTabs;
    return tab;
  }

  get #lastTab(): RhTab | undefined {
    return this.#allTabs.at(-1);
  }

  get #activeItemIndex() {
    const { activeItem } = this.#tabindex;
    return this.#allTabs.findIndex(t => t === activeItem);
  }


  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('expand', this.#onTabExpand);
    RhTabs.instances.add(this);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    RhTabs.instances.delete(this);
  }

  override willUpdate(): void {
    const { activeItem } = this.#tabindex;
    // If RTI has an activeItem, update the roving tabindex controller
    if (!this.manual &&
        activeItem &&
        activeItem !== this.#activeTab &&
        activeItem.ariaDisabled !== 'true') {
      activeItem.active = true;
    }
  }

  async firstUpdated() {
    this.tabList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
  }

  override render() {
    const { on = '' } = this;
    const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor as typeof RhTabs;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">
        <div part="container" class="${classMap({ overflow: this.#overflow.showScrollButtons })}">
          <div part="tabs-container">${!this.#overflow.showScrollButtons ? '' : html`
            <button id="previousTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                ?disabled="${!this.#overflow.overflowLeft}"
                @click="${this.#scrollLeft}">
              <pf-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pf-icon>
            </button>`}
            <slot name="tab"
                  part="tabs"
                  role="tablist"
                  @slotchange="${this.#onSlotchange}"></slot> ${!this.#overflow.showScrollButtons ? '' : html`
            <button id="nextTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                ?disabled="${!this.#overflow.overflowRight}"
                @click="${this.#scrollRight}">
              <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
            </button>`}
          </div>
          <slot part="panels" @slotchange="${this.#onSlotchange}"></slot>
        </div>
      </div>
    `;
  }

  #onSlotchange(event: { target: { name: string } }) {
    if (event.target.name === 'tab') {
      this.#allTabs = this.tabs;
    } else {
      this.#allPanels = this.panels;
    }

    if ((this.#allTabs.length === this.#allPanels.length) &&
      (this.#allTabs.length !== 0 || this.#allPanels.length !== 0)) {
      this.#updateAccessibility();
      this.#firstLastClasses();
      this.#tabindex.initItems(this.#allTabs);
      this.activeIndex = this.#allTabs.findIndex(tab => tab.active);
      this.#tabindex.setActiveItem(this.#activeTab);
      this.#overflow.init(this.tabList, this.#allTabs);
    }
  }

  #updateAccessibility(): void {
    this.#allTabs.forEach((tab, index) => {
      const panel = this.#allPanels[index];
      if (!panel.hasAttribute('aria-labelledby')) {
        panel.setAttribute('aria-labelledby', tab.id);
      }
      tab.setAttribute('aria-controls', panel.id);
    });
  }

  #onTabExpand = (event: Event): void => {
    if (!(event instanceof TabExpandEvent) ||
        !this.#allTabs.length ||
        !this.#allPanels.length) {
      return;
    }

    if (event.active) {
      if (event.tab !== this.#tabindex.activeItem) {
        this.#tabindex.setActiveItem(event.tab);
      }
      this.activeIndex = this.#allTabs.findIndex(tab => tab === event.tab);
    }
  };

  #deactivateExcept(index: number) {
    this.#allTabs.forEach((tab, i) => tab.active = i === index);
    this.#allPanels.forEach((panel, i) => panel.hidden = i !== index);
  }

  #firstLastClasses() {
    this.#firstTab?.classList.add('first');
    this.#lastTab?.classList.add('last');
  }

  #scrollLeft() {
    this.#overflow.scrollLeft();
  }

  #scrollRight() {
    this.#overflow.scrollRight();
  }

  // Moved to bottom of file to avoid Custom Element Manifest from incorrectly
  // parsing the file due to the static block. This block will be removed from
  // rh-tab.ts after PFE 3.0 is released and we migrate to the TabsController.
  static {
    // on resize check for overflows to add or remove scroll buttons
    window.addEventListener('resize', () => {
      for (const instance of RhTabs.instances) {
        instance.#overflow.onScroll();
      }
    }, { capture: false });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tabs': RhTabs;
  }
}
