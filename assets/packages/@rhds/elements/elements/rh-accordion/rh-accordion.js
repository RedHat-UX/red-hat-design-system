var _RhAccordion_instances, _a, _RhAccordion_expandedIndexSet, _RhAccordion_expanded, _RhAccordion_expandedIndex, _RhAccordion_logger, _RhAccordion_mo, _RhAccordion_makeContext, _RhAccordion_panelForHeader, _RhAccordion_expand, _RhAccordion_collapse, _RhAccordion_onChange, _RhAccordion_allHeaders, _RhAccordion_allPanels, _RhAccordion_getIndex;
var RhAccordion_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RhAccordionHeader, AccordionHeaderChangeEvent } from './rh-accordion-header.js';
import { RhAccordionPanel } from './rh-accordion-panel.js';
import { context } from './context.js';
export * from './rh-accordion-header.js';
export * from './rh-accordion-panel.js';
import { css } from "lit";
const styles = css `:host{display:block;container:accordion/inline-size}#container{color:var(--rh-color-text-primary);--_accordion-background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515))}#container.palette{--_accordion-background:var(--rh-color-surface)}#container.expanded{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533)}#container.large{--_header-font-size:var(--rh-font-size-body-text-md,1rem);--_panel-font-size:var(--rh-font-size-body-text-md,1rem)}@container accordion (min-width: 768px){#container.large{--_header-font-size:var(--rh-font-size-body-text-lg,1.125rem)}}::slotted(rh-accordion-header:first-child){display:block;border-block:1px solid var(--rh-color-border-subtle)}::slotted(rh-accordion-header:not(:first-child)){display:block;border-block-end:1px solid var(--rh-color-border-subtle)}::slotted(rh-accordion-header:is([expanded])){display:block;border-block-end:0}::slotted(rh-accordion-panel:is([expanded])){display:block;border-block-end:1px solid var(--rh-color-border-subtle);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533)}`;
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
 * Organizes content into expandable panels for scanning and selective
 * disclosure. Must contain paired `rh-accordion-header` and
 * `rh-accordion-panel` children. Should have two or more pairs; for a
 * single section use `rh-disclosure`. Headers use ARIA `role="heading"`
 * with `aria-expanded`/`aria-controls` for screen readers. Supports
 * keyboard navigation: Tab to move focus, Enter or Space to toggle.
 *
 * @summary Organizes content into expandable sections users can open or close
 *
 * @alias accordion
 *
 * @fires {AccordionExpandEvent} expand - Fires when a panel expands.
 *   Event detail: `toggle` (RhAccordionHeader), `panel` (RhAccordionPanel).
 * @fires {AccordionCollapseEvent} collapse - Fires when a panel collapses.
 *   Event detail: `toggle` (RhAccordionHeader), `panel` (RhAccordionPanel).
 */
