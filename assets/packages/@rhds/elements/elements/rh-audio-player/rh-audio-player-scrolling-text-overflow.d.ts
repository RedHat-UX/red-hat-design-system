import { LitElement } from 'lit';
/**
 * Provides a scrolling text animation for `rh-audio-player` when content
 * overflows. Reveals full text on hover or focus with a trailing fade
 * effect. Animation duration scales with character count. Keyboard and
 * screen reader users can trigger scrolling via focus. Should not be
 * placed independently in user markup.
 *
 * @summary Scrolls overflowing text on hover or focus
 *
 */
export declare class RhAudioPlayerScrollingTextOverflow extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /** Stops the scrolling text animation and resets to the initial position. */
    stopScrolling(): void;
    /** Starts the scrolling text animation if the content overflows the container. */
    startScrolling(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
    }
}
