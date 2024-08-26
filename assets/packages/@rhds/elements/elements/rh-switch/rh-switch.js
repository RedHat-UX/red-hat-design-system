var _RhSwitch_instances, _RhSwitch_internals, _RhSwitch_slots, _RhSwitch_dir, _RhSwitch_message_get, _RhSwitch_switchTemplate, _RhSwitch_onClick, _RhSwitch_onKeyup, _RhSwitch_onKeyDown, _RhSwitch_toggle;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:inline-flex;outline:0;vertical-align:top;cursor:pointer;--_switch-width:40px;--_switch-height:24px;--_switch-handle-size:14px;--_switch-track-background-color:var(--rh-color-gray-60, #4d4d4d);--_margin-inline:5px}#container{display:inline-flex;align-items:center;gap:var(--rh-space-lg,16px)}:host(:disabled){pointer-events:none;cursor:not-allowed;--_switch-track-background-color:var(--rh-color-gray-30, #c7c7c7)}[hidden]{display:none!important}#switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--_switch-width);height:var(--_switch-height);border-radius:var(--rh-border-radius-pill,64px)}:host(:is(:focus,:focus-within)) #switch{outline:var(--rh-border-width-md,2px) solid var(--_switch-focus-outline-color,var(--rh-color-border-interactive-on-light,#0066cc));outline-offset:var(--rh-space-sm,6px)}#switch:before{content:"";display:flex;position:absolute;width:100%;height:100%;border-radius:inherit;justify-content:center;align-items:center;background-color:var(--_switch-track-background-color)}#switch:after{content:"";height:var(--_switch-handle-size);width:var(--_switch-handle-size);border-radius:var(--rh-border-radius-pill,64px);transform-origin:center;z-index:0;background-color:var(--_switch-handle-color,var(--rh-color-surface-lightest,#fff));margin-inline:var(--_margin-inline);translate:0%;transition:translate .25s ease 0s}:host([checked]:not(:disabled)){--_switch-track-background-color:var(\n        --_switch-checked,\n        var(--rh-color-accent-base-on-light, #0066cc)\n      )}:host([checked]) #switch:after{translate:calc(var(--_switch-width) - (var(--_switch-handle-size) + (var(--_margin-inline) * 2)))}:host([checked]) .rtl #switch:after{translate:calc(-1 * (var(--_switch-width) - (var(--_switch-handle-size) + (var(--_margin-inline) * 2))))}svg{fill:currentcolor;margin-inline:var(--_margin-inline);font-size:var(--rh-font-size-body-text-xs, .75rem);color:var(--_switch-handle-color,var(--rh-color-icon-secondary-on-dark,#fff));position:absolute;z-index:1}:host(:not([checked])) ::slotted(*){color:var(--rh-color-text-secondary-on-light,#4d4d4d)}:host(:disabled) ::slotted(*),:host(:disabled) slot[name^=message] span[aria-hidden]{color:var(--rh-color-gray-50,#707070)}.dark{--_switch-track-background-color:var(--rh-color-gray-40, #a3a3a3);--_switch-handle-color:var(--rh-color-surface-dark-alt, #292929)}.dark:after{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2))}:host(:disabled) .dark{--_switch-track-background-color:var(--rh-color-gray-60, #4d4d4d)}:host(:not([checked])) .dark ::slotted(*){color:var(--rh-color-text-secondary-on-dark,#c7c7c7)}:host(:disabled) .dark ::slotted(*),:host(:disabled) .dark slot[name^=message] span[aria-hidden]{color:var(--rh-color-gray-40,#a3a3a3)}:host(:is(:focus,:focus-within)) .dark{--_switch-focus-outline-color:var(--rh-color-border-interactive-on-dark, #92c5f9)}:host([checked]:not(:disabled)) .dark{--_switch-track-background-color:var(\n        --_switch-checked,\n        var(--rh-color-accent-base-on-dark, #92c5f9)\n      )}`;
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 * @summary  A switch toggles the state of a setting (between on and off).
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 */
let RhSwitch = class RhSwitch extends LitElement {
    constructor() {
        super(...arguments);
        _RhSwitch_instances.add(this);
        this.showCheckIcon = false;
        this.checked = false;
        this.disabled = false;
        this.reversed = false;
        _RhSwitch_internals.set(this, InternalsController.of(this, { role: 'switch' }));
        _RhSwitch_slots.set(this, new SlotController(this, null, 'message-on', 'message-off'));
        _RhSwitch_dir.set(this, new DirController(this));
    }
    get labels() {
        return __classPrivateFieldGet(this, _RhSwitch_internals, "f").labels;
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    connectedCallback() {
        super.connectedCallback();
        this.tabIndex = 0;
        this.addEventListener('click', __classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_onClick));
        this.addEventListener('keyup', __classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_onKeyup));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_onKeyDown));
    }
    willUpdate() {
        __classPrivateFieldGet(this, _RhSwitch_internals, "f").ariaChecked = String(!!this.checked);
        __classPrivateFieldGet(this, _RhSwitch_internals, "f").ariaDisabled = String(!!this.disabled);
        __classPrivateFieldGet(this, _RhSwitch_internals, "f").ariaLabel = this.accessibleLabel ?? '';
        const noMessageOn = __classPrivateFieldGet(this, _RhSwitch_slots, "f").isEmpty('message-on');
        const noMessageOff = __classPrivateFieldGet(this, _RhSwitch_slots, "f").isEmpty('message-off');
        if (noMessageOn || noMessageOff) {
            if ('ariaDescription' in ElementInternals) {
                __classPrivateFieldGet(this, _RhSwitch_internals, "f").ariaDescription = __classPrivateFieldGet(this, _RhSwitch_instances, "a", _RhSwitch_message_get) ?? '';
            }
            else {
                this.setAttribute('aria-description', __classPrivateFieldGet(this, _RhSwitch_instances, "a", _RhSwitch_message_get) ?? '');
            }
        }
        else {
            const stateSlotName = this.checked ? 'message-on' : 'message-off';
            const stateEls = __classPrivateFieldGet(this, _RhSwitch_slots, "f").getSlotted(stateSlotName);
            for (const el of stateEls) {
                el.id || (el.id = getRandomId('rh-switch-message'));
            }
            if ('ariaDescribedByElements' in ElementInternals) {
                // see https://w3c.github.io/aria/#dom-ariamixin
                __classPrivateFieldGet(this, _RhSwitch_internals, "f").ariaDescribedByElements = stateEls;
            }
            else {
                this.setAttribute('aria-describedby', stateEls.map(x => x.id).join(' '));
            }
        }
    }
    render() {
        const rtl = __classPrivateFieldGet(this, _RhSwitch_dir, "f").dir === 'rtl';
        const { on = '' } = this;
        return html `
      <div id="container"
           part="container"
           class="${classMap({ [on]: !!on, rtl })}">
        ${this.reversed ? html `
          <slot></slot>
          ${__classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_switchTemplate).call(this)}
        ` : html `
          ${__classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_switchTemplate).call(this)}
          <slot></slot>
        `}
        <slot name="message-on" ?hidden="${!this.checked}">
          <span aria-hidden="true">${this.messageOn}</span>
        </slot>
        <slot name="message-off" ?hidden="${this.checked}">
          <span aria-hidden="true">${this.messageOff}</span>
        </slot>
      </div>
    `;
    }
};
_RhSwitch_internals = new WeakMap();
_RhSwitch_slots = new WeakMap();
_RhSwitch_dir = new WeakMap();
_RhSwitch_instances = new WeakSet();
_RhSwitch_message_get = function _RhSwitch_message_get() {
    return this.checked ? this.messageOn : this.messageOff;
};
_RhSwitch_switchTemplate = function _RhSwitch_switchTemplate() {
    return html `
      <div id="switch" part="switch">
        ${this.showCheckIcon ? html `
          <svg id="toggle"
               role="presentation"
               fill="currentColor"
               height="1em"
               width="1em"
               viewBox="0 0 512 512">
            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
          </svg>
        ` : ``}
      </div>
    `;
};
_RhSwitch_onClick = function _RhSwitch_onClick(event) {
    // @ts-expect-error: firefox workarounds for double-firing in the case of switch nested in label
    const { originalTarget, explicitOriginalTarget } = event;
    if (explicitOriginalTarget) {
        let labels;
        if (originalTarget === event.target
            && !(labels = Array.from(this.labels)).includes(explicitOriginalTarget)
            && labels.includes(this.closest('label'))) {
            return;
        }
    }
    __classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_toggle).call(this);
};
_RhSwitch_onKeyup = function _RhSwitch_onKeyup(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _RhSwitch_instances, "m", _RhSwitch_toggle).call(this);
    }
};
_RhSwitch_onKeyDown = function _RhSwitch_onKeyDown(event) {
    if (event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
    }
};
_RhSwitch_toggle = function _RhSwitch_toggle() {
    if (this.disabled) {
        return;
    }
    this.checked = !this.checked;
    this.dispatchEvent(new Event('change', { bubbles: true }));
};
RhSwitch.styles = [styles];
RhSwitch.formAssociated = true;
__decorate([
    property({ reflect: true })
], RhSwitch.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean, attribute: 'show-check-icon' })
], RhSwitch.prototype, "showCheckIcon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhSwitch.prototype, "checked", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhSwitch.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true, attribute: 'accessible-label' })
], RhSwitch.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'message-on' })
], RhSwitch.prototype, "messageOn", void 0);
__decorate([
    property({ reflect: true, attribute: 'message-off' })
], RhSwitch.prototype, "messageOff", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], RhSwitch.prototype, "reversed", void 0);
__decorate([
    colorContextConsumer()
], RhSwitch.prototype, "on", void 0);
RhSwitch = __decorate([
    customElement('rh-switch')
], RhSwitch);
export { RhSwitch };
//# sourceMappingURL=rh-switch.js.map