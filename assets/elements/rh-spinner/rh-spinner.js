import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';
import { BaseSpinner } from '@patternfly/pfe-spinner/BaseSpinner.js';
import styles from "./rh-spinner.css.js";
import { classMap } from 'lit/directives/class-map.js';
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
        const { on = 'light' } = this;
        return html `
      <svg role="status" viewBox="0 0 100 100" aria-live="polite">
        <circle class="track ${classMap({ [on]: !!this.on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
        <circle class="dash ${classMap({ [on]: !!this.on })}" cx="50" cy="50" r="40" fill="none" vector-effect="non-scaling-stroke" />
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
    colorContextConsumer({ attribute: false })
], RhSpinner.prototype, "on", void 0);
__decorate([
    property({ reflect: true })
], RhSpinner.prototype, "size", void 0);
RhSpinner = __decorate([
    customElement('rh-spinner')
], RhSpinner);
export { RhSpinner };
//# sourceMappingURL=rh-spinner.js.map