var _PfAccordion_instances, _PfAccordion_logger, _PfAccordion_initialized, _PfAccordion_mo, _PfAccordion_tabindex, _PfAccordion_expandedIndex, _PfAccordion_activeHeader_get, _PfAccordion_init, _PfAccordion_panelForHeader, _PfAccordion_expandHeader, _PfAccordion_expandPanel, _PfAccordion_collapseHeader, _PfAccordion_collapsePanel, _PfAccordion_allHeaders, _PfAccordion_allPanels, _PfAccordion_getIndex;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { listen } from '@patternfly/pfe-core/decorators/listen.js';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { NumberListConverter } from '@patternfly/pfe-core';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { PfAccordionHeader, PfAccordionHeaderChangeEvent } from './pf-accordion-header.js';
import { PfAccordionPanel } from './pf-accordion-panel.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
import { css } from "lit";
const style = css `:host {\n\t--pf-c-accordion--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);\n\t--pf-c-accordion__toggle--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__toggle--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__toggle--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__toggle--before--BackgroundColor: transparent;\n\t--pf-c-accordion__toggle--before--Top: 0;\n\t--pf-c-accordion__toggle--hover--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--focus--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--active--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--before--Width: var(--pf-global--BorderWidth--lg, 3px);\n\t--pf-c-accordion__toggle--m-expanded--before--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-accordion__toggle-text--MaxWidth: calc(100% - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-accordion__toggle--hover__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--active__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--active__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle--focus__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--focus__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle--m-expanded__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle-icon--Transition: .2s ease-in 0s;\n\t--pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate: 90deg;\n\t--pf-c-accordion__expanded-content--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-accordion__expanded-content--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n\t--pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-accordion__expanded-content--m-fixed--MaxHeight: 9.375rem;\n\t--pf-c-accordion__expanded-content-body--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__expanded-content-body--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__expanded-content-body--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__expanded-content-body--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__expanded-content-body--expanded-content-body--PaddingTop: 0;\n\t--pf-c-accordion__expanded-content-body--before--BackgroundColor: transparent;\n\t--pf-c-accordion__expanded-content-body--before--Width: var(--pf-global--BorderWidth--lg, 3px);\n\t--pf-c-accordion__expanded-content-body--before--Top: 0;\n\t--pf-c-accordion--m-display-lg__toggle--PaddingTop: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-display-lg__toggle--FontFamily: var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif);\n\t--pf-c-accordion--m-display-lg__toggle--FontSize: var(--pf-global--FontSize--xl, 1.25rem);\n\t--pf-c-accordion--m-display-lg__toggle--hover__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--active__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--active__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__expanded-content--FontSize: var(--pf-global--FontSize--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop: 0;\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-bordered--BorderTopWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered--BorderTopColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\t--pf-c-accordion--m-bordered__toggle--before--Top: calc(-1 * var(--pf-global--BorderWidth--sm, 1px));\n\t--pf-c-accordion--m-bordered__toggle--after--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\t--pf-c-accordion--m-bordered__toggle--after--BorderTopWidth: 0;\n\t--pf-c-accordion--m-bordered__toggle--after--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\tcolor: var(--pf-global--Color--100, #151515);\n\tbackground-color: var(--pf-c-accordion--BackgroundColor);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:first-child),\n:host([large]) ::slotted(pf-accordion-header:first-child) {\n  display: block;\n  border-top: 1px solid var(--accordion__bordered--Color);\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:not(:first-child)),\n:host([large]) ::slotted(pf-accordion-header:not(:first-child)) {\n  display: block;\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:is([expanded])),\n:host([large]) ::slotted(pf-accordion-header:is([expanded])) {\n  display: block;\n  border-bottom: 0;\n}\n\n:host([bordered]) ::slotted(pf-accordion-panel:is([expanded])),\n:host([large]) ::slotted(pf-accordion-panel:is([expanded])) {\n  display: block;\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n`;
export class PfAccordionExpandEvent extends Event {
    constructor(toggle, panel) {
        super('expand', { bubbles: true, cancelable: true });
        this.toggle = toggle;
        this.panel = panel;
    }
}
export class PfAccordionCollapseEvent extends Event {
    constructor(toggle, panel) {
        super('collapse', { bubbles: true, cancelable: true });
        this.toggle = toggle;
        this.panel = panel;
    }
}
let PfAccordion = class PfAccordion extends LitElement {
    constructor() {
        super(...arguments);
        _PfAccordion_instances.add(this);
        /** When true, only one accordion panel may be expanded at a time */
        this.single = false;
        /** Whether to apply the `bordered` style variant */
        this.bordered = false;
        /** Whether to apply the `large` style variant */
        this.large = false;
        this.fixed = false;
        _PfAccordion_logger.set(this, new Logger(this));
        // actually is read in #init, by the `||=` operator
        // eslint-disable-next-line no-unused-private-class-members
        _PfAccordion_initialized.set(this, false);
        _PfAccordion_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_init).call(this)));
        _PfAccordion_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => this.headers,
        }));
        _PfAccordion_expandedIndex.set(this, []);
        this.expandedSets = new Set();
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
        return __classPrivateFieldGet(this, _PfAccordion_expandedIndex, "f");
    }
    set expandedIndex(value) {
        const old = __classPrivateFieldGet(this, _PfAccordion_expandedIndex, "f");
        __classPrivateFieldSet(this, _PfAccordion_expandedIndex, value, "f");
        __classPrivateFieldGet(this, _PfAccordion_tabindex, "f").atFocusedItemIndex = value.at(-1) ?? -1;
        if (JSON.stringify(old) !== JSON.stringify(value)) {
            this.requestUpdate('expandedIndex', old);
            this.collapseAll().then(async () => {
                for (const i of this.expandedIndex) {
                    await this.expand(i);
                }
            });
        }
    }
    get headers() {
        return __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_allHeaders).call(this);
    }
    get panels() {
        return __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_allPanels).call(this);
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfAccordion_mo, "f").observe(this, { childList: true });
        __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_init).call(this);
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
    async firstUpdated() {
        let lastExpandedIndex;
        const { headers, single } = this;
        const lastExpanded = headers.filter(x => x.hasAttribute('expanded')).pop();
        if (lastExpanded) {
            lastExpandedIndex = headers.indexOf(lastExpanded);
        }
        headers.forEach((header, index) => {
            if (header.expanded && (!single || index === lastExpandedIndex)) {
                __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandHeader).call(this, header, index);
                const panel = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_panelForHeader).call(this, header);
                if (panel) {
                    __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandPanel).call(this, panel);
                }
            }
        });
    }
    async getUpdateComplete() {
        const c = await super.getUpdateComplete();
        const results = await Promise.all([
            ...__classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_allHeaders).call(this).map(x => x.updateComplete),
            ...__classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_allPanels).call(this).map(x => x.updateComplete),
        ]);
        return c && results.every(Boolean);
    }
    largeChanged() {
        for (const el of [...this.headers, ...this.panels]) {
            el.toggleAttribute('large', this.large);
        }
    }
    updateActiveHeader() {
        if (__classPrivateFieldGet(this, _PfAccordion_instances, "a", _PfAccordion_activeHeader_get)
            && __classPrivateFieldGet(this, _PfAccordion_instances, "a", _PfAccordion_activeHeader_get) !== this.headers.at(__classPrivateFieldGet(this, _PfAccordion_tabindex, "f").atFocusedItemIndex)) {
            __classPrivateFieldGet(this, _PfAccordion_tabindex, "f").atFocusedItemIndex = this.headers.indexOf(__classPrivateFieldGet(this, _PfAccordion_instances, "a", _PfAccordion_activeHeader_get));
        }
    }
    onChange(event) {
        if (event instanceof PfAccordionHeaderChangeEvent && event.accordion === this) {
            const index = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_getIndex).call(this, event.target);
            if (event.expanded) {
                this.expand(index);
            }
            else {
                this.collapse(index);
            }
            event.stopPropagation();
        }
    }
    updateAccessibility() {
        const { headers } = this;
        // For each header in the accordion, attach the aria connections
        headers.forEach(header => {
            const panel = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_panelForHeader).call(this, header);
            if (panel) {
                header.setAttribute('aria-controls', panel.id);
                panel.setAttribute('aria-labelledby', header.id);
                panel.hidden = !panel.expanded;
            }
        });
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand.
     * Accepts an optional parent accordion to search for headers and panels.
     * @param index index (0-based) of the panel to expand
     */
    async expand(index) {
        if (index === -1) {
            return;
        }
        // Get all the headers and capture the item by index value
        if (this.single) {
            await Promise.all([
                ...this.headers.map((header, index) => header.expanded && this.collapse(index)),
            ]);
        }
        const header = this.headers[index];
        if (!header) {
            return;
        }
        const panel = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_panelForHeader).call(this, header);
        if (!panel) {
            return;
        }
        // If the header and panel exist, open both
        __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandHeader).call(this, header, index);
        __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandPanel).call(this, panel);
        this.dispatchEvent(new PfAccordionExpandEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to collapse.
     * @param index index (0-based) of the panel to collapse
     */
    async collapse(index) {
        const header = this.headers.at(index);
        const panel = this.panels.at(index);
        if (!header || !panel) {
            return;
        }
        __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_collapseHeader).call(this, header);
        __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_collapsePanel).call(this, panel);
        this.dispatchEvent(new PfAccordionCollapseEvent(header, panel));
        await this.updateComplete;
    }
    /**
     * Accepts a 0-based index value (integer) for the set of accordion items to expand or collapse.
     * @param index index (0-based) of the panel to toggle
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
     * Expands all accordion items.
     */
    async expandAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_expandPanel).call(this, panel));
        await this.updateComplete;
    }
    /**
     * Collapses all accordion items.
     */
    async collapseAll() {
        this.headers.forEach(header => __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_collapseHeader).call(this, header));
        this.panels.forEach(panel => __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_collapsePanel).call(this, panel));
        await this.updateComplete;
    }
};
_PfAccordion_logger = new WeakMap();
_PfAccordion_initialized = new WeakMap();
_PfAccordion_mo = new WeakMap();
_PfAccordion_tabindex = new WeakMap();
_PfAccordion_expandedIndex = new WeakMap();
_PfAccordion_instances = new WeakSet();
_PfAccordion_activeHeader_get = function _PfAccordion_activeHeader_get() {
    const { headers } = this;
    const index = headers.findIndex(header => header.matches(':focus,:focus-within'));
    return index > -1 ? headers.at(index) : undefined;
};
_PfAccordion_init = 
/**
 * Initialize the accordion by connecting headers and panels
 * with aria controls and labels; set up the default disclosure
 * state if not set by the author; and check the URL for default
 * open
 */
