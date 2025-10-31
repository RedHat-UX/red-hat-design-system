var _RhNavigationPrimary_instances, _RhNavigationPrimary_internals, _RhNavigationPrimary_openPrimaryDropdowns, _RhNavigationPrimary_openSecondaryDropdowns, _RhNavigationPrimary_ro, _RhNavigationPrimary_hydrated, _RhNavigationPrimary_slots, _RhNavigationPrimary_upgradeAccessibility, _RhNavigationPrimary_openOverlay, _RhNavigationPrimary_closeOverlay, _RhNavigationPrimary_onOverlayClick, _RhNavigationPrimary_primaryItems, _RhNavigationPrimary_openDropdownItems, _RhNavigationPrimary_onDropdownToggle, _RhNavigationPrimary_hamburgerContains, _RhNavigationPrimary_onHamburgerSummaryBlur, _RhNavigationPrimary_onHamburgerFocusOut, _RhNavigationPrimary_onFocusout, _RhNavigationPrimary_onKeydown, _RhNavigationPrimary_onKeyup, _RhNavigationPrimary_onTabUp, _RhNavigationPrimary_closePrimaryDropdowns, _RhNavigationPrimary_closeSecondaryDropdowns, _RhNavigationPrimary_openHamburger, _RhNavigationPrimary_closeHamburger, _RhNavigationPrimary_hamburgerToggle;
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
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_color-stop-start:var(--rh-color-brand-red-light,#f56e6e);--_color-stop-middle:var(--rh-color-purple-40,#876fd4);--_color-stop-end:var(--rh-color-purple-60,#3d2785);--_linear-gradient:var(--_color-stop-start),var(--_color-stop-middle),var(--_color-stop-end);--_conic-gradient:var(--_linear-gradient),var(--_color-stop-middle),var(--_color-stop-start);--_gradient-direction:-90deg;--_gradient-ring:linear-gradient(light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f)) 0 0) padding-box,conic-gradient(from var(--_gradient-direction),var(--_conic-gradient)) border-box;--_navbar-height:83px;--_nav-container-z-index:-1;display:block;container:navigation-primary/inline-size;position:relative;z-index:var(--rh-navigation-primary-z-index,102);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important}:host([color-palette^=light]){color-scheme:only light}:host([color-palette^=dark]){color-scheme:only dark}[hidden]{display:none!important}.visually-hidden{position:absolute!important;block-size:1px;inline-size:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap;border:0;padding:0!important;margin:-1px!important}#bar{position:relative;display:grid;grid-template-areas:"logo hamburger secondary-links";grid-template-columns:auto auto 1fr;grid-template-rows:var(--_navbar-height);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));color:var(--rh-color-text-primary);inline-size:100%;max-block-size:var(--_navbar-height);box-shadow:0 2px 4px 0 var(--_box-shadow-color);padding-inline:var(--rh-space-lg,16px)}@container navigation-primary (min-width: 576px){#bar{padding-inline:var(--rh-space-2xl,32px)}}#logo{grid-area:logo;display:flex;flex-direction:column;margin-inline-end:var(--rh-space-lg,16px);border-block-end:none}@container navigation-primary (min-width: 576px){#logo{border-block-end-color:#0000}}#logo svg{block-size:30px;inline-size:42px}@container navigation-primary (min-width: 1440px){#logo svg{block-size:30px;inline-size:125px}}#logo ::slotted(a),#logo a{display:flex;flex-direction:column;justify-content:center;block-size:-webkit-fill-available;block-size:-moz-available;block-size:fill-available;block-size:100%;line-height:0}#logo ::slotted(:hover:focus-visible),#logo ::slotted(a:focus-visible),#logo a:is(:focus-visible,:hover:focus-visible){outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}#hamburger{display:flex;grid-area:hamburger;block-size:100%;place-items:center;align-content:center}@container navigation-primary (min-width: 1200px){#hamburger{grid-area:unset}}#hamburger summary{position:relative;cursor:pointer;display:flex;gap:var(--rh-space-md,8px);block-size:max-content;inline-size:max-content;align-items:center;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-pill,64px);margin-inline-start:0;z-index:1}@container navigation-primary (min-width: 1200px){#hamburger summary{display:none}}#hamburger summary:before{content:"";position:absolute;inset:-1px;z-index:-1;background:#0000;border-radius:inherit}#hamburger summary:is(:hover,:focus-visible){background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}#hamburger summary:is(:hover,:focus-visible):before{border:var(--rh-border-width-sm,1px) solid #0000}#hamburger summary:is(:active,:active:hover):before{border:var(--rh-border-width-md,2px) solid #0000}#hamburger summary:is(:active,:active:hover,:hover,:focus-visible):before{background:var(--_gradient-ring)}#hamburger summary:is(:focus-visible,:hover:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:3px}#hamburger summary::-webkit-details-marker,#hamburger summary::marker{display:none}#hamburger summary rh-icon[icon=caret-down]{--rh-icon-size:10px;color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-icon-subtle));transition:rotate .2s}#hamburger summary rh-icon[icon=menu-bars]{--rh-icon-size:18px;margin-block:var(--rh-space-xs,4px);color:var(--rh-color-icon-secondary)}#hamburger summary #summary{clip:rect(0 0 0 0);clip-path:inset(50%);block-size:1px;overflow:hidden;position:absolute;white-space:nowrap;inline-size:1px;font-size:var(--rh-font-size-body-text-sm,.875rem)}@container (min-width: 992px){#hamburger summary #summary{clip:unset;clip-path:unset;block-size:auto;overflow:auto;position:static;white-space:normal;inline-size:auto}}#hamburger[open] summary:before{border:var(--rh-border-width-md,2px) solid #0000;background:var(--_gradient-ring)}#hamburger[open] summary rh-icon[icon=caret-down]{rotate:180deg}#hamburger #details-content{display:none}#hamburger:not([open]) #details-content{visibility:hidden}#hamburger ::slotted(rh-navigation-link){--_navigation-link-container-align-items:start;--_navigation-link-container-display:flex;--_navigation-link-container-block-size:100%;--_navigation-link-padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px);--_navigation-link-display:flex;--_navigation-link-inline-size:100%}#secondary{grid-area:secondary-links;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;block-size:100%;gap:var(--rh-space-xs,4px)}@container navigation-primary (min-width: 768px){#secondary{gap:var(--rh-space-md,8px)}}#secondary #event{display:none}@container navigation-primary (min-width: 768px){#secondary #event{display:flex;flex-direction:row}}#secondary #links{display:none}@container navigation-primary (min-width: 1440px){#secondary #links{display:flex;flex-direction:row}#secondary #links ::slotted(rh-navigation-link){--_navigation-link-padding:var(--rh-space-md,8px);--_navigation-link-font-size:var(--rh-font-size-body-text-sm,0.875rem)}}#secondary #dropdowns{display:flex;flex-direction:row;gap:var(--rh-space-md,8px)}@container navigation-primary (min-width: 1200px){#secondary #dropdowns{padding-inline-start:var(--rh-space-md,8px)}}#container{--_box-shadow-color:light-dark(#15151533,#0009);display:block;position:relative;inline-size:100%;block-size:var(--_navbar-height);z-index:2}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger{display:block}#container:not(.compact) #hamburger>*{box-sizing:border-box}#container:not(.compact) #hamburger::details-content{display:contents}#container:not(.compact) #hamburger::details-content>*{box-sizing:border-box}#container:not(.compact) #hamburger ::slotted(rh-navigation-link){--_navigation-link-container-align-items:center;--_navigation-link-container-display:flex;--_navigation-link-container-block-size:100%;--_navigation-link-container-position:relative;--_navigation-link-align-items:center;--_navigation-link-block-size:100%;--_navigation-link-inline-size:fit-content;--_navigation-link-color-hover:var(--rh-color-text-primary,light-dark(var(--rh-color-text-primary-on-light,#151515),var(--rh-color-text-primary-on-dark,#fff))
              );--_navigation-link-padding:0 var(--rh-space-lg,16px)}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger #details-content{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;block-size:100%}#container:not(.compact) #hamburger #details-content ::slotted(rh-navigation-primary-item){block-size:var(--_navbar-height)}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger[open]{position:static;display:flex;block-size:100%;place-items:center;align-content:center;box-shadow:none;background-color:initial;padding:0}#container:not(.compact) #hamburger[open] ::slotted(rh-navigation-primary-item){border-block-start:none}#container:not(.compact) #hamburger[open] ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:none}}#container.compact #hamburger summary{display:flex;list-style-type:none}#container.compact #hamburger[open] #details-content{--_border-color:var(--rh-color-border-subtle);position:absolute;inset-block-start:100%;inset-inline-start:0;z-index:var(--_nav-container-z-index);display:flex;flex-direction:column;background-color:var(--rh-color-surface);inline-size:100%;block-size:auto;place-items:initial;padding:var(--rh-space-lg,16px);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533);max-block-size:calc(100dvh - var(--_navbar-height));overflow-y:auto}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}@container navigation-primary (min-width: 320px){#container.compact #hamburger[open] #details-content{padding:var(--rh-space-2xl,32px)}}@container navigation-primary (min-width: 1200px){#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}#container.compact #hamburger[open] #details-content ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}}`;
