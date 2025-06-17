var _RhNavigationPrimary_instances, _a, _RhNavigationPrimary_internals, _RhNavigationPrimary_openPrimaryDropdowns, _RhNavigationPrimary_openSecondaryDropdowns, _RhNavigationPrimary_ro, _RhNavigationPrimary_hydrated, _RhNavigationPrimary_slots, _RhNavigationPrimary_upgradeAccessibility, _RhNavigationPrimary_openOverlay, _RhNavigationPrimary_closeOverlay, _RhNavigationPrimary_onOverlayClick, _RhNavigationPrimary_primaryDropdowns, _RhNavigationPrimary_secondaryDropdowns, _RhNavigationPrimary_onDropdownToggle, _RhNavigationPrimary_onKeydown, _RhNavigationPrimary_onKeyup, _RhNavigationPrimary_onFocusout, _RhNavigationPrimary_onTabKeydown, _RhNavigationPrimary_onTabKeyup, _RhNavigationPrimary_closePrimaryDropdowns, _RhNavigationPrimary_closeSecondaryDropdowns, _RhNavigationPrimary_openHamburger, _RhNavigationPrimary_closeHamburger, _RhNavigationPrimary_hamburgerToggle;
var RhNavigationPrimary_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { context } from './context.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhNavigationPrimaryItem } from './rh-navigation-primary-item.js';
import './rh-navigation-primary-overlay.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_gradient:linear-gradient(to right,var(--rh-color-brand-red-light,#f56e6e),var(--rh-color-purple-40,#876fd4),var(--rh-color-purple-60,#3d2785));--_active-item-color:var(--_gradient);--_navbar-height:83px;--_nav-container-z-index:-1;display:block;container:navigation-primary/inline-size;position:relative;z-index:var(--rh-navigation-primary-z-index,102);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important}:host([color-palette^=light]){color-scheme:only light}:host([color-palette^=dark]){color-scheme:only dark}#container{--_box-shadow-color:light-dark(#15151533,#0009);display:block;block-size:var(--_navbar-height);z-index:2}#container,#container #bar{position:relative;inline-size:100%}#container #bar{display:grid;grid-template-areas:"logo hamburger secondary-links";grid-template-columns:auto auto 1fr;grid-template-rows:var(--_navbar-height);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));color:var(--rh-color-text-primary);max-block-size:var(--_navbar-height);box-shadow:0 2px 4px 0 var(--_box-shadow-color);padding-inline:var(--rh-space-lg,16px)}@container navigation-primary (min-width: 576px){#container #bar{padding-inline:var(--rh-space-2xl,32px)}}#container #logo{grid-area:logo;display:flex;flex-direction:column;margin-inline-end:var(--rh-space-lg,16px);border-block-end:none}@container navigation-primary (min-width: 576px){#container #logo{border-block-end-color:#0000}}#container #logo ::slotted(a),#container #logo a{display:flex;flex-direction:column;justify-content:center;block-size:-webkit-fill-available;block-size:-moz-available;block-size:fill-available;block-size:100%;line-height:0}#container #logo ::slotted(:hover:focus-visible),#container #logo ::slotted(a:focus-visible),#container #logo a:is(:focus-visible,:hover:focus-visible){outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}#container #hamburger{display:flex;grid-area:hamburger;block-size:100%;place-items:center;align-content:center}@container navigation-primary (min-width: 1200px){#container #hamburger{grid-area:unset}}#container #hamburger summary{position:relative;cursor:pointer;display:flex;gap:var(--rh-space-md,8px);block-size:max-content;inline-size:max-content;align-items:center;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-pill,64px);margin-inline-start:0}#container #hamburger summary:before{--_mask:conic-gradient(#0000 0 0);content:"";position:absolute;inset:-1px;border-radius:inherit;padding:var(--rh-border-width-sm,1px);background:var(--_active-item-color);mask:var(--_mask) content-box exclude,var(--_mask);z-index:1}#container #hamburger summary:active:before{padding:var(--rh-border-width-md,2px)}#container #hamburger summary:is(:hover,:focus-visible){background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}#container #hamburger summary:is(:hover,:focus-visible):before{--_mask:conic-gradient(#000 0 0)}#container #hamburger summary:is(:focus-visible,:hover:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:3px;border-radius:var(--rh-border-radius-pill,64px)}#container #hamburger summary::-webkit-details-marker,#container #hamburger summary::marker{display:none}#container #hamburger summary rh-icon[icon=caret-down]{--rh-icon-size:10px;color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-icon-subtle));transition:rotate .2s}#container #hamburger summary rh-icon[icon=menu-bars]{--rh-icon-size:18px;margin-block:var(--rh-space-xs,4px);color:var(--rh-color-icon-secondary)}#container #hamburger summary #summary{clip:rect(0 0 0 0);clip-path:inset(50%);block-size:1px;overflow:hidden;position:absolute;white-space:nowrap;inline-size:1px;font-size:var(--rh-font-size-body-text-sm,.875rem)}@container (min-width: 992px){#container #hamburger summary #summary{clip:unset;clip-path:unset;block-size:auto;overflow:auto;position:static;white-space:normal;inline-size:auto}}#container #hamburger #details-content{display:none}#container #hamburger[open] summary:before{--_mask:conic-gradient(#000 0 0);padding:var(--rh-border-width-md,2px)}#container #hamburger[open] summary rh-icon[icon=caret-down]{rotate:180deg}#container #secondary{grid-area:secondary-links;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;block-size:100%;gap:var(--rh-space-xs,4px)}@container navigation-primary (min-width: 768px){#container #secondary{gap:var(--rh-space-md,8px)}}#container #secondary #event{display:none}@container navigation-primary (min-width: 768px){#container #secondary #event{display:flex;flex-direction:row}}#container #secondary #links{display:none}@container navigation-primary (min-width: 1440px){#container #secondary #links{display:flex;flex-direction:row}}#container #secondary #dropdowns{display:flex;flex-direction:row;gap:var(--rh-space-md,8px)}@container navigation-primary (min-width: 1200px){#container #secondary #dropdowns{padding-inline-start:var(--rh-space-md,8px)}#container:not(.compact) #hamburger{display:block}#container:not(.compact) #hamburger>*{box-sizing:border-box}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger::details-content{display:contents}#container:not(.compact) #hamburger::details-content>*{box-sizing:border-box}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger summary{display:none}#container:not(.compact) #hamburger #details-content{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;block-size:100%}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger #details-content ::slotted(rh-navigation-primary-item){block-size:var(--_navbar-height)}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger[open]{position:static;display:flex;block-size:100%;place-items:center;align-content:center;box-shadow:none;background-color:initial;padding:0}#container:not(.compact) #hamburger[open] ::slotted(rh-navigation-primary-item){border-block-start:none}#container:not(.compact) #hamburger[open] ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:none}}#container.compact #hamburger[open] #details-content{--_border-color:var(--rh-color-border-subtle);position:absolute;inset-block-start:100%;inset-inline-start:0;z-index:var(--_nav-container-z-index);display:flex;flex-direction:column;background-color:var(--rh-color-surface);inline-size:100%;block-size:auto;place-items:initial;padding:var(--rh-space-lg,16px);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);max-block-size:calc(100dvh - var(--_navbar-height));overflow-y:auto}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}@container navigation-primary (min-width: 320px){#container.compact #hamburger[open] #details-content{padding:var(--rh-space-2xl,32px)}}@container navigation-primary (min-width: 1200px){#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}}`;
/**
 * The Primary navigation is a container of menus and utilities, it allows
 * visitors to orient themselves and move through a website. It is persistent on
 * every page to ensure a consistent user experience across websites.
 *
 * @summary       Primary navigation
 * @slot          - Use this slot for `<rh-primary-navigation-item>` hamburger menu links and dropdowns
 * @slot          logo -
 *                Use this slot to override the link and logo image for translations and sub sites.
 * @slot          event -
 *                Use this slot for event promotion.  Images such as SVGs and links are most often slotted here.
 *                Slot these items using the `<rh-navigation-primary-item slot="event">` element.
 * @slot          links -
 *                Use this slot for quick links to other sites not directly associated with the page the
 *                navigation is on.  Common use cases are developers docs and support. Slot these items using
 *                the `<rh-navigation-primary-item slot="links">` element.
 * @slot          dropdowns -
 *                Use this slot for search, for you, and account dropdowns. Slot these items using the
 *                `<rh-navigation-primary-item slot="dropdown" variant="dropdown">` element.
 * @cssprop       [--rh-navigation-primary-z-index, 102]
 *                The initial z-index for the primary navigation element, default is 102.
 */