async function _PfAccordion_init() {
    __classPrivateFieldSet(this, _PfAccordion_initialized, __classPrivateFieldGet(this, _PfAccordion_initialized, "f") || !!await this.updateComplete, "f");
    this.updateAccessibility();
};
_PfAccordion_panelForHeader = function _PfAccordion_panelForHeader(header) {
    const next = header.nextElementSibling;
    if (!(next instanceof PfAccordionPanel)) {
        return void __classPrivateFieldGet(this, _PfAccordion_logger, "f").error('Sibling element to a header needs to be a panel');
    }
    else {
        return next;
    }
};
_PfAccordion_expandHeader = function _PfAccordion_expandHeader(header, index = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_getIndex).call(this, header)) {
    // If this index is not already listed in the expandedSets array, add it
    this.expandedSets.add(index);
    __classPrivateFieldSet(this, _PfAccordion_expandedIndex, [...this.expandedSets], "f");
    header.expanded = true;
};
_PfAccordion_expandPanel = function _PfAccordion_expandPanel(panel) {
    panel.expanded = true;
    panel.hidden = false;
};
_PfAccordion_collapseHeader = async function _PfAccordion_collapseHeader(header, index = __classPrivateFieldGet(this, _PfAccordion_instances, "m", _PfAccordion_getIndex).call(this, header)) {
    if (!this.expandedSets) {
        await this.updateComplete;
    }
    this.expandedSets.delete(index);
    header.expanded = false;
    await header.updateComplete;
};
_PfAccordion_collapsePanel = async function _PfAccordion_collapsePanel(panel) {
    await panel.updateComplete;
    if (!panel.expanded) {
        return;
    }
    panel.expanded = false;
    panel.hidden = true;
};
_PfAccordion_allHeaders = function _PfAccordion_allHeaders(accordion = this) {
    return Array.from(accordion.children ?? []).filter((x) => x instanceof PfAccordionHeader);
};
_PfAccordion_allPanels = function _PfAccordion_allPanels(accordion = this) {
    return Array.from(accordion.children ?? []).filter((x) => x instanceof PfAccordionPanel);
};
_PfAccordion_getIndex = function _PfAccordion_getIndex(el) {
    if (el instanceof PfAccordionHeader) {
        return this.headers.findIndex(header => header.id === el.id);
    }
    if (el instanceof PfAccordionPanel) {
        return this.panels.findIndex(panel => panel.id === el.id);
    }
    __classPrivateFieldGet(this, _PfAccordion_logger, "f").warn('The #getIndex method expects to receive a header or panel element.');
    return -1;
};
PfAccordion.styles = [style];
PfAccordion.version = "4.0.2";
__decorate([
    property({ reflect: true, type: Boolean })
], PfAccordion.prototype, "single", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "bordered", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "large", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "fixed", void 0);
__decorate([
    property({ attribute: 'expanded-index', converter: NumberListConverter })
], PfAccordion.prototype, "expandedIndex", null);
__decorate([
    observes('large')
], PfAccordion.prototype, "largeChanged", null);
__decorate([
    listen('focusin')
], PfAccordion.prototype, "updateActiveHeader", null);
__decorate([
    listen('change')
], PfAccordion.prototype, "onChange", null);
PfAccordion = __decorate([
    customElement('pf-accordion')
], PfAccordion);
export { PfAccordion };
//# sourceMappingURL=pf-accordion.js.map