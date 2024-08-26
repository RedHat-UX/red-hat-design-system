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
 * Media Transcript Cue
 * @slot - text of cue
 * @fires cueseek - when user clicks a time cue
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
