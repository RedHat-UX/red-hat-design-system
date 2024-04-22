var _BaseTabs_instances, _a, _BaseTabs_instances_1, _BaseTabs_tabindex, _BaseTabs_overflow, _BaseTabs_logger, _BaseTabs_allTabs, _BaseTabs_allPanels, _BaseTabs_activeIndex, _BaseTabs_activeTab_get, _BaseTabs_onSlotchange, _BaseTabs_updateAccessibility, _BaseTabs_onTabExpand, _BaseTabs_deactivateExcept, _BaseTabs_firstFocusable_get, _BaseTabs_firstTab_get, _BaseTabs_lastTab_get, _BaseTabs_activeItemIndex_get, _BaseTabs_firstLastClasses, _BaseTabs_scrollLeft, _BaseTabs_scrollRight;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
// we will remove this file for 3.0
/* eslint-disable lit-a11y/no-aria-slot */
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
const styles = css `:host {\n  display: block;\n}\n\n[part="tabs-container"] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n}\n\n[part="tabs-container"]::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-style: solid;\n}\n\n:host button {\n  opacity: 1;\n}\n\n:host button:nth-of-type(1) {\n  margin-inline-end: 0;\n  translate: 0 0;\n}\n\n:host button:nth-of-type(2) {\n  margin-inline-start: 0;\n  translate: 0 0;\n}\n\n[part="tabs"],\n[part="panels"] {\n  display: block;\n}\n\n[part="tabs"] {\n  scrollbar-width: none;\n  position: relative;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\n[part="tabs-container"]::before,\n[part="tabs"]::before,\nbutton::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border-style: solid;\n}\n\n[part="tabs"]::before,\nbutton::before {\n  top: 0;\n}\n\nbutton,\n[part="tabs"]::before {\n  border: 0;\n}\n\nbutton {\n  flex: none;\n  line-height: 1;\n  opacity: 0;\n}\n\nbutton::before {\n  border-block-start-width: 0;\n}\n\nbutton:nth-of-type(1) {\n  translate: -100% 0;\n}\n\nbutton:nth-of-type(2) {\n  translate: 100% 0;\n}\n\nbutton:disabled {\n  pointer-events: none;\n}\n`;
/**
 * BaseTabs
 *
 * @attr [label-scroll-left="Scroll left"] - accessible label for the tab panel's scroll left button.
 * @attr [label-scroll-right="Scroll right"] - accessible label for the tab panel's scroll right button.
 *
 */
