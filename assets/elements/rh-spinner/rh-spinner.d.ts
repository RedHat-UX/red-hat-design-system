import type { ColorPalette } from '../../lib/context/color.js';
import { BaseSpinner } from '@patternfly/pfe-spinner/BaseSpinner.js';
export declare type SpinnerSize = ('sm' | 'md' | 'lg');
/**
 * Spinner consists of an animated circle and sometimes a text label, and it indicates that a section is loading.
 *
 * @slot - Optional text label below the animated circle.
 *
 */
export declare class RhSpinner extends BaseSpinner {
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Preset sizes for the spinner
     */
    size: SpinnerSize;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-spinner': RhSpinner;
    }
}
