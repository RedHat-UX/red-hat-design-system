var _PfSelect_instances, _PfSelect_isNotPlaceholderOption, _PfSelect_internals, _PfSelect_float, _PfSelect_slots, _PfSelect_combobox, _PfSelect_hasBadge_get, _PfSelect_buttonLabel_get, _PfSelect_doExpand, _PfSelect_doCollapse, _PfSelect_onChipRemove, _PfSelect_computePlaceholderText;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ComboboxController } from '@patternfly/pfe-core/controllers/combobox-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { arraysAreEquivalent } from '@patternfly/pfe-core/functions/arraysAreEquivalent.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { PfOption } from './pf-option.js';
import { PfChipRemoveEvent } from '../pf-chip/pf-chip.js';
import { css } from "lit";
const styles = css `:host {\n  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);\n  font-size: var(--pf-global--FontSize--md, 16px);\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n\tcolor: var(--pf-global--Color--100, #151515);\n  --_pf-option-checkboxes-display: none;\n  --_pf-option-svg-display: block;\n\t--pf-c-select__toggle--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);\n\t--pf-c-select__toggle--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);\n\t--pf-c-select__toggle--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle--MinWidth: var(--pf-global--target-size--MinWidth, 44px);\n\t--pf-c-select__toggle--FontSize: var(--pf-global--FontSize--md, 1rem);\n\t--pf-c-select__toggle--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-select__toggle--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n\t--pf-c-select__toggle--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);\n\t--pf-c-select__toggle--before--BorderTopWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-select__toggle--before--BorderRightWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-select__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-select__toggle--before--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-select__toggle--before--BorderWidth: initial;\n\t--pf-c-select__toggle--before--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-select__toggle--before--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-select__toggle--before--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);\n\t--pf-c-select__toggle--before--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-select__toggle--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__toggle--hover--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n\t--pf-c-select__toggle--focus--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n\t--pf-c-select__toggle--focus--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select__toggle--active--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n\t--pf-c-select__toggle--active--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);\n\t--pf-c-select__toggle--m-expanded--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select__toggle--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);\n\t--pf-c-select__toggle--m-plain--before--BorderColor: transparent;\n\t--pf-c-select__toggle--m-placeholder--Color: transparent;\n\t--pf-c-select--m-invalid__toggle--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-invalid__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select--m-invalid__toggle--hover--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-invalid__toggle--focus--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-invalid__toggle--active--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-invalid__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-invalid__toggle-status-icon--Color: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-select--m-success__toggle--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-success__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select--m-success__toggle--hover--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-success__toggle--focus--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-success__toggle--active--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-success__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-success__toggle-status-icon--Color: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-select--m-warning__toggle--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select--m-warning__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-select--m-warning__toggle--hover--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select--m-warning__toggle--focus--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select--m-warning__toggle--active--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select--m-warning__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select--m-warning__toggle-status-icon--Color: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-select__toggle-wrapper--not-last-child--MarginRight: var(--pf-global--spacer--xs, 0.25rem);\n\t--pf-c-select__toggle-wrapper--MaxWidth: calc(100% - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-select__toggle-wrapper--c-chip-group--MarginTop: 0.3125rem;\n\t--pf-c-select__toggle-wrapper--c-chip-group--MarginBottom: 0.3125rem;\n\t--pf-c-select__toggle-typeahead--FlexBasis: 10em;\n\t--pf-c-select__toggle-typeahead--BackgroundColor: transparent;\n\t--pf-c-select__toggle-typeahead--BorderTop: var(--pf-global--BorderWidth--sm, 1px) solid transparent;\n\t--pf-c-select__toggle-typeahead--BorderRight: none;\n\t--pf-c-select__toggle-typeahead--BorderLeft: none;\n\t--pf-c-select__toggle-typeahead--MinWidth: 7.5rem;\n\t--pf-c-select__toggle-typeahead--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--md));\n\t--pf-c-select__toggle--m-placeholder__toggle-text--Color: var(--pf-global--Color--dark-200, #6a6e73);\n\t--pf-c-select__toggle-icon--toggle-text--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);\n\t--pf-c-select__toggle-badge--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle-status-icon--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);\n\t--pf-c-select__toggle-status-icon--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__toggle-arrow--MarginLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__toggle-arrow--MarginRight: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle-arrow--with-clear--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Rotate: 180deg;\n\t--pf-c-select--m-plain__toggle-arrow--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select--m-plain--hover__toggle-arrow--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__toggle-clear--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle-clear--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__toggle-clear--toggle-button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__toggle-button--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__menu--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #fff);\n\t--pf-c-select__menu--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));\n\t--pf-c-select__menu--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu--Top: calc(100% + var(--pf-global--spacer--xs, 0.25rem));\n\t--pf-c-select__menu--ZIndex: var(--pf-global--ZIndex--sm, 200);\n\t--pf-c-select__menu--Width: auto;\n\t--pf-c-select__menu--MinWidth: 100%;\n\t--pf-c-select__menu--m-top--TranslateY: calc(-100% - var(--pf-global--spacer--xs, 0.25rem));\n\t--pf-c-select__list-item--m-loading--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-item--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-item--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-item--m-selected--PaddingRight: var(--pf-global--spacer--2xl, 3rem);\n\t--pf-c-select__menu-item--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-item--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-item--FontSize: var(--pf-global--FontSize--md, 1rem);\n\t--pf-c-select__menu-item--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-select__menu-item--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n\t--pf-c-select__menu-item--Color: var(--pf-global--Color--dark-100, #151515);\n\t--pf-c-select__menu-item--disabled--Color: var(--pf-global--Color--dark-200, #6a6e73);\n\t--pf-c-select__menu-item--Width: 100%;\n\t--pf-c-select__menu-item--hover--BackgroundColor: var(--pf-global--BackgroundColor--light-300, #f0f0f0);\n\t--pf-c-select__menu-item--focus--BackgroundColor: var(--pf-global--BackgroundColor--light-300, #f0f0f0);\n\t--pf-c-select__menu-item--disabled--BackgroundColor: transparent;\n\t--pf-c-select__menu-item--m-link--Width: auto;\n\t--pf-c-select__menu-item--m-link--hover--BackgroundColor: transparent;\n\t--pf-c-select__menu-item--m-link--focus--BackgroundColor: transparent;\n\t--pf-c-select__menu-item--m-action--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select__menu-item--m-action--hover--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__menu-item--m-action--focus--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__menu-item--m-action--disabled--Color: var(--pf-global--disabled-color--200, #d2d2d2);\n\t--pf-c-select__menu-item--m-action--Width: auto;\n\t--pf-c-select__menu-item--m-action--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);\n\t--pf-c-select__menu-item--m-action--hover--BackgroundColor: transparent;\n\t--pf-c-select__menu-item--m-action--focus--BackgroundColor: transparent;\n\t--pf-c-select__menu-item--hover__menu-item--m-action--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select__menu-item--m-favorite-action--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select__menu-item--m-favorite-action--hover--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__menu-item--m-favorite-action--focus--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--Color: var(--pf-global--palette--gold-400, #f0ab00);\n\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--hover--Color: var(--pf-global--palette--gold-500, #c58c00);\n\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--focus--Color: var(--pf-global--palette--gold-500, #c58c00);\n\t--pf-c-select__menu-item--m-load--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-select__menu-item-icon--Color: var(--pf-global--active-color--100, #06c);\n\t--pf-c-select__menu-item-icon--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);\n\t--pf-c-select__menu-item-icon--Right: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-item-icon--Top: 50%;\n\t--pf-c-select__menu-item-icon--TranslateY: -50%;\n\t--pf-c-select__menu-item-action-icon--MinHeight: calc(var(--pf-c-select__menu-item--FontSize) * var(--pf-c-select__menu-item--LineHeight));\n\t--pf-c-select__menu-item--match--FontWeight: var(--pf-global--FontWeight--bold, 700);\n\t--pf-c-select__menu-search--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-search--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);\n\t--pf-c-select__menu-search--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-search--PaddingLeft: var(--pf-c-select__menu-item--PaddingLeft);\n\t--pf-c-select__menu-group--menu-group--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-group-title--PaddingTop: var(--pf-c-select__menu-item--PaddingTop);\n\t--pf-c-select__menu-group-title--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);\n\t--pf-c-select__menu-group-title--PaddingBottom: var(--pf-c-select__menu-item--PaddingBottom);\n\t--pf-c-select__menu-group-title--PaddingLeft: var(--pf-c-select__menu-item--PaddingLeft);\n\t--pf-c-select__menu-group-title--FontSize: var(--pf-global--FontSize--xs, 0.75rem);\n\t--pf-c-select__menu-group-title--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-select__menu-group-title--Color: var(--pf-global--Color--dark-200, #6a6e73);\n\t--pf-c-select__menu-item-count--MarginLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-item-count--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n\t--pf-c-select__menu-item-count--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select__menu-item--disabled__menu-item-count--Color: var(--pf-global--Color--dark-200, #6a6e73);\n\t--pf-c-select__menu-item-description--FontSize: var(--pf-global--FontSize--xs, 0.75rem);\n\t--pf-c-select__menu-item-description--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-select__menu-item-description--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);\n\t--pf-c-select__menu-item-main--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);\n\t--pf-c-select__menu-item--m-selected__menu-item-main--PaddingRight: var(--pf-c-select__menu-item--m-selected--PaddingRight);\n\t--pf-c-select__menu-footer--BoxShadow: var(--pf-global--BoxShadow--sm-top, 0 -0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));\n\t--pf-c-select__menu-footer--PaddingTop: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-footer--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-footer--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-footer--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-select__menu-footer--MarginTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select__menu-footer--MarginBottom: calc(var(--pf-global--spacer--sm, 0.5rem) * -1);\n\t--pf-c-select-menu--c-divider--MarginTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-select-menu--c-divider--MarginBottom: var(--pf-global--spacer--sm, 0.5rem);\n}\n\n:host, #outer {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n:host([hidden]),\n*[hidden] {\n  display: none !important;\n}\n\n:host([disabled]) {\n  pointer-events: none !important;\n}\n\n#outer.disabled {\n  color: var(--pf-global--Color--dark-200, #6a6e73) !important;\n}\n\n#outer {\n  position: relative;\n}\n\n/* TODO(bennyp): see if we can get rid of this wrapping node, for perf reasons */\n#listbox-container {\n  display: inline-flex;\n  border: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);\n  position: absolute;\n  background-color: var(--pf-theme--color--surface--lightest, #fff) !important;\n  opacity: 0;\n  --_active-descendant-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important\n}\n\n#outer.expanded #listbox-container {\n  opacity: 1;\n  z-index: 9999 !important;\n}\n\n#listbox {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n}\n\n#listbox slot.disabled {\n  color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;\n  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  pointer-events: none;\n  cursor: not-allowed;;\n  --_active-descendant-color: transparent;\n  --_svg-color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;\n}\n\n\n#toggle {\n  background-color: var(--pf-theme--color--surface--lightest, #fff) !important;\n}\n\n#toggle,\n#toggle-button,\n#toggle-input {\n  display: flex;\n  align-items: center;\n  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);\n  font-size: var(--pf-global--FontSize--md, 16px);\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n  line-height: 1.6;\n}\n\n#toggle {\n  border: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);\n  border-bottom-color: var(--pf-theme--color--text, #151515);\n  justify-content: space-between;\n}\n\n.expanded #toggle {\n  border-bottom-width: 2px;\n  border-bottom-color: var(--pf-theme--color--accent, #0066cc);\n}\n\n.disabled #toggle {\n  color: var(--pf-global--Color--dark-200, #6a6e73) !important;\n  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;\n}\n\n#toggle-input,\n#toggle-button {\n  background: transparent;\n  border: none;\n  text-align: left;\n  border-radius: 0;\n  flex: 1 0 auto;\n  min-height: 44px;\n  min-width: 44px;\n}\n\n#toggle-input {\n  justify-content: space-between;\n  padding: var(--pf-global--spacer--xs, 0.25rem) var(--pf-global--spacer--sm, 0.5rem);\n}\n\n.disabled #toggle-input {\n  pointer-events: none;\n}\n\n#toggle-button {\n  color: currentColor;\n  background-color: transparent;\n  justify-content: flex-end;\n  padding: var(--pf-global--spacer--sm, 0.5rem);\n}\n\n#toggle-button:focus:before {\n  border-bottom-color: var(--pf-c-select__toggle--focus--before--BorderBottomColor);\n  border-bottom-width: var(--pf-c-select__toggle--focus--before--BorderBottomWidth);\n}\n\n#outer.typeahead #toggle-button {\n  flex: 0 0 auto;\n}\n\n#toggle-badge {\n  flex: 1 0 auto;\n  margin-inline-start: 0.25em;\n}\n\n#toggle-text {\n  flex: 1 1 auto;\n}\n\n#toggle-text.badge {\n  flex: 0 1 auto;\n}\n\npf-badge {\n  padding: 0;\n}\n\n#toggle svg {\n  width: 1em;\n  height: 1em;\n  flex: 0 0 auto;\n  margin-inline-start: 1em;\n}\n\n#description {\n  display: block;\n}\n\n#listbox.checkboxes {\n  --_pf-option-checkboxes-display: inline;\n  --_pf-option-svg-display: none;\n}\n\n::slotted(pf-option-group + hr) {\n  display: none !important;\n}\n\n::slotted(hr:has(+ pf-option-group)) {\n  display: none !important;\n}\n\n.visually-hidden {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  block-size: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  inline-size: 1px;\n}\n\n::slotted(hr) {\n  --pf-c-divider--BorderWidth--base: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-divider--BorderColor--base: var(--pf-c-divider--BackgroundColor);\n  --pf-c-divider--Height: var(--pf-c-divider--BorderWidth--base);\n  --pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100, #d2d2d2);\n  --pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BorderColor--base);\n  --pf-c-divider--after--FlexBasis: 100%;\n  --pf-c-divider--after--Inset: 0%;\n  --pf-c-divider--m-vertical--after--FlexBasis: 100%;\n  --pf-c-divider--m-horizontal--Display: flex;\n  --pf-c-divider--m-horizontal--FlexDirection: row;\n  --pf-c-divider--m-horizontal--after--Height: var(--pf-c-divider--Height);\n  --pf-c-divider--m-horizontal--after--Width: auto;\n  --pf-c-divider--m-vertical--Display: inline-flex;\n  --pf-c-divider--m-vertical--FlexDirection: column;\n  --pf-c-divider--m-vertical--after--Height: auto;\n  --pf-c-divider--m-vertical--after--Width: var(--pf-c-divider--BorderWidth--base);\n  --pf-hidden-visible--visible--Display: var(--pf-c-divider--Display);\n  --pf-c-divider--Display: var(--pf-c-divider--m-horizontal--Display);\n  --pf-c-divider--FlexDirection: var(--pf-c-divider--m-horizontal--FlexDirection);\n  --pf-c-divider--after--Width: var(--pf-c-divider--m-horizontal--after--Width);\n  --pf-c-divider--after--Height: var(--pf-c-divider--m-horizontal--after--Height);\n  display: var(--pf-c-divider--Display, flex);\n\tflex-direction: var(--pf-c-divider--FlexDirection);\n\tborder: 0;\n  width: 100%;\n  margin-top: var(--pf-c-select-menu--c-divider--MarginTop);\n  margin-bottom: var(--pf-c-select-menu--c-divider--MarginBottom);\n}\n\n::slotted(hr)::after {\n  content: '';\n  width: var(--pf-c-divider--after--Width, 100%) !important;\n  height: var(--pf-c-divider--after--Height, 1px);\n  background-color: var(--pf-c-divider--after--BackgroundColor);\n  flex: 1 0 100%;\n}\n`;
export class PfSelectChangeEvent extends Event {
    constructor() {
        super('change', { bubbles: true });
    }
}
let PfSelect = class PfSelect extends LitElement {
    constructor() {
        super(...arguments);
        _PfSelect_instances.add(this);
        /** Variant of rendered Select */
        this.variant = 'single';
        /** Accessible label for chip group used to describe chips */
        this.accessibleCurrentSelectionsLabel = 'Current selections';
        /** Multi listbox button text */
        this.itemsSelectedText = 'items selected';
        /** Whether the select is disabled */
        this.disabled = false;
        /** Whether the select listbox is expanded */
        this.expanded = false;
        /**
         * Enable to flip listbox when it reaches boundary
         */
        this.enableFlip = false;
        /**
         * Indicates initial popover position.
         * There are 6 options: `bottom`, `top`, `top-start`, `top-end`, `bottom-start`, `bottom-end`.
         * Default is `bottom`.
         */
        this.position = 'bottom';
        /** Flag indicating if selection badge should be hidden for checkbox variant,default false */
        this.checkboxSelectionBadgeHidden = false;
        _PfSelect_isNotPlaceholderOption.set(this, (option) => option !== this._placeholder);
        _PfSelect_internals.set(this, InternalsController.of(this));
        _PfSelect_float.set(this, new FloatingDOMController(this, { content: () => this._listboxContainer }));
        _PfSelect_slots.set(this, new SlotController(this, null, 'placeholder'));
        _PfSelect_combobox.set(this, ComboboxController.of(this, {
            multi: this.variant === 'typeaheadmulti' || this.variant === 'checkbox',
            getItems: () => this.options,
            getFallbackLabel: () => this.accessibleLabel
                || __classPrivateFieldGet(this, _PfSelect_internals, "f").computedLabelText
                || this.placeholder
                || __classPrivateFieldGet(this, _PfSelect_slots, "f").getSlotted('placeholder').map(x => x.textContent).join(''),
            getListboxElement: () => this._listbox ?? null,
            getToggleButton: () => this._toggleButton ?? null,
            getComboboxInput: () => this._toggleInput ?? null,
            isExpanded: () => this.expanded,
            requestShowListbox: () => void (this.expanded || (this.expanded = true)),
            requestHideListbox: () => void (this.expanded && (this.expanded = false)),
            setItemHidden: (item, hidden) => (item.id !== 'placeholder') && void (item.hidden = hidden),
            isItem: item => item instanceof PfOption,
            setItemActive: (item, active) => item.active = active,
            setItemSelected: (item, selected) => item.selected = selected,
        }));
    }
    /**
     * Single select option value for single select menus,
     * or array of select option values for multi select.
     */
    set selected(selected) {
        const list = Array.isArray(selected) ? selected : [selected];
        __classPrivateFieldGet(this, _PfSelect_combobox, "f").selected = list;
    }
    get selected() {
        return __classPrivateFieldGet(this, _PfSelect_combobox, "f").selected;
    }
    /** List of options */
    get options() {
        if (isServer) {
            return []; // TODO: expose a DOM property to allow setting options in SSR scenarios
        }
        else {
            return [
                this._placeholder,
                ...Array.from(this.querySelectorAll('pf-option')),
            ].filter((x) => !!x && !x.hidden);
        }
    }
    render() {
        const { disabled, expanded, variant, placeholder } = this;
        const { anchor = 'bottom', alignment = 'start', styles = {} } = __classPrivateFieldGet(this, _PfSelect_float, "f");
        const { height, width } = this.getBoundingClientRect?.() || {};
        const hasBadge = __classPrivateFieldGet(this, _PfSelect_instances, "a", _PfSelect_hasBadge_get);
        const selectedOptions = __classPrivateFieldGet(this, _PfSelect_combobox, "f").selected ?? [];
        const typeahead = variant.startsWith('typeahead');
        const checkboxes = variant === 'checkbox';
        const badge = hasBadge && 'badge';
        const hasSelection = !!(Array.isArray(this.selected) ? this.selected.length : this.selected);
        const hideLightDomItems = typeahead && !ComboboxController.supportsCrossRootActiveDescendant;
        const placeholderIsInert = !placeholder && __classPrivateFieldGet(this, _PfSelect_slots, "f").isEmpty('placeholder');
        return html `
      <div id="outer"
           style="${styleMap(styles)}"
           class="${classMap({ disabled, typeahead, expanded, [anchor]: !!anchor, [alignment]: !!alignment })}">
        <div id="toggle">
          ${!(typeahead && selectedOptions.length < 1) ? '' : html `
          <pf-chip-group label="${this.accessibleCurrentSelectionsLabel}">
            ${repeat(selectedOptions, opt => opt.id, opt => html `
            <pf-chip id="chip-${opt.textContent}"
                     .readonly="${this.disabled}"
                     @remove="${__classPrivateFieldGet(this, _PfSelect_instances, "m", _PfSelect_onChipRemove).bind(this, opt)}">${opt.textContent}</pf-chip>`)}
          </pf-chip-group>`}
          ${!typeahead ? '' : html `
          <input id="toggle-input"
                 ?hidden="${!typeahead}"
                 ?disabled="${disabled}"
                 placeholder="${placeholder || __classPrivateFieldGet(this, _PfSelect_instances, "a", _PfSelect_buttonLabel_get)}">`}
          <button id="toggle-button">
            <span id="button-text" style="display: contents;">
              <span id="toggle-text"
                    class="${classMap({ 'visually-hidden': !!typeahead, badge })}">${__classPrivateFieldGet(this, _PfSelect_instances, "a", _PfSelect_buttonLabel_get)}</span>${!hasBadge ? '' : html `
              <span id="toggle-badge">
                <pf-badge number="${selectedOptions.length}">${selectedOptions.length}</pf-badge>
              </span>`}
            </span>
            <svg viewBox="0 0 320 512"
                 fill="currentColor"
                 aria-hidden="true">
              <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button>
        </div>
        <div id="listbox-container"
             ?hidden="${!expanded}"
             style="${styleMap({
            marginTop: `${height || 0}px`,
            width: width ? `${width}px` : 'auto',
        })}">
          <div id="listbox" class="${classMap({ checkboxes })}">
            <pf-option id="placeholder"
                       disabled
                       ?inert="${placeholderIsInert}"
                       aria-hidden="${ifDefined(placeholderIsInert ? undefined : String(!!hasSelection))}"
                       ?hidden="${!placeholder && __classPrivateFieldGet(this, _PfSelect_slots, "f").isEmpty('placeholder')}"
            ><slot name="placeholder">${placeholder ?? ''}</slot></pf-option>
            ${__classPrivateFieldGet(this, _PfSelect_combobox, "f").renderItemsToShadowRoot()}
            <slot ?hidden="${hideLightDomItems}"></slot>
          </div>
        </div>
      </div>
    `;
    }
    disabledChanged() {
        __classPrivateFieldGet(this, _PfSelect_combobox, "f").disabled = this.disabled;
    }
    async expandedChanged(old, expanded) {
        if (this.dispatchEvent(new Event(this.expanded ? 'close' : 'open'))) {
            if (expanded) {
                __classPrivateFieldGet(this, _PfSelect_instances, "m", _PfSelect_doExpand).call(this);
            }
            else {
                __classPrivateFieldGet(this, _PfSelect_instances, "m", _PfSelect_doCollapse).call(this);
            }
        }
    }
    async selectedChanged(_, selected) {
        this.value = selected.map(x => x.value).join();
        await this.updateComplete;
        switch (this.variant) {
            case 'single':
                this.hide();
                this._toggleButton?.focus();
                break;
            case 'typeahead':
                this._toggleInput.value = this.value;
        }
    }
    async variantChanged() {
        __classPrivateFieldGet(this, _PfSelect_combobox, "f").hostDisconnected();
        __classPrivateFieldGet(this, _PfSelect_combobox, "f").multi = this.variant === 'typeaheadmulti' || this.variant === 'checkbox';
        __classPrivateFieldGet(this, _PfSelect_combobox, "f").hostConnected();
        if (this.variant === 'checkbox') {
            import('@patternfly/elements/pf-badge/pf-badge.js');
        }
    }
    valueChanged() {
        __classPrivateFieldGet(this, _PfSelect_internals, "f").setFormValue(this.value ?? '');
        this.dispatchEvent(new PfSelectChangeEvent());
    }
    focusChips() {
        // whether select has removable chips for selected items
        // NOTE: revisit this in v5
        // reset input if chip has been added
        const hasChips = this.variant === 'typeaheadmulti';
        if (hasChips && this._toggleInput?.value) {
            const chip = this.shadowRoot?.querySelector(`pf-chip#chip-${this._toggleInput?.value}`);
            if (chip && this._chipGroup) {
                this._chipGroup.focusOnChip(chip);
                this._toggleInput.value = '';
            }
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
     * Closes listbox
     */
    async hide() {
        this.expanded = false;
        await this.updateComplete;
    }
    /**
     * toggles popup based on current state
     */
    async toggle() {
        if (this.expanded) {
            await this.hide();
        }
        else {
            await this.show();
        }
    }
};
_PfSelect_isNotPlaceholderOption = new WeakMap();
_PfSelect_internals = new WeakMap();
_PfSelect_float = new WeakMap();
_PfSelect_slots = new WeakMap();
_PfSelect_combobox = new WeakMap();
_PfSelect_instances = new WeakSet();
_PfSelect_hasBadge_get = function _PfSelect_hasBadge_get() {
    // NOTE: revisit this in v5
    return this.variant === 'checkbox' && !this.checkboxSelectionBadgeHidden;
};
_PfSelect_buttonLabel_get = function _PfSelect_buttonLabel_get() {
    const { selected } = __classPrivateFieldGet(this, _PfSelect_combobox, "f");
    switch (this.variant) {
        case 'typeaheadmulti':
            return `${selected?.length ?? 0} ${this.itemsSelectedText}`;
        case 'checkbox':
            return __classPrivateFieldGet(this, _PfSelect_instances, "m", _PfSelect_computePlaceholderText).call(this)
                || 'Options';
        default:
            return (selected ? this.value : '')
                || __classPrivateFieldGet(this, _PfSelect_instances, "m", _PfSelect_computePlaceholderText).call(this)
                || 'Select a value';
    }
};
_PfSelect_doExpand = async function _PfSelect_doExpand() {
    try {
        await __classPrivateFieldGet(this, _PfSelect_float, "f").show({ placement: this.position || 'bottom', flip: !!this.enableFlip });
        return true;
    }
    catch {
        return false;
    }
};
_PfSelect_doCollapse = async function _PfSelect_doCollapse() {
    try {
        await __classPrivateFieldGet(this, _PfSelect_float, "f").hide();
        return true;
    }
    catch {
        return false;
    }
};
_PfSelect_onChipRemove = function _PfSelect_onChipRemove(opt, event) {
    if (event instanceof PfChipRemoveEvent) {
        opt.selected = false;
        this._toggleInput?.focus();
    }
};
_PfSelect_computePlaceholderText = function _PfSelect_computePlaceholderText() {
    return this.placeholder
        || this.querySelector?.('[slot=placeholder]')
            ?.assignedNodes()
            ?.reduce((acc, node) => `${acc}${node.textContent}`, '')
            ?.trim()
        || __classPrivateFieldGet(this, _PfSelect_combobox, "f").items
            .filter(__classPrivateFieldGet(this, _PfSelect_isNotPlaceholderOption, "f"))
            .at(0)
            ?.value
        || '';
};
PfSelect.styles = [styles];
PfSelect.formAssociated = true;
PfSelect.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfSelect.version = "4.1.0";
__decorate([
    property()
], PfSelect.prototype, "variant", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], PfSelect.prototype, "accessibleLabel", void 0);
__decorate([
    property({
        attribute: 'accessible-current-selections-label',
    })
], PfSelect.prototype, "accessibleCurrentSelectionsLabel", void 0);
__decorate([
    property({ attribute: 'items-selected-text' })
], PfSelect.prototype, "itemsSelectedText", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfSelect.prototype, "expanded", void 0);
__decorate([
    property({ attribute: 'enable-flip', type: Boolean })
], PfSelect.prototype, "enableFlip", void 0);
__decorate([
    property()
], PfSelect.prototype, "value", void 0);
__decorate([
    property()
], PfSelect.prototype, "placeholder", void 0);
__decorate([
    property({ reflect: true })
], PfSelect.prototype, "position", void 0);
__decorate([
    property({
        attribute: 'checkbox-selection-badge-hidden',
        type: Boolean,
    })
], PfSelect.prototype, "checkboxSelectionBadgeHidden", void 0);
__decorate([
    query('pf-chip-group')
], PfSelect.prototype, "_chipGroup", void 0);
__decorate([
    query('#toggle-input')
], PfSelect.prototype, "_toggleInput", void 0);
__decorate([
    query('#toggle-button')
], PfSelect.prototype, "_toggleButton", void 0);
__decorate([
    query('#listbox')
], PfSelect.prototype, "_listbox", void 0);
__decorate([
    query('#listbox-container')
], PfSelect.prototype, "_listboxContainer", void 0);
__decorate([
    query('#placeholder')
], PfSelect.prototype, "_placeholder", void 0);
__decorate([
    property({ hasChanged: (a, b) => !arraysAreEquivalent(a, b) })
], PfSelect.prototype, "selected", null);
__decorate([
    observes('disabled')
], PfSelect.prototype, "disabledChanged", null);
__decorate([
    observes('expanded')
], PfSelect.prototype, "expandedChanged", null);
__decorate([
    observes('selected')
], PfSelect.prototype, "selectedChanged", null);
__decorate([
    observes('variant')
], PfSelect.prototype, "variantChanged", null);
__decorate([
    observes('value')
], PfSelect.prototype, "valueChanged", null);
__decorate([
    observes('variant'),
    observes('value')
], PfSelect.prototype, "focusChips", null);
PfSelect = __decorate([
    customElement('pf-select')
], PfSelect);
export { PfSelect };
//# sourceMappingURL=pf-select.js.map