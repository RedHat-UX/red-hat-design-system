var _RhJumpLink_instances, _RhJumpLink_internals, _RhJumpLink_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { consume } from '@lit/context';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative;width:100%;--_item-padding-block:var(--rh-jump-link-item-padding-block,0);--_item-padding-inline:var(--rh-jump-link-item-padding-inline,0);--_link-padding-block:var(--rh-jump-link-link-padding-block);--_link-padding-inline:var(--rh-jump-link-link-padding-inline);border-inline-start:var(--rh-jump-link-border,none)}a{color:var(--rh-color-interactive-secondary-default);text-decoration:none;display:inline-block;box-sizing:border-box;white-space:normal;overflow-wrap:break-word;position:relative}a:focus{color:var(--rh-color-text-primary)}a:focus-visible{outline:none}a:focus-visible:after{content:"";display:block;position:absolute;inset:0;border:2px solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}a:focus-visible,a:hover{color:var(--rh-color-text-primary);background-color:var(--rh-jump-link-hover-background-color,#0000);border-radius:var(--rh-jump-link-hover-border-radius,0)}#container:before{content:"";display:block;position:absolute;inset:0;border-radius:var(--rh-jump-link-indicator-border-radius,0);background-color:initial}#container.vertical{padding-block:var(--_item-padding-block);padding-inline:var(--_item-padding-inline);border-inline-start:var(--rh-jump-link-link-border,var(--_bdr))}#container.vertical a{max-width:var(--rh-jump-link-max-width,calc(var(--rh-length-md, 8px)*40));padding-block:var(--_link-padding-block,var(--rh-space-md,8px));padding-inline:var(--_link-padding-inline,calc(var(--rh-space-lg, 16px) + var(--_padding-inline-start, 0px)) var(--rh-space-lg,16px))}#container.horizontal{padding-block:var(--_item-padding-block);padding-inline:var(--_item-padding-inline)}#container.horizontal a{white-space:nowrap;padding-block:var(--_link-padding-block,var(--rh-space-lg,16px));padding-inline:var(--_link-padding-inline,var(--rh-space-lg,16px))}#container.active{color:var(--rh-color-text-primary);--_bdr-c:var(--rh-color-brand-red)}.vertical:is(#container.active:has(a),#container:has(a:focus-visible,a:hover)):before{width:var(--rh-border-width-lg,3px);height:100%;background-color:var(--_bdr-c,var(--rh-color-border-status-neutral))}.horizontal:is(#container.active:has(a),#container:has(a:focus-visible,a:hover)):before{height:var(--rh-border-width-lg,3px);width:auto;background-color:var(--_bdr-c,var(--rh-color-border-status-neutral))}:host([slot]) #container.vertical{border-inline-start:none}`;
import { rhJumpLinksOrientationContext } from './context.js';
/**
 * An individual navigation link within `<rh-jump-links>` that scrolls the
 * page to a target section. Renders as `role="listitem"` with an internal
 * anchor. When active, sets `aria-current="location"` for screen readers.
 * Tab moves focus to the link; Enter or click scrolls to the `href`
 * target. Must be a child of `<rh-jump-links>` or `<rh-jump-links-list>`.
 *
 * @summary A single jump link targeting a page section
 */
let RhJumpLink = class RhJumpLink extends LitElement {
    constructor() {
        super(...arguments);
        _RhJumpLink_instances.add(this);
        /** Whether this link represents the currently visible section. When true, a bold border and `aria-current="location"` are applied. Defaults to false. */
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
      <div id="container" class="${classMap({ active, [orientation]: true })}">
        <a aria-current="${ifDefined(this.active ? 'location' : undefined)}"
          href="${ifDefined(this.href)}"
          @click="${__classPrivateFieldGet(this, _RhJumpLink_instances, "m", _RhJumpLink_onClick)}">
          <!-- summary: link label text (default slot)
              description: |
                Text content for this jump link. Serves as the accessible
                name for the internal anchor element, so it should match
                or closely reflect the target section heading (per WCAG
                2.4.6 Headings and Labels). Keep text concise. -->
          <slot></slot>
        </a>
      </div>
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