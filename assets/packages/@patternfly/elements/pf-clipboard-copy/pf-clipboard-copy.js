var _PfClipboardCopy_instances, _PfClipboardCopy_copied, _PfClipboardCopy_mo, _PfClipboardCopy_onClick, _PfClipboardCopy_onChange, _PfClipboardCopy_onMutation, _PfClipboardCopy_dedent;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { css } from "lit";
const styles = css `:host {
\t/** Transition for the toggle icon */
\t--pf-c-clipboard-copy__toggle-icon--Transition: .2s ease-in 0s;
\t/** Rotate value for the toggle icon when expanded */
\t--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate: 90deg;
\t/** PaddingTop for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** PaddingRight for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** PaddingLeft for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** BackgroundColor for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #fff);
\t/** BorderTopWidth for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BorderTopWidth: 0;
\t/** BorderRightWidth for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BorderRightWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderBottomWidth for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderLeftWidth for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BorderLeftWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderColor for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** OutlineOffset for the expandable content */
\t--pf-c-clipboard-copy__expandable-content--OutlineOffset: calc(-1 * var(--pf-global--spacer--xs, 0.25rem));
\t/** PaddingTop for the inline variant */
\t--pf-c-clipboard-copy--m-inline--PaddingTop: 0;
\t/** PaddingBottom for the inline variant */
\t--pf-c-clipboard-copy--m-inline--PaddingBottom: 0;
\t/** PaddingLeft for the inline variant */
\t--pf-c-clipboard-copy--m-inline--PaddingLeft: var(--pf-global--spacer--xs, 0.25rem);
\t/** BackgroundColor for the inline variant */
\t--pf-c-clipboard-copy--m-inline--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
\t/** FontFamily for the code text */
\t--pf-c-clipboard-copy__text--m-code--FontFamily: var(--pf-global--FontFamily--monospace, "Liberation Mono", consolas, "SFMono-Regular", menlo, monaco, "Courier New", monospace);
\t/** FontSize for the code text */
\t--pf-c-clipboard-copy__text--m-code--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** MarginTop for actions item */
\t--pf-c-clipboard-copy__actions-item--MarginTop: calc(-1 * var(--pf-global--spacer--form-element, 0.375rem));
\t/** MarginBottom for actions item */
\t--pf-c-clipboard-copy__actions-item--MarginBottom: calc(-1 * var(--pf-global--spacer--form-element, 0.375rem));
\t/** PaddingTop for actions item button */
\t--pf-c-clipboard-copy__actions-item--button--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
\t/** PaddingRight for actions item button */
\t--pf-c-clipboard-copy__actions-item--button--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
\t/** PaddingBottom for actions item button */
\t--pf-c-clipboard-copy__actions-item--button--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
\t/** PaddingLeft for actions item button */
\t--pf-c-clipboard-copy__actions-item--button--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  --pf-icon--size: var(--pf-global--FontSize--md, 1rem);
}

[hidden],
[inert],
[inert]::slotted(*) {
  display: none !important;
}

#container {
  flex-direction: column;
}

#container,
#input-group,
#wrapper {
  display: flex;
}

.inline #wrapper {
  display: inline-flex;
}

#input-group > * + * {
  margin-left: -1px;
}

input {
  color: var(--pf-c-form-control--Color);
  width: var(--pf-c-form-control--Width);
  padding:
    var(--pf-c-form-control--PaddingTop)
    var(--pf-c-form-control--PaddingRight)
    var(--pf-c-form-control--PaddingBottom)
    var(--pf-c-form-control--PaddingLeft);
  font-size: var(--pf-c-form-control--FontSize);
  line-height: var(--pf-c-form-control--LineHeight);
  background-color: var(--pf-c-form-control--BackgroundColor);
  background-repeat: no-repeat;
  border: var(--pf-c-form-control--BorderWidth) solid;
  border-color:
    var(--pf-c-form-control--BorderTopColor)
    var(--pf-c-form-control--BorderRightColor)
    var(--pf-c-form-control--BorderBottomColor)
    var(--pf-c-form-control--BorderLeftColor);
  border-radius: var(--pf-c-form-control--BorderRadius);
  margin: 0;
  appearance: none;
  height: var(--pf-c-form-control--Height);
  text-overflow: ellipsis;
  flex: 1 1 auto;
}

input[disabled] {
  background-color: var(--pf-c-form-control--readonly--BackgroundColor);
}

textarea {
  display: flex;
  flex: 1 1 auto;
  padding:
    var(--pf-c-clipboard-copy__expandable-content--PaddingTop)
    var(--pf-c-clipboard-copy__expandable-content--PaddingRight)
    var(--pf-c-clipboard-copy__expandable-content--PaddingBottom)
    var(--pf-c-clipboard-copy__expandable-content--PaddingLeft);
  word-wrap: break-word;
  background-color: var(--pf-c-clipboard-copy__expandable-content--BackgroundColor);
  background-clip: padding-box;
  border: solid var(--pf-c-clipboard-copy__expandable-content--BorderColor);
  border-width:
    var(--pf-c-clipboard-copy__expandable-content--BorderTopWidth)
    var(--pf-c-clipboard-copy__expandable-content--BorderRightWidth)
    var(--pf-c-clipboard-copy__expandable-content--BorderBottomWidth)
    var(--pf-c-clipboard-copy__expandable-content--BorderLeftWidth);
  box-shadow: var(--pf-c-clipboard-copy__expandable-content--BoxShadow);
  margin: 0;
  color: inherit;
  font-family: inherit;
}

#input-group {
  display: flex;
  height: 100%;
}

#container.code textarea {
  font-family: var(--pf-global--FontFamily--monospace,
    var(--pf-global--FontFamily--redhat--monospace,
      "RedHatMono",
      "Liberation Mono",
      consolas,
      "SFMono-Regular",
      menlo,
      monaco,
      "Courier New",
      monospace));
}

#container.expanded #expand-button pf-icon {
  rotate: 90deg;
}

#container.inline {
  display: inline;
  background-color: var(--pf-c-clipboard-copy--m-inline--BackgroundColor);
  padding-block-start: var(--pf-c-clipboard-copy--m-inline--PaddingTop);
  padding-block-end: var(--pf-c-clipboard-copy--m-inline--PaddingBottom);
  padding-inline-start: var(--pf-c-clipboard-copy--m-inline--PaddingLeft);
  word-break: break-word;
  white-space: normal;
}

#container:is(.compact, .inline) #input-group {
  display: contents;
}

#container:is(.compact, .inline) #input-group {
  background-color: var(--pf-c-button--m-plain--BackgroundColor,
    var(--pf-global--BackgroundColor--200, #f0f0f0));
}

#container.compact.block {
  display: block;
  background-color: var(--pf-c-clipboard-copy--m-inline--BackgroundColor);
}

#container:is(.compact, .inline) #copy-button,
#container:is(.compact, .inline) slot[name="actions"]::slotted(*) {
  --pf-c-button--PaddingTop: var(--pf-c-clipboard-copy__actions-item--button--PaddingTop) !important;
  --pf-c-button--PaddingRight: var(--pf-c-clipboard-copy__actions-item--button--PaddingRight) !important;
  --pf-c-button--PaddingBottom: var(--pf-c-clipboard-copy__actions-item--button--PaddingBottom) !important;
  --pf-c-button--PaddingLeft: var(--pf-c-clipboard-copy__actions-item--button--PaddingLeft) !important;
  margin-block-start: calc(-1 * var(--pf-c-button--PaddingTop));
  margin-block-end: calc(-1 * var(--pf-c-button--PaddingBottom));
}

`;
const formControlStyles = css `:host {
  --pf-c-form-control--Color: var(--pf-global--Color--100, #151515);
  --pf-c-form-control--FontSize: var(--pf-global--FontSize--md, 1rem);
  --pf-c-form-control--LineHeight: var(--pf-global--LineHeight--md, 1.5);
  --pf-c-form-control--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-form-control--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-form-control--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-form-control--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
  --pf-c-form-control--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);
  --pf-c-form-control--BorderRadius: 0;
  --pf-c-form-control--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
  --pf-c-form-control--Width: 100%;
  --pf-c-form-control--Height: calc(var(--pf-c-form-control--FontSize) * var(--pf-c-form-control--LineHeight) + var(--pf-c-form-control--BorderWidth) * 2 + var(--pf-c-form-control--PaddingTop) + var(--pf-c-form-control--PaddingBottom));
  --pf-c-form-control--inset--base: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-form-control--PaddingTop: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm));
  --pf-c-form-control--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm));
  --pf-c-form-control--PaddingRight: var(--pf-c-form-control--inset--base);
  --pf-c-form-control--PaddingLeft: var(--pf-c-form-control--inset--base);
  --pf-c-form-control--hover--BorderBottomColor: var(--pf-global--primary-color--100, #06c);
  --pf-c-form-control--focus--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-form-control--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--focus--BorderBottomWidth));
  --pf-c-form-control--focus--BorderBottomColor: var(--pf-global--primary-color--100, #06c);
  --pf-c-form-control--m-expanded--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-form-control--m-expanded--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--focus--BorderBottomWidth));
  --pf-c-form-control--m-expanded--BorderBottomColor: var(--pf-global--primary-color--100, #06c);
  --pf-c-form-control--placeholder--Color: var(--pf-global--Color--dark-200, #6a6e73);
  --pf-c-form-control--placeholder--child--Color: var(--pf-global--Color--100, #151515);
  --pf-c-form-control--disabled--Color: var(--pf-global--disabled-color--100, #6a6e73);
  --pf-c-form-control--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
  --pf-c-form-control--disabled--BorderColor: transparent;
  --pf-c-form-control--readonly--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
  --pf-c-form-control--readonly--hover--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
  --pf-c-form-control--readonly--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm));
  --pf-c-form-control--readonly--focus--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);
  --pf-c-form-control--readonly--focus--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
  --pf-c-form-control--readonly--m-plain--BackgroundColor: transparent;
  --pf-c-form-control--readonly--m-plain--inset--base: 0;
  --pf-c-form-control--success--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-form-control--success--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--success--BorderBottomWidth));
  --pf-c-form-control--success--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);
  --pf-c-form-control--success--PaddingRight: var(--pf-global--spacer--xl, 2rem);
  --pf-c-form-control--success--BackgroundPositionX: calc(100% - var(--pf-c-form-control--PaddingLeft));
  --pf-c-form-control--success--BackgroundPositionY: center;
  --pf-c-form-control--success--BackgroundPosition: var(--pf-c-form-control--success--BackgroundPositionX) var(--pf-c-form-control--success--BackgroundPositionY);
  --pf-c-form-control--success--BackgroundSizeX: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--success--BackgroundSizeY: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--success--BackgroundSize: var(--pf-c-form-control--success--BackgroundSizeX) var(--pf-c-form-control--success--BackgroundSizeY);
  --pf-c-form-control--success--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%235ba352' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E");
  --pf-c-form-control--m-warning--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-form-control--m-warning--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--m-warning--BorderBottomWidth));
  --pf-c-form-control--m-warning--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);
  --pf-c-form-control--m-warning--PaddingRight: var(--pf-global--spacer--xl, 2rem);
  --pf-c-form-control--m-warning--BackgroundPositionX: calc(100% - calc(var(--pf-c-form-control--PaddingLeft) - 0.0625rem));
  --pf-c-form-control--m-warning--BackgroundPositionY: center;
  --pf-c-form-control--m-warning--BackgroundPosition: var(--pf-c-form-control--m-warning--BackgroundPositionX) var(--pf-c-form-control--m-warning--BackgroundPositionY);
  --pf-c-form-control--m-warning--BackgroundSizeX: 1.25rem;
  --pf-c-form-control--m-warning--BackgroundSizeY: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--m-warning--BackgroundSize: var(--pf-c-form-control--m-warning--BackgroundSizeX) var(--pf-c-form-control--m-warning--BackgroundSizeY);
  --pf-c-form-control--m-warning--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23f0ab00' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E");
  --pf-c-form-control--invalid--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
  --pf-c-form-control--invalid--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--invalid--BorderBottomWidth));
  --pf-c-form-control--invalid--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);
  --pf-c-form-control--invalid--PaddingRight: var(--pf-global--spacer--xl, 2rem);
  --pf-c-form-control--invalid--BackgroundPositionX: calc(100% - var(--pf-c-form-control--PaddingLeft));
  --pf-c-form-control--invalid--BackgroundPositionY: center;
  --pf-c-form-control--invalid--BackgroundPosition: var(--pf-c-form-control--invalid--BackgroundPositionX) var(--pf-c-form-control--invalid--BackgroundPositionY);
  --pf-c-form-control--invalid--BackgroundSizeX: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--invalid--BackgroundSizeY: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--invalid--BackgroundSize: var(--pf-c-form-control--invalid--BackgroundSizeX) var(--pf-c-form-control--invalid--BackgroundSizeY);
  --pf-c-form-control--invalid--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fe5142' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E");
  --pf-c-form-control--invalid--exclamation--Background: var(--pf-c-form-control--invalid--BackgroundUrl) var(--pf-c-form-control--invalid--BackgroundPosition) / var(--pf-c-form-control--invalid--BackgroundSize) no-repeat;
  --pf-c-form-control--invalid--Background: var(--pf-c-form-control--BackgroundColor) var(--pf-c-form-control--invalid--exclamation--Background);
  --pf-c-form-control--m-search--PaddingLeft: var(--pf-global--spacer--xl, 2rem);
  --pf-c-form-control--m-search--BackgroundPosition: var(--pf-c-form-control--PaddingRight);
  --pf-c-form-control--m-search--BackgroundSize: var(--pf-c-form-control--FontSize) var(--pf-c-form-control--FontSize);
  --pf-c-form-control--m-search--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E");
  --pf-c-form-control--m-icon--PaddingRight: calc(var(--pf-c-form-control--inset--base) + var(--pf-c-form-control--m-icon--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer));
  --pf-c-form-control--m-icon--BackgroundUrl: none;
  --pf-c-form-control--m-icon--BackgroundPositionX: calc(100% - var(--pf-c-form-control--inset--base));
  --pf-c-form-control--m-icon--BackgroundPositionY: center;
  --pf-c-form-control--m-icon--BackgroundSizeX: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--m-icon--BackgroundSizeY: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--m-icon--icon--spacer: var(--pf-global--spacer--sm, 0.5rem);
  --pf-c-form-control--m-icon--icon--PaddingRight: calc(var(--pf-c-form-control--inset--base) + var(--pf-c-form-control--invalid--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer) + var(--pf-c-form-control--m-icon--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer));
  --pf-c-form-control--m-icon--icon--BackgroundPositionX: calc(var(--pf-c-form-control--m-icon--BackgroundPositionX) - var(--pf-c-form-control--m-icon--icon--spacer) - var(--pf-c-form-control--invalid--BackgroundSizeX));
  --pf-c-form-control--m-icon--invalid--BackgroundUrl: var(--pf-c-form-control--invalid--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);
  --pf-c-form-control--m-icon--invalid--BackgroundPosition: var(--pf-c-form-control--invalid--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);
  --pf-c-form-control--m-icon--invalid--BackgroundSize: var(--pf-c-form-control--invalid--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);
  --pf-c-form-control--m-icon--success--BackgroundUrl: var(--pf-c-form-control--success--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);
  --pf-c-form-control--m-icon--success--BackgroundPosition: var(--pf-c-form-control--success--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);
  --pf-c-form-control--m-icon--success--BackgroundSize: var(--pf-c-form-control--success--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);
  --pf-c-form-control--m-icon--m-warning--BackgroundUrl: var(--pf-c-form-control--m-warning--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);
  --pf-c-form-control--m-icon--m-warning--BackgroundPosition: var(--pf-c-form-control--m-warning--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);
  --pf-c-form-control--m-icon--m-warning--BackgroundSize: var(--pf-c-form-control--m-warning--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);
  --pf-c-form-control--m-calendar--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
  --pf-c-form-control--m-clock--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'/%3E%3C/svg%3E");
  --pf-c-form-control__select--PaddingRight: calc(var(--pf-global--spacer--lg, 1.5rem) + var(--pf-c-form-control--BorderWidth) + var(--pf-c-form-control--BorderWidth));
  --pf-c-form-control__select--PaddingLeft: calc(var(--pf-global--spacer--sm, 0.5rem) - var(--pf-c-form-control--BorderWidth));
  --pf-c-form-control__select--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
  --pf-c-form-control__select--BackgroundSize: .625em;
  --pf-c-form-control__select--BackgroundPositionX: calc(100% - var(--pf-global--spacer--md, 1rem) + 1px);
  --pf-c-form-control__select--BackgroundPositionY: center;
  --pf-c-form-control__select--BackgroundPosition: var(--pf-c-form-control__select--BackgroundPositionX) var(--pf-c-form-control__select--BackgroundPositionY);
  --pf-c-form-control__select--success--PaddingRight: var(--pf-global--spacer--3xl, 4rem);
  --pf-c-form-control__select--success--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem));
  --pf-c-form-control__select--m-warning--PaddingRight: var(--pf-global--spacer--3xl, 4rem);
  --pf-c-form-control__select--m-warning--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem) + 0.0625rem);
  --pf-c-form-control__select--invalid--PaddingRight: var(--pf-global--spacer--3xl, 4rem);
  --pf-c-form-control__select--invalid--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem));
  --pf-c-form-control--textarea--Width: var(--pf-c-form-control--Width);
  --pf-c-form-control--textarea--Height: auto;
  --pf-c-form-control--textarea--success--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);
  --pf-c-form-control--textarea--m-warning--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);
  --pf-c-form-control--textarea--invalid--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);
  --pf-c-form-control--m-icon-sprite--success--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%233e8635' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite--m-warning--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23f0ab00' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346 7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite--invalid--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346 7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite__select--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23151515' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite--m-search--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%236a6e73' d='M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite--m-calendar--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%236a6e73' d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite--m-clock--BackgroundUrl: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%236a6e73' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'/%3E%3C/svg%3E%0A");
  --pf-c-form-control--m-icon-sprite__select--BackgroundSize: var(--pf-c-form-control--FontSize);
  --pf-c-form-control--m-icon-sprite__select--BackgroundPositionX: calc(100% - var(--pf-global--spacer--md, 1rem) + 7px);
  --pf-c-form-control--m-icon-sprite__select--success--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) + 1px - var(--pf-global--spacer--lg));
  --pf-c-form-control--m-icon-sprite__select--m-warning--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) - var(--pf-global--spacer--lg) + 0.0625rem);
  --pf-c-form-control--m-icon-sprite__select--invalid--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) - var(--pf-global--spacer--lg));
}
`;
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-tooltip/pf-tooltip.js';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
export class PfClipboardCopyCopiedEvent extends Event {
    constructor(text) {
        super('copy', { bubbles: true });
        this.text = text;
    }
}
let PfClipboardCopy = class PfClipboardCopy extends LitElement {
    constructor() {
        super(...arguments);
        _PfClipboardCopy_instances.add(this);
        /** Tooltip message to display when clicking the copy button */
        this.clickTip = 'Successfully copied to clipboard!';
        /** Tooltip message to display when hover the copy button */
        this.hoverTip = 'Copy to clipboard';
        /** Accessible label to use on the text input. */
        this.accessibleTextLabel = 'Copyable input';
        /** Accessible label to use on the toggle button. */
        this.accessibleToggleLabel = 'Show content';
        /** Delay in ms before the tooltip appears. */
        this.entryDelay = 300;
        /** Delay in ms before the tooltip disappears. */
        this.exitDelay = 1500;
        /** Flag to determine if inline clipboard copy should be block styling */
        this.block = false;
        /** Flag to determine if clipboard copy content includes code */
        this.code = false;
        /** Flag to determine if clipboard copy is in the expanded state */
        this.expanded = false;
        /** Implies not `inline`. */
        this.expandable = false;
        /** Flag to show if the input is read only. */
        this.readonly = false;
        /** Implies not expandable. Overrules `expandable`. */
        this.inline = false;
        /** Flag to determine if inline clipboard copy should have compact styling */
        this.compact = false;
        /** String to copy */
        this.value = '';
        _PfClipboardCopy_copied.set(this, false);
        _PfClipboardCopy_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onMutation).call(this)));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfClipboardCopy_mo, "f").observe(this, { characterData: true });
        if (!isServer) {
            __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onMutation).call(this);
        }
    }
    /**
     * @todo fix the collapsed whitespace between the end of the "inline-compact" variant and the text node.
     * This demonstrates the collapsed whitespace issue.
     * The extra space between the closing slot tag and the closing template literal results in a collapsed whitespace.
     */
    render() {
        const { expanded, expandable, inline, compact, code, block, readonly } = this;
        return html `
      <div id="container" class="${classMap({ code, expanded, inline, compact, block })}">
        <div id="input-group">
          <div id="wrapper">
            <pf-button id="expand-button"
                       variant="control"
                       label="EXPAND"
                       ?inert="${!expandable}"
                       @click="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onClick)}">
              <pf-icon icon="chevron-right"></pf-icon>
            </pf-button>
          </div>
          <span ?hidden="${!(inline || compact)}">${this.value}</span>
          <input aria-label="${this.accessibleTextLabel}"
                 ?hidden="${inline || compact}"
                 ?disabled="${expanded || readonly}"
                 .value="${this.value}"
                 @input="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onChange)}">
          <pf-tooltip>
            <pf-button id="copy-button"
                       icon="copy"
                       ?plain="${inline || compact}"
                       variant="${ifDefined(!(inline || compact) ? 'control' : undefined)}"
                       label="${this.hoverTip}"
                       @click="${this.copy}">
            </pf-button>
            <span slot="content">${__classPrivateFieldGet(this, _PfClipboardCopy_copied, "f") ? this.clickTip : this.hoverTip}</span>
          </pf-tooltip>
          <!-- Place additional action buttons here -->
          <slot name="actions"></slot>
        </div>
        <textarea .value="${this.value}"
                  .disabled="${this.readonly}"
                  ?hidden="${!(expandable && expanded)}"
                  @input="${__classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_onChange)}">
        </textarea>
      </div>
    `;
    }
    /**
     * Copy the current value to the clipboard.
     */
    async copy() {
        await navigator.clipboard.writeText(this.value);
        this.dispatchEvent(new PfClipboardCopyCopiedEvent(this.value));
        await sleep(this.entryDelay);
        __classPrivateFieldSet(this, _PfClipboardCopy_copied, true, "f");
        this.requestUpdate();
        await sleep(this.exitDelay);
        __classPrivateFieldSet(this, _PfClipboardCopy_copied, false, "f");
        this.requestUpdate();
    }
};
_PfClipboardCopy_copied = new WeakMap();
_PfClipboardCopy_mo = new WeakMap();
_PfClipboardCopy_instances = new WeakSet();
_PfClipboardCopy_onClick = function _PfClipboardCopy_onClick() {
    this.expanded = !this.expanded;
};
_PfClipboardCopy_onChange = function _PfClipboardCopy_onChange(e) {
    const { value } = e.target || HTMLTextAreaElement;
    this.value = value;
};
_PfClipboardCopy_onMutation = function _PfClipboardCopy_onMutation() {
    if (this.childNodes?.length > 0) {
        this.value = this.getAttribute('value') ?? __classPrivateFieldGet(this, _PfClipboardCopy_instances, "m", _PfClipboardCopy_dedent).call(this, Array.from(this.childNodes, child => (child instanceof Element || child instanceof Text) ? (child.textContent ?? '') : '')
            .join(''));
    }
};
_PfClipboardCopy_dedent = function _PfClipboardCopy_dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
};
PfClipboardCopy.styles = [formControlStyles, styles];
PfClipboardCopy.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfClipboardCopy.version = "4.3.0";
__decorate([
    property({ attribute: 'click-tip' })
], PfClipboardCopy.prototype, "clickTip", void 0);
__decorate([
    property({ attribute: 'hover-tip' })
], PfClipboardCopy.prototype, "hoverTip", void 0);
__decorate([
    property({ attribute: 'accessible-text-label' })
], PfClipboardCopy.prototype, "accessibleTextLabel", void 0);
__decorate([
    property({ attribute: 'accessible-toggle-label' })
], PfClipboardCopy.prototype, "accessibleToggleLabel", void 0);
__decorate([
    property({ type: Number, attribute: 'entry-delay' })
], PfClipboardCopy.prototype, "entryDelay", void 0);
__decorate([
    property({ type: Number, attribute: 'exit-delay' })
], PfClipboardCopy.prototype, "exitDelay", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "block", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "code", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "expanded", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "expandable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfClipboardCopy.prototype, "compact", void 0);
__decorate([
    property()
], PfClipboardCopy.prototype, "value", void 0);
PfClipboardCopy = __decorate([
    customElement('pf-clipboard-copy')
], PfClipboardCopy);
export { PfClipboardCopy };
//# sourceMappingURL=pf-clipboard-copy.js.map