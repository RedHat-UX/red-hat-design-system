var _RhButton_instances, _RhButton_hasIcon_get, _RhButton_internals, _RhButton_onClick, _RhButton_renderDefaultIcon;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;height:max-content}:host([hidden]){display:none!important}[hidden]{display:none!important}button{cursor:pointer;position:relative;font-family:inherit;border-width:0;border-style:solid;border-radius:var(--rh-border-radius-default,3px);color:var(--_color);background-color:var(--_background-color);font-size:var(--rh-font-size-body-text-md, 1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text, 1.5);padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-lg,16px);outline-offset:var(--rh-length-4xs,1px);--_color:var(--_default-color, var(--_primary-color));--_background-color:var(--_default-background-color, var(--_primary-background-color));--_border-color:var(--_default-border-color, var(--_primary-border-color));--_border-width:var(--_default-border-width, var(--_primary-border-width))}button:after{position:absolute;inset:0;content:"";border-style:solid;border-color:var(--_border-color);border-width:var(--_border-width);border-radius:var(--rh-border-radius-default,3px)}button>span{display:contents}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) #container,:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{pointer-events:none;cursor:default}[part=icon]{display:none;pointer-events:none}.hasIcon{position:relative;display:flex;align-items:center}.hasIcon [part=icon]{display:inline-flex;align-items:center;position:absolute;width:16px}[part=icon] ::slotted(*){width:16px;max-width:16px;height:16px;max-height:16px}.hasIcon button{position:absolute;inset:0}.light{--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_primary-active-border-width:var(--rh-border-width-sm, 1px);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_primary-focus-border-width:var(--rh-border-width-md, 2px);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_primary-hover-border-width:var(--rh-border-width-sm, 1px);--_danger-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-background-color:#c9190b;--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-active-background-color:#a30000;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-focus-background-color:#a30000;--_danger-focus-border-color:transparent;--_danger-focus-border-width:var(--rh-border-width-md, 2px);--_danger-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-hover-background-color:#a30000;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-danger-color:var(--rh-color-red-60, #a60000);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-background-color:transparent;--_link-active-color:var(--rh-color-blue-70, #003366);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-blue-70, #003366);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-hover-color:var(--rh-color-blue-70, #003366);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_close-background-color:transparent;--_close-active-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-active-background-color:transparent;--_close-focus-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_close-hover-color:var(--rh-color-icon-secondary-on-light, #151515);--_close-hover-background-color:transparent;--_gray-90-rgb:var(--rh-color-gray-90-rgb, 31 31 31);--_play-color:var(--rh-color-icon-secondary-on-dark, #ffffff);--_play-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_play-hover-background-color:rgb(var(--_gray-90-rgb) / var(--rh-opacity-80, 80%))}.dark{--_focus-outline-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #003366);--_danger-color:var(--rh-color-text-primary-on-light, #151515);--_danger-background-color:#fe5142;--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-light, #151515);--_danger-active-background-color:#ff7468;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-light, #151515);--_danger-focus-background-color:#ff7468;--_danger-focus-border-color:transparent;--_danger-hover-color:var(--rh-color-text-primary-on-light, #151515);--_danger-hover-background-color:#ff7468;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-danger-color:var(--rh-color-red-30, #f9a8a8);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_link-background-color:transparent;--_link-active-color:var(--rh-color-interactive-blue-lightest, #b9dafc);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-interactive-blue-lightest, #b9dafc);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_link-hover-color:var(--rh-color-interactive-blue-lightest, #b9dafc);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-dark, #c7c7c7);--_close-background-color:transparent;--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_white-rgb:255 255 255;--_play-color:var(--rh-color-icon-secondary-on-light, #151515);--_play-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-lighter, #92c5f9);--_play-hover-background-color:rgb(var(--_white-rgb) / var(--rh-opacity-80, 80%))}#rhds-container,:host{display:contents}:host([hidden]),[hidden]{display:none!important}rh-icon{color:currentcolor}button:active{--_color:var(--_active-color, var(--_primary-active-color));--_background-color:var(--_active-background-color, var(--_primary-active-background-color));--_border-width:var(var(--_active-border-width), var(--_primary-active-border-width))}button:focus{--_color:var(--_focus-color, var(--_primary-focus-color));--_background-color:var(--_focus-background-color, var(--_primary-focus-background-color));--_border-width:var(--_focus-border-width, var(--_primary-focus-border-width))}button:focus:after{border-width:var(--_border-width,var(--rh-border-width-md,2px))}button:active,button:focus{outline:var(--rh-border-width-md,2px) solid var(--_focus-outline-color,var(--rh-color-interactive-blue-darker,#0066cc))}button:hover{--_color:var(--_hover-color, var(--_primary-hover-color));--_background-color:var(--_hover-background-color, var(--_primary-hover-background-color));--_border-width:var(--_hover-border-width, var(--_primary-hover-border-width))}:host([danger]) button{--_default-color:var(--_danger-color);--_default-background-color:var(--_danger-background-color);--_default-border-color:var(--_danger-border-color);--_active-color:var(--_danger-active-color);--_active-background-color:var(--_danger-active-background-color);--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_danger-focus-color);--_focus-background-color:var(--_danger-focus-background-color);--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-hover-color);--_hover-background-color:var(--_danger-hover-background-color);--_hover-border-color:var(--_danger-hover-border-color)}:host([variant=secondary i]) button{--_default-color:var(--_secondary-color);--_default-background-color:var(--_secondary-background-color);--_default-border-color:var(--_secondary-border-color);--_default-border-width:var(--_secondary-border-width);--_active-color:var(--_secondary-active-color);--_active-background-color:var(--_secondary-active-background-color);--_active-border-color:var(--_secondary-active-border-color);--_active-border-width:var(--_secondary-active-border-width);--_focus-color:var(--_secondary-focus-color);--_focus-background-color:var(--_secondary-focus-background-color);--_focus-border-color:var(--_secondary-focus-border-color);--_hover-color:var(--_secondary-hover-color);--_hover-background-color:var(--_secondary-hover-background-color);--_hover-border-color:var(--_secondary-hover-border-color);--_hover-border-width:var(--_secondary-hover-border-width)}:host([variant=tertiary i]) button{--_default-color:var(--_tertiary-color);--_default-background-color:var(--_tertiary-background-color);--_default-border-color:var(--_tertiary-border-color);--_active-color:var(--_tertiary-active-color);--_active-background-color:var(--_tertiary-active-background-color);--_active-border-color:var(--_tertiary-active-border-color);--_active-border-width:var(--_tertiary-active-border-width);--_focus-color:var(--_tertiary-focus-color);--_focus-background-color:var(--_tertiary-focus-background-color);--_focus-border-color:var(--_tertiary-focus-border-color);--_hover-color:var(--_tertiary-hover-color);--_hover-background-color:var(--_tertiary-hover-background-color);--_hover-border-color:var(--_tertiary-hover-border-color);--_hover-border-width:var(--_tertiary-hover-border-width)}:host([variant=link i]) button{display:inline;--_default-color:var(--_link-color);--_default-background-color:var(--_link-background-color);--_default-border-color:transparent;--_active-color:var(--_link-active-color);--_active-background-color:var(--_link-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_link-focus-color);--_focus-background-color:var(--_link-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_link-focus-outline-color);--_hover-color:var(--_link-hover-color);--_hover-background-color:var(--_link-hover-background-color);--_hover-border-color:transparent}:host([variant=close i]) button{--_default-color:var(--_close-color);--_default-background-color:var(--_close-background-color);--_active-color:var(--_close-active-color);--_active-background-color:var(--_close-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_close-focus-color);--_focus-background-color:var(--_close-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_close-focus-outline-color);--_hover-color:var(--_close-hover-color);--_hover-background-color:transparent;--_hover-border-color:transparent;width:var(--rh-length-lg,16px);aspect-ratio:1}:host([variant=play i]) button{border-radius:100%;width:var(--rh-length-4xl,64px);--_default-color:var(--_play-color);--_default-background-color:var(--_play-background-color);--_default-background-opacity:var(--_play-background-opacity);--_active-color:var(--_play-color);--_active-background-color:var(--_play-active-background-color);--_active-background-opacity:var(--_play-active-background-opacity);--_focus-color:var(--_play-color);--_focus-background-color:var(--_play-focus-background-color);--_focus-background-opacity:var(--_play-focus-background-opacity);--_focus-outline-color:var(--_play-focus-outline-color);--_hover-color:var(--_play-color);--_hover-background-color:var(--_play-hover-background-color);--_hover-background-opacity:var(--_play-hover-background-opacity);--_icon-size:var(--rh-size-icon-02, 24px)}:host(:is([variant=play])) [part=icon]{position:relative;inset-inline-start:3px}:host(:is([variant=play i],[variant=close i])) button{aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;padding:0}:host(:is([variant=play i],[variant=close i])) [part=icon]{display:inline-block;width:var(--_icon-size,var(--rh-size-icon-01,16px));height:var(--_icon-size,var(--rh-size-icon-01,16px))}:host(:is([variant=play i],[variant=close i])) svg{fill:currentcolor;stroke:currentcolor}:host(:is([variant=play i],[variant=close i])) #text{display:inline;position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}:host(:disabled) button,:host(:disabled[danger]) button,:host(:disabled[variant=link]) button,button[disabled]{pointer-events:none;cursor:default;--_color:var(--rh-color-text-secondary-on-light, #4d4d4d);--_background-color:var(--rh-color-surface-light, #e0e0e0)}:host(:disabled) button:after{--_border-color:transparent}:host([variant=secondary i][danger]) button{--_default-color:var(--_secondary-danger-color);--_default-background-color:transparent;--_default-border-color:var(--_danger-background-color);--_active-color:var(--_danger-background-color);--_active-background-color:transparent;--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_secondary-danger-color);--_focus-background-color:transparent;--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-background-color);--_hover-background-color:transparent;--_hover-border-color:var(--_danger-hover-border-color)}:host(:not([disabled])) .hasIcon [part=icon]{cursor:pointer}`;
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
        const variant = this.variant.toLowerCase();
        switch (variant) {
            case 'close':
            case 'play':
                this.icon = variant;
                break;
        }
    }
    render() {
        const { on = 'light' } = this;
        const hasIcon = __classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_hasIcon_get);
        return html `
      <button aria-label="${ifDefined(this.label)}"
              class="${classMap({ hasIcon, [on]: !!on })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_onClick)}"
              ?disabled="${this.disabled || __classPrivateFieldGet(this, _RhButton_internals, "f").formDisabled}">
        <span aria-hidden="true">
          <slot id="icon" part="icon" name="icon">${__classPrivateFieldGet(this, _RhButton_instances, "m", _RhButton_renderDefaultIcon).call(this)}</slot>
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
    return !!this.icon;
};
_RhButton_onClick = function _RhButton_onClick() {
    switch (this.type) {
        case 'reset':
            return __classPrivateFieldGet(this, _RhButton_internals, "f").reset();
        default:
            return __classPrivateFieldGet(this, _RhButton_internals, "f").submit();
    }
};
_RhButton_renderDefaultIcon = function _RhButton_renderDefaultIcon() {
    switch (this.variant.toLowerCase()) {
        // TODO: revisit when rh-icon is ready
        // return html`<rh-icon icon=${this.variant}></rh-icon>`;
        case 'close':
            return html `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
          </svg>
        `;
        case 'play':
            return html `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="m30.37 15.339-28-15A.752.752 0 0 0 1.264 1v30a.752.752 0 0 0 1.104.661l28-15a.751.751 0 0 0 0-1.322Z"/>
          </svg>
        `;
        default:
            return '';
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
    query('button')
], RhButton.prototype, "_button", void 0);
__decorate([
    property({ reflect: true })
], RhButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhButton.prototype, "danger", void 0);
__decorate([
    colorContextConsumer()
], RhButton.prototype, "on", void 0);
RhButton = __decorate([
    customElement('rh-button')
], RhButton);
export { RhButton };
//# sourceMappingURL=rh-button.js.map