export class BaseTabs extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTabs_instances.add(this);
        _BaseTabs_tabindex.set(this, new RovingTabindexController(this, {
            getItems: () => __classPrivateFieldGet(this, _BaseTabs_allTabs, "f"),
        }));
        _BaseTabs_overflow.set(this, new OverflowController(this));
        _BaseTabs_logger.set(this, new Logger(this));
        _BaseTabs_allTabs.set(this, []);
        _BaseTabs_allPanels.set(this, []);
        _BaseTabs_activeIndex.set(this, 0);
        /**
         * Tab activation
         * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
         * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
         */
        this.manual = false;
        _BaseTabs_onTabExpand.set(this, (event) => {
            if (!(event instanceof TabExpandEvent) ||
                !__classPrivateFieldGet(this, _BaseTabs_allTabs, "f").length ||
                !__classPrivateFieldGet(this, _BaseTabs_allPanels, "f").length) {
                return;
            }
            if (event.active) {
                this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").findIndex(tab => tab === event.tab);
            }
        });
    }
    static isTab(element) {
        return element instanceof BaseTab;
    }
    static isPanel(element) {
        return element instanceof BaseTabPanel;
    }
    get activeIndex() {
        return __classPrivateFieldGet(this, _BaseTabs_activeIndex, "f");
    }
    set activeIndex(index) {
        const oldIndex = this.activeIndex;
        const tab = __classPrivateFieldGet(this, _BaseTabs_allTabs, "f")[index];
        if (tab) {
            if (tab.disabled) {
                __classPrivateFieldGet(this, _BaseTabs_logger, "f").warn(`Disabled tabs can not be active, setting first focusable tab to active`);
                __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").setActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstFocusable_get));
                index = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeItemIndex_get);
                return;
            }
            else {
                tab.active = true;
            }
        }
        if (index === -1) {
            __classPrivateFieldGet(this, _BaseTabs_logger, "f").warn(`No active tab found, setting first focusable tab to active`);
            __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").setActiveItem(__classPrivateFieldGet(this, _BaseTabs_tabindex, "f").firstItem);
            index = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeItemIndex_get);
        }
        else {
            __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").setActiveItem(tab);
        }
        __classPrivateFieldSet(this, _BaseTabs_activeIndex, index, "f");
        this.requestUpdate('activeIndex', oldIndex);
        __classPrivateFieldGet(this, _BaseTabs_allPanels, "f")[__classPrivateFieldGet(this, _BaseTabs_activeIndex, "f")].hidden = false;
        // close all tabs that are not the activeIndex
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_deactivateExcept).call(this, __classPrivateFieldGet(this, _BaseTabs_activeIndex, "f"));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('expand', __classPrivateFieldGet(this, _BaseTabs_onTabExpand, "f"));
        __classPrivateFieldGet(_a, _a, "f", _BaseTabs_instances_1).add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(_a, _a, "f", _BaseTabs_instances_1).delete(this);
    }
    willUpdate() {
        const { activeItem } = __classPrivateFieldGet(this, _BaseTabs_tabindex, "f");
        // If RTI has an activeItem, update the roving tabindex controller
        if (!this.manual &&
            activeItem &&
            activeItem !== __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeTab_get) &&
            activeItem.ariaDisabled !== 'true') {
            activeItem.active = true;
        }
    }
    async firstUpdated() {
        this.tabList.addEventListener('scroll', __classPrivateFieldGet(this, _BaseTabs_overflow, "f").onScroll.bind(this));
    }
    render() {
        const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor;
        return html `
      <div part="container" class="${classMap({ overflow: __classPrivateFieldGet(this, _BaseTabs_overflow, "f").showScrollButtons })}">
        <div part="tabs-container">${!__classPrivateFieldGet(this, _BaseTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="previousTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
              ?disabled="${!__classPrivateFieldGet(this, _BaseTabs_overflow, "f").overflowLeft}"
              @click="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_scrollLeft)}">
            <pf-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
          <slot name="tab"
                part="tabs"
                role="tablist"
                @slotchange="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_onSlotchange)}"></slot> ${!__classPrivateFieldGet(this, _BaseTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="nextTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
              ?disabled="${!__classPrivateFieldGet(this, _BaseTabs_overflow, "f").overflowRight}"
              @click="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_scrollRight)}">
            <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
        </div>
        <slot part="panels" @slotchange="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_onSlotchange)}"></slot>
      </div>
    `;
    }
}
_a = BaseTabs, _BaseTabs_tabindex = new WeakMap(), _BaseTabs_overflow = new WeakMap(), _BaseTabs_logger = new WeakMap(), _BaseTabs_allTabs = new WeakMap(), _BaseTabs_allPanels = new WeakMap(), _BaseTabs_activeIndex = new WeakMap(), _BaseTabs_onTabExpand = new WeakMap(), _BaseTabs_instances = new WeakSet(), _BaseTabs_activeTab_get = function _BaseTabs_activeTab_get() {
    const [tab] = __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").filter(tab => tab.active);
    return tab;
}, _BaseTabs_onSlotchange = function _BaseTabs_onSlotchange(event) {
    if (event.target.name === 'tab') {
        __classPrivateFieldSet(this, _BaseTabs_allTabs, this.tabs.filter(tab => this.constructor.isTab(tab)), "f");
    }
    else {
        __classPrivateFieldSet(this, _BaseTabs_allPanels, this.panels.filter(panel => this.constructor.isPanel(panel)), "f");
    }
    __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").updateItems();
    if ((__classPrivateFieldGet(this, _BaseTabs_allTabs, "f").length === __classPrivateFieldGet(this, _BaseTabs_allPanels, "f").length) &&
        (__classPrivateFieldGet(this, _BaseTabs_allTabs, "f").length !== 0 || __classPrivateFieldGet(this, _BaseTabs_allPanels, "f").length !== 0)) {
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_updateAccessibility).call(this);
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_firstLastClasses).call(this);
        this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").findIndex(tab => tab.active);
        __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").setActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeTab_get));
        __classPrivateFieldGet(this, _BaseTabs_overflow, "f").init(this.tabList, __classPrivateFieldGet(this, _BaseTabs_allTabs, "f"));
    }
}, _BaseTabs_updateAccessibility = function _BaseTabs_updateAccessibility() {
    __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").forEach((tab, index) => {
        const panel = __classPrivateFieldGet(this, _BaseTabs_allPanels, "f")[index];
        if (!panel.hasAttribute('aria-labelledby')) {
            panel.setAttribute('aria-labelledby', tab.id);
        }
        tab.setAttribute('aria-controls', panel.id);
    });
}, _BaseTabs_deactivateExcept = function _BaseTabs_deactivateExcept(index) {
    __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").forEach((tab, i) => tab.active = i === index);
    __classPrivateFieldGet(this, _BaseTabs_allPanels, "f").forEach((panel, i) => panel.hidden = i !== index);
}, _BaseTabs_firstFocusable_get = function _BaseTabs_firstFocusable_get() {
    return __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").firstItem;
}, _BaseTabs_firstTab_get = function _BaseTabs_firstTab_get() {
    const [tab] = __classPrivateFieldGet(this, _BaseTabs_allTabs, "f");
    return tab;
}, _BaseTabs_lastTab_get = function _BaseTabs_lastTab_get() {
    return __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").at(-1);
}, _BaseTabs_activeItemIndex_get = function _BaseTabs_activeItemIndex_get() {
    const { activeItem } = __classPrivateFieldGet(this, _BaseTabs_tabindex, "f");
    return __classPrivateFieldGet(this, _BaseTabs_allTabs, "f").findIndex(t => t === activeItem);
}, _BaseTabs_firstLastClasses = function _BaseTabs_firstLastClasses() {
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstTab_get)?.classList.add('first');
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_lastTab_get)?.classList.add('last');
}, _BaseTabs_scrollLeft = function _BaseTabs_scrollLeft() {
    __classPrivateFieldGet(this, _BaseTabs_overflow, "f").scrollLeft();
}, _BaseTabs_scrollRight = function _BaseTabs_scrollRight() {
    __classPrivateFieldGet(this, _BaseTabs_overflow, "f").scrollRight();
};
BaseTabs.styles = [styles];
/** Time in milliseconds to debounce between scroll events and updating scroll button state */
BaseTabs.scrollTimeoutDelay = 0;
/** Icon name to use for the scroll left button */
BaseTabs.scrollIconLeft = 'angle-left';
/** Icon name to use for the scroll right button */
BaseTabs.scrollIconRight = 'angle-right';
/** Icon set to use for the scroll buttons */
BaseTabs.scrollIconSet = 'fas';
_BaseTabs_instances_1 = { value: new Set() };
(() => {
    // on resize check for overflows to add or remove scroll buttons
    window.addEventListener('resize', () => {
        for (const instance of __classPrivateFieldGet(_a, _a, "f", _BaseTabs_instances_1)) {
            __classPrivateFieldGet(instance, _BaseTabs_overflow, "f").onScroll();
        }
    }, { capture: false });
})();
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
//# sourceMappingURL=BaseTabs.js.map