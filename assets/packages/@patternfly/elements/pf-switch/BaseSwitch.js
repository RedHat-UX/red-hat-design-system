import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{display:inline-block}svg{fill:currentcolor}[hidden]{display:none!important}:host(:disabled){pointer-events:none;cursor:not-allowed}:host(:disabled) #container{cursor:not-allowed}:host(:disabled:focus-within) #container{outline:0}#container{position:relative;display:inline-flex;align-items:center}#container::before{position:absolute;display:block;content:""}`;
/**
 * Switch
 */
class BaseSwitch extends LitElement {
    constructor() {
        super(...arguments);
        this.#internals = this.attachInternals();
        this.#initiallyDisabled = this.hasAttribute('disabled');
        this.showCheckIcon = false;
        this.checked = false;
        this.disabled = this.#initiallyDisabled;
    }
    static { this.styles = [styles]; }
    static { this.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true, }; }
    static { this.formAssociated = true; }
    #internals;
    #initiallyDisabled;
    get labels() {
        return this.#internals.labels;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'checkbox');
        this.addEventListener('click', this.#onClick);
        this.addEventListener('keyup', this.#onKeyup);
        this.#updateLabels();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
        this.requestUpdate();
    }
    render() {
        return html `
      <div id="container" tabindex="0">
        <svg id="toggle" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512">
          <path ?hidden=${!this.showCheckIcon} d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
        </svg>
      </div>
    `;
    }
    updated() {
        this.#internals.ariaChecked = String(this.checked);
        this.#internals.ariaDisabled = String(this.disabled);
    }
    #onClick(event) {
        // @ts-expect-error: firefox workarounds for double-firing in the case of switch nested in label
        const { originalTarget, explicitOriginalTarget } = event;
        if (explicitOriginalTarget) {
            let labels;
            if (originalTarget === event.target &&
                !(labels = Array.from(this.labels)).includes(explicitOriginalTarget) &&
                labels.includes(this.closest('label'))) {
                return;
            }
        }
        this.#toggle();
    }
    #onKeyup(event) {
        switch (event.key) {
            case ' ':
            case 'Enter':
                event.preventDefault();
                this.#toggle();
        }
    }
    #toggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.#updateLabels();
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
    #updateLabels() {
        const labelState = this.checked ? 'on' : 'off';
        if (this.labels.length > 1) {
            for (const label of this.labels) {
                label.hidden = label.dataset.state !== labelState;
            }
        }
    }
}
__decorate([
    property({ reflect: true })
], BaseSwitch.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean, attribute: 'show-check-icon' })
], BaseSwitch.prototype, "showCheckIcon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], BaseSwitch.prototype, "checked", void 0);
export { BaseSwitch };
//# sourceMappingURL=BaseSwitch.js.map