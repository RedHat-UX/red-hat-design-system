import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { BaseSpinner } from '@patternfly/pfe-spinner/BaseSpinner.js';
import styles from "./rh-spinner.css.js";
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