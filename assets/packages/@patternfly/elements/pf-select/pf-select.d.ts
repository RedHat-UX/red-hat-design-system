import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { PfOption } from './pf-option.js';
export declare class PfSelectChangeEvent extends Event {
    constructor();
}
/**
 * A select list enables users to select one or more items from a list.
 *
 * A select component consists of a toggle control to open and close a menu of actions or links.
 * Selects differ from dropdowns in that they persist selection,
 * whereas dropdowns are typically used to present a list of actions or links.
 * @slot - insert `pf-option` and/or `pf-option-groups` here
 * @slot placeholder - placeholder text for the select. Overrides the `placeholder` attribute.
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 * @cssprop [--pf-c-select__toggle--PaddingTop=var(--pf-global--spacer--form-element, 0.375rem)]
 * @cssprop [--pf-c-select__toggle--PaddingRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle--PaddingBottom=var(--pf-global--spacer--form-element, 0.375rem)]
 * @cssprop [--pf-c-select__toggle--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle--MinWidth=var(--pf-global--target-size--MinWidth, 44px)]
 * @cssprop [--pf-c-select__toggle--FontSize=var(--pf-global--FontSize--md, 1rem)]
 * @cssprop [--pf-c-select__toggle--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-select__toggle--LineHeight=var(--pf-global--LineHeight--md, 1.5)]
 * @cssprop [--pf-c-select__toggle--BackgroundColor=var(--pf-global--BackgroundColor--100, #fff)]
 * @cssprop [--pf-c-select__toggle--before--BorderTopWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-select__toggle--before--BorderRightWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-select__toggle--before--BorderBottomWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-select__toggle--before--BorderLeftWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-select__toggle--before--BorderWidth=initial]
 * @cssprop [--pf-c-select__toggle--before--BorderTopColor=var(--pf-global--BorderColor--300, #f0f0f0)]
 * @cssprop [--pf-c-select__toggle--before--BorderRightColor=var(--pf-global--BorderColor--300, #f0f0f0)]
 * @cssprop [--pf-c-select__toggle--before--BorderBottomColor=var(--pf-global--BorderColor--200, #8a8d90)]
 * @cssprop [--pf-c-select__toggle--before--BorderLeftColor=var(--pf-global--BorderColor--300, #f0f0f0)]
 * @cssprop [--pf-c-select__toggle--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__toggle--hover--before--BorderBottomColor=var(--pf-global--active-color--100, #06c)]
 * @cssprop [--pf-c-select__toggle--focus--before--BorderBottomColor=var(--pf-global--active-color--100, #06c)]
 * @cssprop [--pf-c-select__toggle--focus--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select__toggle--active--before--BorderBottomColor=var(--pf-global--active-color--100, #06c)]
 * @cssprop [--pf-c-select__toggle--active--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select__toggle--m-expanded--before--BorderBottomColor=var(--pf-global--active-color--100, #06c)]
 * @cssprop [--pf-c-select__toggle--m-expanded--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select__toggle--disabled--BackgroundColor=var(--pf-global--disabled-color--300, #f0f0f0)]
 * @cssprop [--pf-c-select__toggle--m-plain--before--BorderColor=transparent]
 * @cssprop [--pf-c-select__toggle--m-placeholder--Color=transparent]
 * @cssprop [--pf-c-select--m-invalid__toggle--before--BorderBottomColor=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-invalid__toggle--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select--m-invalid__toggle--hover--before--BorderBottomColor=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-invalid__toggle--focus--before--BorderBottomColor=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-invalid__toggle--active--before--BorderBottomColor=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-invalid__toggle--m-expanded--before--BorderBottomColor=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-invalid__toggle-status-icon--Color=var(--pf-global--danger-color--100, #c9190b)]
 * @cssprop [--pf-c-select--m-success__toggle--before--BorderBottomColor=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-success__toggle--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select--m-success__toggle--hover--before--BorderBottomColor=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-success__toggle--focus--before--BorderBottomColor=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-success__toggle--active--before--BorderBottomColor=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-success__toggle--m-expanded--before--BorderBottomColor=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-success__toggle-status-icon--Color=var(--pf-global--success-color--100, #3e8635)]
 * @cssprop [--pf-c-select--m-warning__toggle--before--BorderBottomColor=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select--m-warning__toggle--before--BorderBottomWidth=var(--pf-global--BorderWidth--md, 2px)]
 * @cssprop [--pf-c-select--m-warning__toggle--hover--before--BorderBottomColor=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select--m-warning__toggle--focus--before--BorderBottomColor=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select--m-warning__toggle--active--before--BorderBottomColor=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select--m-warning__toggle--m-expanded--before--BorderBottomColor=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select--m-warning__toggle-status-icon--Color=var(--pf-global--warning-color--100, #f0ab00)]
 * @cssprop [--pf-c-select__toggle-wrapper--not-last-child--MarginRight=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-select__toggle-wrapper--MaxWidth=calc(100% - var(--pf-global--spacer--lg, 1.5rem))]
 * @cssprop [--pf-c-select__toggle-wrapper--c-chip-group--MarginTop=0.3125rem]
 * @cssprop [--pf-c-select__toggle-wrapper--c-chip-group--MarginBottom=0.3125rem]
 * @cssprop [--pf-c-select__toggle-typeahead--FlexBasis=10em]
 * @cssprop [--pf-c-select__toggle-typeahead--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__toggle-typeahead--BorderTop=var(--pf-global--BorderWidth--sm, 1px) solid transparent]
 * @cssprop [--pf-c-select__toggle-typeahead--BorderRight=none]
 * @cssprop [--pf-c-select__toggle-typeahead--BorderLeft=none]
 * @cssprop [--pf-c-select__toggle-typeahead--MinWidth=7.5rem]
 * @cssprop [--pf-c-select__toggle-typeahead--focus--PaddingBottom=calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--md))]
 * @cssprop [--pf-c-select__toggle--m-placeholder__toggle-text--Color=var(--pf-global--Color--dark-200, #6a6e73)]
 * @cssprop [--pf-c-select__toggle-icon--toggle-text--MarginLeft=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-select__toggle-badge--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle-status-icon--MarginLeft=var(--pf-global--spacer--xs, 0.25rem)]
 * @cssprop [--pf-c-select__toggle-status-icon--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__toggle-arrow--MarginLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__toggle-arrow--MarginRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle-arrow--with-clear--MarginLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Rotate=180deg]
 * @cssprop [--pf-c-select--m-plain__toggle-arrow--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select--m-plain--hover__toggle-arrow--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__toggle-clear--PaddingRight=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle-clear--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__toggle-clear--toggle-button--PaddingLeft=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__toggle-button--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__menu--BackgroundColor=var(--pf-global--BackgroundColor--light-100, #fff)]
 * @cssprop [--pf-c-select__menu--BoxShadow=var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06))]
 * @cssprop [--pf-c-select__menu--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu--Top=calc(100% + var(--pf-global--spacer--xs, 0.25rem))]
 * @cssprop [--pf-c-select__menu--ZIndex=var(--pf-global--ZIndex--sm, 200)]
 * @cssprop [--pf-c-select__menu--Width=auto]
 * @cssprop [--pf-c-select__menu--MinWidth=100%]
 * @cssprop [--pf-c-select__menu--m-top--TranslateY=calc(-100% - var(--pf-global--spacer--xs, 0.25rem))]
 * @cssprop [--pf-c-select__list-item--m-loading--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-item--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-item--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-item--m-selected--PaddingRight=var(--pf-global--spacer--2xl, 3rem)]
 * @cssprop [--pf-c-select__menu-item--PaddingBottom=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-item--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-item--FontSize=var(--pf-global--FontSize--md, 1rem)]
 * @cssprop [--pf-c-select__menu-item--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-select__menu-item--LineHeight=var(--pf-global--LineHeight--md, 1.5)]
 * @cssprop [--pf-c-select__menu-item--Color=var(--pf-global--Color--dark-100, #151515)]
 * @cssprop [--pf-c-select__menu-item--disabled--Color=var(--pf-global--Color--dark-200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item--Width=100%]
 * @cssprop [--pf-c-select__menu-item--hover--BackgroundColor=var(--pf-global--BackgroundColor--light-300, #f0f0f0)]
 * @cssprop [--pf-c-select__menu-item--focus--BackgroundColor=var(--pf-global--BackgroundColor--light-300, #f0f0f0)]
 * @cssprop [--pf-c-select__menu-item--disabled--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__menu-item--m-link--Width=auto]
 * @cssprop [--pf-c-select__menu-item--m-link--hover--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__menu-item--m-link--focus--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__menu-item--m-action--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item--m-action--hover--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__menu-item--m-action--focus--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__menu-item--m-action--disabled--Color=var(--pf-global--disabled-color--200, #d2d2d2)]
 * @cssprop [--pf-c-select__menu-item--m-action--Width=auto]
 * @cssprop [--pf-c-select__menu-item--m-action--FontSize=var(--pf-global--icon--FontSize--sm, 0.625rem)]
 * @cssprop [--pf-c-select__menu-item--m-action--hover--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__menu-item--m-action--focus--BackgroundColor=transparent]
 * @cssprop [--pf-c-select__menu-item--hover__menu-item--m-action--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item--m-favorite-action--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item--m-favorite-action--hover--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__menu-item--m-favorite-action--focus--Color=var(--pf-global--Color--100, #151515)]
 * @cssprop [--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--Color=var(--pf-global--palette--gold-400, #f0ab00)]
 * @cssprop [--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--hover--Color=var(--pf-global--palette--gold-500, #c58c00)]
 * @cssprop [--pf-c-select__menu-wrapper--m-favorite__menu-item--m-favorite-action--focus--Color=var(--pf-global--palette--gold-500, #c58c00)]
 * @cssprop [--pf-c-select__menu-item--m-load--Color=var(--pf-global--link--Color, #06c)]
 * @cssprop [--pf-c-select__menu-item-icon--Color=var(--pf-global--active-color--100, #06c)]
 * @cssprop [--pf-c-select__menu-item-icon--FontSize=var(--pf-global--icon--FontSize--sm, 0.625rem)]
 * @cssprop [--pf-c-select__menu-item-icon--Right=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-item-icon--Top=50%]
 * @cssprop [--pf-c-select__menu-item-icon--TranslateY=-50%]
 * @cssprop [--pf-c-select__menu-item-action-icon--MinHeight=calc(var(--pf-c-select__menu-item--FontSize) * var(--pf-c-select__menu-item--LineHeight))]
 * @cssprop [--pf-c-select__menu-item--match--FontWeight=var(--pf-global--FontWeight--bold, 700)]
 * @cssprop [--pf-c-select__menu-search--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-search--PaddingRight=var(--pf-c-select__menu-item--PaddingRight)]
 * @cssprop [--pf-c-select__menu-search--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-search--PaddingLeft=var(--pf-c-select__menu-item--PaddingLeft)]
 * @cssprop [--pf-c-select__menu-group--menu-group--PaddingTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-group-title--PaddingTop=var(--pf-c-select__menu-item--PaddingTop)]
 * @cssprop [--pf-c-select__menu-group-title--PaddingRight=var(--pf-c-select__menu-item--PaddingRight)]
 * @cssprop [--pf-c-select__menu-group-title--PaddingBottom=var(--pf-c-select__menu-item--PaddingBottom)]
 * @cssprop [--pf-c-select__menu-group-title--PaddingLeft=var(--pf-c-select__menu-item--PaddingLeft)]
 * @cssprop [--pf-c-select__menu-group-title--FontSize=var(--pf-global--FontSize--xs, 0.75rem)]
 * @cssprop [--pf-c-select__menu-group-title--FontWeight=var(--pf-global--FontWeight--normal, 400)]
 * @cssprop [--pf-c-select__menu-group-title--Color=var(--pf-global--Color--dark-200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item-count--MarginLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-item-count--FontSize=var(--pf-global--FontSize--sm, 0.875rem)]
 * @cssprop [--pf-c-select__menu-item-count--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item--disabled__menu-item-count--Color=var(--pf-global--Color--dark-200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item-description--FontSize=var(--pf-global--FontSize--xs, 0.75rem)]
 * @cssprop [--pf-c-select__menu-item-description--Color=var(--pf-global--Color--200, #6a6e73)]
 * @cssprop [--pf-c-select__menu-item-description--PaddingRight=var(--pf-c-select__menu-item--PaddingRight)]
 * @cssprop [--pf-c-select__menu-item-main--PaddingRight=var(--pf-c-select__menu-item--PaddingRight)]
 * @cssprop [--pf-c-select__menu-item--m-selected__menu-item-main--PaddingRight=var(--pf-c-select__menu-item--m-selected--PaddingRight)]
 * @cssprop [--pf-c-select__menu-footer--BoxShadow=var(--pf-global--BoxShadow--sm-top, 0 -0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16))]
 * @cssprop [--pf-c-select__menu-footer--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-footer--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-footer--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-footer--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-select__menu-footer--MarginTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select__menu-footer--MarginBottom=calc(var(--pf-global--spacer--sm, 0.5rem) * -1)]
 * @cssprop [--pf-c-select-menu--c-divider--MarginTop=var(--pf-global--spacer--sm, 0.5rem)]
 * @cssprop [--pf-c-select-menu--c-divider--MarginBottom=var(--pf-global--spacer--sm, 0.5rem)]
 */
