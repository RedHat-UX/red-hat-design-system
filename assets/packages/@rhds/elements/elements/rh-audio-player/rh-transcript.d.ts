import { LitElement, type TemplateResult } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Provides a synchronized transcript panel for `rh-audio-player`. Use this
 * when you need to display timed captions alongside audio playback. Must
 * be placed in the `transcript` slot. Authors should provide `rh-cue`
 * block elements with `start` and optionally `end` and `voice` attributes.
 * Active cues are highlighted for screen reader and sighted users alike.
 *
 * @summary Displays synchronized, scrollable transcript with download
 *
 * @csspart heading - The panel heading with scrolling text overflow.
 * @csspart toolbar - The toolbar area containing autoscroll and download.
 *
 * @fires transcriptdownload - Fired when the user clicks the download
 *        button. This is a plain `Event` with `bubbles: true` and no
 *        custom detail. The parent `rh-audio-player` handles it to
 *        generate a `.txt` file download of the full transcript.
 */
export declare class RhTranscript extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Custom heading text displayed at the top of the transcript panel. Overridden by the `heading` slot. */
    heading?: string;
    /** Accessible label for the panel, used as the menu item text when no heading slot is provided. */
    label?: string;
    /** Language code for transcript content, used for text direction and localization. */
    lang: string;
    /** Text label shown in the parent player's menu for this panel. */
    menuLabel: string;
    /** Text label for the download button and its tooltip. */
    downloadLabel: string;
    /** Text label for the autoscroll checkbox. */
    autoscrollLabel: string;
    private _autoscroll;
    private _download;
    get downloadText(): string;
    constructor();
    render(): TemplateResult;
    /**
     * Updates cue active states based on the current playback time.
     * @param currentTime elapsed time in seconds
     */
    setActiveCues(currentTime?: number): void;
    /**
     * Sets the total media duration and recalculates cue end times.
     * @param mediaDuration total duration in seconds
     */
    setDuration(mediaDuration: number): void;
    /** Triggers the scrolling text animation on the panel heading if it overflows its container. */
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-transcript': RhTranscript;
    }
}
