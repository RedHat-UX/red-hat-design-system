import { LitElement, type TemplateResult } from 'lit';
export declare class PfAvatarLoadEvent extends Event {
    originalEvent: Event;
    constructor(originalEvent: Event);
}
/**
 * An **avatar** is a visual used to represent a user. It may contain an image or a placeholder graphic.
 * @summary For displaying a user's avatar image
 * @alias Avatar
 * @fires {PfAvatarLoadEvent} load - when the avatar loads
 */
export declare class PfAvatar extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** The URL to the user's custom avatar image. */
    src?: string;
    /** The alt text for the avatar image. */
    alt?: string;
    /** Size of the Avatar */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /** Whether to display a border around the avatar */
    border?: 'light' | 'dark';
    /** Whether or not the Avatar image is dark */
    dark: boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-avatar': PfAvatar;
    }
}
