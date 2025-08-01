import { LitElement, html, isServer } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-surface/rh-surface.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-video-embed.css';

export class ConsentClickEvent extends Event {
  declare target: RhVideoEmbed;
  constructor() {
    super('consent-click', { bubbles: true, cancelable: true });
  }
}

export class VideoClickEvent extends Event {
  declare target: RhVideoEmbed;
  constructor() {
    super('request-play', { bubbles: true, cancelable: true });
  }
}

export class VideoPlayEvent extends Event {
  declare target: RhVideoEmbed;
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
@customElement('rh-video-embed')
@themable
export class RhVideoEmbed extends LitElement {
  static readonly styles = [styles];

  static readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Add to `rh-video-embed` when a video requires consent for cookies
   */
  @property({ type: Boolean, attribute: 'require-consent' }) requireConsent = false;

  /**
   * Boolean flag to flip with JavaScript when cookie consent has been granted or revoked.
   * See the Require Consent demo for reference.
   */
  @property({ type: Boolean }) consented = false;

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state() private _consentClicked = false;
  @state() private _playClicked = false;
  @state() private _playStarted = false;

  #slots = new SlotController(this, 'caption', 'thumbnail', null);
  #iframe: HTMLIFrameElement | undefined;

  get #showConsent() {
    return this.requireConsent && !this.consented;
  }

  get consentButton() {
    return this.shadowRoot?.querySelector<HTMLElement>('#consent-button');
  }

  get consentClicked() {
    return this._consentClicked;
  }

  get focusableElement() {
    let el: HTMLElement | undefined;
    if (this.#showConsent ) {
      el = this.consentButton as HTMLElement;
    } else if (this.playClicked) {
      el = this.iframeElement as HTMLElement;
    } else {
      el = this.playButton as HTMLElement;
    }
    return el;
  }

  get iframeElement() {
    return this.#iframe;
  }

  get playButton() {
    return this.shadowRoot?.querySelector<HTMLElement>('#play');
  }

  get playClicked() {
    return this._playClicked;
  }

  get playStarted() {
    return this._playStarted;
  }

  firstUpdated() {
    if (!isServer) {
      this.#iframe = this.#getIframe();
    }
  }

  render() {
    const { playClicked } = this;
    const hasCaption = this.#slots.hasSlotted('caption');
    const hasThumbnail = this.#slots.hasSlotted('thumbnail');
    const playLabel = this.#iframe && this.#iframe.title ? `${this.#iframe.title} (play video)` : 'Play video';
    const consent = this.#showConsent;
    const video = !!playClicked || !hasThumbnail;
    const show = consent ? 'consent' : video ? 'video' : 'thumbnail';

    return html`
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
          ${this.#showConsent ? html`
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
                  @click="${this.#handleConsentClick}"
                  @keyup="${this.#handleConsentKeyup}"><!--
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
                     @click="${this.#handlePlayClick}"
                     @keyup="${this.#handlePlayKeyup}">
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

  #getIframe() {
    const template = this.querySelector('template');
    const node = template ? document.importNode(template.content, true) : undefined;
    const iframe = node ?
      node.querySelector('iframe')?.cloneNode(true) as HTMLIFrameElement : undefined;
    return iframe;
  }

  #copyIframe() {
    if (this.#iframe) {
      const url = new URL(this.#iframe.getAttribute('src') || '');
      url.searchParams.append('autoplay', '1');
      url.searchParams.append('rel', '0');
      this.#iframe.src = url.href;
      this.#iframe.classList.add('rh-yt-iframe');
      this.#iframe.allow = 'autoplay';
      this.#iframe.slot = 'autoplay';
    }
    this.#playVideo();
  }

  #handleConsentClick() {
    this._consentClicked = true;
    this.dispatchEvent(new ConsentClickEvent());
  }

  #handleConsentKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        this._consentClicked = true;
        this.dispatchEvent(new ConsentClickEvent());
        break;
    }
  }

  #handlePlayClick() {
    if (!this.playClicked) {
      this._playClicked = true;
      this.dispatchEvent(new VideoClickEvent());
      this.#copyIframe();
    }
  }

  #handlePlayKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        if (!this.playClicked) {
          this._playClicked = true;
          this.dispatchEvent(new VideoClickEvent());
          this.#copyIframe();
        }
        break;
    }
  }

  #playVideo() {
    if (!this.#showConsent && this.playClicked && this.iframeElement) {
      this.appendChild(this.iframeElement);
      this.iframeElement?.focus();
      this._playStarted = true;
      this.dispatchEvent(new VideoPlayEvent());
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-video-embed': RhVideoEmbed;
  }
}
