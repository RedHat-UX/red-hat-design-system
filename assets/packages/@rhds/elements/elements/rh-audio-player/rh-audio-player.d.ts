import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An audio player plays audio clips in the browser and includes other features.
 * @summary Plays audio clips and includes other features
 *
 * @alias audio-player
 *
 */
export declare class RhAudioPlayer extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    static enUS: {
        play: string;
        pause: string;
        seek: string;
        rewind: string;
        advance: string;
        speed: string;
        mute: string;
        unmute: string;
        volume: string;
        menu: string;
        close: string;
        about: string;
        subscribe: string;
        transcript: string;
        autoscroll: string;
        download: string;
    };
    /**  Audio's series name, e.g. Podcast series. */
    mediaseries?: string;
    /**  Audio's title, e.g. Podcast episode title. */
    mediatitle?: string;
    /**
     * Layout:
     *   - `mini` (default): minimal controls: play/pause, range; volume and other controls hidden behind menu
     *   - `compact`: artwork and more controls: time, skip, volume
     *   - `compact-wide`: like compact but full width
     *   - `full`: maximal controls and artwork
     */
    layout: 'mini' | 'compact' | 'compact-wide' | 'full';
    /** URL to audio's artwork */
    poster?: string;
    /** Playback volume */
    volume: number;
    /** Playback rate */
    playbackRate: number;
    expanded: boolean;
    lang: string;
    microcopy: {};
    /** Element's color palette */
    colorPalette?: ColorPalette;
    private _mediaseries?;
    private _mediatitle?;
    private _transcripts?;
    private _abouts?;
    private _subscribe?;
    /** elapsed time in seconds */
    get currentTime(): number;
    set currentTime(seconds: number);
    /** total time in seconds */
    get duration(): number;
    /** whether audio is muted */
    get muted(): boolean;
    /** whether media is paused */
    get paused(): boolean;
    /** media status */
    get readyState(): number;
    protected getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): Promise<void>;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Mutes media volume
     */
    mute(): void;
    /**
     * Unmutes media volume
     */
    unmute(): void;
    /**
     * Pauses playback
     */
    pause(): void | undefined;
    /**
     * Starts or resumes playback
     */
    play(): Promise<void | undefined>;
    /**
     * Seeks media to a given point in seconds
     * @param seconds
     */
    seek(seconds: number): void;
    /**
     * Seeks media a given number of secons from current elapsed time
     * @param seconds
     */
    seekFromCurrentTime(seconds?: number): void;
    /**
     * Rewinds media by 15 seconds (default)
     * @param by number of seconds to rewind
     */
    rewind(by?: number): void;
    /**
     * Advances media by 15 seconds (default)
     * @param by number of seconds to advance
     */
    forward(by?: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player': RhAudioPlayer;
    }
}
