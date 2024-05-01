var _BaseSwitch_instances, _BaseSwitch_internals, _BaseSwitch_onClick, _BaseSwitch_onKeyup, _BaseSwitch_onKeyDown, _BaseSwitch_toggle, _BaseSwitch_updateLabels;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n}\n\nsvg {\n  fill: currentcolor;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host(:disabled) {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n:host(:disabled) #container {\n  cursor: not-allowed;\n}\n\n:host(:disabled:is(:focus,:focus-within)) {\n  outline: none;\n}\n\n#container {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n\n#container::before {\n  position: absolute;\n  display: block;\n  content: "";\n}\n`;
/**
 * Switch
 */
export class BaseSwitch extends LitElement {
    constructor() {
        super(...arguments);
        _BaseSwitch_instances.add(this);
        _BaseSwitch_internals.set(this, InternalsController.of(this, { role: 'switch' }));
        this.showCheckIcon = false;
        this.checked = false;
        this.disabled = false;
    }
    get labels() {
        return __classPrivateFieldGet(this, _BaseSwitch_internals, "f").labels;
    }
    connectedCallback() {
        super.connectedCallback();
        this.tabIndex = 0;
        this.addEventListener('click', __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_onClick));
        this.addEventListener('keyup', __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_onKeyup));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_onKeyDown));
        __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_updateLabels).call(this);
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    render() {
        return html `
      <div id="container">
        <svg id="toggle"
             role="presentation"
             fill="currentColor"
             height="1em"
             width="1em"
             viewBox="0 0 512 512"
             ?hidden=${!this.showCheckIcon}>
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
        </svg>
      </div>
    `;
    }
    willUpdate() {
        __classPrivateFieldGet(this, _BaseSwitch_internals, "f").ariaChecked = String(!!this.checked);
        __classPrivateFieldGet(this, _BaseSwitch_internals, "f").ariaDisabled = String(!!this.disabled);
    }
}
_BaseSwitch_internals = new WeakMap(), _BaseSwitch_instances = new WeakSet(), _BaseSwitch_onClick = function _BaseSwitch_onClick(event) {
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
    __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_toggle).call(this);
}, _BaseSwitch_onKeyup = function _BaseSwitch_onKeyup(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_toggle).call(this);
    }
}, _BaseSwitch_onKeyDown = function _BaseSwitch_onKeyDown(event) {
    if (event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
    }
}, _BaseSwitch_toggle = function _BaseSwitch_toggle() {
    if (this.disabled) {
        return;
    }
    this.checked = !this.checked;
    __classPrivateFieldGet(this, _BaseSwitch_instances, "m", _BaseSwitch_updateLabels).call(this);
    this.dispatchEvent(new Event('change', { bubbles: true }));
}, _BaseSwitch_updateLabels = function _BaseSwitch_updateLabels() {
    const labelState = this.checked ? 'on' : 'off';
    this.labels.forEach(label => {
        const states = label.querySelectorAll('[data-state]');
        states.forEach(state => {
            if (state) {
                state.hidden = state.dataset.state !== labelState;
            }
        });
    });
};
BaseSwitch.styles = [styles];
BaseSwitch.formAssociated = true;
__decorate([
    property({ reflect: true })
], BaseSwitch.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean, attribute: 'show-check-icon' })
], BaseSwitch.prototype, "showCheckIcon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], BaseSwitch.prototype, "checked", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], BaseSwitch.prototype, "disabled", void 0);
//# sourceMappingURL=BaseSwitch.js.map