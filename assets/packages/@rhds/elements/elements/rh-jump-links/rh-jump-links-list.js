var _RhJumpLinksList_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { rhJumpLinksOrientationContext } from './context.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative}#list{padding-inline-end:var(--rh-space-lg,16px)}#container{--_bdr:var(--rh-length-4xs,1px) solid var(--rh-color-border-subtle)}#container.vertical{border-inline-start:var(--_bdr);--_active_bdr:none}#container.vertical ::slotted(rh-jump-link[slot]),#container.vertical ::slotted(rh-jump-link[slot][active]){--_bdr-c:none}#container.vertical ::slotted(rh-jump-link:not([slot])){--_padding-inline-start:var(--rh-space-lg,16px);--_bdr:none}#container.horizontal{display:contents;border-block-start:var(--_bdr)}#container.active:before{content:"";display:block;position:absolute}#container.active.vertical:before{border-inline-start:var(--rh-length-xs,4px) solid var(--rh-color-brand-red);height:100%;inset-inline-start:0;inset-block:0}#container.active.horizontal:before{border-block-start:var(--rh-length-xs,4px) solid var(--rh-color-brand-red);width:100%;inset-block-start:0;inset-inline:0}`;
/**
 */
let RhJumpLinksList = class RhJumpLinksList extends LitElement {
    constructor() {
        super(...arguments);
        _RhJumpLinksList_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        /** Whether this item is active. */
        this.active = false;
    }
    activeChanged() {
        __classPrivateFieldGet(this, _RhJumpLinksList_internals, "f").ariaCurrent = this.active ? 'location' : null;
    }
    render() {
        const { active, orientation = 'vertical' } = this;
        return html `
      <div id="container" class="${classMap({ active, [orientation]: true })}">
        <slot name="parent"></slot>
        <div id="list"
             ?hidden="${this.orientation === 'horizontal' || !active}"
             role="list">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
_RhJumpLinksList_internals = new WeakMap();
RhJumpLinksList.styles = [style];
__decorate([
    consume({ context: rhJumpLinksOrientationContext, subscribe: true }),
    state()
], RhJumpLinksList.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhJumpLinksList.prototype, "active", void 0);
__decorate([
    observes('active')
], RhJumpLinksList.prototype, "activeChanged", null);
RhJumpLinksList = __decorate([
    customElement('rh-jump-links-list'),
    themable
], RhJumpLinksList);
export { RhJumpLinksList };
//# sourceMappingURL=rh-jump-links-list.js.map