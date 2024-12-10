var _RhSurface_instances, _RhSurface_onSlotchange;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextProvider } from '@rhds/elements/lib/context/color/provider.js';
import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';
import { css } from "lit";
const styles = css `:host{display:block;background-color:var(--rh-color-surface)}#slot{color:var(--rh-color-text-primary)}.on.dark,.on.light{--rh-color-surface:unset}#slot.palette-lightest{--rh-color-surface:var(--rh-color-surface-lightest,#fff)}#slot.palette-lighter{--rh-color-surface:var(--rh-color-surface-lighter,#f2f2f2)}#slot.palette-light{--rh-color-surface:var(--rh-color-surface-light,#e0e0e0)}#slot.palette-dark{--rh-color-surface:var(--rh-color-surface-dark,#383838)}#slot.palette-darker{--rh-color-surface:var(--rh-color-surface-darker,#1f1f1f)}#slot.palette-darkest{--rh-color-surface:var(--rh-color-surface-darkest,#151515)}`;
import { classMap } from 'lit/directives/class-map.js';
/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
 *
 * @summary Provides background color context for elements placed on top
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
        const { colorPalette = 'lightest' } = this;
        const on = colorPalette?.replace(/e(st|r)/, '') ?? 'light';
        return html `<slot id="slot"
                      class="${classMap({
            on: true,
            [on]: true,
            [`palette-${colorPalette}`]: true,
        })}"
                      @slotchange=${__classPrivateFieldGet(this, _RhSurface_instances, "m", _RhSurface_onSlotchange)}></slot>`;
    }
};
_RhSurface_instances = new WeakSet();
_RhSurface_onSlotchange = function _RhSurface_onSlotchange() {
    this.requestUpdate('colorPalette');
};
RhSurface.styles = [styles, consumerStyles];
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhSurface.prototype, "colorPalette", void 0);
RhSurface = __decorate([
    customElement('rh-surface')
], RhSurface);
export { RhSurface };
//# sourceMappingURL=rh-surface.js.map