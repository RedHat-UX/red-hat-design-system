var _UxdotDemo_instances, _UxdotDemo_toggleFullscreen;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit-html';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{display:block}iframe{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);height:400px;max-height:var(--height)}#container{--height:825px;display:flex;flex-flow:column;gap:var(--rh-space-sm)}#container:not(:defined){opacity:0}rh-card::part(body),rh-card::part(header){margin:0;border-block-end:var(--rh-border-width-sm) solid var(--rh-color-border-subtle)}rh-card::part(footer){margin-block:var(--rh-space-lg);justify-content:end}rh-card rh-button[slot=footer]{display:inline-block;margin-inline-end:auto}.code-tabs{border:0;border-radius:var(--rh-border-radius-default)}.code-tabs::part(tabs-container){background:light-dark(var(--rh-color-surface-lightest),var(--rh-color-surface-darker))}.code-tabs rh-tab-panel{padding:0;border-radius:0}::slotted(rh-code-block){--rh-border-radius-default:0;--rh-border-width-sm:0px;max-width:100%!important;border-width:0}:host(:fullscreen) #container{height:100vh;justify-content:space-between}:host(:fullscreen) #container iframe{flex:1 1 auto;max-height:unset}:host(:fullscreen) #container rh-card{height:max-content}`;
import { LitElement } from 'lit';
let UxdotDemo = class UxdotDemo extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotDemo_instances.add(this);
    }
    render() {
        return html `
      <div id="container">
        <iframe loading="lazy" title="${this.demoTitle}" src="${this.demoUrl}"></iframe>
        <rh-card>
          <rh-tabs class="code-tabs">
            <rh-tab slot="tab">HTML</rh-tab>
            <rh-tab-panel><slot name="html"></slot></rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel><slot name="css"></slot></rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel><slot name="js"></slot></rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer"
                     variant="tertiary"
                     icon="expand"
                     icon-set="ui"
                     @click="${__classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_toggleFullscreen)}">FullScreen</rh-button>
          <rh-cta slot="footer" href="${this.demoSourceUrl}">View source on GitHub</rh-cta>
          <rh-cta slot="footer" href="${this.demoUrl}">View In Own Tab</rh-cta>
        </rh-card>
      </div>
    `;
    }
};
_UxdotDemo_instances = new WeakSet();
_UxdotDemo_toggleFullscreen = function _UxdotDemo_toggleFullscreen() {
    if (document.fullscreenElement === this) {
        document.exitFullscreen();
    }
    else {
        this.requestFullscreen();
    }
};
UxdotDemo.styles = [styles];
__decorate([
    property()
], UxdotDemo.prototype, "tag", void 0);
__decorate([
    property()
], UxdotDemo.prototype, "demo", void 0);
__decorate([
    property({ attribute: 'demo-title' })
], UxdotDemo.prototype, "demoTitle", void 0);
__decorate([
    property({ attribute: 'demo-url' })
], UxdotDemo.prototype, "demoUrl", void 0);
__decorate([
    property({ attribute: 'demo-source-url' })
], UxdotDemo.prototype, "demoSourceUrl", void 0);
__decorate([
    property({ attribute: 'demo-file-path' })
], UxdotDemo.prototype, "demoFilePath", void 0);
UxdotDemo = __decorate([
    customElement('uxdot-demo')
], UxdotDemo);
export { UxdotDemo };
//# sourceMappingURL=uxdot-demo.js.map