import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { colorContextConsumer } from '../../lib/context/color.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';
import styles from "./rh-tooltip.css.js";
/**
 * Tooltip
 * @slot - Place element content here
 */
let RhTooltip = class RhTooltip extends BaseTooltip {
    constructor() {
        super(...arguments);
        this.position = 'top';
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="container" class="${classMap({ [on]: !!on })}">
        ${super.render()}
      </div>
    `;
    }
};
RhTooltip.version = '{{version}}';
RhTooltip.styles = [...BaseTooltip.styles, styles];
__decorate([
    colorContextConsumer()
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