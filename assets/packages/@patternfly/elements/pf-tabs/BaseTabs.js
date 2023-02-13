var _BaseTabs_instances, _a, _BaseTabs_rovingTabindexController, _BaseTabs_instances_1, _BaseTabs_showScrollButtons, _BaseTabs_overflowOnLeft, _BaseTabs_overflowOnRight, _BaseTabs_logger, _BaseTabs__allTabs, _BaseTabs__allPanels, _BaseTabs_scrollTimeout, _BaseTabs_activeIndex, _BaseTabs_activeTab_get, _BaseTabs_allTabs_get, _BaseTabs_allTabs_set, _BaseTabs_allPanels_get, _BaseTabs_allPanels_set, _BaseTabs_onSlotchange, _BaseTabs_updateAccessibility, _BaseTabs_onTabExpand, _BaseTabs_deactivateExcept, _BaseTabs_firstFocusable_get, _BaseTabs_lastFocusable_get, _BaseTabs_firstTab_get, _BaseTabs_lastTab_get, _BaseTabs_activeItemIndex_get, _BaseTabs_activate, _BaseTabs_select, _BaseTabs_onKeydown, _BaseTabs_onScroll, _BaseTabs_firstLastClasses, _BaseTabs_setOverflowState, _BaseTabs_scrollLeft, _BaseTabs_scrollRight;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { isElementInView } from '@patternfly/pfe-core/functions/isElementInView.js';
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
export class BaseTabs extends LitElement {
    constructor() {
        super(...arguments);
        _BaseTabs_instances.add(this);
        _BaseTabs_rovingTabindexController.set(this, new RovingTabindexController(this));
        _BaseTabs_showScrollButtons.set(this, false);
        _BaseTabs_overflowOnLeft.set(this, false);
        _BaseTabs_overflowOnRight.set(this, false);
        _BaseTabs_logger.set(this, new Logger(this));
        _BaseTabs__allTabs.set(this, []);
        _BaseTabs__allPanels.set(this, []);
        _BaseTabs_scrollTimeout.set(this, void 0);
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
                __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).length === 0 || __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allPanels_get).length === 0) {
                return;
            }
            const target = event;
            if (target.active) {
                this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(tab => tab === target.tab);
            }
        });
        // RTI: will handle key events
        _BaseTabs_onKeydown.set(this, (event) => {
            const foundTab = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).find(tab => tab === event.target);
            if (!foundTab) {
                return;
            }
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    event.preventDefault();
                    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_select).call(this, __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").activeItem);
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    event.preventDefault();
                    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_select).call(this, __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").activeItem);
                    break;
                case 'Home':
                    event.preventDefault();
                    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_select).call(this, __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstFocusable_get));
                    break;
                case 'End':
                    event.preventDefault();
                    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_select).call(this, __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_lastFocusable_get));
                    break;
                default:
                    return;
            }
        });
        _BaseTabs_onScroll.set(this, () => {
            clearTimeout(__classPrivateFieldGet(this, _BaseTabs_scrollTimeout, "f"));
            const { scrollTimeoutDelay } = this.constructor;
            __classPrivateFieldSet(this, _BaseTabs_scrollTimeout, setTimeout(() => __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_setOverflowState).call(this), scrollTimeoutDelay), "f");
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
                __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").updateActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstFocusable_get));
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
            const first = __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").firstItem;
            __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").updateActiveItem(first);
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
        this.addEventListener('keydown', __classPrivateFieldGet(this, _BaseTabs_onKeydown, "f"));
        __classPrivateFieldGet(BaseTabs, _a, "f", _BaseTabs_instances_1).add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(BaseTabs, _a, "f", _BaseTabs_instances_1).delete(this);
    }
    render() {
        const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor;
        return html `
      <div part="container">
        <div part="tabs-container">${!__classPrivateFieldGet(this, _BaseTabs_showScrollButtons, "f") ? '' : html `
          <button id="previousTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
              ?disabled="${!__classPrivateFieldGet(this, _BaseTabs_overflowOnLeft, "f")}"
              @click="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_scrollLeft)}">
            <pf-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
          <slot name="tab"
                part="tabs"
                role="tablist"
                @slotchange="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_onSlotchange)}"></slot> ${!__classPrivateFieldGet(this, _BaseTabs_showScrollButtons, "f") ? '' : html `
          <button id="nextTab" tabindex="-1"
              aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
              ?disabled="${!__classPrivateFieldGet(this, _BaseTabs_overflowOnRight, "f")}"
              @click="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_scrollRight)}">
            <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
          </button>`}
        </div>
        <slot part="panels" @slotchange="${__classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_onSlotchange)}"></slot>
      </div>
    `;
    }
    async firstUpdated() {
        __classPrivateFieldGet(this, _BaseTabs_onScroll, "f").call(this);
        this.tabList.addEventListener('scroll', __classPrivateFieldGet(this, _BaseTabs_onScroll, "f"));
    }
    /** override to prevent scroll buttons from showing */
    get canShowScrollButtons() {
        return true;
    }
}
_a = BaseTabs, _BaseTabs_rovingTabindexController = new WeakMap(), _BaseTabs_showScrollButtons = new WeakMap(), _BaseTabs_overflowOnLeft = new WeakMap(), _BaseTabs_overflowOnRight = new WeakMap(), _BaseTabs_logger = new WeakMap(), _BaseTabs__allTabs = new WeakMap(), _BaseTabs__allPanels = new WeakMap(), _BaseTabs_scrollTimeout = new WeakMap(), _BaseTabs_activeIndex = new WeakMap(), _BaseTabs_onTabExpand = new WeakMap(), _BaseTabs_onKeydown = new WeakMap(), _BaseTabs_onScroll = new WeakMap(), _BaseTabs_instances = new WeakSet(), _BaseTabs_activeTab_get = function _BaseTabs_activeTab_get() {
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
        __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").initItems(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get));
        this.activeIndex = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(tab => tab.active);
        __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").updateActiveItem(__classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_activeTab_get));
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
    return __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").firstItem;
}, _BaseTabs_lastFocusable_get = function _BaseTabs_lastFocusable_get() {
    return __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f").lastItem;
}, _BaseTabs_firstTab_get = function _BaseTabs_firstTab_get() {
    const [tab] = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get);
    return tab;
}, _BaseTabs_lastTab_get = function _BaseTabs_lastTab_get() {
    return __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).at(-1);
}, _BaseTabs_activeItemIndex_get = function _BaseTabs_activeItemIndex_get() {
    const { activeItem } = __classPrivateFieldGet(this, _BaseTabs_rovingTabindexController, "f");
    return __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get).findIndex(t => t === activeItem);
}, _BaseTabs_activate = function _BaseTabs_activate(selectedTab) {
    if (selectedTab.ariaDisabled !== 'true') {
        selectedTab.active = true;
    }
}, _BaseTabs_select = async function _BaseTabs_select(selectedTab) {
    if (!this.manual) {
        __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_activate).call(this, selectedTab);
    }
}, _BaseTabs_firstLastClasses = function _BaseTabs_firstLastClasses() {
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstTab_get).classList.add('first');
    __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_lastTab_get).classList.add('last');
}, _BaseTabs_setOverflowState = function _BaseTabs_setOverflowState() {
    const { canShowScrollButtons } = this;
    __classPrivateFieldSet(this, _BaseTabs_overflowOnLeft, canShowScrollButtons && !isElementInView(this.tabList, __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_firstTab_get)), "f");
    __classPrivateFieldSet(this, _BaseTabs_overflowOnRight, canShowScrollButtons && !isElementInView(this.tabList, __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_lastTab_get)), "f");
    __classPrivateFieldSet(this, _BaseTabs_showScrollButtons, canShowScrollButtons && (__classPrivateFieldGet(this, _BaseTabs_overflowOnLeft, "f") || __classPrivateFieldGet(this, _BaseTabs_overflowOnRight, "f")), "f");
    this.requestUpdate();
}, _BaseTabs_scrollLeft = function _BaseTabs_scrollLeft() {
    const container = this.tabList;
    const childrenArr = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get);
    let firstElementInView;
    let lastElementOutOfView;
    for (let i = 0; i < childrenArr.length && !firstElementInView; i++) {
        if (isElementInView(container, childrenArr[i], false)) {
            firstElementInView = childrenArr[i];
            lastElementOutOfView = childrenArr[i - 1];
        }
    }
    if (lastElementOutOfView) {
        container.scrollLeft -= lastElementOutOfView.scrollWidth;
    }
    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_setOverflowState).call(this);
}, _BaseTabs_scrollRight = function _BaseTabs_scrollRight() {
    const container = this.tabList;
    const childrenArr = __classPrivateFieldGet(this, _BaseTabs_instances, "a", _BaseTabs_allTabs_get);
    let lastElementInView;
    let firstElementOutOfView;
    for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
        if (isElementInView(container, childrenArr[i], false)) {
            lastElementInView = childrenArr[i];
            firstElementOutOfView = childrenArr[i + 1];
        }
    }
    if (firstElementOutOfView) {
        container.scrollLeft += firstElementOutOfView.scrollWidth;
    }
    __classPrivateFieldGet(this, _BaseTabs_instances, "m", _BaseTabs_setOverflowState).call(this);
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
            __classPrivateFieldGet(instance, _BaseTabs_onScroll, "f").call(instance);
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