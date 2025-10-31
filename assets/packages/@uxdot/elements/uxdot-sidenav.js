var _UxdotSideNav_instances, _UxdotSideNav_triggerElement, _UxdotSideNav_closeButton, _UxdotSideNav_onTriggerClick, _UxdotSideNav_onClick, _UxdotSideNav_onKeydownCloseButton, _UxdotSideNav_onKeydown, _UxdotSideNav_onKeyup, _UxdotSideNav_onTabKeyup;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{--_padding-start:var(--uxdot-sidenav-padding-start,var(--rh-space-2xl));--_padding-end:var(--uxdot-sidenav-padding-end,var(--rh-space-2xl));--_max-height:100dvh;--_sidenav_width:var(--uxdot-sidenav-width,320px);display:block;inline-size:100%;block-size:var(--_max-height);top:0;z-index:var(--uxdot-sidenav-z-index,5)}:host([open]){display:block!important;position:fixed!important}:host(:not([open])){display:none}[part=close-button]{color:var(--rh-color-text-primary);background-color:initial;border:none;margin:0;padding:var(--rh-space-md);line-height:0!important}#content{padding:var(--rh-space-lg)}#container{position:relative;background-color:var(--rh-color-surface);overflow-y:auto;scrollbar-gutter:stable;inline-size:auto;block-size:100%}#close-button-container{padding-inline:var(--rh-space-md);padding-block:var(--rh-space-lg);max-block-size:var(--uxdot-masthead-max-height,72px)}#close-button:focus{outline:var(--rh-border-width-md) solid var(--rh-color-border-interactive);border-radius:var(--rh-border-radius-default,3px)}.visually-hidden{block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}[part=overlay]{display:none;background-color:rgb(from var(---rh-color-gray-90)/var(--rh-opacity-60));position:fixed;inset-block-start:0;block-size:100dvh;inline-size:100dvw;z-index:-1}:host([open]) [part=overlay]{display:block}@media (min-width:320px){:host{inline-size:var(--_sidenav_width);box-shadow:var(--rh-box-shadow-lg)}}@media (min-width:576px){#close-button-container{padding-block:calc(var(--rh-space-lg) + var(--rh-space-xs)) var(--rh-space-lg);padding-inline:var(--rh-space-lg)}}@media (min-width:992px){:host{--uxdot-sidenav-z-index:1;position:fixed;inset-block-start:var(--uxdot-masthead-max-height,72px);block-size:calc(var(--_max-height) - var(--uxdot-masthead-max-height, 72px));border-inline-end:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);box-shadow:unset}:host(:not([open])){display:block}#close-button-container{display:none}:host([open]) [part=overlay]{display:none}}`;
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
        <div id="content">
          <slot></slot>
        </div>
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
//# sourceMappingURL=uxdot-sidenav.js.map