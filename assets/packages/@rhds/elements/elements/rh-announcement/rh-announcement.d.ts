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
 * @slot    image
 *          If this slot is used, we expect an image tag with a width and height set.
 *          An icon, svg, or use of the icon component are also valid in this region.
 * @slot    Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot    cta
 *          If this slot is used, we expect a rh-cta component.
 * @fires   {AnnouncementCloseEvent} close
 *          When a user clicks the close/dismiss button on an announcement.
 * @csspart row
 *          The row for the banner. Contains the image and content divs.
 * @csspart image
 *          The image for the banner. Contains the image slot.
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
