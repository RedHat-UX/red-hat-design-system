import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseTile } from './BaseTile.js';
import { css } from "lit";
const styles = css `:host {\n  position: relative;\n  display: inline-grid;\n  padding: var(--pf-c-tile--PaddingTop, var(--pf-global--spacer--lg, 1.5rem))\n          var(--pf-c-tile--PaddingRight, var(--pf-global--spacer--lg, 1.5rem))\n          var(--pf-c-tile--PaddingBottom, var(--pf-global--spacer--lg, 1.5rem))\n          var(--pf-c-tile--PaddingLeft, var(--pf-global--spacer--lg, 1.5rem));\n  text-align: center;\n  cursor: pointer;\n  background-color: var(--pf-c-tile--BackgroundColor,\n                    var(--pf-global--BackgroundColor--100,\n                    var(--pf-global--BackgroundColor--light-100), #ffffff));\n  grid-template-rows: -webkit-min-content;\n  grid-template-rows: min-content;\n  transition: var(--pf-c-tile--Transition, none);\n  transform: translateY(var(--pf-c-tile--TranslateY, 0));\n}\n\n:host::before,\n:host::after {\n  position: absolute;\n  pointer-events: none;\n  content: "";\n}\n\n:host::before {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border: var(--pf-c-tile--before--BorderWidth, var(--pf-global--BorderWidth--sm, 1px))\n          solid\n          var(--pf-c-tile--before--BorderColor, var(--pf-global--BorderColor--100, #d2d2d2));\n}\n\n:host::after {\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: var(--pf-c-tile--after--Height, var(--pf-global--BorderWidth--lg, 3px));\n  background-color: var(--pf-c-tile--after--BackgroundColor, transparent);\n  transition: var(--pf-c-tile--after--Transition, none);\n  transform: scaleY(var(--pf-c-tile--after--ScaleY, 1)) translateY(var(--pf-c-tile--after--TranslateY, 0));\n}\n\n:host(:hover) {\n  --pf-c-tile__title--Color: var(--pf-c-tile--hover__title--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile__icon--Color: var(--pf-c-tile--hover__icon--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile--after--BackgroundColor: var(--pf-c-tile--hover--after--BackgroundColor, var(--pf-global--active-color--400, #73bcf7));\n}\n\n:host(:focus) {\n  --pf-c-tile__title--Color: var(--pf-c-tile--focus__title--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile__icon--Color: var(--pf-c-tile--focus__icon--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile--after--BackgroundColor: var(--pf-c-tile--focus--after--BackgroundColor, var(--pf-global--active-color--400, #73bcf7));\n}\n\n:host(:active),\n:host([selected]) {\n  --pf-c-tile__title--Color: var(--pf-c-tile--m-selected__title--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile__icon--Color: var(--pf-c-tile--m-selected__icon--Color, var(--pf-global--primary-color--100, #06c));\n  --pf-c-tile--TranslateY: var(--pf-c-tile--m-selected--TranslateY,\n                            calc(-1 * var(--pf-c-tile--m-selected--after--ScaleY, 2) * var(--pf-c-tile--m-selected--after--Height,\n                            var(--pf-global--BorderWidth--lg, 3px))));\n  --pf-c-tile--Transition: var(--pf-c-tile--m-selected--Transition,\n                          var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1)));\n  --pf-c-tile--after--Height: var(--pf-c-tile--m-selected--after--Height, var(--pf-global--BorderWidth--lg, 3px));\n  --pf-c-tile--after--BackgroundColor: var(--pf-c-tile--m-selected--after--BackgroundColor, var(--pf-global--active-color--100, #06c));\n  --pf-c-tile--after--Transition: var(--pf-c-tile--m-selected--after--Transition,\n                          var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1)));\n  --pf-c-tile--after--ScaleY: var(--pf-c-tile--m-selected--after--ScaleY, 2);\n}\n\n:host([disabled]) {\n  --pf-c-tile--BackgroundColor: var(--pf-c-tile--m-disabled--BackgroundColor, var( --pf-global--disabled-color--300, #f0f0f0));\n  --pf-c-tile__title--Color: var(--pf-c-tile--m-disabled__title--Color, var(--pf-global--disabled-color--100, #6a6e73));\n  --pf-c-tile__body--Color: var(--pf-c-tile--m-disabled__body--Color,  var(--pf-global--disabled-color--100, #6a6e73));\n  --pf-c-tile--before--BorderWidth: 0;\n  --pf-c-tile__icon--Color: var(--pf-c-tile--m-disabled__icon--Color, var(--pf-global--disabled-color--100, #6a6e73));\n  pointer-events: none;\n}\n\n[part="header"] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n[part="title"] {\n  color: var(--pf-c-tile__title--Color, var(--pf-global--Color--100, var(--pf-global--Color--dark-100, #151515)));\n}\n\n[part="body"] {\n  font-size: var(--pf-c-tile__body--FontSize, var(--pf-global--FontSize--xs, 0.75rem));\n  color: var(--pf-c-tile__body--Color, var(--pf-global--Color--100, #151515));\n}\n\n[part="icon"] {\n  --_icon-size: var(--pf-c-tile__icon--FontSize: var(--pf-global--icon--FontSize--md, 1.125rem));\n  --pf-icon--size: var(--_icon-size);\n  margin-right: var(--pf-c-tile__icon--MarginRight, var(--pf-global--spacer--sm, 0.5rem));\n  font-size: var(--_icon-size);\n  color: var(--pf-c-tile__icon--Color, var(--pf-global--Color--100, #151515));\n}\n\n:host([stacked]) [part="header"] {\n  --pf-c-tile__icon--MarginRight: 0;\n  --_icon-size: var(--pf-c-tile__icon--FontSize, var(--pf-c-tile__header--m-stacked__icon--FontSize, var(--pf-global--icon--FontSize--lg, 1.5rem)));\n  flex-direction: column;\n  justify-content: initial;\n}\n\n:host([stacked="lg"]) [part="icon"] {\n  --_icon-size: var(--pf-c-tile__icon--FontSize, var(--pf-c-tile--m-display-lg__header--m-stacked__icon--FontSize, var(--pf-global--icon--FontSize--xl, 3.375rem)));\n}\n\n:host([stacked]) [part="icon"] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: var(--pf-c-tile__header--m-stacked__icon--MarginBottom, var(--pf-global--spacer--xs, 0.25rem));\n}\n\n#body::slotted(:is(h1,h2,h3,h4,h5,h6,p)),\n#title::slotted(:is(h1,h2,h3,h4,h5,h6,p)) {\n  margin-block: 0;\n}\n\n`;
/**
 * A **tile** component is a form of selection that can be used in place of a
 * radio button and is commonly used in forms. A tile appears visually similar to a
 * [selectable card](../card/). However, tiles are used specifically when the user is selecting
 * a static option, whereas a selectable card triggers an action or opens a quickstart
 * or sidebar to provide additional information.
 * @slot icon           - Icon expects a `<pf-icon>` or `<svg>`
 * @slot title          - the title of the tile should be a heading
 * @slot                - The content should be a paragraph
 * @csspart icon        - container for the icon
 * @csspart title       - container for the title
 * @csspart body        - container for the body content
 * @attr {'boolean'} selected       - selected variant
 * @attr {'md'|'lg'|null} stacked   - stacked variant
 * @cssprop   {<length>} --pf-c-tile--PaddingTop      {@default `1.5rem`}
 * @cssprop   {<length>} --pf-c-tile--PaddingRight    {@default `1.5rem`}
 * @cssprop   {<length>} --pf-c-tile--PaddingBottom   {@default `1.5rem`}
 * @cssprop   {<length>} --pf-c-tile--PaddingLeft     {@default `1.5rem`}
 * @cssprop   {<color>} --pf-c-tile--BackgroundColor  {@default `#FFFFFF`}
 * @cssprop   --pf-c-tile--Transition {@default `none`}
 * @cssprop   --pf-c-tile--TranslateY {@default `0`}
 * @cssprop   {<length>} --pf-c-tile--before--BorderWidth {@default `1px`}
 * @cssprop   {<color>} --pf-c-tile--before--BorderColor  {@default `#444548`}
 * @cssprop   {<length>} --pf-c-tile--after--Height {@default `3px`}
 * @cssprop   {<color>} --pf-c-tile--after--BackgroundColor {@default `transparent`}
 * @cssprop   --pf-c-tile--after--Transition {@default `none`}
 * @cssprop   --pf-c-tile--after--ScaleY {@default `1`}
 * @cssprop   {<color>} --pf-c-tile__title--Color {@default `#06c`}
 * @cssprop   {<color>} --pf-c-tile__icon--Color {@default `#06c`}
 * @cssprop   {<length>} --pf-c-tile__icon--MarginRight {@default `0`}
 * @cssprop   {<length>} --pf-c-tile__icon--FontSize {@default `1.5rem`}
 * @cssprop   {<lenght>} --pf-c-tile__header--m-stacked__icon--MarginBottom {@default `0.25rem`}
 */
let PfTile = class PfTile extends BaseTile {
    constructor() {
        super(...arguments);
        this.selected = false;
    }
};
PfTile.styles = [styles];
__decorate([
    property({ reflect: true, type: Boolean })
], PfTile.prototype, "selected", void 0);
__decorate([
    property({ reflect: true })
], PfTile.prototype, "stacked", void 0);
PfTile = __decorate([
    customElement('pf-tile')
], PfTile);
export { PfTile };
//# sourceMappingURL=pf-tile.js.map