var _PfProgress_instances, _PfProgress_internals, _PfProgress_calculatedPercentage_get, _PfProgress_icon_get;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { css } from "lit";
const styles = css `* {
  box-sizing: border-box;
}

#container {
  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: #0066cc33; /* WARNING: not a recognized token value */
  --_pf-c-progress--m-success__bar--BackgroundColorWithOpacity: #3e863533;  /* WARNING: not a recognized token value */
  --_pf-c-progress--m-warning__bar--BackgroundColorWithOpacity: #f0ab0033;  /* WARNING: not a recognized token value */
  --_pf-c-progress--m-danger__bar--BackgroundColorWithOpacity: #c9190b33;  /* WARNING: not a recognized token value */

  /** Gap between sections of progress bar */
  --pf-c-progress--GridGap: var(--pf-global--spacer--md, 1rem);
  /** Color of progress bar */
  --pf-c-progress__bar--before--BackgroundColor: var(--pf-global--primary-color--100, #0066cc);
  /** Height of progress bar */
  --pf-c-progress__bar--Height: var(--pf-global--spacer--md, 1rem);
  /** Background color of progress bar */
  --pf-c-progress__bar--BackgroundColor: var(--pf-global--BackgroundColor--light-100, #ffffff);
  /** Color of status icon */
  --pf-c-progress__status-icon--Color: var(--pf-global--Color--100, #151515);
  /** Margin left of status icon */
  --pf-c-progress__status-icon--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
  /** Height of progress bar indicator */
  --pf-c-progress__indicator--Height: var(--pf-c-progress__bar--Height);
  /** Background color of progress bar indicator */
  --pf-c-progress__indicator--BackgroundColor: var(--pf-c-progress__bar--before--BackgroundColor);
  /** Background color of progress bar when variant is success */
  --pf-c-progress--m-success__bar--BackgroundColor: var(--pf-global--success-color--100, #3e8635);
  /** Background color of progress bar when variant is warning */
  --pf-c-progress--m-warning__bar--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);
  /** Background color of progress bar when variant is danger */
  --pf-c-progress--m-danger__bar--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);
  /** Color of status icon when variant is success */
  --pf-c-progress--m-success__status-icon--Color: var(--pf-global--success-color--100, #3e8635);
  /** Color of status icon when variant is warning */
  --pf-c-progress--m-warning__status-icon--Color: var(--pf-global--warning-color--100, #f0ab00);
  /** Color of status icon when variant is danger */
  --pf-c-progress--m-danger__status-icon--Color: var(--pf-global--danger-color--100, #c9190b);
  /** Color of progress bar measure when variant is success and measure location is inside */
  --pf-c-progress--m-success--m-inside__measure--Color: var(--pf-global--Color--light-100, #ffffff);
  /** Font size of progress bar measure when measure location is outside */
  --pf-c-progress--m-outside__measure--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
  /** Height of progress bar when size is small */
  --pf-c-progress--m-sm__bar--Height: var(--pf-global--spacer--sm, 0.5rem);
  /** Font size of progress bar description when size is small */
  --pf-c-progress--m-sm__description--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
  /** Height of progress bar when size is large */
  --pf-c-progress--m-lg__bar--Height: var(--pf-global--spacer--lg, 1.5rem);
  display: grid;
  align-items: end;
  grid-gap: var(--pf-c-progress--GridGap);
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  width: 100%;
}

.sm {
  --pf-c-progress__bar--Height: var(--pf-c-progress--m-sm__bar--Height);
  --pf-c-progress__indicator--Height: var(--pf-c-progress--m-sm__bar--Height);
}

.sm #description {
  font-size: var(--pf-c-progress--m-sm__description--FontSize);
}

.lg {
  --pf-c-progress__bar--Height: var(--pf-c-progress--m-lg__bar--Height);
  --pf-c-progress__indicator--Height: var(--pf-c-progress--m-lg__bar--Height);
}

.outside #description {
  grid-column: 1/3;
}

.outside #status {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: center;
}

.outside progress,
.outside span {
  display: inline-block;
  font-size: var(--pf-c-progress--m-outside__measure--FontSize);
  grid-column: 1/2;
}

.singleline {
  grid-template-rows: 1fr;
}

.singleline #description {
  display: none;
  visibility: hidden;
}

.singleline progress,
.singleline span {
  grid-row: 1/2;
  grid-column: 1/2;
}

.singleline #status {
  grid-row: 1/2;
  grid-column: 2/3;
}

.outside, .singleline {
  grid-template-columns: 1fr fit-content(50%);
}

#container.success {
  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-success__bar--BackgroundColor);
  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-success__bar--BackgroundColorWithOpacity);
  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-success__status-icon--Color);
}

#container.warning {
  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-warning__bar--BackgroundColor);
  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-warning__bar--BackgroundColorWithOpacity);
  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-warning__status-icon--Color);
}

#container.danger {
  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-danger__bar--BackgroundColor);
  --_pf-c-progress__bar--before--BackgroundColorWithOpacity: var(--_pf-c-progress--m-danger__bar--BackgroundColorWithOpacity);
  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-danger__status-icon--Color);
}

#description {
  word-break: break-word;
  grid-column: 1/2;
}

.descriptionTruncated #description {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#status {
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: right;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: end;
}

pf-icon {
  margin-left: var(--pf-c-progress__status-icon--MarginLeft);
  color: var(--pf-c-progress__status-icon--Color);
}

progress {
  position: relative;
  grid-column: 1/3;
  grid-row: 2/3;
  align-self: center;
  height: var(--pf-c-progress__bar--Height);
  background-color: var(--pf-c-progress__bar--BackgroundColor);
}

.indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: var(--pf-c-progress__indicator--Height);
  background-color: var(--pf-c-progress__indicator--BackgroundColor);
}

.indicator {
  width: 100%;
  height: var(--pf-c-progress__bar--Height);

  display: block;
}

span {
  grid-column: 1/3;
  grid-row: 2/3;
  text-align: center;
  color: var(--pf-c-progress--m-success--m-inside__measure--Color);
}

span::after {
  content: attr(data-value);
  position: relative;
  height: 100%;
}

progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: var(--_pf-c-progress__bar--before--BackgroundColorWithOpacity);

  width: 100%;
  height: var(--pf-c-progress__bar--Height);
}

progress:not([value]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

progress[value]::-webkit-progress-bar {
  background: var(--_pf-c-progress__bar--before--BackgroundColorWithOpacity);
}

progress[value]::-moz-progress-bar {
  background: var(--pf-c-progress__bar--before--BackgroundColor);
}

progress[value]::-webkit-progress-value {
  background-size: 100% 100%;
  background-image: linear-gradient(
    90deg,
    var(--pf-c-progress__bar--before--BackgroundColor) 100%,
    var(--pf-c-progress__bar--before--BackgroundColor) 100%
  );
}

pf-tooltip {
  height: 0.01px;
}
`;
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
PfProgress.version = "4.3.0";
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