var _PfSelect_instances, _PfSelect_isNotPlaceholderOption, _PfSelect_internals, _PfSelect_float, _PfSelect_slots, _PfSelect_combobox, _PfSelect_hasBadge_get, _PfSelect_buttonLabel_get, _PfSelect_doExpand, _PfSelect_doCollapse, _PfSelect_onChipRemove, _PfSelect_computePlaceholderText;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, isServer, nothing } from 'lit';
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
const styles = css `:host {
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--md, 16px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
\tcolor: var(--pf-global--Color--100, #151515);
  --_pf-option-checkboxes-display: none;
  --_pf-option-svg-display: block;
\t--_pf-option-selected-background-color: var(--rh-color-gray-20, #e0e0e0);
\t/** Select toggle top padding */
\t--pf-c-select__toggle--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);
\t/** Select toggle right padding */
\t--pf-c-select__toggle--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle bottom padding */
\t--pf-c-select__toggle--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);
\t/** Select toggle left padding */
\t--pf-c-select__toggle--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle minimum width */
\t--pf-c-select__toggle--MinWidth: var(--pf-global--target-size--MinWidth, 44px);
\t/** Select toggle font size */
\t--pf-c-select__toggle--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** Select toggle font weight */
\t--pf-c-select__toggle--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** Select toggle line height */
\t--pf-c-select__toggle--LineHeight: var(--pf-global--LineHeight--md, 1.5);
\t/** Select toggle background color */
\t--pf-c-select__toggle--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Select toggle border top width */
\t--pf-c-select__toggle--before--BorderTopWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Select toggle border right width */
\t--pf-c-select__toggle--before--BorderRightWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Select toggle border bottom width */
\t--pf-c-select__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Select toggle border left width */
\t--pf-c-select__toggle--before--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Select toggle border width */
\t--pf-c-select__toggle--before--BorderWidth: initial;
\t/** Select toggle border top color */
\t--pf-c-select__toggle--before--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t/** Select toggle border right color */
\t--pf-c-select__toggle--before--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t/** Select toggle border bottom color */
\t--pf-c-select__toggle--before--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
\t/** Select toggle border left color */
\t--pf-c-select__toggle--before--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t/** Select toggle text color */
\t--pf-c-select__toggle--Color: var(--pf-global--Color--100, #151515);
\t/** Select toggle hover border bottom color */
\t--pf-c-select__toggle--hover--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t/** Select toggle focus border bottom color */
\t--pf-c-select__toggle--focus--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t/** Select toggle focus border bottom width */
\t--pf-c-select__toggle--focus--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select toggle active border bottom color */
\t--pf-c-select__toggle--active--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t/** Select toggle active border bottom width */
\t--pf-c-select__toggle--active--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select toggle expanded border bottom color */
\t--pf-c-select__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t/** Select toggle expanded border bottom width */
\t--pf-c-select__toggle--m-expanded--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select toggle disabled background color */
\t--pf-c-select__toggle--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
\t/** Select toggle plain border color */
\t--pf-c-select__toggle--m-plain--before--BorderColor: transparent;
\t/** Select toggle placeholder color */
\t--pf-c-select__toggle--m-placeholder--Color: transparent;
\t/** Select invalid state toggle border bottom color */
\t--pf-c-select--m-invalid__toggle--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
\t/** Select invalid state toggle border bottom width */
\t--pf-c-select--m-invalid__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select invalid state toggle hover border bottom color */
\t--pf-c-select--m-invalid__toggle--hover--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
\t/** Select invalid state toggle focus border bottom color */
\t--pf-c-select--m-invalid__toggle--focus--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
\t/** Select invalid state toggle active border bottom color */
\t--pf-c-select--m-invalid__toggle--active--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
\t/** Select invalid state toggle expanded border bottom color */
\t--pf-c-select--m-invalid__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
\t/** Select invalid state toggle status icon color */
\t--pf-c-select--m-invalid__toggle-status-icon--Color: var(--pf-global--danger-color--100, #c9190b);
\t/** Select success state toggle border bottom color */
\t--pf-c-select--m-success__toggle--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
\t/** Select success state toggle border bottom width */
\t--pf-c-select--m-success__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select success state toggle hover border bottom color */
\t--pf-c-select--m-success__toggle--hover--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
\t/** Select success state toggle focus border bottom color */
\t--pf-c-select--m-success__toggle--focus--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
\t/** Select success state toggle active border bottom color */
\t--pf-c-select--m-success__toggle--active--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
\t/** Select success state toggle expanded border bottom color */
\t--pf-c-select--m-success__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
\t/** Select success state toggle status icon color */
\t--pf-c-select--m-success__toggle-status-icon--Color: var(--pf-global--success-color--100, #3e8635);
\t/** Select warning state toggle border bottom color */
\t--pf-c-select--m-warning__toggle--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select warning state toggle border bottom width */
\t--pf-c-select--m-warning__toggle--before--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Select warning state toggle hover border bottom color */
\t--pf-c-select--m-warning__toggle--hover--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select warning state toggle focus border bottom color */
\t--pf-c-select--m-warning__toggle--focus--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select warning state toggle active border bottom color */
\t--pf-c-select--m-warning__toggle--active--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select warning state toggle expanded border bottom color */
\t--pf-c-select--m-warning__toggle--m-expanded--before--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select warning state toggle status icon color */
\t--pf-c-select--m-warning__toggle-status-icon--Color: var(--pf-global--warning-color--100, #f0ab00);
\t/** Select toggle wrapper not last child right margin */
\t--pf-c-select__toggle-wrapper--not-last-child--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
\t/** Select toggle wrapper maximum width */
\t--pf-c-select__toggle-wrapper--MaxWidth: calc(100% - var(--pf-global--spacer--lg, 1.5rem));
\t/** Select toggle wrapper chip group top margin */
\t--pf-c-select__toggle-wrapper--c-chip-group--MarginTop: 0.3125rem;
\t/** Select toggle wrapper chip group bottom margin */
\t--pf-c-select__toggle-wrapper--c-chip-group--MarginBottom: 0.3125rem;
\t/** Select typeahead toggle flex basis */
\t--pf-c-select__toggle-typeahead--FlexBasis: 10em;
\t/** Select typeahead toggle background color */
\t--pf-c-select__toggle-typeahead--BackgroundColor: transparent;
\t/** Select typeahead toggle top border */
\t--pf-c-select__toggle-typeahead--BorderTop: var(--pf-global--BorderWidth--sm, 1px) solid transparent;
\t/** Select typeahead toggle right border */
\t--pf-c-select__toggle-typeahead--BorderRight: none;
\t/** Select typeahead toggle left border */
\t--pf-c-select__toggle-typeahead--BorderLeft: none;
\t/** Select typeahead toggle minimum width */
\t--pf-c-select__toggle-typeahead--MinWidth: 7.5rem;
\t/** Select typeahead toggle focus bottom padding */
\t--pf-c-select__toggle-typeahead--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--md));
\t/** Select toggle placeholder text color */
\t--pf-c-select__toggle--m-placeholder__toggle-text--Color: var(--pf-global--Color--dark-200, #6a6e73);
\t/** Select toggle icon left margin */
\t--pf-c-select__toggle-icon--toggle-text--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t/** Select toggle badge left padding */
\t--pf-c-select__toggle-badge--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle status icon left margin */
\t--pf-c-select__toggle-status-icon--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t/** Select toggle status icon color */
\t--pf-c-select__toggle-status-icon--Color: var(--pf-global--Color--100, #151515);
\t/** Select toggle arrow left margin */
\t--pf-c-select__toggle-arrow--MarginLeft: var(--pf-global--spacer--md, 1rem);
\t/** Select toggle arrow right margin */
\t--pf-c-select__toggle-arrow--MarginRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle arrow with clear left margin */
\t--pf-c-select__toggle-arrow--with-clear--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle arrow top expanded rotation */
\t--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Rotate: 180deg;
\t/** Select plain toggle arrow color */
\t--pf-c-select--m-plain__toggle-arrow--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select plain hover toggle arrow color */
\t--pf-c-select--m-plain--hover__toggle-arrow--Color: var(--pf-global--Color--100, #151515);
\t/** Select toggle clear right padding */
\t--pf-c-select__toggle-clear--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle clear left padding */
\t--pf-c-select__toggle-clear--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Select toggle clear button left padding */
\t--pf-c-select__toggle-clear--toggle-button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select toggle button text color */
\t--pf-c-select__toggle-button--Color: var(--pf-global--Color--100, #151515);
\t/** Select menu background color */
\t--pf-c-select__menu--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #fff);
\t/** Select menu box shadow */
\t--pf-c-select__menu--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t/** Select menu top padding */
\t--pf-c-select__menu--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu bottom padding */
\t--pf-c-select__menu--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu top position */
\t--pf-c-select__menu--Top: calc(100% + var(--pf-global--spacer--xs, 0.25rem));
\t/** Select menu z-index */
\t--pf-c-select__menu--ZIndex: var(--pf-global--ZIndex--sm, 200);
\t/** Select menu width */
\t--pf-c-select__menu--Width: auto;
\t/** Select menu minimum width */
\t--pf-c-select__menu--MinWidth: 100%;
\t/** Select menu top transform Y */
\t--pf-c-select__menu--m-top--TranslateY: calc(-100% - var(--pf-global--spacer--xs, 0.25rem));
\t/** Select list item loading top padding */
\t--pf-c-select__list-item--m-loading--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu item top padding */
\t--pf-c-select__menu-item--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu item right padding */
\t--pf-c-select__menu-item--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** Select menu item selected right padding */
\t--pf-c-select__menu-item--m-selected--PaddingRight: var(--pf-global--spacer--2xl, 3rem);
\t/** Select menu item bottom padding */
\t--pf-c-select__menu-item--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu item left padding */
\t--pf-c-select__menu-item--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Select menu item font size */
\t--pf-c-select__menu-item--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** Select menu item font weight */
\t--pf-c-select__menu-item--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** Select menu item line height */
\t--pf-c-select__menu-item--LineHeight: var(--pf-global--LineHeight--md, 1.5);
\t/** Select menu item text color */
\t--pf-c-select__menu-item--Color: var(--pf-global--Color--dark-100, #151515);
\t/** Select menu item disabled text color */
\t--pf-c-select__menu-item--disabled--Color: var(--pf-global--Color--dark-200, #6a6e73);
\t/** Select menu item width */
\t--pf-c-select__menu-item--Width: 100%;
\t/** Select menu item hover background color */
\t--pf-c-select__menu-item--hover--BackgroundColor: var(--pf-global--BackgroundColor--light-300, #f0f0f0);
\t/** Select menu item focus background color */
\t--pf-c-select__menu-item--focus--BackgroundColor: var(--pf-global--BackgroundColor--light-300, #f0f0f0);
\t/** Select menu item disabled background color */
\t--pf-c-select__menu-item--disabled--BackgroundColor: transparent;
\t/** Select menu item link width */
\t--pf-c-select__menu-item--m-link--Width: auto;
\t/** Select menu item link hover background color */
\t--pf-c-select__menu-item--m-link--hover--BackgroundColor: transparent;
\t/** Select menu item link focus background color */
\t--pf-c-select__menu-item--m-link--focus--BackgroundColor: transparent;
\t/** Select menu item action color */
\t--pf-c-select__menu-item--m-action--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select menu item action hover color */
\t--pf-c-select__menu-item--m-action--hover--Color: var(--pf-global--Color--100, #151515);
\t/** Select menu item action focus color */
\t--pf-c-select__menu-item--m-action--focus--Color: var(--pf-global--Color--100, #151515);
\t/** Select menu item action disabled color */
\t--pf-c-select__menu-item--m-action--disabled--Color: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** Select menu item action width */
\t--pf-c-select__menu-item--m-action--Width: auto;
\t/** Select menu item action font size */
\t--pf-c-select__menu-item--m-action--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);
\t/** Select menu item action hover background color */
\t--pf-c-select__menu-item--m-action--hover--BackgroundColor: transparent;
\t/** Select menu item action focus background color */
\t--pf-c-select__menu-item--m-action--focus--BackgroundColor: transparent;
\t/** Select menu item hover action color */
\t--pf-c-select__menu-item--hover__menu-item--m-action--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select menu item favorite action color */
\t--pf-c-select__menu-item--m-favorite-action--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select menu item favorite action hover color */
\t--pf-c-select__menu-item--m-favorite-action--hover--Color: var(--pf-global--Color--100, #151515);
\t/** Select menu item favorite action focus color */
\t--pf-c-select__menu-item--m-favorite-action--focus--Color: var(--pf-global--Color--100, #151515);
\t/** Select menu wrapper favorite action color */
\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--Color: var(--pf-global--palette--gold-400, #f0ab00);
\t/** Select menu wrapper favorite action hover color */
\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--hover--Color: var(--pf-global--palette--gold-500, #c58c00);
\t/** Select menu wrapper favorite action focus color */
\t--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--focus--Color: var(--pf-global--palette--gold-500, #c58c00);
\t/** Select menu item load color */
\t--pf-c-select__menu-item--m-load--Color: var(--pf-global--link--Color, #06c);
\t/** Select menu item icon color */
\t--pf-c-select__menu-item-icon--Color: var(--pf-global--active-color--100, #06c);
\t/** Select menu item icon font size */
\t--pf-c-select__menu-item-icon--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);
\t/** Select menu item icon right position */
\t--pf-c-select__menu-item-icon--Right: var(--pf-global--spacer--md, 1rem);
\t/** Select menu item icon top position */
\t--pf-c-select__menu-item-icon--Top: 50%;
\t/** Select menu item icon transform Y */
\t--pf-c-select__menu-item-icon--TranslateY: -50%;
\t/** Select menu item action icon minimum height */
\t--pf-c-select__menu-item-action-icon--MinHeight: calc(var(--pf-c-select__menu-item--FontSize) * var(--pf-c-select__menu-item--LineHeight));
\t/** Select menu item match font weight */
\t--pf-c-select__menu-item--match--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t/** Select menu search top padding */
\t--pf-c-select__menu-search--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu search right padding */
\t--pf-c-select__menu-search--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);
\t/** Select menu search bottom padding */
\t--pf-c-select__menu-search--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** Select menu search left padding */
\t--pf-c-select__menu-search--PaddingLeft: var(--pf-c-select__menu-item--PaddingLeft);
\t/** Select menu group top padding */
\t--pf-c-select__menu-group--menu-group--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu group title top padding */
\t--pf-c-select__menu-group-title--PaddingTop: var(--pf-c-select__menu-item--PaddingTop);
\t/** Select menu group title right padding */
\t--pf-c-select__menu-group-title--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);
\t/** Select menu group title bottom padding */
\t--pf-c-select__menu-group-title--PaddingBottom: var(--pf-c-select__menu-item--PaddingBottom);
\t/** Select menu group title left padding */
\t--pf-c-select__menu-group-title--PaddingLeft: var(--pf-c-select__menu-item--PaddingLeft);
\t/** Select menu group title font size */
\t--pf-c-select__menu-group-title--FontSize: var(--pf-global--FontSize--xs, 0.75rem);
\t/** Select menu group title font weight */
\t--pf-c-select__menu-group-title--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** Select menu group title color */
\t--pf-c-select__menu-group-title--Color: var(--pf-global--Color--dark-200, #6a6e73);
\t/** Select menu item count left margin */
\t--pf-c-select__menu-item-count--MarginLeft: var(--pf-global--spacer--md, 1rem);
\t/** Select menu item count font size */
\t--pf-c-select__menu-item-count--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** Select menu item count color */
\t--pf-c-select__menu-item-count--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select menu item disabled count color */
\t--pf-c-select__menu-item--disabled__menu-item-count--Color: var(--pf-global--Color--dark-200, #6a6e73);
\t/** Select menu item description font size */
\t--pf-c-select__menu-item-description--FontSize: var(--pf-global--FontSize--xs, 0.75rem);
\t/** Select menu item description color */
\t--pf-c-select__menu-item-description--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Select menu item description right padding */
\t--pf-c-select__menu-item-description--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);
\t/** Select menu item main right padding */
\t--pf-c-select__menu-item-main--PaddingRight: var(--pf-c-select__menu-item--PaddingRight);
\t/** Select menu item selected main right padding */
\t--pf-c-select__menu-item--m-selected__menu-item-main--PaddingRight: var(--pf-c-select__menu-item--m-selected--PaddingRight);
\t/** Select menu footer box shadow */
\t--pf-c-select__menu-footer--BoxShadow: var(--pf-global--BoxShadow--sm-top, 0 -0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Select menu footer top padding */
\t--pf-c-select__menu-footer--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** Select menu footer right padding */
\t--pf-c-select__menu-footer--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** Select menu footer bottom padding */
\t--pf-c-select__menu-footer--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** Select menu footer left padding */
\t--pf-c-select__menu-footer--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Select menu footer top margin */
\t--pf-c-select__menu-footer--MarginTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu footer bottom margin */
\t--pf-c-select__menu-footer--MarginBottom: calc(var(--pf-global--spacer--sm, 0.5rem) * -1);
\t/** Select menu divider top margin */
\t--pf-c-select-menu--c-divider--MarginTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Select menu divider bottom margin */
\t--pf-c-select-menu--c-divider--MarginBottom: var(--pf-global--spacer--sm, 0.5rem);
}

:host, #outer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

:host([hidden]),
*[hidden] {
  display: none !important;
}

:host([disabled]) {
  pointer-events: none !important;
}

#outer.disabled {
  color: var(--pf-global--Color--dark-200, #6a6e73) !important;
}

#outer {
  position: relative;
}

/* TODO(bennyp): see if we can get rid of this wrapping node, for perf reasons */
#listbox-container {
  display: inline-flex;
  border: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);
  position: absolute;
  background-color: var(--pf-theme--color--surface--lightest, #fff) !important;
  opacity: 0;
  --_active-descendant-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important
}

#outer.expanded #listbox-container {
  opacity: 1;
  z-index: 9999 !important;
}

#listbox {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

#listbox slot.disabled {
  color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  pointer-events: none;
  cursor: not-allowed;;
  --_active-descendant-color: transparent;
  --_svg-color: var(--pf-c-list__item-icon--Color, #6a6e73) !important;
}


#toggle {
  background-color: var(--pf-theme--color--surface--lightest, #fff) !important;
}

#toggle,
#toggle-button,
#toggle-input {
  display: flex;
  align-items: center;
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--md, 16px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
  line-height: 1.6;
}

#toggle {
  border: 1px solid var(--pf-global--BorderColor--100, #d2d2d2);
  border-bottom-color: var(--pf-theme--color--text, #151515);
  justify-content: space-between;
}

.expanded #toggle {
  border-bottom-width: 2px;
  border-bottom-color: var(--pf-theme--color--accent, #0066cc);
}

.disabled #toggle {
  color: var(--pf-global--Color--dark-200, #6a6e73) !important;
  background-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
  border-color: var(--pf-theme--color--surface--lighter, #f0f0f0) !important;
}

#toggle-input,
#toggle-button {
  background: transparent;
  border: none;
  text-align: left;
  border-radius: 0;
  flex: 1 0 auto;
  min-height: 44px;
  min-width: 44px;
}

#toggle-input {
  justify-content: space-between;
  padding: var(--pf-global--spacer--xs, 0.25rem) var(--pf-global--spacer--sm, 0.5rem);
}

.disabled #toggle-input {
  pointer-events: none;
}

#toggle-button {
  color: currentColor;
  background-color: transparent;
  justify-content: flex-end;
  padding: var(--pf-global--spacer--sm, 0.5rem);
}

#toggle-button:focus:before {
  border-bottom-color: var(--pf-c-select__toggle--focus--before--BorderBottomColor);
  border-bottom-width: var(--pf-c-select__toggle--focus--before--BorderBottomWidth);
}

#outer.typeahead #toggle-button {
  flex: 0 0 auto;
}

#toggle-badge {
  flex: 1 0 auto;
  margin-inline-start: 0.25em;
}

#toggle-text {
  flex: 1 1 auto;
}

#toggle-text.badge {
  flex: 0 1 auto;
}

pf-badge {
  padding: 0;
}

#toggle svg {
  width: 1em;
  height: 1em;
  flex: 0 0 auto;
  margin-inline-start: 1em;
}

#description {
  display: block;
}

#listbox.checkboxes {
  --_pf-option-checkboxes-display: inline;
  --_pf-option-svg-display: none;
}

::slotted(pf-option-group + hr) {
  display: none !important;
}

::slotted(hr:has(+ pf-option-group)) {
  display: none !important;
}

.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  block-size: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  inline-size: 1px;
}

::slotted(hr) {
  --pf-c-divider--BorderWidth--base: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-divider--BorderColor--base: var(--pf-c-divider--BackgroundColor);
  --pf-c-divider--Height: var(--pf-c-divider--BorderWidth--base);
  --pf-c-divider--BackgroundColor: var(--pf-global--BorderColor--100, #d2d2d2);
  --pf-c-divider--after--BackgroundColor: var(--pf-c-divider--BorderColor--base);
  --pf-c-divider--after--FlexBasis: 100%;
  --pf-c-divider--after--Inset: 0%;
  --pf-c-divider--m-vertical--after--FlexBasis: 100%;
  --pf-c-divider--m-horizontal--Display: flex;
  --pf-c-divider--m-horizontal--FlexDirection: row;
  --pf-c-divider--m-horizontal--after--Height: var(--pf-c-divider--Height);
  --pf-c-divider--m-horizontal--after--Width: auto;
  --pf-c-divider--m-vertical--Display: inline-flex;
  --pf-c-divider--m-vertical--FlexDirection: column;
  --pf-c-divider--m-vertical--after--Height: auto;
  --pf-c-divider--m-vertical--after--Width: var(--pf-c-divider--BorderWidth--base);
  --pf-hidden-visible--visible--Display: var(--pf-c-divider--Display);
  --pf-c-divider--Display: var(--pf-c-divider--m-horizontal--Display);
  --pf-c-divider--FlexDirection: var(--pf-c-divider--m-horizontal--FlexDirection);
  --pf-c-divider--after--Width: var(--pf-c-divider--m-horizontal--after--Width);
  --pf-c-divider--after--Height: var(--pf-c-divider--m-horizontal--after--Height);
  display: var(--pf-c-divider--Display, flex);
\tflex-direction: var(--pf-c-divider--FlexDirection);
\tborder: 0;
  width: 100%;
  margin-top: var(--pf-c-select-menu--c-divider--MarginTop);
  margin-bottom: var(--pf-c-select-menu--c-divider--MarginBottom);
}

::slotted(hr)::after {
  content: '';
  width: var(--pf-c-divider--after--Width, 100%) !important;
  height: var(--pf-c-divider--after--Height, 1px);
  background-color: var(--pf-c-divider--after--BackgroundColor);
  flex: 1 0 100%;
}
`;
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
          <button tabindex=${typeahead ? '-1' : nothing} id="toggle-button">
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
            ><!-- placeholder text for the select. Overrides the \`placeholder\` attribute. --><slot name="placeholder">${placeholder ?? ''}</slot></pf-option>
            ${__classPrivateFieldGet(this, _PfSelect_combobox, "f").renderItemsToShadowRoot()}
            <!-- insert \`pf-option\` and/or \`pf-option-groups\` here -->
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
PfSelect.version = "4.3.0";
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