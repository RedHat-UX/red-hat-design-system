var _PfSpinner_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n  width: min-content;\n  min-height: 0;\n  aspect-ratio: 1 / 1;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nsvg {\n  overflow: hidden;\n  width: var(--pf-c-spinner--Width,\n    var(--pf-c-spinner--diameter,\n      var(--pf-global--icon--FontSize--xl, 3.375rem)));\n  height: var(--pf-c-spinner--Height,\n    var(--pf-c-spinner--diameter,\n      var(--pf-global--icon--FontSize--xl, 3.375rem)));\n  animation:\n    pf-c-spinner-animation-rotate\n    calc(var(--pf-c-spinner--AnimationDuration, 1.4s) * 2)\n    var(--pf-c-spinner--AnimationTimingFunction, linear) infinite;\n}\n\ncircle {\n  width: 100%;\n  height: 100%;\n  transform-origin: 50% 50%;\n  stroke-linecap: round;\n  stroke-dasharray: 283;\n  stroke-dashoffset: 280;\n  stroke: var(--pf-c-spinner--Color, var(--pf-global--primary-color--100, #06c));\n  stroke-width: var(--pf-c-spinner--stroke-width, 10);\n  animation:\n    pf-c-spinner-animation-dash\n    var(--pf-c-spinner--AnimationDuration, 1.4s)\n    var(--pf-c-spinner__path--AnimationTimingFunction, ease-in-out) infinite;\n}\n\n:host([size="sm"]) svg {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-sm--diameter,\n    var(--pf-global--icon--FontSize--sm, 0.625rem));\n}\n\n:host([size="md"]) svg {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-md--diameter,\n    var(--pf-global--icon--FontSize--md, 1.125rem));\n}\n\n:host([size="lg"]) svg {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-lg--diameter,\n    var(--pf-global--icon--FontSize--lg, 1.5rem));\n}\n\n:host([size="xl"]) svg {\n  --pf-c-spinner--diameter: var(--pf-c-spinner--m-xl--diameter,\n    var(--pf-global--icon--FontSize--xl, 3.375rem));\n}\n\n@keyframes pf-c-spinner-animation-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pf-c-spinner-animation-dash {\n  0% {\n    stroke-dashoffset: 280;\n    transform: rotate(0);\n  }\n  15% {\n    stroke-width: calc(var(--pf-c-spinner__path--StrokeWidth, 10) - 4);\n  }\n  40% {\n    stroke-dashoffset: 150;\n    stroke-dasharray: 220;\n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(720deg);\n  }\n}\n`;
let PfSpinner = class PfSpinner extends LitElement {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line no-unused-private-class-members
        _PfSpinner_internals.set(this, InternalsController.of(this, { role: 'progressbar' }));
        /** Preset sizes for the spinner */
        this.size = 'xl';
    }
    render() {
        return html `
      <svg viewBox="0 0 100 100"
           style="${styleMap({ '--pf-c-spinner--diameter': this.diameter })}">
        <circle cx="50" cy="50" r="45" fill="none" />
      </svg>
    `;
    }
};
_PfSpinner_internals = new WeakMap();
PfSpinner.styles = [styles];
PfSpinner.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfSpinner.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], PfSpinner.prototype, "diameter", void 0);
PfSpinner = __decorate([
    customElement('pf-spinner')
], PfSpinner);
export { PfSpinner };
//# sourceMappingURL=pf-spinner.js.map