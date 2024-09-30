import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `span{display:inline-flex;align-items:center;justify-content:center;position:relative;white-space:nowrap;text-align:center;aspect-ratio:var(--_aspect-ratio);border-radius:var(--rh-border-radius-pill,64px);min-width:var(--_badge-size,var(--rh-length-lg,16px));font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:700;line-height:var(--rh-line-height-body-text,1.5);padding-inline:var(--_badge-padding,var(--rh-space-md,8px))}.on.dark{color:var(--rh-color-text-primary-on-light,#151515)}.on.light{color:var(--rh-color-text-primary-on-dark,#fff)}.on.neutral{background-color:var(--rh-color-status-neutral)}.on.info{background-color:var(--rh-color-status-info)}.on.success{background-color:var(--rh-color-status-success)}.on.caution{background-color:var(--rh-color-status-caution)}.on.warning{background-color:var(--rh-color-status-warning)}.on.danger{background-color:var(--rh-color-status-danger)}.on.light.caution,.on.light.warning{color:var(--rh-color-text-primary-on-light,#151515)}`;
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * @summary Annotates information like a label or object
 *
 */
let RhBadge = class RhBadge extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Denotes the state-of-affairs this badge represents
         */
        this.state = 'neutral';
    }
    /** Ensures that state is consistent, regardless of input */
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
        const { threshold, number, textContent, on = 'light', state = 'neutral' } = this;
        const displayText = (threshold && number && (threshold < number)) ? `${threshold.toString()}+`
            : (number != null) ? number.toString()
                : textContent ?? '';
        return html `
      <span class="${classMap({
            on: true,
            [on]: true,
            [state]: true,
        })}">${displayText}</span>
    `;
    }
};
RhBadge.styles = [styles];
__decorate([
    colorContextConsumer()
], RhBadge.prototype, "on", void 0);
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
    customElement('rh-badge')
], RhBadge);
export { RhBadge };
//# sourceMappingURL=rh-badge.js.map