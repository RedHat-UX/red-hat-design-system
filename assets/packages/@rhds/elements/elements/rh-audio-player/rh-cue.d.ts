import { LitElement } from 'lit';
export type Seconds = (number | null | undefined);
export type TimeString = (string | null | undefined);
/**
 * formats time in seconds as `mm:ss.ms` string
 */
export declare const getFormattedTime: (seconds: Seconds) => string;
/**
 * gets seconds from a string formatted as `mm:ss.mss` or `hh:mm:ss.mss`
 */
export declare const getSeconds: (str: TimeString) => Seconds;
/**
 * Provides a timed transcript segment for `rh-transcript`. Use this to
 * display spoken content with timestamps and optional speaker labels.
 * Cue links are focusable; pressing Enter seeks the audio to that
 * timestamp. The `active` attribute visually highlights the current
 * cue. Screen readers can navigate cue links to browse the
 * transcript. Must be placed in the `cues` slot.
 *
 * @summary A timed transcript segment with optional speaker label
 *
 * @fires cueseek - Fired when the user clicks a cue link. This is a plain
 *        `Event` with `bubbles: true` and no custom detail. The parent
 *        `rh-audio-player` handles it to seek to this cue's start time.
 */
export declare class RhCue extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Start time, in mm:ss.ms */
    start?: string;
    /** End time, in mm:ss.ms */
    end?: string;
    /** Text of this cue. Overridden by `text` slot */
    text?: string;
    /** Name of voice speaking this text. Overridden by `voice` slot */
    voice?: string;
    /** Whether this cue is active right now */
    active: boolean;
    get startTime(): Seconds;
    get endTime(): Seconds;
    get downloadText(): string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cue': RhCue;
    }
}
