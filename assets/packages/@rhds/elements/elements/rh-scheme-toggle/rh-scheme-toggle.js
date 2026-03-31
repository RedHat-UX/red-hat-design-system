var _RhSchemeToggle_instances, _RhSchemeToggle_isLight, _RhSchemeToggle_isDark, _RhSchemeToggle_isSystem, _RhSchemeToggle_onChange, _RhSchemeToggle_schemeCheck;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { css } from "lit";
const styles = css `:host{display:block}fieldset{align-items:center;border:0;display:flex;flex-flow:row nowrap;gap:var(--rh-space-lg,16px);margin:0;padding:0}fieldset legend{float:inline-start}fieldset #button-group{--rh-icon-size:var(--rh-size-icon-01,16px);display:flex}label{align-items:center;background-color:initial;border-width:var(--rh-border-width-sm,1px);border-style:solid;border-color:var(--rh-color-border-subtle);display:flex;height:var(--rh-space-2xl,32px);justify-content:center;position:relative;width:var(--rh-space-3xl,48px)}label:not(:first-of-type){margin-inline-start:-1px}label:first-of-type{border-start-start-radius:var(--rh-border-radius-default,3px);border-end-start-radius:var(--rh-border-radius-default,3px)}label:last-of-type{border-start-end-radius:var(--rh-border-radius-default,3px);border-end-end-radius:var(--rh-border-radius-default,3px)}label:focus-within,label:hover{background-color:var(--rh-color-interactive-secondary-focus);color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515))}label:has(input:checked){background-color:var(--rh-color-interactive-primary-active);border-color:var(--rh-color-border-interactive);color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));z-index:1}label:has(input:checked):focus-within,label:has(input:checked):hover{background-color:var(--rh-color-interactive-primary-focus)}input{appearance:none;inset:0;margin:0;outline-offset:2px;padding:0;position:absolute}input:focus-visible{outline:var(--rh-border-width-sm,1px) solid var(--rh-color-interactive-primary-focus)}rh-icon{z-index:2}.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}`;
/**
 * A scheme toggle provides users with the ability to switch between
 * light, dark, and system default color schemes. It should be placed
 * in a visible location for easy access. For WCAG compliance, screen
 * reader users must be able to identify each option; the component
 * uses a native fieldset with ARIA-compatible radio buttons. Tab
 * focuses the group; arrow keys allow selection between schemes.
 *
 * @summary Switches between light, dark, and system default color schemes.
 *
 * @alias Scheme toggle
 */
