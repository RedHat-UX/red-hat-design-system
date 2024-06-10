var _RhNavigationSecondary_instances, _a, _RhNavigationSecondary_logger, _RhNavigationSecondary_logoCopy, _RhNavigationSecondary_label, _RhNavigationSecondary_dir, _RhNavigationSecondary_compact, _RhNavigationSecondary_tabindex, _RhNavigationSecondary_screenSize, _RhNavigationSecondary_onExpandRequest, _RhNavigationSecondary_onFocusout, _RhNavigationSecondary_onOverlayClick, _RhNavigationSecondary_onKeydown, _RhNavigationSecondary_onTabEvent, _RhNavigationSecondary_getDropdownIndex, _RhNavigationSecondary_dropdownByIndex, _RhNavigationSecondary_expand, _RhNavigationSecondary_allDropdowns, _RhNavigationSecondary_closeDropdown, _RhNavigationSecondary_openDropdown, _RhNavigationSecondary_onOverlayChange, _RhNavigationSecondary_upgradeAccessibility, _RhNavigationSecondary_toggleMobileMenu, _RhSecondaryNav_logger;
var RhNavigationSecondary_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators/state.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import './rh-navigation-secondary-menu-section.js';
import './rh-navigation-secondary-overlay.js';
import { RhNavigationSecondaryDropdown, SecondaryNavDropdownExpandEvent, } from './rh-navigation-secondary-dropdown.js';
import { DirController } from '../../lib/DirController.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
export class SecondaryNavOverlayChangeEvent extends ComposedEvent {
    constructor(open, toggle) {
        super('overlay-change');
        this.open = open;
        this.toggle = toggle;
    }
}
import { css } from "lit";
const styles = css `:host{--_chevron-size:calc(var(--rh-font-size-body-text-md, 1rem) * 0.35);--_chevron-thickness:calc(var(--rh-font-size-body-text-md, 1rem) * 0.125);--_chevron-up:45deg;--_chevron-down:-135deg;--_chevron-correction-x:calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);--_chevron-correction-y:calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);--_chevron-color:var(--_context-text);--_chevron-transform-collapsed:rotate(var(--_chevron-up)) translate(var(--_chevron-correction-x), var(--_chevron-correction-x));--_chevron-transform-expanded:rotate(var(--_chevron-down)) translate(var(--_chevron-correction-y), var(--_chevron-correction-y));--_button-font-color:var(--_context-text);--_nav-max-height:var(--_max-height, max-content);--_nav-min-height:var(--_min-height, 80px);--_current-active-child-border-color:var(--rh-color-brand-red-on-light, #ee0000);z-index:var(--rh-navigation-secondary-z-index,102)}:host([color-palette=dark]){--_current-active-child-border-color:var(--rh-color-brand-red-on-dark, #ee0000)}nav{z-index:var(--rh-navigation-secondary-z-index,102)}nav.rtl{--_chevron-transform-collapsed:rotate(calc(-1 * var(--_chevron-up))) translate(calc(1 * var(--_chevron-correction-y)), var(--_chevron-correction-y));--_chevron-transform-expanded:rotate(calc(-1 * var(--_chevron-down))) translate(calc(1 * var(--_chevron-correction-x)), var(--_chevron-correction-x))}#container{display:grid;position:absolute;width:100%;z-index:var(--rh-navigation-secondary-z-index,102);background-color:var(--_context-background-color);gap:0 var(--rh-space-lg,16px);grid-template-rows:minmax(var(--_nav-min-height),var(--_nav-max-height)) max-content max-content;grid-template-columns:1fr max-content;grid-template-areas:"logo menu" "main main";height:fit-content;min-height:var(--_min-height);max-height:100vh;overflow-y:auto}rh-surface{grid-area:main;display:flex;flex-direction:column;height:100%;width:100%}::slotted([slot=cta]),::slotted([slot=nav]){grid-area:unset!important}#container.expanded ::slotted([slot=cta]),#container.expanded ::slotted([slot=nav]){display:flex!important}#container.expanded ::slotted([slot=nav]){list-style:none;flex-direction:column;padding:2rem 1rem 0;padding:var(--rh-space-2xl,32px) var(--rh-space-lg,16px) 0 var(--rh-space-lg,16px);margin:0!important}#container.expanded ::slotted([slot=cta]){padding:2rem 1rem}button{grid-area:menu;border:none;display:flex;height:100%;align-items:center;font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-md, 1rem);padding:var(--rh-space-lg,16px);border-block-start:var(--rh-border-width-lg,3px) solid transparent;margin-inline-end:var(--rh-space-lg,16px);color:var(--_button-font-color);background-color:var(--rh-color-surface-lighter,#f2f2f2);gap:var(--rh-space-md,8px)}button:hover{border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000)}button:after{box-sizing:content-box!important;content:"";display:block;width:var(--_chevron-size);height:var(--_chevron-size);border-inline-end:var(--_chevron-thickness) solid var(--_chevron-color);border-block-end:var(--_chevron-thickness) solid var(--_chevron-color);transform:var(--_chevron-transform-collapsed)}button[aria-expanded=true]:after{transform:var(--_chevron-transform-expanded)}button:focus{border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000)}:host([color-palette=dark]) button{background-color:var(--_context-background-color)}:host([color-palette=dark]) button[aria-expanded=true],button:active,button[aria-expanded=true]{--_chevron-color:var(--rh-color-text-primary-on-light, #151515);color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--rh-color-surface-lightest,#fff);border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000);border-block-end:none}:host([color-palette=dark]) button:active{color:var(--rh-color-text-primary-on-dark,#fff)}:host([color-palette=dark]) button[aria-expanded=true]:active{color:var(--rh-color-text-primary-on-light,#151515)}@media screen and (min-width:768px){button{margin-inline-end:var(--rh-space-2xl,32px)}#container.expanded ::slotted([slot=nav]){padding:var(--rh-space-2xl,32px) var(--rh-space-2xl,32px) 0!important}#container.expanded ::slotted([slot=cta]){padding:var(--rh-space-2xl,32px)!important}}@media screen and (min-width:992px){:host{--_min-height:86px}#container{grid-template-areas:"logo main";grid-template-rows:auto;grid-template-columns:max-content 1fr;height:100%;max-height:initial;overflow-y:initial}rh-surface{flex-direction:row;justify-content:space-between}#container.expanded ::slotted([slot=nav]){max-height:calc(100vh - var(--_nav-min-height))}button{display:none}}`;
/* TODO: Abstract this out to a shareable function, should RTI handle something similar? */
function focusableChildElements(parent) {
    return parent.querySelectorAll(`a,
                                  button:not([disabled]),
                                  input:not([disabled]),
                                  select:not([disabled]),
                                  textarea:not([disabled]),
                                  [tabindex]:not([tabindex="-1"]):not([disabled]),
                                  details:not([disabled]),
                                  summary:not(:disabled)`);
}
/**
 * The Secondary navigation is used to connect a series of pages together. It displays wayfinding content and links relevant to the page it is placed on. It should be used in conjunction with the [primary navigation](../navigation-primary).
 *
 * @summary Propagates related content across a series of pages
 * @slot logo           - Logo added to the main nav bar, expects `<a>Text</a> | <a><svg/></a> | <a><img/></a>` element
 * @slot nav            - Navigation list added to the main nav bar, expects `<ul>` element
 * @slot cta            - Nav bar level CTA, expects `<rh-cta>` element
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 * @csspart nav         - container, `<nav>` element
 * @csspart container   - container, `<div>` element
 * @csspart cta         - container, `<div>` element
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 * @cssprop {<integer>} --rh-navigation-secondary-z-index - z-index of the navigation-secondary {@default `102`}
 * @cssprop {<integer>} --rh-navigation-secondary-overlay-z-index - z-index of the navigation-secondary-overlay {@default `-1`}
 */
