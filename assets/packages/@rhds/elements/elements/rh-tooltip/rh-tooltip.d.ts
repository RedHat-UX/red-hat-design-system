import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { BaseTooltip } from '@patternfly/elements/pf-tooltip/BaseTooltip.js';
/**
 * A tooltip is a floating text area that provides helpful or contextual information on hover, focus, or tap.
 * @summary Reveals a small area of information on hover
 *
 * @slot - Place element content here
 *
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
