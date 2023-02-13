var _BaseAccordion_instances, _BaseAccordion_logger, _BaseAccordion_styles, _BaseAccordion_transitionDuration, _BaseAccordion_initialized, _BaseAccordion_mo, _BaseAccordion_init, _BaseAccordion_panelForHeader, _BaseAccordion_expandHeader, _BaseAccordion_expandPanel, _BaseAccordion_collapseHeader, _BaseAccordion_collapsePanel, _BaseAccordion_getAnimationDuration, _BaseAccordion_animate, _BaseAccordion_onChange, _BaseAccordion_onKeydown, _BaseAccordion_allHeaders, _BaseAccordion_allPanels, _BaseAccordion_previousHeader, _BaseAccordion_nextHeader, _BaseAccordion_firstHeader, _BaseAccordion_lastHeader, _BaseAccordion_getIndex;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { NumberListConverter, ComposedEvent } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { AccordionHeaderChangeEvent, BaseAccordionHeader } from './BaseAccordionHeader.js';
import { BaseAccordionPanel } from './BaseAccordionPanel.js';
import { css } from "lit";
const style = css `:host{transition-property:box-shadow,border;transition-timing-function:ease-out;transition-duration:1ms}`;
const CSS_TIMING_UNITS_RE = /^[0-9.]+(?<unit>[a-zA-Z]+)/g;
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
        /**
         * Sets and reflects the currently expanded accordion 0-based indexes.
         * Use commas to separate multiple indexes.
         * ```html
         * <pf-accordion expanded-index="1,2">
         *   ...
         * </pf-accordion>
         * ```
         */
        this.expandedIndex = [];
        this.expandedSets = new Set();
        _BaseAccordion_logger.set(this, new Logger(this));
        _BaseAccordion_styles.set(this, getComputedStyle(this));
        _BaseAccordion_transitionDuration.set(this, __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getAnimationDuration).call(this));
        // actually is read in #init, by the `||=` operator
        _BaseAccordion_initialized.set(this, false);
        _BaseAccordion_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_init).call(this)));
    }
    static isAccordion(target) {
        return target instanceof BaseAccordion;
    }
    static isHeader(target) {
        return target instanceof BaseAccordionHeader;
    }
    static isPanel(target) {
        return target instanceof BaseAccordionPanel;
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
        this.addEventListener('keydown', __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_onKeydown));
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
        for (const header of headers.filter(x => x.expanded)) {
            await this.expand(headers.indexOf(header));
        }
    }
    updateAccessibility() {
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
     */
    async expand(index, parentAccordion) {
        if (index === -1) {
            return;
        }
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
_BaseAccordion_logger = new WeakMap(), _BaseAccordion_styles = new WeakMap(), _BaseAccordion_transitionDuration = new WeakMap(), _BaseAccordion_initialized = new WeakMap(), _BaseAccordion_mo = new WeakMap(), _BaseAccordion_instances = new WeakSet(), _BaseAccordion_init = 
/**
 * Initialize the accordion by connecting headers and panels
 * with aria controls and labels; set up the default disclosure
 * state if not set by the author; and check the URL for default
 * open
 */
async function _BaseAccordion_init() {
    __classPrivateFieldSet(this, _BaseAccordion_initialized, __classPrivateFieldGet(this, _BaseAccordion_initialized, "f") || !!await this.updateComplete, "f");
    this.updateAccessibility();
}, _BaseAccordion_panelForHeader = function _BaseAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!BaseAccordion.isPanel(next)) {
        return void __classPrivateFieldGet(this, _BaseAccordion_logger, "f").error('Sibling element to a header needs to be a panel');
    }
    else {
        return next;
    }
}, _BaseAccordion_expandHeader = function _BaseAccordion_expandHeader(header, index = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getIndex).call(this, header)) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedSets.add(index);
    header.expanded = true;
}, _BaseAccordion_expandPanel = async function _BaseAccordion_expandPanel(panel) {
    panel.expanded = true;
    panel.hidden = false;
    await panel.updateComplete;
    const rect = panel.getBoundingClientRect();
    __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_animate).call(this, panel, 0, rect.height);
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
    const rect = panel.getBoundingClientRect();
    panel.expanded = false;
    panel.hidden = true;
    __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_animate).call(this, panel, rect.height, 0);
    await panel.updateComplete;
}, _BaseAccordion_getAnimationDuration = function _BaseAccordion_getAnimationDuration() {
    if ('computedStyleMap' in this) {
        // @ts-expect-error: https://caniuse.com/?search=computedStyleMap
        return this.computedStyleMap().get('transition-duration')?.to('ms').value;
    }
    else {
        const { transitionDuration } = __classPrivateFieldGet(this, _BaseAccordion_styles, "f");
        const groups = CSS_TIMING_UNITS_RE.exec(transitionDuration)?.groups;
        if (!groups) {
            return 0;
        }
        const parsed = parseFloat(transitionDuration);
        if (groups.unit === 's') {
            return parsed * 1000;
        }
        else {
            return parsed;
        }
    }
}, _BaseAccordion_animate = async function _BaseAccordion_animate(panel, start, end) {
    if (panel) {
        const header = panel.previousElementSibling;
        const transitionDuration = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getAnimationDuration).call(this);
        if (transitionDuration) {
            __classPrivateFieldSet(this, _BaseAccordion_transitionDuration, transitionDuration, "f");
        }
        const duration = __classPrivateFieldGet(this, _BaseAccordion_transitionDuration, "f") ?? 0;
        header?.classList.add('animating');
        panel.classList.add('animating');
        const animation = panel.animate({ height: [`${start}px`, `${end}px`] }, { duration });
        animation.play();
        await animation.finished;
        header?.classList.remove('animating');
        panel.classList.remove('animating');
        panel.style.removeProperty('height');
        panel.hidden = !panel.expanded;
    }
}, _BaseAccordion_onChange = function _BaseAccordion_onChange(event) {
    if (this.classList.contains('animating')) {
        return;
    }
    const index = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_getIndex).call(this, event.target);
    if (event.expanded) {
        this.expand(index, event.accordion);
    }
    else {
        this.collapse(index);
    }
}, _BaseAccordion_onKeydown = 
/**
 * @see https://www.w3.org/TR/wai-aria-practices/#accordion
 */
