var _PfDropdown_instances, _PfDropdown_logger, _PfDropdown_float, _PfDropdown_validateDOM, _PfDropdown_onSlotchange, _PfDropdown_expandedChanged, _PfDropdown_disabledChanged, _PfDropdown_onSelect, _PfDropdown_onButtonKeydown, _PfDropdown_onMenuFocusout, _PfDropdown_onMenuKeydown;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { provide } from '@lit/context';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { context } from './context.js';
import { PfDropdownItem } from './pf-dropdown-item.js';
import { PfDropdownMenu } from './pf-dropdown-menu.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n  position: relative;\n  --pf-c-dropdown__toggle--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);\n  --pf-c-dropdown__toggle--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);\n  --pf-c-dropdown__toggle--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--MinWidth: 0;\n  --pf-c-dropdown__toggle--FontSize: var(--pf-global--FontSize--md, 1rem);\n  --pf-c-dropdown__toggle--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-dropdown__toggle--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-dropdown__toggle--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n  --pf-c-dropdown__toggle--BackgroundColor: transparent;\n  --pf-c-dropdown__toggle--before--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-dropdown__toggle--before--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);\n  --pf-c-dropdown__toggle--before--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);\n  --pf-c-dropdown__toggle--before--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);\n  --pf-c-dropdown__toggle--before--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);\n  --pf-c-dropdown__toggle--hover--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n  --pf-c-dropdown__toggle--focus--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--focus--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n  --pf-c-dropdown__toggle--active--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--active--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n  --pf-c-dropdown--m-expanded__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown--m-expanded__toggle--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n  --pf-c-dropdown__toggle--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);\n  --pf-c-dropdown__toggle--m-plain--Color: var(--pf-global--Color--200, #6a6e73);\n  --pf-c-dropdown__toggle--m-plain--hover--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-dropdown__toggle--m-plain--disabled--Color: var(--pf-global--disabled-color--200, #d2d2d2);\n  --pf-c-dropdown__toggle--m-plain--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-dropdown__toggle--m-plain--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-dropdown__toggle--m-plain--child--LineHeight: normal;\n  --pf-c-dropdown__toggle--m-primary--Color: var(--pf-global--Color--light-100, #fff);\n  --pf-c-dropdown__toggle--m-primary--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);\n  --pf-c-dropdown__toggle--m-primary--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-primary--hover--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-primary--focus--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-primary--active--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown--m-expanded__toggle--m-primary--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-primary--disabled--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-dropdown__toggle--m-secondary--Color: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);\n  --pf-c-dropdown__toggle--m-secondary--BackgroundColor: transparent;\n  --pf-c-dropdown__toggle--m-secondary--before--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-dropdown__toggle--m-secondary--hover--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--focus--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--active--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--before--BorderColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--hover--before--BorderColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--focus--before--BorderColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--active--before--BorderColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown--m-expanded__toggle--m-secondary--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown--m-expanded__toggle--m-secondary--before--BorderColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle-button--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-dropdown__toggle-progress--Visibility: hidden;\n  --pf-c-dropdown__toggle-progress--c-spinner--diameter: var(--pf-global--FontSize--sm, 0.875rem);\n  --pf-c-dropdown__toggle--m-split-button--child--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);\n  --pf-c-dropdown__toggle--m-split-button--child--PaddingRight: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-dropdown__toggle--m-split-button--child--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);\n  --pf-c-dropdown__toggle--m-split-button--child--PaddingLeft: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-dropdown__toggle--m-split-button--child--BackgroundColor: transparent;\n  --pf-c-dropdown__toggle--m-split-button--first-child--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--m-split-button--last-child--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--m-split-button--m-action__toggle-button--MarginRight: calc(-1 * var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-dropdown__toggle--m-split-button__toggle-check__input--TranslateY: -0.0625rem;\n  --pf-c-dropdown__toggle--m-split-button__toggle-text--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--m-split-button--child--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--BorderRadius: var(--pf-c-dropdown__toggle--m-split-button--child--BorderRadius);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--hover--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--focus--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--active--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--child--m-expanded--BackgroundColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--m-action--child--BorderLeftColor: var(--pf-global--primary-color--200, #004080);\n  --pf-c-dropdown__toggle--m-split-button--m-primary--m-action--child--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-dropdown--m-expanded__toggle--m-secondary--m-split-button--child--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--Color: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--hover--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--focus--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--active--before--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderWidth--base: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderColor--base: var(--pf-global--primary-color--100, #06c);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderColor: var(--pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderColor--base);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderWidth: var(--pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--BorderWidth--base);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--hover--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--focus--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle--m-secondary--m-split-button--child--before--active--BorderWidth: var(--pf-global--BorderWidth--md, 2px);\n  --pf-c-dropdown__toggle-icon--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n  --pf-c-dropdown__toggle-icon--MarginRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle-icon--MarginLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-dropdown--m-top--m-expanded__toggle-icon--Rotate: 180deg;\n  --pf-c-dropdown--m-plain__toggle-icon--Color: var(--pf-global--Color--200, #6a6e73);\n  --pf-c-dropdown--m-plain--hover__toggle-icon--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-dropdown__menu--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #fff);\n  --pf-c-dropdown__menu--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));\n  --pf-c-dropdown__menu--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__menu--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__menu--Top: calc(100% + var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-dropdown__menu--ZIndex: var(--pf-global--ZIndex--sm, 200);\n  --pf-c-dropdown--m-top__menu--Top: 0;\n  --pf-c-dropdown--m-top__menu--TranslateY: calc(-100% - var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-dropdown__menu-item--BackgroundColor: transparent;\n  --pf-c-dropdown__menu-item--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__menu-item--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-dropdown__menu-item--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__menu-item--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-dropdown__menu-item--FontSize: var(--pf-global--FontSize--md, 1rem);\n  --pf-c-dropdown__menu-item--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-dropdown__menu-item--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n  --pf-c-dropdown__menu-item--Color: var(--pf-global--Color--dark-100, #151515);\n  --pf-c-dropdown__menu-item--hover--Color: var(--pf-global--Color--dark-100, #151515);\n  --pf-c-dropdown__menu-item--disabled--Color: var(--pf-global--Color--dark-200, #6a6e73);\n  --pf-c-dropdown__menu-item--hover--BackgroundColor: var(--pf-global--BackgroundColor--light-300, #f0f0f0);\n  --pf-c-dropdown__menu-item--disabled--BackgroundColor: transparent;\n  --pf-c-dropdown__menu-item--m-text--Color: var(--pf-global--Color--dark-200, #6a6e73);\n  --pf-c-dropdown__menu-item-icon--MarginRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__menu-item-icon--Width: var(--pf-global--icon--FontSize--lg, 1.5rem);\n  --pf-c-dropdown__menu-item-icon--Height: var(--pf-global--icon--FontSize--lg, 1.5rem);\n  --pf-c-dropdown__menu-item-description--FontSize: var(--pf-global--FontSize--xs, 0.75rem);\n  --pf-c-dropdown__menu-item-description--Color: var(--pf-global--Color--dark-200, #6a6e73);\n  --pf-c-dropdown__group--group--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__group-title--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__group-title--PaddingRight: var(--pf-c-dropdown__menu-item--PaddingRight);\n  --pf-c-dropdown__group-title--PaddingBottom: var(--pf-c-dropdown__menu-item--PaddingBottom);\n  --pf-c-dropdown__group-title--PaddingLeft: var(--pf-c-dropdown__menu-item--PaddingLeft);\n  --pf-c-dropdown__group-title--FontSize: var(--pf-global--FontSize--xs, 0.75rem);\n  --pf-c-dropdown__group-title--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-dropdown__group-title--Color: var(--pf-global--Color--dark-200, #6a6e73);\n  --pf-c-dropdown__toggle-image--MarginTop: 0;\n  --pf-c-dropdown__toggle-image--MarginBottom: 0;\n  --pf-c-dropdown__toggle-image--MarginRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown--c-divider--MarginTop: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown--c-divider--MarginBottom: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-dropdown__toggle--c-badge__toggle-icon--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-dropdown__toggle--c-badge__toggle-icon--MarginRight: 0;\n  --pf-c-dropdown--c-menu--Top: calc(100% + var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-dropdown--c-menu--ZIndex: var(--pf-global--ZIndex--sm, 200);\n  --pf-c-dropdown--m-top--c-menu--Top: 0;\n  --pf-c-dropdown--m-top--c-menu--TranslateY: calc(-100% - var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-dropdown--m-full-height__toggle--before--BorderTopWidth: 0;\n  --pf-c-dropdown--m-full-height__toggle--expanded--before--BorderBottomWidth: var(--pf-global--BorderWidth--xl, 4px);\n  --pf-c-dropdown--m-full-height__toggle--hover--before--BorderBottomWidth: var(--pf-global--BorderWidth--xl, 4px);\n  --pf-c-dropdown--m-full-height__toggle--active--before--BorderBottomWidth: var(--pf-global--BorderWidth--xl, 4px);\n  --pf-c-dropdown--m-full-height__toggle--focus--before--BorderBottomWidth: var(--pf-global--BorderWidth--xl, 4px);\n  --pf-c-dropdown--m-full-height__toggle--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);\n  --pf-c-dropdown--m-full-height__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n  --_font-size: var(\n    --pf-c-dropdown__menu-item--FontSize,\n    var(--pf-global--FontSize--md, 1rem)\n  );\n  --_font-weight: var(\n    --pf-c-dropdown__menu-item--FontWeight,\n    var(--pf-global--FontWeight--normal, 400)\n  );\n  --_line-height: var(\n    --pf-c-dropdown__menu-item--LineHeight,\n    var(--pf-global--LineHeight--md, 1.5)\n  );\n  --_color: var(\n    --pf-c-dropdown__menu-item--Color,\n    var(--pf-global--Color--dark-100, #151515)\n  );\n  --_background-color: var(\n    --pf-c-dropdown__menu-item--BackgroundColor,\n    transparent\n  );\n}\n\n:host([disabled]) {\n  color: var(--pf-global--Color--dark-200, #6a6e73);\n}\n\n:host([hidden]),\n[hidden] {\n  display: none !important;\n}\n\nslot[name="toggle"] {\n  cursor: pointer;\n}\n\npf-button#default-toggle,\n::slotted([slot="toggle"]) {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: var(--pf-c-dropdown__toggle--MinWidth);\n  max-width: 100%;\n  padding:\n    var(--pf-c-dropdown__toggle--PaddingTop)\n    var(--pf-c-dropdown__toggle--PaddingRight)\n    var(--pf-c-dropdown__toggle--PaddingBottom)\n    var(--pf-c-dropdown__toggle--PaddingLeft);\n  font-size: var(--pf-c-dropdown__toggle--FontSize);\n  font-weight: var(--pf-c-dropdown__toggle--FontWeight);\n  line-height: var(--pf-c-dropdown__toggle--LineHeight);\n  color: var(--pf-c-dropdown__toggle--Color);\n  background-color: var(--pf-c-dropdown__toggle--BackgroundColor);\n  border: none;\n}\n\npf-dropdown-menu,\n::slotted(pf-dropdown-menu) {\n  position: absolute !important;\n  top: var(\n    --pf-c-dropdown__menu--Top,\n    calc(100% + var(--pf-global--spacer--xs, 0.25rem))\n  ) !important;\n  left: 0 !important;\n  z-index: var(\n    --pf-c-dropdown__menu--ZIndex,\n    var(--pf-global--ZIndex--sm, 200)\n  ) !important;\n  padding-top: var(\n    --pf-c-dropdown__menu--PaddingTop,\n    var(--pf-global--spacer--sm, 0.5rem)\n  ) !important;\n  padding-bottom: var(\n    --pf-c-dropdown__menu--PaddingBottom,\n    var(--pf-global--spacer--sm, 0.5rem)\n  ) !important;\n  background: var(--pf-c-dropdown__menu--BackgroundColor, #fff) !important;\n  background-clip: padding-box !important;\n  box-shadow: var(\n    --pf-c-dropdown__menu--BoxShadow,\n    var(\n      --pf-global--BoxShadow--md,\n      0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12),\n      0 0 0.25rem 0 rgba(3, 3, 3, 0.06)\n    )\n  ) !important;\n  min-width: 100% !important;\n  margin: 0 !important;\n}\n\npf-button svg {\n  width: 1em;\n  height: 1em;\n  flex: 0 0 auto;\n  margin-inline-start: 1em;\n}\n\n::slotted(hr) {\n  margin: 0;\n  border-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  border-style: solid;\n}\n\n::slotted([role="separator"]:not(hr)) {\n  width: 100%;\n  height: 1px;\n  background-color: var(--pf-c-divider--BackgroundColor, var(--pf-global--BorderColor--100, #d2d2d2));\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  display: block;\n}\n\n.disabled {\n  & pf-dropdown-menu,\n  & ::slotted(pf-dropdown-menu) {\n    background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n    cursor: not-allowed !important;\n  }\n  & pf-button#default-toggle,\n  & ::slotted([slot="toggle"]) {\n    --pf-c-button--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--after--BorderColor: var(--pf-c-button--disabled--after--BorderColor);\n\n    --pf-c-button--m-primary--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n\n    --pf-c-button--m-secondary--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-secondary--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-secondary--hover--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-secondary--active--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-secondary--after--BorderColor: transparent;\n    --pf-c-button--m-secondary--hover--after--BorderColor: transparent;\n    --pf-c-button--m-secondary--focus--after--BorderColor: transparent;\n    --pf-c-button--m-secondary--active--after--BorderColor: transparent;\n    --pf-c-button--m-secondary--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-secondary--hover--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-secondary--active--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-secondary--focus--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n\n    --pf-c-button--m-control--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-control--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-control--hover--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-control--active--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-control--after--BorderColor: transparent;\n    --pf-c-button--m-control--hover--after--BorderColor: transparent;\n    --pf-c-button--m-control--focus--after--BorderColor: transparent;\n    --pf-c-button--m-control--active--after--BorderColor: transparent;\n    --pf-c-button--m-control--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-control--hover--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-control--active--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-control--focus--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-control--after--BorderBottomColor: transparent;\n    --pf-c-button--m-control--focus--after--BorderBottomColor: transparent;\n    --pf-c-button--m-control--hover--after--BorderBottomColor: transparent;\n    --pf-c-button--m-control--active--after--BorderBottomColor: transparent;\n\n    --pf-c-button--m-plain--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-plain--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-plain--hover--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-plain--active--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-plain--after--BorderColor: transparent;\n    --pf-c-button--m-plain--hover--after--BorderColor: transparent;\n    --pf-c-button--m-plain--focus--after--BorderColor: transparent;\n    --pf-c-button--m-plain--active--after--BorderColor: transparent;\n    --pf-c-button--m-plain--focus--Color: var(--pf-c-button--disabled--Color);\n    --pf-c-button--m-plain--hover--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-plain--active--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n    --pf-c-button--m-plain--focus--BackgroundColor: var(--pf-c-button--disabled--BackgroundColor);\n  }\n\n  & pf-button:focus,\n  & ::slotted([slot="toggle"]:focus) {\n    outline: 3px solid var(--pf-global--link--Color, #0066cc);\n  }\n}\n\npf-button#default-toggle,\n::slotted(pf-button[variant="control"]) {\n  --_button-icon-vertical-align: -0.25em;\n  --_button-icon-padding-inline-start: var(--pf-c-dropdown__toggle--PaddingLeft,\n    var(--pf-global--spacer--md, 1rem));\n  --_button-icon-padding-inline-end: var(-pf-c-dropdown__toggle--PaddingRight,\n    var(--pf-global--spacer--sm, 0.5rem));\n}\n`;
export class PfDropdownSelectEvent extends Event {
    constructor(originalEvent, value) {
        super('select', { bubbles: true, cancelable: true });
        this.originalEvent = originalEvent;
        this.value = value;
    }
}
let PfDropdown = class PfDropdown extends LitElement {
    constructor() {
        super(...arguments);
        _PfDropdown_instances.add(this);
        /**
         * When disabled, the dropdown can still be toggled open and closed via keyboard, but menu items cannot be activated.
         */
        this.disabled = false;
        /**
         * Whether the dropdown is expanded
         */
        this.expanded = false;
        this.ctx = { disabled: false };
        _PfDropdown_logger.set(this, new Logger(this));
        _PfDropdown_float.set(this, new FloatingDOMController(this, {
            content: () => this._menuElements?.at(0),
        }));
    }
    async getUpdateComplete() {
        const ps = await Promise.all([
            super.getUpdateComplete(),
            this._menuElements?.map(x => x.updateComplete),
        ]);
        return ps.every(x => !!x);
    }
    willUpdate(changed) {
        if (changed.has('disabled')) {
            const { disabled } = this;
            this.ctx = { disabled };
        }
    }
    render() {
        const { expanded } = this;
        const { anchor, alignment, styles = {} } = __classPrivateFieldGet(this, _PfDropdown_float, "f");
        const { disabled } = this;
        return html `
    <div class="${classMap({ disabled,
            expanded,
            [anchor ?? '']: !!anchor,
            [alignment ?? '']: !!alignment })}"
         style="${styleMap(styles)}"
         @slotchange="${__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onSlotchange)}">
      <slot name="toggle"
            @keydown="${__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onButtonKeydown)}"
            @click="${() => this.toggle()}">
        <pf-button id="default-toggle" variant="control">
          Dropdown
          <pf-icon icon="caret-down" size="md"></pf-icon>
        </pf-button>
      </slot>
      <slot name="menu"
            ?hidden="${!this.expanded}"
            @focusout="${__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onMenuFocusout)}"
            @keydown="${__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onMenuKeydown)}"
            @click="${__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onSelect)}">
        <pf-dropdown-menu id="menu" part="menu" ?disabled="${disabled}">
          <slot></slot>
        </pf-dropdown-menu>
      </slot>
    </div>`;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onSlotchange).call(this);
    }
    updated(changed) {
        if (changed.has('expanded')) {
            __classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_expandedChanged).call(this);
        }
        if (changed.has('disabled')) {
            __classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_disabledChanged).call(this);
        }
    }
    /**
     * Opens the dropdown
     */
    async show() {
        this.expanded = true;
        await this.updateComplete;
    }
    /**
     * Closes the dropdown
     */
    async hide() {
        this.expanded = false;
        await this.updateComplete;
    }
    async toggle() {
        this.expanded = !this.expanded;
        await this.updateComplete;
    }
};
_PfDropdown_logger = new WeakMap();
_PfDropdown_float = new WeakMap();
_PfDropdown_instances = new WeakSet();
_PfDropdown_validateDOM = function _PfDropdown_validateDOM() {
    const [toggle] = this._toggleElements;
    const [menu] = this._menuElements;
    if (!toggle) {
        __classPrivateFieldGet(this, _PfDropdown_logger, "f").warn('no toggle found');
        return false;
    }
    else if (!menu) {
        __classPrivateFieldGet(this, _PfDropdown_logger, "f").warn('no menu found');
        return false;
    }
    else if (![toggle, menu].map(x => this.shadowRoot?.contains(x))
        .every((p, _, a) => p === a[0])) {
        __classPrivateFieldGet(this, _PfDropdown_logger, "f").warn('toggle and menu must be located in the same root');
        return false;
    }
    else {
        return true;
    }
};
_PfDropdown_onSlotchange = function _PfDropdown_onSlotchange() {
    if (__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_validateDOM).call(this)) {
        const [menu] = this._menuElements;
        const [toggle] = this._toggleElements;
        menu.id || (menu.id = getRandomId('menu'));
        toggle.setAttribute('aria-controls', menu.id);
        toggle.setAttribute('aria-haspopup', menu.id);
        toggle.setAttribute('aria-expanded', String(this.expanded));
    }
};
_PfDropdown_expandedChanged = async function _PfDropdown_expandedChanged() {
    const will = this.expanded ? 'close' : 'open';
    const [menu] = this._menuElements;
    const [toggle] = this._toggleElements;
    toggle.setAttribute('aria-expanded', `${String(this.expanded)}`);
    this.dispatchEvent(new Event(will));
    if (this.expanded) {
        await __classPrivateFieldGet(this, _PfDropdown_float, "f").show();
        if (menu instanceof PfDropdownMenu) {
            menu.activeItem?.focus();
        }
    }
    else {
        await __classPrivateFieldGet(this, _PfDropdown_float, "f").hide();
    }
};
_PfDropdown_disabledChanged = function _PfDropdown_disabledChanged() {
    if (__classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_validateDOM).call(this)) {
        const [toggle] = this._toggleElements;
        toggle.setAttribute('aria-disabled', String(!!this.disabled));
    }
};
_PfDropdown_onSelect = function _PfDropdown_onSelect(event) {
    const [menu] = this._menuElements;
    if (menu instanceof PfDropdownMenu) {
        const target = event.target || menu.activeItem;
        this.dispatchEvent(new PfDropdownSelectEvent(event, `${target?.value}`));
        this.hide();
    }
};
_PfDropdown_onButtonKeydown = function _PfDropdown_onButtonKeydown(event) {
    switch (event.key) {
        case 'ArrowDown': {
            this.show();
        }
    }
};
_PfDropdown_onMenuFocusout = function _PfDropdown_onMenuFocusout(event) {
    if (this.expanded) {
        const root = this.getRootNode();
        const [menu] = this._menuElements;
        if (root instanceof ShadowRoot
            || root instanceof Document
                && event.relatedTarget instanceof PfDropdownItem
                && menu instanceof PfDropdownMenu
                && !menu.items.includes(event.relatedTarget)) {
            this.hide();
        }
    }
};
_PfDropdown_onMenuKeydown = function _PfDropdown_onMenuKeydown(event) {
    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            __classPrivateFieldGet(this, _PfDropdown_instances, "m", _PfDropdown_onSelect).call(this, event);
            break;
        case 'Escape':
            this.hide();
            this._toggleElements?.at(0)?.focus();
    }
};
PfDropdown.styles = [styles];
PfDropdown.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfDropdown.version = "4.1.0";
__decorate([
    property({ type: Boolean, reflect: true })
], PfDropdown.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfDropdown.prototype, "expanded", void 0);
__decorate([
    queryAssignedElements({ slot: 'toggle', flatten: true })
], PfDropdown.prototype, "_toggleElements", void 0);
__decorate([
    queryAssignedElements({ slot: 'menu', flatten: true })
], PfDropdown.prototype, "_menuElements", void 0);
__decorate([
    provide({ context })
], PfDropdown.prototype, "ctx", void 0);
PfDropdown = __decorate([
    customElement('pf-dropdown')
], PfDropdown);
export { PfDropdown };
//# sourceMappingURL=pf-dropdown.js.map