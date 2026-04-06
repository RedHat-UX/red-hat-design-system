var _RhJumpLinksList_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { rhJumpLinksOrientationContext } from './context.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative}#list{padding-inline-end:var(--rh-space-lg,16px)}#container{--_bdr:var(--rh-length-4xs,1px) solid var(--rh-color-border-subtle)}#container.vertical{border-inline-start:var(--_bdr)}#container.vertical ::slotted(rh-jump-link[slot]),#container.vertical ::slotted(rh-jump-link[slot][active]){--_bdr-c:none;margin-left:-1px}#container.vertical ::slotted(rh-jump-link:not([slot])){--_padding-inline-start:var(--rh-space-lg,16px);--_bdr:none;--_active_bdr:none}#container.horizontal{display:contents;border-block-start:var(--_bdr)}#container.vertical.active{--_active_bdr:none}#container.active:before{content:"";display:block;position:absolute}#container.active.vertical:before{border-inline-start:var(--rh-length-xs,4px) solid var(--rh-color-brand-red);height:100%;inset-inline-start:0;inset-block:0}#container.active.horizontal:before{border-block-start:var(--rh-length-xs,4px) solid var(--rh-color-brand-red);width:100%;inset-block-start:0;inset-inline:0}`;
/**
 * Provides a nested, expandable group for organizing related
 * `<rh-jump-link>` elements within `<rh-jump-links>`. Put the link that
 * labels this group in `slot="parent"`. In vertical orientation, child
 * links indent beneath the parent; in horizontal orientation the
 * group is hidden. Sets `aria-current="location"` and
 * `role="listitem"` on itself for screen readers. Avoid deeply
 * nesting multiple levels.
 *
 * @summary Nested group of jump links with an expandable parent
 */
let RhJumpLinksList = class RhJumpLinksList extends LitElement {
    constructor() {
        super(...arguments);
        _RhJumpLinksList_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        /** Whether any child link in this group is the active section. When true, the parent border highlights and child list expands (vertical only). Defaults to false. */
        this.active = false;
    }
    activeChanged() {
        __classPrivateFieldGet(this, _RhJumpLinksList_internals, "f").ariaCurrent = this.active ? 'location' : null;
    }
    render() {
        const { active, orientation = 'vertical' } = this;
        return html `
      <div id="container" class="${classMap({ active, [orientation]: true })}">
        <!-- summary: parent link for this nested group (parent slot)
             description: |
               A single \`<rh-jump-link>\` that labels this group. When clicked,
               the nested list expands in vertical orientation. Screen readers
               announce it as a list item within the navigation landmark. -->
        <slot name="parent"></slot>
        <div id="list"
             ?hidden="${this.orientation === 'horizontal' || !active}"
             role="list">
          <!-- summary: child jump links (default slot)
               description: |
                 One or more \`<rh-jump-link>\` children that appear nested under
                 the parent link. In vertical mode, these indent with additional
                 padding. Hidden in horizontal orientation. Each child has
                 \`role="listitem"\` for screen readers. -->
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