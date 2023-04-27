import { BaseAvatar } from './BaseAvatar.js';
/**
 * An **avatar** is a visual used to represent a user. It may contain an image or a placeholder graphic.
 *
 * @summary For displaying a user's avatar image
 */
export declare class PfAvatar extends BaseAvatar {
    static readonly styles: import("lit").CSSResult[];
    /** Size of the Avatar */
    size: 'sm' | 'md' | 'lg' | 'xl';
    /** Whether to display a border around the avatar */
    border?: 'light' | 'dark';
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-avatar': PfAvatar;
    }
}
