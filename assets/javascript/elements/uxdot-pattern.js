var _UxdotPattern_instances, _UxdotPattern_onChange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { ColorPaletteListConverter, ContextChangeEvent, paletteNames, } from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import { UxdotPatternSSRController } from './uxdot-pattern-ssr-controller.js';
import { css } from "lit";
const styles = css `@import url("/styles/rh-code-block-lightdom.css");:host{container:host/inline-size;display:block;margin-block-start:var(--rh-space-2xl);max-width:56rem}#container{display:grid;grid-template-columns:auto;grid-template-areas:"heading" "controls" "content" "code";gap:var(--rh-space-2xl) var(--rh-space-4xl)}@container host (width >= 530px){#container{grid-template-columns:auto auto;grid-template-areas:"heading controls" "content content" "code code"}}@container host (width >= 992px){#container{grid-template-areas:"heading heading" "controls controls" "content content" "code code"}}#heading{grid-area:heading;display:flex;align-items:center}#description{grid-area:content}::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),h3{margin-block:0!important;font-size:var(--rh-font-size-body-text-lg)!important}#content{display:block;resize:vertical;overflow:auto;grid-area:content;padding:var(--rh-space-lg);border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);background-color:var(--rh-color-surface);color:var(--rh-color-text-primary);border-color:var(--rh-color-border-subtle)}@container host (width > 300px){#content{padding:var(--rh-space-xl)}}@container host (width > 540px){#content{padding:var(--rh-space-4xl)}}#content>*{margin-inline:auto}#color-picker{grid-area:controls;justify-self:flex-end;display:flex;align-items:center;gap:var(--rh-space-lg,16px)}rh-tabs{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);border-radius:var(--rh-border-radius-default);overflow:hidden;grid-area:code}rh-tabs rh-tab-panel{padding:0;border-radius:0}rh-tabs rh-code-block{--rh-border-radius-default:0;--rh-border-width-sm:0px;border-width:0}`;
let UxdotPattern = class UxdotPattern extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotPattern_instances.add(this);
        /** Which color palette to apply to the demo surface */
        this.colorPalette = 'lightest';
        /** The id of the element in shadow DOM which the color picker targets */
        this.target = 'content';
        /** Should the color picker be hidden? */
        this.noColorPicker = false;
        /** Should the code blocks be expanded? */
        this.fullHeight = false;
        /** Which colour palettes should be allowed in the picker? (default: all) */
        this.allow = paletteNames;
        this.ssr = new UxdotPatternSSRController(this);
    }
    update(changed) {
        try {
            super.update(changed);
        }
        catch (e) {
            if (e.message.startsWith('Hydration')) {
                this.updateComplete.then(() => this.requestUpdate());
            }
            throw e;
        }
    }
    render() {
        const { allContent, htmlContent, cssContent, jsContent, hasJs, hasCss } = this.ssr;
        const actionsLabels = html `
      <span slot="action-label-copy">Copy to Clipboard</span>
      <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
      <span slot="action-label-wrap">Toggle line wrap</span>
    `;
        return html `
      <div id="container">
        <div id="heading"><slot name="heading"></slot></div>

        <form id="color-picker"
              ?hidden="${this.noColorPicker}"
              @submit="${(e) => e.preventDefault()}">
          <label for="picker">Color palette</label>
          <rh-context-picker id="picker"
                             @change="${__classPrivateFieldGet(this, _UxdotPattern_instances, "m", _UxdotPattern_onChange)}"
                             value="${this.colorPalette}"
                             target="${this.target}"
                             allow="${this.allow}"></rh-context-picker>
        </form>

        <div id="description"><slot></slot></div>

        <rh-surface id="content">${allContent}</rh-surface>

        <rh-tabs id="code-tabs" class="code-tabs">
          <rh-tab id="html-tab"
                  slot="tab"
                  active>HTML</rh-tab>
          <rh-tab-panel id="html-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${htmlContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="css-tab"
                  slot="tab"
                  .disabled="${!hasCss}">CSS</rh-tab>
          <rh-tab-panel id="css-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${cssContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab id="js-tab"
                  slot="tab"
                  .disabled="${!hasJs}">JS</rh-tab>
          <rh-tab-panel id="js-panel">
            <rh-code-block highlighting="prerendered"
                           actions="copy wrap"
                           .full-height="${this.fullHeight}">
              ${jsContent}
              ${actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
        </rh-tabs>
      </div>
    `;
    }
};
_UxdotPattern_instances = new WeakSet();
_UxdotPattern_onChange = function _UxdotPattern_onChange(event) {
    if (event instanceof ContextChangeEvent) {
        this.colorPalette = event.colorPalette;
    }
};
UxdotPattern.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], UxdotPattern.prototype, "colorPalette", void 0);
__decorate([
    property({ reflect: true })
], UxdotPattern.prototype, "target", void 0);
__decorate([
    property({ reflect: true })
], UxdotPattern.prototype, "src", void 0);
__decorate([
    property({ reflect: true, attribute: 'css-src' })
], UxdotPattern.prototype, "cssSrc", void 0);
__decorate([
    property({ reflect: true, attribute: 'js-src' })
], UxdotPattern.prototype, "jsSrc", void 0);
__decorate([
    property({ type: Boolean, attribute: 'no-color-picker' })
], UxdotPattern.prototype, "noColorPicker", void 0);
__decorate([
    property({ type: Boolean, attribute: 'full-height' })
], UxdotPattern.prototype, "fullHeight", void 0);
__decorate([
    property({ converter: ColorPaletteListConverter })
], UxdotPattern.prototype, "allow", void 0);
__decorate([
    colorContextConsumer()
], UxdotPattern.prototype, "on", void 0);
UxdotPattern = __decorate([
    customElement('uxdot-pattern')
], UxdotPattern);
export { UxdotPattern };
//# sourceMappingURL=uxdot-pattern.js.map