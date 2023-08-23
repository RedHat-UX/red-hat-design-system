var _PfThead_instances, _PfThead_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `:host{--pf-c-table--cell--MinWidth:var(--pf-c-table--m-truncate--cell--MinWidth);--pf-c-table--cell--MaxWidth:var(--pf-c-table--m-truncate--cell--MaxWidth);--pf-c-table--cell--Overflow:hidden;--pf-c-table--cell--TextOverflow:ellipsis;--pf-c-table--cell--WhiteSpace:nowrap;--pf-c-table--cell--FontSize:var(--pf-c-table--thead--cell--FontSize, var(--pf-global--FontSize--sm, 0.875rem));--pf-c-table--cell--FontWeight:var(--pf-c-table--thead--cell--FontWeight, var(--pf-global--FontWeight--bold, 700));vertical-align:bottom;display:grid;visibility:visible}@media (max-width:768px){:host{display:none;visibility:hidden}}`;
/**
 * Table head
 * @slot - Place element content here
 */
let PfThead = class PfThead extends LitElement {
    constructor() {
        super(...arguments);
        _PfThead_instances.add(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
    }
    render() {
        return html `
      <slot @slotchange=${__classPrivateFieldGet(this, _PfThead_instances, "m", _PfThead_onSlotchange)}></slot>
    `;
    }
};
_PfThead_instances = new WeakSet();
_PfThead_onSlotchange = function _PfThead_onSlotchange() {
    for (const th of this.querySelectorAll(':scope > pf-th')) {
        th.setAttribute('role', 'columnheader');
    }
};
PfThead.styles = [styles];
PfThead = __decorate([
    customElement('pf-thead')
], PfThead);
export { PfThead };
//# sourceMappingURL=pf-thead.js.map