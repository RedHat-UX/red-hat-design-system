import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { BaseTooltip } from '@patternfly/elements/pf-tooltip/BaseTooltip.js';
/**
 * A tooltip is a floating text area that provides helpful or contextual information on hover, focus, or tap.
 * @summary Reveals a small area of information on hover
 *
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
export declare class RhTooltip extends BaseTooltip {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    private on?;
    position: Placement;
    content?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tooltip': RhTooltip;
    }
}
