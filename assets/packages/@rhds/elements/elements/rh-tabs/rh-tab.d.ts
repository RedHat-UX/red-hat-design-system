import { BaseTab } from '@patternfly/elements/pf-tabs/BaseTab.js';
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - `<button>` element
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @cssprop --rh-border-width-lg
 * @cssprop --rh-border-width-md
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-brand-on-dark
 * @cssprop --rh-color-accent-brand-on-light
 * @cssprop --rh-color-border-interactive-on-dark
 * @cssprop --rh-color-border-interactive-on-light
 * @cssprop --rh-color-surface-dark
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-color-white
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-md
 * @cssprop --rh-space-xl
 *
 * @fires { TabExpandEvent } tab-expand - when a tab expands
 */
export declare class RhTab extends BaseTab {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color theme based on parent context
     */
    private on?;
    active: boolean;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab': RhTab;
    }
}
