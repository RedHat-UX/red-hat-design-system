var _PfTable_instances, _a, _PfTable_onRequestExpand, _PfTable_onSlotchange, _PfTable_onRequestSort, _PfTable_performSort;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { styleMap } from 'lit/directives/style-map.js';
import { state } from 'lit/decorators/state.js';
import { provide } from '@lit/context';
import { thRoleContext } from './context.js';
import { PfTh, RequestSortEvent } from './pf-th.js';
import { PfTd } from './pf-td.js';
import { PfTr, RequestExpandEvent } from './pf-tr.js';
export * from './pf-caption.js';
export * from './pf-thead.js';
export * from './pf-tbody.js';
export * from './pf-tr.js';
export * from './pf-th.js';
export * from './pf-td.js';
import { css } from "lit";
const styles = css `:host {
\t/** Table background color */
\t--pf-c-table--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Table border color */
\t--pf-c-table--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** Table border base width */
\t--pf-c-table--border-width--base: var(--pf-global--BorderWidth--sm, 1px);
\t/** Table caption font size */
\t--pf-c-table-caption--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** Table caption color */
\t--pf-c-table-caption--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Table caption top padding */
\t--pf-c-table-caption--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** Table caption right padding */
\t--pf-c-table-caption--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t/** Table caption bottom padding */
\t--pf-c-table-caption--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** Table caption left padding */
\t--pf-c-table-caption--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t/** Table XL caption right padding */
\t--pf-c-table-caption--xl--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** Table XL caption left padding */
\t--pf-c-table-caption--xl--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Table head cell font size */
\t--pf-c-table--thead--cell--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** Table head cell font weight */
\t--pf-c-table--thead--cell--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t/** Table body cell padding top */
\t--pf-c-table--tbody--cell--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t/** Table body cell padding bottom */
\t--pf-c-table--tbody--cell--PaddingBottom: var(--pf-global--spacer--lg);
\t/** Table row top base box shadow */
\t--pf-c-table--tr--BoxShadow--top--base: 0 -0.1875rem 0.25rem -0.125rem rgba(3,3,3,.08);
\t/** Table cell base padding */
\t--pf-c-table--cell--Padding--base: var(--pf-global--spacer--md, 1rem);
\t/** Table cell font size */
\t--pf-c-table--cell--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** Table cell font weight */
\t--pf-c-table--cell--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** Table cell color */
\t--pf-c-table--cell--Color: var(--pf-global--Color--100, #151515);
\t/** Table cell top padding */
\t--pf-c-table--cell--PaddingTop: var(--pf-c-table--cell--Padding--base);
\t/** Table cell right padding */
\t--pf-c-table--cell--PaddingRight: var(--pf-c-table--cell--Padding--base);
\t/** Table cell bottom padding */
\t--pf-c-table--cell--PaddingBottom: var(--pf-c-table--cell--Padding--base);
\t/** Table cell left padding */
\t--pf-c-table--cell--PaddingLeft: var(--pf-c-table--cell--Padding--base);
\t/** Table cell last child left padding */
\t--pf-c-table--cell--first-last-child--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Table cell last child right padding */
\t--pf-c-table--cell--first-last-child--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** Table XL cell last child left padding */
\t--pf-c-table--cell--first-last-child--xl--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t/** Table XL cell last child right padding */
\t--pf-c-table--cell--first-last-child--xl--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t/** Table row first cell offset reset cell left padding */
\t--pf-c-table--tr--m-first-cell-offset-reset--cell--PaddingLeft: var(--pf-c-table--cell--Padding--base);
\t/** Table cell min width */
\t--pf-c-table--cell--MinWidth: 0;
\t/** Table cell max width */
\t--pf-c-table--cell--MaxWidth: none;
\t/** Table cell width */
\t--pf-c-table--cell--Width: auto;
\t/** Table cell overflow */
\t--pf-c-table--cell--Overflow: visible;
\t/** Table cell text overflow */
\t--pf-c-table--cell--TextOverflow: clip;
\t/** Table cell white space */
\t--pf-c-table--cell--WhiteSpace: normal;
\t/** Table cell word break */
\t--pf-c-table--cell--WordBreak: normal;
\t/** Table cell before right border width */
\t--pf-c-table--cell--m-border-right--before--BorderRightWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Table cell before right border color */
\t--pf-c-table--cell--m-border-right--before--BorderRightColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** Table cell before left border width */
\t--pf-c-table--cell--m-border-left--before--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Table cell before left border color */
\t--pf-c-table--cell--m-border-left--before--BorderLeftColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** Help cell minimum width */
\t--pf-c-table--cell--m-help--MinWidth: 11ch;
\t/** Help cell maximum width */
\t--pf-c-table--m-truncate--cell--MaxWidth: 1px;
\t/** Truncated cell minimum width */
\t--pf-c-table--m-truncate--cell--MinWidth: calc(5ch + var(--pf-c-table--cell--PaddingRight) + var(--pf-c-table--cell--PaddingLeft));
\t/** Cell visible display */
\t--pf-c-table--cell--hidden-visible--Display: table-cell;
\t/** Toggle button top margin */
\t--pf-c-table__toggle--c-button--MarginTop: calc(0.375rem * -1);
\t/** Toggle button bottom margin */
\t--pf-c-table__toggle--c-button--MarginBottom: calc(0.375rem * -1);
\t/** Toggle button icon rotation */
\t--pf-c-table__toggle--c-button__toggle-icon--Rotate: 270deg;
\t/** Toggle button icon transition */
\t--pf-c-table__toggle--c-button__toggle-icon--Transition: .2s ease-in 0s;
\t/** Expanded toggle button icon rotation */
\t--pf-c-table__toggle--c-button--m-expanded__toggle-icon--Rotate: 360deg;
\t/** Button background color */
\t--pf-c-table__button--BackgroundColor: transparent;
\t/** Button color */
\t--pf-c-table__button--Color: var(--pf-global--Color--100, #151515);
\t/** Button hover color */
\t--pf-c-table__button--hover--Color: var(--pf-global--Color--100, #151515);
\t/** Button focus color */
\t--pf-c-table__button--focus--Color: var(--pf-global--Color--100, #151515);
\t/** Button active color */
\t--pf-c-table__button--active--Color: var(--pf-global--Color--100, #151515);
\t/** Button outline offset */
\t--pf-c-table__button--OutlineOffset: calc(var(--pf-global--BorderWidth--lg, 3px) * -1);
\t/** Compact toggle top padding */
\t--pf-c-table--m-compact__toggle--PaddingTop: 0;
\t/** Compact toggle bottom padding */
\t--pf-c-table--m-compact__toggle--PaddingBottom: 0;
\t/** Check input top margin */
\t--pf-c-table__check--input--MarginTop: 0.25rem;
\t/** Check input font size */
\t--pf-c-table__check--input--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** Favorite cell color */
\t--pf-c-table--cell--m-favorite--Color: var(--pf-global--Color--light-300, #d2d2d2);
\t/** Favorite button color */
\t--pf-c-table__favorite--c-button--Color: var(--pf-global--Color--light-300, #d2d2d2);
\t/** Favorite button font size */
\t--pf-c-table__favorite--c-button--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** Favorite button top margin */
\t--pf-c-table__favorite--c-button--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Favorite button right margin */
\t--pf-c-table__favorite--c-button--MarginRight: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t/** Favorite button bottom margin */
\t--pf-c-table__favorite--c-button--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Favorite button left margin */
\t--pf-c-table__favorite--c-button--MarginLeft: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t/** Favorited button color */
\t--pf-c-table__favorite--m-favorited--c-button--Color: var(--pf-global--palette--gold-400, #f0ab00);
\t/** Favorite sort button text color */
\t--pf-c-table__sort--m-favorite__button__text--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Favorite sort button hover text color */
\t--pf-c-table__sort--m-favorite__button--hover__text--Color: var(--pf-global--Color--100, #151515);
\t/** Favorite sort button focus text color */
\t--pf-c-table__sort--m-favorite__button--focus__text--Color: var(--pf-global--Color--100, #151515);
\t/** Favorite sort button active text color */
\t--pf-c-table__sort--m-favorite__button--active__text--Color: var(--pf-global--Color--100, #151515);
\t/** Draggable button top margin */
\t--pf-c-table__draggable--c-button--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Draggable button right margin */
\t--pf-c-table__draggable--c-button--MarginRight: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t/** Draggable button bottom margin */
\t--pf-c-table__draggable--c-button--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Draggable button left margin */
\t--pf-c-table__draggable--c-button--MarginLeft: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t/** Ghost row opacity */
\t--pf-c-table__tr--m-ghost-row--Opacity: .4;
\t/** Ghost row background color */
\t--pf-c-table__tr--m-ghost-row--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Action top padding */
\t--pf-c-table__action--PaddingTop: 0;
\t/** Action right padding */
\t--pf-c-table__action--PaddingRight: 0;
\t/** Action bottom padding */
\t--pf-c-table__action--PaddingBottom: 0;
\t/** Action left padding */
\t--pf-c-table__action--PaddingLeft: 0;
\t/** Inline edit action top padding */
\t--pf-c-table__inline-edit-action--PaddingTop: 0;
\t/** Inline edit action right padding */
\t--pf-c-table__inline-edit-action--PaddingRight: 0;
\t/** Inline edit action bottom padding */
\t--pf-c-table__inline-edit-action--PaddingBottom: 0;
\t/** Inline edit action left padding */
\t--pf-c-table__inline-edit-action--PaddingLeft: 0;
\t/** Expandable row transition */
\t--pf-c-table__expandable-row--Transition: var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1));
\t/** Expandable row max height */
\t--pf-c-table__expandable-row--MaxHeight: 28.125rem;
\t/** Expandable row content transition */
\t--pf-c-table__expandable-row-content--Transition: var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1));
\t/** Expandable row content top padding */
\t--pf-c-table__expandable-row-content--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t/** Expandable row content bottom padding */
\t--pf-c-table__expandable-row-content--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t/** Expandable row after top */
\t--pf-c-table__expandable-row--after--Top: calc(var(--pf-c-table--border-width--base) * -1);
\t/** Expandable row after bottom */
\t--pf-c-table__expandable-row--after--Bottom: calc(var(--pf-c-table--border-width--base) * -1);
\t/** Expandable row after base border width */
\t--pf-c-table__expandable-row--after--border-width--base: var(--pf-global--BorderWidth--lg, 3px);
\t/** Expandable row after left border width */
\t--pf-c-table__expandable-row--after--BorderLeftWidth: 0;
\t/** Expandable row after border color */
\t--pf-c-table__expandable-row--after--BorderColor: var(--pf-global--active-color--100, #06c);
\t/** Inline icon right margin */
\t--pf-c-table__icon-inline--MarginRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Sort button minimum width */
\t--pf-c-table__sort--MinWidth: calc(6ch + var(--pf-c-table--cell--PaddingRight) + var(--pf-c-table--cell--PaddingLeft) + var(--pf-c-table__sort-indicator--MarginLeft));
\t/** Sort button top padding */
\t--pf-c-table__sort__button--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);
\t/** Sort button right padding */
\t--pf-c-table__sort__button--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Sort button bottom padding */
\t--pf-c-table__sort__button--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);
\t/** Sort button left padding */
\t--pf-c-table__sort__button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Sort button top margin */
\t--pf-c-table__sort__button--MarginTop: calc(var(--pf-c-table__sort__button--PaddingTop) * -1);
\t/** Sort button bottom margin */
\t--pf-c-table__sort__button--MarginBottom: calc(var(--pf-c-table__sort__button--PaddingBottom) * -1);
\t/** Sort button left margin */
\t--pf-c-table__sort__button--MarginLeft: calc(var(--pf-c-table__sort__button--PaddingLeft) * -1);
\t/** Sort button color */
\t--pf-c-table__sort__button--Color: var(--pf-global--Color--100, #151515);
\t/** Selected sort button color */
\t--pf-c-table__sort--m-selected__button--Color: var(--pf-global--active-color--100, #06c);
\t/** Help button minimum width */
\t--pf-c-table__sort--m-help--MinWidth: 15ch;
\t/** Sort button text color */
\t--pf-c-table__sort__button__text--Color: currentcolor;
\t/** Sort button hover text color */
\t--pf-c-table__sort__button--hover__text--Color: currentcolor;
\t/** Sort button focus text color */
\t--pf-c-table__sort__button--focus__text--Color: currentcolor;
\t/** Sort button active text color */
\t--pf-c-table__sort__button--active__text--Color: currentcolor;
\t/** Sort indicator color */
\t--pf-c-table__sort-indicator--Color: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** Sort indicator left margin */
\t--pf-c-table__sort-indicator--MarginLeft: var(--pf-global--spacer--md, 1rem);
\t/** Selected sort indicator color */
\t--pf-c-table__sort--m-selected__sort-indicator--Color: var(--pf-global--active-color--100, #06c);
\t/** Sort button hover sort indicator color */
\t--pf-c-table__sort__button--hover__sort-indicator--Color: var(--pf-global--Color--100, #151515);
\t/** Sort button active sort indicator color */
\t--pf-c-table__sort__button--active__sort-indicator--Color: var(--pf-global--Color--100, #151515);
\t/** Sort button focus sort indicator color */
\t--pf-c-table__sort__button--focus__sort-indicator--Color: var(--pf-global--Color--100, #151515);
\t/** Header cell help minimum width */
\t--pf-c-table--th--m-help--MinWidth: 11ch;
\t/** Help column left margin */
\t--pf-c-table__column-help--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t/** Help column translate y axis */
\t--pf-c-table__column-help--TranslateY: 0.125rem;
\t/** Help column button top margin */
\t--pf-c-table__column-help--c-button--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Help column button bottom margin */
\t--pf-c-table__column-help--c-button--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t/** Help column button right padding */
\t--pf-c-table__column-help--c-button--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Help column button left margin */
\t--pf-c-table__column-help--c-button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compound expansion toggle button color */
\t--pf-c-table__compound-expansion-toggle__button--Color: var(--pf-global--active-color--100, #06c);
\t/** Compound expansion hover toggle button color */
\t--pf-c-table__compound-expansion-toggle__button--hover--Color: var(--pf-global--link--Color--hover, #004080);
\t/** Compound expansion focus toggle button color */
\t--pf-c-table__compound-expansion-toggle__button--focus--Color: var(--pf-global--link--Color--hover, #004080);
\t/** Compound expansion active toggle button color */
\t--pf-c-table__compound-expansion-toggle__button--active--Color: var(--pf-global--link--Color--hover, #004080);
\t/** Compound expansion toggle button before border width */
\t--pf-c-table__compound-expansion-toggle__button--before--border-width--base: var(--pf-global--BorderWidth--sm, 1px);
\t/** Compound expansion toggle button before border color */
\t--pf-c-table__compound-expansion-toggle__button--before--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** Compound expansion toggle button before right border width */
\t--pf-c-table__compound-expansion-toggle__button--before--BorderRightWidth: 0;
\t/** Compound expansion toggle button before left border width */
\t--pf-c-table__compound-expansion-toggle__button--before--BorderLeftWidth: 0;
\t/** Compound expansion toggle button before bottom */
\t--pf-c-table__compound-expansion-toggle__button--before--Bottom: calc(var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base) * -1);
\t/** Compound expansion toggle button before left */
\t--pf-c-table__compound-expansion-toggle__button--before--Left: calc(var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base) * -1);
\t/** Compound expansion toggle button after base border width */
\t--pf-c-table__compound-expansion-toggle__button--after--border-width--base: var(--pf-global--BorderWidth--lg, 3px);
\t/** Compound expansion toggle button after border color */
\t--pf-c-table__compound-expansion-toggle__button--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Compound expansion toggle button after top border width */
\t--pf-c-table__compound-expansion-toggle__button--after--BorderTopWidth: 0;
\t/** Compound expansion toggle button after top */
\t--pf-c-table__compound-expansion-toggle__button--after--Top: calc(var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base) * -1);
\t/** Compound expansion toggle button after left */
\t--pf-c-table__compound-expansion-toggle__button--after--Left: calc(var(--pf-c-table__compound-expansion-toggle__button--before--border-width--base) * -1);
\t/** Compact header cell top padding */
\t--pf-c-table--m-compact-th--PaddingTop: calc(var(--pf-global--spacer--sm, 0.5rem) + var(--pf-global--spacer--xs));
\t/** Compact header cell bottom padding */
\t--pf-c-table--m-compact-th--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compact cell top padding */
\t--pf-c-table--m-compact--cell--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compact cell right padding */
\t--pf-c-table--m-compact--cell--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compact cell bottom padding */
\t--pf-c-table--m-compact--cell--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compact cell left padding */
\t--pf-c-table--m-compact--cell--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
\t/** Compact cell first child left padding */
\t--pf-c-table--m-compact--cell--first-last-child--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** Compact cell first child right padding */
\t--pf-c-table--m-compact--cell--first-last-child--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** Compact cell first child XL left padding */
\t--pf-c-table--m-compact--cell--first-last-child--xl--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t/** Compact cell first child XL right padding */
\t--pf-c-table--m-compact--cell--first-last-child--xl--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t/** Compact font size */
\t--pf-c-table--m-compact--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** Compact expandable row content top padding */
\t--pf-c-table--m-compact__expandable-row-content--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t/** Compact expandable row content right padding */
\t--pf-c-table--m-compact__expandable-row-content--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t/** Compact expandable row content bottom padding */
\t--pf-c-table--m-compact__expandable-row-content--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t/** Compact expandable row content left padding */
\t--pf-c-table--m-compact__expandable-row-content--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t/** Nested first child right padding */
\t--pf-c-table--nested--first-last-child--PaddingRight: var(--pf-c-table--m-compact--cell--first-last-child--PaddingLeft);
\t/** Nested first child left padding */
\t--pf-c-table--nested--first-last-child--PaddingLeft: var(--pf-c-table--m-compact--cell--first-last-child--PaddingRight);
\t/** Expandable row expanded bottom border color */
\t--pf-c-table__expandable-row--m-expanded--BorderBottomColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** Hoverable table row top box shadow */
\t--pf-c-table--tr--m-hoverable--BoxShadow--top: var(--pf-c-table--tr--BoxShadow--top--base);
\t/** Hoverable table row background color */
\t--pf-c-table--tr--m-hoverable--BackgroundColor: transparent;
\t/** Hoverable table row box shadow */
\t--pf-c-table--tr--m-hoverable--BoxShadow: none;
\t/** Hoverable table row outline offset */
\t--pf-c-table--tr--m-hoverable--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs, 0.25rem));
\t/** Hoverable table row hover box shadow */
\t--pf-c-table--tr--m-hoverable--hover--BoxShadow: var(--pf-c-table--tr--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table row hover background color */
\t--pf-c-table--tr--m-hoverable--hover--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table row focus box shadow */
\t--pf-c-table--tr--m-hoverable--focus--BoxShadow: var(--pf-c-table--tr--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table row focus background color */
\t--pf-c-table--tr--m-hoverable--focus--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table row active box shadow */
\t--pf-c-table--tr--m-hoverable--active--BoxShadow: var(--pf-c-table--tr--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table row active background color */
\t--pf-c-table--tr--m-hoverable--active--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table row selected box shadow */
\t--pf-c-table--tr--m-hoverable--m-selected--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16)) inset, var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table row top box shadow */
\t--pf-c-table--tr--m-selected--BoxShadow--top: var(--pf-c-table--tr--BoxShadow--top--base);
\t/** Selected table row background color */
\t--pf-c-table--tr--m-selected--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Selected table row box shadow */
\t--pf-c-table--tr--m-selected--BoxShadow: var(--pf-c-table--tr--m-selected--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table row outline offset */
\t--pf-c-table--tr--m-selected--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs, 0.25rem));
\t/** Selected table row after left border width */
\t--pf-c-table--tr--m-selected--after--BorderLeftWidth: var(--pf-c-table__expandable-row--after--border-width--base);
\t/** Selected table row after left border color */
\t--pf-c-table--tr--m-selected--after--BorderLeftColor: var(--pf-global--active-color--100, #06c);
\t/** Selected table row box shadow */
\t--pf-c-table--tr--m-selected--m-selected--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table row hover box shadow */
\t--pf-c-table--tr--m-selected--hover--m-selected--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16)) inset, var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table row hover box shadow */
\t--pf-c-table--tr--m-selected--tr--m-selected--hover--BoxShadow: var(--pf-c-table--tr--m-selected--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table body top box shadow */
\t--pf-c-table--tbody--m-hoverable--BoxShadow--top: var(--pf-c-table--tr--BoxShadow--top--base);
\t/** Hoverable table body box shadow */
\t--pf-c-table--tbody--m-hoverable--BoxShadow: none;
\t/** Hoverable table body background color */
\t--pf-c-table--tbody--m-hoverable--BackgroundColor: transparent;
\t/** Hoverable table body outline offset */
\t--pf-c-table--tbody--m-hoverable--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs, 0.25rem));
\t/** Hoverable table body hover box shadow */
\t--pf-c-table--tbody--m-hoverable--hover--BoxShadow: var(--pf-c-table--tbody--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table body hover background color */
\t--pf-c-table--tbody--m-hoverable--hover--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table body focus box shadow */
\t--pf-c-table--tbody--m-hoverable--focus--BoxShadow: var(--pf-c-table--tbody--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table body focus background color */
\t--pf-c-table--tbody--m-hoverable--focus--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table body active box shadow */
\t--pf-c-table--tbody--m-hoverable--active--BoxShadow: var(--pf-c-table--tbody--m-hoverable--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Hoverable table body active background color */
\t--pf-c-table--tbody--m-hoverable--active--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Hoverable table body expanded border color */
\t--pf-c-table--tbody--m-hoverable--m-expanded--BorderColor: var(--pf-global--active-color--400, #73bcf7);
\t/** Hoverable table body selected table row box shadow */
\t--pf-c-table--tbody--m-hoverable--m-selected--hover--tr--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16)) inset, var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table body background color */
\t--pf-c-table--tbody--m-selected--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** Selected table body top box shadow */
\t--pf-c-table--tbody--m-selected--BoxShadow--top: var(--pf-c-table--tr--BoxShadow--top--base);
\t/** Selected table body box shadow */
\t--pf-c-table--tbody--m-selected--BoxShadow: var(--pf-c-table--tbody--m-selected--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table body outline offset */
\t--pf-c-table--tbody--m-selected--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs, 0.25rem));
\t/** Selected table body after left border width */
\t--pf-c-table--tbody--m-selected--after--BorderLeftWidth: var(--pf-c-table__expandable-row--after--border-width--base);
\t/** Selected table body after left border color */
\t--pf-c-table--tbody--m-selected--after--BorderLeftColor: var(--pf-global--active-color--100, #06c);
\t/** Selected table body selected box shadow */
\t--pf-c-table--tbody--m-selected--m-selected--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table body hover selected box shadow */
\t--pf-c-table--tbody--m-selected--hover--tbody--m-selected--BoxShadow: var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16)) inset, var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Selected table body hover box shadow */
\t--pf-c-table--tbody--m-selected--tbody--m-selected--hover--BoxShadow: var(--pf-c-table--tr--m-selected--BoxShadow--top), var(--pf-global--BoxShadow--sm-bottom, 0 0.125rem 0.25rem -0.0625rem rgba(3, 3, 3, 0.16));
\t/** Table head nested column header button outline offset */
\t--pf-c-table--thead--m-nested-column-header--button--OutlineOffset: -0.1875rem;
\t/** Table head nested column header row top padding */
\t--pf-c-table--thead--m-nested-column-header--tr--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
\t/** Table head nested column header row bottom padding */
\t--pf-c-table--thead--m-nested-column-header--tr--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
\t/** Subhead color */
\t--pf-c-table__subhead--Color: var(--pf-global--Color--200, #6a6e73);
\t/** Striped row background color */
\t--pf-c-table--m-striped__tr--BackgroundColor: var(--pf-global--BackgroundColor--light-200);
\tcolor: var(--pf-global--Color--100);
  display: inline-grid;
\tgrid-auto-rows: min-content;
}

@media (max-width: 768px) {
  :host {
    /** Cell top padding */
    --pf-c-table--cell--PaddingTop: var(--pf-c-table--m-grid--cell--PaddingTop, 0);
    /** Cell right padding */
    --pf-c-table--cell--PaddingRight: var(--pf-c-table--m-grid--cell--PaddingRight, 0);
    /** Cell bottom padding */
    --pf-c-table--cell--PaddingBottom: var(--pf-c-table--m-grid--cell--PaddingBottom, 0);
    /** Cell left padding */
    --pf-c-table--cell--PaddingLeft: var(--pf-c-table--m-grid--cell--PaddingLeft, 0);
    /** Favorite button top margin */
    --pf-c-table__favorite--c-button--MarginTop: auto;
    /** Favorite button right margin */
    --pf-c-table__favorite--c-button--MarginRight: auto;
    /** Favorite button bottom margin */
    --pf-c-table__favorite--c-button--MarginBottom: auto;
    /** Favorite button left margin */
    --pf-c-table__favorite--c-button--MarginLeft: auto;
    display: grid;
    border: none;
  }
}
`;
const rowQuery = [
    ':scope > pf-tbody:not([expandable]) > pf-tr',
    ':scope > pf-tbody > pf-tr[expandable]',
    ':scope > pf-tr',
    ':scope > pf-tr[expandable]',
].join();
let PfTable = _a = class PfTable extends LitElement {
    constructor() {
        super(...arguments);
        _PfTable_instances.add(this);
        this.columns = 0;
        this.thRowContext = 'rowheader';
    }
    get rows() {
        return this.querySelectorAll?.(rowQuery);
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'table');
        __classPrivateFieldGet(this, _PfTable_instances, "m", _PfTable_onSlotchange).call(this);
    }
    render() {
        const hasExpandableRow = !!this.querySelector?.('pf-tr[expandable]');
        const coeffRows = hasExpandableRow ? '1' : '0';
        return html `
      <!-- The default slot can hold an optional \`pf-caption\` element and a combination of \`pf-tr\`, \`pf-thead\`, or \`pf-tbody\` elements. -->
      <slot @slotchange="${__classPrivateFieldGet(this, _PfTable_instances, "m", _PfTable_onSlotchange)}"
            @request-expand="${__classPrivateFieldGet(this, _PfTable_instances, "m", _PfTable_onRequestExpand)}"
            @request-sort="${__classPrivateFieldGet(this, _PfTable_instances, "m", _PfTable_onRequestSort)}"
            style="${styleMap({
            '--_pf-table--expandable-rows': coeffRows,
            '--_pf-table--number-of-columns': this.columns,
        })}"
      ></slot>
    `;
    }
    static getNodeContentForSort(columnIndexToSort, node) {
        const content = node.querySelector(`
      :scope > :is(pf-th, pf-td):nth-child(${columnIndexToSort + 1}),
      :scope > pf-tr > :is(pf-th, pf-td):nth-child(${columnIndexToSort + 1})
    `.trim())?.textContent?.trim()?.toLowerCase() ?? '';
        return { node, content };
    }
    static sortByContent(direction, a, b) {
        if (direction === 'asc') {
            return (a.content < b.content ? -1 : a.content > b.content ? 1 : 0);
        }
        else {
            return (b.content < a.content ? -1 : b.content > a.content ? 1 : 0);
        }
    }
};
_PfTable_instances = new WeakSet();
_PfTable_onRequestExpand = function _PfTable_onRequestExpand(event) {
    if (event instanceof RequestExpandEvent
        && !event.defaultPrevented) {
        event.stopPropagation();
        if (event.target instanceof PfTr) {
            event.target.expanded = !!event.target.expandable && !event.target.expanded;
        }
        else if (event.target instanceof PfTd && event.row) {
            event.row.expanded = event.compoundExpanded;
            for (const cell of event.row.querySelectorAll('pf-td')) {
                cell.expanded = event.compoundExpanded === cell.compoundExpand;
            }
        }
    }
};
_PfTable_onSlotchange = function _PfTable_onSlotchange() {
    this.columns = this.querySelector?.('pf-tr')?.querySelectorAll('pf-th')?.length ?? 0;
    this.requestUpdate();
};
_PfTable_onRequestSort = function _PfTable_onRequestSort(event) {
    if (event instanceof RequestSortEvent) {
        for (const col of this.querySelectorAll('pf-th[sortable]')) {
            col.selected = col === event.target;
            if (col !== event.target) {
                col.removeAttribute('sort-direction');
            }
        }
        if (!event.defaultPrevented && event.target instanceof PfTh) {
            event.target.sortDirection = event.direction;
            __classPrivateFieldGet(this, _PfTable_instances, "m", _PfTable_performSort).call(this, event.target, event.direction);
        }
    }
};
_PfTable_performSort = function _PfTable_performSort(header, direction) {
    const children = header.parentElement?.children;
    if (children) {
        const columnIndexToSort = [...children].indexOf(header);
        Array
            .from(this.rows, node => PfTable.getNodeContentForSort(columnIndexToSort, node))
            .sort((a, b) => PfTable.sortByContent(direction, a, b))
            .forEach(({ node }, index) => {
            const target = this.rows[index];
            if (this.rows[index] !== node) {
                const position = direction === 'desc' ? 'afterend' : 'beforebegin';
                target.insertAdjacentElement(position, node);
            }
        });
    }
};
PfTable.styles = [styles];
PfTable.version = "4.3.0";
__decorate([
    state()
], PfTable.prototype, "columns", void 0);
__decorate([
    provide({ context: thRoleContext })
], PfTable.prototype, "thRowContext", void 0);
PfTable = __decorate([
    customElement('pf-table')
], PfTable);
export { PfTable };
//# sourceMappingURL=pf-table.js.map