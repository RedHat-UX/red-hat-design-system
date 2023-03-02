var _RhContextProvider_instances, _RhContextProvider_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const contextStyle = css `:host(:is([color-palette^=dark])){--context:dark;--rh-context-text:var(--rh-context-dark-color-text, #ffffff);--rh-context-text-muted:var(--rh-context-dark-color-text-muted, #d2d2d2);--rh-context-link:var(--rh-context-dark-color-text-link, #73bcf7);--rh-context-link-hover:var(--rh-context-dark-color-text-link-hover, #bee1f4);--rh-context-link-focus:var(--rh-context-dark-color-text-link-focus, #bee1f4);--rh-context-link-visited:var(--rh-context-dark-color-text-link-visited, #a18fff);--rh-context-link-visited-hover:var(--rh-context-dark-color-text-link-visited-hover, #cbc1ff)}:host(:is([color-palette^=light],[color-palette=base])){--context:light;--rh-context-text:var(--rh-context-light-color-text, #151515);--rh-context-text-muted:var(--rh-context-light-color-text-muted, #6a6e73);--rh-context-link:var(--rh-context-light-color-text-link, #0066cc);--rh-context-link-hover:var(--rh-context-light-color-text-link-hover, #004080);--rh-context-link-focus:var(--rh-context-light-color-text-link-focus, #004080);--rh-context-link-visited:var(--rh-context-light-color-text-link-visited, #6753ac);--rh-context-link-visited-hover:var(--rh-context-light-color-text-link-visited-hover, #1f0066)}:host(:is([color-palette=lightest])){--rh-context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=lighter])){--rh-context-background-color:var(--rh-color-surface-lighter, #f5f5f5)}:host(:is([color-palette=light])){--rh-context-background-color:var(--rh-color-surface-light, #f0f0f0)}:host(:is([color-palette=base])){--rh-context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=dark])){--rh-context-background-color:var(--rh-color-surface-dark, #3c3f42)}:host(:is([color-palette=darker])){--rh-context-background-color:var(--rh-color-surface-darker, #212427)}:host(:is([color-palette=darkest])){--rh-context-background-color:var(--rh-color-surface-darkest, #151515)}`;
const style = css `:host{display:block;background-color:var(--rh-context-background-color);color:var(--rh-context-text)}`;
let RhContextProvider = class RhContextProvider extends LitElement {
    constructor() {
        super(...arguments);
        _RhContextProvider_instances.add(this);
    }
    render() {
        return html `<slot @slotchange=${__classPrivateFieldGet(this, _RhContextProvider_instances, "m", _RhContextProvider_onSlotchange)}></slot>`;
    }
};
_RhContextProvider_instances = new WeakSet(), _RhContextProvider_onSlotchange = function _RhContextProvider_onSlotchange() {
    this.requestUpdate('colorPalette');
};
RhContextProvider.styles = [contextStyle, style];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhContextProvider.prototype, "colorPalette", void 0);
RhContextProvider = __decorate([
    customElement('rh-context-provider')
], RhContextProvider);
export { RhContextProvider };
//# sourceMappingURL=rh-context-provider.js.map