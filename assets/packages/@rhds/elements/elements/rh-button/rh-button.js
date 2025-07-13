var _RhButton_instances, _RhButton_hasIcon_get, _RhButton_internals, _RhButton_onClick, _RhButton_renderIcon;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;height:max-content}[hidden]{display:none!important}[part=icon]{display:none;pointer-events:none}rh-icon{color:currentcolor}button{cursor:pointer;position:relative;font-family:inherit;border-width:0;border-style:solid;border-radius:var(--rh-border-radius-default,3px);color:var(--_color);background-color:var(--_background-color);font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5);padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-lg,16px);outline-offset:var(--rh-length-4xs,1px)}button:active{--_color:var(--_active-color);--_background-color:var(--_active-background-color);--_border-width:var(--_active-border-width)}button:after{position:absolute;inset:0;content:"";border-style:solid;border-color:var(--_border-color);border-width:var(--_border-width);border-radius:var(--rh-border-radius-default,3px)}button:focus{--_color:var(--_focus-color);--_background-color:var(--_focus-background-color);--_border-width:var(--_focus-border-width);outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default)}button:focus:after{border-width:var(--_border-width,var(--rh-border-width-md,2px))}button.hasIcon{position:relative;display:flex;gap:var(--rh-space-sm,6px);align-items:center;padding-inline-start:calc(var(--rh-space-lg, 16px)*.75)}button.hasIcon [part=icon]{display:contents}button.primary{--_color:var(--rh-color-text-primary-on-dark,#fff);--_background-color:var(--rh-color-interactive-primary-default-on-light,#06c);--_border-color:#0000;--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-text-primary-on-dark,#fff);--_active-background-color:var(--rh-color-interactive-primary-hover-on-light,#036);--_active-border-width:var(--rh-border-width-sm,1px);--_focus-color:var(--rh-color-text-primary-on-dark,#fff);--_focus-background-color:var(--rh-color-interactive-primary-hover-on-light,#036);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:var(--rh-color-text-primary-on-dark,#fff);--_hover-background-color:var(--rh-color-interactive-primary-hover-on-light,#036);--_hover-border-width:var(--rh-border-width-sm,1px)}button.danger{--_color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_background-color:light-dark(#c9190b,#fe5142);--_border-color:#0000;--_border-width:var(--rh-border-width-sm,1px);--_active-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_active-background-color:light-dark(#a30000,#ff7468);--_active-border-color:#0000;--_focus-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_focus-background-color:light-dark(#a30000,#ff7468);--_focus-border-color:#0000;--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));--_hover-background-color:light-dark(#a30000,#ff7468);--_hover-border-color:#0000}button.secondary{--_color:var(--rh-color-interactive-primary-default);--_background-color:#0000;--_border-color:var(--rh-color-interactive-primary-default);--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-interactive-primary-default);--_active-background-color:#0000;--_active-border-color:var(--rh-color-interactive-primary-default);--_active-border-width:var(--rh-border-width-md,2px);--_focus-color:var(--rh-color-interactive-primary-default);--_focus-background-color:#0000;--_focus-border-color:var(--rh-color-interactive-primary-default);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:var(--rh-color-interactive-primary-default);--_hover-background-color:#0000;--_hover-border-color:var(--rh-color-interactive-primary-default);--_hover-border-width:var(--rh-border-width-md,2px)}button.secondary.danger{--_color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-30,#f9a8a8));--_background-color:#0000;--_border-color:light-dark(#c9190b,#fe5142);--_active-color:light-dark(#c9190b,#fe5142);--_active-background-color:#0000;--_active-border-color:#0000;--_focus-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-30,#f9a8a8));--_focus-background-color:#0000;--_focus-border-color:#0000;--_hover-color:light-dark(#c9190b,#fe5142);--_hover-background-color:#0000;--_hover-border-color:#0000}button.tertiary{--_color:var(--rh-color-text-primary);--_background-color:#0000;--_border-color:var(--rh-color-border-strong);--_border-width:var(--rh-border-width-sm,1px);--_active-color:var(--rh-color-text-primary);--_active-background-color:#0000;--_active-border-color:var(--rh-color-border-strong);--_active-border-width:var(--rh-border-width-md,2px);--_focus-color:var(--rh-color-text-primary);--_focus-background-color:#0000;--_focus-border-color:var(--rh-color-border-strong);--_focus-border-width:var(--rh-border-width-md,2px);--_hover-color:var(--rh-color-text-primary);--_hover-background-color:#0000;--_hover-border-color:var(--rh-color-border-strong);--_hover-border-width:var(--rh-border-width-md,2px)}button.link{--_color:var(--rh-color-interactive-primary-default);--_background-color:#0000;--_border-color:#0000;--_active-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_active-background-color:#0000;--_focus-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_focus-background-color:#0000;--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-color:light-dark(var(--rh-color-blue-70,#036),var(--rh-color-interactive-primary-hover-on-dark,#b9dafc));--_hover-background-color:#0000;display:inline-flex}button.link rh-icon{order:1}button.close{--_color:var(--rh-color-text-secondary);--_background-color:#0000;--_active-color:var(--rh-color-icon-secondary);--_active-background-color:#0000;--_focus-color:var(--rh-color-icon-secondary);--_focus-background-color:#0000;--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-color:var(--rh-color-icon-secondary);--_hover-background-color:#0000;width:var(--rh-length-lg,16px);aspect-ratio:1}button.close rh-icon{color:inherit}button.play{--_color:var(--rh-color-icon-secondary-on-dark);--_background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-50,50%)),rgba(from white r g b/var(--rh-opacity-50,50%)));--_active-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));--_focus-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));--_focus-outline-color:var(--rh-color-interactive-primary-default);--_hover-background-color:light-dark(rgba(from var(--rh-color-gray-90,#1f1f1f) r g b/var(--rh-opacity-80,80%)),rgba(from white r g b/var(--rh-opacity-80,80%)));border-radius:100%;width:var(--rh-length-4xl,64px)}button.play [part=icon]{display:contents}button.play rh-icon{translate:10%;color:var(--rh-color-icon-secondary-on-dark,#fff)}button:is(.play,.close){--_border-color:#0000;aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;padding:0}button:is(.play,.close) #text{display:inline;position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}button:hover{--_color:var(--_hover-color);--_background-color:var(--_hover-background-color);--_border-width:var(--_hover-border-width)}button>span{display:contents}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) #container,:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{pointer-events:none;cursor:default}[part=icon] ::slotted(*){width:16px;max-width:16px;height:16px;max-height:16px}:host(:is([variant=play i],[variant=close i])){line-height:0}:host(:disabled) button,:host(:disabled[danger]) button,:host(:disabled[variant=link]) button,button[disabled]{pointer-events:none;cursor:default;--_color:light-dark(var(--rh-color-text-secondary-on-light,#4d4d4d),var(--rh-color-gray-40,#a3a3a3));--_background-color:light-dark(var(--rh-color-surface-light,#e0e0e0),var(--rh-color-surface-dark,#383838))}:host(:disabled) button:after{--_border-color:#0000}:host(:not([disabled])) .hasIcon [part=icon]{cursor:pointer}`;
/**
 * A button is clickable text or an icon that triggers an action on the page or in the background.
 * Depending on the action, content, and hierarchy, a button can be used on its own or grouped with
 * other buttons.
 * @summary Triggers actions on the page or in the background
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon - Contains the button's icon or state indicator, e.g. a spinner.
 * @slot - Contains button text
 */
let RhButton = class RhButton extends LitElement {
    constructor() {
        super(...arguments);
        _RhButton_instances.add(this);
        /** Disables the button */
        this.disabled = false;
        /**
         * Changes the style of the button.
         * - Primary: Used for the most important call to action on a page. Try to
         *   limit primary buttons to one per page.
         * - Secondary: Use secondary buttons for general actions on a page, that
         *   don’t require as much emphasis as primary button actions. For example,
         *   you can use secondary buttons where there are multiple actions, like in
         *   toolbars or data lists.
         * - Tertiary: Tertiary buttons are flexible and can be used as needed.
         */
        this.variant = 'primary';
        /**
         * Use danger buttons for actions a user can take that are potentially
         * destructive or difficult/impossible to undo, like deleting or removing
         * user data.
         */
        this.danger = false;
        _RhButton_internals.set(this, InternalsController.of(this));
    }
    willUpdate() {
        if (__classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get)) {
            import('@rhds/elements/rh-icon/rh-icon.js');
        }
    }
    render() {
        const { danger, variant } = this;
        const hasIcon = __classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get);
        return html `
      <button aria-label="${ifDefined(this.label)}"
              class="${classMap({
            danger,
            hasIcon,
            [variant]: true,
        })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_onClick)}"
              aria-disabled=${String(!!this.disabled || !!__classPrivateFieldGet(this, _RhButton_internals, "f").formDisabled)}>
        <span aria-hidden="true">
          <slot id="icon"
                part="icon"
                name="icon">${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_renderIcon).call(this)}</slot>
        </span>
        <span aria-hidden=${String(!!this.label)}><slot id="text" ></slot></span>
      </button>
    `;
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    focus() {
        this._button?.focus();
    }
};
_RhButton_internals = new WeakMap();
_RhButton_instances = new WeakSet();
_RhButton_hasIcon_get = function _RhButton_hasIcon_get() {
    return this.variant === 'play' || this.variant === 'close' || !!this.icon;
};
_RhButton_onClick = function _RhButton_onClick() {
    switch (this.type) {
        case 'reset':
            return __classPrivateFieldGet(this, _RhButton_internals, "f").reset();
        default:
            return __classPrivateFieldGet(this, _RhButton_internals, "f").submit();
    }
};
_RhButton_renderIcon = function _RhButton_renderIcon() {
    switch (this.variant?.toLowerCase()) {
        case 'close':
            return html `<rh-icon set="microns" icon="close"></rh-icon>`;
        case 'play':
            return html `<rh-icon set="ui" icon="play-fill"></rh-icon>`;
        default:
            return html `<rh-icon set="${this.iconSet ?? 'ui'}" icon="${this.icon}"></rh-icon>`;
    }
};
RhButton.styles = [styles];
RhButton.formAssociated = true;
RhButton.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ reflect: true, type: Boolean })
], RhButton.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true })
], RhButton.prototype, "type", void 0);
__decorate([
    property()
], RhButton.prototype, "label", void 0);
__decorate([
    property()
], RhButton.prototype, "value", void 0);
__decorate([
    property()
], RhButton.prototype, "name", void 0);
__decorate([
    property()
], RhButton.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], RhButton.prototype, "iconSet", void 0);
__decorate([
    query('button')
], RhButton.prototype, "_button", void 0);
__decorate([
    property({ reflect: true })
], RhButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhButton.prototype, "danger", void 0);
RhButton = __decorate([
    customElement('rh-button'),
    themable
], RhButton);
export { RhButton };
//# sourceMappingURL=rh-button.js.map