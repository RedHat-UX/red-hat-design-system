var _RhSurface_instances, _RhSurface_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import contextStyle from "../../lib/context/color/context-color.css.js";
import { css } from "lit";
const styles = css `:host{display:block;background-color:var(--_context-background-color);color:var(--_context-text)}`;
/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
 *
 * @slot - The `<rh-surface>` element has a single anonymous slot which accepts any content and does not provide additional layout styling
 *
 * @example A surface providing a theme to a spinner
 *          ```html
 *          <rh-surface color-palette="light">
 *            <rh-spinner>Loading...</rh-spinner>
 *          </rh-surface>
 *          ```
 */
let RhSurface = class RhSurface extends LitElement {
    constructor() {
        super(...arguments);
        _RhSurface_instances.add(this);
    }
    render() {
        return html `<slot @slotchange=${__classPrivateFieldGet(this, _RhSurface_instances, "m", _RhSurface_onSlotchange)}></slot>`;
    }
};
_RhSurface_instances = new WeakSet();
_RhSurface_onSlotchange = function _RhSurface_onSlotchange() {
    this.requestUpdate('colorPalette');
};
RhSurface.styles = [contextStyle, styles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhSurface.prototype, "colorPalette", void 0);
RhSurface = __decorate([
    customElement('rh-surface')
], RhSurface);
export { RhSurface };
//# sourceMappingURL=rh-surface.js.map