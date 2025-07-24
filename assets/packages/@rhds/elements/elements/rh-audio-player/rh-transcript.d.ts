import { LitElement, type TemplateResult } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Audio Player Transcript Panel
 */
export declare class RhTranscript extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    heading?: string;
    label?: string;
    lang: string;
    menuLabel: string;
    downloadLabel: string;
    autoscrollLabel: string;
    private _autoscroll;
    private _download;
    get downloadText(): string;
    constructor();
    render(): TemplateResult;
    setActiveCues(currentTime?: number): void;
    setDuration(mediaDuration: number): void;
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-transcript': RhTranscript;
    }
}
