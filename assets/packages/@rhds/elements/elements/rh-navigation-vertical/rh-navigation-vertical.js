var _RhNavigationVertical_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { query } from 'lit/decorators/query.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
import './rh-navigation-vertical-list.js';
import { css } from "lit";
const styles = css `:host{display:block;background:light-dark(var(--rh-color-surface-lightest),var(--rh-color-surface-darker,#1f1f1f))}.visually-hidden{position:absolute!important;block-size:1px;inline-size:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap;border:0;padding:0!important;margin:-1px!important}#container{display:flex;flex-direction:column;gap:var(--rh-space-xs,4px);line-height:var(--rh-line-height-body-text,1.5)}::slotted(rh-navigation-link){--_navigation-link-display:flex;--_navigation-link-align-items:center;--_navigation-link-inline-size:100%;--_navigation-link-padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);--_navigation-link-font-size:var(--rh-font-size-body-text-md,1rem);--_navigation-link-text-decoration:none;--_navigation-link-text-decoration-style:none;--_navigation-link-text-decoration-line:none;--_navigation-link-color:var(--rh-color-text-primary);--_navigation-link-color-hover:var(--rh-color-text-primary);--_navigation-link-hover-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838));--_navigation-link-container-display:flex;--_navigation-link-container-align-items:center;--_navigation-link-container-position:relative;--_navigation-link-container-inline-size:100%}::slotted(rh-navigation-link:hover){--_navigation-link-before-border-inline-start-width:var(--rh-border-width-lg,3px);--_navigation-link-before-border-inline-start-color:var(--rh-color-border-subtle)}::slotted(rh-navigation-link:active){--_navigation-link-before-border-inline-start-width:var(--rh-border-width-lg,3px);--_navigation-link-before-border-inline-start-color:var(--rh-color-brand-red)}::slotted(rh-navigation-link[current-page]){--_navigation-link-background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-dark,#383838));--_navigation-link-before-border-inline-start-width:var(--rh-border-width-lg,3px);--_navigation-link-before-border-inline-start-color:var(--rh-color-brand-red)}`;
/**
 * A vertical navigation list of top-level and grouped navigation items, typically used in a side navigation pattern.
 * @summary Vertical navigation
 * @alias Navigation (vertical)
 */
let RhNavigationVertical = class RhNavigationVertical extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationVertical_internals.set(this, InternalsController.of(this, { role: 'navigation' }));
        /**
         * The accessible-label attribute labels the navigation using a visually hidden heading.
         * Defaults to 'Navigation'. This label should be changed if other navigation elements
         * are present or when translations are needed.
         */
        this.accessibleLabel = 'Navigation';
    }
    firstUpdated() {
        // ensure we update initially on client hydration
        if (!isServer) {
            if (this._title) {
                __classPrivateFieldGet(this, _RhNavigationVertical_internals, "f").ariaLabelledByElements = [this._title];
            }
        }
    }
    render() {
        return html `
      <h2 class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" role="list">
          <!--
            Use this slot for \`<rh-navigation-link>\` elements to provide a list of navigation links  
            and \`<rh-navigation-vertical-list>\` when providing a grouped list of navigation links. 
          -->
        <slot></slot>
      </div>
    `;
    }
};
_RhNavigationVertical_internals = new WeakMap();
RhNavigationVertical.styles = [styles];
__decorate([
    query('#title')
], RhNavigationVertical.prototype, "_title", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhNavigationVertical.prototype, "accessibleLabel", void 0);
RhNavigationVertical = __decorate([
    customElement('rh-navigation-vertical'),
    themable
], RhNavigationVertical);
export { RhNavigationVertical };
//# sourceMappingURL=rh-navigation-vertical.js.map