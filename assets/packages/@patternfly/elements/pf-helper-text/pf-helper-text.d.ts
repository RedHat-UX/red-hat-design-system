import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * Displays contextual feedback for form fields with optional icon and status color.
 *
 * @slot icon - Optional custom icon to override the default icon.
 * @slot - Default slot for the helper text content.
 *
 * @fires icon-load - Fired when the icon successfully loads.
 * @fires icon-error - Fired if loading the icon fails.
 *
 * @csspart icon - The container for the icon.
 * @csspart text - The container for the text.
 */
export declare class PfHelperText extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Defines the helper text status and its corresponding color and icon.
     */
    variant: 'default' | 'success' | 'warning' | 'error' | 'indeterminate';
    /**
     * Custom icon name to override the default icon.
     * Requires `<pf-icon>` to be imported.
     */
    icon?: string;
    /**
     * Icon set for custom icons (e.g., 'fas', 'patternfly').
     */
    iconSet?: string;
    /**
     * Determine the effective icon to display.
     */
    private get _resolvedIcon();
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-helper-text': PfHelperText;
    }
}
