var _PfJumpLinksItem_instances, _PfJumpLinksItem_internals, _PfJumpLinksItem_onClick, _PfJumpLinksItem_onFocus;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const style = css `:host {\n  display: block;\n}\n\n#container {\n  display: contents;\n}\n\nslot:not([name]) {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--pf-global--spacer--md, 1rem);\n}\n\na {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  flex: 1;\n  padding-block-start: var(--pf-c-jump-links__link--PaddingTop,\n    var(--pf-global--spacer--md, 1rem));\n  padding-inline-end: var(--pf-c-jump-links__link--PaddingRight,\n    var(--pf-global--spacer--md, 1rem));\n  padding-block-end: var(--pf-c-jump-links__link--PaddingBottom,\n    var(--pf-global--spacer--md, 1rem));\n  padding-inline-start: var(--pf-c-jump-links__link--PaddingLeft,\n    var(--pf-global--spacer--md, 1rem));\n  text-decoration: none;\n  outline-offset: var(--pf-c-jump-links__link--OutlineOffset,\n    calc(-1 * var(--pf-global--spacer--sm, 0.5rem)));\n  color: var(--pf-c-jump-links__link-text--Color,\n    var(--pf-global--Color--200, #6a6e73));\n}\n\na::before {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  border-color: var(--pf-c-jump-links__link--before--BorderColor, transparent);\n  border-style: solid;\n  border-width:\n    var(--pf-c-jump-links__link--before--BorderTopWidth,\n      var(--pf-c-jump-links__list--before--BorderTopWidth,\n        var(--pf-global--BorderWidth--sm, 1px)))\n    var(--pf-c-jump-links__link--before--BorderRightWidth, 0)\n    var(--pf-c-jump-links__link--before--BorderBottomWidth, 0)\n    var(--pf-c-jump-links__link--before--BorderLeftWidth, 0);\n}\n\na:hover {\n  --pf-c-jump-links__link-text--Color: var(--pf-c-jump-links__link--hover__link-text--Color,\n    var(--pf-global--Color--100, #151515));\n}\n\na:focus {\n  --pf-c-jump-links__link-text--Color: var(--pf-c-jump-links__link--focus__link-text--Color,\n    var(--pf-global--Color--100, #151515));\n}\n\n:host([active]) {\n  --pf-c-jump-links__link--before--BorderTopWidth: var(--pf-c-jump-links__item--m-current__link--before--BorderTopWidth,\n    var(--pf-global--BorderWidth--lg, 3px));\n  --pf-c-jump-links__link--before--BorderLeftWidth: var(--pf-c-jump-links__item--m-current__link--before--BorderLeftWidth, 0);\n  --pf-c-jump-links__link--before--BorderColor: var(--pf-c-jump-links__item--m-current__link--before--BorderColor,\n    var(--pf-global--primary-color--100, #06c));\n  --pf-c-jump-links__link-text--Color: var(--pf-c-jump-links__item--m-current__link-text--Color,\n    pfvar(--pf-global--Color--100, #151515));\n}\n`;
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
let PfJumpLinksItem = class PfJumpLinksItem extends LitElement {
    constructor() {
        super(...arguments);
        _PfJumpLinksItem_instances.add(this);
        /** Whether this item is active. */
        this.active = false;
        _PfJumpLinksItem_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
    }
    render() {
        return html `
      <a href="${ifDefined(this.href)}"
         @focus="${__classPrivateFieldGet(this, _PfJumpLinksItem_instances, "m", _PfJumpLinksItem_onFocus)}"
         @click="${__classPrivateFieldGet(this, _PfJumpLinksItem_instances, "m", _PfJumpLinksItem_onClick)}">
        <slot></slot>
      </a>
      <slot name="subsection"></slot>
    `;
    }
    activeChanged() {
        __classPrivateFieldGet(this, _PfJumpLinksItem_internals, "f").ariaCurrent = this.active ? 'location' : null;
    }
};
_PfJumpLinksItem_internals = new WeakMap();
_PfJumpLinksItem_instances = new WeakSet();
_PfJumpLinksItem_onClick = function _PfJumpLinksItem_onClick() {
    this.dispatchEvent(new Event('select', { bubbles: true }));
};
_PfJumpLinksItem_onFocus = function _PfJumpLinksItem_onFocus() {
    this.dispatchEvent(new Event('focus', { bubbles: true }));
};
PfJumpLinksItem.styles = [style];
PfJumpLinksItem.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfJumpLinksItem.version = "4.1.0";
__decorate([
    property({ type: Boolean, reflect: true })
], PfJumpLinksItem.prototype, "active", void 0);
__decorate([
    property({ reflect: true })
], PfJumpLinksItem.prototype, "href", void 0);
__decorate([
    observes('active')
], PfJumpLinksItem.prototype, "activeChanged", null);
PfJumpLinksItem = __decorate([
    customElement('pf-jump-links-item')
], PfJumpLinksItem);
export { PfJumpLinksItem };
//# sourceMappingURL=pf-jump-links-item.js.map