var _PfSpinner_internals;
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { styleMap } from 'lit/directives/style-map.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const styles = css `:host {
  display: inline-block;
  width: min-content;
  min-height: 0;
  aspect-ratio: 1 / 1;
}

[hidden] {
  display: none !important;
}

svg {
  overflow: hidden;
  /** Width for spinner */
  width: var(--pf-c-spinner--Width,
    /** Diameter for spinner */
    var(--pf-c-spinner--diameter,
      var(--pf-global--icon--FontSize--xl, 3.375rem)));
  /** Height for spinner */
  height: var(--pf-c-spinner--Height,
    var(--pf-c-spinner--diameter,
      var(--pf-global--icon--FontSize--xl, 3.375rem)));
  animation:
    pf-c-spinner-animation-rotate
    /** Animation duration for spinner */
    calc(var(--pf-c-spinner--AnimationDuration, 1.4s) * 2)
    /** Animation timing function for spinner */
    var(--pf-c-spinner--AnimationTimingFunction, linear) infinite;
}

circle {
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  /** Color for spinner */
  stroke: var(--pf-c-spinner--Color, var(--pf-global--primary-color--100, #06c));
  /** Stroke width for spinner */
  stroke-width: var(--pf-c-spinner--stroke-width, 10);
  animation:
    pf-c-spinner-animation-dash
    var(--pf-c-spinner--AnimationDuration, 1.4s)
    /** Path animation timing function for spinner */
    var(--pf-c-spinner__path--AnimationTimingFunction, ease-in-out) infinite;
}

:host([size="sm"]) svg {
  /** Diameter for small spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-sm--diameter,
    var(--pf-global--icon--FontSize--sm, 0.625rem));
}

:host([size="md"]) svg {
  /** Diameter for medium spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-md--diameter,
    var(--pf-global--icon--FontSize--md, 1.125rem));
}

:host([size="lg"]) svg {
  /** Diameter for large spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-lg--diameter,
    var(--pf-global--icon--FontSize--lg, 1.5rem));
}

:host([size="xl"]) svg {
  /** Diameter for extra large spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-xl--diameter,
    var(--pf-global--icon--FontSize--xl, 3.375rem));
}

@keyframes pf-c-spinner-animation-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pf-c-spinner-animation-dash {
  0% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  15% {
    /** Path stroke width for spinner */
    stroke-width: calc(var(--pf-c-spinner__path--StrokeWidth, 10) - 4);
  }
  40% {
    stroke-dashoffset: 150;
    stroke-dasharray: 220;
  }
  100% {
    stroke-dashoffset: 280;
    transform: rotate(720deg);
  }
}
`;
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
PfSpinner.version = "4.3.0";
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