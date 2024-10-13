var _PfTabs_instances, _PfTabs_activeIndex, _PfTabs_ctx_get, _PfTabs_overflow, _PfTabs_tabs, _PfTabs_tabindex, _PfTabs_logger, _PfTabs_scrollLeft, _PfTabs_scrollRight, _PfTabs_onSlotChange, _PfTabs_onExpand;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { provide } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { OverflowController } from '@patternfly/pfe-core/controllers/overflow-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { TabsAriaController } from '@patternfly/pfe-core/controllers/tabs-aria-controller.js';
import { PfTab } from './pf-tab.js';
import { PfTabPanel } from './pf-tab-panel.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { TabExpandEvent, context } from './context.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n}\n\n[part="tabs-container"] {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n}\n\n[part="tabs-container"]::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-style: solid;\n}\n\n:host button {\n  opacity: 1;\n}\n\n:host button:nth-of-type(1) {\n  margin-inline-end: 0;\n  translate: 0 0;\n}\n\n:host button:nth-of-type(2) {\n  margin-inline-start: 0;\n  translate: 0 0;\n}\n\n[part="tabs"],\n[part="panels"] {\n  display: block;\n}\n\n[part="tabs"] {\n  scrollbar-width: none;\n  position: relative;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\n[part="tabs-container"]::before,\n[part="tabs"]::before,\nbutton::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border-style: solid;\n}\n\n[part="tabs"]::before,\nbutton::before {\n  top: 0;\n}\n\nbutton,\n[part="tabs"]::before {\n  border: 0;\n}\n\nbutton {\n  flex: none;\n  line-height: 1;\n  opacity: 0;\n}\n\nbutton::before {\n  border-block-start-width: 0;\n}\n\nbutton:nth-of-type(1) {\n  translate: -100% 0;\n}\n\nbutton:nth-of-type(2) {\n  translate: 100% 0;\n}\n\nbutton:disabled {\n  pointer-events: none;\n}\n\n[part="tabs-container"] {\n  width: var(--pf-c-tabs--Width, auto);\n  padding-inline-end: var(--pf-c-tabs--inset, 0);\n  padding-inline-start: var(--pf-c-tabs--inset, 0);\n}\n\n[part="tabs-container"]::before {\n  border-color: var(--pf-c-tabs--before--BorderColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  border-block-start-width: var(--pf-c-tabs--before--BorderTopWidth, 0);\n  border-inline-end-width: var(--pf-c-tabs--before--BorderRightWidth, 0);\n  border-block-end-width:  var(--pf-c-tabs--before--BorderBottomWidth, var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n  border-inline-start-width: var(--pf-c-tabs--before--BorderLeftWidth, 0);\n}\n\n:host([box]) [part="tabs-container"] {\n  --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs--m-box__link--BackgroundColor, var(--pf-global--BackgroundColor--200, #f0f0f0));\n  --pf-c-tabs__link--disabled--BackgroundColor: var(--pf-c-tabs--m-box__link--disabled--BackgroundColor, var(--pf-global--disabled-color--200, #d2d2d2));\n  --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--before--BorderRightWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--disabled--before--BorderRightWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--after--Top: 0;\n  --pf-c-tabs__link--after--Bottom: auto;\n}\n\n:host([box]) ::slotted(pf-tab:last-of-type) {\n  --pf-c-tabs__link--before--BorderRightWidth: 0;\n}\n\n:host([box]) button:nth-of-type(2)::before {\n  left: calc(var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)) * -1);\n}\n\n:host([box]) pf-tab[aria-selected="true"] + pf-tab {\n  --pf-c-tabs__link--before--Left: 0;\n}\n\n:host([box="light"]) [part="tabs-container"] {\n  --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs--m-color-scheme--light-300__link--BackgroundColor, transparent);\n  --pf-c-tabs__item--m-current__link--BackgroundColor: var(--pf-c-tabs--m-color-scheme--light-300__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--light-300, #f0f0f0));\n  --pf-c-tabs__link--disabled--BackgroundColor: var(--pf-c-tabs--m-color-scheme--light-300__link--disabled--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5));\n}\n\n:host([vertical]) [part="tabs-container"] {\n  --pf-c-tabs--Width: var(--pf-c-tabs--m-vertical--Width, 100%);\n  --pf-c-tabs--inset: var(--pf-c-tabs--m-vertical--inset, var(--pf-global--spacer--lg, 1.5rem));\n  --pf-c-tabs--before--BorderBottomWidth: 0;  /* *override user setting* border bottom should always be 0 for vertical tabs */\n  --pf-c-tabs__link--PaddingTop: var(--pf-c-tabs--m-vertical__link--PaddingTop, var(--pf-global--spacer--md, 1rem));\n  --pf-c-tabs__link--PaddingBottom: var(--pf-c-tabs--m-vertical__link--PaddingBottom, var(--pf-global--spacer--md, 1rem));\n  --pf-c-tabs__link--before--Left: 0;\n  --pf-c-tabs__link--disabled--before--BorderBottomWidth: 0; /* *override user setting* border bottom for disabled should always be 0 for vertical tabs */\n  --pf-c-tabs__link--disabled--before--BorderLeftWidth: var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--after--Top: 0;\n  --pf-c-tabs__link--after--Right: auto;\n\n  display: inline-flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0;\n  overflow: visible;\n}\n\n:host([vertical]) [part="tabs"] {\n  position: relative;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: var(--pf-c-tabs--m-vertical--MaxWidth, 15.625rem);\n}\n\n:host([vertical]) [part="tabs"]::before {\n  position: absolute;\n  right: auto;\n  border-style: solid;\n  border-color: var(--pf-c-tabs--m-vertical__list--before--BorderColor, var(--pf-c-tabs--before--BorderColor, var(--pf-global--BorderColor--100, #d2d2d2)));\n  border-block-start-width: var(--pf-c-tabs--m-vertical__list--before--BorderTopWidth, 0);\n  border-inline-end-width: var(--pf-c-tabs--m-vertical__list--before--BorderRightWidth, 0);\n  border-block-end-width: var(--pf-c-tabs--m-vertical__list--before--BorderBottomWidth, 0);\n  border-inline-start-width: var(--pf-c-tabs--m-vertical__list--before--BorderLeftWidth, var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n}\n\n:host([vertical]) ::slotted(pf-tab:first-of-type) {\n  margin-block-start: var(--pf-c-tabs--inset, 0);\n}\n\n:host([vertical]) ::slotted(pf-tab:last-of-type) {\n  margin-block-end: var(--pf-c-tabs--inset, 0);\n}\n\n:host([box][vertical]) [part="tabs-container"] {\n  --pf-c-tabs--inset: var(--pf-c-tabs--m-vertical--m-box--inset, var(--pf-global--spacer--xl, 2rem));\n  --pf-c-tabs--m-vertical__list--before--BorderLeftWidth: 0; /* *override user setting* border left should be 0 for vertical box; */\n  --pf-c-tabs--m-vertical__list--before--BorderRightWidth: var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--disabled--before--BorderRightWidth: var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  /* --pf-c-tabs__link--disabled--before--BorderBottomWidth: var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)); */\n  --pf-c-tabs__link--disabled--before--BorderLeftWidth: 0; /* *override user setting* border left should be 0 for disabled ; */\n}\n\n:host([box][vertical]) [part="tabs"]::before {\n  right: 0;\n  left: auto;\n}\n\n:host([box][vertical]) ::slotted(pf-tab:last-of-type) {\n  --pf-c-tabs__link--before--BorderBottomWidth: 0;\n  --pf-c-tabs__link--before--BorderRightWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n}\n\n:host([box][vertical]) ::slotted(pf-tab[aria-selected="true"]) {\n  --pf-c-tabs__link--before--BorderRightColor: var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));\n  --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2));\n  --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n}\n\n:host([box][vertical]) ::slotted(pf-tab[aria-selected="true"]:first-of-type) {\n  --pf-c-tabs__link--before--BorderTopWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n}\n\n[part="tabs"] {\n  display: var(--pf-c-tabs__list--Display, flex);\n}\n\nbutton {\n  width: var(--pf-c-tabs__scroll-button--Width, var(--pf-global--spacer--2xl, 3rem));\n  color: var(--pf-c-tabs__scroll-button--Color, var(--pf-global--Color--100, #151515));\n  background-color: var(--pf-c-tabs__scroll-button--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));\n  outline-offset: var(--pf-c-tabs__scroll-button--OutlineOffset, calc(-1 * var(--pf-global--spacer--xs, 0.25rem)));\n  transition:\n    margin var(--pf-c-tabs__scroll-button--TransitionDuration--margin, .125s),\n    translate var(--pf-c-tabs__scroll-button--TransitionDuration--transform, .125s), opacity var(--pf-c-tabs__scroll-button--TransitionDuration--opacity, .125s);\n  --pf-icon--size: 16px;\n}\n\nbutton:hover {\n  --pf-c-tabs__scroll-button--Color: var(--pf-c-tabs__scroll-button--hover--Color, var(--pf-global--active-color--100, #06c));\n}\n\nbutton::before {\n  border-color: var(--pf-c-tabs__scroll-button--before--BorderColor, var(--pf-c-tabs--before--BorderColor, var(--pf-global--BorderColor--100, #d2d2d2)));\n  border-inline-end-width: var(--pf-c-tabs__scroll-button--before--BorderRightWidth, 0);\n  border-block-end-width: var(--pf-c-tabs__scroll-button--before--BorderBottomWidth, var(--pf-c-tabs__scroll-button--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n  border-inline-start-width: var(--pf-c-tabs__scroll-button--before--BorderLeftWidth, 0);\n}\n\nbutton:nth-of-type(1) {\n  --pf-c-tabs__scroll-button--before--BorderRightWidth: var(--pf-c-tabs__scroll-button--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  margin-inline-end: calc(var(--pf-c-tabs__scroll-button--Width, var(--pf-global--spacer--2xl, 3rem)) * -1);\n}\n\nbutton:nth-of-type(2) {\n  --pf-c-tabs__scroll-button--before--BorderLeftWidth: var(--pf-c-tabs__scroll-button--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  margin-inline-start: calc(var(--pf-c-tabs__scroll-button--Width, var(--pf-global--spacer--2xl, 3rem)) * -1);\n}\n\nbutton:disabled {\n  --pf-c-tabs__scroll-button--Color: var(--pf-c-tabs__scroll-button--disabled--Color, var(--pf-global--disabled-color--200, #d2d2d2));\n}\n\n:host(:not[vertical]) [part="tabs-container"] {\n  --pf-c-tabs--inset: 0;\n  --pf-c-tabs--m-vertical--inset: 0;\n  --pf-c-tabs--m-vertical--m-box--inset: 0;\n}\n\n:host([fill]) [part="tabs"] {\n  flex-basis: 100%;\n}\n\n:host([fill]) ::slotted(pf-tab) {\n  flex-grow: 1;\n}\n\n:host([fill]) ::slotted(pf-tab:first-of-type) {\n  --pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth: 0;\n}\n\n:host([fill]) ::slotted(pf-tab:last-of-type) {\n  --pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth: 0;\n}\n\n:host([border-bottom="false"]) [part="tabs-container"] {\n  --pf-c-tabs--before--BorderBottomWidth: 0; /* *override user setting* when border-bottom is false border bottom styles should be 0; */\n  --pf-c-tabs__link--before--BorderBottomWidth: 0;\n}\n`;
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
let PfTabs = class PfTabs extends LitElement {
    constructor() {
        super(...arguments);
        _PfTabs_instances.add(this);
        /**
         * Aria Label for the left scroll button
         */
        this.labelScrollLeft = 'Scroll left';
        /**
         * Aria Label for the right scroll button
         */
        this.labelScrollRight = 'Scroll left';
        /**
         * Box styling on tabs. Defaults to null
         */
        this.box = null;
        /**
         * Set to true to enable vertical tab styling.
         */
        this.vertical = false;
        /**
         * Set to true to enable filled tab styling.
         */
        this.fill = false;
        /**
         * Border bottom tab styling on tabs. To remove the bottom border, set this prop to false.
         */
        this.borderBottom = 'true';
        /**
         * Set's the tabs to be manually activated. This means that the tabs will not automatically select
         * unless a user clicks on them or uses the keyboard space or enter key to select them.  Roving
         * tabindex will still update allowing user to keyboard navigate through the tabs with arrow keys.
         */
        this.manual = false;
        _PfTabs_activeIndex.set(this, -1);
        this.ctx = __classPrivateFieldGet(this, _PfTabs_instances, "a", _PfTabs_ctx_get);
        _PfTabs_overflow.set(this, new OverflowController(this, { scrollTimeoutDelay: 200 }));
        _PfTabs_tabs.set(this, new TabsAriaController(this, {
            isTab: (x) => x.localName === 'pf-tab',
            isPanel: (x) => x.localName === 'pf-tab-panel',
            isActiveTab: x => x.active,
        }));
        _PfTabs_tabindex.set(this, RovingTabindexController.of(this, {
            getItemsContainer: () => this.tabsContainer ?? null,
            getItems: () => this.tabs ?? [],
        }));
        _PfTabs_logger.set(this, new Logger(this));
    }
    static isExpandEvent(event) {
        return event instanceof TabExpandEvent;
    }
    /** The index of the active tab */
    get activeIndex() {
        return __classPrivateFieldGet(this, _PfTabs_activeIndex, "f");
    }
    set activeIndex(v) {
        __classPrivateFieldGet(this, _PfTabs_tabindex, "f").atFocusedItemIndex = v;
        __classPrivateFieldSet(this, _PfTabs_activeIndex, v, "f");
        this.activeTab = this.tabs[v];
        for (const tab of this.tabs) {
            if (!this.activeTab?.disabled) {
                tab.active = tab === this.activeTab;
            }
            __classPrivateFieldGet(this, _PfTabs_tabs, "f").panelFor(tab)?.toggleAttribute('hidden', !tab.active);
        }
    }
    get tabs() {
        return __classPrivateFieldGet(this, _PfTabs_tabs, "f").tabs;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('expand', __classPrivateFieldGet(this, _PfTabs_instances, "m", _PfTabs_onExpand));
        this.id || (this.id = getRandomId(this.localName));
        this.activeIndex = __classPrivateFieldGet(this, _PfTabs_tabindex, "f").atFocusedItemIndex;
    }
    async getUpdateComplete() {
        const here = await super.getUpdateComplete();
        const ps = await Promise.all(Array.from(this.querySelectorAll('pf-tab, pf-tab-panel'), x => x.updateComplete));
        return here && ps.every(x => !!x);
    }
    willUpdate() {
        if (!this.manual && this.activeIndex !== __classPrivateFieldGet(this, _PfTabs_tabindex, "f").atFocusedItemIndex) {
            this.activeIndex = __classPrivateFieldGet(this, _PfTabs_tabindex, "f").atFocusedItemIndex;
        }
        __classPrivateFieldGet(this, _PfTabs_overflow, "f").update();
        this.ctx = __classPrivateFieldGet(this, _PfTabs_instances, "a", _PfTabs_ctx_get);
    }
    activeTabChanged(old, activeTab) {
        if (activeTab?.disabled) {
            __classPrivateFieldGet(this, _PfTabs_logger, "f").warn('Active tab is disabled. Setting to first focusable tab');
            this.activeIndex = 0;
        }
        if (activeTab) {
            this.activeIndex = this.tabs.indexOf(activeTab);
        }
    }
    firstUpdated() {
        if (this.tabs.length && this.activeIndex === -1) {
            this.select(this.tabs.findIndex(x => !x.disabled));
        }
    }
    render() {
        return html `
      <div part="container"
           class="${classMap({ overflow: __classPrivateFieldGet(this, _PfTabs_overflow, "f").showScrollButtons })}">
        <div part="tabs-container">${!__classPrivateFieldGet(this, _PfTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="previousTab" tabindex="-1"
              aria-label="${this.labelScrollLeft}"
              ?disabled="${!__classPrivateFieldGet(this, _PfTabs_overflow, "f").overflowLeft}"
              @click="${__classPrivateFieldGet(this, _PfTabs_instances, "m", _PfTabs_scrollLeft)}">
            <pf-icon icon="angle-left" set="fas" loading="eager"></pf-icon>
          </button>`}
          <div id="tabs" part="tabs" role="tablist">
            <slot name="tab" @slotchange="${__classPrivateFieldGet(this, _PfTabs_instances, "m", _PfTabs_onSlotChange)}" @scroll="${__classPrivateFieldGet(this, _PfTabs_overflow, "f").onScroll}"></slot>
          </div>
          ${!__classPrivateFieldGet(this, _PfTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="nextTab" tabindex="-1"
              aria-label="${this.labelScrollRight}"
              ?disabled="${!__classPrivateFieldGet(this, _PfTabs_overflow, "f").overflowRight}"
              @click="${__classPrivateFieldGet(this, _PfTabs_instances, "m", _PfTabs_scrollRight)}">
            <pf-icon icon="angle-right" set="fas" loading="eager"></pf-icon>
          </button>`}
        </div>
        <slot part="panels"></slot>
      </div>
    `;
    }
    select(tab) {
        if (typeof tab === 'number') {
            this.activeIndex = tab;
        }
        else {
            this.activeIndex = this.tabs.indexOf(tab);
        }
    }
};
_PfTabs_activeIndex = new WeakMap();
_PfTabs_overflow = new WeakMap();
_PfTabs_tabs = new WeakMap();
_PfTabs_tabindex = new WeakMap();
_PfTabs_logger = new WeakMap();
_PfTabs_instances = new WeakSet();
_PfTabs_ctx_get = function _PfTabs_ctx_get() {
    const { activeTab, borderBottom, box, fill, manual, vertical } = this;
    return { activeTab, borderBottom, box, fill, manual, vertical };
};
_PfTabs_scrollLeft = function _PfTabs_scrollLeft() {
    __classPrivateFieldGet(this, _PfTabs_overflow, "f").scrollLeft();
};
_PfTabs_scrollRight = function _PfTabs_scrollRight() {
    __classPrivateFieldGet(this, _PfTabs_overflow, "f").scrollRight();
};
_PfTabs_onSlotChange = function _PfTabs_onSlotChange() {
    if (this.tabs) {
        __classPrivateFieldGet(this, _PfTabs_overflow, "f").init(this.tabsContainer, this.tabs);
    }
};
_PfTabs_onExpand = function _PfTabs_onExpand(event) {
    if (event instanceof TabExpandEvent
        && !event.defaultPrevented && this.tabs.includes(event.tab)) {
        this.select(event.tab);
    }
};
PfTabs.styles = [styles];
PfTabs.scrollTimeoutDelay = 150;
PfTabs.version = "4.0.2";
__decorate([
    property({ reflect: false, attribute: 'label-scroll-left' })
], PfTabs.prototype, "labelScrollLeft", void 0);
__decorate([
    property({ reflect: false, attribute: 'label-scroll-right' })
], PfTabs.prototype, "labelScrollRight", void 0);
__decorate([
    property({ reflect: true })
], PfTabs.prototype, "box", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTabs.prototype, "vertical", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTabs.prototype, "fill", void 0);
__decorate([
    property({ attribute: 'border-bottom' })
], PfTabs.prototype, "borderBottom", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTabs.prototype, "manual", void 0);
__decorate([
    property({ attribute: 'active-index', reflect: true, type: Number })
], PfTabs.prototype, "activeIndex", null);
__decorate([
    property({ attribute: false })
], PfTabs.prototype, "activeTab", void 0);
__decorate([
    query('#tabs')
], PfTabs.prototype, "tabsContainer", void 0);
__decorate([
    provide({ context })
], PfTabs.prototype, "ctx", void 0);
__decorate([
    observes('activeTab')
], PfTabs.prototype, "activeTabChanged", null);
PfTabs = __decorate([
    customElement('pf-tabs')
], PfTabs);
export { PfTabs };
//# sourceMappingURL=pf-tabs.js.map