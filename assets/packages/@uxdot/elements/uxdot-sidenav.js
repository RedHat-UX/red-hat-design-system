var _UxdotSideNav_instances, _UxdotSideNav_triggerElement, _UxdotSideNav_closeButton, _UxdotSideNav_onTriggerClick, _UxdotSideNav_onClick, _UxdotSideNav_onKeydownCloseButton, _UxdotSideNav_onKeydown, _UxdotSideNav_onKeyup, _UxdotSideNav_onTabKeyup, _UxdotSideNavDropdown_instances, _UxdotSideNavDropdown_onClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{--_padding-start:var(--uxdot-sidenav-padding-start,var(--rh-space-2xl));--_padding-end:var(--uxdot-sidenav-padding-end,var(--rh-space-2xl));--_max-height:100dvh;width:100%;height:var(--_max-height);top:0;z-index:var(--uxdot-sidenav-z-index,5)}:host([open]){display:block!important;position:fixed!important}:host(:not([open])){display:none}[part=close-button]{color:var(--rh-color-text-primary);background-color:initial;border:none;margin:0;padding:var(--rh-space-md);line-height:0!important}#container{position:relative;background-color:var(--rh-color-surface);overflow-y:scroll;width:auto;height:100dvh}#close-button-container{padding-inline:var(--rh-space-md);padding-block:var(--rh-space-lg);max-height:var(--uxdot-masthead-max-height,72px)}#close-button:focus{outline:var(--rh-border-width-md) solid var(--rh-color-border-interactive);border-radius:var(--rh-border-radius-default,3px)}[part=nav]{padding-block:var(--rh-space-lg,16px)}[part=overlay]{display:none;background-color:rgb(from var(---rh-color-gray-90)/var(--rh-opacity-60));position:fixed;top:0;height:100dvh;width:100dvw;z-index:-1}::slotted(ul){padding-inline:0;padding-block:var(--_padding-start) calc(var(--_padding-end) + var(--rh-font-size-body-text-lg)*1.5 + var(--rh-space-lg)*2);list-style:none;margin-block:0!important;height:var(--_max-height);overflow-y:scroll;background-color:var(--rh-color-surface)}:host([open]) [part=overlay]{display:block}@media (min-width:320px){:host{--uxdot-sidenav-width:320px;width:var(--uxdot-sidenav-width);box-shadow:var(--rh-box-shadow-lg)}#container{width:var(--uxdot-sidenav-width,320px)}}@media (min-width:576px){#close-button-container{padding:var(--rh-space-lg)}}@media (min-width:992px){:host{--uxdot-sidenav-z-index:1;position:fixed;top:var(--uxdot-masthead-max-height,72px);height:calc(var(--_max-height) - var(--uxdot-masthead-max-height, 72px));box-shadow:unset}:host(:not([open])){display:block}#close-button-container{display:none}:host([open]) [part=overlay]{display:none}}`;
const itemStyles = css `:host,a{display:block}a{padding:var(--rh-space-lg) var(--rh-space-2xl);font-size:var(--rh-font-size-body-text-lg);text-decoration:none!important;color:var(--rh-color-text-primary)!important;border-inline-start:var(--rh-border-width-lg) solid #0000}a:hover{border-inline-start-color:var(--rh-color-border-subtle)}a.active,a:hover{background:light-dark(var(--rh-color-surface-lighter),var(--rh-color-surface-darker))}a.active{border-inline-start-color:var(--rh-color-accent-brand)}`;
const dropdownStyles = css `:host{z-index:var(--uxdot-sidenav-z-index,102)}`;
const dropdownMenuStyles = css `:host{display:block;padding-inline-start:var(--rh-space-2xl)}`;
const dropdownMenuItemStyles = css `a{font-size:var(--rh-font-size-body-text-md);padding:var(--rh-space-md) 0 var(--rh-space-md) var(--rh-space-lg)}`;
let UxdotSideNav = class UxdotSideNav extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotSideNav_instances.add(this);
        this.open = false;
        _UxdotSideNav_triggerElement.set(this, null);
        _UxdotSideNav_closeButton.set(this, null);
    }
    async connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            const root = this.getRootNode();
            if (this.trigger) {
                __classPrivateFieldSet(this, _UxdotSideNav_triggerElement, root.getElementById(this.trigger), "f");
            }
            __classPrivateFieldGet(this, _UxdotSideNav_triggerElement, "f")?.addEventListener('click', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onTriggerClick).bind(this));
            this.addEventListener('click', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onClick).bind(this));
            this.addEventListener('keydown', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onKeydown).bind(this));
            window.addEventListener('keyup', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onKeyup).bind(this));
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _UxdotSideNav_triggerElement, "f")?.removeEventListener('click', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onTriggerClick).bind(this));
        window.removeEventListener('keyup', __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onKeyup));
    }
    render() {
        return html `
      <div id="container" part="container">
        <div id="close-button-container">
          <button id="close-button"
              part="close-button"
              aria-label="Close dialog"
              @keydown=${__classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onKeydownCloseButton)}
              @click=${this.toggle}>
            <rh-icon set="ui" icon="close" size="lg"></rh-icon>
          </button>
        </div>
        <nav part="nav" aria-label="Main menu">
          <slot></slot>
        </nav>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
    }
    updated() {
        __classPrivateFieldSet(this, _UxdotSideNav_closeButton, this.shadowRoot?.getElementById('close-button') ?? null, "f");
    }
    async toggle(trapFocus = true) {
        this.open = !this.open;
        await this.updateComplete;
        if (trapFocus) {
            if (this.open) {
                __classPrivateFieldGet(this, _UxdotSideNav_closeButton, "f")?.focus();
            }
            else {
                __classPrivateFieldGet(this, _UxdotSideNav_triggerElement, "f")?.focus();
            }
        }
    }
    close(trapFocus = true) {
        if (!this.open) {
            return;
        }
        this.toggle(trapFocus);
    }
};
_UxdotSideNav_triggerElement = new WeakMap();
_UxdotSideNav_closeButton = new WeakMap();
_UxdotSideNav_instances = new WeakSet();
_UxdotSideNav_onTriggerClick = function _UxdotSideNav_onTriggerClick(event) {
    event.preventDefault();
    this.toggle();
};
_UxdotSideNav_onClick = function _UxdotSideNav_onClick(event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
        this.toggle();
    }
};
_UxdotSideNav_onKeydownCloseButton = function _UxdotSideNav_onKeydownCloseButton(event) {
    switch (event.key) {
        case 'Enter':
            event.preventDefault();
            this.toggle();
            return;
    }
};
_UxdotSideNav_onKeydown = function _UxdotSideNav_onKeydown(event) {
    switch (event.key) {
        case 'Escape': {
            if (!this.open) {
                return;
            }
            this.toggle();
            break;
        }
        default:
            break;
    }
};
_UxdotSideNav_onKeyup = function _UxdotSideNav_onKeyup(event) {
    switch (event.key) {
        case 'Tab':
            __classPrivateFieldGet(this, _UxdotSideNav_instances, "m", _UxdotSideNav_onTabKeyup).call(this, event);
            break;
        default:
            break;
    }
};
_UxdotSideNav_onTabKeyup = function _UxdotSideNav_onTabKeyup(event) {
    const { target } = event;
    if (target instanceof Node && !this.contains(target)) {
        this.close(false);
    }
};
UxdotSideNav.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
UxdotSideNav.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], UxdotSideNav.prototype, "open", void 0);
__decorate([
    property()
], UxdotSideNav.prototype, "trigger", void 0);
UxdotSideNav = __decorate([
    customElement('uxdot-sidenav'),
    themable
], UxdotSideNav);
export { UxdotSideNav };
let UxdotSideNavItem = class UxdotSideNavItem extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
    }
    render() {
        const { active } = this;
        return html `
      <a class="${classMap({ active })}" href="${this.href}"><slot></slot></a>
    `;
    }
};
UxdotSideNavItem.styles = [itemStyles];
__decorate([
    property({ type: Boolean, reflect: true })
], UxdotSideNavItem.prototype, "active", void 0);
__decorate([
    property()
], UxdotSideNavItem.prototype, "href", void 0);
UxdotSideNavItem = __decorate([
    customElement('uxdot-sidenav-item')
], UxdotSideNavItem);
export { UxdotSideNavItem };
let UxdotSideNavDropdown = class UxdotSideNavDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotSideNavDropdown_instances.add(this);
        this.expanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            this.addEventListener('click', __classPrivateFieldGet(this, _UxdotSideNavDropdown_instances, "m", _UxdotSideNavDropdown_onClick));
        }
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
};
_UxdotSideNavDropdown_instances = new WeakSet();
_UxdotSideNavDropdown_onClick = async function _UxdotSideNavDropdown_onClick(event) {
    if (!event.composedPath().some(node => node instanceof HTMLAnchorElement)) {
        event.preventDefault();
        this.expanded = !this.expanded;
        this.querySelector('details')?.toggleAttribute('open', this.expanded);
        // trigger change event which evokes the mutation on this.expanded
        this.dispatchEvent(new CustomEvent('expand', {
            bubbles: true,
            composed: true,
            detail: {
                expanded: this.expanded,
                toggle: this,
            },
        }));
    }
};
UxdotSideNavDropdown.styles = [dropdownStyles];
__decorate([
    property({ type: Boolean, reflect: true })
], UxdotSideNavDropdown.prototype, "expanded", void 0);
UxdotSideNavDropdown = __decorate([
    customElement('uxdot-sidenav-dropdown')
], UxdotSideNavDropdown);
export { UxdotSideNavDropdown };
let UxdotSideNavDropdownMenu = class UxdotSideNavDropdownMenu extends LitElement {
    render() {
        return html `
      <slot></slot>
    `;
    }
};
UxdotSideNavDropdownMenu.styles = [dropdownMenuStyles];
UxdotSideNavDropdownMenu = __decorate([
    customElement('uxdot-sidenav-dropdown-menu')
], UxdotSideNavDropdownMenu);
export { UxdotSideNavDropdownMenu };
let UxdotSideNavDropdownMenuItem = class UxdotSideNavDropdownMenuItem extends UxdotSideNavItem {
};
UxdotSideNavDropdownMenuItem.styles = [itemStyles, dropdownMenuItemStyles];
UxdotSideNavDropdownMenuItem = __decorate([
    customElement('uxdot-sidenav-dropdown-menu-item')
], UxdotSideNavDropdownMenuItem);
export { UxdotSideNavDropdownMenuItem };
//# sourceMappingURL=uxdot-sidenav.js.map