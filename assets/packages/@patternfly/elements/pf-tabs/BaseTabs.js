import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { classMap } from 'lit/directives/class-map.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { BaseTab, TabExpandEvent } from './BaseTab.js';
import { BaseTabPanel } from './BaseTabPanel.js';
import { css } from "lit";
const styles = css `:host{display:block}[part=tabs-container]{position:relative;display:flex;overflow:hidden}[part=tabs-container]::before{position:absolute;right:0;bottom:0;left:0;border-style:solid}:host button{opacity:1}:host button:first-of-type{margin-inline-end:0;translate:0 0}:host button:nth-of-type(2){margin-inline-start:0;translate:0 0}[part=panels],[part=tabs]{display:block}[part=tabs]{scrollbar-width:none;position:relative;max-width:100%;overflow-x:auto}[part=tabs-container]::before,[part=tabs]::before,button::before{position:absolute;right:0;bottom:0;left:0;content:"";border-style:solid}[part=tabs]::before,button::before{top:0}[part=tabs]::before,button{border:0}button{flex:none;line-height:1;opacity:0}button::before{border-block-start-width:0}button:first-of-type{translate:-100% 0}button:nth-of-type(2){translate:100% 0}button:disabled{pointer-events:none}`;
/**
 * BaseTabs
 *
 * @attr [label-scroll-left="Scroll left"] - accessible label for the tab panel's scroll left button.
 * @attr [label-scroll-right="Scroll right"] - accessible label for the tab panel's scroll right button.
 *
 */
