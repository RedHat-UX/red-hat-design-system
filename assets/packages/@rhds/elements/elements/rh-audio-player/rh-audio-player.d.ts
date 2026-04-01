import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * An audio player for podcasts and media clips. Users must provide an
 * `<audio>` element in the `media` slot. Provides playback controls,
 * seek timeline, and expandable panels. All buttons use ARIA labels
 * and `rh-tooltip` for screen reader and keyboard accessibility.
 * Tab and Enter navigate and activate controls.
 *
 * @summary Plays audio clips with playback controls, transcript, and panels
 *
 * @alias audio-player
 *
 * @csspart toolbar - The main controls toolbar container.
 * @csspart panel - The expandable content panel below the toolbar.
 * @csspart about - The about panel slot container.
 * @csspart subscribe - The subscribe panel slot container.
 * @csspart transcript - The transcript panel slot container.
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
    /** Audio series name, e.g. a podcast series title. */
    mediaseries?: string;
    /** Audio track title, e.g. a podcast episode name. */
    mediatitle?: string;
    /**
     * Player layout variant. Users should choose a layout appropriate to
     * the available width:
     *   - `mini` (default): play/pause and seek range only; volume and
     *     other controls are behind the "more options" menu.
     *   - `compact`: adds artwork, elapsed time, skip buttons, and volume.
     *   - `compact-wide`: like `compact` but stretches to fill container
     *     width.
     *   - `full`: maximal controls including artwork, rewind/forward,
     *     elapsed/duration display, and inline playback rate stepper.
     */
    layout: 'mini' | 'compact' | 'compact-wide' | 'full';
    /** URL to the audio track's artwork image. */
    poster?: string;
    /** Playback volume from 0 (muted) to 1 (max). */
    volume: number;
    /** Playback speed multiplier, from 0.25 to 2. */
    playbackRate: number;
    /** Whether the expandable content panel is open. */
    expanded: boolean;
    /** Language code for i18n of control labels. */
    lang: string;
    /** Custom microcopy overrides keyed by language code. */
    microcopy: {};
    /** Element's color palette. */
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
