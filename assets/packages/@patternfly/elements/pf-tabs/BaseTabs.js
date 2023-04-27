var _BaseTabs_instances, _a, _BaseTabs_instances_1, _BaseTabs_tabindex, _BaseTabs_overflow, _BaseTabs_logger, _BaseTabs__allTabs, _BaseTabs__allPanels, _BaseTabs_activeIndex, _BaseTabs_activeTab_get, _BaseTabs_allTabs_get, _BaseTabs_allTabs_set, _BaseTabs_allPanels_get, _BaseTabs_allPanels_set, _BaseTabs_onSlotchange, _BaseTabs_updateAccessibility, _BaseTabs_onTabExpand, _BaseTabs_deactivateExcept, _BaseTabs_firstFocusable_get, _BaseTabs_firstTab_get, _BaseTabs_lastTab_get, _BaseTabs_activeItemIndex_get, _BaseTabs_firstLastClasses, _BaseTabs_scrollLeft, _BaseTabs_scrollRight;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
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
        _BaseTabs_instances.add(this);
        _BaseTabs_tabindex.set(this, new RovingTabindexController(this));
        _BaseTabs_overflow.set(this, new OverflowController(this));
        _BaseTabs_logger.set(this, new Logger(this));
        _BaseTabs__allTabs.set(this, []);
        _BaseTabs__allPanels.set(this, []);
        _BaseTabs_activeIndex.set(this, 0);
        this.id = this.id || getRandomId(this.localName);
        /**
         * Tab activation
         * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
         * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
         */
        this.manual = false;
        _BaseTabs_onTabExpand.set(this, (event) => {
            if (!(event instanceof TabExpandEvent) ||
                !__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).length ||
                !__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get).length) {
                return;
            }
            if (event.active) {
                if (event.tab !== __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").activeItem) {
                    __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").updateActiveItem(event.tab);
                }
                this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(tab => tab === event.tab);
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
        const tab = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get)[index];
        if (tab) {
            if (tab.disabled) {
                __classPrivateFieldGet(this, _BaseTabs_logger, "f").warn(`Disabled tabs can not be active, setting first focusable tab to active`);
                __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").updateActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstFocusable_get));
                index = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeItemIndex_get);
            }
            else if (!tab.active) {
                // if the activeIndex was set through the CLI e.g.`$0.activeIndex = 2`
                tab.active = true;
                return;
            }
        }
        if (index === -1) {
            __classPrivateFieldGet(this, _BaseTabs_logger, "f").warn(`No active tab found, setting first focusable tab to active`);
            const first = __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").firstItem;
            __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").updateActiveItem(first);
            index = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeItemIndex_get);
        }
        __classPrivateFieldSet(this, _BaseTabs_activeIndex, index, "f");
        this.requestUpdate('activeIndex', oldIndex);
        __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get)[__classPrivateFieldGet(this, _BaseTabs_activeIndex, "f")].hidden = false;
        // close all tabs that are not the activeIndex
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_deactivateExcept).call(this, __classPrivateFieldGet(this, _BaseTabs_activeIndex, "f"));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('expand', __classPrivateFieldGet(this, _BaseTabs_onTabExpand, "f"));
        __classPrivateFieldGet(BaseTabs, _a, "f", _BaseTabs_instances_1).add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(BaseTabs, _a, "f", _BaseTabs_instances_1).delete(this);
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
_a = BaseTabs, _BaseTabs_tabindex = new WeakMap(), _BaseTabs_overflow = new WeakMap(), _BaseTabs_logger = new WeakMap(), _BaseTabs__allTabs = new WeakMap(), _BaseTabs__allPanels = new WeakMap(), _BaseTabs_activeIndex = new WeakMap(), _BaseTabs_onTabExpand = new WeakMap(), _BaseTabs_instances = new WeakSet(), _BaseTabs_activeTab_get = function _BaseTabs_activeTab_get() {
    const [tab] = __classPrivateFieldGet(this, _BaseTabs__allTabs, "f").filter(tab => tab.active);
    return tab;
}, _BaseTabs_allTabs_get = function _BaseTabs_allTabs_get() {
    return __classPrivateFieldGet(this, _BaseTabs__allTabs, "f");
}, _BaseTabs_allTabs_set = function _BaseTabs_allTabs_set(tabs) {
    __classPrivateFieldSet(this, _BaseTabs__allTabs, tabs.filter(tab => this.constructor.isTab(tab)), "f");
}, _BaseTabs_allPanels_get = function _BaseTabs_allPanels_get() {
    return __classPrivateFieldGet(this, _BaseTabs__allPanels, "f");
}, _BaseTabs_allPanels_set = function _BaseTabs_allPanels_set(panels) {
    __classPrivateFieldSet(this, _BaseTabs__allPanels, panels.filter(panel => this.constructor.isPanel(panel)), "f");
}, _BaseTabs_onSlotchange = function _BaseTabs_onSlotchange(event) {
    if (event.target.name === 'tab') {
        __classPrivateFieldSet(this, _BaseTabs_instances, this.tabs, "a", _BaseTabs_allTabs_set);
    }
    else {
        __classPrivateFieldSet(this, _BaseTabs_instances, this.panels, "a", _BaseTabs_allPanels_set);
    }
    if ((__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).length === __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get).length) &&
        (__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).length !== 0 || __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get).length !== 0)) {
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_updateAccessibility).call(this);
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_firstLastClasses).call(this);
        __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").initItems(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get));
        this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(tab => tab.active);
        __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").updateActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeTab_get));
        __classPrivateFieldGet(this, _BaseTabs_overflow, "f").init(this.tabList, __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get));
    }
}, _BaseTabs_updateAccessibility = function _BaseTabs_updateAccessibility() {
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).forEach((tab, index) => {
        const panel = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get)[index];
        if (!panel.hasAttribute('aria-labelledby')) {
            panel.setAttribute('aria-labelledby', tab.id);
        }
        tab.setAttribute('aria-controls', panel.id);
    });
}, _BaseTabs_deactivateExcept = function _BaseTabs_deactivateExcept(index) {
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).forEach((tab, i) => tab.active = i === index);
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get).forEach((panel, i) => panel.hidden = i !== index);
}, _BaseTabs_firstFocusable_get = function _BaseTabs_firstFocusable_get() {
    return __classPrivateFieldGet(this, _BaseTabs_tabindex, "f").firstItem;
}, _BaseTabs_firstTab_get = function _BaseTabs_firstTab_get() {
    const [tab] = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get);
    return tab;
}, _BaseTabs_lastTab_get = function _BaseTabs_lastTab_get() {
    return __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).at(-1);
}, _BaseTabs_activeItemIndex_get = function _BaseTabs_activeItemIndex_get() {
    const { activeItem } = __classPrivateFieldGet(this, _BaseTabs_tabindex, "f");
    return __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(t => t === activeItem);
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
export { BaseTabs };
//# sourceMappingURL=BaseTabs.js.map