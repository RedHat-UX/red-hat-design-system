var _UxdotColorSchemePicker_instances, _UxdotColorSchemePicker_onChange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { css } from "lit";
const styles = css `:host{display:contents}fieldset{border:0;margin:0;padding:0;display:inline-flex;flex-flow:row nowrap;align-items:center;gap:var(--rh-space-lg)}fieldset legend{float:inline-start}fieldset #button-group{display:flex;--rh-icon-size:var(--rh-size-icon-01)}fieldset label{position:relative;background-color:initial;color:var(--rh-color-text-primary);border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);display:flex;align-items:center;justify-content:center;width:var(--rh-space-3xl);height:var(--rh-space-2xl)}fieldset label:not(:first-of-type){margin-inline-start:-1px}fieldset label:first-of-type{border-start-start-radius:var(--rh-border-radius-default);border-end-start-radius:var(--rh-border-radius-default)}fieldset label:last-of-type{border-end-end-radius:var(--rh-border-radius-default);border-start-end-radius:var(--rh-border-radius-default)}fieldset label:focus-within,fieldset label:hover{background-color:light-dark(var(--rh-color-interactive-secondary-focus),var(--rh-color-gray-70))}fieldset label:has(:checked){color:var(--rh-color-text-primary-on-light);background-color:var(--rh-color-interactive-primary-active);border-color:var(--rh-color-border-interactive)}fieldset label:has(:checked):focus-within,fieldset label:has(:checked):hover{background-color:var(--rh-color-interactive-primary-focus)}fieldset label rh-icon{z-index:2}fieldset label input{appearance:none;margin:0;padding:0;position:absolute;inset:0;outline-offset:2px}fieldset label input:focus-visible{outline:1px solid var(--rh-color-interactive-primary-focus)}`;
const visuallyHidden = css `.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}`;
let UxdotColorSchemePicker = class UxdotColorSchemePicker extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotColorSchemePicker_instances.add(this);
        this.scheme = globalThis.localStorage?.rhdsColorScheme;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!isServer) {
            this.scheme = localStorage.rhdsColorScheme;
        }
    }
    firstUpdated() {
        // workaround for ssr mismatch
        if (!isServer) {
            this.shadowRoot?.querySelector(`[value="${this.scheme}"]`)?.toggleAttribute('checked', true);
        }
    }
    render() {
        return html `
      <fieldset @change="${__classPrivateFieldGet(this, _UxdotColorSchemePicker_instances, "m", _UxdotColorSchemePicker_onChange)}">
        <legend>Color scheme:</legend>
        <div id="button-group">
          <label title="Light">
            <span class="visually-hidden">Light</span>
            <input type="radio" name="scheme" value="light" ?checked="${!isServer && this.scheme === 'light'}">
            <rh-icon set="ui" icon="light-mode"></rh-icon>
          </label>
          <label title="Dark">
            <span class="visually-hidden">Dark</span>
            <input type="radio" name="scheme" value="dark" ?checked="${!isServer && this.scheme === 'dark'}">
            <rh-icon set="ui" icon="dark-mode"></rh-icon>
          </label>
          <label title="Device default">
            <span class="visually-hidden">Device default</span>
            <input type="radio" name="scheme" value="light dark" ?checked="${isServer || this.scheme === 'light dark'}">
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
    }
    schemeChanged() {
        if (this.scheme) {
            document.body.style.setProperty('color-scheme', this.scheme);
            if (!isServer) {
                localStorage.rhdsColorScheme = this.scheme;
            }
        }
    }
};
_UxdotColorSchemePicker_instances = new WeakSet();
_UxdotColorSchemePicker_onChange = function _UxdotColorSchemePicker_onChange(e) {
    if (e.target instanceof HTMLInputElement) {
        this.scheme = e.target.value;
    }
};
UxdotColorSchemePicker.styles = [styles, visuallyHidden];
__decorate([
    property({ reflect: true })
], UxdotColorSchemePicker.prototype, "scheme", void 0);
__decorate([
    observes('scheme')
], UxdotColorSchemePicker.prototype, "schemeChanged", null);
UxdotColorSchemePicker = __decorate([
    customElement('uxdot-color-scheme-picker')
], UxdotColorSchemePicker);
export { UxdotColorSchemePicker };
//# sourceMappingURL=uxdot-color-scheme-picker.js.map