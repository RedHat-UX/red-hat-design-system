// will remove file in 2627
import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n  width: min-content;\n  min-height: 0;\n  aspect-ratio: 1 / 1;\n}\n\nsvg {\n  overflow: hidden;\n}\n\ncircle {\n  width: 100%;\n  height: 100%;\n  transform-origin: 50% 50%;\n  stroke-linecap: round;\n  stroke-dasharray: 283;\n  stroke-dashoffset: 280;\n}\n\n`;
/**
 * Base spinner class
 * @cssprop {<length>} --pf-c-spinner--diameter                      {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Width                         {@default `3.375rem`}
 * @cssprop {<length>} --pf-c-spinner--Height                        {@default `3.375rem`}
 * @cssprop {<color>}  --pf-c-spinner--Color                         {@default `#06c`}
 * @cssprop {<length>} --pf-c-spinner--m-sm--diameter                {@default `0.625rem`}
 * @cssprop {<length>} --pf-c-spinner--m-md--diameter                {@default `1.125rem`}
 * @cssprop {<length>} --pf-c-spinner--m-lg--diameter                {@default `1.5rem`}
 * @cssprop {<length>} --pf-c-spinner--m-xl--diameter                {@default `3.375rem`}
 * @cssprop {<time>}   --pf-c-spinner--AnimationDuration             {@default `1.4s`}
 * @cssprop {<string>} --pf-c-spinner--AnimationTimingFunction       {@default `linear`}
 * @cssprop {<number>} --pf-c-spinner--stroke-width                  {@default `10`}
 * @cssprop {<color>}  --pf-c-spinner__path--Stroke                  {@default `#06c`}
 * @cssprop {<number>} --pf-c-spinner__path--StrokeWidth             {@default `10`}
 * @cssprop {<string>} --pf-c-spinner__path--AnimationTimingFunction {@default `ease-in-out`}
 */
export class BaseSpinner extends LitElement {
    constructor() {
        super(...arguments);
        /** Preset sizes for the spinner */
        this.size = 'xl';
    }
    render() {
        return html `
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" />
      </svg>
    `;
    }
}
BaseSpinner.styles = [styles];
__decorate([
    property({ reflect: true })
], BaseSpinner.prototype, "size", void 0);
__decorate([
    property({ reflect: true })
], BaseSpinner.prototype, "diameter", void 0);
//# sourceMappingURL=BaseSpinner.js.map