async function _BaseAccordion_onKeydown(evt) {
    const currentHeader = evt.target;
    if (!BaseAccordion.isHeader(currentHeader)) {
        return;
    }
    let newHeader;
    switch (evt.key) {
        case 'ArrowDown':
            evt.preventDefault();
            newHeader = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_nextHeader).call(this);
            break;
        case 'ArrowUp':
            evt.preventDefault();
            newHeader = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_previousHeader).call(this);
            break;
        case 'Home':
            evt.preventDefault();
            newHeader = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_firstHeader).call(this);
            break;
        case 'End':
            evt.preventDefault();
            newHeader = __classPrivateFieldGet(this, _BaseAccordion_instances, "m", _BaseAccordion_lastHeader).call(this);
            break;
    }
    newHeader?.focus?.();
}, _BaseAccordion_allHeaders = function _BaseAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children).filter(BaseAccordion.isHeader);
}, _BaseAccordion_allPanels = function _BaseAccordion_allPanels(accordion = this) {
    return Array.from(accordion.children).filter(BaseAccordion.isPanel);
}, _BaseAccordion_previousHeader = function _BaseAccordion_previousHeader() {
    const { headers } = this;
    const newIndex = headers.findIndex(header => header.matches(':focus,:focus-within')) - 1;
    return headers[(newIndex + headers.length) % headers.length];
}, _BaseAccordion_nextHeader = function _BaseAccordion_nextHeader() {
    const { headers } = this;
    const newIndex = headers.findIndex(header => header.matches(':focus,:focus-within')) + 1;
    return headers[newIndex % headers.length];
}, _BaseAccordion_firstHeader = function _BaseAccordion_firstHeader() {
    return this.headers.at(0);
}, _BaseAccordion_lastHeader = function _BaseAccordion_lastHeader() {
    return this.headers.at(-1);
}, _BaseAccordion_getIndex = function _BaseAccordion_getIndex(el) {
    if (BaseAccordion.isHeader(el)) {
        return this.headers.findIndex(header => header.id === el.id);
    }
    if (BaseAccordion.isPanel(el)) {
        return this.panels.findIndex(panel => panel.id === el.id);
    }
    __classPrivateFieldGet(this, _BaseAccordion_logger, "f").warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
};
BaseAccordion.styles = [style];
__decorate([
    observed(async function expandedIndexChanged(oldVal, newVal) {
        if (oldVal && oldVal !== newVal) {
            await this.collapseAll();
            for (const i of this.expandedIndex) {
                await this.expand(i, this);
            }
        }
    }),
    property({
        attribute: 'expanded-index',
        converter: NumberListConverter
    })
], BaseAccordion.prototype, "expandedIndex", void 0);
//# sourceMappingURL=BaseAccordion.js.map