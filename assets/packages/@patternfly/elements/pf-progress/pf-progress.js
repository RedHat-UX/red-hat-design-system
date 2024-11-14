var _PfProgress_instances, _PfProgress_internals, _PfProgress_calculatedPercentage_get, _PfProgress_icon_get;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { css } from "lit";
const styles = css `* {\n  box-sizing: border-box;\n}\n\n#container {\n  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: #0066cc33; /* WARNING: not a recognized token value */\n  --_pf-c-progress--m-success__bar--BackgroundColorWithOpacity: #3e863533;  /* WARNING: not a recognized token value */\n  --_pf-c-progress--m-warning__bar--BackgroundColorWithOpacity: #f0ab0033;  /* WARNING: not a recognized token value */\n  --_pf-c-progress--m-danger__bar--BackgroundColorWithOpacity: #c9190b33;  /* WARNING: not a recognized token value */\n\n  --pf-c-progress--GridGap: var(--pf-global--spacer--md, 1rem);\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-global--primary-color--100, #0066cc);\n  --pf-c-progress__bar--Height: var(--pf-global--spacer--md, 1rem);\n  --pf-c-progress__bar--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #ffffff);\n  --pf-c-progress__status-icon--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-progress__status-icon--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-progress__indicator--Height: var(--pf-c-progress__bar--Height);\n  --pf-c-progress__indicator--BackgroundColor: var(--pf-c-progress__bar--before--BackgroundColor);\n  --pf-c-progress--m-success__bar--BackgroundColor: var(--pf-global--success-color--100, #3e8635);\n  --pf-c-progress--m-warning__bar--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);\n  --pf-c-progress--m-danger__bar--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);\n  --pf-c-progress--m-success__status-icon--Color: var(--pf-global--success-color--100, #3e8635);\n  --pf-c-progress--m-warning__status-icon--Color: var(--pf-global--warning-color--100, #f0ab00);\n  --pf-c-progress--m-danger__status-icon--Color: var(--pf-global--danger-color--100, #c9190b);\n  --pf-c-progress--m-success--m-inside__measure--Color: var(--pf-global--Color--light-100, #ffffff);\n  --pf-c-progress--m-outside__measure--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n  --pf-c-progress--m-sm__bar--Height: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-progress--m-sm__description--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n  --pf-c-progress--m-lg__bar--Height: var(--pf-global--spacer--lg, 1.5rem);\n  display: grid;\n  align-items: end;\n  grid-gap: var(--pf-c-progress--GridGap);\n  grid-template-columns: 1fr auto;\n  grid-template-rows: 1fr auto;\n  width: 100%;\n}\n\n.sm {\n  --pf-c-progress__bar--Height: var(--pf-c-progress--m-sm__bar--Height);\n  --pf-c-progress__indicator--Height: var(--pf-c-progress--m-sm__bar--Height);\n}\n\n.sm #description {\n  font-size: var(--pf-c-progress--m-sm__description--FontSize);\n}\n\n.lg {\n  --pf-c-progress__bar--Height: var(--pf-c-progress--m-lg__bar--Height);\n  --pf-c-progress__indicator--Height: var(--pf-c-progress--m-lg__bar--Height);\n}\n\n.outside #description {\n  grid-column: 1/3;\n}\n\n.outside #status {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  align-self: center;\n}\n\n.outside progress,\n.outside span {\n  display: inline-block;\n  font-size: var(--pf-c-progress--m-outside__measure--FontSize);\n  grid-column: 1/2;\n}\n\n.singleline {\n  grid-template-rows: 1fr;\n}\n\n.singleline #description {\n  display: none;\n  visibility: hidden;\n}\n\n.singleline progress,\n.singleline span {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n\n.singleline #status {\n  grid-row: 1/2;\n  grid-column: 2/3;\n}\n\n.outside, .singleline {\n  grid-template-columns: 1fr fit-content(50%);\n}\n\n#container.success {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-success__bar--BackgroundColor);\n  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-success__bar--BackgroundColorWithOpacity);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-success__status-icon--Color);\n}\n\n#container.warning {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-warning__bar--BackgroundColor);\n  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-warning__bar--BackgroundColorWithOpacity);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-warning__status-icon--Color);\n}\n\n#container.danger {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-danger__bar--BackgroundColor);\n  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-danger__bar--BackgroundColorWithOpacity);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-danger__status-icon--Color);\n}\n\n#description {\n  word-break: break-word;\n  grid-column: 1/2;\n}\n\n.descriptionTruncated #description {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#status {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  text-align: right;\n  word-break: break-word;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n}\n\npf-icon {\n  margin-left: var(--pf-c-progress__status-icon--MarginLeft);\n  color: var(--pf-c-progress__status-icon--Color);\n}\n\nprogress {\n  position: relative;\n  grid-column: 1/3;\n  grid-row: 2/3;\n  align-self: center;\n  height: var(--pf-c-progress__bar--Height);\n  background-color: var(--pf-c-progress__bar--BackgroundColor);\n}\n\n.indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: var(--pf-c-progress__indicator--Height);\n  background-color: var(--pf-c-progress__indicator--BackgroundColor);\n}\n\n.indicator {\n  width: 100%;\n  height: var(--pf-c-progress__bar--Height);\n\n  display: block;\n}\n\nspan {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  text-align: center;\n  color: var(--pf-c-progress--m-success--m-inside__measure--Color);\n}\n\nspan::after {\n  content: attr(data-value);\n  position: relative;\n  height: 100%;\n}\n\nprogress[value] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  background: var(--_pf-c-progress__bar--before--BackgroundColorWithOpacity);\n\n  width: 100%;\n  height: var(--pf-c-progress__bar--Height);\n}\n\nprogress:not([value]) {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nprogress[value]::-webkit-progress-bar {\n  background: var(--_pf-c-progress__bar--before--BackgroundColorWithOpacity);\n}\n\nprogress[value]::-moz-progress-bar {\n  background: var(--pf-c-progress__bar--before--BackgroundColor);\n}\n\nprogress[value]::-webkit-progress-value {\n  background-size: 100% 100%;\n  background-image: linear-gradient(\n    90deg,\n    var(--pf-c-progress__bar--before--BackgroundColor) 100%,\n    var(--pf-c-progress__bar--before--BackgroundColor) 100%\n  );\n}\n\npf-tooltip {\n  height: 0.01px;\n}\n`;
const ICONS = new Map(Object.entries({
    success: { icon: 'circle-check' },
    danger: { icon: 'circle-xmark' },
    warning: { icon: 'triangle-exclamation' },
}));
let PfProgress = class PfProgress extends LitElement {
    constructor() {
        super(...arguments);
        _PfProgress_instances.add(this);
        _PfProgress_internals.set(this, this.attachInternals());
        /** Represents the value of the progress bar */
        this.value = 0;
        /** Indicate whether to truncate the string description (title) */
        this.descriptionTruncated = false;
        /** Maximum value for the progress bar */
        this.max = 100;
        /** Minimum value for the progress bar */
        this.min = 0;
    }
    willUpdate(changed) {
        if (changed.has('value') || changed.has('min') || changed.has('max')) {
            __classPrivateFieldGet(this, _PfProgress_internals, "f").ariaValueNow = __classPrivateFieldGet(this, _PfProgress_instances, "a", _PfProgress_calculatedPercentage_get).toString();
        }
        if (__classPrivateFieldGet(this, _PfProgress_instances, "a", _PfProgress_icon_get)) {
            import('@patternfly/elements/pf-icon/pf-icon.js');
        }
        if (this.descriptionTruncated) {
            import('@patternfly/elements/pf-tooltip/pf-tooltip.js');
        }
    }
    render() {
        const { size, measureLocation, variant, description, descriptionTruncated } = this;
        const icon = __classPrivateFieldGet(this, _PfProgress_instances, "a", _PfProgress_icon_get);
        const singleLine = description?.length === 0;
        const pct = __classPrivateFieldGet(this, _PfProgress_instances, "a", _PfProgress_calculatedPercentage_get);
        const width = `${pct}%`;
        return html `
      <div id="container" class="${classMap({
            [size ?? '']: !!size,
            [measureLocation ?? '']: !!measureLocation,
            [variant ?? '']: !!variant,
            singleLine,
            descriptionTruncated,
        })}">

        <div id="description" aria-hidden="true">${description ?? ''}</div>

        ${!descriptionTruncated ? '' : html `
        <pf-tooltip content="${this.description ?? ''}"
                    trigger="description"></pf-tooltip>
        `}

        ${measureLocation === 'none' ? '' : html `
        <div id="status" aria-hidden="true">
          ${measureLocation !== 'inside' ? '' : width}
          <pf-icon set="fas"
                   icon="${ifDefined(icon)}"
                   size="md"
                   ?hidden="${!icon}"
          ></pf-icon>
        </div>
        `}

          <progress id="progress"
                    max="100"
                    value="${pct}"
                    aria-valuemin="0"
                    aria-valuenow="${pct}"
                    aria-valuemax="100"
          ></progress>

          ${measureLocation !== 'inside' ? '' : html `
          <span id="progress-span"
                style="${styleMap({ width })}"
                data-value="${width}"></span>
          `}
      </div>`;
    }
};
_PfProgress_internals = new WeakMap();
_PfProgress_instances = new WeakSet();
_PfProgress_calculatedPercentage_get = function _PfProgress_calculatedPercentage_get() {
    const { value, min, max } = this;
    const percentage = Math.round((value - min) / (max - min) * 100);
    if (Number.isNaN(percentage) || percentage < 0) {
        return 0;
    }
    return Math.min(percentage, 100);
};
_PfProgress_icon_get = function _PfProgress_icon_get() {
    return ICONS.get(this.variant ?? '')?.icon;
};
PfProgress.styles = [styles];
PfProgress.version = "4.0.2";
__decorate([
    property({ reflect: true, type: Number })
], PfProgress.prototype, "value", void 0);
__decorate([
    property()
], PfProgress.prototype, "description", void 0);
__decorate([
    property({
        type: Boolean,
        reflect: true,
        attribute: 'description-truncated',
    })
], PfProgress.prototype, "descriptionTruncated", void 0);
__decorate([
    property({ type: Number, reflect: true })
], PfProgress.prototype, "max", void 0);
__decorate([
    property({ type: Number, reflect: true })
], PfProgress.prototype, "min", void 0);
__decorate([
    property()
], PfProgress.prototype, "size", void 0);
__decorate([
    property({ attribute: 'measure-location' })
], PfProgress.prototype, "measureLocation", void 0);
__decorate([
    property()
], PfProgress.prototype, "variant", void 0);
PfProgress = __decorate([
    customElement('pf-progress')
], PfProgress);
export { PfProgress };
//# sourceMappingURL=pf-progress.js.map