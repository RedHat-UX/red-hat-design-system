var _RhAccordion_instances, _a, _RhAccordion_expandedIndexSet, _RhAccordion_expanded, _RhAccordion_expandedIndex, _RhAccordion_logger, _RhAccordion_mo, _RhAccordion_makeContext, _RhAccordion_panelForHeader, _RhAccordion_expand, _RhAccordion_collapse, _RhAccordion_onChange, _RhAccordion_allHeaders, _RhAccordion_allPanels, _RhAccordion_getIndex;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RhAccordionHeader, AccordionHeaderChangeEvent } from './rh-accordion-header.js';
import { RhAccordionPanel } from './rh-accordion-panel.js';
import { context } from './context.js';
import { css } from "lit";
const styles = css `#container{color:var(--rh-color-text-primary);background-color:var(--rh-color-surface)}#container.expanded{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533)}::slotted(rh-accordion-header:first-child){display:block;border-block:1px solid var(--rh-color-border-subtle)}::slotted(rh-accordion-header:not(:first-child)){display:block;border-block-end:1px solid var(--rh-color-border-subtle)}::slotted(rh-accordion-header:is([expanded])){display:block;border-block-end:0}::slotted(rh-accordion-panel:is([expanded])){display:block;border-block-end:1px solid var(--rh-color-border-subtle);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533)}`;
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
/**
 * An accordion is a stacked list of panels which allows users to expand or collapse information when selected. They feature panels that consist of a section text label and a caret icon that collapses or expands to reveal more information.
 * @summary Expands or collapses a stacked list of panels
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 * @slot - Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 * @attr  [accents=inline] Position accents in the header either inline or bottom
 */
