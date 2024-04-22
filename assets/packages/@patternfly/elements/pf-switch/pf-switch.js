import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { BaseSwitch } from './BaseSwitch.js';
import { css } from "lit";
const styles = css `:host([checked]) #container {\n  color: var(--pf-c-switch__input--checked__label--Color,\n    var(--pf-global--Color--dark-100, #151515));\n  background-color: var(--pf-c-switch__input--checked__toggle--BackgroundColor,\n    var(--pf-global--primary-color--100, #06c));\n}\n\n:host([checked]) #container::before {\n  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,\n    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n}\n\n:host(:disabled) #container {\n  color: var(--pf-c-switch__input--disabled__label--Color,\n    var(--pf-global--disabled-color--100, #6a6e73));\n  background-color: var(--pf-c-switch__input--disabled__toggle--BackgroundColor,\n    var(--pf-global--disabled-color--200, #d2d2d2));\n}\n\n:host(:disabled) #container::before {\n  background-color: var(--pf-c-switch__input--disabled__toggle--before--BackgroundColor,\n    var(--pf-global--palette--black-150, #f5f5f5));\n}\n\n:host([checked]:disabled) #container::before {\n  translate: var(--pf-c-switch__input--checked__toggle--before--TranslateX,\n    calc(100% + var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n}\n\n#container {\n  width: var(--pf-c-switch__toggle--Width,\n    calc(var(--pf-c-switch__toggle--Height,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n          var(--pf-global--LineHeight--md, 1.5)))) + var(--pf-c-switch__toggle-icon--Offset, 0.125rem) + var(--pf-c-switch__toggle--before--Width,\n            calc(var(--pf-c-switch--FontSize,\n              var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)))));\n  height: var(--pf-c-switch__toggle--Height,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n        var(--pf-global--LineHeight--md, 1.5))));\n  background-color: var(--pf-c-switch__toggle--BackgroundColor,\n    var(--pf-global--palette--black-500, #8a8d90));\n  border-radius: var(--pf-c-switch__toggle--BorderRadius,\n    var(--pf-c-switch__toggle--Height, calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n        var(--pf-global--LineHeight--md, 1.5)))));\n}\n\n#container::before {\n  top: var(--pf-c-switch__toggle--before--Top,\n    calc((var(--pf-c-switch__toggle--Height,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n          var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,\n            var(--pf-c-switch__toggle--before--Width,\n              calc(var(--pf-c-switch--FontSize,\n                var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2));\n  left: var(--pf-c-switch__toggle--before--Left,\n    var(--pf-c-switch__toggle--before--Top,\n      calc((var(--pf-c-switch__toggle--Height,\n        calc(var(--pf-c-switch--FontSize,\n          var(--pf-global--FontSize--md, 1rem)) * var(--pf-c-switch--LineHeight,\n            var(--pf-global--LineHeight--md, 1.5)))) - var(--pf-c-switch__toggle--before--Height,\n              var(--pf-c-switch__toggle--before--Width,\n                calc(var(--pf-c-switch--FontSize,\n                  var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))))) / 2)));\n  width: var(--pf-c-switch__toggle--before--Width,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem)));\n  height: var(--pf-c-switch__toggle--before--Height,\n    var(--pf-c-switch__toggle--before--Width,\n      calc(var(--pf-c-switch--FontSize,\n        var(--pf-global--FontSize--md, 1rem)) - var(--pf-c-switch__toggle-icon--Offset, 0.125rem))));\n  background-color: var(--pf-c-switch__toggle--before--backgroundcolor,\n    var(--pf-global--backgroundcolor--100, #fff));\n  border-radius: var(--pf-c-switch__toggle--before--BorderRadius,\n    var(--pf-global--BorderRadius--lg, 30em));\n  box-shadow: var(--pf-c-switch__toggle--before--BoxShadow,\n    var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)));\n  transition: var(--pf-c-switch__toggle--before--Transition,\n    var(--pf-c-switch__toggle--before--Transition, translate .25s ease 0s)); ;\n}\n\n:host {\n  outline: none;\n}\n\n:host(:is(:focus,:focus-within)) #container {\n  outline: var(--pf-c-switch__input--focus__toggle--OutlineWidth,\n    var(--pf-global--BorderWidth--md, 2px)) solid var(--pf-c-switch__input--focus__toggle--OutlineColor,\n      var(--pf-global--primary-color--100, #06c));\n  outline-offset: var(--pf-c-switch__input--focus__toggle--OutlineOffset,\n    var(--pf-global--spacer--sm, 0.5rem));\n}\n\nsvg {\n  margin-inline: var(--pf-c-switch__toggle-icon--Left,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * .4));\n  font-size: var(--pf-c-switch__toggle-icon--FontSize,\n    calc(var(--pf-c-switch--FontSize,\n      var(--pf-global--FontSize--md, 1rem)) * .625));\n  color: var(--pf-c-switch__toggle-icon--Color,\n    var(--pf-global--Color--light-100, #fff));\n}\n`;
/**
 * A **switch** toggles the state of a setting (between on and off). Switches and
 * checkboxes can often be used interchangeably, but the switch provides a more
 * explicit, visible representation on a setting.
 *
 * @fires {Event} change - Fires when the switch selection changes.
 *
 * @cssprop --pf-c-switch--FontSize {@default `1rem`}
 * @cssprop {<length>} --pf-c-switch--ColumnGap {@default `1rem`}
 * @cssprop --pf-c-switch__toggle-icon--FontSize {@default `calc(1rem * .625)`}
 * @cssprop {<color>} --pf-c-switch__toggle-icon--Color {@default `#fff`}
 * @cssprop {<length>} --pf-c-switch__toggle-icon--Left {@default `1rem`}
 * @cssprop {<length>} --pf-c-switch__toggle-icon--Offset {@default `0.125rem`}
 * @cssprop {<number>} --pf-c-switch--LineHeight {@default `1.5`}
 * @cssprop {<length>} --pf-c-switch--Height {@default `auto`}
 * @cssprop {<color>} --pf-c-switch__input--checked__toggle--BackgroundColor {@default `#06c`}
 * @cssprop {<length>} --pf-c-switch__input--checked__toggle--before--TranslateX {@default `calc(100% + 0.125rem)`}
 * @cssprop {<color>} --pf-c-switch__input--checked__label--Color {@default `#151515`}
 * @cssprop {<color>} --pf-c-switch__input--not-checked__label--Color {@default `#6a6e73`}
 * @cssprop {<color>} --pf-c-switch__input--disabled__label--Color {@default `#6a6e73`}
 * @cssprop {<color>} --pf-c-switch__input--disabled__toggle--BackgroundColor {@default `#d2d2d2`}
 * @cssprop {<color>} --pf-c-switch__input--disabled__toggle--before--BackgroundColor {@default `#f5f5f5`}
 * @cssprop {<length>} --pf-c-switch__input--focus__toggle--OutlineWidth {@default `2px`}
 * @cssprop {<length>} --pf-c-switch__input--focus__toggle--OutlineOffset {@default `0.5rem`}
 * @cssprop {<color>} --pf-c-switch__input--focus__toggle--OutlineColor {@default `#06c`}
 * @cssprop {<length>} --pf-c-switch__toggle--Height {@default `calc(1rem * 1.5)`}
 * @cssprop {<color>} --pf-c-switch__toggle--BackgroundColor {@default `#8a8d90`}
 * @cssprop {<length>} --pf-c-switch__toggle--BorderRadius {@default `calc(1rem * 1.5)`}
 * @cssprop {<length>} --pf-c-switch__toggle--before--Width {@default `calc(1rem - 0.125rem)`}
 * @cssprop {<length>} --pf-c-switch__toggle--before--Height {@default `calc(1rem - 0.125rem)`}
 * @cssprop {<length>} --pf-c-switch__toggle--before--Top {@default calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)`}
 * @cssprop {<length>} --pf-c-switch__toggle--before--Left {@default `calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)`}
 * @cssprop {<color>} --pf-c-switch__toggle--before--BackgroundColor {@default `#fff`}
 * @cssprop {<length>} --pf-c-switch__toggle--before--BorderRadius {@default `30em`}
 * @cssprop --pf-c-switch__toggle--before--BoxShadow {@default `0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)`}
 * @cssprop --pf-c-switch__toggle--before--Transition {@default `transform .25s ease 0s`}
 * @cssprop {<length>} --pf-c-switch__toggle--Width {@default `calc(calc(1rem * 1.5) + 0.125rem + calc(1rem - 0.125rem))`}
 */
let PfSwitch = class PfSwitch extends BaseSwitch {
};
PfSwitch.styles = [...BaseSwitch.styles, styles];
PfSwitch = __decorate([
    customElement('pf-switch')
], PfSwitch);
export { PfSwitch };
//# sourceMappingURL=pf-switch.js.map