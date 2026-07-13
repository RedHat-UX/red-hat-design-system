import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{--rh-spinner-stroke-width:6;display:inline-block;text-align:center;width:max-content;min-height:0}::slotted(*){margin-top:var(--rh-space-lg,16px)}::slotted(p){font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text,1.5)}svg{aspect-ratio:1/1;width:var(--rh-length-4xl,64px);stroke-width:var(--rh-spinner-stroke-width);overflow:hidden;display:block;margin-left:auto;margin-right:auto;animation-name:var(--rh-spinner-container-animation-name,none);animation-duration:var(--rh-spinner-container-animation-duration,0s);animation-timing-function:var(--rh-spinner-container-animation-timing,linear);animation-iteration-count:infinite}circle{width:100%;height:100%;stroke-linecap:round;vector-effect:var(--rh-spinner-vector-effect,non-scaling-stroke)}circle.dash{transform-origin:50% 50%;animation-name:var(--rh-spinner-animation-name,rh-spinner-animation-dash);animation-duration:var(--rh-spinner-animation-duration,1.4s);animation-timing-function:var(--rh-spinner-animation-timing,ease-out);animation-iteration-count:infinite;stroke:var(--rh-color-accent-base);stroke-dasharray:var(--rh-spinner-dash-array,283);stroke-dashoffset:var(--rh-spinner-dash-offset,280);transform:rotate(var(--rh-spinner-rotate-start,-90deg))}circle.track{display:var(--rh-spinner-track-display,revert);stroke:light-dark(var(--rh-color-gray-10,#f2f2f2),var(--rh-color-gray-70,#383838));animation-duration:0}:host([size=lg]){--rh-spinner-stroke-width:6}:host([size=lg]) svg{width:var(--rh-size-icon-06,64px)}:host([size=lg]) ::slotted(p){font-size:var(--rh-font-size-body-text-lg,1.125rem)}:host([size=md]){--rh-spinner-stroke-width:4}:host([size=md]) svg{width:var(--rh-size-icon-04,40px)}:host([size=md]) ::slotted(p){font-size:var(--rh-font-size-body-text-md,1rem)}:host([size=sm]){--rh-spinner-stroke-width:3}:host([size=sm]) svg{width:var(--rh-size-icon-01,16px)}:host([size=sm]) circle.dash{animation-name:var(--rh-spinner-animation-name,rh-spinner-small-animation-dash);stroke-dasharray:var(--rh-spinner-dash-array,71);stroke-dashoffset:var(--rh-spinner-dash-offset,71)}:host([size=sm]) ::slotted(p){font-size:var(--rh-font-size-body-text-sm,.875rem)}@keyframes rh-spinner-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}to{stroke-dashoffset:-283}}@keyframes rh-spinner-small-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}to{stroke-dashoffset:-71}}@keyframes felt-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes felt-dash{0%{stroke-dasharray:251;stroke-dashoffset:248;transform:rotate(0deg)}15%{stroke-width:calc(var(--rh-spinner-stroke-width) - 4)}40%{stroke-dasharray:195;stroke-dashoffset:133}to{stroke-dasharray:251;stroke-dashoffset:248;transform:rotate(2turn)}}`;
/**
 * Provides an animated loading indicator for when content is being
 * processed or fetched. A spinner should be used when loading takes
 * fewer than ten seconds and the content structure is unknown.
 * Authors must not use a spinner for indeterminate loading over ten
 * seconds; use a progress bar instead. Authors should avoid omitting
 * a text label, as screen readers rely on `role="status"` to announce
 * the ARIA live region. The element is not keyboard-focusable.
 *
 * @summary Notifies users their action is being processed or loaded
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
        <circle class="track" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke"/>
        <circle class="dash" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke"/>
      </svg>
      <!-- Optional text label displayed below the animated circle.
           Use a \`<p>\` element with a brief loading message (e.g. "Loading..."). -->
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