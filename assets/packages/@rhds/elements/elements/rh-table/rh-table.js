var _RhTable_instances, _a, _RhTable_table_get, _RhTable_cols_get, _RhTable_rows_get, _RhTable_colHeaders_get, _RhTable_summary_get, _RhTable_logger, _RhTable_mo, _RhTable_onPointerleave, _RhTable_onPointerover, _RhTable_init, _RhTable_onSlotChange, _RhTable_onRequestSort, _RhTable_performSort;
var RhTable_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { RequestSortEvent, RhSortButton } from './rh-sort-button.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `*{box-sizing:border-box}:host{position:relative;display:block;width:100%;overflow:auto;scrollbar-color:var(--_scrollbar-track-color) var(--_scrollbar-thumb-color);color:var(--rh-color-text-primary);--_scrollbar-size:0.625rem;--_scrollbar-thumb-color:var(--rh-color-gray-50,#707070);--_scrollbar-track-color:var(--rh-color-border-subtle);--_row-border:var(--rh-table-row-border,var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle-on-light,#c7c7c7));--_row-background-hover-color:light-dark(var(--rh-table-row-background-hover-color,rgba(from var(--rh-color-gray-40,#a3a3a3) r g b/0.1)),rgba(from var(--rh-color-white,#ffffff) r g b/0.1));--_column-background-hover-color:light-dark(var(--rh-table-column-background-hover-color,rgba(from var(--rh-color-blue-50,#0066cc) r g b/0.1)),rgba(from var(--rh-color-blue-70,#003366) r g b/0.3))}:host::-webkit-scrollbar{width:var(--_scrollbar-size);height:var(--_scrollbar-size)}:host::-webkit-scrollbar,:host::-webkit-scrollbar-track{background-color:var(--_scrollbar-track-color)}:host::-webkit-scrollbar-thumb{background-color:var(--_scrollbar-thumb-color)}[slot]{display:block}::slotted([slot=summary]){display:block;padding:var(--rh-space-xl,24px) var(--rh-space-lg,16px) 0 var(--rh-space-lg,16px);color:var(--rh-color-text-secondary);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-style:italic;font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}`;
/**
 * A table is a container for displaying information. It allows a user to scan, examine, and compare large amounts of data.
 * @summary Organizes and displays information from a data set
 * @slot               - an HTML table
 * @slot    summary    - a brief description of the data
 * @cssprop {<color>} [--rh-table-row-background-hover-color=224 224 224 / 40%] - row hover background color
 * @cssprop {<color>} [--rh-table-column-background-hover-color=0 102 204 / 10%] - column hover background color
 * @cssprop [--rh-table-row-border=1px solid #c7c7c7] - row border
 */
