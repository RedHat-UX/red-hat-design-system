var _RhVideoEmbed_instances, _RhVideoEmbed_slots, _RhVideoEmbed_iframe, _RhVideoEmbed_showConsent_get, _RhVideoEmbed_getIframe, _RhVideoEmbed_copyIframe, _RhVideoEmbed_handleConsentClick, _RhVideoEmbed_handleConsentKeyup, _RhVideoEmbed_handlePlayClick, _RhVideoEmbed_handlePlayKeyup, _RhVideoEmbed_playVideo;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:flex}:host([hidden]),[hidden]{display:none!important}#consent,#video{display:inline-flex;align-items:center;flex-direction:column}#video{justify-content:stretch;position:relative}::slotted([slot=thumbnail]),::slotted(iframe),figure{max-width:100%}::slotted([slot=thumbnail]){display:block}::slotted(iframe){width:100%;height:100%;position:absolute;inset-block-start:0;inset-inline-start:0;border:0}figure{--_video-focus-border-color:var(--rh-color-border-interactive);--_video-play-btn-bkg-color:light-dark(rgb(31 31 31/var(--rh-opacity-50,50%)),rgb(255 255 255/var(--rh-opacity-20,20%)));--_video-play-btn-interactive-bkg-color:light-dark(rgb(21 21 21/var(--rh-opacity-80,80%)),rgb(255 255 255/var(--rh-opacity-50,50%)));display:flex;flex-direction:column;margin:0}figcaption{margin-block-start:var(--rh-space-lg,16px)}figcaption ::slotted(p){margin-block-start:0!important}::slotted([slot=caption]){color:var(--rh-color-text-secondary);font-size:var(--rh-font-size-body-text-sm,.875rem)!important;line-height:var(--rh-line-height-body-text,1.5)}#consent,#watermark{position:absolute;inset:0}#consent{justify-content:center;container:consent/inline-size}#consent-body{display:flex;flex-direction:column;align-items:center;position:relative;text-align:center;z-index:5}#consent-message,::slotted([slot=consent-message]){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);line-height:var(--rh-line-height-heading,1.3)}#consent-message,::slotted([slot=consent-message]:last-of-type){margin-block-end:var(--rh-space-lg,16px)}@container consent (min-width: 576px){#consent-message,::slotted([slot=consent-message]:last-of-type){margin-block-end:var(--rh-space-xl,24px)}#consent-body{padding:var(--rh-space-xl,24px)}#consent-message{font-size:var(--rh-font-size-heading-sm,1.5rem)}}#play{cursor:pointer;display:block;height:100%;inset:0;position:absolute;width:100%}#play:focus-within{border-radius:var(--rh-border-radius-default,3px);outline:var(--rh-border-width-lg,3px) solid var(--_video-focus-border-color);outline-offset:var(--rh-border-width-md,2px)}#play::part(button){background-color:var(--_video-play-btn-bkg-color,var(--rh-color-surface-darkest,#151515));inset-block:calc(50% - var(--rh-length-2xl, 32px)) 0;inset-inline:50% 0;position:absolute;outline:none;transform:translate(-50%);width:var(--rh-length-4xl,64px)}#play:active::part(button),#play:focus::part(button),#play:hover::part(button){background-color:var(--_video-play-btn-interactive-bkg-color)}#play::part(icon){color:var(--rh-color-surface)}#play[hidden],:is(.video,.consent) ::slotted([slot=thumbnail]){opacity:0;pointer-events:none}.visually-hidden{position:fixed;inset-block-start:0;inset-inline-start:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#autoplay{position:absolute;inset:0;opacity:0;transition:opacity .2s ease-in}.video #autoplay{opacity:1}`;
export class ConsentClickEvent extends Event {
    constructor() {
        super('consent-click', { bubbles: true, cancelable: true });
    }
}
export class VideoClickEvent extends Event {
    constructor() {
        super('request-play', { bubbles: true, cancelable: true });
    }
}
export class VideoPlayEvent extends Event {
    constructor() {
        super('play', { bubbles: true, cancelable: true });
    }
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
let RhVideoEmbed = class RhVideoEmbed extends LitElement {
    constructor() {
        super(...arguments);
        _RhVideoEmbed_instances.add(this);
        /**
         * Add to `rh-video-embed` when a video requires consent for cookies
         */
        this.requireConsent = false;
        /**
         * Boolean flag to flip with JavaScript when cookie consent has been granted or revoked.
         * See the Require Consent demo for reference.
         */
        this.consented = false;
        // TODO(bennyp): https://lit.dev/docs/data/context/#content
        this._consentClicked = false;
        this._playClicked = false;
        this._playStarted = false;
        _RhVideoEmbed_slots.set(this, new SlotController(this, 'caption', 'thumbnail', null));
        _RhVideoEmbed_iframe.set(this, void 0);
    }
    get consentButton() {
        return this.shadowRoot?.querySelector('#consent-button');
    }
    get consentClicked() {
        return this._consentClicked;
    }
    get focusableElement() {
        let el;
        if (__classPrivateFieldGet(this, _RhVideoEmbed_instances, "a", _RhVideoEmbed_showConsent_get)) {
            el = this.consentButton;
        }
        else if (this.playClicked) {
            el = this.iframeElement;
        }
        else {
            el = this.playButton;
        }
        return el;
    }
    get iframeElement() {
        return __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f");
    }
    get playButton() {
        return this.shadowRoot?.querySelector('#play');
    }
    get playClicked() {
        return this._playClicked;
    }
    get playStarted() {
        return this._playStarted;
    }
    firstUpdated() {
        if (!isServer) {
            __classPrivateFieldSet(this, _RhVideoEmbed_iframe, __classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_getIframe).call(this), "f");
        }
    }
    render() {
        const { playClicked } = this;
        const hasCaption = __classPrivateFieldGet(this, _RhVideoEmbed_slots, "f").hasSlotted('caption');
        const hasThumbnail = __classPrivateFieldGet(this, _RhVideoEmbed_slots, "f").hasSlotted('thumbnail');
        const playLabel = __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f") && __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").title ? `${__classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").title} (play video)` : 'Play video';
        const consent = __classPrivateFieldGet(this, _RhVideoEmbed_instances, "a", _RhVideoEmbed_showConsent_get);
        const video = !!playClicked || !hasThumbnail;
        const show = consent ? 'consent' : video ? 'video' : 'thumbnail';
        return html `
      <!-- The outer container for rh-video-embed -->
      <figure part="figure" class="${classMap({ video, consent })}">
        <!-- The container for the video, thumbnail, and play button -->
        <div part="video" id="video">
          <div aria-hidden="${show !== 'thumbnail'}">
            <!-- Optional thumbnail image on top of video embed; should include \`alt\` text -->
            <slot id="thumbnail" name="thumbnail"></slot>
          </div>
          <!-- Place video embed code here; iframe should include a \`title\` attribute with the video title -->
          <slot></slot>
          <div id="autoplay"><!--
            DO NOT USE! (Used by \`rh-video-embed\`.)
          --><slot name="autoplay"></slot></div>
          ${__classPrivateFieldGet(this, _RhVideoEmbed_instances, "a", _RhVideoEmbed_showConsent_get) ? html `
            <rh-surface id="consent" color-palette="darker">
              <svg id="watermark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1136 639">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle" width="1136" height="639" transform="translate(150 212)" fill="#212427"/>
                  </clipPath>
                  <clipPath id="clip-path-2">
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="1000.925" height="756.901" fill="none"/>
                  </clipPath>
                </defs>
                <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-150 -212)" clip-path="url(#clip-path)">
                  <g id="Group_2000" data-name="Group 2000" transform="translate(50.847 23.483)" opacity="0.2">
                    <g id="Group_1999" data-name="Group 1999" clip-path="url(#clip-path-2)">
                      <path id="Path_3" data-name="Path 3" d="M667.591,436.2c65.743-.063,160.93-13.755,160.857-91.955-.005-6.1-.173-12.042-1.645-17.992L787.482,156.147c-9.114-37.392-17.046-54.39-82.815-87.2C653.636,42.937,542.528-.032,509.656,0c-30.6.026-39.626,39.7-75.9,39.731-35.126.032-61.218-29.408-94.094-29.376-31.72.032-52.114,21.576-67.935,65.8,0,0-44.093,124.706-49.749,142.834a33.047,33.047,0,0,0-1.156,10.213c.047,48.45,191.011,207.231,446.766,207m171.085-60.229c9.114,43.058,9.114,47.589,9.119,53.255.074,73.68-82.641,114.546-191.432,114.645-245.953.226-461.415-143.507-461.5-238.71a97,97,0,0,1,7.889-38.543C114.352,271.234-.1,287.2,0,388.072.148,553.538,392.488,757.185,703.022,756.9c238.021-.216,297.977-107.934,297.9-192.935-.068-66.884-57.932-142.75-162.245-187.994" transform="translate(0.004 0)"/>
                    </g>
                  </g>
                </g>
              </svg>
              <!-- The container for the consent message and consent button -->
              <div part="consent-body" id="consent-body">
                <!-- Text explaining opt-in to cookies is required, e.g. \`<p>View this video by opting in to “Advertising Cookies.”</p>\` -->
                <slot name="consent-message">
                  <p id="consent-message">View this video by opting in to “Advertising Cookies.”</p>
                </slot>
                <rh-button
                  id="consent-button"
                  variant="tertiary"
                  @click="${__classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_handleConsentClick)}"
                  @keyup="${__classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_handleConsentKeyup)}"><!--
                    Text for CTA button to update preferences, e.g. "Update preferences"
                  --><slot name="consent-button-text">Update preferences</slot></rh-button>
              </div>
            </rh-surface>
          ` : ''}
          <!-- The play button on top of the thumbnail -->
          <rh-button part="play"
                     id="play"
                     variant="play"
                     ?hidden="${show !== 'thumbnail'}"
                     @click="${__classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_handlePlayClick)}"
                     @keyup="${__classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_handlePlayKeyup)}">
            <span class="visually-hidden"><!--
              Text for play button; recommended value "Video title (video)"
            --><slot name="play-button-text">${playLabel}</slot></span>
          </rh-button>
        </div>
        <!-- The container for the caption -->
        <figcaption part="caption" ?hidden="${!hasCaption}"><!--
          Optional caption below video embed
        --><slot name="caption"></slot></figcaption>
      </figure>
    `;
    }
};
_RhVideoEmbed_slots = new WeakMap();
_RhVideoEmbed_iframe = new WeakMap();
_RhVideoEmbed_instances = new WeakSet();
_RhVideoEmbed_showConsent_get = function _RhVideoEmbed_showConsent_get() {
    return this.requireConsent && !this.consented;
};
_RhVideoEmbed_getIframe = function _RhVideoEmbed_getIframe() {
    const template = this.querySelector('template');
    const node = template ? document.importNode(template.content, true) : undefined;
    const iframe = node ?
        node.querySelector('iframe')?.cloneNode(true) : undefined;
    return iframe;
};
_RhVideoEmbed_copyIframe = function _RhVideoEmbed_copyIframe() {
    if (__classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f")) {
        const url = new URL(__classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").getAttribute('src') || '');
        url.searchParams.append('autoplay', '1');
        url.searchParams.append('rel', '0');
        __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").src = url.href;
        __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").classList.add('rh-yt-iframe');
        __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").allow = 'autoplay';
        __classPrivateFieldGet(this, _RhVideoEmbed_iframe, "f").slot = 'autoplay';
    }
    __classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_playVideo).call(this);
};
_RhVideoEmbed_handleConsentClick = function _RhVideoEmbed_handleConsentClick() {
    this._consentClicked = true;
    this.dispatchEvent(new ConsentClickEvent());
};
_RhVideoEmbed_handleConsentKeyup = function _RhVideoEmbed_handleConsentKeyup(event) {
    switch (event.key) {
        case ' ':
        case 'Enter':
            this._consentClicked = true;
            this.dispatchEvent(new ConsentClickEvent());
            break;
    }
};
_RhVideoEmbed_handlePlayClick = function _RhVideoEmbed_handlePlayClick() {
    if (!this.playClicked) {
        this._playClicked = true;
        this.dispatchEvent(new VideoClickEvent());
        __classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_copyIframe).call(this);
    }
};
_RhVideoEmbed_handlePlayKeyup = function _RhVideoEmbed_handlePlayKeyup(event) {
    switch (event.key) {
        case ' ':
        case 'Enter':
            if (!this.playClicked) {
                this._playClicked = true;
                this.dispatchEvent(new VideoClickEvent());
                __classPrivateFieldGet(this, _RhVideoEmbed_instances, "m", _RhVideoEmbed_copyIframe).call(this);
            }
            break;
    }
};
_RhVideoEmbed_playVideo = function _RhVideoEmbed_playVideo() {
    if (!__classPrivateFieldGet(this, _RhVideoEmbed_instances, "a", _RhVideoEmbed_showConsent_get) && this.playClicked && this.iframeElement) {
        this.appendChild(this.iframeElement);
        this.iframeElement?.focus();
        this._playStarted = true;
        this.dispatchEvent(new VideoPlayEvent());
    }
};
RhVideoEmbed.styles = [styles];
RhVideoEmbed.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    property({ type: Boolean, attribute: 'require-consent' })
], RhVideoEmbed.prototype, "requireConsent", void 0);
__decorate([
    property({ type: Boolean })
], RhVideoEmbed.prototype, "consented", void 0);
__decorate([
    state()
], RhVideoEmbed.prototype, "_consentClicked", void 0);
__decorate([
    state()
], RhVideoEmbed.prototype, "_playClicked", void 0);
__decorate([
    state()
], RhVideoEmbed.prototype, "_playStarted", void 0);
RhVideoEmbed = __decorate([
    customElement('rh-video-embed'),
    themable
], RhVideoEmbed);
export { RhVideoEmbed };
//# sourceMappingURL=rh-video-embed.js.map