class BaseTabs extends LitElement {
    constructor() {
        super(...arguments);
        this.#tabindex = new RovingTabindexController(this);
        this.#overflow = new OverflowController(this);
        this.#logger = new Logger(this);
        this.#_allTabs = [];
        this.#_allPanels = [];
        this.#activeIndex = 0;
        /**
         * Tab activation
         * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
         * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
         */
        this.manual = false;
        this.#onTabExpand = (event) => {
            if (!(event instanceof TabExpandEvent) ||
                !this.#allTabs.length ||
                !this.#allPanels.length) {
                return;
            }
            if (event.active) {
                if (event.tab !== this.#tabindex.activeItem) {
                    this.#tabindex.updateActiveItem(event.tab);
                }
                this.activeIndex = this.#allTabs.findIndex(tab => tab === event.tab);
            }
        };
    }
    static { this.styles = [styles]; }
    static isTab(element) {
        return element instanceof BaseTab;
    }
    static isPanel(element) {
        return element instanceof BaseTabPanel;
    }
    /** Time in milliseconds to debounce between scroll events and updating scroll button state */
    static { this.scrollTimeoutDelay = 0; }
    /** Icon name to use for the scroll left button */
    static { this.scrollIconLeft = 'angle-left'; }
    /** Icon name to use for the scroll right button */
    static { this.scrollIconRight = 'angle-right'; }
    /** Icon set to use for the scroll buttons */
    static { this.scrollIconSet = 'fas'; }
    static #instances = new Set();
    static {
        // on resize check for overflows to add or remove scroll buttons
        window.addEventListener('resize', () => {
            for (const instance of this.#instances) {
                instance.#overflow.onScroll();
            }
        }, { capture: false });
    }
    #tabindex;
    #overflow;
    #logger;
    #_allTabs;
    #_allPanels;
    #activeIndex;
    get activeIndex() {
        return this.#activeIndex;
    }
    set activeIndex(index) {
        const oldIndex = this.activeIndex;
        const tab = this.#allTabs[index];
        if (tab) {
            if (tab.disabled) {
                this.#logger.warn(`Disabled tabs can not be active, setting first focusable tab to active`);
                this.#tabindex.updateActiveItem(this.#firstFocusable);
                index = this.#activeItemIndex;
            }
            else if (!tab.active) {
                // if the activeIndex was set through the CLI e.g.`$0.activeIndex = 2`
                tab.active = true;
                return;
            }
        }
        if (index === -1) {
            this.#logger.warn(`No active tab found, setting first focusable tab to active`);
            const first = this.#tabindex.firstItem;
            this.#tabindex.updateActiveItem(first);
            index = this.#activeItemIndex;
        }
        this.#activeIndex = index;
        this.requestUpdate('activeIndex', oldIndex);
        this.#allPanels[this.#activeIndex].hidden = false;
        // close all tabs that are not the activeIndex
        this.#deactivateExcept(this.#activeIndex);
    }
    get #activeTab() {
        const [tab] = this.#_allTabs.filter(tab => tab.active);
        return tab;
    }
    get #allTabs() {
        return this.#_allTabs;
    }
    set #allTabs(tabs) {
        this.#_allTabs = tabs.filter(tab => this.constructor.isTab(tab));
    }
    get #allPanels() {
        return this.#_allPanels;
    }
    set #allPanels(panels) {
        this.#_allPanels = panels.filter(panel => this.constructor.isPanel(panel));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id ||= getRandomId(this.localName);
        this.addEventListener('expand', this.#onTabExpand);
        BaseTabs.#instances.add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        BaseTabs.#instances.delete(this);
    }
    willUpdate() {
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
    render() {
        const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor;
        return html `
      <div part="container" class="${classMap({ overflow: this.#overflow.showScrollButtons })}">
        <div part="tabs-container">${!this.#overflow.showScrollButtons ? '' : html `
          <button id="previousTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
              ?disabled="${!this.#overflow.overflowLeft}"
              @click="${this.#scrollLeft}">
            <pf-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
          <slot name="tab"
                part="tabs"
                role="tablist"
                @slotchange="${this.#onSlotchange}"></slot> ${!this.#overflow.showScrollButtons ? '' : html `
          <button id="nextTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
              ?disabled="${!this.#overflow.overflowRight}"
              @click="${this.#scrollRight}">
            <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
        </div>
        <slot part="panels" @slotchange="${this.#onSlotchange}"></slot>
      </div>
    `;
    }
    #onSlotchange(event) {
        if (event.target.name === 'tab') {
            this.#allTabs = this.tabs;
        }
        else {
            this.#allPanels = this.panels;
        }
        if ((this.#allTabs.length === this.#allPanels.length) &&
            (this.#allTabs.length !== 0 || this.#allPanels.length !== 0)) {
            this.#updateAccessibility();
            this.#firstLastClasses();
            this.#tabindex.initItems(this.#allTabs);
            this.activeIndex = this.#allTabs.findIndex(tab => tab.active);
            this.#tabindex.updateActiveItem(this.#activeTab);
            this.#overflow.init(this.tabList, this.#allTabs);
        }
    }
    #updateAccessibility() {
        this.#allTabs.forEach((tab, index) => {
            const panel = this.#allPanels[index];
            if (!panel.hasAttribute('aria-labelledby')) {
                panel.setAttribute('aria-labelledby', tab.id);
            }
            tab.setAttribute('aria-controls', panel.id);
        });
    }
    #onTabExpand;
    #deactivateExcept(index) {
        this.#allTabs.forEach((tab, i) => tab.active = i === index);
        this.#allPanels.forEach((panel, i) => panel.hidden = i !== index);
    }
    get #firstFocusable() {
        return this.#tabindex.firstItem;
    }
    get #firstTab() {
        const [tab] = this.#allTabs;
        return tab;
    }
    get #lastTab() {
        return this.#allTabs.at(-1);
    }
    get #activeItemIndex() {
        const { activeItem } = this.#tabindex;
        return this.#allTabs.findIndex(t => t === activeItem);
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
}
__decorate([
    queryAssignedElements({ slot: 'tab' })
], BaseTabs.prototype, "tabs", void 0);
__decorate([
    queryAssignedElements()
], BaseTabs.prototype, "panels", void 0);
__decorate([
    query('[part="tabs"]')
], BaseTabs.prototype, "tabList", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], BaseTabs.prototype, "manual", void 0);
__decorate([
    property({ attribute: false })
], BaseTabs.prototype, "activeIndex", null);
export { BaseTabs };
//# sourceMappingURL=BaseTabs.js.map