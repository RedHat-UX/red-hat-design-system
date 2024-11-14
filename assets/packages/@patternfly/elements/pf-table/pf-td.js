var _PfTd_instances, _PfTd_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host(:empty),\n:host([compound-expand]) {\n  padding: 0;\n}\n\n:host([compound-expand]:hover) {\n  --pf-c-table__compound-expansion-toggle__button--before--BorderRightWidth: var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base);\n  --pf-c-table__compound-expansion-toggle__button--before--BorderLeftWidth: var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base);\n  --pf-c-table__compound-expansion-toggle__button--after--BorderTopWidth: var(--pf-c-table__compound-expansion-toggle__button--after--border-width--base);\n}\n\n:host([compound-expand]:focus-within) {\n  outline-offset: var(--pf-c-table__button--OutlineOffset);\n}\n\n:host([compound-expand][expanded]) {\n  --pf-c-table__compound-expansion-toggle__button--before--BorderRightWidth: var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base);\n  --pf-c-table__compound-expansion-toggle__button--before--BorderLeftWidth: var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base);\n  --pf-c-table__compound-expansion-toggle__button--after--BorderTopWidth: var(--pf-c-table__compound-expansion-toggle__button--after--border-width--base);\n  --pf-c-table__compound-expansion-toggle__button--before--Left: 0;\n}\n\n@media (-webkit-min-device-pixel-ratio: 0) {\n  :host([compound-expand]:focus-within) {\n    outline-style: auto;\n    outline-color: -webkit-focus-ring-color;\n  }\n}\n\n@media (min-width: 768px) {\n  :host {\n    padding: 1.5rem 1rem;\n  }\n}\n\nbutton {\n  position: relative;\n  width: 100%;\n  padding: var(--pf-c-table--cell--PaddingTop) var(--pf-c-table--cell--PaddingRight) var(--pf-c-table--cell--PaddingBottom) var(--pf-c-table--cell--PaddingLeft);\n  font-size: inherit;\n  font-weight: inherit;\n  color: var(--pf-c-table__button--Color);\n  text-align: left;\n  white-space: inherit;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  background-color: var(--pf-c-table__button--BackgroundColor);\n  border: 0;\n  min-width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\nbutton::before,\nbutton::after {\n  position: absolute;\n  inset-inline-end: 0;\n  content: "";\n  border-style: solid;\n  border-width: 0;\n  border-block-start-width: 0px;\n}\n\nbutton::before {\n  inset-block-start: 0;\n  inset-block-end: var(--pf-c-table__compound-expansion-toggle__button--before--Bottom);\n  inset-inline-start: var(--pf-c-table__compound-expansion-toggle__button--before--Left);\n  border-color: var(--pf-c-table__compound-expansion-toggle__button--before--BorderColor);\n  border-inline-start-width: var(--pf-c-table__compound-expansion-toggle__button--before--BorderLeftWidth);\n  border-inline-end-width: var(--pf-c-table__compound-expansion-toggle__button--before--BorderRightWidth);\n}\n\n:host([expanded]) {\n  border-bottom: var(--pf-c-table--BackgroundColor) solid var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base);\n  z-index: 1;\n}\n\nbutton::after {\n  inset-block-start: var(--pf-c-table__compound-expansion-toggle__button--after--Top);\n  inset-inline-start: var(--pf-c-table__compound-expansion-toggle__button--after--Left);\n  pointer-events: none;\n  border-color: var(--pf-c-table__compound-expansion-toggle__button--after--BorderColor);\n  border-block-start-width: var(--pf-c-table__compound-expansion-toggle__button--after--BorderTopWidth);\n}\n\nbutton:active,\nbutton:focus,\nbutton:hover {\n  outline: 0;\n}\n\nbutton:active {\n  color: var(--pf-c-table__button--active--Color);\n}\n\nbutton:focus {\n  color: var(--pf-c-table__button--focus--Color);\n}\n\nbutton:hover {\n  color: var(--pf-c-table__button--hover--Color);\n}\n\n`;
import { RequestExpandEvent } from './pf-tr.js';
let PfTd = class PfTd extends LitElement {
    constructor() {
        super(...arguments);
        _PfTd_instances.add(this);
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'cell');
    }
    render() {
        return this.compoundExpand ? html `
      <button @click="${__classPrivateFieldGet(this, _PfTd_instances, "m", _PfTd_onClick)}">
        <slot></slot>
      </button>
    ` : html `
      <slot></slot>
    `;
    }
};
_PfTd_instances = new WeakSet();
_PfTd_onClick = function _PfTd_onClick() {
    const row = this.closest('pf-tr');
    const cell = this.compoundExpand;
    const event = !row ? new RequestExpandEvent()
        : new RequestExpandEvent(row.expanded === cell || cell || false, row);
    this.dispatchEvent(event);
};
PfTd.styles = [styles];
PfTd.version = "4.0.2";
__decorate([
    property({ attribute: 'compound-expand' })
], PfTd.prototype, "compoundExpand", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTd.prototype, "expanded", void 0);
PfTd = __decorate([
    customElement('pf-td')
], PfTd);
export { PfTd };
//# sourceMappingURL=pf-td.js.map