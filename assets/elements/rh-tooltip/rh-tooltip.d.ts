import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import type { ColorTheme } from '@patternfly/pfe-core';
import { BaseTooltip } from '@patternfly/pfe-tooltip/BaseTooltip.js';
/**
 * Tooltip
 * @slot - Place element content here
 */
export declare class RhTooltip extends BaseTooltip {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    on: ColorTheme;
    position: Placement;
    content?: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tooltip': RhTooltip;
    }
}
