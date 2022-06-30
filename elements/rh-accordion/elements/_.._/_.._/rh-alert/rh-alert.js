"use strict";

// ../rh-alert/rh-alert.js
import { LitElement, html, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { pfelement } from "@patternfly/pfe-core/decorators.js";
import { css } from "lit";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var styles = css`:host{--BackgroundColor:#f2f9f9;--BorderWidth:3px;--BorderColor:#009596;--BorderStyle:solid;--Padding:16px;--Gap:4px;--Header--MarginBottom:var(--rh-alert--Gap,4px);--headerActions--MarginRight:4px;--header--Color:#003737;--header--FontSize:14px;--header--FontWeight:500;--icon--Color:#009596;--icon--Width:var(--rh-alert__icon--Size,24px);--icon--Height:var(--rh-alert__icon--Size,24px);--description--FontSize:14px;--close-button--Color:#6a6e73;--close-button--BackgroundColor:transparent;--close-button--border:0;--close-button--Height:var(--rh-alert__close-button--Size,24px);--close-button--Width:var(--rh-alert__close-button--Size,24px);--close-button--hover--Color:#151515;--actions--MarginTop:var(--rh-alert--Padding,16px);--actions--Gap:24px;--actions-item--MarginRight:var(--rh-alert__actions--Gap,24px);--actions-item--Padding:0;--actions-item--border:0;--actions-item--BackgroundColor:transparent;--actions-item--Color:#06c;--actions-item--FontSize:14px;--actions-item--hover--Color:#004080;--actions-item--hover--TextDecoration:underline;display:block}:host([hidden]){display:none}:host([state='info']){--BorderColor:#2b9af3;--icon--Color:#2b9af3;--header--Color:#002952;--BackgroundColor:#e7f1fa}:host([state='success']){--BorderColor:#3e8635;--icon--Color:#3e8635;--header--Color:#1e4f18;--BackgroundColor:#f3faf2}:host([state='warning']){--BorderColor:#f0ab00;--icon--Color:#f0ab00;--header--Color:#795600;--BackgroundColor:#fdf7e7}:host([state='danger']){--BorderColor:#c9190b;--icon--Color:#c9190b;--header--Color:#7d1007;--BackgroundColor:#faeae8}:host([toast]){--BackgroundColor:#fff}#container{border-width:var(--BorderWidth);border-color:var(--BorderColor);border-style:var(--BorderStyle);background-color:var(--BackgroundColor);padding:var(--Padding);display:grid;grid-template-columns:min-content 1fr;gap:var(--Gap)}#left-column{display:inline-block;vertical-align:top}#middle-column{display:inline-block;vertical-align:top}header{display:flex;align-items:center;justify-content:flex-start;margin-bottom:var(--Header--MarginBottom)}header ::slotted(:is(h1,h2,h3,h4,h5,h6)){margin:0}#header-actions{margin-right:var(--headerActions--MarginRight)}#header{font-size:var(--header--FontSize);color:var(--header--Color);font-weight:var(--header--FontWeight);flex:1 1 auto}#icon{display:flex;align-items:center;justify-content:center;width:var(--icon--Width);height:var(--icon--Height);color:var(--icon--Color)}#close-button{color:var(--close-button--Color);background-color:var(--close-button--BackgroundColor);border:var(--close-button--Border);width:var(--close-button--Width);height:var(--close-button--Height);cursor:pointer}#close-button:hover{color:var(---close-button--hover--Color)}#close-button:hover{color:var(--close-button--hover--Color)}#description{font-size:var(--description--FontSize)}footer{margin-top:var(--actions--MarginTop)}footer ::slotted([slot="actions"]){margin-right:var(--actions-item--MarginRight);padding:var(--actions-item--Padding);border:var(--actions-item--border);background-color:var(--actions-item--BackgroundColor);color:var(--actions-item--Color);font-size:var(--actions-item--FontSize)}footer ::slotted([slot="actions"]:hover),footer ::slotted([slot="actions"]:focus){text-decoration:var(--actions-item--hover--TextDecoration);color:var(--actions-item--hover--Color)}footer ::slotted([slot="actions"]){margin-right:var(--actions-item--MarginRight) !important}:host(:not([variant])) #container,:host([toast]) #container{border-left:0;border-bottom:0;border-right:0}:host([toast]) #container{box-shadow:0 5px 15px #0003}`;
var rh_alert_default = styles;
var ICONS = new Map(Object.entries({
  default: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 896 1024" aria-hidden="true" role="img"><path d="M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z"></path></svg>`,
  error: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`,
  success: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>`,
  warning: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 576 512" aria-hidden="true" role="img"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`,
  danger: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>`,
  info: svg`<svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 512 512" aria-hidden="true" role="img"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`
}));
var RhAlert = class extends LitElement {
  constructor() {
    super(...arguments);
    this.state = "default";
    this.variant = false;
    this.toast = false;
  }
  get icon() {
    return ICONS.get(this.state) ?? ``;
  }
  render() {
    return html`
      <div id="container" role="alert" aria-hidden="false">
        <div id="left-column">
          <div id="icon">${this.icon}</div>
        </div>
        <div id="middle-column">
          <header>
            <div id="header"><slot name="header"></slot></div>
            <div id="header-actions">
              <button id="close-button" aria-label="Close" confirm>
                <svg style="vertical-align:-0.125em" fill="currentColor" height="1em" width="1em" viewBox="0 0 352 512" aria-hidden="true" role="img">
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </button>
            </div>
          </header>
          <div id="description"><slot></slot></div>
          <footer><slot name="actions"></slot></footer>
        </div>
      </div>
    `;
  }
};
RhAlert.version = "{{version}}";
RhAlert.styles = rh_alert_default;
__decorateClass([
  property({ reflect: true })
], RhAlert.prototype, "state", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], RhAlert.prototype, "variant", 2);
__decorateClass([
  property({ reflect: true, type: Boolean })
], RhAlert.prototype, "toast", 2);
RhAlert = __decorateClass([
  customElement("rh-alert"),
  pfelement()
], RhAlert);
export {
  RhAlert
};
//# sourceMappingURL=rh-alert.js.map
