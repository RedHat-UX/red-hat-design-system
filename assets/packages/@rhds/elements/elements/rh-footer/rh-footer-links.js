var _RhFooterLinks_instances, _RhFooterLinks_mo, _RhFooterLinks_appliedAriaLabel, _RhFooterLinks_appliedLabelledBy, _RhFooterLinks_syncListLabelledBy, _RhFooterLinks_syncHostAriaLabel;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host{display:flex;flex-direction:column;gap:.625em}[part]{display:contents}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500;font-size:.875em;margin-top:0;margin-bottom:0}:host([header-hidden]) .header ::slotted(*){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;
/**
 * Accessible link group for the footer. Auto-wires `aria-labelledby`
 * between the heading and `<ul>` for screen readers. Must contain a
 * `<ul>`; should include a heading in the `header` slot. Tab moves
 * focus through each link. On mobile, collapses into an accordion
 * panel.
 *
 * @summary Accessible link group with heading for footer navigation
 */
let RhFooterLinks = class RhFooterLinks extends LitElement {
    constructor() {
        super(...arguments);
        _RhFooterLinks_instances.add(this);
        /**
         * Visually hides the header slot content while preserving it for screen
         * readers. The `aria-labelledby` association remains active regardless
         * of this setting. Use when the heading should be accessible but not
         * visible (e.g. social links group). Defaults to false.
         */
        this.headerHidden = false;
        _RhFooterLinks_mo.set(this, new MutationObserver(() => this.updateAccessibility()));
        /**
         * Last host `aria-label` this component wrote from `accessible-label`.
         * Used so we remove only our own value and must not strip an author-set
         * native `aria-label`.
         */
        _RhFooterLinks_appliedAriaLabel.set(this, void 0);
        /**
         * Last list `aria-labelledby` id this component wrote from a slotted
         * header. Used so we remove only our own association and must not strip
         * an author-set native `aria-labelledby`.
         */
        _RhFooterLinks_appliedLabelledBy.set(this, void 0);
        this.slots = new SlotController(this, 'header');
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            this.updateAccessibility();
        }
        __classPrivateFieldGet(this, _RhFooterLinks_mo, "f").observe(this, { childList: true });
    }
    updateAccessibility() {
        // ensure we've rendered to our shadowroot
        const header = this.querySelector('[slot="header"]');
        const ul = this.querySelector('ul');
        __classPrivateFieldGet(this, _RhFooterLinks_instances, "m", _RhFooterLinks_syncListLabelledBy).call(this, header, ul);
        __classPrivateFieldGet(this, _RhFooterLinks_instances, "m", _RhFooterLinks_syncHostAriaLabel).call(this, header);
    }
    updated() {
        // Re-apply when accessible-label or slotted header content changes.
        this.updateAccessibility();
    }
    render() {
        return html `
      <div part="header" class="header">
        <!-- summary: link group heading
             description: |
               Expects a block elements heading (h2-h5) labeling this link group.
               Automatically linked to the \`<ul>\` via \`aria-labelledby\` for screen
               reader users. Visually hidden when \`header-hidden\` attribute is set. -->
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <!-- summary: accordion panel content
             description: |
               Expects block elements. Alternative content slot used when links are
               rendered inside an accordion panel on mobile viewports. Screen readers
               navigate panel content after the accordion header is expanded. -->
        <slot name="panel"></slot>
        <!-- summary: link list
             description: |
               Expects block elements: a \`<ul>\` of navigation links. Each link is
               focusable via Tab. The list should have \`aria-labelledby\` pointing
               to the header (auto-wired by the component). -->
        <slot></slot>
      </div>
    `;
    }
};
_RhFooterLinks_mo = new WeakMap();
_RhFooterLinks_appliedAriaLabel = new WeakMap();
_RhFooterLinks_appliedLabelledBy = new WeakMap();
_RhFooterLinks_instances = new WeakSet();
_RhFooterLinks_syncListLabelledBy = function _RhFooterLinks_syncListLabelledBy(header, ul) {
    // Case 1: Header and list exist:
    // Wire aria-labelledby and remember the id we wrote.
    if (header && ul) {
        header.id || (header.id = getRandomId('rh-footer-links'));
        ul.setAttribute('aria-labelledby', header.id);
        __classPrivateFieldSet(this, _RhFooterLinks_appliedLabelledBy, header.id, "f");
        return;
    }
    // Case 2: Header gone:
    // Drop our generated labelledby if it is still on this list.
    // Leave an author-set native labelledby alone.
    if (ul && __classPrivateFieldGet(this, _RhFooterLinks_appliedLabelledBy, "f")
        && ul.getAttribute('aria-labelledby') === __classPrivateFieldGet(this, _RhFooterLinks_appliedLabelledBy, "f")) {
        ul.removeAttribute('aria-labelledby');
    }
    __classPrivateFieldSet(this, _RhFooterLinks_appliedLabelledBy, undefined, "f");
};
_RhFooterLinks_syncHostAriaLabel = function _RhFooterLinks_syncHostAriaLabel(header) {
    // Case 1: accessible-label exists but no header:
    if (!header && this.accessibleLabel) {
        this.setAttribute('aria-label', this.accessibleLabel);
        __classPrivateFieldSet(this, _RhFooterLinks_appliedAriaLabel, this.accessibleLabel, "f");
        return;
    }
    // Case 2: Header present or there is no accessible-label.
    // Drop our generated name if it is still the current host aria-label.
    // Leave an author-set native label alone.
    if (this.getAttribute('aria-label') === __classPrivateFieldGet(this, _RhFooterLinks_appliedAriaLabel, "f")) {
        this.removeAttribute('aria-label');
    }
    // Forget the recorded value so a later coincidental match is not ours.
    __classPrivateFieldSet(this, _RhFooterLinks_appliedAriaLabel, undefined, "f");
};
RhFooterLinks.styles = style;
__decorate([
    property({
        type: Boolean,
        attribute: 'header-hidden',
        reflect: true,
    })
], RhFooterLinks.prototype, "headerHidden", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhFooterLinks.prototype, "accessibleLabel", void 0);
RhFooterLinks = __decorate([
    customElement('rh-footer-links')
], RhFooterLinks);
export { RhFooterLinks };
//# sourceMappingURL=rh-footer-links.js.map