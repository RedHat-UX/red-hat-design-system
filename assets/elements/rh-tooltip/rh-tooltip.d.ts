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
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tooltip': RhTooltip;
    }
}
