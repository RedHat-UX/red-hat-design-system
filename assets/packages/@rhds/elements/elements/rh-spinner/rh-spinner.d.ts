import { type ColorPalette } from '../../lib/context/color/provider.js';
import { BaseSpinner } from '@patternfly/elements/pf-spinner/BaseSpinner.js';
export type SpinnerSize = ('sm' | 'md' | 'lg');
/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @slot - Optional text label below the animated circle.
 *
 * @cssprop --rh-color-accent-base-on-dark
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-gray-05
 * @cssprop --rh-color-gray-60
 * @cssprop --rh-font-family-body-text
 * @cssprop --rh-font-size-body-text-lg
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-font-weight-body-text-regular
 * @cssprop --rh-length-2xs
 * @cssprop --rh-length-4xl
 * @cssprop --rh-length-sm
 * @cssprop --rh-length-xs
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-size-icon-01
 * @cssprop --rh-size-icon-04
 * @cssprop --rh-size-icon-06
 * @cssprop --rh-space-lg
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
