import { BaseIcon } from './BaseIcon.js';
/**
 * PatternFly Icon component lazy-loads icons and allows custom icon sets
 *
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 */
export declare class PfIcon extends BaseIcon {
    static readonly styles: import("lit").CSSResult[];
    static defaultIconSet: string;
    /** Size of the icon */
    size: 'sm' | 'md' | 'lg' | 'xl';
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-icon': PfIcon;
    }
}
