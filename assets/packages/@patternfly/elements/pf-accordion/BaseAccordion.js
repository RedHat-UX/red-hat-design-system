var _BaseAccordion_instances, _a, _BaseAccordion_isAccordionChangeEvent, _BaseAccordion_headerIndex, _BaseAccordion_expandedIndex, _BaseAccordion_activeHeader_get, _BaseAccordion_logger, _BaseAccordion_initialized, _BaseAccordion_mo, _BaseAccordion_init, _BaseAccordion_updateActiveHeader, _BaseAccordion_panelForHeader, _BaseAccordion_expandHeader, _BaseAccordion_expandPanel, _BaseAccordion_collapseHeader, _BaseAccordion_collapsePanel, _BaseAccordion_onChange, _BaseAccordion_allHeaders, _BaseAccordion_allPanels, _BaseAccordion_getIndex;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { AccordionHeaderChangeEvent, BaseAccordionHeader } from './BaseAccordionHeader.js';
import { BaseAccordionPanel } from './BaseAccordionPanel.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
export class AccordionExpandEvent extends ComposedEvent {
    constructor(toggle, panel) {
        super('expand');
        this.toggle = toggle;
        this.panel = panel;
    }
}
export class AccordionCollapseEvent extends ComposedEvent {
    constructor(toggle, panel) {
        super('collapse');
        this.toggle = toggle;
        this.panel = panel;
    }
}
export class BaseAccordion extends LitElement {
    constructor() {
        super(...arguments);
        _BaseAccordion_instances.add(this);
        _BaseAccordion_headerIndex.set(this, new RovingTabindexController(this, {
            getItems: () => this.headers,
        }));
        _BaseAccordion_expandedIndex.set(this, []);
        this.expandedSets = new Set();
        _BaseAccordion_logger.set(this, new Logger(this));
        // actually is read in #init, by the `||=` operator
        // eslint-disable-next-line no-unused-private-class-members
        _BaseAccordion_initialized.set(this, false);
        _BaseAccordion_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_init).call(this)));
    }
    static isAccordion(target) {
        return target instanceof _a;
    }
    static isHeader(target) {
        return target instanceof BaseAccordionHeader;
    }
    static isPanel(target) {
        return target instanceof BaseAccordionPanel;
    }
    /**
     * Sets and reflects the currently expanded accordion 0-based indexes.
     * Use commas to separate multiple indexes.
     * ```html
     * <pf-accordion expanded-index="1,2">
     *   ...
     * </pf-accordion>
     * ```
     */
    get expandedIndex() {
        return __classPrivateFieldGet(this, _BaseAccordion_expandedIndex, "f");
    }
    set expandedIndex(value) {
        const old = __classPrivateFieldGet(this, _BaseAccordion_expandedIndex, "f");
        __classPrivateFieldSet(this, _BaseAccordion_expandedIndex, value, "f");
        if (JSON.stringify(old) !== JSON.stringify(value)) {
            this.requestUpdate('expandedIndex', old);
            this.collapseAll().then(async () => {
                for (const i of this.expandedIndex) {
                    await this.expand(i, this);
                }
            });
        }
    }
    get headers() {
        return __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_allHeaders).call(this);
    }
    get panels() {
        return __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_allPanels).call(this);
    }
    async getUpdateComplete() {
        const c = await super.getUpdateComplete();
        const results = await Promise.all([
            ...__classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_allHeaders).call(this).map(x => x.updateComplete),
            ...__classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_allPanels).call(this).map(x => x.updateComplete),
        ]);
        return c && results.every(Boolean);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('change', __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_onChange));
        __classPrivateFieldGet(this, _BaseAccordion_mo, "f").observe(this, { childList: true });
        __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_init).call(this);
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
    async firstUpdated() {
        const { headers } = this;
        headers.forEach((header, index) => {
            if (header.expanded) {
                __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandHeader).call(this, header, index);
                const panel = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_panelForHeader).call(this, header);
                if (panel) {
                    __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandPanel).call(this, panel);
                }
            }
        });
    }
    updateAccessibility() {
        __classPrivateFieldGet(this, _BaseAccordion_headerIndex, "f").updateItems();
        const { headers } = this;
        // For each header in the accordion, attach the aria connections
        headers.forEach(header => {
            const panel = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_panelForHeader).call(this, header);
            if (panel) {
                header.setAttribute('aria-controls', panel.id);
                panel.setAttribute('aria-labelledby', header.id);
                panel.hidden = !panel.expanded;
            }
        });
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     */
    async toggle(index) {
        const { headers } = this;
        const header = headers[index];
        if (!header.expanded) {
            await this.expand(index);
        }
        else {
            await this.collapse(index);
        }
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand.
     * Accepts an optional parent accordion to search for headers and panels.
     */
    async expand(index, parentAccordion) {
        const allHeaders = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_allHeaders).call(this, parentAccordion);
        const header = allHeaders[index];
        if (!header) {
            return;
        }
        const panel = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_panelForHeader).call(this, header);
        if (!panel) {
            return;
        }
        // If the header and panel exist, open both
        __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandHeader).call(this, header, index),
            __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandPanel).call(this, panel),
            header.focus();
        this.dispatchEvent(new AccordionExpandEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Expands all accordion items.
     */
    async expandAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_expandPanel).call(this, panel));
        await this.updateComplete;
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     */
    async collapse(index) {
        const header = this.headers.at(index);
        const panel = this.panels.at(index);
        if (!header || !panel) {
            return;
        }
        __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_collapseHeader).call(this, header);
        __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_collapsePanel).call(this, panel);
        this.dispatchEvent(new AccordionCollapseEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Collapses all accordion items.
     */
    async collapseAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_collapseHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_collapsePanel).call(this, panel));
        await this.updateComplete;
    }
}
_a = BaseAccordion, _BaseAccordion_headerIndex = new WeakMap(), _BaseAccordion_expandedIndex = new WeakMap(), _BaseAccordion_logger = new WeakMap(), _BaseAccordion_initialized = new WeakMap(), _BaseAccordion_mo = new WeakMap(), _BaseAccordion_instances = new WeakSet(), _BaseAccordion_isAccordionChangeEvent = function _BaseAccordion_isAccordionChangeEvent(event) {
    return event instanceof AccordionHeaderChangeEvent;
}, _BaseAccordion_activeHeader_get = function _BaseAccordion_activeHeader_get() {
    const { headers } = this;
    const index = headers.findIndex(header => header.matches(':focus,:focus-within'));
    return index > -1 ? headers.at(index) : undefined;
}, _BaseAccordion_init = 
/**
 * Initialize the accordion by connecting headers and panels
 * with aria controls and labels; set up the default disclosure
 * state if not set by the author; and check the URL for default
 * open
 */
