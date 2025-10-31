var _RhTabs_instances, _RhTabs_activeIndex, _RhTabs_overflow, _RhTabs_tabs, _RhTabs_tabindex, _RhTabs_onSlotchange, _RhTabs_onExpand;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
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
import { rhTabsActiveTabContext, rhTabsBoxContext, rhTabsVerticalContext, rhTabsLastTabContext, rhTabsManualContext, rhTabsFirstTabContext, } from './context.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;color:var(--rh-color-text-primary);background-color:var(--rh-color-surface);container-name:host;container-type:inline-size}[part=tabs-container]{--_tab-max-width:200px;position:relative;display:flex;overflow:hidden}@container host (min-width: 768px){[part=tabs-container]{--_tab-max-width:none}}[part=tabs-container]:before{position:absolute;inset-inline-end:0;inset:0;border-width:0 0 var(--rh-border-width-sm,1px);border-color:var(--rh-color-border-subtle);border-style:solid}:is([part=tabs],[part=panels]){display:block}[part=tabs]{scrollbar-width:none;position:relative;max-width:100%;overflow-x:auto;display:flex;bottom:0;margin:0;width:auto;font-size:var(--rh-font-size-body-text-md,1rem)}:is([part=tabs-container],[part=tabs],button):before{position:absolute;inset-block-end:0;inset-inline:0;content:"";border-style:solid}:is([part=tabs],button):before{top:0}#tablist{display:contents}[part=tabs]:before,button{border:0}button{flex:none;line-height:1;opacity:1}button:before{border-block-start-width:0}button:first-of-type{margin-inline-end:0;translate:0 0}button:nth-of-type(2){margin-inline-start:0;translate:0 0}button:disabled{pointer-events:none}#container{--_arrow-color:var(--rh-color-accent-base);--_overflow-button-text-color:var(--rh-color-text-secondary);--rh-color-icon-status-disabled:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-60,#4d4d4d));--_overflow-button-disabled-text-color:var(--rh-color-icon-status-disabled);--_overflow-button-hover-text-color:var(--rh-color-text-primary);color:var(--rh-color-text-primary)}@container (min-width: 768px){#container{--_panel-padding:var(--rh-space-2xl,32px)}}@container host (min-width: 768px){#container.vertical{display:grid;grid-template-columns:max-content 1fr;grid-template-areas:"tabs panels"}#container.vertical [part=tabs-container]{grid-area:tabs;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}#container.vertical [part=tabs-container]:before{height:100%;border-block-end-width:0;border-inline-start-width:var(--rh-border-width-sm,1px)}#container.vertical [part=panels]{grid-area:panels}#container.vertical [part=tabs]{flex-direction:column;flex-grow:1;max-width:15.625rem}#container.vertical.box{--_panel-padding:var(--rh-space-3xl,48px)}#container.vertical.box [part=tabs-container]:before{border-inline-start-width:0;border-inline-end-width:var(--rh-border-width-sm,1px)}}#container.overflow{--_panel-padding:var(--rh-space-lg,16px)}#container.overflow [part=tabs]{--_inset-inline-margin:0;position:relative;inset-inline-start:-1px;z-index:1}#container.overflow [part=panels]{--_panels-overflow-padding:var(--rh-space-2xl,32px)}#container.box.inset:not(.vertical) [part=container]:not(.overflow){--_panel-padding:var(--rh-space-2xl,32px) var(--rh-space-4xl,64px)}:host([box=inset]:not([vertical])) #container [part=tabs]{--_inset-inline-margin:var(--rh-space-2xl,32px)}:host(:is([centered],[box=inset])) #container:not(.overflow) [part=tabs]{margin-inline:var(--rh-tabs-inset,var(--_inset-inline-margin,auto))}:is(#previous-tab,#next-tab){padding-block:0;padding-inline:var(--rh-space-lg,16px);background-color:var(--rh-color-surface);color:var(--_overflow-button-text-color);position:relative;z-index:2}:is(#previous-tab,#next-tab):before{border-block-start:var(--rh-border-width-sm,1px) solid #0000;border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-inline:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:is(#previous-tab,#next-tab):hover{color:var(--_overflow-button-hover-text-color,var(--rh-color-text-primary))}:is(#previous-tab,#next-tab):hover:before{border-block-end:var(--rh-border-width-lg,3px) solid var(--rh-color-border-subtle)}:is(#previous-tab,#next-tab):disabled{color:var(--_overflow-button-disabled-text-color)}#next-tab{inset-inline-start:-1px}#next-tab:before{border-inline-width:1px 0}#previous-tab:before{border-inline-width:0 1px}:is(#previous-tab,#next-tab) rh-icon:dir(rtl){rotate:180deg}`;
export { RhTab };
/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @alias tabs
 *
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
        /** Aligns tabs to the center */
        this.centered = false;
        /** Sets the alignment of the tabs vertical */
        this.vertical = false;
        this.firstTab = null;
        this.lastTab = null;
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
        this.firstTab = this.tabs.at(0) ?? null;
        this.lastTab = this.tabs.at(-1) ?? null;
    }
    async firstUpdated() {
        this.tabList.addEventListener('scroll', __classPrivateFieldGet(this, _RhTabs_overflow, "f").onScroll.bind(this));
        if (this.tabs.length && this.activeIndex === -1) {
            this.select(this.tabs.findIndex(x => !x.disabled));
        }
        __classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange).call(this);
    }
    render() {
        const { vertical = false, box = false, centered = false } = this;
        const inset = this.box === 'inset' ? 'inset' : '';
        return html `
      <!-- outer container -->
      <div id="container" part="container" class="${classMap({ vertical, box, inset, centered, overflow: __classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons })}">
        <!-- tabs container -->
        <div part="tabs-container">${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="previous-tab" tabindex="-1"
                  aria-label="${this.getAttribute('label-scroll-left') ?? 'Scroll left'}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowLeft}"
                  @click="${() => !this.matches(':dir(rtl)') ? __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollLeft() : __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollRight()}">
            <rh-icon set="ui" icon="caret-left" loading="eager"></rh-icon>
          </button>`}
          <div id="tablist" role="tablist">
            <!--
              slot:
                description: Must contain one or more \`<rh-tab>\`
              part:
                description: tablist
            -->
            <slot name="tab"
                  part="tabs"
                  @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot>
          </div>${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").showScrollButtons ? '' : html `
          <button id="next-tab"
                  tabindex="-1"
                  aria-label="${this.getAttribute('label-scroll-right') ?? 'Scroll right'}"
                  ?disabled="${!__classPrivateFieldGet(this, _RhTabs_overflow, "f").overflowRight}"
                  @click="${() => !this.matches(':dir(rtl)') ? __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollRight() : __classPrivateFieldGet(this, _RhTabs_overflow, "f").scrollLeft()}">
             <rh-icon set="ui" icon="caret-right" loading="eager"></rh-icon>
          </button>`}
        </div>
        <!--
          slot:
            description: Must contain one or more \`<rh-tab-panel>\`
          part:
            description: panels
        -->
        <slot part="panels" @slotchange="${__classPrivateFieldGet(this, _RhTabs_instances, "m", _RhTabs_onSlotchange)}"></slot>
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
_RhTabs_instances = new WeakSet();
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
    provide({ context: rhTabsManualContext }),
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "manual", void 0);
__decorate([
    property({ attribute: 'active-index', type: Number })
], RhTabs.prototype, "activeIndex", null);
__decorate([
    provide({ context: rhTabsActiveTabContext }),
    property({ attribute: false })
], RhTabs.prototype, "activeTab", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhTabs.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "centered", void 0);
__decorate([
    provide({ context: rhTabsBoxContext }),
    property({ reflect: true })
], RhTabs.prototype, "box", void 0);
__decorate([
    provide({ context: rhTabsVerticalContext }),
    property({ reflect: true, type: Boolean })
], RhTabs.prototype, "vertical", void 0);
__decorate([
    provide({ context: rhTabsFirstTabContext }),
    state()
], RhTabs.prototype, "firstTab", void 0);
__decorate([
    provide({ context: rhTabsLastTabContext }),
    state()
], RhTabs.prototype, "lastTab", void 0);
__decorate([
    query('[part="tabs"]')
], RhTabs.prototype, "tabList", void 0);
__decorate([
    observes('activeTab')
], RhTabs.prototype, "activeTabChanged", null);
RhTabs = __decorate([
    customElement('rh-tabs'),
    colorPalettes,
    themable
], RhTabs);
export { RhTabs };
//# sourceMappingURL=rh-tabs.js.map