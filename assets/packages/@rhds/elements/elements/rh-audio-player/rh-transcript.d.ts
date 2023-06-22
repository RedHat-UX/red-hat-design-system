import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '../rh-tooltip/rh-tooltip.js';
/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-cue` elements
 * @cssprop --rh-border-width-md
 * @cssprop --rh-color-border-interactive-on-dark
 * @cssprop --rh-color-border-interactive-on-light
 * @cssprop --rh-icon-size-03
 * @cssprop --rh-line-height-heading
 * @cssprop --rh-font-family-heading
 * @cssprop --rh-font-size-heading-xs
 * @cssprop --rh-font-weight-heading-medium
 * @cssprop --rh-space-md
 * @cssprop --rh-space-lg
 */
export declare class RhTranscript extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    heading?: string;
    label?: string;
    lang: string;
    private _label;
    private _autoscroll;
    private _download;
    private _cues;
    render(): import("lit-html").TemplateResult<1>;
    set autoscrollLabel(label: string);
    get autoscrollLabel(): string;
    set downloadLabel(label: string);
    get downloadLabel(): string;
    set menuLabel(label: string);
    get menuLabel(): string;
    get downloadText(): string;
    setActiveCues(currentTime?: number): void;
    setDuration(mediaDuration: number): void;
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-transcript': RhTranscript;
    }
}
