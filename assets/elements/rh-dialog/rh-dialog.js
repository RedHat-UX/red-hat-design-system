var _RhDialog_screenSize;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { PfeModal } from '@patternfly/pfe-modal';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import styles from "./rh-dialog.css.js";
async function pauseYoutube(iframe) {
    const { pauseVideo } = await import('./yt-api.js');
    await pauseVideo(iframe);
}
function openChanged(oldValue) {
    if (this.type === 'video' && oldValue === true && this.open === false) {
        this.querySelector('video')?.pause?.();
        const iframe = this.querySelector('iframe');
        if (iframe?.src.match(/youtube/)) {
            pauseYoutube(iframe);
        }
    }
}
/**
 * Dialog
 */
let RhDialog = class RhDialog extends PfeModal {
    constructor() {
        super(...arguments);
        _RhDialog_screenSize.set(this, new ScreenSizeController(this));
        this.open = false;
    }
    render() {
        const { mobile } = __classPrivateFieldGet(this, _RhDialog_screenSize, "f");
        return html `
      <div id="rhds-wrapper" class=${classMap({ mobile })}>
        ${super.render()}
      </div>
    `;
    }
};
_RhDialog_screenSize = new WeakMap();
RhDialog.version = '{{version}}';
RhDialog.styles = [...PfeModal.styles, styles];
RhDialog.closeOnOutsideClick = true;
__decorate([
    property({ reflect: true })
], RhDialog.prototype, "type", void 0);
__decorate([
    observed(openChanged),
    property({ reflect: true, type: Boolean })
], RhDialog.prototype, "open", void 0);
RhDialog = __decorate([
    customElement('rh-dialog')
], RhDialog);
export { RhDialog };
//# sourceMappingURL=rh-dialog.js.map