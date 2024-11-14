var _PfTh_instances, _PfTh_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {\n  font-weight: bold;\n  padding: 1rem;\n  position: relative;\n}\n\n:host(:empty) {\n  padding: 0;\n}\n\n.sortable {\n  padding-inline-end: 1.5em;\n}\n\n.sortable slot {\n  display: inline;\n  margin-inline-end: 1.5em;\n}\n\nbutton {\n  width: 100%;\n  padding: var(--pf-c-table--cell--PaddingTop) var(--pf-c-table--cell--PaddingRight) var(--pf-c-table--cell--PaddingBottom) var(--pf-c-table--cell--PaddingLeft);\n  font-size: inherit;\n  font-weight: inherit;\n  color: var(--pf-c-table__button--Color);\n  text-align: left;\n  white-space: inherit;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  background-color: var(--pf-c-table__button--BackgroundColor);\n  border: 0;\n}\n\nbutton::before {\n  position: absolute;\n  inset: 0;\n  cursor: pointer;\n  content: '';\n}\n\nbutton:hover {\n  --pf-c-table__sort-indicator--Color: var(--pf-c-table__sort__button--hover__sort-indicator--Color);\n  --pf-c-table__sort__button__text--Color: var(--pf-c-table__sort__button--hover__text--Color);\n}\n\nbutton:active {\n  --pf-c-table__sort-indicator--Color: var(--pf-c-table__sort__button--active__sort-indicator--Color);\n  --pf-c-table__sort__button__text--Color: var(--pf-c-table__sort__button--active__text--Color);\n}\n\nbutton:focus {\n  --pf-c-table__sort-indicator--Color: var(--pf-c-table__sort__button--focus__sort-indicator--Color);\n  --pf-c-table__sort__button__text--Color: var(--pf-c-table__sort__button--focus__text--Color);\n}\n\nbutton.sortable {\n  --pf-c-table--cell--PaddingTop: var(--pf-c-table__sort__button--PaddingTop);\n  --pf-c-table--cell--PaddingRight: var(--pf-c-table__sort__button--PaddingRight);\n  --pf-c-table--cell--PaddingBottom: var(--pf-c-table__sort__button--PaddingBottom);\n  --pf-c-table--cell--PaddingLeft: var(--pf-c-table__sort__button--PaddingLeft);\n\n  display: flex;\n  width: auto;\n  margin-top: var(--pf-c-table__sort__button--MarginTop);\n  margin-bottom: var(--pf-c-table__sort__button--MarginBottom);\n  margin-left: var(--pf-c-table__sort__button--MarginLeft);\n}\n\nbutton.selected {\n  --pf-c-table__sort-indicator--Color: var(--pf-c-table__sort--m-selected__sort-indicator--Color);\n  --pf-c-table__sort__button__text--Color: var(--pf-c-table__sort--m-selected__button__text--Color);\n\n  color: var(--pf-c-table__sort--m-selected__button--Color);\n}\n\n#sort-indicator {\n  width: 0;\n  margin-inline-start: -1em;\n  overflow: visible;\n  color: var(--pf-c-table__sort-indicator--Color);\n}\n\n.visually-hidden {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n`;
const DIRECTIONS = { asc: 'desc', desc: 'asc' };
export class RequestSortEvent extends Event {
    constructor(key, direction) {
        super('request-sort', {
            bubbles: true,
            cancelable: true,
        });
        this.key = key;
        this.direction = direction;
    }
}
const paths = new Map(Object.entries({
    asc: `M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z`,
    desc: `M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z`,
    sort: `M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z`,
}));
let PfTh = class PfTh extends LitElement {
    constructor() {
        super(...arguments);
        _PfTh_instances.add(this);
        this.sortable = false;
        this.selected = false;
    }
    connectedCallback() {
        super.connectedCallback();
        const closestThead = this.closest('pf-thead');
        const closestTable = this.closest('pf-table');
        const isChildOfThead = !!closestThead && !!closestTable?.contains(closestThead);
        const role = isChildOfThead ? 'colheader' : 'rowheader';
        this.setAttribute('role', role);
    }
    render() {
        const selected = !!this.selected;
        return this.sortable ?
            html `
        <button id="sort-button"
                class="sortable ${classMap({ selected })}"
                part="sort-button"
                @click="${__classPrivateFieldGet(this, _PfTh_instances, "m", _PfTh_onClick)}">
          <slot></slot>
          <span class="visually-hidden">${!this.sortDirection ? '' : `(sorted ${this.sortDirection === 'asc' ? 'ascending' : 'descending'})`}</span>
          <span id="sort-indicator">
            <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 256 512" aria-hidden="true" role="img" style="vertical-align: -0.125em;">${svg `
              <path d="${paths.get(this.sortDirection ?? 'sort')}"></path>`}
            </svg>
          </span>
        </button>
      ` : html `
        <slot></slot>
      `;
    }
    sort() {
        const next = DIRECTIONS[this.sortDirection ?? 'asc'];
        this.dispatchEvent(new RequestSortEvent(this.key, next));
    }
};
_PfTh_instances = new WeakSet();
_PfTh_onClick = function _PfTh_onClick() {
    if (this.sortable) {
        this.sort();
    }
};
PfTh.styles = [styles];
PfTh.version = "4.0.2";
__decorate([
    property({ type: Boolean, reflect: true })
], PfTh.prototype, "sortable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTh.prototype, "selected", void 0);
__decorate([
    property({
        reflect: true,
        attribute: 'sort-direction',
    })
], PfTh.prototype, "sortDirection", void 0);
__decorate([
    property()
], PfTh.prototype, "key", void 0);
PfTh = __decorate([
    customElement('pf-th')
], PfTh);
export { PfTh };
//# sourceMappingURL=pf-th.js.map