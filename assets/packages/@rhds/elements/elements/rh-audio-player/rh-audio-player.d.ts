import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import '../rh-surface/rh-surface.js';
import '../rh-tooltip/rh-tooltip.js';
/**
 * An audio player plays audio clips in the browser and includes other features.
 * @summary Plays audio clips and includes other features
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot subscribe - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-transcript` panel with `rh-cue` elements
 * @cssprop --rh-audio-player-background-color - color of player background - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-audio-player-icon-background-color {@default var(--rh-audio-player-background-color)}
 * @cssprop --rh-audio-player-border-color - color of player border - {@default var(--rh-color-border-subtle-on-light, #d2d2d2)}
 * @cssprop --rh-audio-player-secondary-text-color - player secondary text color - {@default var(--rh-color-text-secondary-on-light, #6a6e73)}
 * @cssprop --rh-audio-player-secondary-opacity - player secondary opacity used for partially faded elements - {@default 0.75}
 * @cssprop --rh-audio-player-range-thumb-color - color of time and volume range slider thumb - {@default var(--rh-color-accent-brand-on-light, #ee0000)}
 * @cssprop --rh-tooltip-content-padding-block-start - padding top on tooltips - {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-block-end - padding bottom on tooltips - {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-inline-start - padding left on tooltips -  {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-inline-end - padding right on tooltips - {@default var(--rh-space-md, 8px)}
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
    private static icons;
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
    layout?: 'mini' | 'compact' | 'compact-wide' | 'full';
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
    private on?;
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
    render(): import("lit").TemplateResult<1>;
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
     * Increases media playback rate by playback rate step value
     */
    incrementPlaybackrate(): void;
    /**
     * Decreases media playback rate by playback rate step value
     */
    decrementPlaybackrate(): void;
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
     */
    seek(seconds: number): void;
    /**
     * Seeks media a given number of secons from current elapsed time
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