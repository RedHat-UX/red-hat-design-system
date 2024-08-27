var _RhTabs_instances, _RhTabs_ctx_get, _RhTabs_activeIndex, _RhTabs_overflow, _RhTabs_tabs, _RhTabs_tabindex, _RhTabs_dir, _RhTabs_firstTab_get, _RhTabs_lastTab_get, _RhTabs_onSlotchange, _RhTabs_onExpand;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
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
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{display:block;background:var(--_context-background-color);color:var(--_context-text)}[part=container]{container-type:inline-size}[part=tabs-container]{position:relative;display:flex;overflow:hidden;--_tab-max-width:200px}[part=tabs-container]:before{position:absolute;inset-inline-end:0;inset:0;border-width:0 0 var(--rh-border-width-sm,1px);border-color:var(--_border-color);border-style:solid}[part=panels],[part=tabs]{display:block}[part=tabs]{scrollbar-width:none;position:relative;max-width:100%;overflow-x:auto;display:flex;bottom:0;margin:0;width:auto;font-size:var(--rh-font-size-body-text-md, 1rem)}[part=tabs-container]:before,[part=tabs]:before,button:before{position:absolute;inset-block-end:0;inset-inline:0;content:"";border-style:solid}#tablist{display:contents}@container (min-width:567px){[part=tabs-container]{--_tab-max-width:none}}[part=tabs]:before,button:before{top:0}[part=tabs]:before,button{border:0}button{flex:none;line-height:1;opacity:1}button:before{border-block-start-width:0}button:first-of-type{margin-inline-end:0;translate:0 0}button:nth-of-type(2){margin-inline-start:0;translate:0 0}button:disabled{pointer-events:none}#rhds-container{display:contents;--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-light, #c7c7c7));--_arrow-color:var(--rh-color-accent-base-on-light, #0066cc);--_overflow-button-text-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_overflow-button-disabled-text-color:#d2d2d2;--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-light, #151515)}#rhds-container.dark{--_border-color:var(--rh-tabs-border-color, var(--rh-color-border-subtle-on-dark, #707070));--_arrow-color:var(--rh-color-accent-base-on-dark, #92c5f9);--_overflow-button-text-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_overflow-button-disabled-text-color:var(--rh-color-gray-50, #707070);--_overflow-button-hover-text-color:var(--rh-color-text-primary-on-dark, #ffffff)}:host(:is([centered],[box=inset])) [part=tabs]{margin-inline:var(--rh-tabs-inset,var(--_inset-inline-margin,auto))}:host([box=inset]:not([vertical])) [part=tabs]{--_inset-inline-margin:var(--rh-space-2xl, 32px)}.overflow [part=panels]{--_panels-overflow-padding:var(--rh-space-2xl, 32px)}#previousTab+[part=tabs]{--_inset-inline-margin:0;position:relative;left:-1px;z-index:1}#nextTab,#previousTab{padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:var(--_context-background-color);color:var(--_overflow-button-text-color);position:relative;z-index:2}#nextTab{left:-1px}#nextTab:hover,#previousTab:hover{color:var(--_overflow-button-hover-text-color,var(--rh-color-text-primary-on-light,#151515))}#nextTab:before,#previousTab:before{border-block-start:var(--rh-border-width-sm,1px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-inline:var(--rh-border-width-sm,1px) solid var(--_border-color)}#previousTab:before{border-inline-width:0 1px}#nextTab:before{border-inline-width:1px 0}#nextTab:hover:before,#previousTab:hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--_border-color)}#nextTab:disabled,#previousTab:disabled{color:var(--_overflow-button-disabled-text-color)}.rtl :is(#previousTab,#nextTab) rh-icon{rotate:180deg}@media screen and (min-width:768px){:host([vertical]) [part=container]{display:grid;grid-template-columns:max-content 1fr;grid-template-areas:"tabs panels"}:host([vertical]) [part=tabs-container]{grid-area:tabs;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}:host([vertical]) [part=panels]{grid-area:panels}:host([vertical]) [part=tabs-container]:before{height:100%;border-block-end-width:0;border-inline-start-width:var(--rh-border-width-sm,1px)}:host([vertical][box]) [part=tabs-container]:before{border-inline-start-width:0;border-inline-end-width:var(--rh-border-width-sm,1px)}:host([vertical]) [part=tabs]{flex-direction:column;flex-grow:1;max-width:15.625rem}}`;
export { RhTab };
/* TODO: Remove attrs in JSDoc below when updated use TabsController after PFE 3.0 release */
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
let RhTabs = class RhTabs extends LitElement {
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
         * Sets the alignment of the tabs vertical
         */
        this.vertical = false;
        _RhTabs_activeIndex.set(this, -1);
        _RhTabs_overflow.set(this, new OverflowController(this));
        _RhTabs_tabs.set(this, new TabsAriaController(this, {
            isTab: (x) => x.localName === 'rh-tab',
            isPanel: (x) => x.localName === 'rh-tab-panel',
            isActiveTab: x => x.active,
        }));
        _RhTabs_tabindex.set(this, RovingTabindexController.of(this, {
            getItemsContainer: () => this.tabList,
            getItems: () => this.tabs ?? [],
        }));
        _RhTabs_dir.set(this, new DirController(this));
        this.ctx = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_ctx_get);
    }
    /**
     * Index of the active tab
     */
    get activeIndex() {
        return __classPrivateFieldGet(this, _RhTabs_activeIndex, "f");
    }
    set activeIndex(v) {
        __classPrivateFieldGet(this, _RhTabs_tabindex, "f").atFocusedItemIndex = v;
        __classPrivateFieldSet(this, _RhTabs_activeIndex, v, "f");
        this.activeTab = this.tabs[v];
        for (const tab of this.tabs) {
            if (!this.activeTab?.disabled) {
                tab.active = tab === this.activeTab;
            }
            __classPrivateFieldGet(this, _RhTabs_tabs, "f").panelFor(tab)?.toggleAttribute('hidden', !tab.active);
        }
    }
    get canShowScrollButtons() {
        return !this.vertical;
    }
    get tabs() {
        return __classPrivateFieldGet(this, _RhTabs_tabs, "f").tabs;
    }
    get panels() {
        return this.tabs.map(tab => __classPrivateFieldGet(this, _RhTabs_tabs, "f").panelFor(tab));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('expand', __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onExpand));
        this.activeIndex = __classPrivateFieldGet(this, _RhTabs_tabindex, "f").atFocusedItemIndex;
    }
    willUpdate() {
        if (!this.manual && this.activeIndex !== __classPrivateFieldGet(this, _RhTabs_tabindex, "f").atFocusedItemIndex) {
            this.activeIndex = __classPrivateFieldGet(this, _RhTabs_tabindex, "f").atFocusedItemIndex;
        }
        this.ctx = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_ctx_get);
    }
    async firstUpdated() {
        this.tabList.addEventListener('scroll', __classPrivateFieldGet(this, _RhTabs_overflow, "f").onScroll.bind(this));
        if (this.tabs.length && this.activeIndex === -1) {
            this.select(this.tabs.findIndex(x => !x.disabled));
        }
        __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange).call(this);
    }
    render() {
        const { on = '' } = this;
        const rtl = __classPrivateFieldGet(this, _RhTabs_dir, "f").dir === 'rtl';
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on, rtl })}">
        <div part="container" class="${classMap({ overflow: __classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons })}">
          <div part="tabs-container">${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
            <button id="previousTab" tabindex="-1"
                    aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                    ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowLeft}"
                    @click="${() => !rtl ? __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollLeft() : __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollRight()}">
              <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
            </button>`}
            <div id="tablist" role="tablist">
              <slot name="tab"
                    part="tabs"
                    @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot>
            </div>${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
            <button id="nextTab"
                    tabindex="-1"
                    aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                    ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowRight}"
                    @click="${() => !rtl ? __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollRight() : __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollLeft()}">
               <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
            </button>`}
          </div>
          <slot part="panels" @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot>
        </div>
      </div>
    `;
    }
    activeTabChanged(old, activeTab) {
        if (activeTab?.disabled) {
            this.activeIndex = 0;
        }
        if (activeTab) {
            this.activeIndex = this.tabs.indexOf(activeTab);
        }
    }
    select(option) {
        if (typeof option === 'number') {
            this.activeIndex = option;
        }
        else {
            this.activeIndex = __classPrivateFieldGet(this, _RhTabs_tabindex, "f").items.indexOf(option);
        }
        __classPrivateFieldGet(this, _RhTabs_overflow, "f").update();
    }
};
_RhTabs_activeIndex = new WeakMap();
_RhTabs_overflow = new WeakMap();
_RhTabs_tabs = new WeakMap();
_RhTabs_tabindex = new WeakMap();
_RhTabs_dir = new WeakMap();
_RhTabs_instances = new WeakSet();
_RhTabs_ctx_get = function _RhTabs_ctx_get() {
    const { activeTab, manual, vertical } = this;
    const box = this.box === null || this.box === '' ? 'box' : this.box;
    const firstTab = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_firstTab_get);
    const lastTab = __classPrivateFieldGet(this, _RhTabs_instances, "a", _RhTabs_lastTab_get);
    return { activeTab, box, firstTab, lastTab, manual, vertical };
};
_RhTabs_firstTab_get = function _RhTabs_firstTab_get() {
    const [tab] = this.tabs;
    return tab;
};
_RhTabs_lastTab_get = function _RhTabs_lastTab_get() {
    return this.tabs.at(-1);
};
_RhTabs_onSlotchange = function _RhTabs_onSlotchange() {
    __classPrivateFieldGet(this, _RhTabs_overflow, "f").init(this.tabList, this.tabs);
};
_RhTabs_onExpand = function _RhTabs_onExpand(event) {
    if (event instanceof TabExpandEvent
        && !event.defaultPrevented && this.tabs.includes(event.tab)) {
        this.select(event.tab);
    }
};
RhTabs.styles = [styles];
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
    property({ attribute: 'active-index', type: Number })
], RhTabs.prototype, "activeIndex", null);
__decorate([
    property({ attribute: false })
], RhTabs.prototype, "activeTab", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhTabs.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "centered", void 0);
__decorate([
    property({ reflect: true })
], RhTabs.prototype, "box", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "vertical", void 0);
__decorate([
    colorContextConsumer()
], RhTabs.prototype, "on", void 0);
__decorate([
    query('[part="tabs"]')
], RhTabs.prototype, "tabList", void 0);
__decorate([
    provide({ context })
], RhTabs.prototype, "ctx", void 0);
__decorate([
    observes('activeTab')
], RhTabs.prototype, "activeTabChanged", null);
RhTabs = __decorate([
    customElement('rh-tabs')
], RhTabs);
export { RhTabs };
//# sourceMappingURL=rh-tabs.js.map