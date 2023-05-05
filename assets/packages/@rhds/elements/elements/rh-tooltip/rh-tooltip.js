import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { BaseTooltip } from '@patternfly/elements/pf-tooltip/BaseTooltip.js';
import { css } from "lit";
const styles = css `:host([position=left]),:host([position=right]){--_text-alignment:"start"}#rh-container{display:contents;--_floating-arrow-size:var(--rh-tooltip-arrow-size,\n    var(--rh-tooltip__arrow--Width, 11px))}.dark{--rh-tooltip-content-background-color:var(--rh-color-surface-lightest, #ffffff);--rh-tooltip-content-color:var(--rh-color-text-primary-on-light, #151515)}#tooltip{line-height:var(--rh-line-height-body-text, 1.5);max-width:var(--rh-tooltip-max-width,var(--rh-tooltip--MaxWidth,18.75rem));text-align:var(--_text-alignment,center);box-shadow:var(--rh-box-shadow-sm,0 2px 4px 0 rgba(21,21,21,.2));padding:var(--rh-tooltip-content-padding-block-start,var(--rh-tooltip__content--PaddingTop,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-end,var(--rh-tooltip__content--PaddingRight,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-block-end,var(--rh-tooltip__content--PaddingBottom,var(--rh-space-lg,16px))) var(--rh-tooltip-content-padding-inline-start,var(--rh-tooltip__content--PaddingLeft,var(--rh-space-lg,16px)));font-size:var(--rh-tooltip-content-font-size,\n    var(--rh-tooltip__content--FontSize, var(--rh-font-size-body-text-sm, .875rem)));color:var(--rh-tooltip-content-color,var(--rh-tooltip__content--Color,var(--rh-color-text-primary-on-dark,#fff)));background-color:var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-darkest,#151515)))}#tooltip:after{background-color:var(--rh-tooltip-content-background-color,var(--rh-tooltip__content--BackgroundColor,var(--rh-color-surface-darkest,#151515)))}`;
/**
 * Tooltip
 * @summary A tooltip is a floating text area that provides helpful or contextual information on hover, focus, or tap.
 * @slot - Place element content here
 *
 * @cssprop --rh-box-shadow-sm
 * @cssprop --rh-color-surface-darkest
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-space-lg
 * @cssprop --rh-tooltip-arrow-size
 * @cssprop --rh-tooltip-content-background-color
 * @cssprop --rh-tooltip-content-color
 * @cssprop --rh-tooltip-content-font-size
 * @cssprop --rh-tooltip-content-padding-block-end
 * @cssprop --rh-tooltip-content-padding-block-start
 * @cssprop --rh-tooltip-content-padding-inline-end
 * @cssprop --rh-tooltip-content-padding-inline-start
 * @cssprop --rh-tooltip-max-width
 */
let RhTooltip = class RhTooltip extends BaseTooltip {
    constructor() {
        super(...arguments);
        this.position = 'top';
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="rh-container" class="${classMap({ [on]: !!on })}">
        ${super.render()}
      </div>
    `;
    }
};
RhTooltip.version = '{{version}}';
RhTooltip.styles = [...BaseTooltip.styles, styles];
__decorate([
    colorContextConsumer()
], RhTooltip.prototype, "on", void 0);
__decorate([
    property()
], RhTooltip.prototype, "position", void 0);
__decorate([
    property()
], RhTooltip.prototype, "content", void 0);
RhTooltip = __decorate([
    customElement('rh-tooltip')
], RhTooltip);
export { RhTooltip };
//# sourceMappingURL=rh-tooltip.js.map