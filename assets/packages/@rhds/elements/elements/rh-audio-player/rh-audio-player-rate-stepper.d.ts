import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Provides playback rate controls for `rh-audio-player`, allowing users
 * to adjust audio speed between 0.25x and 2x. Renders step buttons
 * flanking a `<select>` dropdown with ARIA labels for screen readers.
 * This element is used internally by `rh-audio-player` and should not
 * be placed independently in user markup.
 *
 * @summary Controls audio playback speed with step buttons and dropdown
 *
 * @fires playback-rate-select - Fired when the user changes the playback
 *        rate, either by clicking step buttons or selecting from the
 *        dropdown. The event's `playbackRate` property contains the new
 *        rate value.
 */
export declare class RhAudioPlayerRateStepper extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static pbrMin;
    private static pbrMax;
    private static pbrStep;
    private static pbrFixed;
    /** Current playback rate multiplier, from 0.25 to 2. */
    playbackRate: number;
    /** Whether the stepper controls are disabled. */
    disabled: boolean;
    /** Accessible label for the rate select dropdown. */
    label?: string;
    /** template for playback rate controls */
    render(): import("lit-html").TemplateResult<1>;
}
export declare class RhAudioPlayerRateSelectEvent extends Event {
    playbackRate: number;
    constructor(playbackRate: number);
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-rate-stepper': RhAudioPlayerRateStepper;
    }
    interface HTMLElementEventMap {
        'playback-rate-select': RhAudioPlayerRateSelectEvent;
        'rh-audio-player-rate-stepper': RhAudioPlayerRateStepper;
    }
}
