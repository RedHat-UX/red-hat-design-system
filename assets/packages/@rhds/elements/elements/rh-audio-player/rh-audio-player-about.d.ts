import { LitElement } from 'lit';
import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';
/**
 * Audio Player About Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot profile - `<rh-avatar>` for attribution
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-line-height-heading
 * @cssprop --rh-font-family-body-text
 * @cssprop --rh-font-family-heading
 * @cssprop --rh-font-letter-spacing-body-text
 * @cssprop --rh-font-size-body-text-xs
 * @cssprop --rh-font-size-heading-xs
 * @cssprop --rh-font-weight-heading-medium
 * @cssprop --rh-font-weight-body-text-medium
 * @cssprop --rh-space-md
 * @cssprop --rh-space-lg
 */
export declare class RhAudioPlayerAbout extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
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
