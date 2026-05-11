var _RhNavigationPrimary_instances, _RhNavigationPrimary_internals, _RhNavigationPrimary_openPrimaryDropdowns, _RhNavigationPrimary_openSecondaryDropdowns, _RhNavigationPrimary_ro, _RhNavigationPrimary_hydrated, _RhNavigationPrimary_slots, _RhNavigationPrimary_upgradeAccessibility, _RhNavigationPrimary_openOverlay, _RhNavigationPrimary_closeOverlay, _RhNavigationPrimary_onOverlayClick, _RhNavigationPrimary_primaryItems, _RhNavigationPrimary_openDropdownItems, _RhNavigationPrimary_secondaryLinksItems, _RhNavigationPrimary_onDropdownToggle, _RhNavigationPrimary_hamburgerContains, _RhNavigationPrimary_onHamburgerSummaryBlur, _RhNavigationPrimary_onHamburgerFocusOut, _RhNavigationPrimary_linksMenuContains, _RhNavigationPrimary_onLinksMenuSummaryBlur, _RhNavigationPrimary_onLinksMenuFocusOut, _RhNavigationPrimary_onFocusout, _RhNavigationPrimary_onKeydown, _RhNavigationPrimary_onKeyup, _RhNavigationPrimary_onEscDown, _RhNavigationPrimary_onTabUp, _RhNavigationPrimary_closePrimaryDropdowns, _RhNavigationPrimary_closeSecondaryDropdowns, _RhNavigationPrimary_openHamburger, _RhNavigationPrimary_closeHamburger, _RhNavigationPrimary_hamburgerToggle, _RhNavigationPrimary_linksMenuToggle, _RhNavigationPrimary_openLinksMenu, _RhNavigationPrimary_closeLinksMenu;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, nothing, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { provide } from '@lit/context';
import { context } from './context.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { RhNavigationPrimaryItem } from './rh-navigation-primary-item.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_navbar-height:50px;--_nav-container-z-index:-1;--_box-shadow-color:light-dark(#15151533,#0009);display:block;container:navigation-primary/inline-size;position:relative;z-index:var(--rh-navigation-primary-z-index,102);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)!important}:host([color-palette^=light]){color-scheme:only light}:host([color-palette^=dark]){color-scheme:only dark}.hidden{display:none}.visually-hidden{position:absolute!important;block-size:1px;inline-size:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap;border:0;padding:0!important;margin:-1px!important}#bar{position:relative;display:grid;grid-template-areas:"lockup hamburger secondary-links";grid-template-columns:auto 1fr auto;grid-template-rows:var(--_navbar-height);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));color:var(--rh-color-text-primary);inline-size:100%;max-block-size:var(--_navbar-height);box-shadow:0 2px 4px 0 var(--_box-shadow-color);padding-inline:var(--rh-space-lg,16px)}@container navigation-primary (min-width: 320px){#bar{padding-inline:var(--rh-space-lg,16px) calc(var(--rh-space-lg, 16px)/2)}}@container navigation-primary (min-width: 480px){#bar{grid-template-columns:auto auto 1fr}}@container navigation-primary (min-width: 576px){#bar{padding-inline:calc(var(--rh-space-lg, 16px)*2) var(--rh-space-lg,16px)}}#lockup{grid-area:lockup;display:grid;grid-template-areas:"logo sub-domain";grid-template-columns:auto;gap:var(--rh-space-lg,16px)}#logo{grid-area:logo;display:flex;flex-direction:column;border-block-end:none}@container navigation-primary (min-width: 576px){#logo{border-block-end-color:#0000}}#logo svg{block-size:24px;inline-size:32px;overflow:visible}@container navigation-primary (min-width: 1200px){#logo svg{inline-size:102px}}@container navigation-primary (min-width: 1440px){#logo svg{block-size:30px;inline-size:127px}}:is(#logo svg) #fedora{transform-box:fill-box;transform-origin:center;transition:transform .3s ease-in-out}:is(#logo svg) #wordmark{display:none}@container navigation-primary (min-width: 1200px){:is(#logo svg) #wordmark{display:revert}}@media (prefers-reduced-motion:no-preference){:is(#logo a):is(:hover,:focus) svg #fedora{transform:rotate(15deg)}}#logo ::slotted(a),#logo a{display:flex;flex-direction:column;justify-content:center;block-size:-webkit-fill-available;block-size:-moz-available;block-size:fill-available;block-size:100%;line-height:0}#logo ::slotted(:hover:focus-visible),#logo ::slotted(a:focus-visible),#logo a:is(:focus-visible,:hover:focus-visible){outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}#sub-domain{grid-area:sub-domain;display:none}#sub-domain ::slotted(:hover:focus-visible),#sub-domain ::slotted(a:focus-visible),#sub-domain a:is(:focus-visible,:hover:focus-visible){outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px)}#hamburger{grid-area:hamburger;block-size:100%;place-self:flex-end;align-content:center}#hamburger:not(.hidden){display:flex}@container navigation-primary (min-width: 380px){#hamburger{place-self:flex-start}}@container navigation-primary (min-width: 1200px){#hamburger{grid-area:unset}}#hamburger summary{position:relative;cursor:pointer;display:flex;block-size:100%;inline-size:max-content;padding:var(--rh-space-md,8px);border-radius:5px;margin-inline-start:0;z-index:1}@container navigation-primary (min-width: 480px){#hamburger summary{padding:var(--rh-space-lg,16px);align-items:center}}@container navigation-primary (min-width: 1200px){#hamburger summary{display:none}}:is(#hamburger summary):after{content:"";position:absolute;inset:0;border-block-end:4px solid #0000}:is(#hamburger summary):is(:hover,:focus-visible):after{border-block-end-color:var(--rh-color-border-subtle)}:is(#hamburger summary):is(:active):after{border-block-end-color:var(--rh-color-accent-brand)}:is(#hamburger summary):is(:focus-visible,:hover:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:3px}:is(#hamburger summary)::-webkit-details-marker,:is(#hamburger summary)::marker{display:none}:is(#hamburger summary) rh-icon[icon=menu-bars]{--rh-icon-size:18px;aspect-ratio:unset;color:var(--rh-color-icon-secondary)}#hamburger #details-content{display:none}:is(#hamburger[open] summary):after{border-block-end-color:var(--rh-color-accent-brand)}#hamburger:not([open]) #details-content{visibility:hidden}#hamburger ::slotted(rh-navigation-link){--_navigation-link-container-align-items:start;--_navigation-link-container-display:flex;--_navigation-link-container-block-size:100%;--_navigation-link-padding:var(--rh-space-lg,16px) var(--rh-space-xl,24px);--_navigation-link-display:flex;--_navigation-link-inline-size:100%}#secondary{grid-area:secondary-links;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;block-size:100%;gap:0}@container navigation-primary (min-width: 320px){#secondary{margin-inline-start:var(--rh-space-lg,16px)}}@container navigation-primary (min-width: 1200px){#secondary{gap:var(--rh-space-xl,24px)}}#secondary #event{display:none}@container navigation-primary (min-width: 576px){#secondary #event{display:flex;flex-direction:row;margin-inline-end:var(--rh-space-lg,16px)}}@container navigation-primary (min-width: 768px){#secondary #event{margin-inline-end:var(--rh-space-xl,24px)}}@container navigation-primary (min-width: 1200px){#secondary #event{margin-inline-end:0}}:is(#secondary #event) ::slotted(rh-navigation-primary-item){block-size:fit-content;line-height:0}:is(#secondary #event) ::slotted(a){display:block;line-height:0}#secondary #links-menu{display:none;align-items:center;block-size:100%}@container navigation-primary (min-width: 320px){:is(#secondary #links-menu):not(.hidden){display:flex}}:is(#secondary #links-menu) summary{position:relative;cursor:pointer;list-style:none;display:flex;align-items:center;padding:var(--rh-space-md,8px);border-radius:var(--rh-border-radius-default,3px);block-size:100%}@container navigation-primary (min-width: 480px){:is(#secondary #links-menu) summary{padding:var(--rh-space-lg,16px)}}@container navigation-primary (min-width: 1440px){:is(#secondary #links-menu) summary{display:none}}:is(:is(#secondary #links-menu) summary)::-webkit-details-marker,:is(:is(#secondary #links-menu) summary)::marker{display:none}:is(:is(#secondary #links-menu) summary):after{content:"";position:absolute;inset:0;border-block-end:4px solid #0000}:is(:is(#secondary #links-menu) summary):is(:hover,:focus-visible):after{border-block-end-color:var(--rh-color-border-subtle)}:is(:is(#secondary #links-menu) summary):is(:active):after{border-block-end-color:var(--rh-color-accent-brand)}:is(:is(#secondary #links-menu) summary):is(:focus-visible,:hover:focus-visible){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);outline-offset:2px}:is(:is(#secondary #links-menu) summary) rh-icon{--rh-icon-size:18px;color:var(--rh-color-icon-secondary)}:is(#secondary #links-menu) #links-menu-content{display:none}:is([open]:is(#secondary #links-menu) summary):after{border-block-end-color:var(--rh-color-accent-brand)}[open]:is(#secondary #links-menu) #links-menu-content{position:absolute;z-index:var(--_nav-container-z-index);inset-block-start:100%;inset-inline-end:0;display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));box-shadow:0 2px 4px 0 var(--_box-shadow-color);padding-block:var(--rh-space-2xl,32px) var(--rh-space-3xl,48px);padding-inline:var(--rh-space-2xl,32px);border-end-start-radius:var(--rh-border-radius-default,3px);border-end-end-radius:var(--rh-border-radius-default,3px)}:is([open]:is(#secondary #links-menu) #links-menu-content) ::slotted(rh-navigation-link),:is([open]:is(#secondary #links-menu) #links-menu-content) ::slotted(rh-navigation-primary-item){--_navigation-link-color:var(--rh-color-interactive-primary-default);--_navigation-link-padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);--_navigation-link-font-size:var(--rh-font-size-body-text-md,1rem)}@container navigation-primary (min-width: 1440px){[open]:is(#secondary #links-menu) #links-menu-content{position:static;z-index:unset;display:grid;grid-auto-flow:column;gap:var(--rh-space-xl,24px);align-items:center;flex-direction:unset;background-color:initial;box-shadow:none;padding:0;border-radius:0;min-inline-size:unset;block-size:100%}:is([open]:is(#secondary #links-menu) #links-menu-content) ::slotted(rh-navigation-link),:is([open]:is(#secondary #links-menu) #links-menu-content) ::slotted(rh-navigation-primary-item){--_navigation-link-color:var(--rh-color-text-primary);--_navigation-link-padding:var(--rh-space-md,8px);--_navigation-link-font-size:var(--rh-font-size-body-text-sm,0.875rem)}}:is(#secondary #links-menu):not([open]) #links-menu-content{visibility:hidden}#secondary #dropdowns{display:flex;flex-direction:row;block-size:100%}#container{display:block;position:relative;inline-size:100%;block-size:var(--_navbar-height);z-index:2}@container navigation-primary (min-width: 480px){#container{--_navbar-height:66px}}@container navigation-primary (min-width: 576px){#container{--_navbar-height:82px}}#container.subdomain #lockup{grid-template-areas:"logo sub-domain";gap:var(--rh-space-lg,16px)}@container navigation-primary (min-width: 576px){#container.subdomain #lockup{gap:var(--rh-space-xl,24px)}}#container.subdomain #logo{display:flex}:is(#container.subdomain #logo) svg{block-size:18px;inline-size:24px}@container navigation-primary (min-width: 576px){:is(#container.subdomain #logo) svg{block-size:24px;inline-size:32px}}@container navigation-primary (min-width: 1440px){:is(#container.subdomain #logo) svg{block-size:30px;inline-size:40px}}:is(:is(#container.subdomain #logo) svg) #wordmark{display:none}:is(#container.subdomain #logo) ::slotted(:hover:focus-visible),:is(#container.subdomain #logo) ::slotted(a:focus-visible),:is(#container.subdomain #logo) a:is(:focus-visible,:hover:focus-visible){outline-offset:4px}#container.subdomain #sub-domain{display:flex;position:relative;place-items:center;block-size:100%;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;font-size:1rem!important;font-weight:var(--rh-font-weight-heading-bold,700)!important;line-height:1!important;color:var(--rh-color-text-primary)!important;white-space:break-spaces!important;margin-inline-end:var(--rh-space-md,8px)}@container navigation-primary (min-width: 567px){#container.subdomain #sub-domain{font-size:1.125rem!important}}@container navigation-primary (min-width: 1200px){#container.subdomain #sub-domain{font-size:var(--rh-font-size-heading-xs,1.25rem)!important}}:is(#container.subdomain #sub-domain):after{content:"";position:absolute;inset:0;border-block-end:4px solid #0000;pointer-events:none}:is(#container.subdomain #sub-domain):is(:hover,:focus-visible):after{border-block-end-color:var(--rh-color-border-subtle)}:is(#container.subdomain #sub-domain):is(:active):after{border-block-end-color:var(--rh-color-accent-brand)}:is(#container.subdomain #sub-domain) a{text-decoration:none;color:var(--rh-color-text-primary)!important;block-size:100%;place-content:center}@container (min-width: 480px){#container.subdomain #lockup{grid-template-areas:"logo sub-domain"}#container.subdomain #logo{align-self:center;align-items:center;padding-block-start:0}#container.subdomain #sub-domain{align-self:center;align-items:center;line-height:var(--rh-line-height-heading,1.3);padding-block-end:0}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger{display:block}:is(#container:not(.compact) #hamburger)>*{box-sizing:border-box}:is(#container:not(.compact) #hamburger)::details-content{display:contents}:is(:is(#container:not(.compact) #hamburger)::details-content)>*{box-sizing:border-box}:is(#container:not(.compact) #hamburger) ::slotted(rh-navigation-link){--_navigation-link-container-align-items:center;--_navigation-link-container-display:flex;--_navigation-link-container-block-size:100%;--_navigation-link-container-position:relative;--_navigation-link-align-items:center;--_navigation-link-block-size:100%;--_navigation-link-inline-size:fit-content;--_navigation-link-color-hover:var(--rh-color-text-primary,light-dark(var(--rh-color-text-primary-on-light,#151515),var(--rh-color-text-primary-on-dark,#fff)));--_navigation-link-padding:0 var(--rh-space-lg,16px)}}@container navigation-primary (min-width: 1200px){:is(#container:not(.compact) #hamburger) #details-content{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;block-size:100%}:is(:is(#container:not(.compact) #hamburger) #details-content) ::slotted(rh-navigation-primary-item){block-size:var(--_navbar-height)}}@container navigation-primary (min-width: 1200px){#container:not(.compact) #hamburger[open]{position:static;display:flex;block-size:100%;place-items:center;align-content:center;box-shadow:none;background-color:initial;padding:0}:is(#container:not(.compact) #hamburger[open]) ::slotted(rh-navigation-primary-item){border-block-start:none}:is(#container:not(.compact) #hamburger[open]) ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:none}}:is(#container.compact #hamburger) summary{display:flex;list-style-type:none}[open]:is(#container.compact #hamburger) #details-content{--_border-color:var(--rh-color-border-subtle);position:absolute;inset-block-start:100%;inset-inline-start:0;z-index:var(--_nav-container-z-index);display:flex;flex-direction:column;background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));inline-size:100%;block-size:auto;place-items:initial;padding:var(--rh-space-lg,16px);box-shadow:0 2px 4px 0 var(--_box-shadow-color);max-block-size:calc(100dvh - var(--_navbar-height));overflow-y:auto}:is([open]:is(#container.compact #hamburger) #details-content) ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:is([open]:is(#container.compact #hamburger) #details-content) ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}@container navigation-primary (min-width: 320px){[open]:is(#container.compact #hamburger) #details-content{padding:var(--rh-space-2xl,32px)}}@container navigation-primary (min-width: 1200px){:is([open]:is(#container.compact #hamburger) #details-content) ::slotted(rh-navigation-primary-item){border-block-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}:is([open]:is(#container.compact #hamburger) #details-content) ::slotted(rh-navigation-primary-item:nth-last-child(1 of :not([slot]))){border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}}@container navigation-primary (min-width: 14400px){:is(#container.compact #links-menu) summary{display:flex}}@container navigation-primary (min-width: 1440px){[open]:is(#container.compact #links-menu) #links-menu-content{position:absolute;z-index:var(--_nav-container-z-index);inset-block-start:100%;inset-inline-end:0;display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);background-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));box-shadow:0 2px 4px 0 var(--_box-shadow-color);padding-block:var(--rh-space-2xl,32px) var(--rh-space-3xl,48px);padding-inline:var(--rh-space-2xl,32px);border-end-start-radius:var(--rh-border-radius-default,3px);border-end-end-radius:var(--rh-border-radius-default,3px);block-size:revert}:is([open]:is(#container.compact #links-menu) #links-menu-content) ::slotted(rh-navigation-link),:is([open]:is(#container.compact #links-menu) #links-menu-content) ::slotted(rh-navigation-primary-item){--_navigation-link-padding:var(--rh-space-md,8px) var(--rh-space-lg,16px)}}#overlay{display:none;position:fixed;background-color:rgb(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%));inset:0;inline-size:100dvw;block-size:100dvh;z-index:var(--rh-overlay-z-index,1)}#overlay.open{display:block}`;
/**
 * Primary navigation provides a persistent bar for orienting users and
 * navigating across websites and domains. It groups primary links,
 * dropdown menus, event promotions, and utility actions into a single
 * responsive bar. There must not be more than one on a page. The element
 * uses the ARIA `navigation` landmark role and should have a unique
 * `accessible-label` when multiple navigation landmarks exist on the page,
 * so screen readers can distinguish between them. Keyboard users navigate
 * items with Tab/Shift+Tab and close open dropdowns with Escape.
 *
 * @summary Persistent bar for orienting users and navigating across sites
 *
 * @alias Navigation (primary)
 *
 */
let RhNavigationPrimary = class RhNavigationPrimary extends LitElement {
    constructor() {
        super();
        _RhNavigationPrimary_instances.add(this);
        // Setting role: navigation here will output role="navigation" prior to lit SSR hydration in the DSD.
        // When hydration runs it will then remove the role, which we then re-add in connectedCallback().
        // Note: Setting role here blocks the user from setting any other role on the rh-navigation host element.
        // IE: role="banner" for when the hamburger items are empty.
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
        this.linksCompact = true;
        this._overlayOpen = false;
        this._hamburgerOpen = false;
        this._linksMenuOpen = false;
        /**
         * Accessible label for the mobile hamburger toggle. Must be set when the
         * navigation is served in a non-English locale. Defaults to `'Menu'`.
         */
        this.mobileToggleLabel = 'Menu';
        /**
         * Accessible label for the mobile links (bento box) toggle. Must be set
         * when the navigation is served in a non-English locale. Defaults to
         * `'Explore Red Hat'`.
         */
        this.mobileLinksToggleLabel = 'Explore Red Hat';
        /**
         * Accessible label applied to the navigation landmark. Must be set when the
         * navigation is served in a non-English locale, and should be set when the
         * page contains multiple navigation landmarks, to provide unique identification
         * for assistive technology. Defaults to `'Main navigation'`.
         */
        this.accessibleLabel = 'Main navigation';
        /**
         * Sets the `href` for the default logo link. Avoid changing this value
         * unless the site requires a non-root landing page for the logo. Defaults
         * to `'/'`.
         */
        this.logoHref = '/';
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
                    const linksOldState = this.linksCompact;
                    const linksNewState = contentBoxSize.inlineSize < 1440;
                    if (linksOldState !== linksNewState) {
                        this.linksCompact = linksNewState;
                    }
                    // Close links menu when container goes below 320px (where it's hidden via CSS)
                    if (contentBoxSize.inlineSize < 320 && this._linksMenuOpen) {
                        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
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
            // Open links menu at desktop viewport
            this.linksCompact = this.offsetWidth < 1440;
        }
        if (!isServer) {
            if (this._title) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_internals, "f").ariaLabelledByElements = [this._title];
            }
        }
    }
    async connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            // We set this back to navigation due to axe automation tools not reading the element internals value
            // for the navigation.  This was made prior to our discovery of the bug in lit ssr hydration
            // https://github.com/lit/lit/pull/5115 that only removed some of the aria- attributes.
            // Moved inside the !isServer check as there still could be a race condition on ssr hydration that
            // connectedCallback() runs before hydration completes removing the reset role attribute.
            this.role = 'navigation';
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
        const subdomain = !!(this.siteName && this.siteHref);
        const classes = {
            compact,
            dehydrated: !__classPrivateFieldGet(this, _RhNavigationPrimary_hydrated, "f"),
            subdomain: subdomain,
        };
        const hasSlottedDefault = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted();
        const hasEvent = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('event');
        const hasLinks = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('links');
        const hasDropdowns = __classPrivateFieldGet(this, _RhNavigationPrimary_slots, "f").hasSlotted('dropdowns');
        return html `
      <h2 id="title" class="visually-hidden">${this.accessibleLabel}</h2>
      <div id="container" class="${classMap(classes)}">
        <div id="bar">
          <div id="lockup">
            <div id="logo">
              <!--
                Accepts an anchor element wrapping an inline SVG or \`<img>\` to
                override the default Red Hat logo. The slotted anchor should
                contain a \`<title>\` or \`alt\` text so screen readers can
                identify the brand link.
              -->
              <slot name="logo">
                <a href="${this.logoHref}">
                  <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145" role="img" aria-labelledby="title">
                    <title id="title">Red Hat</title>
                    <g id="fedora">
                      <path id="hat" fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"></path>
                      <path id="band" d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"></path>
                    </g>
                    <path id="wordmark" fill="light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"></path>
                  </svg>
                </a>
              </slot>
            </div>
            <div id="sub-domain">
              ${subdomain ?
            html `<a href="${ifDefined(this.siteHref)}">${this.siteName}</a>`
            : nothing}
            </div>
          </div>
          <details id="hamburger" ?open="${this._hamburgerOpen}" @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_hamburgerToggle)}" @focusout="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onHamburgerFocusOut)}" class="${classMap({ 'hidden': !hasSlottedDefault })}">
            <summary @blur="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onHamburgerSummaryBlur)}">
              <rh-icon icon="menu-bars" set="ui"></rh-icon>
              <div id="summary" class="visually-hidden">${this.mobileToggleLabel}</div>
            </summary>
            <div id="details-content" role="list">
              <!--
                Accepts \`<rh-navigation-primary-item>\` block elements for
                hamburger menu links and dropdowns. The parent container has
                \`role="list"\`, so slotted items must have \`role="listitem"\`
                for screen readers; \`rh-navigation-primary-item\` applies this
                automatically. Leaving this slot empty makes the hamburger
                menu inaccessible.
              -->
              <slot></slot>
            </div>
          </details>
          <div id="secondary">
            <div id="event" role="list" class="${classMap({ 'hidden': !hasEvent })}">
              <!--
                Accepts \`<rh-navigation-primary-item slot="event">\` block
                elements for event promotion such as conference logos. The
                parent has \`role="list"\`, so any other slotted element must
                include \`role="listitem"\` to avoid accessibility tree issues.
              -->
              <slot name="event"></slot>
            </div>
            <details id="links-menu" class="${classMap({ 'hidden': !hasLinks })}" ?open="${this._linksMenuOpen}" @toggle="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_linksMenuToggle)}" @focusout="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onLinksMenuFocusOut)}">
              <summary @blur="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onLinksMenuSummaryBlur)}">
                <div id="links-menu-summary" class="visually-hidden">${this.mobileLinksToggleLabel}</div>
                <rh-icon icon="menu-switcher" set="ui"></rh-icon>
              </summary>
              <div id="links-menu-content" role="list">
                <!--
                  Accepts \`<rh-navigation-primary-item slot="links">\` block
                  elements for quick links to external sites (e.g., docs,
                  support). The parent has \`role="list"\`, so other slotted
                  elements must include \`role="listitem"\`.
                -->
                <slot name="links"></slot>
              </div>
            </details>
            <div id="dropdowns" role="list" class="${classMap({ 'hidden': !hasDropdowns })}">
              <!--
                Accepts \`<rh-navigation-primary-item slot="dropdowns"
                variant="dropdown">\` block elements for utility dropdowns
                (search, notifications, account). The parent has
                \`role="list"\`, so other slotted elements must include
                \`role="listitem"\`.
              -->
              <slot name="dropdowns"></slot>
            </div>
          </div>
        </div>
      </div>
      <div id="overlay"
           class="${classMap({ open: this._overlayOpen })}"
           @click="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onOverlayClick)}"
           @keydown="${__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onOverlayClick)}">
      </div>
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
            ;
        }
    }
    linksCompactChanged(oldVal, newVal) {
        // transition into desktop
        if (oldVal && !newVal) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openLinksMenu).call(this);
        }
        // transition into compact
        if (!oldVal && newVal) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
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
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
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
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
    }
    __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
};
_RhNavigationPrimary_primaryItems = function _RhNavigationPrimary_primaryItems() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item:not([slot]), rh-navigation-link:not([slot])'));
};
_RhNavigationPrimary_openDropdownItems = function _RhNavigationPrimary_openDropdownItems() {
    return Array.from(this.querySelectorAll('rh-navigation-primary-item[variant="dropdown"][open]'));
};
_RhNavigationPrimary_secondaryLinksItems = function _RhNavigationPrimary_secondaryLinksItems() {
    return Array.from(this.querySelectorAll(':is(rh-navigation-primary-item, rh-navigation-link)[slot="links"]'));
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
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
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
            if (__classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0
                && (this.compact && !this._hamburgerOpen && !this._linksMenuOpen)) {
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
_RhNavigationPrimary_linksMenuContains = function _RhNavigationPrimary_linksMenuContains(item) {
    return __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_secondaryLinksItems).call(this).some(li => li.contains(item));
};
_RhNavigationPrimary_onLinksMenuSummaryBlur = function _RhNavigationPrimary_onLinksMenuSummaryBlur(event) {
    if (event.relatedTarget) {
        if (__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_linksMenuContains).call(this, event.relatedTarget)) {
            return;
        }
        if (this.compact) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
        }
    }
};
_RhNavigationPrimary_onLinksMenuFocusOut = function _RhNavigationPrimary_onLinksMenuFocusOut(event) {
    if (event.relatedTarget) {
        if (event.relatedTarget === this._linksMenuSummary) {
            return;
        }
        if (__classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_linksMenuContains).call(this, event.relatedTarget)) {
            return;
        }
        if (this.compact) {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
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
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_onEscDown).call(this);
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
_RhNavigationPrimary_onEscDown = function _RhNavigationPrimary_onEscDown() {
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
    else if (this._hamburgerOpen && this.compact) {
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
        this._hamburger.querySelector('summary')?.focus();
    }
    else if (this._linksMenuOpen && this.compact) {
        __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
        this._linksMenu.querySelector('summary')?.focus();
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
            // close links menu when hamburger opens
            if (this.compact && this._linksMenuOpen) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
            }
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
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0 && !this._linksMenuOpen) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
            }
        }
    }
};
_RhNavigationPrimary_linksMenuToggle = function _RhNavigationPrimary_linksMenuToggle(event) {
    if (event instanceof ToggleEvent) {
        if (event.newState === 'open') {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openLinksMenu).call(this);
            // close hamburger menu when links menu opens
            if (this.compact && this._hamburgerOpen) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeHamburger).call(this);
            }
            // close any open secondary dropdowns when links menu opens
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size > 0) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeSecondaryDropdowns).call(this);
            }
            // Only open overlay in compact (mobile) mode
            if (this.compact) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_openOverlay).call(this);
            }
        }
        else {
            __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeLinksMenu).call(this);
            if (this.compact && __classPrivateFieldGet(this, _RhNavigationPrimary_openSecondaryDropdowns, "f").size === 0 && !this._hamburgerOpen) {
                __classPrivateFieldGet(this, _RhNavigationPrimary_instances, "m", _RhNavigationPrimary_closeOverlay).call(this);
            }
        }
    }
};
_RhNavigationPrimary_openLinksMenu = async function _RhNavigationPrimary_openLinksMenu() {
    if (!this._linksMenu) {
        await this.updateComplete;
    }
    this._linksMenuOpen = true;
    this.requestUpdate();
    await this.updateComplete;
};
_RhNavigationPrimary_closeLinksMenu = async function _RhNavigationPrimary_closeLinksMenu() {
    if (!this._linksMenu) {
        await this.updateComplete;
    }
    this._linksMenuOpen = false;
    this.requestUpdate();
    await this.updateComplete;
};
RhNavigationPrimary.styles = [styles];
__decorate([
    provide({ context }),
    state()
], RhNavigationPrimary.prototype, "compact", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "linksCompact", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "_overlayOpen", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "_hamburgerOpen", void 0);
__decorate([
    state()
], RhNavigationPrimary.prototype, "_linksMenuOpen", void 0);
__decorate([
    query('#hamburger')
], RhNavigationPrimary.prototype, "_hamburger", void 0);
__decorate([
    query('#links-menu')
], RhNavigationPrimary.prototype, "_linksMenu", void 0);
__decorate([
    query('#hamburger summary')
], RhNavigationPrimary.prototype, "_hamburgerSummary", void 0);
__decorate([
    query('#links-menu summary')
], RhNavigationPrimary.prototype, "_linksMenuSummary", void 0);
__decorate([
    query('#title')
], RhNavigationPrimary.prototype, "_title", void 0);
__decorate([
    property({ attribute: 'mobile-toggle-label' })
], RhNavigationPrimary.prototype, "mobileToggleLabel", void 0);
__decorate([
    property({ attribute: 'mobile-links-toggle-label' })
], RhNavigationPrimary.prototype, "mobileLinksToggleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhNavigationPrimary.prototype, "colorPalette", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhNavigationPrimary.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'site-name' })
], RhNavigationPrimary.prototype, "siteName", void 0);
__decorate([
    property({ reflect: true, attribute: 'site-href' })
], RhNavigationPrimary.prototype, "siteHref", void 0);
__decorate([
    property({ attribute: 'logo-href' })
], RhNavigationPrimary.prototype, "logoHref", void 0);
__decorate([
    observes('compact')
], RhNavigationPrimary.prototype, "compactChanged", null);
__decorate([
    observes('linksCompact')
], RhNavigationPrimary.prototype, "linksCompactChanged", null);
RhNavigationPrimary = __decorate([
    customElement('rh-navigation-primary'),
    colorPalettes,
    themable
], RhNavigationPrimary);
export { RhNavigationPrimary };
//# sourceMappingURL=rh-navigation-primary.js.map