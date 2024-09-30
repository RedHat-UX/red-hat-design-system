var _RhSwitch_instances, _RhSwitch_internals, _RhSwitch_slots, _RhSwitch_dir, _RhSwitch_message_get, _RhSwitch_onClick, _RhSwitch_onKeyup, _RhSwitch_onKeyDown, _RhSwitch_toggle;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{display:inline-flex;outline:none;vertical-align:top;cursor:pointer}[hidden]{display:none!important}#container{gap:var(--rh-space-lg,16px);--_margin-inline:5px;--_switch-width:40px;--_switch-height:24px;--_switch-handle-size:14px;--_switch-track-background-color:var(--rh-color-gray-60,#4d4d4d);--_switch-handle-color:var(--rh-color-surface-lightest,#fff)}#container,#container #switch{display:inline-flex;align-items:center}#container #switch{flex-shrink:0;position:relative;width:var(--_switch-width);height:var(--_switch-height);border-radius:var(--rh-border-radius-pill,64px)}#container #switch:before{content:"";display:flex;position:absolute;width:100%;height:100%;border-radius:inherit;justify-content:center;align-items:center;background-color:var(--_switch-track-background-color)}#container #switch:after{content:"";height:var(--_switch-handle-size);width:var(--_switch-handle-size);border-radius:var(--rh-border-radius-pill,64px);transform-origin:center;z-index:0;background-color:var(--_switch-handle-color);margin-inline:var(--_margin-inline);translate:0;transition:translate .25s ease 0s}#container .message{color:var(--rh-color-text-secondary)}#container.checked{--_switch-track-background-color:var(--rh-color-accent-base)}#container.checked .message{color:var(--rh-color-text-primary)}#container.checked #switch:after{translate:calc(var(--_switch-width) - var(--_switch-handle-size) - var(--_margin-inline)*2)}#container.checked.rtl #switch:after{translate:calc((var(--_switch-width) - (var(--_switch-handle-size) + (var(--_margin-inline)*2)))*-1)}#container.dark{--_switch-track-background-color:var(--rh-color-gray-40,#a3a3a3);--_switch-handle-color:var(--rh-color-surface-dark-alt,#292929)}#container.dark.checked{--_switch-track-background-color:var(--rh-color-accent-base)}#container.dark:after{box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 #15151533)}rh-icon{margin-inline:var(--_margin-inline);color:var(--_switch-handle-color);position:absolute;z-index:1}:host(:is(:focus,:focus-within)) #container #switch{outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive);outline-offset:var(--rh-space-sm,6px)}:host(:disabled){pointer-events:none;cursor:not-allowed;--_switch-track-background-color:var(--rh-color-gray-30,#c7c7c7)}:host(:disabled) #container .message{color:var(--rh-color-gray-50,#707070)}:host(:disabled) #container.dark{--_switch-track-background-color:var(--rh-color-gray-60,#4d4d4d)}:host(:disabled) #container.dark ::slotted(*),:host(:disabled) #container.dark span{color:var(--rh-color-gray-40,#a3a3a3)}`;
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 * @summary  A switch toggles the state of a setting (between on and off).
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 * @slot message-on - message content when checked. Overrides the `message-on` attribute.
 * @slot message-off - message content when unchecked. Overrides the `message-off` attribute.
 */
let RhSwitch = class RhSwitch extends LitElement {
    constructor() {
        super(...arguments);
        _RhSwitch_instances.add(this);
        /** If the checkmark icon should be displayed when the switch is on */
        this.showCheckIcon = false;
        /** If the switch is on */
        this.checked = false;
        /** If the switch is disabled */
        this.disabled = false;
        /** If the switch is reversed: message first, then control */
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
        const { on = 'light', reversed, checked } = this;
        const slots = html `
      <slot class="message" name="message-on" ?hidden="${!this.checked}">
        <span aria-hidden="true">${this.messageOn}</span>
      </slot>
      <slot class="message" name="message-off" ?hidden="${this.checked}">
        <span aria-hidden="true">${this.messageOff}</span>
      </slot>`;
        return html `
      <div id="container"
           part="container"
           class="${classMap({ checked, on: true, [on]: true, rtl })}">
        ${reversed ? slots : ''}
        <div id="switch"
             part="switch">
          <rh-icon id="toggle"
                   icon="checkmark"
                   set="microns"
                   ?hidden="${!this.showCheckIcon}"></rh-icon>
        </div>
        ${reversed ? '' : slots}
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
    property({ reflect: true, attribute: 'accessible-label' })
], RhSwitch.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'message-on' })
], RhSwitch.prototype, "messageOn", void 0);
__decorate([
    property({ reflect: true, attribute: 'message-off' })
], RhSwitch.prototype, "messageOff", void 0);
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