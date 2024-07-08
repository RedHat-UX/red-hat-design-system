import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-surface/rh-surface.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import styles from './rh-video.css';

export class ConsentClickEvent extends Event {
  declare target: RhVideo;
  constructor() {
    super('consent-click', { bubbles: true, cancelable: true });
  }
}

export class VideoClickEvent extends Event {
  declare target: RhVideo;
  constructor() {
    super('play-button-click', { bubbles: true, cancelable: true });
  }
}

export class VideoPlayEvent extends Event {
  declare target: RhVideo;
  constructor() {
    super('play', { bubbles: true, cancelable: true });
  }
}

/**
 * A Video is a graphical preview of a video overlayed with a play button. When clicked, the video will begin playing.
 *
 * @fires {ConsentClickEvent} consent-click - "Update preferences" consent button is clicked
 * @fires {VideoClickEvent} play-button-click - play button is clicked
 * @fires {VideoPlayEvent} play - video is about to be played
 * @slot - Place video embed code here; iframe should include a `title` attribute with the video title
 * @slot play-button-text - text for play button; recommended value "Video title (video)"
 * @slot thumbnail - optional thumbnail image on top of video embed; should include `alt` text
 * @slot consent-message - text explaining opt-in to cookies is required, e.g. `<p>View this video by opting in to “Advertising Cookies.”</p>`
 * @slot consent-button-text - text for CTA button to update preferences, e.g. "Update preferences"
 * @slot caption - optional caption below video
 * @slot autoplay - DO NOT USE! (Used by `rh-video`.)
 * @csspart figure - The outer container for rh-video
 * @csspart video - The container for the video, thumbnail, and play button
 * @csspart consent-body - The container for the consent message and consent button
 * @csspart play - The play button on top of the thumbnail
 * @csspart caption - The container for the caption
 */
@customElement('rh-video')
export class RhVideo extends LitElement {
  static readonly styles = [styles];

  static readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Whether video requires consent consent for cookies
   */
  @property({ type: Boolean, attribute: 'require-consent' }) requireConsent = false;

  /**
   * Whether consent consent for cookies
   */
  @property({ type: Boolean }) consented = false;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

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
    return this.shadowRoot?.querySelector('#consent-button');
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
    return this.shadowRoot?.querySelector('#play');
  }

  get playClicked() {
    return this._playClicked;
  }

  get playStarted() {
    return this._playStarted;
  }

  render() {
    const { playClicked, on = '' } = this;
    const dark = on === 'dark';
    const svgFill = dark ? '#151515' : 'white';
    const svgOpacity = dark ? '0.5' : '0.25';
    const hasCaption = this.#slots.hasSlotted('caption');
    const hasThumbnail = this.#slots.hasSlotted('thumbnail');
    const playLabel = this.iframeElement && this.iframeElement.title ? `${this.iframeElement.title} (play video)` : 'Play video';
    const show = this.#showConsent ? 'consent' : !!playClicked || !hasThumbnail ?
      'video' : 'thumbnail';

    return html`
      <figure part="figure" class="${classMap({ [show]: !!show, [on]: !!on })}">
        <div part="video" id="video">
          <div aria-hidden="${show !== 'thumbnail'}">
            <slot id="thumbnail" name="thumbnail"></slot>
          </div>
          <slot @slotchange="${this.#copyIframe}"></slot>
          <div id="autoplay"><slot name="autoplay"></slot></div>
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
              <div part="consent-body" id="consent-body">
                <slot name="consent-message">
                  <p id="consent-message">View this video by opting in to “Advertising Cookies.”</p>
                </slot>
                <rh-button
                  id="consent-button"
                  variant="tertiary"
                  @click="${this.#handleConsentClick}"
                  @keyup="${this.#handleConsentKeyup}"><slot name="consent-button-text">Update preferences</slot></rh-button>
              </div>
            </rh-surface>
          ` : ''}
          <button part="play" id="play"
            ?hidden="${show !== 'thumbnail'}"
            @click="${this.#handlePlayClick}"
            @keyup="${this.#handlePlayKeyup}">
            <span class="visually-hidden"><slot name="play-button-text">${playLabel}</slot></span>
            <svg id="icon" aria-hidden="true" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="${svgFill}" fill-opacity="${svgOpacity}"/>
              <path d="M44 32L26 40.6603V23.3397L44 32Z" fill="white"/>
            </svg>
          </button>
        </div>
        <figcaption part="caption" ?hidden="${!hasCaption}"><slot name="caption"></slot></figcaption>
      </figure>
    `;
  }

  #copyIframe() {
    const template = this.querySelector('template');
    const node = template ? document.importNode(template.content, true) : undefined;
    const iframe = node ?
      node.querySelector('iframe')?.cloneNode(true) as HTMLIFrameElement : undefined;
    if (iframe) {
      const url = new URL(iframe.getAttribute('src') || '');
      url.searchParams.append('autoplay', '1');
      url.searchParams.append('rel', '0');
      iframe.src = url.href;
      iframe.classList.add('rh-yt-iframe');
      iframe.allow = 'autoplay';
      iframe.slot = 'autoplay';
    }
    this.#iframe = iframe;
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
      this.#playVideo();
    }
  }

  #handlePlayKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        if (!this.playClicked) {
          this._playClicked = true;
          this.dispatchEvent(new VideoClickEvent());
          this.#playVideo();
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
    'rh-video': RhVideo;
  }
}
