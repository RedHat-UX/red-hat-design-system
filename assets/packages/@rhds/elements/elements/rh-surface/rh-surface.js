var _RhSurface_instances, _RhSurface_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorPalettes } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;color:var(--rh-color-text-primary);background-color:var(--rh-color-surface)}`;
/**
 * A surface provides color context to descendants via `color-palette`.
 * Authors must set a `color-palette` and should use surface only when
 * containers like `rh-card` are not appropriate. Each palette provides
 * WCAG-compliant contrast when using the default theme. Surface is
 * non-interactive: Tab and focus pass through to focusable children.
 * Users of AT perceive no additional semantics from this element.
 *
 * @summary Provides background color and theming context for children
 */
let RhSurface = class RhSurface extends LitElement {
    constructor() {
        super(...arguments);
        _RhSurface_instances.add(this);
    }
    render() {
        return html `<!-- Accepts any content. --><slot id="slot" @slotchange=${__classPrivateFieldGet(this, _RhSurface_instances, "m", _RhSurface_onSlotchange)}></slot>`;
    }
};
_RhSurface_instances = new WeakSet();
_RhSurface_onSlotchange = function _RhSurface_onSlotchange() {
    this.requestUpdate('colorPalette');
};
RhSurface.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'color-palette' })
], RhSurface.prototype, "colorPalette", void 0);
RhSurface = __decorate([
    customElement('rh-surface'),
    colorPalettes,
    themable
], RhSurface);
export { RhSurface };
//# sourceMappingURL=rh-surface.js.map