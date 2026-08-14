var _RhSchemeDropdown_instances, _RhSchemeDropdown_resolvedScheme_get, _RhSchemeDropdown_escapeHtml, _RhSchemeDropdown_onChange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { isServer, LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}.visually-hidden,selectedcontent .option-text{border:0;clip:rect(0,0,0,0);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}select{--_caret-light:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4022_181)'%3E%3Cpath d='M9.46188 2.8086C9.38473 2.6216 9.20213 2.5 8.99998 2.5H0.999976C0.797826 2.5 0.615226 2.6216 0.538076 2.8086C0.460426 2.9956 0.503426 3.21045 0.646476 3.3535L4.46973 7.17675C4.61573 7.32325 4.80813 7.396 4.99998 7.396C5.19183 7.396 5.38428 7.32325 5.53023 7.17675L9.35348 3.3535C9.49653 3.21045 9.53953 2.9956 9.46188 2.8086Z' fill='%23151515'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4022_181'%3E%3Crect width='10' height='10' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");--_caret-dark:url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4022_181)'%3E%3Cpath d='M9.46188 2.8086C9.38473 2.6216 9.20213 2.5 8.99998 2.5H0.999976C0.797826 2.5 0.615226 2.6216 0.538076 2.8086C0.460426 2.9956 0.503426 3.21045 0.646476 3.3535L4.46973 7.17675C4.61573 7.32325 4.80813 7.396 4.99998 7.396C5.19183 7.396 5.38428 7.32325 5.53023 7.17675L9.35348 3.3535C9.49653 3.21045 9.53953 2.9956 9.46188 2.8086Z' fill='%23ffffff'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4022_181'%3E%3Crect width='10' height='10' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");appearance:none;background-color:var(--rh-color-surface);background-image:var(--_caret-light);background-position:right 12px center;background-repeat:no-repeat;border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default,3px);box-sizing:border-box;color:var(--rh-color-text-primary);cursor:default;font-family:var(--rh-font-family-body-text);font-size:var(--rh-font-size-body-text-md,1rem);font-weight:var(--rh-font-weight-body-text-regular,400);inline-size:100%;line-height:var(--rh-line-height-body-text,1.5);margin:0;max-inline-size:var(--rh-scheme-dropdown-select-inline-size,102px);padding:var(--rh-space-md,8px) var(--rh-space-2xl,32px) var(--rh-space-md,8px) var(--rh-space-lg,16px)}select:focus,select:hover{border-color:var(--rh-color-border-interactive)}select:focus{outline:var(--rh-border-width-lg,3px) solid var(--rh-color-border-interactive);outline-offset:var(--rh-length-2xs,3px)}:host([scheme=dark]) select{background-image:var(--_caret-dark)}@media (prefers-color-scheme:dark){:host(:not([scheme])) select,:host([scheme="light dark"]) select{background-image:var(--_caret-dark)}}@supports (appearance:base-select){#scheme-dropdown{background-image:none}select{align-items:center;block-size:40px;gap:var(--rh-space-md,8px);inline-size:68px;padding-block:10px;padding-inline-end:var(--rh-space-lg,16px)}select,select::picker(select){appearance:base-select}select::picker(select){border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default,3px);box-shadow:var(--rh-box-shadow-sm);margin-block-start:var(--rh-space-sm,6px);max-inline-size:var(--rh-scheme-dropdown-picker-inline-size,145px);padding-block:var(--rh-space-md,8px);position-try-fallbacks:flip-inline}select:open{outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}select::picker-icon{display:none}selectedcontent{align-items:center;display:inline-flex}selectedcontent rh-icon.checkmark{display:none}select button>rh-icon{--rh-icon-size:10px;transition:rotate var(--rh-animation-speed,.3s) ease}select:open button>rh-icon{rotate:180deg}option{align-items:center;padding:var(--rh-space-md,8px) var(--rh-space-3xl,48px) var(--rh-space-md,8px) var(--rh-space-lg,16px);position:relative}option:focus,option:hover{background-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),var(--rh-color-surface-darker,#1f1f1f))}option:focus{border-radius:var(--rh-border-radius-default,3px);border:0;outline:var(--rh-border-width-lg,3px) solid var(--rh-color-border-interactive);outline-offset:-3px}option::checkmark{display:none}option rh-icon.checkmark{color:var(--rh-color-interactive-primary-default);display:none;position:absolute;inset-inline-end:var(--rh-space-lg,16px)}option:checked rh-icon.checkmark{display:block}}`;
/**
 * Fired when the active color scheme changes by user interaction or
 * programmatic update. Does not fire on initial load from localStorage.
 * Bubbles and is composed, so listeners on ancestor elements will
 * receive it. Read `event.scheme` to get the newly selected value.
 */
export class SchemeChangedEvent extends Event {
    constructor(scheme) {
        super('scheme-changed', { bubbles: true, composed: true });
        this.scheme = scheme;
    }
}
/**
 * Provides a color scheme picker for switching between light, dark,
 * and system defaults. Accessible by default with a screen-reader
 * label (WCAG 4.1.2), keyboard navigation, and focus management.
 * Authors should set `accessible-label` for localization.
 *
 * @summary Displays a variety of color schemes in a menu dropdown
 *
 * @fires {SchemeChangedEvent} scheme-changed - Fired when the color scheme changes
 */
let RhSchemeDropdown = class RhSchemeDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _RhSchemeDropdown_instances.add(this);
        /**
         * Current color scheme setting. Reflects to the `scheme` attribute and
         * initializes from `localStorage.rhdsColorScheme` when available.
         * When set, applies the value to `document.body.style.colorScheme`
         * and persists it to `localStorage`.
         */
        this.scheme = globalThis.localStorage
            ?.rhdsColorScheme;
        /**
         * Visually hidden accessible label for the scheme dropdown.
         * Authors should keep this text short (under 20 characters).
         */
        this.accessibleLabel = 'Color scheme';
        /**
         * Accessible label for the light mode option.
         */
        this.accessibleLabelLight = 'Light';
        /**
         * Accessible label for the dark mode option.
         */
        this.accessibleLabelDark = 'Dark';
        /**
         * Accessible label for the system default option.
         */
        this.accessibleLabelSystem = 'System';
    }
    render() {
        // IMPORTANT: no Lit child bindings (`${...}`) inside `<option>` — `<selectedcontent>`
        // `cloneNode()` copies `<!--?lit-->` markers and breaks the template (lit#5349).
        // Escaped `unsafeStatic` inlines labels without markers; Cannot use `.textContent`
        // bindings because they flatten rich option content under `appearance: base-select`.
        const labelSystem = unsafeStatic(__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "m", _RhSchemeDropdown_escapeHtml).call(this, this.accessibleLabelSystem ?? 'System'));
        const labelLight = unsafeStatic(__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "m", _RhSchemeDropdown_escapeHtml).call(this, this.accessibleLabelLight ?? 'Light'));
        const labelDark = unsafeStatic(__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "m", _RhSchemeDropdown_escapeHtml).call(this, this.accessibleLabelDark ?? 'Dark'));
        return html `
      <label for="scheme-dropdown" class="visually-hidden">${this.accessibleLabel}:</label>
      <select id="scheme-dropdown" @change="${__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "m", _RhSchemeDropdown_onChange)}">
        <button type="button">
          <selectedcontent></selectedcontent>
          <rh-icon set="microns" icon="caret-down-fill"></rh-icon>
        </button>
        <option value="light dark"
                ?selected="${__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "a", _RhSchemeDropdown_resolvedScheme_get) === 'light dark'}">
          <rh-icon set="ui" icon="auto-light-dark-mode"></rh-icon>
          <span class="option-text">${labelSystem}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="light" ?selected="${__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "a", _RhSchemeDropdown_resolvedScheme_get) === 'light'}">
          <rh-icon set="ui" icon="light-mode"></rh-icon>
          <span class="option-text">${labelLight}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
        <option value="dark" ?selected="${__classPrivateFieldGet(this, _RhSchemeDropdown_instances, "a", _RhSchemeDropdown_resolvedScheme_get) === 'dark'}">
          <rh-icon set="ui" icon="dark-mode"></rh-icon>
          <span class="option-text">${labelDark}</span>
          <rh-icon set="ui" icon="check" class="checkmark"></rh-icon>
        </option>
      </select>
    `;
    }
    /**
     * Syncs `select.value` and option `selected` attrs to `#resolvedScheme` after SSR
     * hydration. Lit's `?selected` on `<option>` can stay stale otherwise.
     * @param changed - Reactive properties that changed this update cycle
     */
    updated(changed) {
        super.updated(changed);
        if (isServer) {
            return;
        }
        const select = this.shadowRoot?.querySelector('select');
        if (select) {
            // Use the same fallback as render() so malformed scheme values keep System selected.
            const value = __classPrivateFieldGet(this, _RhSchemeDropdown_instances, "a", _RhSchemeDropdown_resolvedScheme_get);
            if (select.value !== value) {
                select.value = value;
            }
            // Realign `selected` attribute even when select.value already matches.
            for (const option of select.options) {
                if (option.value === value) {
                    option.setAttribute('selected', '');
                }
                else {
                    option.removeAttribute('selected');
                }
            }
        }
    }
    /**
     * Observes changes to the `scheme` property. Applies the selected
     * color scheme to `document.body` and persists it to `localStorage`
     * so the preference survives page reloads.
     */
    schemeChanged() {
        if (isServer) {
            return;
        }
        if (this.scheme) {
            document.body.style.setProperty('color-scheme', this.scheme);
            localStorage.rhdsColorScheme = this.scheme;
            if (this.hasUpdated) {
                this.dispatchEvent(new SchemeChangedEvent(this.scheme));
            }
        }
        else {
            // Reset to system default
            document.body.style.removeProperty('color-scheme');
            localStorage.removeItem('rhdsColorScheme');
        }
    }
};
_RhSchemeDropdown_instances = new WeakSet();
_RhSchemeDropdown_resolvedScheme_get = function _RhSchemeDropdown_resolvedScheme_get() {
    return this.scheme === 'light' || this.scheme === 'dark' ?
        this.scheme
        : 'light dark';
};
_RhSchemeDropdown_escapeHtml = function _RhSchemeDropdown_escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
};
_RhSchemeDropdown_onChange = function _RhSchemeDropdown_onChange(e) {
    if (e.target instanceof HTMLSelectElement) {
        this.scheme = e.target.value;
    }
};
RhSchemeDropdown.styles = [styles];
RhSchemeDropdown.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ reflect: true })
], RhSchemeDropdown.prototype, "scheme", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhSchemeDropdown.prototype, "accessibleLabel", void 0);
__decorate([
    property({ attribute: 'accessible-label-light' })
], RhSchemeDropdown.prototype, "accessibleLabelLight", void 0);
__decorate([
    property({ attribute: 'accessible-label-dark' })
], RhSchemeDropdown.prototype, "accessibleLabelDark", void 0);
__decorate([
    property({ attribute: 'accessible-label-system' })
], RhSchemeDropdown.prototype, "accessibleLabelSystem", void 0);
__decorate([
    observes('scheme')
], RhSchemeDropdown.prototype, "schemeChanged", null);
RhSchemeDropdown = __decorate([
    customElement('rh-scheme-dropdown')
], RhSchemeDropdown);
export { RhSchemeDropdown };
//# sourceMappingURL=rh-scheme-dropdown.js.map