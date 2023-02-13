import { BaseAvatar } from './BaseAvatar.js';
/**
 * Avatar is an element for displaying a user's avatar image.
 *
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
