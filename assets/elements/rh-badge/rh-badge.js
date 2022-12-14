import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { BaseBadge } from '@patternfly/pfe-badge/BaseBadge.js';
import styles from "./rh-badge.css.js";
/**
 * A badge is used to annotate other information with numerical content.
 */
let RhBadge = class RhBadge extends BaseBadge {
};
RhBadge.version = '{{version}}';
RhBadge.styles = [...BaseBadge.styles, styles];
__decorate([
    property({ reflect: true })
], RhBadge.prototype, "state", void 0);
__decorate([
    property({ reflect: true, type: Number })
], RhBadge.prototype, "number", void 0);
__decorate([
    property({ reflect: true, type: Number })
], RhBadge.prototype, "threshold", void 0);
RhBadge = __decorate([
    customElement('rh-badge')
], RhBadge);
export { RhBadge };
//# sourceMappingURL=rh-badge.js.map