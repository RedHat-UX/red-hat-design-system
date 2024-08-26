import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 * @csspart heading - scrolling text overflow
 * @csspart body - body content slot
 * @csspart links - subscribe links
 */
export declare class RhAudioPlayerSubscribe extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    heading?: string;
    label?: string;
    private body?;
    render(): import("lit-html").TemplateResult<1>;
    set menuLabel(label: string);
    get menuLabel(): string;
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
    }
}
