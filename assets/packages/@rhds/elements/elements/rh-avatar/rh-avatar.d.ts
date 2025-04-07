import { LitElement, type PropertyValues } from 'lit';
/**
 * An avatar is a small thumbnail representation of a user.
 * @summary Visually represents a user in a masthead or navigation
 * @slot                                       - The subject's name
 * @slot subtitle                              - auxiliary information about the subject, e.g. job title
 * @cssprop {<color>+} --rh-avatar-colors      - List of colors to use when generating avatars
 * @cssprop {<length>} [--rh-avatar-size=64px] - Size of the avatar,
 */
export declare class RhAvatar extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
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
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): Promise<void>;
    updatePattern(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-avatar': RhAvatar;
    }
}
