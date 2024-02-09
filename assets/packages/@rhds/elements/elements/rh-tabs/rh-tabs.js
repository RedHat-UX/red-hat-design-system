var _RhTabs_instances, _RhTabs_activeTab_get, _RhTabs_allTabs_get, _RhTabs_allTabs_set, _RhTabs_allPanels_get, _RhTabs_allPanels_set, _RhTabs_tabindex, _RhTabs_overflow, _RhTabs_logger, _RhTabs__allTabs, _RhTabs__allPanels, _RhTabs_activeIndex, _RhTabs_firstFocusable_get, _RhTabs_firstTab_get, _RhTabs_lastTab_get, _RhTabs_activeItemIndex_get, _RhTabs_onSlotchange, _RhTabs_updateAccessibility, _RhTabs_onTabExpand, _RhTabs_deactivateExcept, _RhTabs_firstLastClasses, _RhTabs_scrollLeft, _RhTabs_scrollRight;
var RhTabs_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
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
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{display:block;background:var(--_context-background-color);color:var(--_context-text)}[part=tabs-container]{position:relative;display:flex;overflow:hidden}[part=tabs-container]:before{position:absolute;right:0;bottom:0;left:0;border-width:0 0 var(--rh-border-width-sm,1px);border-color:var(--_border-color);border-style:solid}[part=panels],[part=tabs]{display:block}[part=tabs]{scrollbar-width:none;position:relative;max-width:100%;overflow-x:auto;display:flex;bottom:0;margin:0;width:auto;font-size:var(--rh-font-size-body-text-md, 1rem)}[part=tabs-container]:before,[part=tabs]:before,button:before{position:absolute;right:0;bottom:0;left:0;content:"";border-style:solid}[part=tabs]:before,button:before{top:0}[part=tabs]:before,button{border:0}button{flex:none;line-height:1;opacity:1}button:before{border-block-start-width:0}button:first-of-type{margin-inline-end:0;translate:0 0}button:nth-of-type(2){margin-inline-start:0;translate:0 0}button:disabled{pointer-events:none}#rhds-container{display:contents;--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-light, #c7c7c7));--_arrow-color:var(--rh-color-accent-base-on-light, #0066cc);--_overflow-button-text-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_overflow-button-disabled-text-color:#d2d2d2;--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-light, #151515)}#rhds-container.dark{--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-dark, #707070));--_arrow-color:var(--rh-color-accent-base-on-dark, #92c5f9);--_overflow-button-text-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_overflow-button-disabled-text-color:var(--rh-color-gray-50, #707070);--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-dark, #ffffff)}:host(:is([centered],[box=inset])) [part=tabs]{margin-inline:var(--rh-tabs-inset,var(--_inset-inline-margin,auto))}:host([box=inset]:not([vertical])) [part=tabs]{--_inset-inline-margin:var(--rh-space-2xl, 32px)}.overflow [part=panels]{--_panels-overflow-padding:var(--rh-space-2xl, 32px)}#previousTab+[part=tabs]{--_inset-inline-margin:0;position:relative;left:-1px;z-index:1}#nextTab,#previousTab{padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:var(--_context-background-color);color:var(--_overflow-button-text-color);position:relative;z-index:2;--pf-icon--size:14px}#nextTab{left:-1px}#nextTab:hover,#previousTab:hover{color:var(--_overflow-button-hover-text-color,var(--rh-color-text-primary-on-light,#151515))}#nextTab:before,#previousTab:before{border-block-start:var(--rh-border-width-sm,1px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-inline:var(--rh-border-width-sm,1px) solid var(--_border-color)}#previousTab:before{border-inline-width:0 1px}#nextTab:before{border-inline-width:1px 0}#nextTab:hover:before,#previousTab:hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--_border-color)}#nextTab:disabled,#previousTab:disabled{color:var(--_overflow-button-disabled-text-color)}@media screen and (min-width:768px){:host([vertical]) [part=container]{display:grid;grid-template-columns:max-content 1fr;grid-template-areas:"tabs panels"}:host([vertical]) [part=tabs-container]{grid-area:tabs;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}:host([vertical]) [part=panels]{grid-area:panels}:host([vertical]) [part=tabs-container]:before{height:100%;border-block-end-width:0;border-inline-start-width:var(--rh-border-width-sm,1px)}:host([vertical][box]) [part=tabs-container]:before{border-inline-start-width:0;border-inline-end-width:var(--rh-border-width-sm,1px)}:host([vertical]) [part=tabs]{flex-direction:column;flex-grow:1;max-width:15.625rem}}`;
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
let RhTabs = RhTabs_1 = class RhTabs extends LitElement {
    constructor() {
        super(...arguments);
        _RhTabs_instances.add(this);
        /**
         * Label for the scroll left button
         */
        this.labelScrollLeft = 'Scroll left';
        /**
         * Label for the scroll right button
         */
        this.labelScrollRight = 'Scroll right';
        /**
         * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
         * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
         */
        this.manual = false;
        /**
         * Aligns tabs to the center
         */
        this.centered = false;
        /**
         * Sets the theme for the tabs and panels
         * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
         */
        this.theme = null;
        /**
         * Sets tabs to a boxed style with or without an inset
         */
        this.box = null;
        /**
         * Sets the alignment of the tabs vertical
         */
        this.vertical = false;
        _RhTabs_tabindex.set(this, new RovingTabindexController(this));
        _RhTabs_overflow.set(this, new OverflowController(this));
        _RhTabs_logger.set(this, new Logger(this));
        _RhTabs__allTabs.set(this, []);
        _RhTabs__allPanels.set(this, []);
        _RhTabs_activeIndex.set(this, 0);
        _RhTabs_onTabExpand.set(this, (event) => {
            if (!(event instanceof TabExpandEvent) ||
                !__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).length ||
                !__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get).length) {
                return;
            }
            if (event.active) {
                if (event.tab !== __classPrivateFieldGet(this, _RhTabs_tabindex, "f").activeItem) {
                    __classPrivateFieldGet(this, _RhTabs_tabindex, "f").updateActiveItem(event.tab);
                }
                this.activeIndex = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).findIndex(tab => tab === event.tab);
            }
        });
    }
    static isTab(element) {
        return element instanceof RhTab;
    }
    static isPanel(element) {
        return element instanceof RhTabPanel;
    }
    /**
     * Index of the active tab
     */
    get activeIndex() {
        return __classPrivateFieldGet(this, _RhTabs_activeIndex, "f");
    }
    set activeIndex(index) {
        const oldIndex = this.activeIndex;
        const tab = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get)[index];
        if (tab) {
            if (tab.disabled) {
                __classPrivateFieldGet(this, _RhTabs_logger, "f").warn(`Disabled tabs can not be active, setting first focusable tab to active`);
                __classPrivateFieldGet(this, _RhTabs_tabindex, "f").updateActiveItem(__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_firstFocusable_get));
                index = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_activeItemIndex_get);
            }
            else if (!tab.active) {
                // if the activeIndex was set through the CLI e.g.`$0.activeIndex = 2`
                tab.active = true;
                return;
            }
        }
        if (index === -1) {
            __classPrivateFieldGet(this, _RhTabs_logger, "f").warn(`No active tab found, setting first focusable tab to active`);
            const first = __classPrivateFieldGet(this, _RhTabs_tabindex, "f").firstItem;
            __classPrivateFieldGet(this, _RhTabs_tabindex, "f").updateActiveItem(first);
            index = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_activeItemIndex_get);
        }
        __classPrivateFieldSet(this, _RhTabs_activeIndex, index, "f");
        this.requestUpdate('activeIndex', oldIndex);
        __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get)[__classPrivateFieldGet(this, _RhTabs_activeIndex, "f")].hidden = false;
        // close all tabs that are not the activeIndex
        __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_deactivateExcept).call(this, __classPrivateFieldGet(this, _RhTabs_activeIndex, "f"));
    }
    get canShowScrollButtons() {
        return !this.vertical;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('expand', __classPrivateFieldGet(this, _RhTabs_onTabExpand, "f"));
        RhTabs_1.instances.add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        RhTabs_1.instances.delete(this);
    }
    willUpdate() {
        const { activeItem } = __classPrivateFieldGet(this, _RhTabs_tabindex, "f");
        // If RTI has an activeItem, update the roving tabindex controller
        if (!this.manual &&
            activeItem &&
            activeItem !== __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_activeTab_get) &&
            activeItem.ariaDisabled !== 'true') {
            activeItem.active = true;
        }
    }
    async firstUpdated() {
        this.tabList.addEventListener('scroll', __classPrivateFieldGet(this, _RhTabs_overflow, "f").onScroll.bind(this));
    }
    render() {
        const { on = '' } = this;
        const { scrollIconSet, scrollIconLeft, scrollIconRight } = this.constructor;
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">
        <div part="container" class="${classMap({ overflow: __classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons })}">
          <div part="tabs-container">${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
            <button id="previousTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowLeft}"
                @click="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_scrollLeft)}">
              <pf-icon icon="${scrollIconLeft}" set="${scrollIconSet}" loading="eager"></pf-icon>
            </button>`}
            <slot name="tab"
                  part="tabs"
                  role="tablist"
                  @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot> ${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
            <button id="nextTab" tabindex="-1"
                aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowRight}"
                @click="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_scrollRight)}">
              <pf-icon icon="${scrollIconRight}" set="${scrollIconSet}" loading="eager"></pf-icon>
            </button>`}
          </div>
          <slot part="panels" @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot>
        </div>
      </div>
    `;
    }
};
_RhTabs_tabindex = new WeakMap(), _RhTabs_overflow = new WeakMap(), _RhTabs_logger = new WeakMap(), _RhTabs__allTabs = new WeakMap(), _RhTabs__allPanels = new WeakMap(), _RhTabs_activeIndex = new WeakMap(), _RhTabs_onTabExpand = new WeakMap(), _RhTabs_instances = new WeakSet(), _RhTabs_activeTab_get = function _RhTabs_activeTab_get() {
    const [tab] = __classPrivateFieldGet(this, _RhTabs__allTabs, "f").filter(tab => tab.active);
    return tab;
}, _RhTabs_allTabs_get = function _RhTabs_allTabs_get() {
    return __classPrivateFieldGet(this, _RhTabs__allTabs, "f");
}, _RhTabs_allTabs_set = function _RhTabs_allTabs_set(tabs) {
    __classPrivateFieldSet(this, _RhTabs__allTabs, tabs.filter(tab => this.constructor.isTab(tab)), "f");
}, _RhTabs_allPanels_get = function _RhTabs_allPanels_get() {
    return __classPrivateFieldGet(this, _RhTabs__allPanels, "f");
}, _RhTabs_allPanels_set = function _RhTabs_allPanels_set(panels) {
    __classPrivateFieldSet(this, _RhTabs__allPanels, panels.filter(panel => this.constructor.isPanel(panel)), "f");
}, _RhTabs_firstFocusable_get = function _RhTabs_firstFocusable_get() {
    return __classPrivateFieldGet(this, _RhTabs_tabindex, "f").firstItem;
}, _RhTabs_firstTab_get = function _RhTabs_firstTab_get() {
    const [tab] = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get);
    return tab;
}, _RhTabs_lastTab_get = function _RhTabs_lastTab_get() {
    return __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).at(-1);
}, _RhTabs_activeItemIndex_get = function _RhTabs_activeItemIndex_get() {
    const { activeItem } = __classPrivateFieldGet(this, _RhTabs_tabindex, "f");
    return __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).findIndex(t => t === activeItem);
}, _RhTabs_onSlotchange = function _RhTabs_onSlotchange(event) {
    if (event.target.name === 'tab') {
        __classPrivateFieldSet(this, _RhTabs_instances, this.tabs, "a", _RhTabs_allTabs_set);
    }
    else {
        __classPrivateFieldSet(this, _RhTabs_instances, this.panels, "a", _RhTabs_allPanels_set);
    }
    if ((__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).length === __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get).length) &&
        (__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).length !== 0 || __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get).length !== 0)) {
        __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_updateAccessibility).call(this);
        __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_firstLastClasses).call(this);
        __classPrivateFieldGet(this, _RhTabs_tabindex, "f").initItems(__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get));
        this.activeIndex = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).findIndex(tab => tab.active);
        __classPrivateFieldGet(this, _RhTabs_tabindex, "f").updateActiveItem(__classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_activeTab_get));
        __classPrivateFieldGet(this, _RhTabs_overflow, "f").init(this.tabList, __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get));
    }
}, _RhTabs_updateAccessibility = function _RhTabs_updateAccessibility() {
    __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).forEach((tab, index) => {
        const panel = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get)[index];
        if (!panel.hasAttribute('aria-labelledby')) {
            panel.setAttribute('aria-labelledby', tab.id);
        }
        tab.setAttribute('aria-controls', panel.id);
    });
}, _RhTabs_deactivateExcept = function _RhTabs_deactivateExcept(index) {
    __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allTabs_get).forEach((tab, i) => tab.active = i === index);
    __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_allPanels_get).forEach((panel, i) => panel.hidden = i !== index);
}, _RhTabs_firstLastClasses = function _RhTabs_firstLastClasses() {
    __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_firstTab_get)?.classList.add('first');
    __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_lastTab_get)?.classList.add('last');
}, _RhTabs_scrollLeft = function _RhTabs_scrollLeft() {
    __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollLeft();
}, _RhTabs_scrollRight = function _RhTabs_scrollRight() {
    __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollRight();
};
RhTabs.styles = [styles];
/** Time in milliseconds to debounce between scroll events and updating scroll button state */
RhTabs.scrollTimeoutDelay = 0;
/** Icon name to use for the scroll left button */
RhTabs.scrollIconLeft = 'angle-left';
/** Icon name to use for the scroll right button */
RhTabs.scrollIconRight = 'angle-right';
/** Icon set to use for the scroll buttons */
RhTabs.scrollIconSet = 'fas';
RhTabs.instances = new Set();
// Moved to bottom of file to avoid Custom Element Manifest from incorrectly
// parsing the file due to the static block. This block will be removed from
// rh-tab.ts after PFE 3.0 is released and we migrate to the TabsController.
(() => {
    // on resize check for overflows to add or remove scroll buttons
    window.addEventListener('resize', () => {
        for (const instance of RhTabs_1.instances) {
            __classPrivateFieldGet(instance, _RhTabs_overflow, "f").onScroll();
        }
    }, { capture: false });
})();
__decorate([
    property({ reflect: true, attribute: 'label-scroll-left' })
], RhTabs.prototype, "labelScrollLeft", void 0);
__decorate([
    property({ reflect: true, attribute: 'label-scroll-right' })
], RhTabs.prototype, "labelScrollRight", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "manual", void 0);
__decorate([
    property({ attribute: false })
], RhTabs.prototype, "activeIndex", null);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTabs.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "centered", void 0);
__decorate([
    cascades('rh-tab'),
    deprecation({
        alias: 'css property --rh-tabs-active-border-color',
        reflect: true,
        attribute: 'theme',
    })
], RhTabs.prototype, "theme", void 0);
__decorate([
    cascades('rh-tab', 'rh-tab-panel'),
    property({ reflect: true })
], RhTabs.prototype, "box", void 0);
__decorate([
    cascades('rh-tab', 'rh-tab-panel'),
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "vertical", void 0);
__decorate([
    colorContextConsumer()
], RhTabs.prototype, "on", void 0);
__decorate([
    queryAssignedElements({ slot: 'tab' })
], RhTabs.prototype, "tabs", void 0);
__decorate([
    queryAssignedElements()
], RhTabs.prototype, "panels", void 0);
__decorate([
    query('[part="tabs"]')
], RhTabs.prototype, "tabList", void 0);
RhTabs = RhTabs_1 = __decorate([
    customElement('rh-tabs')
], RhTabs);
export { RhTabs };
//# sourceMappingURL=rh-tabs.js.map