import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { BaseSpinner } from '@patternfly/elements/pf-spinner/BaseSpinner.js';
import { css } from "lit";
const styles = css `:host{display:inline-block;text-align:center;width:max-content;min-height:0}::slotted(*){margin-top:var(--rh-space-lg,16px)}svg{aspect-ratio:1/1;width:var(--rh-length-4xl,64px);stroke-width:var(--rh-length-sm,6px);overflow:hidden;display:block;margin-left:auto;margin-right:auto}circle{width:100%;height:100%;stroke-linecap:round}circle.dash{transform-origin:50% 50%;animation:rh-spinner-animation-dash 1.4s ease-out infinite;stroke:var(--rh-color-blue-400,#0066cc);stroke-dasharray:283;stroke-dashoffset:280;transform:rotate(-90deg)}circle.track{stroke:var(--rh-color-black-200,#f0f0f0);animation-duration:0}:host([size=lg]) svg{width:var(--rh-size-icon-06,64px);stroke-width:var(--rh-length-sm,6px)}:host([size=lg]) ::slotted(p){font-size:var(--rh-font-size-body-text-lg, 1.125rem)}:host([size=md]) svg{width:var(--rh-size-icon-04,40px);stroke-width:var(--rh-length-xs,4px)}:host([size=md]) ::slotted(p){font-size:var(--rh-font-size-body-text-md, 1rem)}:host([size=sm]) svg{width:var(--rh-size-icon-01,16px);stroke-width:var(--rh-length-2xs,3px)}:host([size=sm]) circle.dash{animation-name:rh-spinner-small-animation-dash;stroke-dasharray:71;stroke-dashoffset:71}:host([size=sm]) ::slotted(p){font-size:var(--rh-font-size-body-text-sm, .875rem)}circle.dash.dark{stroke:var(--rh-color-blue-200,#73bcf7)}circle.track.dark{stroke:var(--rh-color-black-700,#3c3f42)}@keyframes rh-spinner-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}100%{stroke-dashoffset:-283}}@keyframes rh-spinner-small-animation-dash{50%{stroke-dashoffset:0}75%{transform:rotate(280deg)}100%{stroke-dashoffset:-71}}`;
/**
 * Spinner consists of an animated circle and sometimes a text label, and it indicates that a section is loading.
 *
 * @slot - Optional text label below the animated circle.
 *
 */
let RhSpinner = class RhSpinner extends BaseSpinner {
    constructor() {
        super(...arguments);
        /**
         * Preset sizes for the spinner
         */
        this.size = 'lg';
    }
    render() {
        const { on = '' } = this;
        return html `
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track ${classMap({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash ${classMap({ [on]: !!on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
      </svg>
      <slot></slot>
    `;
    }
};
RhSpinner.styles = [styles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhSpinner.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhSpinner.prototype, "on", void 0);
__decorate([
    property({ reflect: true })
], RhSpinner.prototype, "size", void 0);
RhSpinner = __decorate([
    customElement('rh-spinner')
], RhSpinner);
export { RhSpinner };
//# sourceMappingURL=rh-spinner.js.map