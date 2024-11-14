import { LitElement, type TemplateResult } from 'lit';
export declare class PfAvatarLoadEvent extends Event {
    originalEvent: Event;
    constructor(originalEvent: Event);
}
/**
 * An **avatar** is a visual used to represent a user. It may contain an image or a placeholder graphic.
 * @summary For displaying a user's avatar image
 * @fires {PfAvatarLoadEvent} load - when the avatar loads
 * @cssprop [--pf-c-avatar--Width=24px]
 * @cssprop [--pf-c-avatar--Height=24px]
 * @cssprop [--pf-c-avatar--BorderRadius=var(--pf-global--BorderRadius--lg, 128px)]
 * @cssprop [--pf-c-avatar--BorderWidth=0]
 * @cssprop [--pf-c-avatar--BorderColor=var(--pf-global--BorderColor--dark-100, #d2d2d2)]
 * @cssprop [--pf-c-avatar--m-dark--BorderColor=var(--pf-global--palette--black-700, #4f5255)]
 * @cssprop [--pf-c-avatar--m-sm--Width=24px]
 * @cssprop [--pf-c-avatar--m-sm--Height=24px]
 * @cssprop [--pf-c-avatar--m-md--Width=36px]
 * @cssprop [--pf-c-avatar--m-md--Height=36px]
 * @cssprop [--pf-c-avatar--m-lg--Width=72px]
 * @cssprop [--pf-c-avatar--m-lg--Height=72px]
 * @cssprop [--pf-c-avatar--m-xl--Width=28px]
 * @cssprop [--pf-c-avatar--m-xl--Height=28px]
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
