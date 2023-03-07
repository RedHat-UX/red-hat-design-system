import { LitElement, type PropertyValues } from 'lit';
/**
 * An Avatar is a placeholder graphic for a photo or an image that is placed
 * to the left or on top of text.
 *
 *
 * @summary  An avatar is a visual used to represent a user.
 *
 * @slot          - The subject's name
 * @slot subtitle - auxiliary information about the subject, e.g. job title
 * @cssprop {<color>[]} --rh-avatar-colors list of colors to use when generating avatars
 * @cssprop {<length>}  --rh-avatar-size   size of the avatar. Use icon tokens. {@default 64px}
 *
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
