var _RhJumpLink_instances, _RhJumpLink_internals, _RhJumpLink_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative;width:max-content}a{color:var(--rh-color-interactive-secondary-default);text-decoration:none;display:inline-block;box-sizing:border-box}a:before{content:"";display:block;position:absolute}a.vertical{padding-block:var(--rh-space-md,8px);padding-inline:calc(var(--rh-space-lg, 16px) + var(--_padding-inline-start, 0px)) var(--rh-space-lg,16px);border-inline-start:var(--_bdr)}a.horizontal{padding:var(--rh-space-lg,16px);white-space:nowrap}a:hover{color:var(--rh-color-interactive-secondary-hover)}a:focus{color:var(--rh-color-interactive-secondary-focus)}a:focus-visible{outline:none}a:focus-visible:after{content:"";display:block;position:absolute;inset:0;border:2px solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}a:focus-visible,a:hover{--_bdr-c:var(--rh-color-border-status-neutral)}a.active{color:var(--rh-color-text-primary);--_bdr-c:var(--rh-color-brand-red)}a.active.vertical:before,a.vertical:focus-visible:before,a.vertical:hover:before{height:100%;inset-inline-start:0;inset-block:0;border-inline-start:var(--_active_bdr,var(--rh-length-xs,4px) solid var(--_bdr-c,var(--rh-color-border-status-neutral)))}a.active.horizontal:before,a.horizontal:focus-visible:before,a.horizontal:hover:before{width:100%;inset-block-start:0;inset-inline:0;border-block-start:var(--rh-length-xs,4px) solid var(--_bdr-c,var(--rh-color-border-status-neutral))}:host([slot]) a.vertical{border-inline-start:none}`;
import { rhJumpLinksOrientationContext } from './context.js';
/**
 */
let RhJumpLink = class RhJumpLink extends LitElement {
    constructor() {
        super(...arguments);
        _RhJumpLink_instances.add(this);
        /** Whether this item is active. */
        this.active = false;
        _RhJumpLink_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'listitem';
    }
    render() {
        const { active, orientation = 'vertical' } = this;
        return html `
      <a class="${classMap({ active, [orientation]: true })}"
         aria-current="${ifDefined(this.active ? 'location' : undefined)}"
         href="${ifDefined(this.href)}"
         @click="${__classPrivateFieldGet(this, _RhJumpLink_instances, "m", _RhJumpLink_onClick)}">
        <slot></slot>
      </a>
    `;
    }
    activeChanged() {
        __classPrivateFieldGet(this, _RhJumpLink_internals, "f").ariaCurrent = this.active ? 'location' : null;
    }
};
_RhJumpLink_internals = new WeakMap();
_RhJumpLink_instances = new WeakSet();
_RhJumpLink_onClick = function _RhJumpLink_onClick() {
    this.dispatchEvent(new Event('select', { bubbles: true }));
};
RhJumpLink.styles = [style];
RhJumpLink.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    consume({ context: rhJumpLinksOrientationContext, subscribe: true }),
    state()
], RhJumpLink.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhJumpLink.prototype, "active", void 0);
__decorate([
    property({ reflect: true })
], RhJumpLink.prototype, "href", void 0);
__decorate([
    observes('active')
], RhJumpLink.prototype, "activeChanged", null);
RhJumpLink = __decorate([
    customElement('rh-jump-link'),
    themable
], RhJumpLink);
export { RhJumpLink };
//# sourceMappingURL=rh-jump-link.js.map