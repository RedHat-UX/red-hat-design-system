import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseButton } from './BaseButton.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-spinner/pf-spinner.js';
import { css } from "lit";
const styles = css `button{color:var(--pf-c-button--m-primary--Color,var(--pf-global--Color--light-100,#fff));background-color:var(--pf-c-button--m-primary--BackgroundColor,var(--pf-global--primary-color--100,#06c));font-size:var(--pf-c-button--FontSize,\n    var(--pf-global--FontSize--md, 1rem));font-weight:var(--pf-c-button--FontWeight,var(--pf-global--FontWeight--normal,400));line-height:var(--pf-c-button--LineHeight,\n    var(--pf-global--LineHeight--md, 1.5));padding:var(--pf-c-button--PaddingTop,var(--pf-global--spacer--form-element,.375rem)) var(--pf-c-button--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-button--PaddingBottom,var(--pf-global--spacer--form-element,.375rem)) var(--pf-c-button--PaddingLeft,var(--pf-global--spacer--md,1rem))}:host,button{border-radius:var(--pf-c-button--BorderRadius,var(--pf-global--BorderRadius--sm,3px))}::slotted(pf-icon),pf-icon{color:currentColor}button::after{border-color:var(--pf-c-button--after--BorderColor,transparent);border-width:var(--pf-c-button--after--BorderWidth,var(--pf-global--BorderWidth--sm,1px));border-radius:var(--pf-c-button--after--BorderRadius,var(--pf-global--BorderRadius--sm,3px))}button:active{--pf-c-button--m-primary--Color:var(--pf-c-button--m-primary--active--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-primary--BackgroundColor:var(--pf-c-button--m-primary--active--BackgroundColor,\n    var(--pf-global--primary-color--200, #004080));--pf-c-button--after--BorderWidth:var(--pf-c-button--active--after--BorderWidth,\n    var(--pf-global--BorderWidth--md, 2px));--pf-c-button--m-danger--Color:var(--pf-c-button--m-danger--active--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-danger--active--BackgroundColor,\n    var(--pf-global--danger-color--200, #a30000))}button:focus{--pf-c-button--m-primary--Color:var(--pf-c-button--m-primary--focus--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-primary--BackgroundColor:var(--pf-c-button--m-primary--focus--BackgroundColor,\n    var(--pf-global--primary-color--200, #004080));--pf-c-button--after--BorderWidth:var(--pf-c-button--focus--after--BorderWidth,\n    var(--pf-global--BorderWidth--md, 2px));--pf-c-button--m-danger--Color:var(--pf-c-button--m-danger--focus--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-danger--focus--BackgroundColor,\n    var(--pf-global--danger-color--200, #a30000))}button:hover{--pf-c-button--m-primary--Color:var(--pf-c-button--m-primary--hover--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-primary--BackgroundColor:var(--pf-c-button--m-primary--hover--BackgroundColor,\n    var(--pf-global--primary-color--200, #004080));--pf-c-button--after--BorderWidth:var(--pf-c-button--hover--after--BorderWidth,\n    var(--pf-global--BorderWidth--md, 2px));--pf-c-button--m-danger--Color:var(--pf-c-button--m-danger--hover--Color,\n    var(--pf-global--Color--light-100, #fff));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-danger--hover--BackgroundColor,\n    var(--pf-global--danger-color--200, #a30000))}:host([warning]) button{color:var(--pf-c-button--m-warning--Color,var(--pf-global--Color--dark-100,#151515));background-color:var(--pf-c-button--m-warning--BackgroundColor,var(--pf-global--warning-color--100,#f0ab00))}:host([warning]) button:active{--pf-c-button--m-warning--Color:var(--pf-c-button--m-warning--active--Color,\n    var(--pf-global--Color--dark-100, #151515));--pf-c-button--m-warning--BackgroundColor:var(--pf-c-button--m-warning--active--BackgroundColor,\n    var(--pf-global--palette--gold-500, #c58c00))}:host([warning]) button:focus{--pf-c-button--m-warning--Color:var(--pf-c-button--m-warning--focus--Color,\n    var(--pf-global--Color--dark-100, #151515));--pf-c-button--m-warning--BackgroundColor:var(--pf-c-button--m-warning--focus--BackgroundColor,\n    var(--pf-global--palette--gold-500, #c58c00))}:host([warning]) button:hover{--pf-c-button--m-warning--Color:var(--pf-c-button--m-warning--hover--Color,\n    var(--pf-global--Color--dark-100, #151515));--pf-c-button--m-warning--BackgroundColor:var(--pf-c-button--m-warning--hover--BackgroundColor,\n    var(--pf-global--palette--gold-500, #c58c00))}:host([disabled][warning]) button{pointer-events:none;cursor:default;color:var(--pf-c-button--disabled--Color,var(--pf-global--disabled-color--100,#6a6e73));background-color:var(--pf-c-button--disabled--BackgroundColor,var(--pf-global--disabled-color--200,#d2d2d2))}:host([plain]){--pf-c-button--disabled--BackgroundColor:var(--pf-c-button--m-plain--disabled--BackgroundColor, transparent)}:host([plain]) button{--pf-c-button--after--BorderWidth:0;--pf-c-button--after--BorderColor:var(--pf-c-button--m-tertiary--after--BorderColor,\n    var(--pf-global--Color--100, #151515));--pf-c-button--disabled--Color:var(--pf-c-button--m-plain--disabled--Color,\n    var(--pf-global--disabled-color--200, #d2d2d2));color:var(--pf-c-button--m-plain--Color,var(--pf-global--Color--200,#6a6e73));background-color:var(--pf-c-button--m-plain--BackgroundColor,transparent)}:host([plain]) button:active{--pf-c-button--m-plain--Color:var(--pf-c-button--m-plain--active--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-plain--BackgroundColor:var(--pf-c-button--m-plain--active--BackgroundColor,\n    tranparent)}:host([plain]) button:focus{--pf-c-button--m-plain--Color:var(--pf-c-button--m-plain--focus--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-plain--BackgroundColor:var(--pf-c-button--m-plain--focus--BackgroundColor,\n    transparent)}:host([plain]) button:hover{--pf-c-button--m-plain--Color:var(--pf-c-button--m-plain--hover--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-plain--BackgroundColor:var(--pf-c-button--m-plain--hover--BackgroundColor,\n    transparent)}:host([loading][plain]) [part=icon],:host([plain]) .hasIcon [part=icon]{left:16px}:host([plain]) button:disabled,:host([plain]) button[aria-disabled=true],:host([plain][disabled]),:host([plain][disabled]) button,:host([plain][disabled][variant=link]) button{color:var(--pf-c-button--disabled--Color,var(--pf-c-button--m-plain--disabled--Color,var(--pf-global--disabled--color--200,#d2d2d2)))}.hasIcon{gap:calc(2 * var(--pf-c-button__icon--m-start--MarginLeft,var(--pf-global--spacer--xs,.25rem)))}.hasIcon [part=icon]{--pf-icon--size:16px;position:relative}:host([icon-position=right]) .hasIcon [part=icon],:host([icon-position=right][loading]) [part=icon]{order:1}:host([icon-position=right]) .hasIcon button{padding-left:var(--pf-c-button--PaddingLeft,var(--pf-global--spacer--md,1rem));padding-right:calc(16px + 8px + var(--pf-c-button--PaddingRight,var(--pf-global--spacer--md,1rem)))}:host([loading]) button{position:relative;display:flex;align-items:center}:host([loading]) button [part=icon]{display:inline-block;z-index:1;position:absolute;cursor:pointer;top:var(--pf-c-button__progress--Top,50%);left:var(--pf-c-button__progress--Left,var(--pf-global--spacer--md,1rem));line-height:1;transform:translate(var(--pf-c-button__progress--TranslateX,0),var(--pf-c-button__progress--TranslateY,-50%));margin-inline-end:var(--pf-c-button__icon--m-start--MarginRight,var(--pf-global--spacer--xs,.25rem))}:host([loading][danger]),:host([loading][variant=primary]:not([plain])){--pf-c-spinner--Color:white}:host([loading]:not([plain])){--pf-c-button--PaddingRight:var(--pf-c-button--m-in-progress--PaddingRight,\n    var(--pf-global--spacer--md, 1rem));--pf-c-button--PaddingLeft:var(--pf-c-button--m-in-progress--PaddingLeft,\n    calc(\n      var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width,\n        calc(var(--pf-global--icon--FontSize--md, 1.125rem) + var(--pf-global--spacer--sm, 0.5rem))) / 2))}:host([loading]:not([plain])) button{padding-left:calc(12px + var(--pf-c-button--PaddingLeft,var(--pf-global--spacer--md,1rem)))}:host([variant=secondary]){--pf-c-button--m-danger--Color:var(--pf-c-button--m-secondary--m-danger--Color,\n    var(--pf-global--danger-color--100, #c9190b));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-secondary--m-danger--BackgroundColor, transparent)}:host([variant=secondary]) button{color:var(--pf-c-button--m-secondary--Color,var(--pf-global--primary-color--100,#06c));background-color:var(--pf-c-button--m-secondary--BackgroundColor,transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--after--BorderColor,\n    var(--pf-global--primary-color--100, #06c))}:host([variant=secondary]) button:active{--pf-c-button--m-secondary--Color:var(--pf-c-button--m-secondary--active--Color,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-secondary--BackgroundColor:var(--pf-c-button--m-secondary--active--BackgroundColor, transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--active--after--BorderColor,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-danger--Color:var(--pf-c-button--m-secondary--m-danger--active--Color,\n    var(--pf-global--danger--color--200, #a30000));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-secondary--m-danger--active--BackgroundColor, transparent)}:host([variant=secondary]) button:focus{--pf-c-button--m-secondary--Color:var(--pf-c-button--m-secondary--focus--Color,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-secondary--BackgroundColor:var(--pf-c-button--m-secondary--focus--BackgroundColor, transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--focus--after--BorderColor,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-danger--Color:var(--pf-c-button--m-secondary--m-danger--focus--Color,\n    var(--pf-global--danger--color--200, #a30000));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-secondary--m-danger--focus--BackgroundColor, transparent)}:host([variant=secondary]) button:hover{--pf-c-button--m-secondary--Color:var(--pf-c-button--m-secondary--hover--Color,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-secondary--BackgroundColor:var(--pf-c-button--m-secondary--hover--BackgroundColor,\n    transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--hover--after--BorderColor,\n    var(--pf-global--primary-color--100, #06c));--pf-c-button--m-danger--Color:var(--pf-c-button--m-secondary--m-danger--hover--Color,\n    var(--pf-global--danger--color--200, #a30000));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-secondary--m-danger--hover--BackgroundColor, transparent)}:host([variant=secondary][danger]) button{color:var(--pf-c-button--m-secondary--m-danger--Color,var(--pf-global--danger--color--100,#c9190b));background-color:var(--pf-c-button--m-secondary--m-danger--BackgroundColor,transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--m-danger--after--BorderColor,\n    var(--pf-global--danger--color--100, #c9190b))}:host([variant=secondary][danger]) button:active{--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--m-danger--active--after--BorderColor,\n    var(--pf-global--danger--color--100, #c9190b))}:host([variant=secondary][danger]) button:focus{--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--m-danger--focus--after--BorderColor,\n    var(--pf-global--danger--color--100, #c9190b))}:host([variant=secondary][danger]) button:hover{--pf-c-button--after--BorderColor:var(--pf-c-button--m-secondary--m-danger--hover--after--BorderColor,\n    var(--pf-global--danger--color--100, #c9190b))}:host([variant=tertiary]) button{--pf-c-button--after--BorderColor:var(--pf-c-button--m-tertiary--after--BorderColor,\n    var(--pf-global--Color--100, #151515));color:var(--pf-c-button--m-tertiary--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-c-button--m-tertiary--BackgroundColor,transparent)}:host([variant=tertiary]) button:active{--pf-c-button--m-tertiary--Color:var(--pf-c-button--m-tertiary--active--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-tertiary--BackgroundColor:var(--pf-c-button--m-tertiary--active--BackgroundColor, transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-tertiary--active--after--BorderColor,\n    var(--pf-global--Color--100, #151515))}:host([variant=tertiary]) button:focus{--pf-c-button--m-tertiary--Color:var(--pf-c-button--m-tertiary--focus--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-tertiary--BackgroundColor:var(--pf-c-button--m-tertiary--focus--BackgroundColor,\n    transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-tertiary--focus--after--BorderColor,\n    var(--pf-global--Color--100, #151515))}:host([variant=tertiary]) button:hover{--pf-c-button--m-tertiary--Color:var(--pf-c-button--m-tertiary--hover--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-tertiary--BackgroundColor:var(--pf-c-button--m-tertiary--hover--BackgroundColor, transparent);--pf-c-button--after--BorderColor:var(--pf-c-button--m-tertiary--hover--after--BorderColor,\n    var(--pf-global--Color--100, #151515))}:host([variant=control]) button{--pf-c-button--BorderRadius:var(--pf-c-button--m-control--BorderRadius, 0);--pf-c-button--disabled--BackgroundColor:var(--pf-c-button--m-control--disabled--BackgroundColor,\n    var(--pf-global--disabled-color--300, #f0f0f0));--pf-c-button--after--BorderRadius:0;--pf-c-button--after--BorderWidth:var(--pf-c-button--m-control--after--BorderWidth,\n    var(--pf-global--BorderWidth--sm, 1px));--pf-c-button--after--BorderColor:var(--pf-c-button--m-control--after--BorderTopColor,\n      var(--pf-global--BorderColor--300, #f0f0f0)) var(--pf-c-button--m-control--after--BorderRightColor,\n      var(--pf-global--BorderColor--300, #f0f0f0)) var(--pf-c-button--m-control--after--BorderBottomColor,\n      var(--pf-global--BorderColor--200, #8a8d90)) var(--pf-c-button--m-control--after--BorderLeftColor,\n      var(--pf-global--BorderColor--300, #f0f0f0));color:var(--pf-c-button--m-control--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-c-button--m-control--BackgroundColor,var(--pf-global--BackgroundColor--100,#fff))}:host([variant=control]) button:active{--pf-c-button--m-control--Color:var(--pf-c-button--m-control--active--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-control--BackgroundColor:var(--pf-c-button--m-control--active--BackgroundColor,\n    var(--pf-global--BackgroundColor--100, #fff));--pf-c-button--m-control--after--BorderBottomColor:var(--pf-c-button--m-control--active--after--BorderBottomColor,\n    var(--pf-global--active-color--100, #06c))}:host([variant=control]) button:focus{--pf-c-button--m-control--Color:var(--pf-c-button--m-control--focus--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-control--BackgroundColor:var(--pf-c-button--m-control--focus--BackgroundColor,\n    var(--pf-global--BackgroundColor--100, #fff));--pf-c-button--m-control--after--BorderBottomColor:var(--pf-c-button--m-control--focus--after--BorderBottomColor,\n    var(--pf-global--active-color--100, #06c))}:host([variant=control]) button:hover{--pf-c-button--m-control--Color:var(--pf-c-button--m-control--hover--Color,\n    var(--pf-global--Color--100, #151515));--pf-c-button--m-control--BackgroundColor:var(--pf-c-button--m-control--hover--BackgroundColor,\n    var(--pf-global--BackgroundColor--100, #fff));--pf-c-button--m-control--after--BorderBottomColor:var(--pf-c-button--m-control--hover--after--BorderBottomColor,\n    var(--pf-global--active-color--100, #06c))}:host([variant=control]) button:active::after{border-block-end-width:var(--pf-c-button--m-control--active--after--BorderBottomWidth,var(--pf-global--BorderWidth--md,2px))}:host([variant=control]) button:focus::after{border-block-end-width:var(--pf-c-button--m-control--focus--after--BorderBottomWidth,var(--pf-global--BorderWidth--md,2px))}:host([variant=control]) button:hover::after{border-block-end-width:var(--pf-c-button--m-control--hover--after--BorderBottomWidth,var(--pf-global--BorderWidth--md,2px))}:host([variant=link]) button{color:var(--pf-c-button--m-link--Color,var(--pf-global--link--Color,#06c))}:host([variant=link]) button{background-color:var(--pf-c-button--m-link--BackgroundColor,var(--pf-c-button--m-link--hover--BackgroundColor,transparent))}:host([variant=link][inline]),:host([variant=link][inline]) button{display:inline}:host([variant=link][inline]){--pf-c-button--PaddingTop:0;--pf-c-button--PaddingLeft:0;--pf-c-button--PaddingBottom:0;--pf-c-button--PaddingRight:0}:host([variant=link][inline]) button:hover{text-decoration:var(--pf-c-button--m-link--m-inline--hover--TextDecoration,var(--pf-global--link--TextDecoration--hover,underline))}:host([variant=link]){--pf-c-button--disabled--BackgroundColor:var(--pf-c-button--m-link--disabled--BackgroundColor, transparent)}:host(:hover){--pf-c-button--m-link--Color:var(--pf-c-button--m-link--hover--Color,\n    var(--pf-global--link--Color--hover, #004080));--pf-c-button--m-link--BackgroundColor:var(--pf-c-button--m-link--hover--BackgroundColor, transparent)}:host(:focus),:host(:focus-within){--pf-c-button--m-link--Color:var(--pf-c-button--m-link--focus--Color,\n    var(--pf-global--link--Color--hover, #004080));--pf-c-button--m-link--BackgroundColor:var(--pf-c-button--m-link--hover--BackgroundColor, transparent)}:host(:not([inline])) button:active{--pf-c-button--m-link--Color:var(--pf-c-button--m-link--active--Color,\n    var(--pf-global--link--Color--hover, #004080));--pf-c-button--m-link--BackgroundColor:var(--pf-c-button--m-link--active--BackgroundColor, transparent)}:host(:not([inline]):has(button:active)){--pf-c-button--m-link--Color:var(--pf-c-button--m-link--active--Color,\n    var(--pf-global--link--Color--hover, #004080));--pf-c-button--m-link--BackgroundColor:var(--pf-c-button--m-link--active--BackgroundColor, transparent)}:host([variant=link][danger]) button{--pf-c-button--m-danger--Color:var(--pf-c-button--m-link--m-danger--Color,\n      var(--pf-global--danger-color--100, #c9190b));--pf-c-button--m-danger--BackgroundColor:var(--pf-c-button--m-link--m-danger--BackgroundColor, transparent)}:host([variant=link][danger]) button:hover{--pf-c-button--m-link--m-danger--Color:var(--pf-c-button--m-link--m-danger--hover--Color,\n      var(--pf-global--danger-color--200, #a30000));--pf-c-button--m-link--m-danger--BackgroundColor:var(--pf-c-button--m-link--m-danger--hover--BackgroundColor, transparent)}:host([variant=link][danger]) button:active{--pf-c-button--m-link--m-danger--Color:var(--pf-c-button--m-link--m-danger--active--Color,\n    var(--pf-global--danger-color--200, #a30000));--pf-c-button--m-link--m-danger--BackgroundColor:var(--pf-c-button--m-link--m-danger--active--BackgroundColor, transparent)}:host([variant=link][danger]:has(button:active)){--pf-c-button--m-link--m-danger--Color:var(--pf-c-button--m-link--m-danger--active--Color,\n    var(--pf-global--danger-color--200, #a30000));--pf-c-button--m-link--m-danger--BackgroundColor:var(--pf-c-button--m-link--m-danger--active--BackgroundColor, transparent)}:host([variant=link][danger]:is(:focus,:focus-within)){--pf-c-button--m-link--m-danger--Color:var(--pf-c-button--m-link--m-danger--focus--Color,\n    var(--pf-global--danger-color--200, #a30000));--pf-c-button--m-link--m-danger--BackgroundColor:var(--pf-c-button--m-link--m-danger--focus--BackgroundColor, transparent)}:host(:is(:disabled,[aria-disabled=true])),:host(:is(:disabled,[aria-disabled=true])) button,:host(:is(:disabled,[aria-disabled=true])[danger]) button,:host(:is(:disabled,[aria-disabled=true])[variant=link]) button{color:var(--pf-c-button--disabled--Color,var(--pf-global--disabled-color--100,#6a6e73));background-color:var(--pf-c-button--disabled--BackgroundColor,var(--pf-global--disabled-color--200,#d2d2d2))}:host(:is(:disabled,[aria-disabled=true])) button::after{border-color:var(--pf-c-button--disabled--after--BorderColor,transparent)}:host([block]),:host([block]) button{display:flex;width:100%;justify-content:center}:host([size=large]) button{--pf-c-button--PaddingTop:var(--pf-c-button--m-display-lg--PaddingTop,\n    var(--pf-global--spacer--md, 1rem));--pf-c-button--PaddingRight:var(--pf-c-button--m-display-lg--PaddingRight,\n    var(--pf-global--spacer--xl, 2rem));--pf-c-button--PaddingBottom:var(--pf-c-button--m-display-lg--PaddingBottom,\n    var(--pf-global--spacer--md, 1rem));--pf-c-button--PaddingLeft:var(--pf-c-button--m-display-lg--PaddingLeft,\n    var(--pf-global--spacer--xl, 2rem));--pf-c-button--FontWeight:var(--pf-c-button--m-display-lg--FontWeight,\n    var(--pf-global--FontWeight--bold, 700))}:host([size=small]) button{--pf-c-button--FontSize:var(--pf-c-button--m-small--FontSize,\n    var(--pf-global--FontSize--md, 1rem))}:host([danger]) button{color:var(--pf-c-button--m-danger--Color,var(--pf-global--Color--light-100,#fff));background-color:var(--pf-c-button--m-danger--BackgroundColor,var(--pf-global--danger-color--100,#c9190b))}`;
/**
 * A button is a box area or text that communicates and triggers user actions when
 * clicked or selected. Buttons can be used to communicate and immediately trigger
 * actions a user can take in an application, like submitting a form, canceling a
 * process, or creating a new object. Buttons can also be used to take a user to a
 * new location, like another page inside of a web application, or an external site
 * such as help or documentation..
 *
 * @summary Allows users to perform an action when triggered
 *
 * @cssprop {<length>} --pf-c-button--FontSize   {@default `1rem`}
 * @cssprop            --pf-c-button--FontWeight {@default `400`}
 * @cssprop {<number>} --pf-c-button--LineHeight {@default `1.5`}
 *
 * @cssprop {<length>} --pf-c-button--PaddingTop    {@default `0.375rem`}
 * @cssprop {<length>} --pf-c-button--PaddingLeft   {@default `1rem`}
 * @cssprop {<length>} --pf-c-button--PaddingBottom {@default `0.375rem`}
 * @cssprop {<length>} --pf-c-button--PaddingRight  {@default `1rem`}
 *
 * @cssprop {<length>|<percentage>} --pf-c-button--BorderRadius  {@default `3px`}
 * @cssprop {<color>}  --pf-c-button--after--BorderColor         {@default `transparent`}
 * @cssprop {<length>} --pf-c-button--after--BorderRadius        {@default `3px`}
 * @cssprop {<length>} --pf-c-button--after--BorderWidth         {@default `1px`}
 * @cssprop {<length>} --pf-c-button--active--after--BorderWidth {@default `2px`}
 * @cssprop {<length>} --pf-c-button--hover--after--BorderWidth  {@default `2px`}
 * @cssprop {<length>} --pf-c-button--focus--after--BorderWidth  {@default `2px`}
 *
 * @cssprop {<color>}  --pf-c-button--m-primary--Color                   {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-primary--BackgroundColor         {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-primary--active--Color           {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-primary--active--BackgroundColor {@default `#004080`}
 * @cssprop {<color>}  --pf-c-button--m-primary--focus--Color            {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-primary--focus--BackgroundColor  {@default `#004080`}
 * @cssprop {<color>}  --pf-c-button--m-primary--hover--Color            {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-primary--hover--BackgroundColor  {@default `#004080`}
 *
 * @cssprop {<color>}  --pf-c-button--m-secondary--Color                   {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--BackgroundColor         {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--active--Color           {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--active--BackgroundColor {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--active--BorderColor     {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--focus--Color            {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--focus--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--focus--BorderColor      {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--hover--Color            {@default `#06c`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--hover--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--hover--BorderColor      {@default `#06c`}
 *
 * @cssprop {<color>}  --pf-c-button--m-tertiary--Color                   {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--BackgroundColor         {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--active--Color           {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--active--BackgroundColor {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--active--BorderColor     {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--focus--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--focus--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--focus--BorderColor      {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--hover--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--hover--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-tertiary--hover--BorderColor      {@default `#151515`}
 *
 * @cssprop {<color>}  --pf-c-button--m-danger--Color                   {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-danger--BackgroundColor         {@default `#c9190b`}
 * @cssprop {<color>}  --pf-c-button--m-danger--active--Color           {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-danger--active--BackgroundColor {@default `#a30000`}
 * @cssprop {<color>}  --pf-c-button--m-danger--focus--Color            {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-danger--focus--BackgroundColor  {@default `#a30000`}
 * @cssprop {<color>}  --pf-c-button--m-danger--hover--Color            {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-danger--hover--BackgroundColor  {@default `#a30000`}
 *
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--Color                   {@default `#c9190b`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--BackgroundColor         {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--BorderColor             {@default `#c9190b`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--active--Color           {@default `#a30000`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--active--BackgroundColor {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--active--BorderColor     {@default `#c9190b`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--focus--Color            {@default `#a30000`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--focus--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--focus--BorderColor      {@default `#c9190b`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--hover--Color            {@default `#a30000`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--hover--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-secondary--m-danger--hover--BorderColor      {@default `#c9190b`}
 *
 * @cssprop {<color>}  --pf-c-button--m-control--disabled--BackgroundColor        {@default `#f0f0f0`}
 * @cssprop {<length>} --pf-c-button--m-control--BorderRadius                     {@default `0`}
 * @cssprop {<length>} --pf-c-button--m-control--after--BorderWidth               {@default `1px`}
 * @cssprop {<color>}  --pf-c-button--m-control--after--BorderTopColor            {@default `#f0f0f0`}
 * @cssprop {<color>}  --pf-c-button--m-control--after--BorderRightColor          {@default `#f0f0f0`}
 * @cssprop {<color>}  --pf-c-button--m-control--after--BorderBottomColor         {@default `#8a8d90`}
 * @cssprop {<color>}  --pf-c-button--m-control--after--BorderLeftColor           {@default `#f0f0f0`}
 * @cssprop {<color>}  --pf-c-button--m-control--Color                            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-control--BackgroundColor                  {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-control--active--Color                    {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-control--active--BackgroundColor          {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-control--active--BorderBottomColor        {@default `#06c`}
 * @cssprop {<length>} --pf-c-button--m-control--active--after--BorderBottomWidth {@default `2px`}
 * @cssprop {<color>}  --pf-c-button--m-control--focus--Color                     {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-control--focus--BackgroundColor           {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-control--focus--BorderBottomColor         {@default `#06c`}
 * @cssprop {<length>} --pf-c-button--m-control--focus--after--BorderBottomWidth  {@default `2px`}
 * @cssprop {<color>}  --pf-c-button--m-control--hover--Color                     {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-control--hover--BackgroundColor           {@default `#fff`}
 * @cssprop {<color>}  --pf-c-button--m-control--hover--BorderBottomColor         {@default `#06c`}
 * @cssprop {<length>} --pf-c-button--m-control--hover--after--BorderBottomWidth  {@default `2px`}
 *
 * @cssprop {<color>}  --pf-c-button--disabled--Color              {@default `#6a6e73`}
 * @cssprop {<color>}  --pf-c-button--disabled--BackgroundColor    {@default `#d2d2d2`}
 * @cssprop {<color>}  --pf-c-button--disabled--after--BorderColor {@default `transparent`}
 *
 * @cssprop {<color>}  --pf-c-button--m-warning--Color                   {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-warning--BackgroundColor         {@default `#f0ab00`}
 * @cssprop {<color>}  --pf-c-button--m-warning--active--Color           {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-warning--active--BackgroundColor {@default `#c58c00`}
 * @cssprop {<color>}  --pf-c-button--m-warning--focus--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-warning--focus--BackgroundColor  {@default `#c58c00`}
 * @cssprop {<color>}  --pf-c-button--m-warning--hover--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-warning--hover--BackgroundColor  {@default `#c58c00`}
 *
 * @cssprop {<color>}  --pf-c-button--m-plain--BackgroundColor         {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-plain--Color                   {@default `#6a6e73`}
 * @cssprop {<color>}  --pf-c-button--m-plain--hover--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-plain--hover--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-plain--focus--BackgroundColor  {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-plain--focus--Color            {@default `#151515`}
 * @cssprop {<color>}  --pf-c-button--m-plain--active--BackgroundColor {@default `transparent`}
 * @cssprop {<color>}  --pf-c-button--m-plain--active--Color           {@default `#151515`}
 *
 * @cssprop {<color>}  --pf-c-button--m-plain--disabled--Color           {@default `#d2d2d2`}
 * @cssprop {<color>}  --pf-c-button--m-plain--disabled--BackgroundColor {@default `transparent`}
 *
 * @attr {string} loading-label - ARIA label for the loading indicator {@default `'loading'`}
 *
 */
let PfButton = class PfButton extends BaseButton {
    constructor() {
        super(...arguments);
        /** Represents the state of a stateful button */
        this.loading = false;
        /** Applies plain styles */
        this.plain = false;
        /** Not as urgent as danger */
        this.warning = false;
        this.danger = false;
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
    }
    get hasIcon() {
        return !!this.icon || !!this.loading;
    }
    renderDefaultIcon() {
        return html `
      <pf-icon
          icon="${ifDefined(this.icon)}"
          set="${ifDefined(this.iconSet)}"
          ?hidden="${!this.icon}"></pf-icon>
      <pf-spinner
          ?hidden="${!this.loading}"
          size="md"
          aria-label="${this.getAttribute('loading-label') ?? 'loading'}"></pf-spinner>
    `;
    }
};
PfButton.styles = [...BaseButton.styles, styles];
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "loading", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "plain", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "warning", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "size", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], PfButton.prototype, "iconSet", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfButton.prototype, "danger", void 0);
__decorate([
    property({ reflect: true })
], PfButton.prototype, "variant", void 0);
PfButton = __decorate([
    customElement('pf-button')
], PfButton);
export { PfButton };
//# sourceMappingURL=pf-button.js.map