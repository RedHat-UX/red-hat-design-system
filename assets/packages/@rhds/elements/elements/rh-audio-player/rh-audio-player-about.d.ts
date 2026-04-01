import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
/**
 * Provides episode details and speaker attribution for `rh-audio-player`.
 * Use when you need show notes or speaker profiles. Must be placed in
 * the `about` slot. Authors should provide a heading and may include up
 * to two `rh-avatar` elements for attribution. Rendered inside an
 * ARIA dialog panel so screen readers can navigate its content.
 *
 * @summary Displays episode description and speaker attribution
 *
 * @csspart heading - The panel heading container with scrolling overflow.
 * @csspart body - The scrollable description content area.
 * @csspart profile - The speaker profile / avatar area.
 */
export declare class RhAudioPlayerAbout extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Default label content */
    label?: string;
    /** Series this track belongs to, if applicable */
    mediaseries?: string;
    /** Title of audio track */
    mediatitle?: string;
    private content?;
    render(): import("lit-html").TemplateResult<1>;
    set menuLabel(label: string);
    get menuLabel(): string;
    /** Triggers the scrolling text animation on all panel headings that overflow their container. */
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-about': RhAudioPlayerAbout;
    }
}
