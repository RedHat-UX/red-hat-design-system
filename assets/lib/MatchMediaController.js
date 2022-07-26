import { __decorate } from "tslib";
import { bound } from '@patternfly/pfe-core/decorators/bound.js';
export class MatchMediaController {
    constructor(
    /** reference to the host element using this controller */
    host, mediaQuery = '', options) {
        this.host = host;
        this.mediaQuery = mediaQuery;
        /**
         * The matchMedia result
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
         */
        this.mediaQueryList = null;
        this.host.addController(this);
        this.mediaQueryList = matchMedia(mediaQuery);
        this.onChange = options?.onChange;
    }
    hostConnected() {
        this.evaluate();
        this.mediaQueryList?.addEventListener('change', this.evaluate);
    }
    hostDisconnected() {
        this.mediaQueryList?.removeEventListener('change', this.evaluate);
    }
    /** Requests a render and calls the onChange callback */
    evaluate() {
        this.host.requestUpdate();
        this.onChange?.(this.mediaQueryList ?? matchMedia(this.mediaQuery));
    }
}
__decorate([
    bound
], MatchMediaController.prototype, "evaluate", null);
//# sourceMappingURL=MatchMediaController.js.map