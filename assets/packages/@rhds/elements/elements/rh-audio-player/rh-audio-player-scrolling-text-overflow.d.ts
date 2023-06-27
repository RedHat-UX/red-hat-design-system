import { LitElement } from 'lit';
/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 * @cssprop --rh-audio-player-scrolling-text-overflow-background-color - color of fade effect (shoudl match background) - {@default var(--rh-color-surface-lightest, #ffffff)}
 */
export declare class RhAudioPlayerScrollingTextOverflow extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    private on?;
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
