import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '../rh-cta/rh-cta.js';

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
    super('play-click', { bubbles: true, cancelable: true });
  }
}

/**
 * Video
 * @fires {ConsentClickEvent} select - when "Update preferences" concent button is clicked
 * @fires {VideoClickEvent} select - when video thumbnail is clicked
 * @slot - Place video embed code here; iframe should include a title attribute with video title
 * @slot play-button-text - text for play button that appears infront of thumbnail; recommended value "Video title (video)""
 * @slot thumbnail - optional thumbnail image on top of video embed; should include alt text
 * @slot consent-message - text explaining opt-in to cookies is required, e.g. `<p>View this video by opting in to “Advertising Cookies.”</p>`
 * @slot consent-button-text - text for CTA button to update preferences, e.g. `Update preferences`
 * @slot caption - optional caption below video
 * @slot autoplay - DO NOT USE! (Used by `rh-video`.)
 */
@customElement('rh-video')
export class RhVideo extends LitElement {
  static readonly styles = [styles];

  /**
   * Whether video requires consent consent for cookies
   */
  @property({ type: Boolean, attribute: 'require-consent' }) requireConsent = false;

  /**
   * Whether consent consent for cookies
   */
  @property({ type: Boolean }) hasConsent = false;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state() private videoClicked = false;

  #slots = new SlotController(this, 'caption', 'thumbnail', null);

  get #showConsent() {
    return this.requireConsent && !this.hasConsent;
  }

  get iframe() {
    const template = this.querySelector('template');
    const node = template ? document.importNode(template.content, true) : undefined;
    const iframe = node ? node.querySelector('iframe')?.cloneNode(true) as HTMLIFrameElement : undefined;
    if (iframe) {
      const url = new URL(iframe.getAttribute('src') || '');
      url.searchParams.append('autoplay', '1');
      iframe.src = url.href;
      iframe.allow = 'autoplay';
      iframe.slot = 'autoplay';
    }
    return iframe;
  }

  constructor() {
    super();
    this.addEventListener('keyup', this.#handleClick);
    this.addEventListener('click', this.#handleClick);
  }

  render() {
    const { videoClicked, on } = this;
    const dark = on === 'dark';
    const svgFill = dark ? 'white' : '#151515';
    const svgOpacity = dark ? '0.25' : '0.5';
    const hasCaption = this.#slots.hasSlotted('caption');
    const hasThumbnail = this.#slots.hasSlotted('thumbnail');
    const playLabel = this.iframe && this.iframe.title ? `${this.iframe.title} (play video)` : 'Play video';
    const show = this.#showConsent ? 'consent' : !!videoClicked || !hasThumbnail ? 'video' : 'thumbnail';
    return html`
      <figure class="${classMap({ [show]: !!show })}">
        <div id="video">
          ${this.#showConsent ? html`
            <div id="consent" color-palette="darker">
              <div id="consent-body">
                <slot name="consent-message">
                  <p>View this video by opting in to “Advertising Cookies.”</p>
                </slot>
                <rh-cta variant="secondary" @click="${this.#handleConsentClick}">
                  <slot name="consent-button-text">Update preferences</slot>
                </rh-cta>
              </div>
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
            </div>
          ` : hasThumbnail ? html`
              <button id="play" ?hidden="${show !== 'thumbnail'}" @click="${this.#handleClick}" @keyup="${this.#handleClick}">
                <slot id="play-button-text">${playLabel}</slot>
                <svg id="icon" aria-hidden="true" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="${svgFill}" fill-opacity="${svgOpacity}"/>
                  <path d="M44 32L26 40.6603V23.3397L44 32Z" fill="white"/>
                </svg>
              </button>
            ` : ''}
            <slot id="thumbnail" name="thumbnail" aria-hidden="${show !== 'thumbnail'}"></slot>
            <slot></slot>
            <div id="autoplay"><slot name="autoplay"></slot></div>
        </div>
        <figcaption ?hidden="${!hasCaption}"><slot name="caption"></slot></figcaption>
      </figure>
    `;
  }

  #handleConsentClick() {
    this.dispatchEvent(new ConsentClickEvent());
  }

  #handleClick() {
    if (!this.#showConsent && !this.videoClicked && this.iframe) {
      this.videoClicked = true;
      this.appendChild(this.iframe);
      this.dispatchEvent(new VideoClickEvent());
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-video': RhVideo;
  }
}