let RhNavigationPrimary = RhNavigationPrimary_1 = _a = class RhNavigationPrimary extends LitElement {
    static focusableChildElements(parent) {
        return parent.querySelectorAll(`a,
                                    button:not([disabled]),
                                    input:not([disabled]),
                                    select:not([disabled]),
                                    textarea:not([disabled]),
                                    [tabindex]:not([tabindex="-1"]):not([disabled]),
                                    details:not([disabled]),
                                    summary:not(:disabled)`);
    }
    constructor() {
        super();
        _RhNavigationPrimary_instances.add(this);
        _RhNavigationPrimary_internals.set(this, InternalsController.of(this, { role: 'navigation' }));
        _RhNavigationPrimary_openPrimaryDropdowns.set(this, new Set());
        _RhNavigationPrimary_openSecondaryDropdowns.set(this, new Set());
        _RhNavigationPrimary_ro.set(this, void 0);
        _RhNavigationPrimary_hydrated.set(this, false);
        _RhNavigationPrimary_slots.set(this, new SlotController(this, 'logo', 'summary', 'links', 'dropdowns', null));
        /**
         * We should start in compact mode (mobile first)
         * Later, after the element has fully hydrated, we can recompute
         * whether to use the compact layout based on the viewport
         * @internal
         */
        this.compact = true;
        this._overlayOpen = false;
        this._hamburgerOpen = false;
        /**
         * Sets the mobile toggle (hamburger) text, used for translations, defaults to 'Menu'
         */
        this.mobileToggleLabel = 'Menu';
        /**
         * Customize the default `aria-label` on the `<nav>` container.
         * Defaults to "main" if no attribute/property is set.
         */
        this.accessibleLabel = 'main';
        if (!isServer) {
            // TODO: Perf look into debouncing the resize observer
            // or look into using style observer: https://www.bram.us/2025/02/24/solved-by-styleobserver-element-matchcontainer/?ref=dailydev
            // lea verou style observer: https://github.com/LeaVerou/style-observer/
            __classPrivateFieldSet(this, _RhNavigationPrimary_ro, new ResizeObserver(entries => {
                for (const entry of entries) {
                    const [contentBoxSize] = entry.contentBoxSize;
                    const oldState = this.compact;
                    const newState = contentBoxSize.inlineSize < 1200;
                    if (oldState !== newState) {
                        this.compact = newState;
                        if (__classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size === 0
                            && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0 && !this.compact) {
                            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
                        }
                    }
                }
            }), "f");
        }
    }
    firstUpdated() {
        // ensure we update initially on client hydration
        const _isHydrated = isServer && !this.hasUpdated;
        if (!_isHydrated) {
            __classPrivateFieldSet(this, _RhNavigationPrimary_hydrated, true, "f");
            this.compact = this.offsetWidth < 1200;
        }
    }
    async connectedCallback() {
        super.connectedCallback();
        this.role = 'navigation';
        if (!isServer) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_ro, "f")?.observe(this);
            this.addEventListener('toggle', __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onDropdownToggle));
            this.addEventListener('focusout', __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onFocusout));
            this.addEventListener('keydown', __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onKeydown));
            this.addEventListener('keyup', __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onKeyup));
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_upgradeAccessibility).call(this);
            __classPrivateFieldGet(this, _RhNavigationPrimary_internals, "f").ariaLabel = this.accessibleLabel;
        }
    }
    render() {
        const { compact } = this;
        return html `
      <div id="container" class="${classMap({ compact, dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimary_hydrated, "f") })}">
        <div id="bar">
          <div id="logo">
            <slot name="logo">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 613 145" height="30" width="125">
                  <title>Red Hat</title>
                  <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"/>
                  <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"/>
                  <path fill="var(--rh-color-text-primary, #151515)" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"/>
                </svg>
              </a>
            </slot>
          </div>
          <details id="hamburger" ?open="${this._hamburgerOpen}" @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_hamburgerToggle)}">
            <summary>
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <div id="summary">${this.mobileToggleLabel}</div>
              <rh-icon icon="caret-down" set="microns"></rh-icon>
            </summary>
            <div id="details-content" role="list">
              <slot></slot>
            </div>
          </details>
          <div id="secondary">
            <div id="event" role="list"><slot name="event"></slot></div>
            <div id="links" role="list"><slot name="links"></slot></div>
            <div id="dropdowns" role="list"><slot name="dropdowns"></slot></div>
          </div>
        </div>
      </div>
      <rh-navigation-primary-overlay
          .open="${this._overlayOpen}"
          @click="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onOverlayClick)}">
      </rh-navigation-primary-overlay>
    `;
    }
    compactChanged(oldVal, newVal) {
        // transition into desktop
        if (oldVal && !newVal) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openHamburger).call(this);
        }
        // transition into compact
        if (!oldVal && newVal) {
            if (__classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size === 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
            }
        }
    }
    /**
     * Close Menus
     * @param skip Boolean - closes hamburger menu if true and in a small viewport, default false;
     */
    close(skip = false) {
        if (__classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size > 0) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this);
        }
        else if (__classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size > 0) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
        }
        if (this.compact && !skip) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
        }
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
    }
};
_RhNavigationPrimary_internals = new WeakMap();
_RhNavigationPrimary_openPrimaryDropdowns = new WeakMap();
_RhNavigationPrimary_openSecondaryDropdowns = new WeakMap();
_RhNavigationPrimary_ro = new WeakMap();
_RhNavigationPrimary_hydrated = new WeakMap();
_RhNavigationPrimary_slots = new WeakMap();
_RhNavigationPrimary_instances = new WeakSet();
_RhNavigationPrimary_upgradeAccessibility = function _RhNavigationPrimary_upgradeAccessibility() {
    __classPrivateFieldGet(this, _RhNavigationPrimary_internals, "f").ariaLabel = this.accessibleLabel;
};
_RhNavigationPrimary_openOverlay = function _RhNavigationPrimary_openOverlay() {
    this._overlayOpen = true;
};
_RhNavigationPrimary_closeOverlay = function _RhNavigationPrimary_closeOverlay() {
    this._overlayOpen = false;
};
_RhNavigationPrimary_onOverlayClick = function _RhNavigationPrimary_onOverlayClick() {
    __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this);
    __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
    if (this.compact) {
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
    }
    __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
};
_RhNavigationPrimary_primaryDropdowns = function _RhNavigationPrimary_primaryDropdowns() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item[variant="dropdown"]:not([slot="dropdowns"])'));
};
_RhNavigationPrimary_secondaryDropdowns = function _RhNavigationPrimary_secondaryDropdowns() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item[variant="dropdown"][slot="dropdowns"]'));
};
_RhNavigationPrimary_onDropdownToggle = async function _RhNavigationPrimary_onDropdownToggle(event) {
    const item = event.target;
    // if the event came from a secondary link in a compact mode we'll want to close the hamburger first if it is open
    const slottedSecondary = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").getSlotted('links', 'dropdowns');
    const secondaryEventToggle = slottedSecondary.find(node => node.isEqualNode(item));
    if (item.open) {
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this, item);
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
        if (secondaryEventToggle) {
            if (this.compact) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
            }
            __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").add(item);
        }
        else {
            __classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").add(item);
        }
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openOverlay).call(this);
    }
    else {
        if (secondaryEventToggle) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").delete(item);
            if (__classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0 && (this.compact && !this._hamburgerOpen)) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
            }
        }
        else {
            __classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").delete(item);
        }
        if (!this.compact
            && __classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size === 0
            && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
        }
    }
};
_RhNavigationPrimary_onKeydown = function _RhNavigationPrimary_onKeydown(event) {
    switch (event.key) {
        case 'Escape': {
            if (__classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size > 0) {
                const [dropdown] = __classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f");
                dropdown.hide();
                dropdown.shadowRoot?.querySelector('summary')?.focus();
            }
            else if (__classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size > 0) {
                const [dropdown] = __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f");
                dropdown.hide();
                dropdown.shadowRoot?.querySelector('summary')?.focus();
            }
            else if (this._hamburgerOpen) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
                this._hamburger.querySelector('summary')?.focus();
            }
            break;
        }
        case 'Tab':
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onTabKeydown).call(this, event);
            break;
        default:
            break;
    }
};
_RhNavigationPrimary_onKeyup = function _RhNavigationPrimary_onKeyup(event) {
    switch (event.key) {
        case 'Tab':
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onTabKeyup).call(this, event);
            break;
        default:
            break;
    }
};
_RhNavigationPrimary_onFocusout = async function _RhNavigationPrimary_onFocusout(event) {
    const target = event.relatedTarget;
    if (target?.closest('rh-navigation-primary') === this || target === null) {
        // if the focus is still inside the rh-navigation-secondary exit
        return;
    }
    else {
        this.close();
    }
};
_RhNavigationPrimary_onTabKeydown = function _RhNavigationPrimary_onTabKeydown(event) {
    // target is the element we are leaving with tab press
    const target = event.target;
    // get target parent dropdown
    const primaryDropdowns = __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_primaryDropdowns).call(this);
    const secondaryDropdowns = __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_secondaryDropdowns).call(this);
    // target can be in one of the two dropdown collections, but only 1.
    const dropdownContainsTarget = primaryDropdowns.find(dropdown => dropdown.contains(target))
        ?? secondaryDropdowns.find(dropdown => dropdown.contains(target));
    if (dropdownContainsTarget) {
        const focusableChildElements = Array.from(RhNavigationPrimary_1.focusableChildElements(dropdownContainsTarget));
        if (focusableChildElements.length > 0) {
            const { 0: firstChild, [focusableChildElements.length - 1]: lastChild, } = focusableChildElements;
            if (event.shiftKey) {
                if (event.shiftKey && firstChild === target) {
                    return;
                }
                // if target is self, close self
                if (event.shiftKey && target === dropdownContainsTarget) {
                    dropdownContainsTarget.hide();
                    return;
                }
            }
            else {
                if (!firstChild) {
                    return;
                }
                if (!lastChild) {
                    return;
                }
                else {
                    if (lastChild === target) {
                        dropdownContainsTarget.hide();
                        return;
                    }
                }
            }
        }
        else {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this);
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
        }
    }
};
_RhNavigationPrimary_onTabKeyup = function _RhNavigationPrimary_onTabKeyup(event) {
    if (this.compact && this._hamburgerOpen) {
        const secondaryDropdowns = __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_secondaryDropdowns).call(this);
        const target = event.target;
        if (event.shiftKey && target === this) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
        }
        else {
            if (secondaryDropdowns.some(dropdown => dropdown.contains(target))) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
            }
        }
    }
};
_RhNavigationPrimary_closePrimaryDropdowns = function _RhNavigationPrimary_closePrimaryDropdowns(except) {
    __classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").forEach((dropdown) => {
        if (dropdown !== except) {
            dropdown.hide();
        }
    });
};
_RhNavigationPrimary_closeSecondaryDropdowns = function _RhNavigationPrimary_closeSecondaryDropdowns() {
    __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").forEach((dropdown) => {
        dropdown.hide();
    });
};
_RhNavigationPrimary_openHamburger = async function _RhNavigationPrimary_openHamburger() {
    if (!this._hamburger) {
        await this.updateComplete;
    }
    this._hamburgerOpen = true;
    this.requestUpdate();
    await this.updateComplete;
};
_RhNavigationPrimary_closeHamburger = async function _RhNavigationPrimary_closeHamburger() {
    if (!this._hamburger) {
        await this.updateComplete;
    }
    this._hamburgerOpen = false;
    this.requestUpdate();
    await this.updateComplete;
};
_RhNavigationPrimary_hamburgerToggle = function _RhNavigationPrimary_hamburgerToggle(event) {
    if (event instanceof ToggleEvent) {
        if (event.newState === 'open') {
            // if we are compact mode and any secondary link dropdowns are open, close them
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size > 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
            }
            if (this.compact) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openOverlay).call(this);
            }
        }
        else {
            if (__classPrivateFieldGet(this, _RhNavigationPrimary_openPrimaryDropdowns, "f").size > 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this);
            }
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
            }
        }
    }
};
RhNavigationPrimary.styles = [styles];
__decorate([
    provide({ context }),
    state()
], RhNavigationPrimary.prototype, "compact", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "_overlayOpen", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "_hamburgerOpen", void 0);
__decorate([
    query('#hamburger')
], RhNavigationPrimary.prototype, "_hamburger", void 0);
__decorate([
    property({ attribute: 'mobile-toggle-label' })
], RhNavigationPrimary.prototype, "mobileToggleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhNavigationPrimary.prototype, "colorPalette", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhNavigationPrimary.prototype, "accessibleLabel", void 0);
__decorate([
    observes('compact')
], RhNavigationPrimary.prototype, "compactChanged", null);
RhNavigationPrimary = RhNavigationPrimary_1 = __decorate([
    customElement('rh-navigation-primary'),
    colorPalettes,
    themable
], RhNavigationPrimary);
export { RhNavigationPrimary };
//# sourceMappingURL=rh-navigation-primary.js.map