let RhAccordion = RhAccordion_1 = _a = class RhAccordion extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordion_instances.add(this);
        /**
         * Switches the accordion to large size, increasing font size and padding.
         * Avoid on viewports below 576px; the accordion automatically falls back
         * to small size on mobile breakpoints. Use `large` for page-level content
         * sections where the accordion is the primary content structure.
         */
        this.large = false;
        _RhAccordion_expandedIndexSet.set(this, new Set());
        _RhAccordion_expanded.set(this, false);
        _RhAccordion_expandedIndex.set(this, []);
        _RhAccordion_logger.set(this, new Logger(this));
        _RhAccordion_mo.set(this, new MutationObserver(() => this.updateAccessibility()));
        this.ctx = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_makeContext).call(this);
    }
    static isAccordion(target) {
        return target instanceof RhAccordion_1;
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
    /**
     * Comma-separated 0-based indexes of initially expanded panels.
     * Defaults to none (all collapsed). Example: `expanded-index="0,2"`
     * expands the first and third panels.
     */
    get expandedIndex() {
        return __classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f");
    }
    set expandedIndex(value) {
        __classPrivateFieldSet(this, _RhAccordion_expandedIndex, value, "f");
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
        if (!isServer) {
            this.updateAccessibility();
            __classPrivateFieldGet(this, _RhAccordion_mo, "f").observe(this, { childList: true });
        }
    }
    render() {
        const { large } = this;
        const expanded = __classPrivateFieldGet(this, _RhAccordion_expanded, "f");
        return html `
      <div id="container"
           class="${classMap({ large, expanded })}"><!--
        summary: Alternating rh-accordion-header and rh-accordion-panel pairs
        description: |
          Must contain paired rh-accordion-header and rh-accordion-panel elements
          in alternating order. Each header Must be immediately followed by its
          corresponding panel. Should contain at least two pairs.
          Headers provide aria-controls linking to their panel for screen readers.
        --><slot></slot></div>
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
    updateExpanded() {
        if (__classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f").length === 0) {
            return;
        }
        // close all first
        this.collapseAll();
        __classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f").forEach(headerIndex => {
            if (!this.headers[headerIndex]) {
                return;
            }
            __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expand).call(this, headerIndex);
        });
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
            await __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expand).call(this, index);
        }
        else {
            await __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapse).call(this, index);
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
};
_RhAccordion_expandedIndexSet = new WeakMap();
_RhAccordion_expanded = new WeakMap();
_RhAccordion_expandedIndex = new WeakMap();
_RhAccordion_logger = new WeakMap();
_RhAccordion_mo = new WeakMap();
_RhAccordion_instances = new WeakSet();
_RhAccordion_makeContext = function _RhAccordion_makeContext() {
    const { accents = 'inline', large } = this;
    return { accents, large };
};
_RhAccordion_panelForHeader = function _RhAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!RhAccordion_1.isPanel(next)) {
        return next?.querySelector('rh-accordion-panel');
    }
    else {
        return next;
    }
};
_RhAccordion_expand = function _RhAccordion_expand(index) {
    // If this index is not already listed in the expandedSets array, add it
    if (__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").has(index)) {
        return;
    }
    __classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").add(index);
    const header = this.headers[index];
    const panel = this.panels[index];
    if (header && panel) {
        header.expanded = true;
        panel.expanded = true;
    }
};
_RhAccordion_collapse = function _RhAccordion_collapse(index) {
    if (!__classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").has(index)) {
        return;
    }
    const header = this.headers[index];
    const panel = this.panels[index];
    if (header && panel) {
        header.expanded = false;
        panel.expanded = false;
    }
    __classPrivateFieldGet(this, _RhAccordion_expandedIndexSet, "f").delete(index);
};
_RhAccordion_onChange = function _RhAccordion_onChange(event) {
    if (this.contains(event.target)) {
        event.stopPropagation();
    }
    const index = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_getIndex).call(this, event.target);
    if (event.expanded) {
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expand).call(this, index);
    }
    else {
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapse).call(this, index);
    }
};
_RhAccordion_allHeaders = function _RhAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children ?? []).filter((x) => x instanceof RhAccordionHeader);
};
_RhAccordion_allPanels = function _RhAccordion_allPanels(accordion = this) {
    return Array.from(accordion.children).filter((x => RhAccordion_1.isPanel(x)));
};
_RhAccordion_getIndex = function _RhAccordion_getIndex(el) {
    if (RhAccordion_1.isHeader(el)) {
        return this.headers.findIndex(header => header.id === el.id);
    }
    if (RhAccordion_1.isPanel(el)) {
        return this.panels.findIndex(panel => panel.id === el.id);
    }
    __classPrivateFieldGet(this, _RhAccordion_logger, "f").warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
};
RhAccordion.styles = [styles];
__decorate([
    property({ attribute: true, reflect: true })
], RhAccordion.prototype, "accents", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAccordion.prototype, "large", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhAccordion.prototype, "colorPalette", void 0);
__decorate([
    property({
        attribute: 'expanded-index',
        converter: NumberListConverter,
        hasChanged(value, old) {
            return JSON.stringify(old) !== JSON.stringify(value);
        },
    })
], RhAccordion.prototype, "expandedIndex", null);
__decorate([
    provide({ context })
], RhAccordion.prototype, "ctx", void 0);
__decorate([
    observes('expandedIndex')
], RhAccordion.prototype, "updateExpanded", null);
__decorate([
    observes('accents'),
    observes('large'),
    observes('expandedIndex')
], RhAccordion.prototype, "contextChanged", null);
RhAccordion = RhAccordion_1 = __decorate([
    customElement('rh-accordion'),
    colorPalettes,
    themable
], RhAccordion);
export { RhAccordion };
//# sourceMappingURL=rh-accordion.js.map