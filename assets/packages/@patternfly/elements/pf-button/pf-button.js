var _PfButton_instances, _PfButton_internals, _PfButton_slots, _PfButton_disabled_get, _PfButton_onClick, _PfButton_onKeydown;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-spinner/pf-spinner.js';
import { css } from "lit";
const tokensStyles = css `:host {
\t/** PaddingTop for the button */
\t--pf-c-button--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);
\t/** PaddingRight for the button */
\t--pf-c-button--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for the button */
\t--pf-c-button--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);
\t/** PaddingLeft for the button */
\t--pf-c-button--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** LineHeight for the button */
\t--pf-c-button--LineHeight: var(--pf-global--LineHeight--md, 1.5);
\t/** FontWeight for the button */
\t--pf-c-button--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** FontSize for the button */
\t--pf-c-button--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** BackgroundColor for the button */
\t--pf-c-button--BackgroundColor: transparent;
\t/** BorderRadius for the button */
\t--pf-c-button--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** BorderRadius for the button after element */
\t--pf-c-button--after--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** BorderColor for the button after element */
\t--pf-c-button--after--BorderColor: transparent;
\t/** BorderWidth for the button after element */
\t--pf-c-button--after--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderWidth for the button after element on hover */
\t--pf-c-button--hover--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** BorderWidth for the button after element on focus */
\t--pf-c-button--focus--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** BorderWidth for the button after element when active */
\t--pf-c-button--active--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Color for the button when disabled */
\t--pf-c-button--disabled--Color: var(--pf-global--disabled-color--100, #6a6e73);
\t/** BackgroundColor for the button when disabled */
\t--pf-c-button--disabled--BackgroundColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** BorderColor for the button after element when disabled */
\t--pf-c-button--disabled--after--BorderColor: transparent;
\t/** BackgroundColor for the primary button variant */
\t--pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the primary button variant */
\t--pf-c-button--m-primary--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant on hover */
\t--pf-c-button--m-primary--hover--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant on hover */
\t--pf-c-button--m-primary--hover--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant on focus */
\t--pf-c-button--m-primary--focus--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant on focus */
\t--pf-c-button--m-primary--focus--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant when active */
\t--pf-c-button--m-primary--active--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant when active */
\t--pf-c-button--m-primary--active--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the secondary button variant */
\t--pf-c-button--m-secondary--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element */
\t--pf-c-button--m-secondary--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant */
\t--pf-c-button--m-secondary--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant on hover */
\t--pf-c-button--m-secondary--hover--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element on hover */
\t--pf-c-button--m-secondary--hover--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant on hover */
\t--pf-c-button--m-secondary--hover--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant on focus */
\t--pf-c-button--m-secondary--focus--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element on focus */
\t--pf-c-button--m-secondary--focus--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant on focus */
\t--pf-c-button--m-secondary--focus--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant when active */
\t--pf-c-button--m-secondary--active--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--active--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-secondary--active--Color: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-secondary--m-danger--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--Color: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--hover--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--hover--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--hover--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--focus--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--focus--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--focus--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--active--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--active--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--active--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-tertiary--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--hover--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--hover--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--focus--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--focus--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--active--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--active--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-warning--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);
\t--pf-c-button--m-warning--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--hover--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--hover--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--focus--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--focus--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--active--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--active--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-danger--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-danger--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--hover--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--hover--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--focus--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--focus--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--active--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--active--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-link--BackgroundColor: transparent;
\t--pf-c-button--m-link--Color: var(--pf-global--link--Color, #06c);
\t--pf-c-button--m-link--hover--BackgroundColor: transparent;
\t--pf-c-button--m-link--hover--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--focus--BackgroundColor: transparent;
\t--pf-c-button--m-link--focus--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--active--BackgroundColor: transparent;
\t--pf-c-button--m-link--active--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--disabled--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-inline--FontSize: inherit;
\t--pf-c-button--m-link--m-inline--hover--TextDecoration: var(--pf-global--link--TextDecoration--hover, underline);
\t--pf-c-button--m-link--m-inline--hover--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--m-inline--PaddingTop: 0;
\t--pf-c-button--m-link--m-inline--PaddingRight: 0;
\t--pf-c-button--m-link--m-inline--PaddingBottom: 0;
\t--pf-c-button--m-link--m-inline--PaddingLeft: 0;
\t--pf-c-button--m-link--m-inline__progress--Left: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button--m-link--m-inline--m-in-progress--PaddingLeft: calc(var(--pf-c-button--m-link--m-inline__progress--Left) + 1rem + var(--pf-global--spacer--sm, 0.5rem));
\t--pf-c-button--m-link--m-danger--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--Color: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-link--m-danger--hover--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--hover--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-link--m-danger--focus--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--focus--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-link--m-danger--active--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--active--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-plain--BackgroundColor: transparent;
\t--pf-c-button--m-plain--Color: var(--pf-global--Color--200, #6a6e73);
\t--pf-c-button--m-plain--hover--BackgroundColor: transparent;
\t--pf-c-button--m-plain--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--focus--BackgroundColor: transparent;
\t--pf-c-button--m-plain--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--active--BackgroundColor: transparent;
\t--pf-c-button--m-plain--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--disabled--Color: var(--pf-global--disabled-color--200, #d2d2d2);
\t--pf-c-button--m-plain--disabled--BackgroundColor: transparent;
\t--pf-c-button--m-control--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--BorderRadius: 0;
\t--pf-c-button--m-control--after--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t--pf-c-button--m-control--after--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--after--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--after--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
\t--pf-c-button--m-control--after--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
\t--pf-c-button--m-control--hover--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--hover--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--hover--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--active--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--active--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--active--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--focus--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--focus--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--focus--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--m-expanded--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--m-expanded--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--m-expanded--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--m-expanded--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-small--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t--pf-c-button--m-display-lg--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-display-lg--PaddingRight: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-button--m-display-lg--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-display-lg--PaddingLeft: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-button--m-display-lg--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t--pf-c-button--m-link--m-display-lg--FontSize: var(--pf-global--FontSize--lg, 1.125rem);
\t--pf-c-button__icon--m-start--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button__icon--m-end--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button__progress--width: calc(var(--pf-global--icon--FontSize--md, 1.125rem) + var(--pf-global--spacer--sm, 0.5rem));
\t--pf-c-button__progress--Opacity: 0;
\t--pf-c-button__progress--TranslateY: -50%;
\t--pf-c-button__progress--TranslateX: 0;
\t--pf-c-button__progress--Top: 50%;
\t--pf-c-button__progress--Left: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-progress--TransitionProperty: padding;
\t--pf-c-button--m-progress--TransitionDuration: var(--pf-global--TransitionDuration, 250ms);
\t--pf-c-button--m-progress--PaddingRight: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width) / 2);
\t--pf-c-button--m-progress--PaddingLeft: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width) / 2);
\t--pf-c-button--m-in-progress--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-in-progress--PaddingLeft: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width));
\t--pf-c-button--m-in-progress--m-plain--Color: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-in-progress--m-plain__progress--Left: 50%;
\t--pf-c-button--m-in-progress--m-plain__progress--TranslateX: -50%;
\t--pf-c-button__count--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
\t--pf-c-button--disabled__c-badge--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--disabled__c-badge--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
\t--pf-c-button--m-primary__c-badge--BorderColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-primary__c-badge--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);

  /** Internal button color property */
  --_button-color: var(--pf-c-button--m-primary--Color);
  /** Internal button background color property */
  --_button-background-color: var(--pf-c-button--m-primary--BackgroundColor);
}
`;
const iconStyles = css `/******************************
 *                            *
 *            ICON            *
 *                            *
 ******************************/

.hasIcon {
  gap: calc(2 * var(--pf-c-button__icon--m-start--MarginLeft,
    var(--pf-global--spacer--xs, 0.25rem)));
}

`;
const styles = css `:host {
\tfont-size: var(--pf-c-button--FontSize);
\tfont-weight: var(--pf-c-button--FontWeight);
\tline-height: var(--pf-c-button--LineHeight);
\ttext-align: center;
\twhite-space: nowrap;
  font-size: var(--pf-c-button--FontSize,
    var(--pf-global--FontSize--md, 1rem));
  font-weight: var(--pf-c-button--FontWeight,
    var(--pf-global--FontWeight--normal, 400));
  line-height: var(--pf-c-button--LineHeight,
    var(--pf-global--LineHeight--md, 1.5));
  display: inline-block;
  height: max-content;
  cursor: pointer;
  position: relative;
  font-family: inherit;
  border-width: 0;
  border-style: solid;
  border-radius: var(--pf-c-button--BorderRadius,
    var(--pf-global--BorderRadius--sm, 3px));
}

:host([hidden]),
[hidden] {
  display: none !important;
}

:host([inline]) {
  display: inline;
  --pf-c-button--PaddingTop: 0;
  --pf-c-button--PaddingLeft: 0;
  --pf-c-button--PaddingBottom: 0;
  --pf-c-button--PaddingRight: 0;
}

pf-icon,
::slotted(pf-icon) {
  color: currentcolor;
  padding-inline-start: var(--_button-icon-padding-inline-start);
  padding-inline-end: var(--_button-icon-padding-inline-end);
  vertical-align: var(--_button-icon-vertical-align);
}

#icon {
  margin-inline-end: var(--pf-c-button__icon--m-start--MarginRight,
      var(--pf-global--spacer--xs, 0.25rem));
}

#button {
  display: inline-block;
  color: var(--_button-color);
  padding:
    var(--pf-c-button--PaddingTop,
      var(--pf-global--spacer--form-element, 0.375rem))
    var(--pf-c-button--PaddingRight,
      var(--pf-global--spacer--md, 1rem))
    var(--pf-c-button--PaddingBottom,
      var(--pf-global--spacer--form-element, 0.375rem))
    var(--pf-c-button--PaddingLeft,
      var(--pf-global--spacer--md, 1rem));
  &::before,
  &::after {
    position: absolute;
    inset: 0;
    content: "";
  }
  &::before {
    background-color: var(--_button-background-color);
    border-radius: var(--pf-c-button--BorderRadius,
      var(--pf-global--BorderRadius--sm, 3px));
  }
  &::after {
    pointer-events: none;
    border-style: solid;
    border-width: var(--pf-c-button--after--BorderWidth);
    border-color: var(--pf-c-button--after--BorderColor);
    border-radius: var(--pf-c-button--after--BorderRadius);
  }
  &.anchor {
    text-decoration: none;
    &::after {
      pointer-events: all;
    }
  }
}

#text {
  display: inline;
  position: relative;
}

:host(:focus) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--focus--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--focus--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--focus--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--focus--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--focus--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--focus--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--hover--BackgroundColor, transparent);
  /* PLAIN */
  --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--focus--Color,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--focus--BackgroundColor,
    transparent);
}

:host(:hover) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--hover--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--hover--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--hover--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--hover--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--hover--BackgroundColor, transparent);
  /* PLAIN */
  --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--hover--Color,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--hover--BackgroundColor,
    transparent);
}

:host(:active) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--active--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--active--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--active--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--active--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--active--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--active--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--active--BackgroundColor, transparent);
}

.disabled,
:host(:disabled),
:host([danger]:disabled),
:host([link]:disabled) .link {
  pointer-events: none;
  cursor: default;
}

[part=icon] {
  --pf-icon--size: 16px;
  display: inline-flex;
  align-items: center;
  position: absolute;
  & ::slotted(*) {
    width: 16px;
    max-width: 16px;
    height: 16px;
    max-height: 16px;
  }
}

.hasIcon [part=icon] {
  cursor: pointer;
}

.hasIcon #button {
  position: absolute;
  inset: 0;
}

/******************************
 *                            *
 *           PLAIN            *
 *                            *
 ******************************/

#button.plain {
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-plain--disabled--BackgroundColor, transparent);
  --pf-c-button--after--BorderWidth: 0 !important;
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--after--BorderColor,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--disabled--Color: var(--pf-c-button--m-plain--disabled--Color,
    var(--pf-global--disabled-color--200, #d2d2d2));
  --_button-color: var(--pf-c-button--m-plain--Color,
    var(--pf-global--Color--200, #6a6e73));
  --_button-background-color: var(--pf-c-button--m-plain--BackgroundColor,
    transparent);
  :host(:active) & {
    --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--active--BackgroundColor,
      tranparent);
  }
  &:not(.hasIcon) [part=icon],
  &.loading [part=icon] {
    left: 16px;
  }
  & [part=icon] {
    display: contents;
  }
  &.disabled,
  &.link.disabled {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-c-button--m-plain--disabled--Color,
        var(--pf-global--disabled--color--200, #d2d2d2)));
  }
}

.hasIcon:not(.plain) [part=icon] {
  position: relative;
}

/******************************
 *                            *
 *    ICON POSITION RIGHT     *
 *                            *
 ******************************/

:host([icon-position=right]) .loading [part=icon] {
  order: 1;
}

:host([icon-position=right]) #button.hasIcon  {
  padding-left: var(--pf-c-button--PaddingLeft, var(--pf-global--spacer--md, 1rem));
  padding-right: calc(16px + 8px + var(--pf-c-button--PaddingRight, var(--pf-global--spacer--md, 1rem)));
}

/******************************
 *                            *
 *          WARNING           *
 *                            *
 ******************************/

#button.warning {
  --_button-color: var(--pf-c-button--m-warning--Color,
    var(--pf-global--Color--dark-100, #151515));
  --_button-background-color: var(--pf-c-button--m-warning--BackgroundColor,
    var(--pf-global--warning-color--100, #f0ab00));
  :host(:focus) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--focus--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--focus--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  :host(:hover) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--hover--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--hover--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  :host(:active) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--active--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--active--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  &.disabled {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-global--disabled-color--100, #6a6e73));
    --_button-background-color: var(--pf-c-button--disabled--BackgroundColor,
      var(--pf-global--disabled-color--200, #d2d2d2));
  }
}

/******************************
 *                            *
 *          LOADING           *
 *                            *
 ******************************/

:host([loading]) #button {
  position: relative;
  display: flex;
  align-items: center;
}

#button.loading {
  & [part=icon] {
    display: inline-block;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    top: var(--pf-c-button__progress--Top, 50%);
    left: var(--pf-c-button__progress--Left,
      var(--pf-global--spacer--md, 1rem));
    line-height: 1;
    transform: translate(
      var(--pf-c-button__progress--TranslateX, 0),
      var(--pf-c-button__progress--TranslateY, -50%));
    margin-inline-end: var(--pf-c-button__icon--m-start--MarginRight,
      var(--pf-global--spacer--xs, 0.25rem));
  }
  &.primary:not(.plain),
  &.danger {
    --pf-c-spinner--Color: white;
  }
  &:not(.plain) {
    padding-left: calc(12px + var(--pf-c-button--PaddingLeft, var(--pf-global--spacer--md, 1rem)));
    --pf-c-button--PaddingRight: var(--pf-c-button--m-in-progress--PaddingRight,
      var(--pf-global--spacer--md, 1rem));
    --pf-c-button--PaddingLeft: var(--pf-c-button--m-in-progress--PaddingLeft,
      calc(
        var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width,
          calc(var(--pf-global--icon--FontSize--md, 1.125rem) + var(--pf-global--spacer--sm, 0.5rem))) / 2));
  }

}

/******************************
 *                            *
 *         SECONDARY          *
 *                            *
 ******************************/

#button.secondary {
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--Color,
    var(--pf-global--danger-color--100, #c9190b));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--BackgroundColor, transparent);
  --_button-color: var(--pf-c-button--m-secondary--Color,
    var(--pf-global--primary-color--100, #06c));
  --_button-background-color: var(--pf-c-button--m-secondary--BackgroundColor, transparent);
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--after--BorderColor,
    var(--pf-global--primary-color--100, #06c));
  :host(:focus) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--focus--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--focus--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--focus--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--focus--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--focus--BackgroundColor, transparent);
  }
  :host(:hover) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--hover--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--hover--BackgroundColor,
      transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--hover--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--hover--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--hover--BackgroundColor, transparent);
  }
  :host(:active) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--active--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--active--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--active--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--active--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--active--BackgroundColor, transparent);
  }
  &.danger {
    --_button-color: var(--pf-c-button--m-secondary--m-danger--Color,
      var(--pf-global--danger--color--100, #c9190b));
    --_button-background-color: var(--pf-c-button--m-secondary--m-danger--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--after--BorderColor,
      var(--pf-global--danger--color--100, #c9190b));
    :host(:focus) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--focus--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
    :host(:hover) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--hover--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
    :host(:active) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--active--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
  }
}

/******************************
 *                            *
 *         TERTIARY           *
 *                            *
 ******************************/

#button.tertiary {
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--after--BorderColor,
    var(--pf-global--Color--100, #151515));
  --_button-color: var(--pf-c-button--m-tertiary--Color,
    var(--pf-global--Color--100, #151515));
  --_button-background-color: var(--pf-c-button--m-tertiary--BackgroundColor, transparent);
  :host(:focus) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--focus--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--focus--BackgroundColor,
      transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--focus--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
  :host(:hover) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--hover--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--hover--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--hover--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
  :host(:active) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--active--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--active--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
}

/******************************
 *                            *
 *          CONTROL           *
 *                            *
 ******************************/

#button.control {
  --pf-c-button--BorderRadius: var(--pf-c-button--m-control--BorderRadius, 0);
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-control--disabled--BackgroundColor,
    var(--pf-global--disabled-color--300, #f0f0f0));
  --pf-c-button--after--BorderRadius: 0;
  --pf-c-button--after--BorderWidth: var(--pf-c-button--m-control--after--BorderWidth,
    var(--pf-global--BorderWidth--sm, 1px));
  --pf-c-button--after--BorderColor:
    var(--pf-c-button--m-control--after--BorderTopColor,
      var(--pf-global--BorderColor--300, #f0f0f0))
    var(--pf-c-button--m-control--after--BorderRightColor,
      var(--pf-global--BorderColor--300, #f0f0f0))
    var(--pf-c-button--m-control--after--BorderBottomColor,
      var(--pf-global--BorderColor--200, #8a8d90))
    var(--pf-c-button--m-control--after--BorderLeftColor,
      var(--pf-global--BorderColor--300, #f0f0f0));
  --_button-color: var(--pf-c-button--m-control--Color,
    var(--pf-global--Color--100, #151515));
  --_button-background-color: var(--pf-c-button--m-control--BackgroundColor,
    var(--pf-global--BackgroundColor--100, #fff));
  :host(:focus) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--focus--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--focus--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--focus--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--focus--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
  :host(:hover) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--hover--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--hover--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--hover--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--hover--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
  :host(:active) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--active--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--active--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--active--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
}

/******************************
 *                            *
 *           LINK             *
 *                            *
 ******************************/

#button.link {
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-link--disabled--BackgroundColor, transparent);
  --_button-color: var(--pf-c-button--m-link--Color, var(--pf-global--link--Color, #06c));
  --_button-background-color: var(--pf-c-button--m-link--BackgroundColor,
    var(--pf-c-button--m-link--BackgroundColor, transparent));
  &.inline {
    :host(:hover) & {
      text-decoration: var(--pf-c-button--m-link--m-inline--hover--TextDecoration,
        var(--pf-global--link--TextDecoration--hover, underline));
    }
  }
  &.danger {
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-link--m-danger--Color,
        var(--pf-global--danger-color--100, #c9190b));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--BackgroundColor, transparent);
    :host(:hover) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--hover--Color,
          var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--hover--BackgroundColor, transparent);
    }
    :host(:focus) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--focus--Color,
        var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--focus--BackgroundColor, transparent);
    }
    :host(:active) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--active--Color,
        var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--active--BackgroundColor, transparent);
    }
  }
}

/******************************
 *                            *
 *         DISABLED           *
 *                            *
 ******************************/

:host(:is(:disabled,[disabled])) {
  pointer-events: none;
  cursor: default;
}

#button.disabled {
  &:not(.plain) {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-global--disabled-color--100, #6a6e73));
    --_button-background-color: var(--pf-c-button--disabled--BackgroundColor,
      var(--pf-global--disabled-color--200, #d2d2d2));
  }
  &::after {
    border-color: var(--pf-c-button--disabled--after--BorderColor, transparent);
  }
}

/******************************
 *                            *
 *           BLOCK            *
 *                            *
 ******************************/

:host([block]) {
  display: flex;
  width: 100%;
  justify-content: center;
}

/******************************
 *                            *
 *           LARGE            *
 *                            *
 ******************************/

:host([size="large"]) {
  --pf-c-button--PaddingTop: var(--pf-c-button--m-display-lg--PaddingTop,
    var(--pf-global--spacer--md, 1rem));
  --pf-c-button--PaddingRight: var(--pf-c-button--m-display-lg--PaddingRight,
    var(--pf-global--spacer--xl, 2rem));
  --pf-c-button--PaddingBottom: var(--pf-c-button--m-display-lg--PaddingBottom,
    var(--pf-global--spacer--md, 1rem));
  --pf-c-button--PaddingLeft: var(--pf-c-button--m-display-lg--PaddingLeft,
    var(--pf-global--spacer--xl, 2rem));
  --pf-c-button--FontWeight: var(--pf-c-button--m-display-lg--FontWeight,
    var(--pf-global--FontWeight--bold, 700));
}

/******************************
 *                            *
 *           SMALL            *
 *                            *
 ******************************/

:host([size="small"]) {
  --pf-c-button--FontSize: var(--pf-c-button--m-small--FontSize,
    var(--pf-global--FontSize--md, 1rem));
}

/******************************
 *                            *
 *          DANGER            *
 *                            *
 ******************************/

#button.danger {
  --_button-color: var(--pf-c-button--m-danger--Color,
    var(--pf-global--Color--light-100, #fff));
  --_button-background-color: var(--pf-c-button--m-danger--BackgroundColor,
    var(--pf-global--danger-color--100, #c9190b));
}

`;
let PfButton = class PfButton extends LitElement {
    constructor() {
        super(...arguments);
        _PfButton_instances.add(this);
        /** Disables the button */
        this.disabled = false;
        /** Represents the state of a stateful button */
        this.loading = false;
        /** Not as urgent as danger */
        this.warning = false;
        /**
         * Use danger buttons for actions a user can take that are potentially
         * destructive or difficult/impossible to undo, like deleting or removing
         * user data.
         */
        this.danger = false;
        /** Applies plain styles */
        this.plain = false;
        /**
         * Changes the style of the button.
         * - Primary: Used for the most important call to action on a page. Try to
         *   limit primary buttons to one per page.
         * - Secondary: Use secondary buttons for general actions on a page, that
         *   don’t require as much emphasis as primary button actions. For example,
         *   you can use secondary buttons where there are multiple actions, like in
         *   toolbars or data lists.
         * - Tertiary: Tertiary buttons are flexible and can be used as needed.
         */
        this.variant = 'primary';
        this.inline = false;
        this.block = false;
        _PfButton_internals.set(this, InternalsController.of(this, { role: this.variant === 'link' ? 'none' : 'button' }));
        _PfButton_slots.set(this, new SlotController(this, 'icon', null));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', __classPrivateFieldGet(this, _PfButton_instances, "m", _PfButton_onClick));
        this.addEventListener('keydown', __classPrivateFieldGet(this, _PfButton_instances, "m", _PfButton_onKeydown));
    }
    willUpdate() {
        __classPrivateFieldGet(this, _PfButton_internals, "f").ariaLabel = this.label || null;
        __classPrivateFieldGet(this, _PfButton_internals, "f").ariaDisabled = String(!!this.disabled);
        const isLink = this.variant === 'link' && this.href;
        if (isLink) {
            this.removeAttribute('tabindex');
            __classPrivateFieldGet(this, _PfButton_internals, "f").role = 'none';
        }
        else {
            this.tabIndex = 0;
            __classPrivateFieldGet(this, _PfButton_internals, "f").role = 'button';
        }
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    render() {
        const hasIcon = !!this.icon || !!this.loading || __classPrivateFieldGet(this, _PfButton_slots, "f").hasSlotted('icon');
        const { warning, variant, danger, loading, plain, inline, block, size, href, target } = this;
        const disabled = __classPrivateFieldGet(this, _PfButton_instances, "a", _PfButton_disabled_get);
        const content = html `
      <slot id="icon"
            part="icon"
            name="icon"
            ?hidden="${!hasIcon}">
        <pf-icon role="presentation"
                 icon="${ifDefined(this.icon)}"
                 set="${ifDefined(this.iconSet)}"
                 ?hidden="${!this.icon || this.loading}"></pf-icon>
        <pf-spinner size="md"
                    ?hidden="${!this.loading}"
                    aria-label="${this.getAttribute('loading-label') ?? 'loading'}"></pf-spinner>
      </slot>
      <slot id="text"></slot>
    `;
        if (variant === 'link' && href) {
            return html `
        <a id="button"
           href="${href}"
           target="${ifDefined(target)}"
           class="${classMap({
                [variant]: true,
                [size ?? '']: !!size,
                anchor: true,
                inline,
                block,
                danger,
                disabled,
                hasIcon,
                loading,
                plain,
                warning,
            })}">${content}</a>`;
        }
        else {
            return html `
      <div id="button"
           class="${classMap({
                [variant]: true,
                [size ?? '']: !!size,
                inline,
                block,
                danger,
                disabled,
                hasIcon,
                loading,
                plain,
                warning,
            })}">${content}</div>`;
        }
    }
};
_PfButton_internals = new WeakMap();
_PfButton_slots = new WeakMap();
_PfButton_instances = new WeakSet();
_PfButton_disabled_get = function _PfButton_disabled_get() {
    return this.disabled || __classPrivateFieldGet(this, _PfButton_internals, "f").formDisabled;
};
_PfButton_onClick = function _PfButton_onClick() {
    if (!__classPrivateFieldGet(this, _PfButton_instances, "a", _PfButton_disabled_get)) {
        switch (this.type) {
            case 'reset':
                return __classPrivateFieldGet(this, _PfButton_internals, "f").reset();
            default:
                return __classPrivateFieldGet(this, _PfButton_internals, "f").submit();
        }
    }
};
_PfButton_onKeydown = function _PfButton_onKeydown(event) {
    switch (event.key) {
        case ' ':
            event.preventDefault();
            event.stopPropagation();
            if (this.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
            }))) {
                __classPrivateFieldGet(this, _PfButton_instances, "m", _PfButton_onClick).call(this);
            }
            break;
        case 'Enter':
            if (this.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
            }))) {
                __classPrivateFieldGet(this, _PfButton_instances, "m", _PfButton_onClick).call(this);
            }
    }
};
PfButton.formAssociated = true;
PfButton.styles = [
    tokensStyles,
    iconStyles,
    styles,
];
PfButton.version = "4.3.0";
__decorate([
    property({ reflect: true })
], PfButton.prototype, "type", void 0);
__decorate([
    property()
], PfButton.prototype, "label", void 0);
__decorate([
    property()
], PfButton.prototype, "value", void 0);
__decorate([
    property()
], PfButton.prototype, "name", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "loading", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "warning", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "danger", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "plain", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "variant", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfButton.prototype, "inline", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfButton.prototype, "block", void 0);
__decorate([
    property()
], PfButton.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], PfButton.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "href", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "target", void 0);
PfButton = __decorate([
    customElement('pf-button')
], PfButton);
export { PfButton };
//# sourceMappingURL=pf-button.js.map