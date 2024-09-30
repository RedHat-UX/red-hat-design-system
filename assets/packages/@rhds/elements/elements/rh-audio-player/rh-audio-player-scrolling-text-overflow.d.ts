import { LitElement } from 'lit';
/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 * @cssprop [--rh-audio-player-scrolling-text-overflow-background-color=var(--rh-color-surface-lightest, #ffffff)]
 *          color of fade effect (should match background)
 */
export declare class RhAudioPlayerScrollingTextOverflow extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private on?;
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