/**
 * Primary navigation helps users orient themselves and move through websites and domains.
 *
 * @summary       Primary navigation
 *
 * @alias Navigation (primary)
 *
 */
let RhNavigationPrimary = class RhNavigationPrimary extends LitElement {
    constructor() {
        super();
        _RhNavigationPrimary_instances.add(this);
        _RhNavigationPrimary_internals.set(this, InternalsController.of(this, { role: 'navigation' }));
        _RhNavigationPrimary_openPrimaryDropdowns.set(this, new Set());
        _RhNavigationPrimary_openSecondaryDropdowns.set(this, new Set());
        _RhNavigationPrimary_ro.set(this, void 0);
        _RhNavigationPrimary_hydrated.set(this, false);
        _RhNavigationPrimary_slots.set(this, new SlotController(this, 'logo', 'summary', 'event', 'links', 'dropdowns', null));
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
         * Customize the default label for the navigation.
         * Defaults to "Main navigation" if no value is set.
         */
        this.accessibleLabel = 'Main navigation';
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
        if (!isServer) {
            if (this._title) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_internals, "f").ariaLabelledByElements = [this._title];
            }
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
        }
    }
    render() {
        const { compact } = this;
        const classes = {
            compact,
            dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimary_hydrated, "f"),
        };
        const hasEvent = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('event');
        const hasLinks = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('links');
        const hasDropdowns = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('dropdowns');
        return html `
      <h2 id="title" class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" class="${classMap(classes)}">
        <div id="bar">
          <div id="logo">
            <!-- Use this slot to override the link and logo image for translations and sub sites. -->
            <slot name="logo">
              <a href="/">
                <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145">
                  <title>Red Hat</title>
                  <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"></path>
                  <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"></path>
                  <path fill="light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"></path>
                </svg>
              </a>
            </slot>
          </div>
          <details id="hamburger" ?open="${this._hamburgerOpen}" @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_hamburgerToggle)}" @focusout="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onHamburgerFocusOut)}">
            <summary @blur="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onHamburgerSummaryBlur)}">
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <div id="summary">${this.mobileToggleLabel}</div>
              <rh-icon icon="caret-down" set="microns"></rh-icon>
            </summary>
            <div id="details-content" role="list" >
              <!-- 
                Use this slot for \`<rh-primary-navigation-item>\` hamburger menu links and dropdowns.
                If left empty will result in accessibility issues.
              -->
              <slot></slot>
            </div>
          </details>
          <div id="secondary">
            <div id="event" role="list" ?hidden=${!hasEvent}>
              <!--
                Use this slot for event promotion.  Images such as SVGs and links are most often slotted here.
                Slot these items using the \`<rh-navigation-primary-item slot="event">\` element. If any 
                other element is slotted here, it will need to be a role="listitem" to avoid accessibility 
                issues.  Other slotted elements will also likely have other rendering issues.
              -->
              <slot name="event"></slot>
            </div>
            <div id="links" role="list" ?hidden=${!hasLinks}>
              <!--
                Use this slot for quick links to other sites not directly associated with the page the
                navigation is on.  Common use cases are developers docs and support. Slot these items using
                the \`<rh-navigation-primary-item slot="links">\` element. If any other element is slotted 
                here, it will need to be a role="listitem" to avoid accessibility issues.  Other slotted 
                elements will also likely have other rendering issues.
              -->  
              <slot name="links"></slot>
            </div>
                         
            <div id="dropdowns" role="list" ?hidden=${!hasDropdowns}>
              <!--
                Use this slot for search, for you, and account dropdowns. Slot these items using the
                \`<rh-navigation-primary-item slot="dropdowns" variant="dropdown">\` element. If any 
                other element is slotted here, it will need to be a role="listitem" to avoid accessibility 
                issues.  Other slotted elements will also likely have other rendering issues.
              --> 
              <slot name="dropdowns"></slot>
            </div>
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
_RhNavigationPrimary_primaryItems = function _RhNavigationPrimary_primaryItems() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item:not([slot]), rh-navigation-link:not([slot])'));
};
_RhNavigationPrimary_openDropdownItems = function _RhNavigationPrimary_openDropdownItems() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item[variant="dropdown"][open]'));
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
_RhNavigationPrimary_hamburgerContains = function _RhNavigationPrimary_hamburgerContains(item) {
    const primaryItems = __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_primaryItems).call(this);
    return primaryItems.some(pi => pi.contains(item));
};
_RhNavigationPrimary_onHamburgerSummaryBlur = function _RhNavigationPrimary_onHamburgerSummaryBlur(event) {
    if (event.relatedTarget) {
        if (__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_hamburgerContains).call(this, event.relatedTarget)) {
            return;
        }
        if (this.compact) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
        }
    }
};
_RhNavigationPrimary_onHamburgerFocusOut = function _RhNavigationPrimary_onHamburgerFocusOut(event) {
    if (event.relatedTarget) {
        if (event.relatedTarget === this._hamburgerSummary) {
            return;
        }
        if (__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_hamburgerContains).call(this, event.relatedTarget)) {
            return;
        }
        if (this.compact) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
        }
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
        default:
            break;
    }
};
_RhNavigationPrimary_onKeyup = function _RhNavigationPrimary_onKeyup(event) {
    switch (event.key) {
        case 'Tab': {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onTabUp).call(this, event);
            break;
        }
    }
};
_RhNavigationPrimary_onTabUp = function _RhNavigationPrimary_onTabUp(event) {
    // target is the element we are entering with tab up press
    const target = event.target;
    if (!__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openDropdownItems).call(this).some(item => item.contains(target))) {
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closePrimaryDropdowns).call(this);
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
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
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openHamburger).call(this);
            // if we are compact mode and any secondary link dropdowns are open, close them
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size > 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
            }
            if (this.compact) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openOverlay).call(this);
            }
        }
        else {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
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
    query('summary')
], RhNavigationPrimary.prototype, "_hamburgerSummary", void 0);
__decorate([
    query('#title')
], RhNavigationPrimary.prototype, "_title", void 0);
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
RhNavigationPrimary = __decorate([
    customElement('rh-navigation-primary'),
    colorPalettes,
    themable
], RhNavigationPrimary);
export { RhNavigationPrimary };
//# sourceMappingURL=rh-navigation-primary.js.map