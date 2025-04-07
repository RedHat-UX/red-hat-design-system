import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An audio player plays audio clips in the browser and includes other features.
 * @summary Plays audio clips and includes other features
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot subscribe - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-transcript` panel with `rh-cue` elements
 * @cssprop [--rh-audio-player-background-color=var(--rh-color-surface-lightest, #ffffff)] - color of player background -
 * @cssprop [--rh-audio-player-icon-background-color=var(--rh-audio-player-background-color)]
 * @cssprop [--rh-audio-player-border-color=var(--rh-color-border-subtle-on-light, #d2d2d2)] - color of player border -
 * @cssprop [--rh-audio-player-secondary-text-color=var(--rh-color-text-secondary-on-light, #6a6e73)] - player secondary text color -
 * @cssprop [--rh-audio-player-secondary-opacity=0.75] - player secondary opacity used for partially faded elements -
 * @cssprop [--rh-audio-player-range-thumb-color=var(--rh-color-accent-brand-on-light, #ee0000)] - color of time and volume range slider thumb -
 * @cssprop [--rh-tooltip-content-padding-block-start=var(--rh-space-md, 8px)] - padding top on tooltips -
 * @cssprop [--rh-tooltip-content-padding-block-end=var(--rh-space-md, 8px)] - padding bottom on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-start=var(--rh-space-md, 8px)] - padding left on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-end=var(--rh-space-md, 8px)] - padding right on tooltips -
 * @csspart panel - expandable panel
 * @csspart toolbar - main controls
 * @csspart about - about the episode panel
 * @csspart subscribe - subscribe panel
 * @csspart transcript - transcript panel
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
