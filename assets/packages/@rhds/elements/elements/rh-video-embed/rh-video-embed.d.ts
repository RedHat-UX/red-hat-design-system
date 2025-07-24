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
 *
 * @summary Reveals a small area of information on hover
 *
 * @alias video-embed
 *
 * @fires consent-click - "Update preferences" consent button is clicked
 * @fires request-play - Play button is clicked
 * @fires play - Video is about to be played
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
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-video-embed': RhVideoEmbed;
    }
}
