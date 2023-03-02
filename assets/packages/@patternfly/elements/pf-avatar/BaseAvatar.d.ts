import { LitElement } from 'lit';
export declare class AvatarLoadEvent extends Event {
    originalEvent: Event;
    constructor(originalEvent: Event);
}
/**
 * Avatar is an element for displaying a user's avatar image.
 *
 *
 * @summary For displaying a user's avatar image
 */
export declare class BaseAvatar extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    /** The URL to the user's custom avatar image. */
    src?: string;
    /** The alt text for the avatar image. */
    alt?: string;
    /** Size of the Avatar */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /** Whether or not the Avatar image is dark */
    dark: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
