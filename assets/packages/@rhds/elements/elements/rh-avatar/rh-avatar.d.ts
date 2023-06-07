import { LitElement, type PropertyValues } from 'lit';
/**
 * An avatar is a small thumbnail representation of a user.
 *
 * @summary  An avatar is a small thumbnail representation of a user.
 *
 * @slot name     - The subject's name
 * @slot subtitle - auxiliary information about the subject, e.g. job title
 * @cssprop {<color>+} --rh-avatar-colors                 - List of colors to use when generating avatars
 * @cssprop {<length>} --rh-avatar-size                   - Size of the avatar, {@default 64px}
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-interactive-blue-darker
 * @cssprop --rh-color-interactive-purple-darker
 * @cssprop --rh-color-interactive-blue-darkest
 * @cssprop --rh-color-interactive-blue-lighter
 * @cssprop --rh-color-interactive-purple-lighter
 * @cssprop --rh-color-interactive-blue-lightest
 * @cssprop --rh-font-weight-heading-medium
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-font-weight-heading-regular
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-space-lg
 * @cssprop --rh-size-icon-06
 * @cssprop --rh-border-radius-pill
 */
export declare class RhAvatar extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /**
     * The URL to the user's custom avatar image.
     *
     * It will be displayed instead of a random pattern.
     */
    src?: string;
    /**
     * The user's name, either given name and family name, or username.
     *
     * When displaying a pattern, the name will be used to seed the pattern generator.
     */
    name?: string;
    /** The auxiliary information about the user, e.g. job title */
    subtitle?: string;
    /** The type of pattern to display. */
    layout?: 'inline' | 'block';
    /** The type of pattern to display. */
    pattern?: 'squares' | 'triangles';
    /** When true, hides the title and subtitle */
    plain: boolean;
    private on?;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): Promise<void>;
    updatePattern(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-avatar': RhAvatar;
    }
}
