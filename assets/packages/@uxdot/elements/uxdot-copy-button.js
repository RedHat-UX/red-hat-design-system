var _UxdotCopyButton_instances, _UxdotCopyButton_internals, _UxdotCopyButton_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `button{color:inherit;border-radius:var(--rh-border-radius-default,3px);border-width:0;background:none;display:inline-flex;align-items:center;gap:var(--rh-space-xs,4px);padding-inline:var(--rh-space-xs,4px)}code{padding:var(--rh-space-xs,4px) var(--rh-space-md,8px);background:light-dark(var(--rh-color-surface-light,#e0e0e0),var(--rh-color-surface-dark,#383838));font-size:var(--rh-font-size-code-md,1rem);font-weight:var(--rh-font-weight-code-regular,400);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);line-height:var(--rh-line-height-code,1.5)}:host(.icon-only) code,:host(:empty) code{display:none}:is(rh-icon,#caption){display:none}:host(:state(--rendered)) button:is(:focus,:active,:hover),:host(:state(--rendered)) button:is(:focus,:active,:hover) code{color:var(--rh-color-text-primary);background:light-dark(var(--rh-color-blue-20,#b9dafc),var(--rh-color-blue-70,#036));opacity:1}:host(:state(--rendered)) :is(rh-icon,#caption){display:initial}`;
const visuallyHidden = css `.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}`;
let UxdotCopyButton = class UxdotCopyButton extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotCopyButton_instances.add(this);
        this.icon = 'copy';
        _UxdotCopyButton_internals.set(this, this.attachInternals());
    }
    render() {
        return html `
      <rh-tooltip position="left-start">
        <span id="caption" slot="content">${this.copy ?? 'Click to copy'}</span>
        <button @click="${__classPrivateFieldGet(this, _UxdotCopyButton_instances, "m", _UxdotCopyButton_onClick)}">
          <code><slot></slot></code>
          <slot name="extra-content"></slot>
          <span class="visually-hidden">Click to copy</span>
          <rh-icon aria-hidden="true" set="ui" .icon="${this.icon}"></rh-icon>
        </button>
      </rh-tooltip>
    `;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _UxdotCopyButton_internals, "f").states.add('--rendered');
    }
};
_UxdotCopyButton_internals = new WeakMap();
_UxdotCopyButton_instances = new WeakSet();
_UxdotCopyButton_onClick = async function _UxdotCopyButton_onClick() {
    const text = this.copy ?? this.textContent ?? '';
    const message = text.trim();
    await navigator.clipboard.writeText(message);
    RhAlert.toast({ heading: 'Copied', message });
};
UxdotCopyButton.styles = [styles, visuallyHidden];
__decorate([
    property()
], UxdotCopyButton.prototype, "copy", void 0);
__decorate([
    property()
], UxdotCopyButton.prototype, "icon", void 0);
UxdotCopyButton = __decorate([
    themable,
    customElement('uxdot-copy-button')
], UxdotCopyButton);
export { UxdotCopyButton };
//# sourceMappingURL=uxdot-copy-button.js.map