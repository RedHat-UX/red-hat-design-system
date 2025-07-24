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
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
 * @summary Provides background color context for elements placed on top
 *
 * @alias surface
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
        return html `<!--
      The \`<rh-surface>\` element has a single anonymous slot which accepts any content and does not provide additional layout styling
    --><slot id="slot" @slotchange=${__classPrivateFieldGet(this, _RhSurface_instances, "m", _RhSurface_onSlotchange)}></slot>`;
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