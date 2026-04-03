import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `slot,span{align-items:center;justify-content:center;position:relative;white-space:nowrap;text-align:center;aspect-ratio:var(--_aspect-ratio);border-radius:var(--rh-border-radius-pill,64px);min-width:var(--_badge-size,var(--rh-length-lg,16px));font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:700;line-height:var(--rh-line-height-body-text,1.5);padding-inline:var(--_badge-padding,var(--rh-space-md,8px));color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515))}.neutral:is(span,slot){background-color:var(--rh-color-status-neutral)}.info:is(span,slot){background-color:var(--rh-color-status-info)}.success:is(span,slot){background-color:var(--rh-color-status-success)}.caution:is(span,slot){background-color:var(--rh-color-status-caution)}.caution:is(span,slot),.warning:is(span,slot){color:var(--rh-color-text-primary-on-light,#151515)}.warning:is(span,slot){background-color:var(--rh-color-status-warning)}.danger:is(span,slot){background-color:var(--rh-color-status-danger)}span:empty{display:none}slot{display:inline-flex}:host([number]) slot{display:none}:host([number]) span{display:inline-flex}`;
/**
 * A badge provides a small numeric count on a pill for labels, filters, or lists. Set `state`
 * when the count carries severity:
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * It must not take focus or act as a control; it has no implicit ARIA role. Provide context in
 * surrounding text. Avoid color-only meaning (WCAG 1.4.1). Use `threshold` with `number` for values
 * like `999+`.
 *
 * @summary Non-interactive numeric pill badge for counts and status
 *
 * @alias badge
 */
let RhBadge = class RhBadge extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Background severity: `danger`, `warning`, `caution`, `neutral`, `success`, or `info`.
         * Defaults to `neutral`.
         *
         * Legacy values are normalized: `moderate` → `warning`, `important` → `caution`,
         * `critical` → `danger`, `note` → `info`.
         *
         * @see [Guidelines](https://ux.redhat.com/elements/badge/guidelines/)
         */
        this.state = 'neutral';
    }
    /** Normalizes `state` to supported values (including deprecated aliases). */
    stateChanged() {
        const state = this.state.toLowerCase();
        switch (state) {
            // the first four are deprecated pre-DPO status names
            case 'moderate':
                this.state = 'warning';
                break;
            case 'important':
                this.state = 'caution';
                break;
            case 'critical':
                this.state = 'danger';
                break;
            case 'note':
                this.state = 'info';
                break;
            // the following are DPO-approved status names
            case 'danger':
            case 'warning':
            case 'caution':
            case 'neutral':
            case 'info':
            case 'success':
                return;
            default:
                this.state = 'neutral';
        }
    }
    render() {
        const { state, threshold, number } = this;
        const isLarge = !!threshold && number != null && (threshold < number);
        const computedContent = isLarge ? `${threshold}+` : number?.toString() ?? null;
        return html `
      <span class="${classMap({ [state]: true })}">${computedContent}</span>
      <!--
        summary: Count text (default slot)
        description: |
          Put the numeric count in the default slot—the same value as the \`number\` attribute when
          you use number. The badge has no implicit accessible name; authors should provide context
          in surrounding text (labels, headings, table cells, etc.). For longer non-count labels,
          use rh-tag instead.
      -->
      <slot class="${classMap({ [state]: true })}"></slot>
    `;
    }
};
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
__decorate([
    observes('state', { waitFor: 'updated' })
], RhBadge.prototype, "stateChanged", null);
RhBadge = __decorate([
    customElement('rh-badge'),
    themable
], RhBadge);
export { RhBadge };
//# sourceMappingURL=rh-badge.js.map