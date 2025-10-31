var _RhMenuItem_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { css } from "lit";
const styles = css `:host{display:block;padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);cursor:pointer;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-md,1rem);font-style:normal;font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-code,1.5);background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515))}:host a{text-decoration:none;position:relative;display:inline-block;color:light-dark(var(--rh-color-accent-base-on-light,#06c),var(--rh-color-accent-base-on-dark,#92c5f9))}:host a:after{content:"";position:absolute;bottom:0;left:0;inline-size:100%;height:2px;border-bottom:1px dashed light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-40,#a3a3a3))}:host a:focus{outline:none}.menu-item-label{display:flex;align-items:center;justify-content:flex-start}.menu-item-label ::slotted([slot=icon]){padding-inline-end:var(--rh-space-md,8px)}.menu-item-label #menu-link{inline-size:100%;display:flex;align-items:center;justify-content:space-between}.menu-item-label #menu-link rh-icon{color:var(--rh-color-interactive-secondary-default);fill:var(--rh-color-interactive-secondary-default);padding-inline-start:var(--rh-space-md,8px)}#item{display:flex;align-items:center;justify-content:flex-start}#item ::slotted([slot=icon]){padding-inline-end:var(--rh-space-md,8px)}:host(:focus),:host(:hover){background:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}:host(:focus) a,:host(:hover) a{color:var(--rh-color-interactive-primary-hover)}:host(:focus) a:after,:host(:hover) a:after{border-bottom-color:var(--rh-color-interactive-primary-hover)}:host(:focus){position:relative;box-sizing:border-box;outline:none}:host(:focus):after{content:"";position:absolute;top:50%;left:4px;transform:translateY(-50%);width:calc(100% - 8px);height:calc(100% - 6px);background-color:initial;border:var(--rh-border-width-md,2px) solid light-dark(var(--rh-color-accent-base-on-light,#06c),var(--rh-color-accent-base-on-dark,#92c5f9));border-radius:var(--rh-border-radius-default,3px)}:host(:focus) #item{outline:none}:host([disabled]),:host([disabled]) a{color:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d));cursor:default;pointer-events:none}:host([disabled]) a:after{border-bottom:1px dashed light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-gray-60,#4d4d4d))}::slotted([slot=description]){font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem)!important;font-style:normal;font-weight:var(--rh-font-weight-heading-regular,400);line-height:21px}.menu-item-content:focus-visible{outline:none}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}`;
/**
 * Menu Dropdown Item
 * @alias Menu Dropdown Item
 */
let RhMenuItem = class RhMenuItem extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Whether the menu item is disabled.
         * Disabled items are not interactive and are visually indicated as such.
         */
        this.disabled = false;
        /**
         * Specifies the destination URL for the menu item.
         * If specified, the menu item behaves as a hyperlink.
         */
        this.href = '';
        /**
         * Whether the link should open externally.
         * When true, the link opens in a new browser tab or window
         * and includes appropriate security attributes (`target="_blank"` and `rel="noopener noreferrer"`).
        */
        this.external = false;
        _RhMenuItem_internals.set(this, InternalsController.of(this));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhMenuItem_internals, "f").role = 'menuitem';
        __classPrivateFieldGet(this, _RhMenuItem_internals, "f").ariaDisabled = this.disabled.toString();
    }
    render() {
        const target = this.external ? '_blank' : '_self';
        const rel = this.external ? 'noopener noreferrer' : null;
        const srLabel = this.external ?
            'Link, opens in a new tab'
            : 'Link';
        const label = html `
      <!-- 
        Use this slot to provide the text content inside menu item.
      -->
      <slot></slot>
    `;
        const content = this.href ?
            html `
        <div id="menu-link">
          <a id="item" href="${this.href}" target=${target} rel=${ifDefined(rel)}>
            ${label}
            ${!this.disabled ? html `<span class="visually-hidden">${srLabel}</span>` : ''}
          </a>
          ${this.external && !this.disabled ? html `<rh-icon set="ui" icon="external-link"></rh-icon>` : ''}
        </div>`
            : html `
        <div id="item">
        ${label}
        </div>
      `;
        return html `
      <div aria-disabled="${this.disabled}" class="menu-item-content">
        <div class="menu-item-label">
          <!-- 
            Slot for an icon displayed alongside the menu item.
            The icon will appear to the left of the menu item text in left-to-right (LTR) layouts.
          -->
          <slot name="icon"></slot>
          ${content}
        </div>
        <!-- 
          Use this slot to provide the description inside menu item.
        -->
        <slot id="description" name="description"></slot>
      </div>
    `;
    }
};
_RhMenuItem_internals = new WeakMap();
RhMenuItem.styles = [styles];
RhMenuItem.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
};
__decorate([
    property({ type: Boolean, reflect: true })
], RhMenuItem.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], RhMenuItem.prototype, "href", void 0);
__decorate([
    property({ type: Boolean })
], RhMenuItem.prototype, "external", void 0);
RhMenuItem = __decorate([
    customElement('rh-menu-item')
], RhMenuItem);
export { RhMenuItem };
//# sourceMappingURL=rh-menu-item.js.map