let RhNavigationSecondary = RhNavigationSecondary_1 = _a = class RhNavigationSecondary extends LitElement {
    constructor() {
        super(...arguments);
        _RhNavigationSecondary_instances.add(this);
        /**
         * Color palette darker | lighter (default: lighter)
         */
        this.colorPalette = 'lighter';
        _RhNavigationSecondary_logger.set(this, new Logger(this));
        _RhNavigationSecondary_logoCopy.set(this, null);
        /**
         * The accessible label for the <nav> element
         */
        _RhNavigationSecondary_label.set(this, 'secondary');
        /** Is the element in an RTL context? */
        _RhNavigationSecondary_dir.set(this, new DirController(this));
        /** Compact mode  */
        _RhNavigationSecondary_compact.set(this, false);
        _RhNavigationSecondary_tabindex.set(this, new RovingTabindexController(this, {
            getItems: () => this._nav?.flatMap(slotted => Array.from(slotted.querySelectorAll(`:is(rh-navigation-secondary-dropdown,
                                                                  rh-secondary-nav-dropdown) > a,
                                                              [slot="nav"] > li > a`))) ?? [],
        }));
        /**
         * `mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
         * a focusout event occurs, or on an overlay click event.  It also switches state
         * when the viewport changes breakpoints depending on if a dropdown is open or not.
         */
        this.mobileMenuExpanded = false;
        this.overlayOpen = false;
        /**
         * ScreenSizeController effects callback to set #compact
         * When viewport size changes,
         *  - If viewport is mobile, open mobile menu
         *  - otherwise, close mobile menu and close overlay
         */
        _RhNavigationSecondary_screenSize.set(this, new ScreenSizeController(this, 'md', {
            onChange: matches => {
                __classPrivateFieldSet(this, _RhNavigationSecondary_compact, !matches, "f");
                const dropdownsOpen = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_allDropdowns).call(this).some(x => x.expanded);
                this.mobileMenuExpanded = __classPrivateFieldGet(this, _RhNavigationSecondary_compact, "f") && dropdownsOpen;
                this.overlayOpen = dropdownsOpen;
            },
        }));
    }
    /**
     * Checks if passed in element is a RhNavigationSecondaryDropdown
     * @param element possibly an rh-navigation-secondary-dropdown
     */
    static isDropdown(element) {
        return element instanceof RhNavigationSecondaryDropdown;
    }
    async connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldSet(this, _RhNavigationSecondary_compact, !__classPrivateFieldGet(this, _RhNavigationSecondary_screenSize, "f").matches.has('md'), "f");
        this.addEventListener('expand-request', __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onExpandRequest));
        this.addEventListener('overlay-change', __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onOverlayChange));
        this.addEventListener('focusout', __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onFocusout));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onKeydown));
        __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_upgradeAccessibility).call(this);
    }
    render() {
        const expanded = this.mobileMenuExpanded;
        const rtl = __classPrivateFieldGet(this, _RhNavigationSecondary_dir, "f").dir === 'rtl';
        // CTA must always be 'lightest' on mobile screens
        const dropdownPalette = __classPrivateFieldGet(this, _RhNavigationSecondary_compact, "f") ? 'lightest' : this.colorPalette;
        return html `
      <nav part="nav"
           class="${classMap({ compact: __classPrivateFieldGet(this, _RhNavigationSecondary_compact, "f"), rtl })}"
           aria-label="${__classPrivateFieldGet(this, _RhNavigationSecondary_label, "f")}">
        ${__classPrivateFieldGet(this, _RhNavigationSecondary_logoCopy, "f")}
        <div id="container" part="container" class="${classMap({ expanded })}">
          <slot name="logo" id="logo"></slot>
          <button aria-controls="container"
                  aria-expanded="${String(expanded)}"
                  @click="${__classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_toggleMobileMenu)}"><slot name="mobile-menu">Menu</slot></button>
          <rh-surface color-palette="${dropdownPalette}">
            <slot name="nav" @slotchange="${() => __classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").updateItems()}"></slot>
            <div id="cta" part="cta">
              <slot name="cta"></slot>
            </div>
          </rh-surface>
        </div>
      </nav>
      <rh-navigation-secondary-overlay
          .open="${this.overlayOpen}"
          @click="${__classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onOverlayClick)}"
      ></rh-navigation-secondary-overlay>
    `;
    }
    /**
     * Opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     * @param index - index of the dropdown to open
     */
    open(index) {
        if (index != null) {
            const dropdown = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_dropdownByIndex).call(this, index);
            if (dropdown && RhNavigationSecondary_1.isDropdown(dropdown)) {
                this.close();
                __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_expand).call(this, index);
                dropdown?.querySelector('a')?.focus();
                this.overlayOpen = true;
            }
        }
    }
    /**
     * Closes all open dropdowns
     */
    close() {
        __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_allDropdowns).call(this)
            .forEach(dropdown => __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_closeDropdown).call(this, dropdown));
    }
};
_RhNavigationSecondary_logger = new WeakMap();
_RhNavigationSecondary_logoCopy = new WeakMap();
_RhNavigationSecondary_label = new WeakMap();
_RhNavigationSecondary_dir = new WeakMap();
_RhNavigationSecondary_compact = new WeakMap();
_RhNavigationSecondary_tabindex = new WeakMap();
_RhNavigationSecondary_screenSize = new WeakMap();
_RhNavigationSecondary_instances = new WeakSet();
_RhNavigationSecondary_onExpandRequest = function _RhNavigationSecondary_onExpandRequest(event) {
    if (event instanceof SecondaryNavDropdownExpandEvent) {
        const index = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_getDropdownIndex).call(this, event.target);
        if (index === null || index === undefined) {
            return;
        }
        this.close();
        if (event.expanded) {
            __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_expand).call(this, index);
        }
        if (__classPrivateFieldGet(this, _RhNavigationSecondary_screenSize, "f").matches.has('md')) {
            this.dispatchEvent(new SecondaryNavOverlayChangeEvent(event.expanded, event.toggle));
        }
    }
};
_RhNavigationSecondary_onFocusout = function _RhNavigationSecondary_onFocusout(event) {
    const target = event.relatedTarget;
    if (target?.closest('rh-navigation-secondary, rh-secondary-nav') === this || target === null) {
        // if the focus is still inside the rh-navigation-secondary exit
        return;
    }
    else {
        if (__classPrivateFieldGet(this, _RhNavigationSecondary_screenSize, "f").matches.has('md')) {
            this.mobileMenuExpanded = false;
        }
        this.close();
        this.overlayOpen = false;
    }
};
_RhNavigationSecondary_onOverlayClick = function _RhNavigationSecondary_onOverlayClick() {
    this.close();
    this.overlayOpen = false;
    if (!__classPrivateFieldGet(this, _RhNavigationSecondary_screenSize, "f").matches.has('md')) {
        this.mobileMenuExpanded = false;
    }
};
_RhNavigationSecondary_onKeydown = function _RhNavigationSecondary_onKeydown(event) {
    switch (event.key) {
        case 'Escape': {
            if (!__classPrivateFieldGet(this, _RhNavigationSecondary_screenSize, "f").matches.has('md')) {
                this.mobileMenuExpanded = false;
                this.shadowRoot?.querySelector('button')?.focus?.();
            }
            else {
                __classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").activeItem?.focus();
            }
            this.close();
            this.overlayOpen = false;
            break;
        }
        case 'Tab':
            __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_onTabEvent).call(this, event);
            break;
        default:
            break;
    }
};
_RhNavigationSecondary_onTabEvent = function _RhNavigationSecondary_onTabEvent(event) {
    // target is the element we are leaving with tab press
    const target = event.target;
    // get target parent dropdown
    const dropdowns = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_allDropdowns).call(this);
    const dropdownParent = dropdowns.find(dropdown => dropdown.contains(target));
    if (!dropdownParent) {
        return;
    }
    const focusableChildren = focusableChildElements(dropdownParent);
    if (!focusableChildren) {
        return;
    }
    if (event.shiftKey) {
        const firstFocusable = focusableChildren[0] === target;
        if (!firstFocusable) {
            return;
        }
        else {
            this.close();
            this.overlayOpen = false;
        }
    }
    else {
        // is the target the last focusableChildren element in the dropdown
        const lastFocusable = focusableChildren[focusableChildren.length - 1] === target;
        if (!lastFocusable) {
            return;
        }
        event.preventDefault();
        this.close();
        this.overlayOpen = false;
        __classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").setActiveItem(__classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").nextItem);
        __classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").activeItem?.focus();
    }
};
_RhNavigationSecondary_getDropdownIndex = function _RhNavigationSecondary_getDropdownIndex(element) {
    if (!RhNavigationSecondary_1.isDropdown(element)) {
        __classPrivateFieldGet(this, _RhNavigationSecondary_logger, "f").warn('The getDropdownIndex method expects to receive a dropdown element.');
        return;
    }
    const dropdowns = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_allDropdowns).call(this);
    const index = dropdowns.findIndex(dropdown => dropdown.id === element.id);
    return index;
};
_RhNavigationSecondary_dropdownByIndex = function _RhNavigationSecondary_dropdownByIndex(index) {
    const dropdowns = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_allDropdowns).call(this);
    if (dropdowns[index] === undefined) {
        __classPrivateFieldGet(this, _RhNavigationSecondary_logger, "f").error('This dropdown index does not exist.');
        return;
    }
    return dropdowns[index];
};
_RhNavigationSecondary_expand = function _RhNavigationSecondary_expand(index) {
    if (index == null) {
        return;
    }
    const dropdown = __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_dropdownByIndex).call(this, index);
    if (dropdown && RhNavigationSecondary_1.isDropdown(dropdown)) {
        const link = dropdown.querySelector('a');
        if (link) {
            __classPrivateFieldGet(this, _RhNavigationSecondary_tabindex, "f").setActiveItem(link);
        }
        __classPrivateFieldGet(this, _RhNavigationSecondary_instances, "m", _RhNavigationSecondary_openDropdown).call(this, dropdown);
    }
};
_RhNavigationSecondary_allDropdowns = function _RhNavigationSecondary_allDropdowns() {
    return Array.from(this.querySelectorAll('rh-navigation-secondary-dropdown, rh-secondary-nav-dropdown'));
};
_RhNavigationSecondary_closeDropdown = function _RhNavigationSecondary_closeDropdown(dropdown) {
    if (dropdown.expanded === false) {
        return;
    }
    dropdown.expanded = false;
};
_RhNavigationSecondary_openDropdown = function _RhNavigationSecondary_openDropdown(dropdown) {
    if (dropdown.expanded === true) {
        return;
    }
    dropdown.expanded = true;
};
_RhNavigationSecondary_onOverlayChange = function _RhNavigationSecondary_onOverlayChange(event) {
    if (event instanceof SecondaryNavOverlayChangeEvent) {
        if (this.contains(event.toggle)) {
            this.overlayOpen = event.open;
        }
    }
};
_RhNavigationSecondary_upgradeAccessibility = function _RhNavigationSecondary_upgradeAccessibility() {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    // remove aria-labelledby from slotted `<ul>` on upgrade
    this.querySelector(':is([slot="nav"]):is(ul)')?.removeAttribute('aria-labelledby');
    // transfer the aria-label to the shadow <nav>
    if (this.hasAttribute('aria-label')) {
        __classPrivateFieldSet(this, _RhNavigationSecondary_label, this.getAttribute('aria-label') ?? 'secondary', "f");
        this.removeAttribute('aria-label');
    }
};
_RhNavigationSecondary_toggleMobileMenu = function _RhNavigationSecondary_toggleMobileMenu() {
    this.mobileMenuExpanded = !this.mobileMenuExpanded;
    this.dispatchEvent(new SecondaryNavOverlayChangeEvent(this.mobileMenuExpanded, this));
};
RhNavigationSecondary.styles = [styles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhNavigationSecondary.prototype, "colorPalette", void 0);
__decorate([
    queryAssignedElements({ slot: 'nav' })
], RhNavigationSecondary.prototype, "_nav", void 0);
__decorate([
    state()
], RhNavigationSecondary.prototype, "mobileMenuExpanded", void 0);
__decorate([
    state()
], RhNavigationSecondary.prototype, "overlayOpen", void 0);
RhNavigationSecondary = RhNavigationSecondary_1 = __decorate([
    customElement('rh-navigation-secondary')
], RhNavigationSecondary);
export { RhNavigationSecondary };
let RhSecondaryNav = class RhSecondaryNav extends RhNavigationSecondary {
    constructor() {
        super();
        _RhSecondaryNav_logger.set(this, new Logger(this));
        __classPrivateFieldGet(this, _RhSecondaryNav_logger, "f").warn('rh-secondary-nav is deprecated. Use rh-navigation-secondary instead.');
    }
};
_RhSecondaryNav_logger = new WeakMap();
RhSecondaryNav = __decorate([
    customElement('rh-secondary-nav')
], RhSecondaryNav);
//# sourceMappingURL=rh-navigation-secondary.js.map