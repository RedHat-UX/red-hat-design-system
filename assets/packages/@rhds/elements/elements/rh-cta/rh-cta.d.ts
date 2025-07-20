import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
/**
 * A call to action is styled text representing a link.
 * @summary     A call to action is styled text representing a link.
 *
 * @alias call-to-action
 *
 * @slot
 *              The default slot contains the link text when the `href`
 *              attribute is set. In case there is no href attribute, an anchor
 *              tag (`<a href="...">`) should be the first child inside `rh-cta`
 *              element. Less preferred but allowed for specific use-cases
 *              include: `<button>` (note however that the `button` tag is not
 *              supported for the default CTA styles).
 * @csspart     container - container element for slotted CTA
 * @cssprop     {<color>} [--rh-cta-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color
 * @cssprop     [--rh-cta-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color
 * @cssprop     [--rh-cta-border-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta border color
 * @cssprop     [--rh-cta-hover-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on hover
 * @cssprop     [--rh-cta-hover-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on hover
 * @cssprop     [--rh-cta-hover-border-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta boder color on hover
 * @cssprop     [--rh-cta-focus-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on focus
 * @cssprop     [--rh-cta-focus-background-color=var(--rh-color-brand-red-on-light, #ee0000)]
 *              Sets the cta background color on focus
 * @cssprop     [--rh-cta-focus-container-background-color=transparent]
 *              Sets the cta container background color on focus
 * @cssprop     [--rh-cta-focus-container-outline-color=#0066cc]
 *              Sets the cta container outline color on focus
 * @cssprop     [--rh-cta-focus-border-color=transparent]
 *              Sets the cta border color on focus
 * @cssprop     [--rh-cta-focus-inner-border-color=transparent]
 *              Sets the cta inner border color on focus
 * @cssprop     [--rh-cta-active-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta color on active. Applicable only for secondary variant
 * @cssprop     [--rh-cta-active-background-color=var(--rh-color-brand-red-dark, #be0000)]
 *              Sets the cta background color on active
 * @cssprop     [--rh-cta-active-container-background-color=#0066cc1a]
 *              Sets the cta container background color on active. Applicable only for default variant
 * @cssprop     [--rh-cta-active-inner-border-color=var(--rh-color-text-primary-on-dark, #ffffff)]
 *              Sets the cta inner border color on active
 * @cssprop     [--rh-cta-text-decoration=none]
 *              Sets the cta text decoration
 * @cssprop     [--rh-cta-focus-text-decoration=none]
 *              Sets the cta text decoration on focus
 * @cssprop     [--rh-cta-hover-text-decoration=none]
 *              Sets the cta text decoration on hover
 * @cssprop     [--rh-cta-active-text-decoration=none]
 *              Sets the cta text decoration on active
 */
export declare class RhCta extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
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
    /**
     * When set, overrides the default slot. Use *instead* of a slotted anchor tag
     */
    href?: string;
    /** when `href` is set, the link's `download` attribute */
    download?: string;
    /** when `href` is set, the link's `referrerpolicy` attribute */
    referrerpolicy?: string;
    /** when `href` is set, the link's `rel` attribute */
    rel?: string;
    /** when `href` is set, the link's `target` attribute */
    target?: string;
    /** Icon name */
    icon?: IconNameFor<IconSetName>;
    /** Icon set */
    iconSet: IconSetName;
    scheduleUpdate(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cta': RhCta;
    }
}
