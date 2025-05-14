var _RhNavigationPrimaryItem_instances, _RhNavigationPrimaryItem_highlight, _RhNavigationPrimaryItem_internals, _RhNavigationPrimaryItem_hydrated, _RhNavigationPrimaryItem_detailsToggle;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { consume } from '@lit/context';
import { context } from './context.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import './rh-navigation-primary-item-menu.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_gradient:linear-gradient(to right,var(--rh-color-brand-red-light,#f56e6e),var(--rh-color-purple-40,#876fd4),var(--rh-color-purple-60,#3d2785));--_active-item-color:var(--_gradient);display:block;block-size:100%;justify-items:center;align-content:center}:host([hide-at]){display:none}@container (min-width: 320px){:host([hide-at=xs]){display:block}}@container (min-width: 567px){:host([hide-at=sm]){display:block}}@container (min-width: 768px){:host([hide-at=md]){display:block}}@container (min-width: 992px){:host([hide-at=lg]){display:block}}@container (min-width: 1200px){:host([hide-at=xl]){display:block}}:host(:is(:focus,:focus-visible)){outline:none;outline-style:none}#container{--_background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f));--_box-shadow-color:light-dark(#15151533,#0009);display:block}#container,#container details{block-size:100%;inline-size:100%;justify-items:center;align-content:center}#container details summary{--rh-icon-size:18px;--rh-avatar-size:var(--rh-size-icon-02,24px);display:flex;list-style:none;gap:var(--rh-space-md,8px)}#container details summary::-webkit-details-marker,#container details summary::marker{display:none}#container details summary ::slotted(rh-icon){margin-block:calc(var(--rh-space-sm, 6px)/2)}#container details summary rh-icon{aspect-ratio:unset}#container details summary rh-icon[icon=caret-down]{--rh-icon-size:10px;color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-icon-subtle));transition:rotate .2s}#container details #details-content{inline-size:100%}#container details[open]::details-content{display:contents}#container details[open]::details-content>*{box-sizing:border-box}@container (min-width: 1200px){#container details[open]{border-block-start-color:var(--rh-color-accent-brand)}}#container details[open] summary rh-icon[icon=caret-down]{rotate:180deg}@container (min-width: 1200px){#container.hamburger:not(.compact){border-block-end:4px solid #0000}#container.hamburger:not(.compact):hover{border-block-end-color:var(--rh-color-border-subtle)}#container.hamburger:not(.compact):is(:active,:focus-within,:has(details[open])){border-image:var(--_active-item-color) 1}}#container.dropdown.hamburger details summary{list-style:none;color:var(--rh-color-text-primary)!important;text-decoration:none!important;text-align:center;text-wrap:nowrap;place-items:center;inline-size:100%;block-size:100%;padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px);cursor:pointer}#container.dropdown.hamburger details summary:focus-visible,#container.dropdown.hamburger details summary:hover:focus-visible{outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}#container.dropdown.hamburger details[open]{border-inline-start:var(--rh-border-width-lg,3px) solid var(--rh-color-accent-brand);border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#container.dropdown.hamburger details[open] summary rh-icon[icon=caret-down]{rotate:180deg}@container (min-width: 1200px){#container.dropdown.hamburger:not(.compact) details{border-inline:unset}#container.dropdown.hamburger:not(.compact) details summary{block-size:calc(100% + 4px);padding:0 var(--rh-space-lg,16px)}#container.dropdown.hamburger:not(.compact) details #details-content{position:absolute;z-index:-1;background-color:var(--rh-color-surface);box-shadow:0 2px 4px 0 var(--_box-shadow-color);inset-block-start:100%;inset-inline-start:0;inline-size:100%}}#container.dropdown.standalone details summary{position:relative;block-size:max-content;inline-size:max-content;align-items:center;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-pill,64px);font-size:var(--rh-font-size-body-text-sm,.875rem);cursor:pointer}#container.dropdown.standalone details summary:before{--_mask:conic-gradient(#0000 0 0);content:"";position:absolute;inset:-1px;border-radius:inherit;padding:var(--rh-border-width-sm,1px);background:var(--_active-item-color);mask:var(--_mask) content-box exclude,var(--_mask);z-index:1}#container.dropdown.standalone details summary:active:before{padding:var(--rh-border-width-md,2px)}#container.dropdown.standalone details summary:is(:hover,:focus-visible){background-color:var(--_background-color)}#container.dropdown.standalone details summary:is(:hover,:focus-visible):before{--_mask:conic-gradient(#000 0 0)}#container.dropdown.standalone details summary:is(:focus-visible,:hover:focus-visible,:active){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:3px;border-radius:var(--rh-border-radius-pill,64px)}#container.dropdown.standalone details summary #summary-text{clip-path:inset(50%);overflow:hidden;position:absolute}@container (min-width: 1680px){#container.dropdown.standalone details summary #summary-text{clip-path:none;overflow:none;position:static}}#container.dropdown.standalone details #details-content{position:absolute;z-index:-1;background-color:var(--rh-color-surface);box-shadow:0 2px 4px 0 var(--_box-shadow-color);inset-block-start:100%;inset-inline-end:0;inline-size:100%;max-block-size:calc(100dvh - var(--_navbar-height));overflow-y:auto}@container (min-width: 1200px){#container.dropdown.standalone details #details-content{inline-size:fit-content;border-end-end-radius:calc(var(--rh-border-radius-default, 3px)*2);border-end-start-radius:calc(var(--rh-border-radius-default, 3px)*2)}}#container.dropdown.standalone details[open] summary{background-color:var(--_background-color)}#container.dropdown.standalone details[open] summary:before{--_mask:conic-gradient(#000 0 0);padding:var(--rh-border-width-md,2px)}#container.dropdown.standalone details[open] summary rh-icon[icon=caret-down]{rotate:180deg}#container.link{display:inline-block;block-size:fit-content;border-block-start:none}#container.link ::slotted(a){color:var(--rh-color-text-primary)!important}#container.link ::slotted(:is(a:hover,a:focus-visible,:active)){text-underline-offset:4px!important;text-decoration-color:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-40,#a3a3a3))!important;text-decoration-line:underline!important;text-decoration-style:dashed!important;text-decoration-skip-ink:auto!important;color:var(--rh-color-interactive-primary-hover)!important}#container.link.hamburger{block-size:100%}#container.link.hamburger:is(:hover,:focus-visible,:hover:focus-visible,:active){border-block-end-color:#0000}#container.link.hamburger ::slotted(a){display:flex;align-items:center;block-size:calc(100% + 4px);font-size:var(--rh-font-size-body-text-md,1rem);padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px)}#container.link.hamburger ::slotted(a:is(:focus-visible,:hover:focus-visible,:active)){outline-offset:0;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}@container (min-width: 1200px){#container.link.hamburger ::slotted(a){padding:0 var(--rh-space-lg,16px)}#container.link.hamburger:is(:active,:focus-within,:has(details[open])){border-image:unset;border-block-end-color:#0000}}#container.link.standalone{padding-inline:var(--_padding-inline-start,var(--rh-space-md,8px)) var(--_padding-inline-end,var(--rh-space-md,8px))}#container.link.standalone ::slotted(a){font-size:var(--rh-font-size-body-text-sm,.875rem)!important;display:inline-flex;block-size:auto;align-items:center;padding:var(--rh-space-md,8px)!important}#container.link.standalone ::slotted(a:is(:focus-visible,:hover:focus-visible,:active)){outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}`;
let RhNavigationPrimaryItem = class RhNavigationPrimaryItem extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationPrimaryItem_instances.add(this);
        _RhNavigationPrimaryItem_highlight.set(this, false);
        // eslint-disable-next-line no-unused-private-class-members
        _RhNavigationPrimaryItem_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
        _RhNavigationPrimaryItem_hydrated.set(this, false);
        this.open = false;
        /* Variants 'link' | 'dropdown', link is the default if no variant is given */
        this.variant = 'link';
        /**
         * Hides the element at various container query based breakpoints.
         * Breakpoints available 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
         */
        this.hideAt = undefined;
    }
    firstUpdated() {
        // ensure we update initially on client hydration
        const _isHydrated = isServer && !this.hasUpdated;
        if (!_isHydrated) {
            __classPrivateFieldSet(this, _RhNavigationPrimaryItem_hydrated, true, "f");
            const nav = this.closest('rh-navigation-primary');
            if (!nav) {
                this.compact = true; /* default to true if nav returns false */
            }
            else {
                this.compact = nav.offsetWidth < 1200;
            }
            /**
             * SSR Adds the role, but then removes when ElementInternals is hydrated
             * However, axe-dev tools then complains as it doesn't handle Internals correctly
             * So.... lets readd it for brevity, then when axe decides to fix their stuff,
             * we can remove at a later date.
             */
            this.role = 'listitem';
        }
    }
    render() {
        const { variant = '' } = this;
        const compact = this.compact ?? true;
        const hamburger = (!this.getAttribute('slot'));
        return html `
      <div id="container" class="${classMap({
            [variant]: true,
            highlight: !!__classPrivateFieldGet(this, _RhNavigationPrimaryItem_highlight, "f"),
            compact,
            standalone: !hamburger,
            hamburger: hamburger,
            dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimaryItem_hydrated, "f"),
        })}">${this.variant === 'dropdown' ? html `
        <details @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimaryItem_instances, "m", _RhNavigationPrimaryItem_detailsToggle)}">
          <summary>${hamburger ? '' : html `
            <slot name="icon">${!this.icon ? '' : html `
              <rh-icon icon="${ifDefined(this.icon)}" set="${ifDefined(this.iconSet)}"></rh-icon>`}
            </slot>`}
            <div id="summary-text"><slot name="summary">${this.summary}</slot></div>
            <rh-icon icon="caret-down" set="microns"></rh-icon>
          </summary>
          <rh-navigation-primary-item-menu id="details-content">
            <slot></slot>
          </rh-navigation-primary-item-menu>
        </details>` : html `
        <slot></slot>`}
      </div>
    `;
    }
    hide() {
        this._details.open = false;
    }
    show() {
        this._details.open = true;
    }
};
_RhNavigationPrimaryItem_highlight = new WeakMap();
_RhNavigationPrimaryItem_internals = new WeakMap();
_RhNavigationPrimaryItem_hydrated = new WeakMap();
_RhNavigationPrimaryItem_instances = new WeakSet();
_RhNavigationPrimaryItem_detailsToggle = function _RhNavigationPrimaryItem_detailsToggle() {
    this.open = this._details.open;
    this.dispatchEvent(new Event('toggle', { bubbles: true }));
};
RhNavigationPrimaryItem.styles = [styles];
__decorate([
    query('details')
], RhNavigationPrimaryItem.prototype, "_details", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhNavigationPrimaryItem.prototype, "open", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "summary", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, attribute: 'hide-at' })
], RhNavigationPrimaryItem.prototype, "hideAt", void 0);
__decorate([
    property()
], RhNavigationPrimaryItem.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhNavigationPrimaryItem.prototype, "iconSet", void 0);
__decorate([
    consume({ context, subscribe: true }),
    state()
], RhNavigationPrimaryItem.prototype, "compact", void 0);
RhNavigationPrimaryItem = __decorate([
    themable,
    customElement('rh-navigation-primary-item')
], RhNavigationPrimaryItem);
export { RhNavigationPrimaryItem };
//# sourceMappingURL=rh-navigation-primary-item.js.map