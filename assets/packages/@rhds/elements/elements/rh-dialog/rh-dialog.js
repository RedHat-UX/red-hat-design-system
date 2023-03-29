var _RhDialog_screenSize;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `#rhds-wrapper{display:contents;font-family:"Red Hat Text",RedHatText,Overpass,Helvetica,sans-serif;--offset:var(--rh-space-md, 8px);--offset-top:var(--offset);--offset-right:var(--offset)}header ::slotted(:is(h1,h2,h3,h4,h5,h6)[slot=header]){font-family:"Red Hat Display",RedHatDisplay,Overpass,Helvetica,sans-serif}[part=dialog]{background-color:var(--rh-color-surface-lightest,#fff);max-width:min(90%,1140px);border-radius:var(--rh-border-radius-default,3px);color:var(--rh-color-text-primary-on-light,#151515);font-family:inherit}[part=content]{border-radius:var(--rh-border-radius-default,3px)}[part=close-button]{color:var(--rh-dialog-close-button-color,#6a6e73)}[part=close-button]:is(:hover,:focus-within,:focus-visible) svg:is(svg,:hover){fill:var(--rh-color-black-900,#151515)}:host([type=video]){--rh-dialog-close-button-color:white}:host([type=video]) [part=close-button]{top:var(--offset-top);right:var(--offset-right);padding:var(--rh-space-sm,6px);color:var(--rh-dialog-close-button-color,#6a6e73)}:host([type=video]) [part=content]{overflow:hidden}:host([type=video][open]) [part=overlay]{background-color:#151515;opacity:.65}:host([type=video][open]) [part=dialog]{--_aspect-ratio:var(--rh-modal-video-aspect-ratio, 16/9);aspect-ratio:var(--_aspect-ratio);max-width:min(90%,calc(90vh * var(--_aspect-ratio) + var(--offset-top)));padding:0;margin:0}:host([type=video]) #rhds-wrapper.mobile [part=close-button]{--offset-right:var(--rh-space-sm, 6px)}:host([type=video]) #container,:host([type=video]) ::slotted(:not([slot])),:host([type=video]) [part=content]{aspect-ratio:var(--rh-modal-video-aspect-ratio,16/9);width:calc(100% + 1px);position:absolute;inset:0;max-height:none}`;
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
 * @summary Displays content or helps a user focus on a specific task
 */
let RhDialog = class RhDialog extends PfModal {
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
RhDialog.styles = [...PfModal.styles, styles];
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