import { html, LitElement, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { provide } from '@lit/context';

import { deprecation } from '@patternfly/pfe-core/decorators.js';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { TabsAriaController } from '@patternfly/pfe-core/controllers/tabs-aria-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { RhTab, TabExpandEvent } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tabs.css';

import { context, type RhTabsContext } from './context.js';

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
  @property({ type: Number, attribute: 'active-index' }) activeIndex = -1;

  @property({ attribute: false }) activeTab?: RhTab;

  /**
   * Sets color context for child components, overrides parent context
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Aligns tabs to the center
   */
  @property({ reflect: true, type: Boolean }) centered? = false;

  @provide({ context }) private ctx?: RhTabsContext;

  /**
   * Sets tabs to a boxed style with or without an inset
   */
  @property({ reflect: true }) box?: 'box' | 'inset' | null = null;

  /**
   * Sets the alignment of the tabs vertical
   */
  @property({ reflect: true, type: Boolean }) vertical = false;

  /**
   * Sets the theme for the tabs and panels
   * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
   */
  @deprecation({
    alias: 'css property --rh-tabs-active-border-color',
    reflect: true,
    attribute: 'theme',
  }) theme?: 'base' | null = null;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  @query('[part="tabs"]') private tabList!: HTMLElement;
  protected get canShowScrollButtons(): boolean {
    return !this.vertical;
  }

  #overflow = new OverflowController(this);

  #logger = new Logger(this);

  #tabs = new TabsAriaController<RhTab, RhTabPanel>(this, {
    isTab: (x): x is RhTab => (x as HTMLElement).localName === 'rh-tab',
    isPanel: (x): x is RhTabPanel => (x as HTMLElement).localName === 'rh-tab-panel',
    isActiveTab: x => x.active,
  });

  #tabindex = new RovingTabindexController(this, {
    getHTMLElement: () => this.shadowRoot?.getElementById('tabs') ?? null,
    getItems: () => this.tabs ?? [],
  });

  get tabs() {
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

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('expand', this.#onExpand);
    RhTabs.instances.add(this);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    RhTabs.instances.delete(this);
  }

  override willUpdate(changed: PropertyValues<this>): void {
    // RTIC will kick the update cycle whenever the tabs contents change,
    // so let's just update the context on every cycle
    if (changed.has('activeIndex')) {
      this.select(this.activeIndex);
    } else if (changed.has('activeTab') && this.activeTab) {
      this.select(this.activeTab);
    } else {
      this.#updateActive();
    }
    this.#overflow.update();
  }

  async firstUpdated() {
    this.tabList.addEventListener('scroll', this.#overflow.onScroll.bind(this));
    this.#onSlotchange();
  }

  override render() {
    const { on = '' } = this;
    return html`
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">
        <div part="container" class="${classMap({ overflow: this.#overflow.showScrollButtons })}">
          <div part="tabs-container">${!this.#overflow.showScrollButtons ? '' : html`
            <button id="previousTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                ?disabled="${!this.#overflow.overflowLeft}"
                @click="${() => this.#overflow.scrollLeft()}">
              <pf-icon icon="angle-left" set="fas" loading="eager"></pf-icon>
            </button>`}
            <div style="display: contents;" role="tablist">
              <slot name="tab"
                    part="tabs"
                    @slotchange="${this.#onSlotchange}"></slot>
            </div>${!this.#overflow.showScrollButtons ? '' : html`
            <button id="nextTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                ?disabled="${!this.#overflow.overflowRight}"
                @click="${() => this.#overflow.scrollRight()}">
              <pf-icon icon="angle-right" set="fas" loading="eager"></pf-icon>
            </button>`}
          </div>
          <slot part="panels" @slotchange="${this.#onSlotchange}"></slot>
        </div>
      </div>
    `;
  }

  #onSlotchange() {
    this.#firstLastClasses();
    this.#overflow.init(this.tabList, this.tabs);
  }

  #onExpand(event: Event) {
    if (event instanceof TabExpandEvent &&
      !event.defaultPrevented && this.tabs.includes(event.tab)) {
      this.select(event.tab);
    }
  }

  #firstLastClasses() {
    this.#firstTab?.classList.add('first');
    this.#lastTab?.classList.add('last');
  }

  #updateActive({ force = false } = {}) {
    if (!this.#tabindex.activeItem?.disabled) {
      this.tabs?.forEach((tab, i) => {
        if (force || !this.manual) {
          const active = tab === this.#tabindex.activeItem;
          tab.active = active;
          if (active) {
            this.activeIndex = i;
            this.activeTab = tab;
          }
        }
        this.#tabs.panelFor(tab)?.toggleAttribute('hidden', !tab.active);
      });
    }
    const { activeTab, box = null, vertical } = this;
    const firstTab = this.#firstTab;
    const lastTab = this.#lastTab;
    this.ctx = { activeTab, box, vertical, firstTab, lastTab };
  }

  select(option: RhTab | number) {
    if (typeof option === 'number') {
      const item = this.tabs[option];
      this.#tabindex.setActiveItem(item);
    } else {
      this.#tabindex.setActiveItem(option);
    }
    this.#updateActive({ force: true });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tabs': RhTabs;
  }
}
