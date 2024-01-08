import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
export interface CtaData {
    href?: string;
    text?: string;
    title?: string;
    color?: string;
    type?: string;
}
/**
 * A call to action is a styled link that entices users to make a selection.
 *
 * @summary     Directs users to other pages or displays extra content
 * @slot
 *              We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but
 *              allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the
 *              default CTA styles).
 * @attr        color-palette
 *              [**Deprecated**] intended for use in elements that have slotted descendants, will be removed in a future release.
 *              - Sets color palette, which affects the element's styles as well as descendants' color theme. Overrides
 *              parent color context. Your theme will influence these colors so check there first if you are seeing inconsistencies.
 *              See [CSS Custom Properties](#css-custom-properties) for default values.
 *              {@deprecated color-palette intended for usage in elements that have slotted descendants}
 * @csspart     container - container element for slotted CTA
 * @cssprop     {<color>} --rh-cta-color
 *              Sets the cta color
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-background-color
 *              Sets the cta background color
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-border-color
 *              Sets the cta border color
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-hover-color
 *              Sets the cta color on hover
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-hover-background-color
 *              Sets the cta background color on hover
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-hover-border-color
 *              Sets the cta boder color on hover
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-focus-color
 *              Sets the cta color on focus
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-focus-background-color
 *              Sets the cta background color on focus
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-focus-container-background-color
 *              Sets the cta container background color on focus
 *              {@default #0066cc1a}
 * @cssprop     --rh-cta-focus-border-color
 *              Sets the cta border color on focus
 *              {@default `var(--rh-color-brand-red-on-light, #ee0000)`}
 * @cssprop     --rh-cta-focus-inner-border-color
 *              Sets the cta inner border color on focus
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-active-color
 *              Sets the cta color on active. Applicable only for secondary variant
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-active-background-color
 *              Sets the cta background color on active
 *              {@default `var(--rh-color-brand-red-dark, #be0000)`}
 * @cssprop     --rh-cta-active-container-background-color
 *              Sets the cta container background color on active. Applicable only for default variant
 *              {@default #0066cc1a}
 * @cssprop     --rh-cta-active-inner-border-color
 *              Sets the cta inner border color on active
 *              {@default `var(--rh-color-text-primary-on-dark, #ffffff)`}
 * @cssprop     --rh-cta-text-decoration
 *              Sets the cta text decoration
 *              {@default none}
 * @cssprop     --rh-cta-focus-text-decoration
 *              Sets the cta text decoration on focus
 *              {@default none}
 * @cssprop     --rh-cta-hover-text-decoration
 *              Sets the cta text decoration on hover
 *              {@default none}
 * @cssprop     --rh-cta-active-text-decoration
 *              Sets the cta text decoration on active
 *              {@default none}
 */
export declare class RhCta extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Indicates the importance of this call-to-action in the context of the page.
     * Will also influence how the call-to-action is styled.
     *   - **Primary**: Use for the primary or most important link. This variant is the highest in
     *       hierarchy and can also be used to play a video in a Modal or large container.
     *   - **Secondary**: Use for secondary or general links. This variant is lower in hierarchy than
     *       the Primary variant and can be used multiple times in the same container or layout.
     *   - **Brick**: Use to group links together. Only the Brick variant can stretch to fit a
     *       container or grid, otherwise the text label padding in other variants stays the same.
     *   - Default (no variant): Use for tertiary or the least important links. This variant is the
     *       lowest in hierarchy and can be used multiple times in the same container or layout.
     */
    variant?: 'primary' | 'secondary' | 'brick';
    icon?: string;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /** The slotted `<a>` or `<button>` element */
    cta: HTMLAnchorElement | HTMLButtonElement | null;
    /**
     * @deprecated do not use the color-palette attribute: Use themable containers (e.g. rh-surface or rh-card) instead
     */
    colorPalette?: ColorPalette;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cta': RhCta;
    }
}
