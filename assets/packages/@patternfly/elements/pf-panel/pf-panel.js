var _PfPanel_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host {\n  /* NB: upstream sets these on the container, which is why we do not use fallbacks here. */\n  --pf-c-panel--Width: auto;\n  --pf-c-panel--MinWidth: auto;\n  --pf-c-panel--MaxWidth: none;\n  --pf-c-panel--ZIndex: auto;\n  --pf-c-panel--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);\n  --pf-c-panel--BoxShadow: none;\n  --pf-c-panel--before--BorderWidth: 0;\n  --pf-c-panel--before--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);\n  --pf-c-panel--m-bordered--before--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-panel--m-raised--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));\n  --pf-c-panel--m-raised--ZIndex: var(--pf-global--ZIndex--sm, 200);\n  --pf-c-panel__header--PaddingTop: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__header--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__header--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__header--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__main--MaxHeight: none;\n  --pf-c-panel__main--Overflow: visible;\n  --pf-c-panel__main-body--PaddingTop: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__main-body--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__main-body--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__main-body--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__footer--PaddingTop: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__footer--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__footer--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__footer--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-panel__footer--BoxShadow: none;\n  --pf-c-panel--m-scrollable__main--MaxHeight: 18.75rem;\n  --pf-c-panel--m-scrollable__main--Overflow: auto;\n  --pf-c-panel--m-scrollable__footer--BoxShadow: 0 -0.3125rem 0.25rem -0.25rem rgba(3, 3, 3, 0.16);\n  position: relative;\n  z-index: var(--pf-c-panel--ZIndex);\n  width: var(--pf-c-panel--Width);\n  min-width: var(--pf-c-panel--MinWidth);\n  max-width: var(--pf-c-panel--MaxWidth);\n  background-color: var(--pf-c-panel--BackgroundColor);\n  box-shadow: var(--pf-c-panel--BoxShadow);\n  display: block;\n}\n\n:host([variant="bordered"])::before {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  border:\n  var(--pf-c-panel--m-bordered--before--BorderWidth, var(--pf-global--BorderWidth--sm, 1px))\n    solid\n    var(--pf-c-panel--before--BorderColor,\n      var(--pf-global--BorderColor--100, #d2d2d2));\n}\n\n:host([variant="raised"])::before {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  content: "";\n  box-shadow: var(--pf-c-panel--m-raised--BoxShadow, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));\n  z-index: var(--pf-c-panel--m-raised--ZIndex, var(--pf-global--ZIndex--sm, 200));\n}\n\n:host([variant="raised"]) {\n  --pf-c-panel--BoxShadow: var(--pf-c-panel--m-raised--BoxShadow,\n    var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)));\n  --pf-c-panel--ZIndex: var(--pf-c-panel--m-raised--ZIndex,\n    var(--pf-global--ZIndex--sm, 200));\n}\n\n:host([scrollable]) {\n  --pf-c-panel__main--MaxHeight: var(--pf-c-panel--m-scrollable__main--MaxHeight);\n  --pf-c-panel__main--Overflow: var(--pf-c-panel--m-scrollable__main--Overflow);\n  --pf-c-panel__footer--BoxShadow: var(--pf-c-panel--m-scrollable__footer--BoxShadow);\n}\n\n[hidden] {\n  display: none !important;\n}\n\nslot {\n  display: block;\n}\n\nslot:not([name]) {\n  max-height: var(--pf-c-panel__main--MaxHeight);\n  overflow: var(--pf-c-panel__main--Overflow);\n  padding:\n    var(--pf-c-panel__main-body--PaddingTop,\n      var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-panel__main-body--PaddingRight,\n      var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-panel__main-body--PaddingBottom,\n      var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-panel__main-body--PaddingLeft,\n      var(--pf-global--spacer--md, 1rem));\n}\n\nslot[name="header"] {\n  padding:\n    var(--pf-c-panel__header--PaddingTop)\n    var(--pf-c-panel__header--PaddingRight)\n    var(--pf-c-panel__header--PaddingBottom)\n    var(--pf-c-panel__header--PaddingLeft);\n}\n\nslot[name="footer"] {\n  padding:\n    var(--pf-c-panel__footer--PaddingTop)\n    var(--pf-c-panel__footer--PaddingRight)\n    var(--pf-c-panel__footer--PaddingBottom)\n    var(--pf-c-panel__footer--PaddingLeft);\n  box-shadow: var(--pf-c-panel__footer--BoxShadow);\n}\n\nhr {\n  --pf-c-divider--BorderWidth--base: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-divider--BorderColor--base: var(--pf-c-divider--BackgroundColor);\n  --pf-c-divider--Height: var(--pf-c-divider--BorderWidth--base);\n  --pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100, #d2d2d2);\n  --pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BorderColor--base);\n  --pf-c-divider--after--FlexBasis: 100%;\n  --pf-c-divider--after--Inset: 0%;\n  --pf-c-divider--m-vertical--after--FlexBasis: 100%;\n  --pf-c-divider--m-horizontal--Display: flex;\n  --pf-c-divider--m-horizontal--FlexDirection: row;\n  --pf-c-divider--m-horizontal--after--Height: var(--pf-c-divider--Height);\n  --pf-c-divider--m-horizontal--after--Width: auto;\n  --pf-c-divider--m-vertical--Display: inline-flex;\n  --pf-c-divider--m-vertical--FlexDirection: column;\n  --pf-c-divider--m-vertical--after--Height: auto;\n  --pf-c-divider--m-vertical--after--Width: var(--pf-c-divider--BorderWidth--base);\n  --pf-hidden-visible--visible--Display: var(--pf-c-divider--Display);\n  --pf-c-divider--Display: var(--pf-c-divider--m-horizontal--Display);\n  --pf-c-divider--FlexDirection: var(--pf-c-divider--m-horizontal--FlexDirection);\n  --pf-c-divider--after--Width: var(--pf-c-divider--m-horizontal--after--Width);\n  --pf-c-divider--after--Height: var(--pf-c-divider--m-horizontal--after--Height);\n  width: 100%;\n  height: auto;\n  display: var(--pf-c-divider--Display);\n  flex-direction: var(--pf-c-divider--FlexDirection);\n  align-items: center;\n  align-self: stretch;\n  flex-shrink: 0;\n  justify-content: center;\n  border: 0;\n}\n\nhr::after {\n  align-self: stretch;\n  width: var(--pf-c-divider--after--Width);\n  height: var(--pf-c-divider--after--Height);\n  content: "";\n  background-color: var(--pf-c-divider--after--BackgroundColor);\n  justify-self: center;\n  padding: 0;\n  margin: 0;\n  flex-basis: calc(var(--pf-c-divider--after--FlexBasis) - var(--pf-c-divider--after--Inset) * 2);\n}\n\n::slotted(:is(p, h1, h2, h3, h4, h5, h6):first-of-type) {\n  margin-block-start: 0;\n}\n\n::slotted(:is(p, h1, h2, h3, h4, h5, h6):last-of-type) {\n  margin-block-end: 0;\n}\n\n::slotted(:is(p, h1, h2, h3, h4, h5, h6):is(:last-of-type, :first-of-type)) {\n  margin-block: 0;\n}\n`;
/**
 * The **panel** component is a container that supports flexible content layouts. It can
 * be used to house other components such as fields, forms, videos, buttons, and more.
 * The panel should not be confused with the [drawer](https://www.patternfly.org/v4/components/drawer/design-guidelines/)
 * component, which allows you to surface information via a collapsable container.
 *
 * @slot header - Place header content here
 * @slot - Place main content here
 * @slot footer - Place footer content here
 */
let PfPanel = class PfPanel extends LitElement {
    constructor() {
        super(...arguments);
        this.scrollable = false;
        _PfPanel_slots.set(this, new SlotController(this, 'header', null, 'footer'));
    }
    render() {
        const hasHeader = __classPrivateFieldGet(this, _PfPanel_slots, "f").hasSlotted('header');
        const hasFooter = __classPrivateFieldGet(this, _PfPanel_slots, "f").hasSlotted('footer');
        return html `
      <header>
        <slot name="header" ?hidden="${!hasHeader}"></slot>
      </header>
      <hr role="presentation" ?hidden="${!hasHeader}">
      <slot></slot>
      <footer>
        <slot name="footer" ?hidden="${!hasFooter}"></slot>
      </footer>
    `;
    }
};
_PfPanel_slots = new WeakMap();
PfPanel.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], PfPanel.prototype, "scrollable", void 0);
__decorate([
    property({ reflect: true })
], PfPanel.prototype, "variant", void 0);
PfPanel = __decorate([
    customElement('pf-panel')
], PfPanel);
export { PfPanel };
//# sourceMappingURL=pf-panel.js.map