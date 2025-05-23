import { __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `slot,span{align-items:center;justify-content:center;position:relative;white-space:nowrap;text-align:center;aspect-ratio:var(--_aspect-ratio);border-radius:var(--rh-border-radius-pill,64px);min-width:var(--_badge-size,var(--rh-length-lg,16px));font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:700;line-height:var(--rh-line-height-body-text,1.5);padding-inline:var(--_badge-padding,var(--rh-space-md,8px));color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515))}slot.neutral,span.neutral{background-color:var(--rh-color-status-neutral)}slot.info,span.info{background-color:var(--rh-color-status-info)}slot.success,span.success{background-color:var(--rh-color-status-success)}slot.caution,span.caution{background-color:var(--rh-color-status-caution);color:var(--rh-color-text-primary-on-light,#151515)}slot.warning,span.warning{background-color:var(--rh-color-status-warning);color:var(--rh-color-text-primary-on-light,#151515)}slot.danger,span.danger{background-color:var(--rh-color-status-danger)}span:empty{display:none}slot{display:inline-flex}:host([number]) slot{display:none}:host([number]) span{display:inline-flex}`;
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
        const { state, threshold, number } = this;
        const isLarge = !!threshold && number != null && (threshold < number);
        const computedContent = isLarge ? `${threshold}+` : number?.toString() ?? null;
        return html `
      <span class="${classMap({ [state]: true })}">${computedContent}</span>
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