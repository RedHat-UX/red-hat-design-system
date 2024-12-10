import { LitElement } from 'lit';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-surface/rh-surface.js';
export declare class ConsentClickEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
export declare class VideoClickEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
export declare class VideoPlayEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
/**
 * A Video embed is a graphical preview of a video overlayed with a play button. When clicked, the embedded YouTube video will begin playing.
 * @summary Reveals a small area of information on hover
 * @fires consent-click - "Update preferences" consent button is clicked
 * @fires request-play - Play button is clicked
 * @fires play - Video is about to be played
 * @slot - Place video embed code here; iframe should include a `title` attribute with the video title
 * @slot play-button-text - Text for play button; recommended value "Video title (video)"
 * @slot thumbnail - Optional thumbnail image on top of video embed; should include `alt` text
 * @slot consent-message - Text explaining opt-in to cookies is required, e.g. `<p>View this video by opting in to “Advertising Cookies.”</p>`
 * @slot consent-button-text - Text for CTA button to update preferences, e.g. "Update preferences"
 * @slot caption - Optional caption below video embed
 * @slot autoplay - DO NOT USE! (Used by `rh-video-embed`.)
 * @csspart figure - The outer container for rh-video-embed
 * @csspart video - The container for the video, thumbnail, and play button
 * @csspart consent-body - The container for the consent message and consent button
 * @csspart play - The play button on top of the thumbnail
 * @csspart caption - The container for the caption
 */
export declare class RhVideoEmbed extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Add to `rh-video-embed` when a video requires consent for cookies
     */
    requireConsent: boolean;
    /**
     * Boolean flag to flip with JavaScript when cookie consent has been granted or revoked.
     * See the Require Consent demo for reference.
     */
    consented: boolean;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    private _consentClicked;
    private _playClicked;
    private _playStarted;
    get consentButton(): HTMLElement | null | undefined;
    get consentClicked(): boolean;
    get focusableElement(): HTMLElement;
    get iframeElement(): HTMLIFrameElement | undefined;
    get playButton(): HTMLElement | null | undefined;
    get playClicked(): boolean;
    get playStarted(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-video-embed': RhVideoEmbed;
    }
}
