import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host {\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  display: inline-block;\n  border-radius: var(--pf-c-badge--BorderRadius,\n    var(--pf-global--BorderRadius--lg, 180em));\n  min-width: var(--pf-c-badge--MinWidth,\n    var(--pf-global--spacer--xl, 2rem));\n  padding-left: var(--pf-c-badge--PaddingLeft,\n    var(--pf-global--spacer--sm, 0.5rem));\n  padding-right: var(--pf-c-badge--PaddingRight,\n    var(--pf-global--spacer--sm, 0.5rem));\n  font-size: var(--pf-c-badge--FontSize,\n    var(--pf-theme--font-size, 0.75em));\n  font-weight: var(--pf-c-badge--FontWeight,\n    var(--pf-theme--font-weight--bold, 700));\n  line-height: var(--pf-c-badge--LineHeight,\n    var(--pf-global--LineHeight--md, 1.5));\n  color: var(--pf-c-badge--Color,\n    var(--pf-global--palette--black-900, #151515));\n  background-color: var(--pf-c-badge--BackgroundColor,\n    var(--pf-global--palette--black-200, #f0f0f0));\n}\n\n:host([state="read"]) {\n  --pf-c-badge--Color: var(--pf-c-badge--m-read--Color,\n    var(--pf-global--palette--black-900, #151515));\n  --pf-c-badge--BackgroundColor: var(--pf-c-badge--m-read--BackgroundColor,\n    var(--pf-global--palette--black-200, #f0f0f0));\n}\n\n:host([state="unread"]) {\n  --pf-c-badge--Color: var(--pf-c-badge--m-unread--Color,\n    var(--pf-global--palette--white, #fff));\n  --pf-c-badge--BackgroundColor: var(--pf-c-badge--m-unread--BackgroundColor,\n    var(--pf-global--palette--blue-400, #06c));\n}\n`;
let PfBadge = class PfBadge extends LitElement {
    render() {
        const { threshold, number, textContent } = this;
        const displayText = (threshold && number && (threshold < number)) ? `${threshold.toString()}+`
            : (number != null) ? number.toString()
                : textContent ?? '';
        return html `
      <span>${displayText}</span>
    `;
    }
};
PfBadge.styles = [styles];
PfBadge.version = "4.0.2";
__decorate([
    property({ reflect: true })
], PfBadge.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Number })
], PfBadge.prototype, "number", void 0);
__decorate([
    property({ reflect: true, type: Number })
], PfBadge.prototype, "threshold", void 0);
PfBadge = __decorate([
    customElement('pf-badge')
], PfBadge);
export { PfBadge };
//# sourceMappingURL=pf-badge.js.map