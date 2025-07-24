import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
/**
 * Audio Player About Panel
 */
export declare class RhAudioPlayerAbout extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Default label content */
    label?: string;
    /** Series this track belongs to, if applicable */
    mediaseries?: string;
    /** Title of audio track */
    mediatitle?: string;
    private content?;
    render(): import("lit-html").TemplateResult<1>;
    set menuLabel(label: string);
    get menuLabel(): string;
    scrollText(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-audio-player-about': RhAudioPlayerAbout;
    }
}
