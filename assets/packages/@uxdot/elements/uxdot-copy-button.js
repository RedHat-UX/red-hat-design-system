var _UxdotCopyButton_instances, _UxdotCopyButton_internals, _UxdotCopyButton_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `button{color:inherit;border-radius:var(--rh-border-radius-default);border-width:0;background:none;display:inline-flex;align-items:center;gap:var(--rh-space-xs);padding-inline:var(--rh-space-xs)}code{padding:var(--rh-space-xs) var(--rh-space-md);background:light-dark(var(--rh-color-surface-light),var(--rh-color-surface-dark));font-size:var(--rh-font-size-code-md);font-weight:var(--rh-font-weight-code-regular);font-family:var(--rh-font-family-code);line-height:var(--rh-line-height-code)}:host(.icon-only) code,:host(:empty) code{display:none}:is(rh-icon,#caption){display:none}:host(:state(--rendered)) button:is(:focus,:active,:hover),:host(:state(--rendered)) button:is(:focus,:active,:hover) code{color:var(--rh-color-text-primary);background:light-dark(var(--rh-color-blue-20),var(--rh-color-blue-70));opacity:1}:host(:state(--rendered)) :is(rh-icon,#caption){display:initial}`;
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
    customElement('uxdot-copy-button')
], UxdotCopyButton);
export { UxdotCopyButton };
//# sourceMappingURL=uxdot-copy-button.js.map