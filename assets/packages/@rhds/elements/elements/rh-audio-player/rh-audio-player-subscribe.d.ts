import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
/**
 * Provides subscription links for podcast platforms within the audio
 * player. Use this when you need to allow users to subscribe. Must be
 * placed in the `subscribe` slot of `rh-audio-player`. Rendered inside
 * an ARIA dialog panel; keyboard users can Tab through links. Authors
 * should provide alt text on images so screen readers can identify
 * each platform.
 *
 * @summary Displays podcast subscription links in an expandable panel
 *
 * @csspart heading - The panel heading with scrolling text overflow.
 * @csspart body - The default content area.
 * @csspart links - The container for subscription link elements.
 */
export declare class RhAudioPlayerSubscribe extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Custom heading text displayed at the top of the subscribe panel. Overridden by the `heading` slot. */
    heading?: string;
    /** Accessible label for the panel, used as the menu item text when no heading slot is provided. */
    label?: string;
    render(): import("lit-html").TemplateResult<1>;
    set menuLabel(label: string);
    get menuLabel(): string;
    /** Triggers the scrolling text animation on the panel heading if it overflows its container. */
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
    }
}
