import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;text-align:center;width:max-content;min-height:0}::slotted(*){margin-top:var(--rh-space-lg,16px)}::slotted(p){font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}svg{aspect-ratio:1/1;width:var(--rh-length-4xl,64px);stroke-width:var(--rh-length-sm,6px);overflow:hidden;display:block;margin-left:auto;margin-right:auto}circle{width:100%;height:100%;stroke-linecap:round}circle.dash{transform-origin:50% 50%;animation:rh-spinner-animation-dash 1.4s ease-out infinite;stroke:var(--rh-color-accent-base);stroke-dasharray:283;stroke-dashoffset:280;transform:rotate(-90deg)}circle.track{stroke:light-dark(var(--rh-color-gray-10,#f2f2f2),var(--rh-color-gray-70,#383838));animation-duration:0}:host([size=lg]) svg{width:var(--rh-size-icon-06,64px);stroke-width:var(--rh-length-sm,6px)}:host([size=lg]) ::slotted(p){font-size:var(--rh-font-size-body-text-lg,1.125rem)}:host([size=md]) svg{width:var(--rh-size-icon-04,40px);stroke-width:var(--rh-length-xs,4px)}:host([size=md]) ::slotted(p){font-size:var(--rh-font-size-body-text-md,1rem)}:host([size=sm]) svg{width:var(--rh-size-icon-01,16px);stroke-width:var(--rh-length-2xs,3px)}:host([size=sm]) circle.dash{animation-name:rh-spinner-small-animation-dash;stroke-dasharray:71;stroke-dashoffset:71}:host([size=sm]) ::slotted(p){font-size:var(--rh-font-size-body-text-sm,.875rem)}@keyframes rh-spinner-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}to{stroke-dashoffset:-283}}@keyframes rh-spinner-small-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}to{stroke-dashoffset:-71}}`;
/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @alias spinner
 *
 * @slot - Optional text label below the animated circle.
 */
let RhSpinner = class RhSpinner extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Preset sizes for the spinner
         */
        this.size = 'lg';
    }
    render() {
        return html `
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <slot></slot>
    `;
    }
};
RhSpinner.styles = [styles];
__decorate([
    property({ reflect: true })
], RhSpinner.prototype, "size", void 0);
RhSpinner = __decorate([
    customElement('rh-spinner'),
    themable
], RhSpinner);
export { RhSpinner };
//# sourceMappingURL=rh-spinner.js.map