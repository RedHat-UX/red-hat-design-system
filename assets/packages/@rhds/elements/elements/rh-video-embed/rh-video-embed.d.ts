import { LitElement } from 'lit';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-surface/rh-surface.js';
/**
 * Fired when the user clicks the "Update preferences" consent button.
 * Consumers should listen for this event to open a cookie consent dialog.
 * This event has no `detail` payload; the event `target` is the
 * `RhVideoEmbed` element that requires consent.
 */
export declare class ConsentClickEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
/**
 * Fired when the user clicks the play button to request video playback.
 * Consumers should listen for this event to track user intent.
 * This event has no `detail` payload; the event `target` is the
 * `RhVideoEmbed` element that was clicked.
 */
export declare class VideoClickEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
/**
 * Fired when the embedded iframe is appended to the DOM and the video
 * is about to begin playback. This event has no `detail` payload;
 * the event `target` is the `RhVideoEmbed` element.
 */
export declare class VideoPlayEvent extends Event {
    target: RhVideoEmbed;
    constructor();
}
/**
 * A video embed provides an accessible preview of a YouTube video
 * with a thumbnail and play button. Users must provide an iframe
 * inside a `<template>` with a `title` for screen reader users.
 * Should include a thumbnail with `alt` text. Supports Tab and
 * Enter keyboard focus. Uses `aria-hidden` on the thumbnail when
 * active. Avoid videos without captions.
 *
 * @summary Embeds a YouTube video with a thumbnail preview and play button
 *
 * @alias video-embed
 *
 * @csspart figure - The outer `<figure>` container element
 * @csspart video - The container for the video, thumbnail, and play button
 * @csspart caption - The `<figcaption>` element for caption content
 * @csspart play - The play button overlay element
 * @csspart consent-body - The consent message and button container
 *
 * @fires {ConsentClickEvent} consent-click - Fires when the user clicks
 *   the "Update preferences" consent button. Has no `detail` payload.
 * @fires {VideoClickEvent} request-play - Fires when the user clicks the
 *   play button to request video playback. Has no `detail` payload.
 * @fires {VideoPlayEvent} play - Fires when the embedded iframe is
 *   appended and the video is about to begin playback. Has no `detail`
 *   payload.
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
