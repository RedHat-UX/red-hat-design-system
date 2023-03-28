var _PfJumpLinksItem_instances, _PfJumpLinksItem_internals, _PfJumpLinksItem_onClick, _PfJumpLinksItem_onFocus;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const style = css `:host{display:block}#container{display:contents}slot:not([name]){display:flex;flex-direction:column;row-gap:var(--pf-global--spacer--md,1rem)}a{position:relative;display:flex;cursor:pointer;flex:1;padding-block-start:var(--pf-c-jump-links__link--PaddingTop,var(--pf-global--spacer--md,1rem));padding-inline-end:var(--pf-c-jump-links__link--PaddingRight,var(--pf-global--spacer--md,1rem));padding-block-end:var(--pf-c-jump-links__link--PaddingBottom,var(--pf-global--spacer--md,1rem));padding-inline-start:var(--pf-c-jump-links__link--PaddingLeft,var(--pf-global--spacer--md,1rem));text-decoration:none;outline-offset:var(--pf-c-jump-links__link--OutlineOffset,calc(-1 * var(--pf-global--spacer--sm,0.5rem)));color:var(--pf-c-jump-links__link-text--Color,var(--pf-global--Color--200,#6a6e73))}a::before{position:absolute;inset:0;pointer-events:none;content:"";border-color:var(--pf-c-jump-links__link--before--BorderColor,transparent);border-style:solid;border-width:var(--pf-c-jump-links__link--before--BorderTopWidth,var(--pf-c-jump-links__list--before--BorderTopWidth,var(--pf-global--BorderWidth--sm,1px))) var(--pf-c-jump-links__link--before--BorderRightWidth,0) var(--pf-c-jump-links__link--before--BorderBottomWidth,0) var(--pf-c-jump-links__link--before--BorderLeftWidth,0)}a:hover{--pf-c-jump-links__link-text--Color:var(--pf-c-jump-links__link--hover__link-text--Color,\n    var(--pf-global--Color--100, #151515))}a:focus{--pf-c-jump-links__link-text--Color:var(--pf-c-jump-links__link--focus__link-text--Color,\n    var(--pf-global--Color--100, #151515))}:host([active]){--pf-c-jump-links__link--before--BorderTopWidth:var(--pf-c-jump-links__item--m-current__link--before--BorderTopWidth,\n    var(--pf-global--BorderWidth--lg, 3px));--pf-c-jump-links__link--before--BorderLeftWidth:var(--pf-c-jump-links__item--m-current__link--before--BorderLeftWidth, 0);--pf-c-jump-links__link--before--BorderColor:var(--pf-c-jump-links__item--m-current__link--before--BorderColor,\n    var(--pf-global--primary-color--100, #06c));--pf-c-jump-links__link-text--Color:var(--pf-c-jump-links__item--m-current__link-text--Color,\n    pfvar(--pf-global--Color--100, #151515))}`;
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
/**
 * @cssprop --pf-c-jump-links__link--PaddingTop -- padding around the link
 * @cssprop --pf-c-jump-links__link--PaddingRight
 * @cssprop --pf-c-jump-links__link--PaddingBottom
 * @cssprop --pf-c-jump-links__link--PaddingLeft
 * @cssprop --pf-c-jump-links__link--OutlineOffset
 * @cssprop --pf-c-jump-links__link-text--Color
 */
let PfJumpLinksItem = class PfJumpLinksItem extends LitElement {
    constructor() {
        super(...arguments);
        _PfJumpLinksItem_instances.add(this);
        /** Whether this item is active. */
        this.active = false;
        _PfJumpLinksItem_internals.set(this, new InternalsController(this, {
            role: 'listitem'
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        this.activeChanged();
    }
    render() {
        return html `
      <a href="${ifDefined(this.href)}" @focus="${__classPrivateFieldGet(this, _PfJumpLinksItem_instances, "m", _PfJumpLinksItem_onFocus)}" @click="${__classPrivateFieldGet(this, _PfJumpLinksItem_instances, "m", _PfJumpLinksItem_onClick)}">
        <slot></slot>
      </a>
      <slot name="subsection"></slot>
    `;
    }
    activeChanged() {
        __classPrivateFieldGet(this, _PfJumpLinksItem_internals, "f").ariaCurrent = this.active ? 'location' : null;
    }
};
_PfJumpLinksItem_internals = new WeakMap(), _PfJumpLinksItem_instances = new WeakSet(), _PfJumpLinksItem_onClick = function _PfJumpLinksItem_onClick() {
    this.dispatchEvent(new Event('select', { bubbles: true }));
}, _PfJumpLinksItem_onFocus = function _PfJumpLinksItem_onFocus() {
    this.dispatchEvent(new Event('focus', { bubbles: true }));
};
PfJumpLinksItem.styles = [style];
PfJumpLinksItem.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    observed('activeChanged'),
    property({ type: Boolean, reflect: true })
], PfJumpLinksItem.prototype, "active", void 0);
__decorate([
    property({ reflect: true })
], PfJumpLinksItem.prototype, "href", void 0);
PfJumpLinksItem = __decorate([
    customElement('pf-jump-links-item')
], PfJumpLinksItem);
export { PfJumpLinksItem };
//# sourceMappingURL=pf-jump-links-item.js.map