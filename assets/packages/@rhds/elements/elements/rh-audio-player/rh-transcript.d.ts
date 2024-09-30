import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-cue` elements
 * @csspart heading - scrolling text overflow
 * @csspart toolbar - toolbar area above cues list
 */
export declare class RhTranscript extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    heading?: string;
    label?: string;
    lang: string;
    private _label;
    private _autoscroll;
    private _download;
    private _cues;
    set autoscrollLabel(label: string);
    get autoscrollLabel(): string;
    set downloadLabel(label: string);
    get downloadLabel(): string;
    get downloadText(): string;
    set menuLabel(label: string);
    get menuLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
    setActiveCues(currentTime?: number): void;
    setDuration(mediaDuration: number): void;
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-transcript': RhTranscript;
    }
}