export class RhAccordion extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordion_instances.add(this);
        _RhAccordion_expandedIndexSet.set(this, new Set());
        _RhAccordion_expanded.set(this, false);
        _RhAccordion_expandedIndex.set(this, []);
        _RhAccordion_logger.set(this, new Logger(this));
        _RhAccordion_mo.set(this, new MutationObserver(() => this.updateAccessibility()));
        this.ctx = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_makeContext).call(this);
        /**
         * If this accordion uses large styles
         */
        this.large = false;
        /**
         * If this accordion has a border
         */
        this.bordered = true;
    }
    static isAccordion(target) {
        return target instanceof _a;
    }
    static isHeader(target) {
        return target instanceof RhAccordionHeader;
    }
    static isPanel(target) {
        return target instanceof RhAccordionPanel;
    }
    static isAccordionChangeEvent(event) {
        return event instanceof AccordionHeaderChangeEvent;
    }
    get expandedIndex() {
        return __classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f");
    }
    set expandedIndex(value) {
        __classPrivateFieldSet(this, _RhAccordion_expandedIndex, value, "f");
        __classPrivateFieldSet(this, _RhAccordion_expanded, !!__classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f").length, "f");
        this.headers.forEach((header, i) => {
            const expanded = __classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").has(i);
            header.expanded = expanded;
            const panel = this.panels[i];
            if (panel) {
                panel.expanded = expanded;
                panel.hidden = !expanded;
            }
        });
    }
    /** All headers for this accordion */
    get headers() {
        return __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allHeaders).call(this);
    }
    /** All panels for this accordion */
    get panels() {
        return __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allPanels).call(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('change', __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_onChange));
        __classPrivateFieldGet(this, _RhAccordion_mo, "f").observe(this, { childList: true });
        this.updateAccessibility();
    }
    render() {
        const { on } = this;
        const expanded = __classPrivateFieldGet(this, _RhAccordion_expanded, "f");
        return html `
      <div id="container"
           class="${classMap({
            on: true,
            [on ?? 'light']: true,
            expanded,
        })}"><slot></slot></div>
    `;
    }
    async getUpdateComplete() {
        const c = await super.getUpdateComplete();
        const results = await Promise.all([
            ...this.headers.map(x => x.updateComplete),
            ...this.panels.map(x => x.updateComplete),
        ]);
        return c && results.every(Boolean);
    }
    firstUpdated() {
        this.headers.forEach((header, index) => {
            if (header.expanded) {
                __classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").add(index);
            }
        });
        this.expandedIndex = [...__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f")];
        __classPrivateFieldSet(this, _RhAccordion_expanded, !!__classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f").length, "f");
    }
    contextChanged() {
        this.ctx = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_makeContext).call(this);
    }
    /**
     * Initialize the accordion by connecting headers and panels
     * with aria controls and labels; set up the default disclosure
     * state if not set by the author; and check the URL for default
     * open
     */
    updateAccessibility() {
        const { headers } = this;
        // For each header in the accordion, attach the aria connections
        for (const header of headers) {
            const panel = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_panelForHeader).call(this, header);
            if (panel) {
                header.setAttribute('aria-controls', panel.id);
                panel.setAttribute('aria-labelledby', header.id);
            }
        }
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     * @param index header index to toggle
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
     * @param index header index to toggle
     * @param parentAccordion target accordion to expand in
     */
    async expand(index, parentAccordion) {
        const allHeaders = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allHeaders).call(this, parentAccordion);
        const header = allHeaders[index];
        if (!header) {
            return;
        }
        const panel = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_panelForHeader).call(this, header);
        if (!panel) {
            return;
        }
        // If the header and panel exist, open both
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expand).call(this, index);
        header.focus();
        this.dispatchEvent(new AccordionExpandEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Expands all accordion items.
     */
    async expandAll() {
        this.headers.forEach((_, i) => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expand).call(this, i));
        await this.updateComplete;
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     * @param index header index to collapse
     */
    async collapse(index) {
        const header = this.headers.at(index);
        const panel = this.panels.at(index);
        if (!header || !panel) {
            return;
        }
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapse).call(this, index);
        this.dispatchEvent(new AccordionCollapseEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Collapses all accordion items.
     */
    async collapseAll() {
        this.headers.forEach((_, i) => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapse).call(this, i));
        await this.updateComplete;
    }
}
_a = RhAccordion, _RhAccordion_expandedIndexSet = new WeakMap(), _RhAccordion_expanded = new WeakMap(), _RhAccordion_expandedIndex = new WeakMap(), _RhAccordion_logger = new WeakMap(), _RhAccordion_mo = new WeakMap(), _RhAccordion_instances = new WeakSet(), _RhAccordion_makeContext = function _RhAccordion_makeContext() {
    const { accents = 'inline', large } = this;
    const expanded = __classPrivateFieldGet(this, _RhAccordion_expanded, "f");
    return { accents, large, expanded };
}, _RhAccordion_panelForHeader = function _RhAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!_a.isPanel(next)) {
        return next?.querySelector('rh-accordion-panel');
    }
    else {
        return next;
    }
}, _RhAccordion_expand = function _RhAccordion_expand(index) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedIndex = [...__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").add(index)];
}, _RhAccordion_collapse = function _RhAccordion_collapse(index) {
    if (__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").delete(index)) {
        this.expandedIndex = [...__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f")];
    }
}, _RhAccordion_onChange = function _RhAccordion_onChange(event) {
    if (_a.isAccordionChangeEvent(event)) {
        const index = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_getIndex).call(this, event.target);
        if (event.expanded) {
            this.expand(index, event.accordion);
        }
        else {
            this.collapse(index);
        }
    }
    this.requestUpdate('expandedIndex');
}, _RhAccordion_allHeaders = function _RhAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children).filter((x) => x instanceof RhAccordionHeader);
}, _RhAccordion_allPanels = function _RhAccordion_allPanels(accordion = this) {
    return Array.from(accordion.children).filter((x => _a.isPanel(x)));
}, _RhAccordion_getIndex = function _RhAccordion_getIndex(el) {
    if (_a.isHeader(el)) {
        return this.headers.findIndex(header => header.id === el.id);
    }
    if (_a.isPanel(el)) {
        return this.panels.findIndex(panel => panel.id === el.id);
    }
    __classPrivateFieldGet(this, _RhAccordion_logger, "f").warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
};
RhAccordion.properties = {
    accents: { attribute: true, reflect: true },
    large: { reflect: true, type: Boolean },
    bordered: { reflect: true, type: Boolean },
    colorPalette: { reflect: true, attribute: 'color-palette' },
    expandedIndex: {
        attribute: 'expanded-index',
        converter: NumberListConverter,
        hasChanged(value, old) {
            return JSON.stringify(old) !== JSON.stringify(value);
        },
    }
};
RhAccordion.styles = [styles];
__decorate([
    colorContextConsumer()
], RhAccordion.prototype, "on", void 0);
__decorate([
    provide({ context })
], RhAccordion.prototype, "ctx", void 0);
__decorate([
    observes('accents'),
    observes('large'),
    observes('bordered'),
    observes('expandedIndex')
], RhAccordion.prototype, "contextChanged", null);
customElements.define("rh-accordion", RhAccordion);
//# sourceMappingURL=rh-accordion.js.map