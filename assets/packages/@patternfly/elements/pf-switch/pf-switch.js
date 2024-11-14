var _PfSwitch_instances, _PfSwitch_internals, _PfSwitch_onClick, _PfSwitch_onKeyup, _PfSwitch_onKeydown, _PfSwitch_toggle, _PfSwitch_updateLabels;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n  outline: none;\n}\n\nsvg {\n  fill: currentcolor;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host([checked]) #container {\n  color: var(--pf-c-switch__input--checked__label--Color,\n    var(--pf-global--Color--dark-100, #151515));\n  background-color: var(--pf-c-switch__input--checked__toggle--BackgroundColor,\n    var(--pf-global--primary-color--100, #06c));\n}\n\n:host([checked]) #container::before {\n  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,\n    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n}\n\n:host(:is(:focus,:focus-within)) #container {\n  outline: var(--pf-c-switch__input--focus__toggle--OutlineWidth,\n    var(--pf-global--BorderWidth--md, 2px)) solid var(--pf-c-switch__input--focus__toggle--OutlineColor,\n      var(--pf-global--primary-color--100, #06c));\n  outline-offset: var(--pf-c-switch__input--focus__toggle--OutlineOffset,\n    var(--pf-global--spacer--sm, 0.5rem));\n}\n\n:host(:disabled) {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n:host(:disabled) #container {\n  cursor: not-allowed;\n\n  color: var(--pf-c-switch__input--disabled__label--Color,\n    var(--pf-global--disabled-color--100, #6a6e73));\n  background-color: var(--pf-c-switch__input--disabled__toggle--BackgroundColor,\n    var(--pf-global--disabled-color--200, #d2d2d2));\n}\n\n:host(:disabled) #container::before {\n  background-color: var(--pf-c-switch__input--disabled__toggle--before--BackgroundColor,\n    var(--pf-global--palette--black-150, #f5f5f5));\n}\n\n:host([checked]:disabled) #container::before {\n  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,\n    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n}\n\n:host(:disabled:focus-within) #container {\n  outline: none;\n}\n\n#container {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: var(--pf-c-switch__toggle--Width,\n    calc(var(--pf-c-switch__toggle--Height,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n          var(--pf-global--LineHeight--md, 1.5)))) + var(--pf-c-switch__toggle-icon--Offset, 0.125rem) + var(--pf-c-switch__toggle--before--Width,\n            calc(var(--pf-c-switch--FontSize,\n              var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)))));\n  height: var(--pf-c-switch__toggle--Height,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n        var(--pf-global--LineHeight--md, 1.5))));\n  background-color: var(--pf-c-switch__toggle--BackgroundColor,\n    var(--pf-global--palette--black-500, #8a8d90));\n  border-radius: var(--pf-c-switch__toggle--BorderRadius,\n    var(--pf-c-switch__toggle--Height, calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n        var(--pf-global--LineHeight--md, 1.5)))));\n}\n\n#container::before {\n  position: absolute;\n  display: block;\n  content: "";\n  top: var(--pf-c-switch__toggle--before--Top,\n    calc((var(--pf-c-switch__toggle--Height,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n          var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,\n            var(--pf-c-switch__toggle--before--Width,\n              calc(var(--pf-c-switch--FontSize,\n                var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2));\n  left: var(--pf-c-switch__toggle--before--Left,\n    var(--pf-c-switch__toggle--before--Top,\n      calc((var(--pf-c-switch__toggle--Height,\n        calc(var(--pf-c-switch--FontSize,\n          var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n            var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,\n              var(--pf-c-switch__toggle--before--Width,\n                calc(var(--pf-c-switch--FontSize,\n                  var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2)));\n  width: var(--pf-c-switch__toggle--before--Width,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n  height: var(--pf-c-switch__toggle--before--Height,\n    var(--pf-c-switch__toggle--before--Width,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))));\n  background-color: var(--pf-c-switch__toggle--before--backgroundcolor,\n    var(--pf-global--backgroundcolor--100, #fff));\n  border-radius: var(--pf-c-switch__toggle--before--BorderRadius,\n    var(--pf-global--BorderRadius--lg, 30em));\n  box-shadow: var(--pf-c-switch__toggle--before--BoxShadow,\n    var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)));\n  transition: var(--pf-c-switch__toggle--before--Transition,\n    var(--pf-c-switch__toggle--before--Transition, translate .25s ease 0s));\n}\n\nsvg {\n  margin-inline: var(--pf-c-switch__toggle-icon--Left,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * .4));\n  font-size: var(--pf-c-switch__toggle-icon--FontSize,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * .625));\n  color: var(--pf-c-switch__toggle-icon--Color,\n    var(--pf-global--Color--light-100, #fff));\n}\n`;
let PfSwitch = class PfSwitch extends LitElement {
    constructor() {
        super(...arguments);
        _PfSwitch_instances.add(this);
        _PfSwitch_internals.set(this, InternalsController.of(this, { role: 'switch' }));
        /** Flag to show if the switch has a check icon. */
        this.showCheckIcon = false;
        /** Flag to show if the switch is checked. */
        this.checked = false;
        /** Flag to show if the switch is disabled. */
        this.disabled = false;
    }
    get labels() {
        return __classPrivateFieldGet(this, _PfSwitch_internals, "f").labels;
    }
    connectedCallback() {
        super.connectedCallback();
        this.tabIndex = 0;
        this.addEventListener('click', __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_onClick));
        this.addEventListener('keyup', __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_onKeyup));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_onKeydown));
        __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_updateLabels).call(this);
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
        this.requestUpdate();
    }
    willUpdate() {
        __classPrivateFieldGet(this, _PfSwitch_internals, "f").ariaChecked = String(!!this.checked);
        __classPrivateFieldGet(this, _PfSwitch_internals, "f").ariaDisabled = String(!!this.disabled);
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
};
_PfSwitch_internals = new WeakMap();
_PfSwitch_instances = new WeakSet();
_PfSwitch_onClick = function _PfSwitch_onClick(event) {
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
    __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_toggle).call(this);
};
_PfSwitch_onKeyup = function _PfSwitch_onKeyup(event) {
    switch (event.key) {
        case ' ':
        case 'Enter':
            event.preventDefault();
            __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_toggle).call(this);
    }
};
_PfSwitch_onKeydown = function _PfSwitch_onKeydown(event) {
    if (event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
    }
};
_PfSwitch_toggle = function _PfSwitch_toggle() {
    if (!this.disabled) {
        this.checked = !this.checked;
        __classPrivateFieldGet(this, _PfSwitch_instances, "m", _PfSwitch_updateLabels).call(this);
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
};
_PfSwitch_updateLabels = function _PfSwitch_updateLabels() {
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
PfSwitch.styles = [styles];
PfSwitch.formAssociated = true;
PfSwitch.version = "4.0.2";
__decorate([
    property({ reflect: true })
], PfSwitch.prototype, "label", void 0);
__decorate([
    property({ reflect: true, type: Boolean, attribute: 'show-check-icon' })
], PfSwitch.prototype, "showCheckIcon", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfSwitch.prototype, "checked", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfSwitch.prototype, "disabled", void 0);
PfSwitch = __decorate([
    customElement('pf-switch')
], PfSwitch);
export { PfSwitch };
//# sourceMappingURL=pf-switch.js.map