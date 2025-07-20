var _PfTextInput_instances, _PfTextInput_internals, _PfTextInput_derivedLabel, _PfTextInput_touched, _PfTextInput_disabled_get, _PfTextInput_input_get, _PfTextInput_onInput, _PfTextInput_onKeydown, _PfTextInput_onBlur, _PfTextInput_setValidityFromInput;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {\n\t--pf-c-form-control--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-form-control--FontSize: var(--pf-global--FontSize--md, 1rem);\n\t--pf-c-form-control--LineHeight: var(--pf-global--LineHeight--md, 1.5);\n\t--pf-c-form-control--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-form-control--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-form-control--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-form-control--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);\n\t--pf-c-form-control--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);\n\t--pf-c-form-control--BorderRadius: 0;\n\t--pf-c-form-control--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);\n\t--pf-c-form-control--Width: 100%;\n\t--pf-c-form-control--Height: calc(var(--pf-c-form-control--FontSize) * var(--pf-c-form-control--LineHeight) + var(--pf-c-form-control--BorderWidth) * 2 + var(--pf-c-form-control--PaddingTop) + var(--pf-c-form-control--PaddingBottom));\n\t--pf-c-form-control--inset--base: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-form-control--PaddingTop: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm, 1px));\n\t--pf-c-form-control--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm, 1px));\n\t--pf-c-form-control--PaddingRight: var(--pf-c-form-control--inset--base);\n\t--pf-c-form-control--PaddingLeft: var(--pf-c-form-control--inset--base);\n\t--pf-c-form-control--hover--BorderBottomColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-form-control--focus--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-form-control--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--focus--BorderBottomWidth));\n\t--pf-c-form-control--focus--BorderBottomColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-form-control--m-expanded--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-form-control--m-expanded--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--focus--BorderBottomWidth));\n\t--pf-c-form-control--m-expanded--BorderBottomColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-form-control--placeholder--Color: var(--pf-global--Color--dark-200, #6a6e73);\n\t--pf-c-form-control--placeholder--child--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-form-control--disabled--Color: var(--pf-global--disabled-color--100, #6a6e73);\n\t--pf-c-form-control--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);\n\t--pf-c-form-control--disabled--BorderColor: transparent;\n\t--pf-c-form-control--readonly--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);\n\t--pf-c-form-control--readonly--hover--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);\n\t--pf-c-form-control--readonly--focus--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-global--BorderWidth--sm, 1px));\n\t--pf-c-form-control--readonly--focus--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-form-control--readonly--focus--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);\n\t--pf-c-form-control--readonly--m-plain--BackgroundColor: transparent;\n\t--pf-c-form-control--readonly--m-plain--inset--base: 0;\n\t--pf-c-form-control--success--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-form-control--success--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--success--BorderBottomWidth));\n\t--pf-c-form-control--success--BorderBottomColor: var(--pf-global--success-color--100, #3e8635);\n\t--pf-c-form-control--success--PaddingRight: var(--pf-global--spacer--xl, 2rem);\n\t--pf-c-form-control--success--BackgroundPositionX: calc(100% - var(--pf-c-form-control--PaddingLeft));\n\t--pf-c-form-control--success--BackgroundPositionY: center;\n\t--pf-c-form-control--success--BackgroundPosition: var(--pf-c-form-control--success--BackgroundPositionX) var(--pf-c-form-control--success--BackgroundPositionY);\n\t--pf-c-form-control--success--BackgroundSizeX: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--success--BackgroundSizeY: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--success--BackgroundSize: var(--pf-c-form-control--success--BackgroundSizeX) var(--pf-c-form-control--success--BackgroundSizeY);\n\t--pf-c-form-control--success--BackgroundUrl: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%235ba352" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/%3E%3C/svg%3E');\n\t--pf-c-form-control--m-warning--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-form-control--m-warning--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--m-warning--BorderBottomWidth));\n\t--pf-c-form-control--m-warning--BorderBottomColor: var(--pf-global--warning-color--100, #f0ab00);\n\t--pf-c-form-control--m-warning--PaddingRight: var(--pf-global--spacer--xl, 2rem);\n\t--pf-c-form-control--m-warning--BackgroundPositionX: calc(100% - calc(var(--pf-c-form-control--PaddingLeft) - 0.0625rem));\n\t--pf-c-form-control--m-warning--BackgroundPositionY: center;\n\t--pf-c-form-control--m-warning--BackgroundPosition: var(--pf-c-form-control--m-warning--BackgroundPositionX) var(--pf-c-form-control--m-warning--BackgroundPositionY);\n\t--pf-c-form-control--m-warning--BackgroundSizeX: 1.25rem;\n\t--pf-c-form-control--m-warning--BackgroundSizeY: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--m-warning--BackgroundSize: var(--pf-c-form-control--m-warning--BackgroundSizeX) var(--pf-c-form-control--m-warning--BackgroundSizeY);\n\t--pf-c-form-control--m-warning--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23f0ab00' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E");\n\t--pf-c-form-control--invalid--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);\n\t--pf-c-form-control--invalid--PaddingBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) - var(--pf-c-form-control--invalid--BorderBottomWidth));\n\t--pf-c-form-control--invalid--BorderBottomColor: var(--pf-global--danger-color--100, #c9190b);\n\t--pf-c-form-control--invalid--PaddingRight: var(--pf-global--spacer--xl, 2rem);\n\t--pf-c-form-control--invalid--BackgroundPositionX: calc(100% - var(--pf-c-form-control--PaddingLeft));\n\t--pf-c-form-control--invalid--BackgroundPositionY: center;\n\t--pf-c-form-control--invalid--BackgroundPosition: var(--pf-c-form-control--invalid--BackgroundPositionX) var(--pf-c-form-control--invalid--BackgroundPositionY);\n\t--pf-c-form-control--invalid--BackgroundSizeX: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--invalid--BackgroundSizeY: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--invalid--BackgroundSize: var(--pf-c-form-control--invalid--BackgroundSizeX) var(--pf-c-form-control--invalid--BackgroundSizeY);\n\t--pf-c-form-control--invalid--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fe5142' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E");\n\t--pf-c-form-control--invalid--exclamation--Background: var(--pf-c-form-control--invalid--BackgroundUrl) var(--pf-c-form-control--invalid--BackgroundPosition) / var(--pf-c-form-control--invalid--BackgroundSize) no-repeat;\n\t--pf-c-form-control--invalid--Background: var(--pf-c-form-control--BackgroundColor) var(--pf-c-form-control--invalid--exclamation--Background);\n\t--pf-c-form-control--m-search--PaddingLeft: var(--pf-global--spacer--xl, 2rem);\n\t--pf-c-form-control--m-search--BackgroundPosition: var(--pf-c-form-control--PaddingRight);\n\t--pf-c-form-control--m-search--BackgroundSize: var(--pf-c-form-control--FontSize) var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--m-search--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E");\n\t--pf-c-form-control--m-icon--PaddingRight: calc(var(--pf-c-form-control--inset--base) + var(--pf-c-form-control--m-icon--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer));\n\t--pf-c-form-control--m-icon--BackgroundUrl: none;\n\t--pf-c-form-control--m-icon--BackgroundPositionX: calc(100% - var(--pf-c-form-control--inset--base));\n\t--pf-c-form-control--m-icon--BackgroundPositionY: center;\n\t--pf-c-form-control--m-icon--BackgroundSizeX: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--m-icon--BackgroundSizeY: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--m-icon--icon--spacer: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-form-control--m-icon--icon--PaddingRight: calc(var(--pf-c-form-control--inset--base) + var(--pf-c-form-control--invalid--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer) + var(--pf-c-form-control--m-icon--BackgroundSizeX) + var(--pf-c-form-control--m-icon--icon--spacer));\n\t--pf-c-form-control--m-icon--icon--BackgroundPositionX: calc(var(--pf-c-form-control--m-icon--BackgroundPositionX) - var(--pf-c-form-control--m-icon--icon--spacer) - var(--pf-c-form-control--invalid--BackgroundSizeX));\n\t--pf-c-form-control--m-icon--invalid--BackgroundUrl: var(--pf-c-form-control--invalid--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);\n\t--pf-c-form-control--m-icon--invalid--BackgroundPosition: var(--pf-c-form-control--invalid--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);\n\t--pf-c-form-control--m-icon--invalid--BackgroundSize: var(--pf-c-form-control--invalid--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);\n\t--pf-c-form-control--m-icon--success--BackgroundUrl: var(--pf-c-form-control--success--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);\n\t--pf-c-form-control--m-icon--success--BackgroundPosition: var(--pf-c-form-control--success--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);\n\t--pf-c-form-control--m-icon--success--BackgroundSize: var(--pf-c-form-control--success--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);\n\t--pf-c-form-control--m-icon--m-warning--BackgroundUrl: var(--pf-c-form-control--m-warning--BackgroundUrl), var(--pf-c-form-control--m-icon--BackgroundUrl);\n\t--pf-c-form-control--m-icon--m-warning--BackgroundPosition: var(--pf-c-form-control--m-warning--BackgroundPosition), var(--pf-c-form-control--m-icon--icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);\n\t--pf-c-form-control--m-icon--m-warning--BackgroundSize: var(--pf-c-form-control--m-warning--BackgroundSize), var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);\n\t--pf-c-form-control--m-calendar--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");\n\t--pf-c-form-control--m-clock--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23aaabac' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'/%3E%3C/svg%3E");\n\t--pf-c-form-control__select--PaddingRight: calc(var(--pf-global--spacer--lg, 1.5rem) + var(--pf-c-form-control--BorderWidth) + var(--pf-c-form-control--BorderWidth));\n\t--pf-c-form-control__select--PaddingLeft: calc(var(--pf-global--spacer--sm, 0.5rem) - var(--pf-c-form-control--BorderWidth));\n\t--pf-c-form-control__select--BackgroundUrl: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");\n\t--pf-c-form-control__select--BackgroundSize: .625em;\n\t--pf-c-form-control__select--BackgroundPositionX: calc(100% - var(--pf-global--spacer--md, 1rem) + 1px);\n\t--pf-c-form-control__select--BackgroundPositionY: center;\n\t--pf-c-form-control__select--BackgroundPosition: var(--pf-c-form-control__select--BackgroundPositionX) var(--pf-c-form-control__select--BackgroundPositionY);\n\t--pf-c-form-control__select--success--PaddingRight: var(--pf-global--spacer--3xl, 4rem);\n\t--pf-c-form-control__select--success--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-form-control__select--m-warning--PaddingRight: var(--pf-global--spacer--3xl, 4rem);\n\t--pf-c-form-control__select--m-warning--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem) + 0.0625rem);\n\t--pf-c-form-control__select--invalid--PaddingRight: var(--pf-global--spacer--3xl, 4rem);\n\t--pf-c-form-control__select--invalid--BackgroundPosition: calc(var(--pf-c-form-control__select--BackgroundPositionX) - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-form-control--textarea--Width: var(--pf-c-form-control--Width);\n\t--pf-c-form-control--textarea--Height: auto;\n\t--pf-c-form-control--textarea--success--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);\n\t--pf-c-form-control--textarea--m-warning--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);\n\t--pf-c-form-control--textarea--invalid--BackgroundPositionY: var(--pf-c-form-control--PaddingLeft);\n\t--pf-c-form-control--m-icon-sprite--success--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#success);\n\t--pf-c-form-control--m-icon-sprite--m-warning--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#warning);\n\t--pf-c-form-control--m-icon-sprite--invalid--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#invalid);\n\t--pf-c-form-control--m-icon-sprite__select--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#select);\n\t--pf-c-form-control--m-icon-sprite--m-search--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#search);\n\t--pf-c-form-control--m-icon-sprite--m-calendar--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#calendar);\n\t--pf-c-form-control--m-icon-sprite--m-clock--BackgroundUrl: url(/v4/images/status-icon-sprite.4fee9fefc3971799d2dd4de0a15617f0.svg#clock);\n\t--pf-c-form-control--m-icon-sprite__select--BackgroundSize: var(--pf-c-form-control--FontSize);\n\t--pf-c-form-control--m-icon-sprite__select--BackgroundPositionX: calc(100% - var(--pf-global--spacer--md, 1rem) + 7px);\n\t--pf-c-form-control--m-icon-sprite__select--success--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) + 1px - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-form-control--m-icon-sprite__select--m-warning--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) - var(--pf-global--spacer--lg, 1.5rem) + 0.0625rem);\n\t--pf-c-form-control--m-icon-sprite__select--invalid--BackgroundPosition: calc(100% - var(--pf-global--spacer--md, 1rem) - var(--pf-global--spacer--lg, 1.5rem));\n  /* NB: this var doesn't exist in pf react */\n  --pf-c-form-control__error-text--m-status--Color: var(--pf-global--danger-color--100, #c9190b);\n\n  display: inline-block;\n  /* adjust the host to fit the input */\n  max-width: calc(100% - var(--pf-c-form-control--PaddingRight) - var(--pf-c-form-control--PaddingLeft));\n}\n\ninput {\n\tcolor: var(--pf-c-form-control--Color);\n\twidth: var(--pf-c-form-control--Width);\n\tpadding: var(--pf-c-form-control--PaddingTop) var(--pf-c-form-control--PaddingRight) var(--pf-c-form-control--PaddingBottom) var(--pf-c-form-control--PaddingLeft);\n\tfont-size: var(--pf-c-form-control--FontSize);\n\tline-height: var(--pf-c-form-control--LineHeight);\n\tbackground-color: var(--pf-c-form-control--BackgroundColor);\n\tbackground-repeat: no-repeat;\n\tborder: var(--pf-c-form-control--BorderWidth) solid;\n\tborder-color: var(--pf-c-form-control--BorderTopColor) var(--pf-c-form-control--BorderRightColor) var(--pf-c-form-control--BorderBottomColor) var(--pf-c-form-control--BorderLeftColor);\n\tborder-radius: var(--pf-c-form-control--BorderRadius);\n  height: var(--pf-c-form-control--Height);\n  text-overflow: ellipsis;\n  appearance: none;\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n}\n\ninput:disabled {\n  --pf-c-form-control--BackgroundColor: var(--pf-c-form-control--disabled--BackgroundColor);\n  color: var(--pf-c-form-control--disabled--Color);\n  cursor: not-allowed;\n  border-color: var(--pf-c-form-control--disabled--BorderColor);\n}\n\ninput:hover {\n  --pf-c-form-control--BorderBottomColor: var(--pf-c-form-control--hover--BorderBottomColor);\n}\n\ninput::placeholder {\n  color: var(--pf-c-form-control--placeholder--Color);\n}\n\n#error-text {\n  color: var(--pf-c-form-control__error-text--m-status--Color);\n}\n\n:host([left-truncated]) {\n  position: relative;\n}\n\n:host([left-truncated]) input:not(:focus) {\n  direction: rtl;\n  text-overflow: ellipsis;\n}\n\n:host([readonly]) input {\n\tbackground-color: var(--pf-c-form-control--readonly--BackgroundColor);\n}\n\n:host([readonly][plain]) {\n\t--pf-c-form-control--readonly--BackgroundColor: var(--pf-c-form-control--readonly--m-plain--BackgroundColor);\n\t--pf-c-form-control--inset--base: var(--pf-c-form-control--readonly--m-plain--inset--base);\n}\n\n:host([readonly][plain]) input {\n\tborder-color: transparent;\n}\n\n:host(:invalid) {\n  --pf-c-form-control--PaddingRight: var(--pf-c-form-control--invalid--PaddingRight);\n  --pf-c-form-control--BorderBottomColor: var(--pf-c-form-control--invalid--BorderBottomColor);\n}\n\n:host(:invalid) input {\n  padding-bottom: var(--pf-c-form-control--invalid--PaddingBottom);\n  background-image: var(--pf-c-form-control--invalid--BackgroundUrl);\n  background-position: var(--pf-c-form-control--invalid--BackgroundPosition);\n  background-size: var(--pf-c-form-control--invalid--BackgroundSize);\n  border-bottom-width: var(--pf-c-form-control--invalid--BorderBottomWidth);\n}\n\n:host([icon]),\n:host([custom-icon-url]) {\n\t--pf-c-form-control--PaddingRight: var(--pf-c-form-control--m-icon--PaddingRight);\n}\n:host([icon]) input,\n:host([custom-icon-url]) input {\n\tbackground-image: var(--pf-c-form-control--m-icon--BackgroundUrl);\n\tbackground-position: var(--pf-c-form-control--m-icon--BackgroundPositionX) var(--pf-c-form-control--m-icon--BackgroundPositionY);\n\tbackground-size: var(--pf-c-form-control--m-icon--BackgroundSizeX) var(--pf-c-form-control--m-icon--BackgroundSizeY);\n}\n\n:host([icon="calendar"]) {\n  --pf-c-form-control--m-icon--BackgroundUrl: var(--pf-c-form-control--m-calendar--BackgroundUrl);\n}\n\n:host([icon="clock"]) {\n  --pf-c-form-control--m-icon--BackgroundUrl: var(--pf-c-form-control--m-clock--BackgroundUrl);\n}\n\n:host([validated="success"]) {\n\t--pf-c-form-control--PaddingRight: var(--pf-c-form-control--success--PaddingRight);\n\t--pf-c-form-control--BorderBottomColor: var(--pf-c-form-control--success--BorderBottomColor);\n}\n\n:host([validated="success"]) input {\n\tpadding-bottom: var(--pf-c-form-control--success--PaddingBottom);\n\tbackground-image: var(--pf-c-form-control--success--BackgroundUrl);\n\tbackground-position: var(--pf-c-form-control--success--BackgroundPosition);\n\tbackground-size: var(--pf-c-form-control--success--BackgroundSize);\n\tborder-bottom-width: var(--pf-c-form-control--success--BorderBottomWidth);\n}\n\n:host([validated="warning"]) {\n\t--pf-c-form-control--PaddingRight: var(--pf-c-form-control--m-warning--PaddingRight);\n\t--pf-c-form-control--BorderBottomColor: var(--pf-c-form-control--m-warning--BorderBottomColor);\n}\n\n:host([validated="warning"]) input {\n\tpadding-bottom: var(--pf-c-form-control--m-warning--PaddingBottom);\n\tbackground-image: var(--pf-c-form-control--m-warning--BackgroundUrl);\n\tbackground-position: var(--pf-c-form-control--m-warning--BackgroundPosition);\n\tbackground-size: var(--pf-c-form-control--m-warning--BackgroundSize);\n\tborder-bottom-width: var(--pf-c-form-control--m-warning--BorderBottomWidth);\n}\n\n/* TBD if we'll implement this\n:host([icon-sprite]) {\n\t--pf-c-form-control--success--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--success--BackgroundUrl);\n\t--pf-c-form-control--m-warning--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--m-warning--BackgroundUrl);\n\t--pf-c-form-control--invalid--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--invalid--BackgroundUrl);\n\t--pf-c-form-control__select--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite__select--BackgroundUrl);\n\t--pf-c-form-control--m-search--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--m-search--BackgroundUrl);\n\t--pf-c-form-control--m-calendar--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--m-calendar--BackgroundUrl);\n\t--pf-c-form-control--m-clock--BackgroundUrl: var(--pf-c-form-control--m-icon-sprite--m-clock--BackgroundUrl);\n\t--pf-c-form-control__select--BackgroundSize: var(--pf-c-form-control--m-icon-sprite__select--BackgroundSize);\n\t--pf-c-form-control__select--BackgroundPositionX: var(--pf-c-form-control--m-icon-sprite__select--BackgroundPositionX);\n\t--pf-c-form-control__select--success--BackgroundPosition: var(--pf-c-form-control--m-icon-sprite__select--success--BackgroundPosition);\n\t--pf-c-form-control__select--m-warning--BackgroundPosition: var(--pf-c-form-control--m-icon-sprite__select--m-warning--BackgroundPosition);\n\t--pf-c-form-control__select--invalid--BackgroundPosition: var(--pf-c-form-control--m-icon-sprite__select--invalid--BackgroundPosition);\n}\n*/\n`;
let PfTextInput = class PfTextInput extends LitElement {
    constructor() {
        super(...arguments);
        _PfTextInput_instances.add(this);
        /** Trim text on left */
        this.leftTruncated = false;
        this.plain = false;
        /** Flag to show if the input is disabled. */
        this.disabled = false;
        /** Flag to show if the input is required. */
        this.required = false;
        /** Flag to show if the input is read only. */
        this.readonly = false;
        /** Value of the input. */
        this.value = '';
        _PfTextInput_internals.set(this, InternalsController.of(this));
        _PfTextInput_derivedLabel.set(this, '');
        _PfTextInput_touched.set(this, false);
    }
    willUpdate() {
        __classPrivateFieldSet(this, _PfTextInput_derivedLabel, this.accessibleLabel || __classPrivateFieldGet(this, _PfTextInput_internals, "f").computedLabelText, "f");
    }
    render() {
        const { valid } = __classPrivateFieldGet(this, _PfTextInput_internals, "f").validity;
        return html `
      <input id="input"
             .placeholder="${this.placeholder ?? ''}"
             .value="${this.value}"
             pattern="${ifDefined(this.pattern)}"
             @input="${__classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_onInput)}"
             @keydown="${__classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_onKeydown)}"
             @blur="${__classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_onBlur)}"
             ?disabled="${__classPrivateFieldGet(this, _PfTextInput_instances, "a", _PfTextInput_disabled_get)}"
             ?readonly="${this.readonly}"
             ?required="${this.required}"
             aria-label="${__classPrivateFieldGet(this, _PfTextInput_derivedLabel, "f")}"
             type="${ifDefined(this.type)}"
             style="${ifDefined(this.customIconUrl && styleMap({
            backgroundImage: `url('${this.customIconUrl}')`,
            backgroundSize: this.customIconDimensions,
        }))}">
        <span id="helper-text" ?hidden="${!this.helperText || valid}">${this.helperText}</span>
        <span id="error-text" ?hidden="${valid}">${__classPrivateFieldGet(this, _PfTextInput_internals, "f").validationMessage}</span>
    `;
    }
    async formStateRestoreCallback(state, mode) {
        if (mode === 'restore') {
            const [controlMode, value] = state.split('/');
            this.value = value ?? controlMode;
            this.requestUpdate();
            await this.updateComplete;
            __classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_setValidityFromInput).call(this);
        }
    }
    async formDisabledCallback() {
        await this.updateComplete;
        this.requestUpdate();
    }
    setCustomValidity(message) {
        __classPrivateFieldGet(this, _PfTextInput_internals, "f").setValidity({}, message);
        this.requestUpdate();
    }
    checkValidity() {
        __classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_setValidityFromInput).call(this);
        const validity = __classPrivateFieldGet(this, _PfTextInput_internals, "f").checkValidity();
        this.requestUpdate();
        return validity;
    }
    reportValidity() {
        __classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_setValidityFromInput).call(this);
        return __classPrivateFieldGet(this, _PfTextInput_internals, "f").reportValidity();
    }
};
_PfTextInput_internals = new WeakMap();
_PfTextInput_derivedLabel = new WeakMap();
_PfTextInput_touched = new WeakMap();
_PfTextInput_instances = new WeakSet();
_PfTextInput_disabled_get = function _PfTextInput_disabled_get() {
    return (!isServer && this.matches(':disabled')) || this.disabled;
};
_PfTextInput_input_get = function _PfTextInput_input_get() {
    return this.shadowRoot?.getElementById('input') ?? null;
};
_PfTextInput_onInput = function _PfTextInput_onInput(event) {
    const { value } = event.target;
    this.value = value;
    __classPrivateFieldGet(this, _PfTextInput_internals, "f").setFormValue(value);
    if (__classPrivateFieldGet(this, _PfTextInput_touched, "f") && !__classPrivateFieldGet(this, _PfTextInput_internals, "f").validity.valid) {
        __classPrivateFieldGet(this, _PfTextInput_instances, "m", _PfTextInput_onBlur).call(this);
    }
    __classPrivateFieldSet(this, _PfTextInput_touched, true, "f");
};
_PfTextInput_onKeydown = function _PfTextInput_onKeydown(event) {
    switch (event.key) {
        case 'Enter':
            if (this.reportValidity()) {
                __classPrivateFieldGet(this, _PfTextInput_internals, "f").form?.requestSubmit(null);
            }
    }
};
_PfTextInput_onBlur = function _PfTextInput_onBlur() {
    if (this.validateOn === 'blur') {
        this.checkValidity();
    }
};
_PfTextInput_setValidityFromInput = function _PfTextInput_setValidityFromInput() {
    __classPrivateFieldGet(this, _PfTextInput_internals, "f").setValidity(__classPrivateFieldGet(this, _PfTextInput_instances, "a", _PfTextInput_input_get)?.validity, this.errorText ?? __classPrivateFieldGet(this, _PfTextInput_instances, "a", _PfTextInput_input_get).validationMessage);
    this.requestUpdate();
};
PfTextInput.styles = [styles];
PfTextInput.formAssociated = true;
PfTextInput.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfTextInput.version = "4.1.0";
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'left-truncated' })
], PfTextInput.prototype, "leftTruncated", void 0);
__decorate([
    property({ reflect: true })
], PfTextInput.prototype, "validated", void 0);
__decorate([
    property({ reflect: true })
], PfTextInput.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, attribute: 'accessible-label' })
], PfTextInput.prototype, "accessibleLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'custom-icon-url' })
], PfTextInput.prototype, "customIconUrl", void 0);
__decorate([
    property({ reflect: true, attribute: 'custom-icon-dimensions' })
], PfTextInput.prototype, "customIconDimensions", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTextInput.prototype, "plain", void 0);
__decorate([
    property({ reflect: true })
], PfTextInput.prototype, "type", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTextInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTextInput.prototype, "required", void 0);
__decorate([
    property()
], PfTextInput.prototype, "pattern", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfTextInput.prototype, "readonly", void 0);
__decorate([
    property({ attribute: 'helper-text' })
], PfTextInput.prototype, "helperText", void 0);
__decorate([
    property({ attribute: 'validate-on' })
], PfTextInput.prototype, "validateOn", void 0);
__decorate([
    property({ attribute: 'error-text' })
], PfTextInput.prototype, "errorText", void 0);
__decorate([
    property()
], PfTextInput.prototype, "placeholder", void 0);
__decorate([
    property()
], PfTextInput.prototype, "value", void 0);
PfTextInput = __decorate([
    customElement('pf-text-input')
], PfTextInput);
export { PfTextInput };
//# sourceMappingURL=pf-text-input.js.map