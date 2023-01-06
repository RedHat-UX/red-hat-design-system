import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { colorContextConsumer } from '../../lib/context/color.js';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';
import styles from "./rh-tooltip.css.js";
/**
 * Tooltip
 * @slot - Place element content here
 */
let RhTooltip = class RhTooltip extends BaseTooltip {
    constructor() {
        super(...arguments);
        this.on = 'light';
        this.position = 'top';
    }
};
RhTooltip.version = '{{version}}';
RhTooltip.styles = [...BaseTooltip.styles, styles];
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], RhTooltip.prototype, "on", void 0);
__decorate([
    property()
], RhTooltip.prototype, "position", void 0);
__decorate([
    property()
], RhTooltip.prototype, "content", void 0);
RhTooltip = __decorate([
    customElement('rh-tooltip')
], RhTooltip);
export { RhTooltip };
//# sourceMappingURL=rh-tooltip.js.map