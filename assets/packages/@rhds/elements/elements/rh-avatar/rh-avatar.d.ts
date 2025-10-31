import { LitElement, type PropertyValues } from 'lit';
/**
 * An avatar is a small thumbnail representation of a user.
 *
 * @summary Visually represents a user in a masthead or navigation
 *
 * @alias avatar
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
    /** Places avatar on the left or on top of the text. */
    layout?: 'inline' | 'block';
    /** The type of pattern to display. */
    pattern?: 'squares' | 'triangles';
    /** When true, hides the title and subtitle */
    plain: boolean;
    /** Adds a subtle border to the avatar image */
    variant?: 'bordered';
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
