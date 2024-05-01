var _PfSpinner_internals;
import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { styleMap } from 'lit/directives/style-map.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { BaseSpinner } from './BaseSpinner.js';
import { css } from "lit";
const styles = css `[hidden] {\n  display: none !important;\n}\n\ndiv {\n  display: contents;\n}\n\nsvg {\n  width: var(--pf-c-spinner--Width,\n    var(--pf-c-spinner--diameter,\n      var(--pf-global--icon--FontSize--xl, 3.375rem)));\n  height: var(--pf-c-spinner--Height,\n    var(--pf-c-spinner--diameter,\n      var(--pf-global--icon--FontSize--xl, 3.375rem)));\n  animation:\n    pf-c-spinner-animation-rotate\n    calc(var(--pf-c-spinner--AnimationDuration, 1.4s) * 2)\n    var(--pf-c-spinner--AnimationTimingFunction, linear) infinite;\n}\n\n:host([size="sm"]) div {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-sm--diameter,\n    var(--pf-global--icon--FontSize--sm, 0.625rem));\n}\n\n:host([size="md"]) div {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-md--diameter,\n    var(--pf-global--icon--FontSize--md, 1.125rem));\n}\n\n:host([size="lg"]) div {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-lg--diameter,\n    var(--pf-global--icon--FontSize--lg, 1.5rem));\n}\n\n:host([size="xl"]) div {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-xl--diameter,\n    var(--pf-global--icon--FontSize--xl, 3.375rem));\n}\n\ncircle {\n  stroke: var(--pf-c-spinner--Color, var(--pf-global--primary-color--100, #06c));\n  stroke-width: var(--pf-c-spinner--stroke-width, 10);\n  animation:\n    pf-c-spinner-animation-dash\n    var(--pf-c-spinner--AnimationDuration, 1.4s)\n    var(--pf-c-spinner__path--AnimationTimingFunction, ease-in-out) infinite;\n}\n\n@keyframes pf-c-spinner-animation-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pf-c-spinner-animation-dash {\n  0% {\n    stroke-dashoffset: 280;\n    transform: rotate(0);\n  }\n  15% {\n    stroke-width: calc(var(--pf-c-spinner__path--StrokeWidth, 10) - 4);\n  }\n  40% {\n    stroke-dashoffset: 150;\n    stroke-dasharray: 220;\n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(720deg);\n  }\n}\n`;
/**
 * A **spinner** is used to indicate to users that an action is in progress. For actions
 * that may take a long time, use a progress bar instead.
 * @cssprop {<length>} --pf-c-spinner--diameter                      {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Width                         {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Height                        {@default `3.375rem`}
 * @cssprop {<color>}  --pf-c-spinner--Color                         {@default `#06c`}
 * @cssprop {<length>} --pf-c-spinner--m-sm--diameter                {@default `0.625rem`}
 * @cssprop {<length>} --pf-c-spinner--m-md--diameter                {@default `1.125rem`}
 * @cssprop {<length>} --pf-c-spinner--m-lg--diameter                {@default `1.5rem`}
 * @cssprop {<length>} --pf-c-spinner--m-xl--diameter                {@default `3.375rem`}
 * @cssprop {<time>}   --pf-c-spinner--AnimationDuration             {@default `1.4s`}
 * @cssprop {<string>} --pf-c-spinner--AnimationTimingFunction       {@default `linear`}
 * @cssprop {<number>} --pf-c-spinner--stroke-width                  {@default `10`}
 * @cssprop {<color>}  --pf-c-spinner__path--Stroke                  {@default `#06c`}
 * @cssprop {<number>} --pf-c-spinner__path--StrokeWidth             {@default `10`}
 * @cssprop {<string>} --pf-c-spinner__path--AnimationTimingFunction {@default `ease-in-out`}
 */
let PfSpinner = class PfSpinner extends BaseSpinner {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line no-unused-private-class-members
        _PfSpinner_internals.set(this, InternalsController.of(this, { role: 'progressbar' }));
    }
    render() {
        return html `<div style=${styleMap({ '--pf-c-spinner--diameter': this.diameter })}>${super.render()}</div>`;
    }
};
_PfSpinner_internals = new WeakMap();
PfSpinner.styles = [...BaseSpinner.styles, styles];
PfSpinner = __decorate([
    customElement('pf-spinner')
], PfSpinner);
export { PfSpinner };
//# sourceMappingURL=pf-spinner.js.map