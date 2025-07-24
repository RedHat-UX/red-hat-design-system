import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
/**
 * Audio Player Subscribe Panel
 */
export declare class RhAudioPlayerSubscribe extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    heading?: string;
    label?: string;
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
