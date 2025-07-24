import { LitElement } from 'lit';
/**
 * Audio Player Scrolling Text Overflow
 */
export declare class RhAudioPlayerScrollingTextOverflow extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    stopScrolling(): void;
    startScrolling(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
    }
}
