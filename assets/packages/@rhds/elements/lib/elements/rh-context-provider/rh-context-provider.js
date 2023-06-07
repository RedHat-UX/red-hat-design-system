var _RhContextProvider_instances, _RhContextProvider_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextProvider } from '../../context/color/provider.js';
import { css } from "lit";
const contextStyle = css `:host(:is([color-palette^=dark])){--context:dark;--_context-text:var(--rh-color-text-primary-on-dark, #ffffff)}:host(:is([color-palette^=light],[color-palette=base])){--context:light;--_context-text:var(--rh-color-text-primary-on-light, #151515)}:host(:is([color-palette=lightest])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=lighter])){--_context-background-color:var(--rh-color-surface-lighter, #f2f2f2)}:host(:is([color-palette=light])){--_context-background-color:var(--rh-color-surface-light, #e0e0e0)}:host(:is([color-palette=base])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=dark])){--_context-background-color:var(--rh-color-surface-dark, #383838)}:host(:is([color-palette=darker])){--_context-background-color:var(--rh-color-surface-darker, #1f1f1f)}:host(:is([color-palette=darkest])){--_context-background-color:var(--rh-color-surface-darkest, #151515)}`;
const style = css `:host{display:block;background-color:var(--_context-background-color);color:var(--_context-text)}`;
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