var _PfSwitch_instances, _PfSwitch_internals, _PfSwitch_onClick, _PfSwitch_onKeyup, _PfSwitch_onKeydown, _PfSwitch_toggle, _PfSwitch_updateLabels;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {
  display: inline-block;
  outline: none;
}

svg {
  fill: currentcolor;
}

[hidden] {
  display: none !important;
}

:host([checked]) #container {
  /** Color of the label when switch is checked */
  color: var(--pf-c-switch__input--checked__label--Color,
    var(--pf-global--Color--dark-100, #151515));
  /** Background color of the toggle when switch is checked */
  background-color: var(--pf-c-switch__input--checked__toggle--BackgroundColor,
    var(--pf-global--primary-color--100, #06c));
}

:host([checked]) #container::before {
  /** Translation of the toggle knob when checked */
  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,
    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));
}

:host(:is(:focus,:focus-within)) #container {
  /** Focus outline width */
  outline: var(--pf-c-switch__input--focus__toggle--OutlineWidth,
    var(--pf-global--BorderWidth--md, 2px)) solid var(--pf-c-switch__input--focus__toggle--OutlineColor,
      var(--pf-global--primary-color--100, #06c));
  /** Focus outline offset */
  outline-offset: var(--pf-c-switch__input--focus__toggle--OutlineOffset,
    var(--pf-global--spacer--sm, 0.5rem));
}

:host(:disabled) {
  pointer-events: none;
  cursor: not-allowed;
}

:host(:disabled) #container {
  cursor: not-allowed;

  /** Color of the label when switch is disabled */
  color: var(--pf-c-switch__input--disabled__label--Color,
    var(--pf-global--disabled-color--100, #6a6e73));
  /** Background color when switch is disabled */
  background-color: var(--pf-c-switch__input--disabled__toggle--BackgroundColor,
    var(--pf-global--disabled-color--200, #d2d2d2));
}

:host(:disabled) #container::before {
  /** Background color of the toggle knob when disabled */
  background-color: var(--pf-c-switch__input--disabled__toggle--before--BackgroundColor,
    var(--pf-global--palette--black-150, #f5f5f5));
}

:host([checked]:disabled) #container::before {
  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,
    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));
}

:host(:disabled:focus-within) #container {
  outline: none;
}

#container {
  position: relative;
  display: inline-flex;
  align-items: center;
  /** Width of the toggle */
  width: var(--pf-c-switch__toggle--Width,
    calc(var(--pf-c-switch__toggle--Height,
      calc(var(--pf-c-switch--FontSize,
        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,
          var(--pf-global--LineHeight--md, 1.5)))) + var(--pf-c-switch__toggle-icon--Offset, 0.125rem) + var(--pf-c-switch__toggle--before--Width,
            calc(var(--pf-c-switch--FontSize,
              var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)))));
  height: var(--pf-c-switch__toggle--Height,
    calc(var(--pf-c-switch--FontSize,
      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,
        var(--pf-global--LineHeight--md, 1.5))));
  /** Background color of the toggle */
  background-color: var(--pf-c-switch__toggle--BackgroundColor,
    var(--pf-global--palette--black-500, #8a8d90));
  /** Border radius of the toggle */
  border-radius: var(--pf-c-switch__toggle--BorderRadius,
    var(--pf-c-switch__toggle--Height, calc(var(--pf-c-switch--FontSize,
      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,
        var(--pf-global--LineHeight--md, 1.5)))));
}

#container::before {
  position: absolute;
  display: block;
  content: "";
  /** Top position of the toggle knob */
  top: var(--pf-c-switch__toggle--before--Top,
    calc((var(--pf-c-switch__toggle--Height,
      calc(var(--pf-c-switch--FontSize,
        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,
          var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,
            var(--pf-c-switch__toggle--before--Width,
              calc(var(--pf-c-switch--FontSize,
                var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2));
  /** Left position of the toggle knob */
  left: var(--pf-c-switch__toggle--before--Left,
    var(--pf-c-switch__toggle--before--Top,
      calc((var(--pf-c-switch__toggle--Height,
        calc(var(--pf-c-switch--FontSize,
          var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,
            var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,
              var(--pf-c-switch__toggle--before--Width,
                calc(var(--pf-c-switch--FontSize,
                  var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2)));
  /** Width of the toggle knob */
  width: var(--pf-c-switch__toggle--before--Width,
    calc(var(--pf-c-switch--FontSize,
      var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));
  /** Height of the toggle knob */
  height: var(--pf-c-switch__toggle--before--Height,
    var(--pf-c-switch__toggle--before--Width,
      calc(var(--pf-c-switch--FontSize,
        var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))));
  /** Background color of the toggle knob */
  background-color: var(--pf-c-switch__toggle--before--backgroundcolor,
    var(--pf-global--backgroundcolor--100, #fff));
  /** Border radius of the toggle knob */
  border-radius: var(--pf-c-switch__toggle--before--BorderRadius,
    var(--pf-global--BorderRadius--lg, 30em));
  /** Box shadow of the toggle knob */
  box-shadow: var(--pf-c-switch__toggle--before--BoxShadow,
    var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)));
  /** Transition of the toggle knob */
  transition: var(--pf-c-switch__toggle--before--Transition,
    var(--pf-c-switch__toggle--before--Transition, translate .25s ease 0s));
}

svg {
  /** Horizontal margin of the toggle icon */
  margin-inline: var(--pf-c-switch__toggle-icon--Left,
    calc(var(--pf-c-switch--FontSize,
      var(--pf-global--FontSize--md, 1rem)) * .4));
  /** Font size of the toggle icon */
  font-size: var(--pf-c-switch__toggle-icon--FontSize,
    calc(var(--pf-c-switch--FontSize,
      var(--pf-global--FontSize--md, 1rem)) * .625));
  /** Color of the toggle icon */
  color: var(--pf-c-switch__toggle-icon--Color,
    var(--pf-global--Color--light-100, #fff));
}
`;
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
PfSwitch.version = "4.3.0";
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