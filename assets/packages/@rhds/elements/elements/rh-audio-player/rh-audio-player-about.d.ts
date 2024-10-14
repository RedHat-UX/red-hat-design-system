import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
/**
 * Audio Player About Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot profile - `<rh-avatar>` for attribution
 * @csspart heading - panel heading
 * @csspart body - panel body
 * @csspart profile - panel profile / avatar
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
