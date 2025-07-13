var _UxdotDemo_instances, _a, _UxdotDemo_iframe_get, _UxdotDemo_toggleFullscreen, _UxdotDemo_reloadIframe, _UxdotDemo_initIframe, _UxdotDemo_loadedPromises, _UxdotDemo_getDemoElement;
var UxdotDemo_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit-html';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `:host{display:block}iframe{border:var(--rh-border-width-sm) solid var(--rh-color-border-subtle);height:400px;max-height:var(--height);width:100%;box-sizing:border-box}#container{--height:825px;display:flex;flex-direction:column;gap:var(--rh-space-2xl)}#container:not(:defined){opacity:0}#code::part(container){box-sizing:border-box}#code::part(body),#code::part(header){margin:0;border-block-end:var(--rh-border-width-sm) solid var(--rh-color-border-subtle)}#code::part(footer){margin:var(--rh-space-lg);justify-content:start}#code rh-button[slot=footer]{display:inline-block}#code a[slot=footer]{display:inline-flex;gap:var(--rh-space-sm);padding-inline:calc(var(--rh-space-lg)*.75) var(--rh-space-lg);padding-block:var(--rh-space-sm);text-decoration:none}#preview{display:flex;flex-direction:column}#knobs-drawer{display:none}:host([attribute-knobs]) iframe{border-end-start-radius:0;border-end-end-radius:0}:host([attribute-knobs]) #knobs-drawer{position:relative;display:block;margin-block-start:-1px;border-end-start-radius:var(--rh-border-radius-default);border-end-end-radius:var(--rh-border-radius-default)}:host([attribute-knobs]) #knobs{display:grid;grid-template-columns:1fr;gap:var(--rh-space-2xl)}@media (min-width:768px){:host([attribute-knobs]) #knobs{grid-template-columns:1fr 1fr}}@media (min-width:992px){:host([attribute-knobs]) #knobs{grid-template-columns:repeat(3,1fr)}}@media (min-width:1200px){:host([attribute-knobs]) #knobs{grid-template-columns:repeat(4,1fr)}}:host([attribute-knobs]) #code{height:auto}:host([attribute-knobs]) #code::part(body){height:100%}:host([attribute-knobs]) .code-tabs{border:0;border-radius:var(--rh-border-radius-default)}:host([attribute-knobs]) .code-tabs::part(tabs-container){background:light-dark(var(--rh-color-surface-lightest),var(--rh-color-surface-darker))}:host([attribute-knobs]) .code-tabs rh-tab-panel{padding:0;border-radius:0}:host([attribute-knobs]) ::slotted(rh-code-block){--rh-border-radius-default:0;--rh-border-width-sm:0px;max-width:100%!important;border-width:0}:host([attribute-knobs]) :host(:fullscreen) #container{height:100vh;justify-content:space-between}:host([attribute-knobs]) :host(:fullscreen) #container iframe{flex:1 1 auto;max-height:unset}:host([attribute-knobs]) :host(:fullscreen) #container #code{height:max-content}`;
import { isServer, LitElement } from 'lit';
let UxdotDemo = UxdotDemo_1 = _a = class UxdotDemo extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotDemo_instances.add(this);
        this.attributeKnobs = [];
        _UxdotDemo_loadedPromises.set(this, new WeakMap());
    }
    render() {
        return html `
      <div id="container">
        <div id="preview">
          <iframe loading="lazy"
                  style="opacity: 0"
                  onload="this.style.opacity=1"
                  title="${this.demoTitle}"
                  src="${this.demoUrl}"></iframe>
          <rh-disclosure id="knobs-drawer" summary="Edit element properties">
            <div id="knobs" role="list"><slot name=knobs></slot></div>
          </rh-disclosure>
        </div>
        <rh-card id="code"
                 ssr-hint-has-slotted-default
                 ssr-hint-has-slotted="footer">
          <rh-tabs class="code-tabs" active-index="0">
            <rh-tab slot="tab" active>HTML</rh-tab>
            <rh-tab-panel><slot name="html"></slot></rh-tab-panel>
            <rh-tab slot="tab">CSS</rh-tab>
            <rh-tab-panel><slot name="css"></slot></rh-tab-panel>
            <rh-tab slot="tab">JS</rh-tab>
            <rh-tab-panel><slot name="js"></slot></rh-tab-panel>
          </rh-tabs>
          <rh-button slot="footer"
                     variant="link"
                     icon="expand"
                     icon-set="ui"
                     @click="${__classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_toggleFullscreen)}">View fullscreen</rh-button>
          <rh-button slot="footer"
                     variant="link"
                     icon="refresh"
                     icon-set="ui"
                     @click="${__classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_reloadIframe)}">Reload</rh-button>
          <a slot="footer" href="${this.demoSourceUrl}">View source on GitHub <rh-icon set="ui" icon="code"></rh-icon></a></rh-cta>
          <a slot="footer" href="${this.demoUrl}" target="_blank">View in new window <rh-icon set="ui" icon="duplicate"></rh-icon></a></rh-cta>
        </rh-card>
      </div>
    `;
    }
    firstUpdated() {
        __classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_initIframe).call(this);
    }
    async setDemoElementAttribute(name, value) {
        await this.updateComplete;
        const element = await __classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_getDemoElement).call(this);
        if (value === null || value === '') {
            element.removeAttribute(name);
        }
        else if (typeof value === 'boolean') {
            element.toggleAttribute(name, value);
        }
        else {
            element.setAttribute(name, value);
        }
        await element.updateComplete;
        const htmlSlot = this.shadowRoot.querySelector('slot[name=html]');
        const [htmlBlock] = htmlSlot.assignedElements();
        htmlBlock.setAttribute('highlighting', 'client');
        htmlBlock.setAttribute('language', 'html');
        htmlBlock.toggleAttribute('wrap', true);
        await htmlBlock.updateComplete;
        htmlBlock.innerHTML = `<script type="text/html">${element.outerHTML}</script>`;
        for (const knob of this.querySelectorAll('uxdot-knob-attribute')) {
            knob.requestUpdate();
        }
    }
    async getDemoElementAttribute(name) {
        await this.updateComplete;
        const element = await __classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_getDemoElement).call(this);
        return element.getAttribute(name);
    }
};
_UxdotDemo_loadedPromises = new WeakMap();
_UxdotDemo_instances = new WeakSet();
_UxdotDemo_iframe_get = function _UxdotDemo_iframe_get() {
    const iframe = this.shadowRoot?.querySelector('iframe');
    if (!iframe) {
        throw new Error('iframe not found');
    }
    return iframe;
};
_UxdotDemo_toggleFullscreen = function _UxdotDemo_toggleFullscreen() {
    if (document.fullscreenElement === this) {
        document.exitFullscreen();
    }
    else {
        this.requestFullscreen();
    }
};
_UxdotDemo_reloadIframe = function _UxdotDemo_reloadIframe() {
    this.shadowRoot?.querySelector('iframe')?.contentWindow?.location.reload();
    __classPrivateFieldGet(this, _UxdotDemo_instances, "m", _UxdotDemo_initIframe).call(this);
};
_UxdotDemo_initIframe = async function _UxdotDemo_initIframe() {
    if (!__classPrivateFieldGet(this, _UxdotDemo_loadedPromises, "f").has(__classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow)) {
        __classPrivateFieldGet(this, _UxdotDemo_loadedPromises, "f").set(__classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow, new Promise(resolve => __classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow?.addEventListener('DOMContentLoaded', () => resolve())));
    }
    await __classPrivateFieldGet(this, _UxdotDemo_loadedPromises, "f").get(__classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow);
    if (!isServer && this.demo === this.tag && !UxdotDemo_1.tagsWithFullWidthDemos.has(this.tag)) {
        const { contentDocument } = __classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get);
        if (contentDocument) {
            const style = contentDocument.createElement('style');
            style.textContent = /* css */ `
          body {
            padding: var(--rh-space-3xl, 48px);
          }
        `;
            contentDocument.body.append(style);
        }
    }
};
_UxdotDemo_getDemoElement = async function _UxdotDemo_getDemoElement() {
    await __classPrivateFieldGet(this, _UxdotDemo_loadedPromises, "f").get(__classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow);
    const element = __classPrivateFieldGet(this, _UxdotDemo_instances, "a", _UxdotDemo_iframe_get).contentWindow?.document.querySelector(this.tag);
    if (element) {
        return element;
    }
    else {
        throw new Error(`element ${this.tag} not found`);
    }
};
UxdotDemo.styles = [styles];
/** For these tags, do not center the primary-demo content in the frame */
UxdotDemo.tagsWithFullWidthDemos = new Set([
    'rh-back-to-top',
    'rh-footer',
    'rh-jump-links',
    'rh-navigation-primary',
    'rh-navigation-secondary',
    'rh-subnav',
]);
__decorate([
    property()
], UxdotDemo.prototype, "tag", void 0);
__decorate([
    property()
], UxdotDemo.prototype, "demo", void 0);
__decorate([
    property({
        attribute: 'attribute-knobs',
        converter: {
            fromAttribute(str) {
                return str?.split(/,|\s/) ?? [];
            },
        },
    })
], UxdotDemo.prototype, "attributeKnobs", void 0);
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
UxdotDemo = UxdotDemo_1 = __decorate([
    customElement('uxdot-demo')
], UxdotDemo);
export { UxdotDemo };
//# sourceMappingURL=uxdot-demo.js.map