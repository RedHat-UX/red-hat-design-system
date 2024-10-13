var _PfTab_instances, _PfTab_internals, _PfTab_onClick, _PfTab_onKeydown, _PfTab_onFocus, _PfTab_activate;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { observes } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { TabExpandEvent, context } from './context.js';
import { css } from "lit";
const styles = css `[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: flex;\n  flex: none;\n  outline: none;\n  scroll-snap-align: var(--pf-c-tabs__item--ScrollSnapAlign, end);\n}\n\n.active {\n  --pf-c-tabs__link--Color: var(--pf-c-tabs__item--m-current__link--Color,  var(--pf-global--Color--100, #151515));\n  --pf-c-tabs__link--after--BorderColor: var(--pf-c-tabs__item--m-current__link--after--BorderColor, var(--pf-global--active-color--100, #06c));\n  --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__item--m-current__link--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px));\n}\n\n.box.active {\n  --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));\n  --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--BackgroundColor, transparent);\n}\n\n.vertical [part="text"] {\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n\nslot[name="icon"] {\n  display: block;\n}\n\n#button {\n  margin: 0;\n  font-family: inherit;\n  font-size: 100%;\n  border: 0;\n  position: relative;\n  display: flex;\n  flex: 1;\n  text-decoration: none;\n  cursor: pointer;\n  align-items: center;\n  gap: var(--pf-c-tabs__link--child--MarginRight, var(--pf-global--spacer--md, 1rem));\n  line-height: var(--pf-global--LineHeight--md, 1.5);\n  color: var(--pf-global--Color--100, #151515);\n  padding:\n    var(--pf-c-tabs__link--PaddingTop, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-tabs__link--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-tabs__link--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-tabs__link--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  font-size: var(--pf-c-tabs__link--FontSize, var(--pf-global--FontSize--md, 1rem));\n  color: var(--pf-c-tabs__link--Color, var(--pf-global--Color--200, #6a6e73));\n  outline-offset: var(--pf-c-tabs__link--OutlineOffset, calc(-1 * 0.375rem));\n  --pf-c-tabs__link--after--BorderBottomWidth: var(--pf-c-tabs__link--after--BorderWidth, 0);\n  background-color: var(--pf-c-tabs__link--BackgroundColor, transparent);\n}\n\n#button::before,\n#button::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border-style: solid;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  pointer-events: none;\n}\n\n#button::before {\n  border-block-start-width: var(--pf-c-tabs__link--before--BorderTopWidth, 0);\n  border-inline-end-width: var(--pf-c-tabs__link--before--BorderRightWidth, 0);\n  border-block-end-width: var(--pf-c-tabs__link--before--BorderBottomWidth, 0);\n  border-inline-start-width: var(--pf-c-tabs__link--before--BorderLeftWidth, 0);\n  border-block-start-color: var(--pf-c-tabs__link--before--BorderTopColor,  var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2)));\n  border-inline-end-color: var(--pf-c-tabs__link--before--BorderRightColor,  var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2)));\n  border-block-end-color: var(--pf-c-tabs__link--before--BorderBottomColor,  var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2)));\n  border-inline-start-color: var(--pf-c-tabs__link--before--BorderLeftColor,  var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2)));\n}\n\n#button::after {\n  top: var(--pf-c-tabs__link--after--Top, auto);\n  right: var(--pf-c-tabs__link--after--Right, 0);\n  bottom: var(--pf-c-tabs__link--after--Bottom, 0);\n  left: var(--pf-c-tabs__link--before--Left, 0);\n  border-color: var(--pf-c-tabs__link--after--BorderColor, var(--pf-global--BorderColor--light-100, #b8bbbe));\n  border-block-start-width:  var(--pf-c-tabs__link--after--BorderTopWidth, 0);\n  border-inline-end-width: var(--pf-c-tabs__link--after--BorderRightWidth, 0);\n  border-block-end-width: var(--pf-c-tabs__link--after--BorderBottomWidth);\n  border-inline-start-width: var(--pf-c-tabs__link--after--BorderLeftWidth);\n}\n\n:host(:hover) #button {\n  --pf-c-tabs__link-toggle-icon--Color: var(--pf-c-tabs__link--hover__toggle-icon--Color);\n  --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--hover--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px));\n}\n\n:host(:is(:focus, :focus-visible)) #button {\n  outline-width: 1px;\n  outline-style: auto;\n  outline-color: var(--pf-c-tabs__link--after--BorderColor, #06c);\n  --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--focus--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px));\n}\n\n:host(:active) #button {\n  --pf-c-tabs__link--after--BorderWidth: var(--pf-c-tabs__link--active--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px));\n}\n\n.fill #button {\n  flex-basis: 100%;\n  justify-content: center;\n}\n\n:host(:disabled) #button {\n  pointer-events: none;\n}\n\n:host([aria-disabled="true"]) #button {\n  cursor: default;\n}\n\n.box #button {\n  --pf-c-tabs__link--after--BorderTopWidth: var(--pf-c-tabs__link--after--BorderWidth, 0);\n}\n\n:is(.box, .vertical) #button {\n  --pf-c-tabs__link--after--BorderBottomWidth: 0;\n}\n\n.vertical #button {\n  --pf-c-tabs__link--after--Bottom: 0;\n  --pf-c-tabs__link--after--BorderTopWidth: 0;\n  --pf-c-tabs__link--after--BorderLeftWidth: var(--pf-c-tabs__link--after--BorderWidth, 0);\n  max-width: 100%;\n  text-align: left;\n}\n\n.box.vertical #button::after {\n  top: calc(var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)) * -1);\n}\n\n:host(:first-of-type) .box.vertical #button::after,\n.box.vertical.active #button::after {\n  top: 0;\n}\n\n.box.vertical.active #button::before {\n  --pf-c-tabs__link--before--BorderRightColor: var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));\n  --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-tabs__link--before--BorderBottomColor: var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2));\n}\n\n:host(:first-of-type) .box.active #button::before {\n  border-block-start-width: var(--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderTopWidth,  var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n  border-inline-start-width: var(--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth,  var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n}\n\n:host(:last-of-type) .box.active #button::before {\n  border-inline-end-width: var(--pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth, var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n}\n\n:host([disabled]) #button,\n:host([aria-disabled="true"]) #button {\n  --pf-c-tabs__link--Color: var(--pf-c-tabs__link--disabled--Color,  var(--pf-global--disabled-color--100, #6a6e73));\n  --pf-c-tabs__link--BackgroundColor: var(--pf-c-tabs__link--disabled--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5));\n  --pf-c-tabs__link--before--BorderRightWidth: var(--pf-c-tabs__link--disabled--before--BorderRightWidth, 0);\n  --pf-c-tabs__link--before--BorderBottomWidth: var(--pf-c-tabs__link--disabled--before--BorderBottomWidth, var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));\n  --pf-c-tabs__link--before--BorderLeftWidth: var(--pf-c-tabs__link--disabled--before--BorderLeftWidth, 0);\n  --pf-c-tabs__link--after--BorderWidth: 0;\n}\n\n[part="icon"] {\n  display: flex !important;\n}\n\n[part="icon"][hidden] {\n  display: none !important;\n}\n\n:host([disabled][border-bottom="false"]) #button,\n:host([aria-disabled="true"][border-bottom="false"]) #button {\n  --pf-c-tabs__link--before--BorderBottomWidth: 0;\n}\n`;
let PfTab = class PfTab extends LitElement {
    constructor() {
        super(...arguments);
        _PfTab_instances.add(this);
        this.active = false;
        this.disabled = false;
        _PfTab_internals.set(this, InternalsController.of(this, { role: 'tab' }));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        this.addEventListener('click', __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_onClick));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_onKeydown));
        this.addEventListener('focus', __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_onFocus));
    }
    willUpdate() {
        const { borderBottom, box, fill, manual, vertical } = this.ctx ?? {};
        this.toggleAttribute('fill', fill);
        this.toggleAttribute('manual', manual);
        this.toggleAttribute('vertical', vertical);
        if (box) {
            this.setAttribute('box', box);
        }
        else {
            this.removeAttribute('box');
        }
        if (borderBottom) {
            this.setAttribute('border-bottom', borderBottom);
        }
        else {
            this.removeAttribute('border-bottom');
        }
    }
    render() {
        const { active } = this;
        const { box, fill = false, vertical = false } = this.ctx ?? {};
        const light = box === 'light';
        const dark = box === 'dark';
        return html `
      <div id="button"
           part="button"
           class="${classMap({ active, box: !!box, dark, light, fill, vertical })}">
        <slot name="icon"
              part="icon"
              ?hidden="${!this.icons.length}"
              @slotchange="${() => this.requestUpdate()}"></slot>
        <slot part="text"></slot>
      </div>
    `;
    }
    activeChanged(old, active) {
        __classPrivateFieldGet(this, _PfTab_internals, "f").ariaSelected = String(!!active);
        if (active && !old) {
            __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_activate).call(this);
        }
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _PfTab_internals, "f").ariaDisabled = this.disabled ? 'true' : this.ariaDisabled ?? 'false';
    }
};
_PfTab_internals = new WeakMap();
_PfTab_instances = new WeakSet();
_PfTab_onClick = function _PfTab_onClick() {
    if (!this.disabled) {
        __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_activate).call(this);
    }
};
_PfTab_onKeydown = function _PfTab_onKeydown(event) {
    if (!this.disabled) {
        switch (event.key) {
            case 'Enter':
                __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_activate).call(this);
        }
    }
};
_PfTab_onFocus = function _PfTab_onFocus() {
    if (!this.ctx?.manual && !this.disabled) {
        __classPrivateFieldGet(this, _PfTab_instances, "m", _PfTab_activate).call(this);
    }
};
_PfTab_activate = async function _PfTab_activate() {
    this.dispatchEvent(new TabExpandEvent(this));
};
PfTab.styles = [styles];
PfTab.version = "4.0.2";
__decorate([
    queryAssignedElements({ slot: 'icon', flatten: true })
], PfTab.prototype, "icons", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTab.prototype, "active", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfTab.prototype, "disabled", void 0);
__decorate([
    consume({ context, subscribe: true }),
    property({ attribute: false })
], PfTab.prototype, "ctx", void 0);
__decorate([
    observes('active')
], PfTab.prototype, "activeChanged", null);
__decorate([
    observes('disabled')
], PfTab.prototype, "disabledChanged", null);
PfTab = __decorate([
    customElement('pf-tab')
], PfTab);
export { PfTab };
//# sourceMappingURL=pf-tab.js.map