let RhTable = RhTable_1 = _a = class RhTable extends LitElement {
    constructor() {
        super(...arguments);
        _RhTable_instances.add(this);
        _RhTable_logger.set(this, new Logger(this));
        _RhTable_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_init)));
    }
    static getNodeContentForSort(columnIndexToSort, node) {
        const content = node.querySelector(`
      :is(th, td):nth-child(${columnIndexToSort + 1}),
      tr > :is(th, td):nth-child(${columnIndexToSort + 1})
    `.trim())?.textContent?.trim()?.toLowerCase() ?? '';
        return { node, content };
    }
    static sortByContent(direction, a, b) {
        if (direction === 'asc') {
            return (a.content < b.content ? -1 : a.content > b.content ? 1 : 0);
        }
        else {
            return (b.content < a.content ? -1 : b.content > a.content ? 1 : 0);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_init).call(this);
        __classPrivateFieldGet(this, _RhTable_mo, "f").observe(this, { childList: true });
    }
    render() {
        return html `
      <div id="container" part="container">
        <slot @pointerleave="${__classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_onPointerleave)}"
              @pointerover="${__classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_onPointerover)}"
              @request-sort="${__classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_onRequestSort)}"
              @slotchange="${__classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_onSlotChange)}"></slot>
        <slot id="summary" name="summary"></slot>
      </div>
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhTable_mo, "f").disconnect();
    }
};
_RhTable_logger = new WeakMap();
_RhTable_mo = new WeakMap();
_RhTable_instances = new WeakSet();
_RhTable_table_get = function _RhTable_table_get() {
    return this.querySelector?.('table');
};
_RhTable_cols_get = function _RhTable_cols_get() {
    return this.querySelectorAll?.('col');
};
_RhTable_rows_get = function _RhTable_rows_get() {
    return this.querySelectorAll?.('tbody > tr');
};
_RhTable_colHeaders_get = function _RhTable_colHeaders_get() {
    return this.querySelectorAll?.('thead > tr > th');
};
_RhTable_summary_get = function _RhTable_summary_get() {
    return this.querySelector?.('[slot="summary"]');
};
_RhTable_onPointerleave = function _RhTable_onPointerleave() {
    if (!__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_cols_get)) {
        return;
    }
    __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_cols_get).forEach(col => col.classList.remove('active'));
};
_RhTable_onPointerover = function _RhTable_onPointerover(event) {
    if (!__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_cols_get)) {
        return;
    }
    let { target } = event;
    if (!(target instanceof Element)) {
        return;
    }
    if (!['td', 'th'].includes(target.tagName)) {
        const ancestorCell = target.closest('td, th');
        if (ancestorCell) {
            target = ancestorCell;
        }
        else {
            return;
        }
    }
    event.preventDefault();
    __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_cols_get).forEach((col, index) => {
        const { cellIndex } = target;
        col.classList.toggle('active', index === cellIndex);
    });
};
_RhTable_init = function _RhTable_init() {
    if (__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_table_get) && __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_summary_get)) {
        __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_table_get).setAttribute('aria-describedby', 'summary');
    }
    /**
     * Fail criteria:
     * - If rowspan exists anywhere in the table, the auto-generated heading labels won't work
     * - If colspan exists in the <thead>, the auto-generated heading labels won't work
     * - If colspan exists in the <tbody>, the auto-generated heading labels partially work (only assigning the first)
     *
     * So we bail for now...
     */
    if (this.querySelector?.('[colspan], [rowspan]')) {
        return;
    }
    /* If responsive attribute set, auto-assign `data-label` attributes based on column headers */
    if (__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_table_get)?.tHead && __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_colHeaders_get)?.length && __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)) {
        for (const row of __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)) {
            row?.querySelectorAll(':is(td, th)')
                .forEach((cell, index) => {
                var _b;
                (_b = cell.dataset).label || (_b.label = __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_colHeaders_get)?.[index]?.innerText || '');
            });
        }
    }
};
_RhTable_onSlotChange = function _RhTable_onSlotChange() {
    __classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_init).call(this);
};
_RhTable_onRequestSort = function _RhTable_onRequestSort(event) {
    if (event instanceof RequestSortEvent) {
        for (const button of this.querySelectorAll('rh-sort-button')) {
            const header = button.closest('th');
            if (button === event.target) {
                header?.setAttribute('aria-sort', `${event.direction}ending`);
            }
            else {
                button.removeAttribute('sort-direction');
                header?.removeAttribute('aria-sort');
            }
        }
        if (!event.defaultPrevented && event.target instanceof RhSortButton) {
            event.target.sortDirection = event.direction;
            __classPrivateFieldGet(this, _RhTable_instances, "m", _RhTable_performSort).call(this, event.target, event.direction);
        }
    }
};
_RhTable_performSort = function _RhTable_performSort(button, direction) {
    const header = button.closest('th');
    const children = header?.parentElement?.children;
    if (children) {
        const columnIndexToSort = [...children].indexOf(header);
        if (!__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)) {
            __classPrivateFieldGet(this, _RhTable_logger, "f").warn('Could not perform sort: no rows found');
            return;
        }
        Array
            .from(__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get), node => RhTable_1.getNodeContentForSort(columnIndexToSort, node))
            .sort((a, b) => RhTable_1.sortByContent(direction, a, b))
            .forEach(({ node }, index) => {
            if (!__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)) {
                return;
            }
            const target = __classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)[index];
            if (__classPrivateFieldGet(this, _RhTable_instances, "a", _RhTable_rows_get)[index] !== node) {
                const position = direction === 'desc' ? 'afterend' : 'beforebegin';
                target.insertAdjacentElement(position, node);
            }
        });
    }
};
RhTable.styles = [styles];
RhTable = RhTable_1 = __decorate([
    customElement('rh-table'),
    themable
], RhTable);
export { RhTable };
//# sourceMappingURL=rh-table.js.map