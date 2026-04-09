var _RhNavigationPrimaryItemMenu_hydrated;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { css } from "lit";
const styles = css `:host{display:block}#container{color:var(--rh-color-text-primary);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));padding-block:var(--rh-space-2xl,32px);padding-inline:var(--rh-space-xl,24px)}@container (min-width: 1200px){#container:not(.compact){margin:0 auto;max-width:1440px;padding:var(--rh-space-3xl,48px) var(--rh-space-2xl,32px)}}`;
/**
 * A navigation menu provides a responsive content container for navigation
 * item dropdowns. This element must be a child of `rh-navigation-primary-item`
 * and should not be used independently. Slotted content should use semantic
 * heading and list elements for screen reader navigation. Focus is managed
 * within this container; Tab moves through focusable children and Escape
 * closes the parent dropdown.
 *
 * @summary Content container for navigation item dropdowns
 *
 */
let RhNavigationPrimaryItemMenu = class RhNavigationPrimaryItemMenu extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationPrimaryItemMenu_hydrated.set(this, false);
    }
    async firstUpdated() {
        // ensure we update initially on client hydration
        const _isHydrated = isServer && !this.hasUpdated;
        if (!_isHydrated) {
            __classPrivateFieldSet(this, _RhNavigationPrimaryItemMenu_hydrated, true, "f");
            const root = this.getRootNode();
            if (root === document || !(root instanceof ShadowRoot)) {
                return;
            }
            const nav = root.host.closest('rh-navigation-primary');
            await nav?.updateComplete;
            if (!nav) {
                this.compact = true; /* default to true if nav returns false */
            }
            else {
                this.compact = nav.offsetWidth < 1200;
            }
            this.requestUpdate();
        }
    }
    render() {
        const compact = !__classPrivateFieldGet(this, _RhNavigationPrimaryItemMenu_hydrated, "f") ? true : this.compact ?? true;
        return html `
      <div id="container" class="${classMap({ compact: compact, dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimaryItemMenu_hydrated, "f") })}">
        <!--
          Use this slot for navigation item dropdown content, typically links
          and nested menus. Content layout adapts based on the primary
          navigation's compact state. Slotted content should use semantic
          heading and list elements for screen reader navigation. Avoid
          placing focusable elements outside of this container, as focus
          management relies on this boundary to trap and restore focus
          when the dropdown closes.
        -->
        <slot></slot>
      </div>
    `;
    }
};
_RhNavigationPrimaryItemMenu_hydrated = new WeakMap();
RhNavigationPrimaryItemMenu.styles = [styles];
__decorate([
    consume({ context, subscribe: true }),
    state()
], RhNavigationPrimaryItemMenu.prototype, "compact", void 0);
RhNavigationPrimaryItemMenu = __decorate([
    customElement('rh-navigation-primary-item-menu')
], RhNavigationPrimaryItemMenu);
export { RhNavigationPrimaryItemMenu };
//# sourceMappingURL=rh-navigation-primary-item-menu.js.map