let RhSchemeToggle = class RhSchemeToggle extends LitElement {
    constructor() {
        super(...arguments);
        _RhSchemeToggle_instances.add(this);
        /** Whether the light radio button is currently checked. */
        _RhSchemeToggle_isLight.set(this, false);
        /** Whether the dark radio button is currently checked. */
        _RhSchemeToggle_isDark.set(this, false);
        /** Whether the system default radio button is currently checked. */
        _RhSchemeToggle_isSystem.set(this, false);
        /**
         * Current color scheme setting. Reflects to the `scheme` attribute and
         * initializes from `localStorage.rhdsColorScheme` when available.
         * When set, applies the value to `document.body.style.colorScheme`
         * and persists it to `localStorage`.
         */
        this.scheme = globalThis.localStorage
            ?.rhdsColorScheme;
        /**
         * Legend text displayed next to the toggle button group.
         * Authors should keep this text short (under 20 characters).
         */
        this.legendText = 'Color scheme';
        /**
         * Accessible label for the light mode radio button.
         * Rendered as a visually-hidden span and a `title` tooltip.
         */
        this.lightText = 'Light';
        /**
         * Accessible label for the dark mode radio button.
         * Rendered as a visually-hidden span and a `title` tooltip.
         */
        this.darkText = 'Dark';
        /**
         * Accessible label for the system default radio button.
         * Rendered as a visually-hidden span and a `title` tooltip.
         */
        this.systemText = 'System';
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhSchemeToggle_instances, "m", _RhSchemeToggle_schemeCheck).call(this);
    }
    render() {
        return html `
      <fieldset @change="${__classPrivateFieldGet(this, _RhSchemeToggle_instances, "m", _RhSchemeToggle_onChange)}">
        <legend>${this.legendText}:</legend>
        <div id="button-group">
          <label title="${this.lightText}">
            <span class="visually-hidden">${this.lightText}</span>
            <input type="radio"
                   name="scheme"
                   value="light"
                   ?checked="${__classPrivateFieldGet(this, _RhSchemeToggle_isLight, "f")}">
            <rh-icon set="ui" icon="light-mode"></rh-icon>
          </label>
          <label title="${this.darkText}">
            <span class="visually-hidden">${this.darkText}</span>
            <input type="radio"
                   name="scheme"
                   value="dark"
                   ?checked="${__classPrivateFieldGet(this, _RhSchemeToggle_isDark, "f")}">
            <rh-icon set="ui" icon="dark-mode"></rh-icon>
          </label>
          <label title="${this.systemText}">
            <span class="visually-hidden">${this.systemText}</span>
            <input type="radio"
                   name="scheme"
                   value="light dark"
                   ?checked="${__classPrivateFieldGet(this, _RhSchemeToggle_isSystem, "f")}">
            <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          </label>
        </div>
      </fieldset>
    `;
    }
    /**
     * Observes changes to the `scheme` property. Applies the selected
     * color scheme to `document.body` and persists it to `localStorage`
     * so the preference survives page reloads.
     */
    schemeChanged() {
        if (!isServer) {
            if (this.scheme) {
                document.body.style.setProperty('color-scheme', this.scheme);
                if (!isServer) {
                    localStorage.rhdsColorScheme = this.scheme;
                }
            }
        }
    }
};
_RhSchemeToggle_isLight = new WeakMap();
_RhSchemeToggle_isDark = new WeakMap();
_RhSchemeToggle_isSystem = new WeakMap();
_RhSchemeToggle_instances = new WeakSet();
_RhSchemeToggle_onChange = function _RhSchemeToggle_onChange(e) {
    if (e.target instanceof HTMLInputElement) {
        this.scheme = e.target.value;
    }
    __classPrivateFieldGet(this, _RhSchemeToggle_instances, "m", _RhSchemeToggle_schemeCheck).call(this);
};
_RhSchemeToggle_schemeCheck = function _RhSchemeToggle_schemeCheck() {
    if (!isServer) {
        __classPrivateFieldSet(this, _RhSchemeToggle_isLight, this.scheme === 'light', "f");
        __classPrivateFieldSet(this, _RhSchemeToggle_isDark, this.scheme === 'dark', "f");
        __classPrivateFieldSet(this, _RhSchemeToggle_isSystem, (this.scheme?.includes('light')
            && this.scheme?.includes('dark'))
            || (this.scheme === undefined), "f");
        this.requestUpdate();
    }
};
RhSchemeToggle.styles = [styles];
__decorate([
    property({ reflect: true })
], RhSchemeToggle.prototype, "scheme", void 0);
__decorate([
    property({ attribute: 'legend-text' })
], RhSchemeToggle.prototype, "legendText", void 0);
__decorate([
    property({ attribute: 'light-text' })
], RhSchemeToggle.prototype, "lightText", void 0);
__decorate([
    property({ attribute: 'dark-text' })
], RhSchemeToggle.prototype, "darkText", void 0);
__decorate([
    property({ attribute: 'system-text' })
], RhSchemeToggle.prototype, "systemText", void 0);
__decorate([
    observes('scheme')
], RhSchemeToggle.prototype, "schemeChanged", null);
RhSchemeToggle = __decorate([
    customElement('rh-scheme-toggle')
], RhSchemeToggle);
export { RhSchemeToggle };
//# sourceMappingURL=rh-scheme-toggle.js.map