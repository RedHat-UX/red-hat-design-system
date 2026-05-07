import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-button/rh-button.js';
/**
 * Event fired when a user dismisses an announcement by clicking the close
 * button. The event is cancelable; calling `preventDefault()` on it will
 * prevent the announcement from being removed from the DOM: users must
 * ensure that an appropriate UI (e.g. a confirm dialog) appears.
 */
export declare class AnnouncementCloseEvent extends Event {
    constructor();
}
/**
 * Announcements are flexible surfaces used to group information in a full width
 * banner layout, traditionally across the top of a page. They are used to
 * announce new features, promos, or news. Use `dismissable` to add a close
 * button. Supports `color-palette` for light/dark themes. Keyboard users
 * should be able to tab to and activate interactive elements. Slotted content
 * provides screen reader context and should include meaningful text.
 *
 * @summary Full-width promotional or informational banner
 *
 * @fires {AnnouncementCloseEvent} close - Fires when the user clicks the dismiss button.
 *        Cancelling this event prevents the element from being removed from the page.
 *        When cancelling the event, you must ensure that some UI appears - e.g. a confirm
 *        dialog - to avoid confusing the user with a close button that does nothing.
 */
export declare class RhAnnouncement extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /**
     * Sets the color context for child components, overriding any inherited
     * parent context. Valid values include `light`, `dark`, and other
     * palette names defined by the design system. Determines surface and
     * text colors. Should contrast with adjacent surfaces (e.g., avoid
     * using a dark announcement above a dark navigation).
     */
    colorPalette?: ColorPalette;
    /**
     * When true, renders a close button that allows the user to dismiss the
     * announcement. Pressing Enter or Space on the close button fires a
     * cancelable `close` event. If the event is not canceled, the element is
     * removed from the DOM.
     */
    dismissable: boolean;
    /**
     * Controls the position of the slotted image on mobile viewports.
     * `inline-start` keeps the image beside the body text; `block-start`
     * places it above. On wider viewports (768px+), images always appear
     * inline. When unset, the image appears above content on mobile.
     */
    imagePosition?: 'inline-start' | 'block-start';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-announcement': RhAnnouncement;
    }
}