export declare class PfSelect extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Variant of rendered Select */
    variant: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
    /** Accessible label for the select */
    accessibleLabel?: string;
    /** Accessible label for chip group used to describe chips */
    accessibleCurrentSelectionsLabel: string;
    /** Multi listbox button text */
    itemsSelectedText: string;
    /** Whether the select is disabled */
    disabled: boolean;
    /** Whether the select listbox is expanded */
    expanded: boolean;
    /**
     * Enable to flip listbox when it reaches boundary
     */
    enableFlip: boolean;
    /** Current form value */
    value?: string;
    /** Placeholder entry. Overridden by the `placeholder` slot */
    placeholder?: string;
    /**
     * Indicates initial popover position.
     * There are 6 options: `bottom`, `top`, `top-start`, `top-end`, `bottom-start`, `bottom-end`.
     * Default is `bottom`.
     */
    position: Placement;
    /** Flag indicating if selection badge should be hidden for checkbox variant,default false */
    checkboxSelectionBadgeHidden: boolean;
    private _chipGroup?;
    private _toggleInput?;
    private _toggleButton?;
    private _listbox?;
    private _listboxContainer?;
    private _placeholder?;
    /**
     * Single select option value for single select menus,
     * or array of select option values for multi select.
     */
    set selected(selected: PfOption | PfOption[]);
    get selected(): PfOption[];
    /** List of options */
    get options(): PfOption[];
    render(): TemplateResult<1>;
    private disabledChanged;
    private expandedChanged;
    private selectedChanged;
    private variantChanged;
    private valueChanged;
    private focusChips;
    /**
     * Opens the dropdown
     */
    show(): Promise<void>;
    /**
     * Closes listbox
     */
    hide(): Promise<void>;
    /**
     * toggles popup based on current state
     */
    toggle(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-select': PfSelect;
    }
}
