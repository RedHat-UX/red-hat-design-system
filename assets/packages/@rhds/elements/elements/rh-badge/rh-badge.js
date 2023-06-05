import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseBadge } from '@patternfly/elements/pf-badge/BaseBadge.js';
import { css } from "lit";
const styles = css `:host{--_color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-surface-lighter, #f2f2f2);background-color:var(--_background-color);border-radius:var(--rh-border-radius-pill,64px);color:var(--_color);display:inline-block;font-size:var(--rh-font-size-body-text-xs, .75rem);font-weight:700;line-height:var(--rh-line-height-body-text, 1.5);min-width:var(--rh-length-2xl,32px);padding-left:var(--rh-space-md,8px);padding-right:var(--rh-space-md,8px)}:host([state=info]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-accent-base-on-light, #0066cc)}:host([state=success]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-green-500, #3e8635)}:host([state=moderate]){--_color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-gold-400, #f0ab00)}:host([state=important]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-red-600, #be0000)}:host([state=critical]){--_color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-red-700, #8f0000)}`;
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * - **info**: Indicates informative or low impact
 * - **success**: Indicates stability or completion
 * - **moderate**: Indicates caution
 * - **important**: Indicates an error
 * - **critical**: Indicates danger or something critical
 *
 * @summary Annotates other information like a label or an object name.
 *
 * @cssprop --rh-border-radius-pill
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-green-500
 * @cssprop --rh-color-red-600
 * @cssprop --rh-color-red-700
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-xs
 * @cssprop --rh-length-2xl
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-space-md
 */
let RhBadge = class RhBadge extends BaseBadge {
};
RhBadge.version = '{{version}}';
RhBadge.styles = [...BaseBadge.styles, styles];
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