async function _BaseAccordion_init() {
    __classPrivateFieldSet(this, _BaseAccordion_initialized, __classPrivateFieldGet(this, _BaseAccordion_initialized, "f") || !!await this.updateComplete, "f");
    // Event listener to the accordion header after the accordion has been initialized to add the roving tabindex
    this.addEventListener('focusin', __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_updateActiveHeader));
    this.updateAccessibility();
}, _BaseAccordion_updateActiveHeader = function _BaseAccordion_updateActiveHeader() {
    if (__classPrivateFieldGet(this, _BaseAccordion_instances, "a", _BaseAccordion_activeHeader_get) !== __classPrivateFieldGet(this, _BaseAccordion_headerIndex, "f").activeItem) {
        __classPrivateFieldGet(this, _BaseAccordion_headerIndex, "f").setActiveItem(__classPrivateFieldGet(this, _BaseAccordion_instances, "a", _BaseAccordion_activeHeader_get));
    }
}, _BaseAccordion_panelForHeader = function _BaseAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!_a.isPanel(next)) {
        return void __classPrivateFieldGet(this, _BaseAccordion_logger, "f").error('Sibling element to a header needs to be a panel');
    }
    else {
        return next;
    }
}, _BaseAccordion_expandHeader = function _BaseAccordion_expandHeader(header, index = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getIndex).call(this, header)) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedSets.add(index);
    __classPrivateFieldSet(this, _BaseAccordion_expandedIndex, [...this.expandedSets], "f");
    header.expanded = true;
}, _BaseAccordion_expandPanel = function _BaseAccordion_expandPanel(panel) {
    panel.expanded = true;
    panel.hidden = false;
}, _BaseAccordion_collapseHeader = async function _BaseAccordion_collapseHeader(header, index = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getIndex).call(this, header)) {
    if (!this.expandedSets) {
        await this.updateComplete;
    }
    this.expandedSets.delete(index);
    header.expanded = false;
    await header.updateComplete;
}, _BaseAccordion_collapsePanel = async function _BaseAccordion_collapsePanel(panel) {
    await panel.updateComplete;
    if (!panel.expanded) {
        return;
    }
    panel.expanded = false;
    panel.hidden = true;
}, _BaseAccordion_onChange = function _BaseAccordion_onChange(event) {
    if (__classPrivateFieldGet(_a, _a, "m", _BaseAccordion_isAccordionChangeEvent).call(_a, event)) {
        const index = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getIndex).call(this, event.target);
        if (event.expanded) {
            this.expand(index, event.accordion);
        }
        else {
            this.collapse(index);
        }
    }
}, _BaseAccordion_allHeaders = function _BaseAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children).filter(_a.isHeader);
}, _BaseAccordion_allPanels = function _BaseAccordion_allPanels(accordion = this) {
    return Array.from(accordion.children).filter(_a.isPanel);
}, _BaseAccordion_getIndex = function _BaseAccordion_getIndex(el) {
    if (_a.isHeader(el)) {
        return this.headers.findIndex(header => header.id === el.id);
    }
    if (_a.isPanel(el)) {
        return this.panels.findIndex(panel => panel.id === el.id);
    }
    __classPrivateFieldGet(this, _BaseAccordion_logger, "f").warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
};
__decorate([
    property({
        attribute: 'expanded-index',
        converter: NumberListConverter,
    })
], BaseAccordion.prototype, "expandedIndex", null);
//# sourceMappingURL=BaseAccordion.js.map