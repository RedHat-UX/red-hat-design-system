var _RhAccordion_instances, _a, _RhAccordion_ctx_get, _RhAccordion_expandedIndex, _RhAccordion_headerIndex, _RhAccordion_initialized, _RhAccordion_logger, _RhAccordion_mo, _RhAccordion_init, _RhAccordion_activeHeader_get, _RhAccordion_updateActiveHeader, _RhAccordion_panelForHeader, _RhAccordion_expandHeader, _RhAccordion_expandPanel, _RhAccordion_collapseHeader, _RhAccordion_collapsePanel, _RhAccordion_onChange, _RhAccordion_allHeaders, _RhAccordion_allPanels, _RhAccordion_getIndex;
var RhAccordion_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { provide } from '@lit/context';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RhAccordionHeader, AccordionHeaderChangeEvent } from './rh-accordion-header.js';
import { RhAccordionPanel } from './rh-accordion-panel.js';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{--_border-color:var(--rh-color-border-subtle-on-light, #c7c7c7);color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--rh-color-surface-lightest,#fff)}.dark{--_border-color:var(--rh-color-border-subtle-on-dark, #707070)}#container{display:contents}::slotted(rh-accordion-header:first-child){display:block;border-block:1px solid var(--_border-color)}::slotted(rh-accordion-header:not(:first-child)){display:block;border-block-end:1px solid var(--_border-color)}::slotted(rh-accordion-header:is([expanded])){display:block;border-block-end:0;box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}::slotted(rh-accordion-panel:is([expanded])){display:block;border-block-end:1px solid var(--_border-color);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}`;
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
 *
 * @summary Expands or collapses a stacked list of panels
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `rh-accordion-header` and `rh-accordion-panel` elements here.
 *
 * @attr  accents
 *        Position accents in the header either inline or bottom
 *        {@default inline}
 *
 */
let RhAccordion = RhAccordion_1 = _a = class RhAccordion extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordion_instances.add(this);
        this.large = false;
        this.bordered = true;
        this.expandedSets = new Set();
        _RhAccordion_expandedIndex.set(this, []);
        _RhAccordion_headerIndex.set(this, new RovingTabindexController(this));
        // actually is read in #init, by the `||=` operator
        // eslint-disable-next-line no-unused-private-class-members
        _RhAccordion_initialized.set(this, false);
        _RhAccordion_logger.set(this, new Logger(this));
        _RhAccordion_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_init).call(this)));
        this.ctx = __classPrivateFieldGet(this, _RhAccordion_instances, "a", _RhAccordion_ctx_get);
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
     * Sets and reflects the currently expanded accordion 0-based indexes.
     * Use commas to separate multiple indexes.
     * ```html
     * <pf-accordion expanded-index="1,2">
     *   ...
     * </pf-accordion>
     * ```
     */
    get expandedIndex() {
        return __classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f");
    }
    set expandedIndex(value) {
        const old = __classPrivateFieldGet(this, _RhAccordion_expandedIndex, "f");
        __classPrivateFieldSet(this, _RhAccordion_expandedIndex, value, "f");
        if (JSON.stringify(old) !== JSON.stringify(value)) {
            this.requestUpdate('expandedIndex', old);
            this.collapseAll().then(async () => {
                for (const i of this.expandedIndex) {
                    await this.expand(i, this);
                }
            });
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('change', __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_onChange));
        __classPrivateFieldGet(this, _RhAccordion_mo, "f").observe(this, { childList: true });
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_init).call(this);
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="container" class="${classMap({ [on]: !!on })}"><slot></slot></div>
    `;
    }
    async firstUpdated() {
        const { headers } = this;
        headers.forEach((header, index) => {
            if (header.expanded) {
                __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandHeader).call(this, header, index);
                const panel = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_panelForHeader).call(this, header);
                if (panel) {
                    __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandPanel).call(this, panel);
                }
            }
        });
        this.ctx = __classPrivateFieldGet(this, _RhAccordion_instances, "a", _RhAccordion_ctx_get);
    }
    async getUpdateComplete() {
        const c = await super.getUpdateComplete();
        const results = await Promise.all([
            ...__classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allHeaders).call(this).map(x => x.updateComplete),
            ...__classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allPanels).call(this).map(x => x.updateComplete),
        ]);
        return c && results.every(Boolean);
    }
    get headers() {
        return __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allHeaders).call(this);
    }
    get panels() {
        return __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_allPanels).call(this);
    }
    updateAccessibility() {
        const { headers } = this;
        // For each header in the accordion, attach the aria connections
        headers.forEach(header => {
            const panel = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_panelForHeader).call(this, header);
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
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandHeader).call(this, header, index),
            __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandPanel).call(this, panel),
            header.focus();
        this.dispatchEvent(new AccordionExpandEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Expands all accordion items.
     */
    async expandAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_expandPanel).call(this, panel));
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
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapseHeader).call(this, header);
        __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapsePanel).call(this, panel);
        this.dispatchEvent(new AccordionCollapseEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Collapses all accordion items.
     */
    async collapseAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapseHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_collapsePanel).call(this, panel));
        await this.updateComplete;
    }
};
_RhAccordion_expandedIndex = new WeakMap();
_RhAccordion_headerIndex = new WeakMap();
_RhAccordion_initialized = new WeakMap();
_RhAccordion_logger = new WeakMap();
_RhAccordion_mo = new WeakMap();
_RhAccordion_instances = new WeakSet();
_RhAccordion_ctx_get = function _RhAccordion_ctx_get() {
    const accents = this.accents ? this.accents : 'inline';
    return { accents };
};
_RhAccordion_init = 
/**
 * Initialize the accordion by connecting headers and panels
 * with aria controls and labels; set up the default disclosure
 * state if not set by the author; and check the URL for default
 * open
 */
async function _RhAccordion_init() {
    __classPrivateFieldSet(this, _RhAccordion_initialized, __classPrivateFieldGet(this, _RhAccordion_initialized, "f") || !!await this.updateComplete, "f");
    __classPrivateFieldGet(this, _RhAccordion_headerIndex, "f").initItems(this.headers);
    // Event listener to the accordion header after the accordion has been initialized to add the roving tabindex
    this.addEventListener('focusin', __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_updateActiveHeader));
    this.updateAccessibility();
};
_RhAccordion_activeHeader_get = function _RhAccordion_activeHeader_get() {
    const { headers } = this;
    const index = headers.findIndex(header => header.matches(':focus,:focus-within'));
    return index > -1 ? headers.at(index) : undefined;
};
_RhAccordion_updateActiveHeader = function _RhAccordion_updateActiveHeader() {
    if (__classPrivateFieldGet(this, _RhAccordion_instances, "a", _RhAccordion_activeHeader_get)) {
        __classPrivateFieldGet(this, _RhAccordion_headerIndex, "f").setActiveItem(__classPrivateFieldGet(this, _RhAccordion_instances, "a", _RhAccordion_activeHeader_get));
    }
};
_RhAccordion_panelForHeader = function _RhAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!RhAccordion_1.isPanel(next)) {
        return void __classPrivateFieldGet(this, _RhAccordion_logger, "f").error('Sibling element to a header needs to be a panel');
    }
    else {
        return next;
    }
};
_RhAccordion_expandHeader = function _RhAccordion_expandHeader(header, index = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_getIndex).call(this, header)) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedSets.add(index);
    __classPrivateFieldSet(this, _RhAccordion_expandedIndex, [...this.expandedSets], "f");
    header.expanded = true;
};
_RhAccordion_expandPanel = function _RhAccordion_expandPanel(panel) {
    panel.expanded = true;
    panel.hidden = false;
};
_RhAccordion_collapseHeader = async function _RhAccordion_collapseHeader(header, index = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_getIndex).call(this, header)) {
    if (!this.expandedSets) {
        await this.updateComplete;
    }
    this.expandedSets.delete(index);
    header.expanded = false;
    await header.updateComplete;
};
_RhAccordion_collapsePanel = async function _RhAccordion_collapsePanel(panel) {
    await panel.updateComplete;
    if (!panel.expanded) {
        return;
    }
    panel.expanded = false;
    panel.hidden = true;
};
_RhAccordion_onChange = function _RhAccordion_onChange(event) {
    if (RhAccordion_1.isAccordionChangeEvent(event)) {
        const index = __classPrivateFieldGet(this, _RhAccordion_instances, "m", _RhAccordion_getIndex).call(this, event.target);
        if (event.expanded) {
            this.expand(index, event.accordion);
        }
        else {
            this.collapse(index);
        }
    }
};
_RhAccordion_allHeaders = function _RhAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children).filter((x) => x instanceof RhAccordionHeader);
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
RhAccordion.version = '{{version}}';
RhAccordion.styles = [styles];
__decorate([
    property({
        attribute: true,
        reflect: true,
    })
], RhAccordion.prototype, "accents", void 0);
__decorate([
    property({
        attribute: 'expanded-index',
        converter: NumberListConverter,
    })
], RhAccordion.prototype, "expandedIndex", null);
__decorate([
    observed(function largeChanged() {
        [...this.headers, ...this.panels].forEach(el => el.toggleAttribute('large', this.large));
    }),
    property({ reflect: true, type: Boolean })
], RhAccordion.prototype, "large", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAccordion.prototype, "bordered", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhAccordion.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhAccordion.prototype, "on", void 0);
__decorate([
    provide({ context })
], RhAccordion.prototype, "ctx", void 0);
RhAccordion = RhAccordion_1 = __decorate([
    customElement('rh-accordion')
], RhAccordion);
export { RhAccordion };
//# sourceMappingURL=rh-accordion.js.map