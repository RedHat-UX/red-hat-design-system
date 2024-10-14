import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 */
export declare class RhAudioPlayerRateStepper extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static pbrMin;
    private static pbrMax;
    private static pbrStep;
    private static pbrFixed;
    /** Playback rate */
    playbackRate: number;
    /** Playback rate */
    disabled: boolean;
    /** Playback rate */
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
