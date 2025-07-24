import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-button/rh-button.js';
export declare class AnnouncementCloseEvent extends Event {
    constructor();
}
/**
 * Announcements are flexible surfaces used to group information in a full width banner layout, traditionally across the top of a page.
 * They are used to announce new features, promos, or news.
 * @summary Arranges content and interactive elements in a layout
 *
 * @alias announcement
 *
 * @fires   {AnnouncementCloseEvent} close
 *          When a user clicks the close/dismiss button on an announcement.
 */
export declare class RhAnnouncement extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /** Sets color context for child components, overrides parent context */
    colorPalette?: ColorPalette;
    /**
     * Make an announcement dismissable
     */
    dismissable: boolean;
    /**
     * Set the position of the image in the announcement on mobile viewports. Possible values are:
     * - `inline-start`
     * - `block-start`
     */
    imagePosition?: 'inline-start' | 'block-start';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-announcement': RhAnnouncement;
    }
}
