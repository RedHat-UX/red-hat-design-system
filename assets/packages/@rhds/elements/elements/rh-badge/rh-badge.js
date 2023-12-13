import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{--_color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-surface-lighter, #f2f2f2);display:inline-block;position:relative;white-space:nowrap;text-align:center;background-color:var(--_background-color);border-radius:var(--rh-border-radius-pill,64px);color:var(--_color);font-size:var(--rh-font-size-body-text-xs, .75rem);font-weight:700;line-height:var(--rh-line-height-body-text, 1.5);min-width:var(--rh-length-2xl,32px);padding-left:var(--rh-space-md,8px);padding-right:var(--rh-space-md,8px)}:host([state=info]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-accent-base-on-light, #0066cc)}:host([state=success]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-green-60, #3d7317)}:host([state=moderate]){--_color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-yellow-40, #dca614)}:host([state=important]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-red-60, #a60000)}:host([state=critical]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-red-60, #a60000)}`;
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * - **info**: Indicates informative or low impact
 * - **success**: Indicates stability or completion
 * - **moderate**: Indicates caution
 * - **important**: Indicates an error
 * - **critical**: Indicates danger or something critical
 *
 * @summary Annotates information like a label or object
 *
 */
let RhBadge = class RhBadge extends LitElement {
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
RhBadge.version = '{{version}}';
RhBadge.styles = [styles];
__decorate([
    property({ reflect: true })
], RhBadge.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Number })
], RhBadge.prototype, "number", void 0);
__decorate([
    property({ reflect: true, type: Number })
], RhBadge.prototype, "threshold", void 0);
RhBadge = __decorate([
    customElement('rh-badge')
], RhBadge);
export { RhBadge };
//# sourceMappingURL=rh-badge.js.map