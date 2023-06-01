var _RhAlert_instances, _RhAlert_slots, _RhAlert_closeHandler;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { css } from "lit";
const styles = css `:host{--_background-color:var(--rh-color-cyan-50, #f2f9f9);--_border-color:var(--rh-color-cyan-300, #009596);--_header-color:var(--rh-color-cyan-500, #003737);--_icon-color:var(--rh-color-cyan-300, #009596);--_font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);display:block}:host([hidden]){display:none}:host([state=info]){--_border-color:var(--rh-color-blue-250, #2b9af3);--_icon-color:var(--rh-color-blue-250, #2b9af3);--_header-color:var(--rh-color-blue-600, #002952);--_background-color:var(--rh-color-blue-50, #e7f1fa)}:host([state=success]){--_border-color:var(--rh-color-green-500, #3e8635);--_icon-color:var(--rh-color-green-500, #3e8635);--_header-color:var(--rh-color-green-600, #1e4f18);--_background-color:var(--rh-color-green-50, #f3faf2)}:host([state=warning]){--_border-color:var(--rh-color-gold-400, #f0ab00);--_icon-color:var(--rh-color-gold-400, #f0ab00);--_header-color:var(--rh-color-gold-600, #795600);--_background-color:var(--rh-color-gold-50, #fdf7e7)}:host([state=danger]){--_border-color:#c9190b;--_icon-color:#c9190b;--_header-color:#7d1007;--_background-color:var(--rh-color-red-50, #faeae8)}:host([toast]){--_background-color:var(--rh-color-surface-lightest, #ffffff);max-width:550px}#container{border-width:var(--rh-border-width-md,2px);border-color:var(--_border-color);border-style:solid;background-color:var(--_background-color);padding:var(--rh-space-lg,16px);display:grid;grid-template-columns:min-content 1fr;gap:var(--rh-space-xs,4px);font-family:var(--_font-family)}#left-column{display:inline-block;vertical-align:top}#middle-column{display:inline-block;vertical-align:top}header{display:flex;align-items:center;justify-content:flex-start;margin-bottom:var(--rh-space-xs,4px)}header ::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--_font-family)!important;font-size:var(--rh-font-size-body-text-sm, .875rem)!important;margin:0!important}#header-actions{margin-right:var(--rh-space-xs,4px)}#header{color:var(--_header-color);font-weight:var(--rh-font-weight-heading-medium,500);flex:1 1 auto}#icon{display:flex;align-items:center;justify-content:center;width:var(--rh-size-icon-02,24px);height:var(--rh-size-icon-02,24px);color:var(--_icon-color)}#close-button{color:var(--rh-color-text-secondary-on-light,#4d4d4d);background-color:transparent;border:none;height:var(--rh-length-xl,24px);width:var(--rh-length-xl,24px);cursor:pointer}#close-button:hover{color:var(--rh-color-text-primary-on-light,#151515)}#description{font-size:var(--rh-font-size-body-text-sm, .875rem)}#description>::slotted(*){margin-block:var(--rh-space-md,8px) var(--rh-space-lg,16px)!important}footer.hasActions{margin-top:var(--rh-space-lg,16px)}footer ::slotted([slot=actions]){margin-inline-end:var(--rh-space-xl,24px)!important;padding:0!important;border:none!important;background-color:transparent!important;color:var(--rh-color-interactive-blue-darker,#06c)!important;font-size:var(--rh-font-size-body-text-sm, .875rem)!important;font-family:var(--_font-family)!important}footer ::slotted([slot=actions]:focus){text-decoration:underline!important;color:var(--rh-color-interactive-blue-darkest,#004080)!important}footer ::slotted([slot=actions]:hover){cursor:pointer!important;text-decoration:underline!important;color:var(--rh-color-interactive-blue-darkest,#004080)!important}:host(:not([variant])) #container,:host([toast]) #container{border-left:0;border-bottom:none;border-right:0}:host([toast]) #container{box-shadow:var(--rh-box-shadow-lg,0 6px 8px 2px rgba(21,21,21,.3))}`;
// TODO: replace with rh-icon
const ICONS = {
    default: { viewBox: '0 0 896 1024', path: 'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z' },
    error: { viewBox: '0 0 512 512', path: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' },
    success: { viewBox: '0 0 512 512', path: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' },
    warning: { viewBox: '0 0 576 512', path: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' },
    danger: { viewBox: '0 0 512 512', path: 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z' },
    info: { viewBox: '0 0 512 512', path: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' },
    close: { viewBox: '0 0 352 512', path: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' },
    get(name) {
        const { viewBox, path } = ICONS[name];
        return svg `
      <svg
          aria-hidden="true"
          fill="currentColor"
          height="1em" width="1em"
          style="vertical-align:-0.125em"
          viewBox="${viewBox}">
        <path d="${path}"/>
      </svg>`;
    }
};
export class AlertCloseEvent extends ComposedEvent {
    constructor() {
        super('close', {
            cancelable: true
        });
    }
}
/**
 * An Alert is a banner used to notify a user about a change in status
 * or communicate other information. It can be generated with or without
 * a user triggering an action first.
 *
 * @summary Notifies a user without blocking their workflow
 *
 * @fires {AlertCloseEvent} close - when the dismissable alert closes
 *
 * @slot         - Provide a description for the alert message
 * @slot header  - Provide a header for the alert message.
 * @slot actions - Provide actions that the user can take for the alert
 *
 * @cssprop
 */
let RhAlert = class RhAlert extends LitElement {
    constructor() {
        super(...arguments);
        _RhAlert_instances.add(this);
        /**
         * Communicates the urgency of a message and is denoted by various styling configurations.
         *
         *  - `default` - Indicates generic information or a message with no severity.
         *  - `info` - Indicates helpful information or a message with very little to no severity.
         *  - `success` - Indicates a success state, like if a process was completed without errors.
         *  - `warning` - Indicates a caution state, like a non-blocking error that might need to be fixed.
         *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
         */
        this.state = 'default';
        this.variant = false;
        /**
         * A Toast alert is used to present a global message about an event,
         * update, or confirmation, like the result of a user action that cannot
         * be presented within a specific layout or component.
         */
        this.toast = false;
        /**
         * Alert variants have different rules regarding their ability to be dismissed by a user.
         * Default, Info, and Success Inline alerts can be dismissed by a user selecting the close button.
         * Warning and Danger Inline alerts can be dismissed by a user resolving the issues caused by the alert.
         * All Toast alerts can be dismissed by a user selecting the close button or waiting for them to time out.
         */
        this.dismissable = false;
        _RhAlert_slots.set(this, new SlotController(this, 'header', null, 'actions'));
    }
    get icon() {
        return ICONS.get(this.state) ?? ``;
    }
    render() {
        const hasActions = __classPrivateFieldGet(this, _RhAlert_slots, "f").hasSlotted('actions');
        return html `
      <div id="container" role="alert" aria-hidden="false">
        <div id="left-column">
          <div id="icon">${this.icon}</div>
        </div>
        <div id="middle-column">
          <header>
            <div id="header">
              <slot name="header"></slot>
            </div>${!this.dismissable ? '' : html `
            <div id="header-actions">
              <button id="close-button"
                  aria-label="Close"
                  confirm
                  @click=${__classPrivateFieldGet(this, _RhAlert_instances, "m", _RhAlert_closeHandler)}>${ICONS.get('close')}</button>
            </div>`}
          </header>
          <div id="description">
            <slot></slot>
          </div>
          <footer class="${classMap({ hasActions })}">
            <slot name="actions"></slot>
          </footer>
        </div>
      </div>
    `;
    }
};
_RhAlert_slots = new WeakMap(), _RhAlert_instances = new WeakSet(), _RhAlert_closeHandler = function _RhAlert_closeHandler() {
    const event = new AlertCloseEvent();
    if (this.dispatchEvent(event)) {
        this.remove();
    }
};
RhAlert.version = '{{version}}';
RhAlert.styles = styles;
__decorate([
    property({ reflect: true })
], RhAlert.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAlert.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAlert.prototype, "toast", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhAlert.prototype, "dismissable", void 0);
RhAlert = __decorate([
    customElement('rh-alert')
], RhAlert);
export { RhAlert };
//# sourceMappingURL=rh-alert.js.map