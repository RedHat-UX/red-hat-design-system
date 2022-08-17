import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';
import styles from "./rh-tooltip.css.js";
/**
 * Tooltip
 * @slot - Place element content here
 */
let RhTooltip = class RhTooltip extends BaseTooltip {
    constructor() {
        super();
        this.on = 'light';
        if (['top', 'bottom'].includes(this.position)) {
            this.offset = [-4, 16];
        }
    }
};
RhTooltip.version = '{{version}}';
RhTooltip.styles = [...BaseTooltip.styles, styles];
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], RhTooltip.prototype, "on", void 0);
RhTooltip = __decorate([
    customElement('rh-tooltip')
], RhTooltip);
export { RhTooltip };
//# sourceMappingURL=rh-tooltip.js.map