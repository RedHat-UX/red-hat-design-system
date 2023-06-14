import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { DirController } from '../../lib/DirController.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { I18nController } from '../../lib/I18nController.js';

import { RhMenu } from '../rh-menu/rh-menu.js';
import { RhAudioPlayerCue, getFormattedTime } from './rh-audio-player-cue.js';
import { RhAudioPlayerAbout } from './rh-audio-player-about.js';
import { RhAudioPlayerSubscribe } from './rh-audio-player-subscribe.js';
import { RhAudioPlayerTranscript } from './rh-audio-player-transcript.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';

import buttonStyles from './rh-audio-player-button-styles.css';
import rangeStyles from './rh-audio-player-range-styles.css';
import styles from './rh-audio-player.css';
import { RhTooltip } from '../rh-tooltip/rh-tooltip.js';

/**
 * Audio Player Scrolling Text Overflow
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot about - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-audio-player-transcript` panel with `rh-audio-player-cue` elements
 * @cssprop --rh-audio-player-background-color - color of player background - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-audio-player-icon-background-color {@default var(--rh-audio-player-background-color)}
 * @cssprop --rh-audio-player-border-color - color of player border - {@default var(--rh-color-border-subtle-on-light, #d2d2d2)}
 * @cssprop --rh-audio-player-secondary-text-color - player secondary text color - {@default var(--rh-color-text-secondary-on-light, #6a6e73)}
 * @cssprop --rh-audio-player-secondary-opacity - player secondary opacity used for partially faded elements - {@default 0.75}
 * @cssprop --rh-audio-player-range-thumb-color - color of time and volume range slider thumb - {@default var(--rh-color-accent-brand-on-light, #ee0000)}
 * @cssprop --rh-audio-player-range-progress-color - color of time and volume range slider progress - {@default var(--rh-color-accent-brand-on-light, #ee0000)}
 * @cssprop --rh-border-radius-default
 * @cssprop --rh-border-width-md
 * @cssprop --rh-box-shadow-md
 * @cssprop --rh-color-border-interactive-on-dark
 * @cssprop --rh-color-border-interactive-on-light
 * @cssprop --rh-color-border-subtle-on-dark
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-interactive-blue-lightest
 * @cssprop --rh-color-surface-dark
 * @cssprop --rh-color-surface-darkest
 * @cssprop --rh-color-surface-light
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-font-family-body-text
 * @cssprop --rh-font-family-code
 * @cssprop --rh-font-family-heading
 * @cssprop --rh-font-letter-spacing-body-text
 * @cssprop --rh-icon-size-02
 * @cssprop --rh-icon-size-03
 * @cssprop --rh-length-md
 * @cssprop --rh-length-lg
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-line-height-code
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-font-size-code-xs
 * @cssprop --rh-font-size-code-md
 * @cssprop --rh-font-size-heading-xs
 * @cssprop --rh-font-weight-body-regular
 * @cssprop --rh-font-weight-heading-medium
 * @cssprop --rh-space-md
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-xl
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-tooltip-content-padding-block-start - padding top on tooltips - {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-block-end - padding bottom on tooltips - {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-inline-start - padding left on tooltips -  {@default var(--rh-space-md, 8px)}
 * @cssprop --rh-tooltip-content-padding-inline-end - padding right on tooltips - {@default var(--rh-space-md, 8px)}
 */
@customElement('rh-audio-player')
export class RhAudioPlayer extends LitElement {
  static readonly styles = [buttonStyles, styles, rangeStyles];

  private static instances = new Set<RhAudioPlayer>();

  // TODO: use rh-icon
  private static icons = {
    close: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <path d="M14.3,12l3.4-3.4c0.4-0.4,0.4-1.1,0-1.5l-0.8-0.8c-0.4-0.4-1.1-0.4-1.5,0L12,9.7L8.6,6.3
        c-0.4-0.4-1.1-0.4-1.5,0L6.3,7.1c-0.4,0.4-0.4,1.1,0,1.5L9.7,12l-3.4,3.4c-0.4,0.4-0.4,1.1,0,1.5l0.8,0.8c0.4,0.4,1.1,0.4,1.5,0
        l3.4-3.4l3.4,3.4c0.4,0.4,1.1,0.4,1.5,0l0.8-0.8c0.4-0.4,0.4-1.1,0-1.5L14.3,12z"/>
      </svg>
    `,
    download: html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
      </svg>
    `,
    forward: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
        <path d="M28,6.6L22.4,2v3.7h-7.4C9,5.7,4,10.6,4,16.7c0,6.1,5,11.1,11.1,11.1h7.4V26h-1.8h-5.5c-5.1,0-9.2-4.1-9.2-9.2
          c0-5.1,4.1-9.2,9.2-9.2h5.5h1.8v3.7L28,6.6z"/>
        <g>
          <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
          <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3
            c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4
            C18,20.5,17.1,20.2,16.4,19.6z"/>
        </g>
      </svg>
    `,
    menuKebab: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <circle cx="12" cy="22" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="2" r="2"/>
      </svg>
    `,
    menuMeatball: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <circle cx="22" cy="12" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="2" cy="12" r="2"/>
      </svg>
    `,
    pause: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <rect x="15.3" y="2.1" width="4.4" height="19.9"/>
        <rect x="4.3" y="2.1" width="4.4" height="19.9"/>
      </svg>
    `,
    play: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <path d="M23.2,12L5.6,20.8V3.2L23.2,12z"/>
      </svg>
    `,
    playbackRateFaster: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14">
        <path d="M11.2,7.7l-5.9,5.9c-0.4,0.4-1.1,0.4-1.5,0c0,0,0,0,0,0l-1-1c-0.4-0.4-0.4-1.1,0-1.5c0,0,0,0,0,0L7,7
          L2.8,2.8c-0.4-0.4-0.4-1.1,0-1.5c0,0,0,0,0,0l1-1c0.4-0.4,1.1-0.4,1.5,0c0,0,0,0,0,0l5.9,5.9C11.6,6.7,11.6,7.3,11.2,7.7
          C11.2,7.7,11.2,7.7,11.2,7.7z"/>
      </svg>
    `,
    playbackRateSlower: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14">
        <path d="M2.8,7.7l5.9,5.9c0.4,0.4,1.1,0.4,1.5,0c0,0,0,0,0,0l1-1c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0L7,7
          l4.2-4.2c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0l-1-1c-0.4-0.4-1.1-0.4-1.5,0c0,0,0,0,0,0L2.8,6.3C2.4,6.7,2.4,7.3,2.8,7.7
          C2.8,7.7,2.8,7.7,2.8,7.7z"/>
      </svg>
    `,
    rewind: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
        <g>
          <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
          <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3
            c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4
            C18,20.5,17.1,20.2,16.4,19.6z"/>
        </g>
        <path d="M4,6.6L9.5,2v3.7h7.4c6.1,0,11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1H9.5V26h1.8h5.5
          c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-5.5H9.5v3.7L4,6.6z"/>
      </svg>
    `,
    volumeMax: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <path d="M14.2,2.2v2.2c4.3,0,7.6,3.4,7.6,7.6s-3.4,7.6-7.6,7.6v2.2c5.5,0,9.8-4.4,9.8-9.8S19.6,2.2,14.2,2.2z"/>
        <path d="M14.2,6.5v2.2c1.9,0,3.3,1.4,3.3,3.3s-1.4,3.3-3.3,3.3v2.2c3.1,0,5.5-2.4,5.5-5.5S17.2,6.5,14.2,6.5z"/>
        <path d="M12,2.2L5.3,7.6H2.2C1,7.6,0,8.6,0,9.8v4.4c0,1.2,1,2.2,2.2,2.2h3.2l6.7,5.5V2.2z"/>
      </svg>
    `,
    volumeMuted: html`
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
        <polygon points="23.4,8.7 21.9,7.3 18.6,10.6 15.4,7.3 13.9,8.7 17.2,12 13.9,15.3 15.4,16.7 18.6,13.4 21.9,16.7 
          23.4,15.3 20.1,12 "/>
        <path d="M11.6,3L5.5,8H2.6c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h2.9l6.1,5V3z"/>
      </svg>
    `,
  };

  static enUS = {
    'play': 'Play',
    'pause': 'Pause',
    'seek': 'Seek',
    'rewind': 'Rewind 15 seconds',
    'advance': 'Advance 15 seconds',
    'speed': 'Speed',
    'mute': 'Mute',
    'unmute': 'Unmute',
    'volume': 'Volume',
    'menu': 'More options',
    'close': 'Close',
    'about': 'About the episode',
    'subscribe': 'Subscribe',
    'transcript': 'Transcript',
    'autoscroll': 'Autoscroll',
    'download': 'Download'
  };

  /**  Audio's series name, e.g. Podcast series. */
  @property({ reflect: true }) mediaseries?: string;

  /**  Audio's title, e.g. Podcast episode title. */
  @property({ reflect: true }) mediatitle?: string;

  /**
   * Layout:
   *   - `mini` (default): minimal controls: play/pause, range; volume and other controls hidden behind menu
   *   - `compact`: artwork and more controls: time, skip, volume
   *   - `compact-wide`: like compact but full width
   *   - `full`: maximal controls and artwork
   */
  @property({ reflect: true }) layout?: 'mini' | 'compact' | 'compact-wide' | 'full';

  @property({ reflect: true, attribute: 'has-accent-color' }) hasAccentColor = false;

  /** URL to audio's artwork */
  @property({ reflect: true }) poster?: string;

  /** Playback volume */
  @property({ reflect: true, type: Number }) volume = 0.5;

  /** Playback rate */
  @property({ reflect: true, type: Number }) playbackRate = 1;

  /** Playback rate */
  @property({ reflect: true, type: Boolean }) expanded = false;

  @property({ reflect: true }) lang!: string;

  @property({ attribute: false }) microcopy = {};

  /** Element's color palette */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  get #duration() {
    return this.#mediaElement?.duration ?? 0;
  }

  get #readyState() {
    return this.#mediaElement?.readyState ?? 0;
  }

  #isMobileSafari = window.navigator.userAgent.match(/(iPhone|iPad|Mobile).*(AppleWebkit|Safari)/i);

  #paused = true;

  #unmutedVolume = this.volume;

  @queryAssignedElements({ slot: 'series' })
  private _mediaseries?: HTMLElement[];

  @queryAssignedElements({ slot: 'title' })
  private _mediatitle?: HTMLElement[];

  @queryAssignedElements({ slot: 'transcript', selector: 'rh-audio-player-transcript' })
  private _transcripts?: RhAudioPlayerTranscript[];

  @queryAssignedElements({ slot: 'about', selector: 'rh-audio-player-about' })
  private _abouts?: RhAudioPlayerAbout[];

  @queryAssignedElements({ slot: 'subscribe', selector: 'rh-audio-player-subscribe' })
  private _subscribe?: RhAudioPlayerSubscribe[];

  #headingLevelController = new HeadingController(this);

  #mediaElement?: HTMLAudioElement;

  #lastMediaElement?: HTMLAudioElement;

  #dir = new DirController(this);

  #logger = new Logger(this);

  #translation = new I18nController(this, {
    'en': {
      ...RhAudioPlayer.enUS
    },
    'en-US': {
      ...RhAudioPlayer.enUS
    }, ...this.microcopy ?? {}
  });

  #menufloat = new FloatingDOMController(this, {
    content: () => this.shadowRoot?.getElementById('menu'),
    invoker: () => this.shadowRoot?.getElementById('menu-button'),
  });

  /** Added to media element in light DOM. Bound so they can be cleaned up later */
  #listeners = new Map(Object.entries({
    canplay: this.#onCanplay.bind(this),
    canplaythrough: this.#onCanplaythrough.bind(this),
    durationchange: this.#onDurationchange.bind(this),
    loadedmetadata: this.#onLoadedmetadata.bind(this),
    loadeddata: this.#onLoadeddata.bind(this),
    ended: this.#onEnded.bind(this),
    pause: this.#onPause.bind(this),
    play: this.#onPlay.bind(this),
    playing: this.#onPlaying.bind(this),
    ratechange: this.#onPlaybackRateChange.bind(this),
    seeked: this.#onSeeked.bind(this),
    seeking: this.#onSeeking.bind(this),
    timeupdate: this.#onTimeupdate.bind(this),
    volumechange: this.#onVolumechange.bind(this),
  }));

  get #isMini() {
    return !this.#isFull && !this.#isCompact;
  }

  get #isFull() {
    return this.layout === 'full';
  }

  get #isCompact() {
    return !!this.layout?.startsWith('compact');
  }

  get #panels() {
    return [this.#about, this.#subscribe, this.#transcript].filter(panel => !!panel);
  }

  get #hasMenu() {
    return (
      this.#panels.length > 1 ||
      !!this.mediaseries ||
      !!this.mediatitle ||
      (this._abouts?.length ?? 0) > 0
    );
  }

  get #menuOpen() {
    return this.#menufloat.open;
  }

  set #menuOpen(open) {
    if (open) {
      this.#showMenu();
    } else {
      this.#hideMenu();
    }
  }

  /**
   * gets list of allowable playback rates
   */
  get #playbackRates() {
    const min = 0.2; const max = 4; const step = 0.2;
    return [...Array(Math.round(max / step)).keys()].map(k=>k * step + min);
  }

  /**
   * gets media media time if set
   */
  get #mediaEnd() {
    return (this.#mediaElement?.seekable?.end?.length || -1) > 0 &&
    this.#mediaElement?.seekable?.end(0) ?
      this.#mediaElement?.seekable?.end(0)
      : false;
  }

  /**
   * gets media media time if set
   */
  get #mediaStart() {
    return this.#mediaElement?.seekable?.start(0) ?
      this.#mediaElement?.seekable?.start(0)
      : 0;
  }

  get #elapsedText() {
    return getFormattedTime(this.currentTime || 0);
  }

  get #transcript(): RhAudioPlayerTranscript | undefined {
    const [t] = this._transcripts ?? [];
    return t ?? this.shadowRoot?.querySelector('rh-audio-player-transcript');
  }

  get #about() {
    const [a = this.shadowRoot?.querySelector('rh-audio-player-about')] = this._abouts ?? [];
    return a;
  }

  get #subscribe() {
    return this._subscribe?.[0];
  }

  /** elapsed time in seconds */
  get currentTime() {
    return this.#mediaElement?.currentTime ?? 0;
  }

  set currentTime(seconds: number) {
    if (this.#mediaElement) {
      this.#mediaElement.currentTime = seconds;
    }
  }

  /** total time in seconds */
  get duration() {
    return this.#duration;
  }

  /** whether audio is muted */
  get muted(): boolean {
    return this.volume === 0;
  }

  /** whether media is paused */
  get paused(): boolean {
    return !this.#mediaElement || !!this.#paused;
  }

  /** media status */
  get readyState(): number {
    return this.#readyState || 0;
  }

  protected override async getUpdateComplete(): Promise<boolean> {
    return Promise.all([
      super.getUpdateComplete(),
      ...Array.from(this.shadowRoot?.querySelectorAll('rh-menu') ?? [], x => x.updateComplete),
    ]).then(xs => xs.every(Boolean));
  }

  connectedCallback() {
    super.connectedCallback();
    RhAudioPlayer.instances.add(this);
    this.addEventListener('cueseek', this.#onCueseek);
    this.#initMediaElement();
    this.#loadLanguage();
  }

  disconnectedCallback() {
    this.#cleanUpListeners();
    RhAudioPlayer.instances.delete(this);
    super.disconnectedCallback();
  }

  render() {
    const { on = '' } = this;
    const { dir } = this.#dir;
    const { open, styles = {} } = this.#menufloat;
    const showMenu = this.#hasMenu;
    const muteicon = !this.muted ? RhAudioPlayer.icons.volumeMax : RhAudioPlayer.icons.volumeMuted;
    const mutelabel = !this.muted ? this.#translation.get('mute') : this.#translation.get('unmute');
    const rewinddisabled =
      !this.#mediaElement ||
      this.#readyState < 1 ||
      this.currentTime === 0 ||
      !this.#mediaEnd;
    const forwarddisabled =
      !this.#mediaElement ||
      this.#readyState < 1 ||
      this.currentTime === this.duration ||
      !this.#mediaEnd;
    const playlabel = !this.paused ? this.#translation.get('pause') : this.#translation.get('play');
    const playdisabled = this.#readyState < 3 && this.duration < 1;
    const playicon = !this.paused ? RhAudioPlayer.icons.pause : RhAudioPlayer.icons.play;

    const currentTimeQ = (this.currentTime / this.duration);
    const currentTimePct = (Number.isNaN(currentTimeQ) ? 0 : currentTimeQ) * 100;

    return html`
      <rh-context-provider id="container" class="${classMap({ [on]: !!on, [dir]: true, 'show-menu': showMenu, 'has-accent-color': !!this.hasAccentColor, 'mobile-safari': !!this.#isMobileSafari })}" color-palette="${ifDefined(this.colorPalette)}">
        <input type="hidden" value=${this.#readyState}>
        <slot id="media" name="media" @slotchange="${this.#initMediaElement}"></slot>
        <div class="${this.expanded ? 'expanded' : ''}"
             part="toolbar"
             aria-controls="media"
             aria-label="Media Controls">${!this.poster ? '' : html`
          <div id="poster"><img .src="${this.poster}" aria-hidden="true"></div>`}
          <rh-tooltip id="play-tooltip">
            <button id="play"
                    aria-label="${playlabel}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement || playdisabled}
                    @click=${this.#onPlayClick}
                    @focus=${this.#onPlayFocus}>
              ${playicon}
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <div id="full-title">
            <rh-audio-player-scrolling-text-overflow id="mediaseries" ?hidden=${!this.mediaseries}>
              <slot name="series" @slotchange=${this.#onTitleChange}>${this.mediaseries}</slot>
            </rh-audio-player-scrolling-text-overflow>
            <rh-audio-player-scrolling-text-overflow id="mediatitle" ?hidden=${!this.mediatitle}>
              <slot name="title" @slotchange=${this.#onTitleChange}>${this.mediatitle}</slot>
            </rh-audio-player-scrolling-text-overflow>
          </div>

          <rh-tooltip id="time-tooltip">
            <input id="time"
                      class="toolbar-button"
                      aria-label="${this.#translation.get('seek')}"
                      min="0"
                      max="100"
                      step="1"
                      type="range"
                      value="${currentTimePct}"
                      ?disabled="${this.duration === 0}"
                      @input=${this.#onTimeSlider}>
            <span slot="content">${this.#translation.get('seek')}</span>
          </rh-tooltip>

          <span id="current">${this.#elapsedText}</span>

          <div class="spacer"></div>${this.#isMini ? '' : html`

          ${this.#playbackRateTemplate()}`}

          ${this.#isMobileSafari ? '' : html`

          <rh-tooltip id="mute-tooltip">
            <button id="mute"
                    aria-label="${mutelabel}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement}
                    @click=${this.#onMuteButton}>
              ${muteicon}
            </button>
            <span slot="content">${mutelabel}</span>
          </rh-tooltip>${this.#isMini ? '' : html`

          <rh-tooltip id="volume-tooltip">
            <span slot="content">${this.#translation.get('volume')}</span>
            <input id="volume"
                      class="toolbar-button"
                      aria-label="${this.#translation.get('volume')}"
                      min=0
                      max=${!this.#mediaElement ? 0 : 100}
                      step=1
                      type="range"
                      value=${this.volume * 100}
                      ?disabled="${!this.#mediaElement}"
                      @input=${this.#onVolumeSlider}>
            </rh-tooltip>
          `}
          `}${!this.#isFull ? '' : html`

          <span id="full-current">${this.#elapsedText}</span>

          <span id="duration">
            <span class="sr-only">/</span>${getFormattedTime(this.duration)}
          </span>
  
          <div class="full-spacer"></div>

          ${this.#playbackRateTemplate('full-playback-rate')}

          <rh-tooltip id="rewind-tooltip">
            <button id="rewind"
                    aria-label="${this.#translation.get('rewind')}"
                    class="toolbar-button"
                    ?disabled=${rewinddisabled}
                    @click=${() => this.rewind()}>
              ${RhAudioPlayer.icons.rewind}
            </button>
            <span slot="content">${this.#translation.get('rewind')}</span>
          </rh-tooltip>

          <rh-tooltip id="full-play-tooltip">
            <button id="full-play"
                    aria-label="${playlabel}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement || playdisabled}
                    @click=${this.#onPlayClick}
                    @focus=${this.#onPlayFocus}>
              ${playicon}
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <rh-tooltip id="forward-tooltip">
            <button id="forward"
                    aria-label="${this.#translation.get('advance')}"
                    class="toolbar-button"
                    ?disabled=${forwarddisabled}
                    @click=${() => this.forward()}>
              ${RhAudioPlayer.icons.forward}
            </button>
            <span slot="content">${this.#translation.get('advance')}</span>
          </rh-tooltip>`}${!this.#hasMenu ? '' : html`

          <rh-tooltip id="menu-tooltip" slot="button">
            <button id="menu-button"
                    class="toolbar-button"
                    aria-label="${this.#translation.get('menu')}"
                    aria-controls="menu"
                    aria-haspopup="true"
                    @click="${() => this.#menuOpen = !this.#menuOpen}">
              ${RhAudioPlayer.icons.menuKebab}
            </button>
            <span slot="content">${this.#translation.get('menu')}</span>
          </rh-tooltip>

          <rh-menu id="menu"
                   aria-labelledby="menu-button"
                   aria-hidden="${String(!this.#menuOpen) as 'true' | 'false'}"
                   style="${styleMap(styles)}"
                   class="${classMap({ open })}"
                   @keydown="${this.#onMenuKeydown}"
                   @focusout="${this.#onMenuFocusout}">${this.#panels.map(panel => !panel ? '' : html`
            <button aria-label="${panel.menuLabel}"
                    aria-controls="panel"
                    @click="${() => this.#selectOpenPanel(panel)}">
              ${panel.menuLabel}
            </button>`)}
          </rh-menu>`}
          <rh-tooltip id="close-tooltip">
            <button id="close"
                    aria-label="${this.#translation.get('close')}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement}
                    aria-controls="panel"
                    @click="${this.#selectOpenPanel}"
                    @keydown="${this.#onCloseKeydown}">
              ${RhAudioPlayer.icons.close}
            </button>
            <span slot="content">${this.#translation.get('close')}</span>
          </rh-tooltip>
          <div class="full-spacer"></div>
        </div>

        <div id="panel" role="dialog" aria-live="polite" part="panel" ?hidden=${!this.expanded || !this.#hasMenu}>
          <slot name="about" 
            part="about" 
            @slotchange=${this.#onPanelChange}>
            <rh-audio-player-about 
              heading-level="${this.#headingLevelController.headingLevel}">
            </rh-audio-player-about>
          </slot>
          <slot name="subscribe" 
            part="subscribe" 
            @slotchange=${this.#onPanelChange}>
          </slot>
          <slot name="transcript" 
            part="transcript" 
            @slotchange=${this.#onPanelChange} 
            @transcriptdownload=${this.#onTranscriptDownload}>
          </slot>
        </div>
      </rh-context-provider>
    `;
  }

  /** template for playback rate controls */
  #playbackRateTemplate(id = 'playback-rate') {
    return html`
      <rh-tooltip id="${id}-tooltip">
        <div id="${id}-stepper">
          <button id="${id}-stepdown"
                  class="playback-rate-step"
                  tabindex="-1"
                  aria-hidden="true"
                  ?disabled="${!this.#mediaElement || this.playbackRate < 0.4}"
                  @click="${this.decrementPlaybackrate}">
            ${RhAudioPlayer.icons.playbackRateSlower}
          </button>
          <select id="${id}"
                  aria-label="${this.#translation.get('speed')}"
                  ?disabled=${!this.#mediaElement}
                  @click="${this.#onPlaybackRateSelect}"
                  @change="${this.#onPlaybackRateSelect}"
                  .value=${this.playbackRate?.toFixed(1)}>${this.#playbackRates.map(step=>html`
            <option .value=${step.toFixed(1)}
              ?selected=${this.playbackRate.toFixed(1) === step.toFixed(1)}>
              ${step.toFixed(1)}x
            </option>`)}
          </select>
          <button id="${id}-stepup"
                  class="playback-rate-step"
                  tabindex="-1"
                  aria-hidden="true"
                  ?disabled="${!this.#mediaElement || this.playbackRate > 3.8}"
                  @click="${this.incrementPlaybackrate}">
            ${RhAudioPlayer.icons.playbackRateFaster}
          </button>
        </div>
        <span slot="content">${this.#translation.get('speed')}</span>
      </rh-tooltip>
    `;
  }

  async firstUpdated() {
    // waiting for next render so that rh-menu is present in shadow root
    await this.updateComplete;
    this.#unsetTabindexFromMenuItems();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('volume') && !!this.#mediaElement && this.volume !== this.#mediaElement.volume) {
      this.#mediaElement.volume = this.volume;
    }
    if (changedProperties.has('lang')) {
      this.#loadLanguage();
    }
  }

  async #loadLanguage(lang = this.#translation.language) {
    const url = new URL(`./i18n/${lang}.json`, import.meta.url);
    await this.#translation.loadTranslation(url, lang);
    this.#updateMenuLabels();
    this.#updateTranscriptLabels();
  }

  #updateMenuLabels() {
    if (this.#about?.menuLabel) { this.#about.menuLabel = this.#translation.get('about'); }
    if (this.#subscribe?.menuLabel) { this.#subscribe.menuLabel = this.#translation.get('subscribe'); }
    if (this.#transcript?.menuLabel) { this.#transcript.menuLabel = this.#translation.get('transcript'); }
  }

  #updateTranscriptLabels() {
    if (this.#transcript?.autoscrollLabel) { this.#transcript.autoscrollLabel = this.#translation.get('autoscroll'); }
    if (this.#transcript?.downloadLabel) { this.#transcript.downloadLabel = this.#translation.get('download'); }
  }

  #cleanUpListeners() {
    for (const [event, listener] of this.#listeners) {
      this.#lastMediaElement?.removeEventListener(event, listener);
    }
  }

  /**
   * sets initial values based media player metadata
   */
  #initMediaElement(slotchangeevent?: Event) {
    if (slotchangeevent) {
      this.#cleanUpListeners();
      this.#lastMediaElement = this.querySelector('audio') ?? undefined;
    }

    this.#mediaElement = this.querySelector('audio') ?? undefined;

    if (this.#mediaElement) {
      this.#mediaElement.removeAttribute('controls');
      this.#mediaElement.setAttribute('seekable', 'seekable');
      this.volume = this.#mediaElement.volume || 0.5;

      for (const [event, listener] of this.#listeners) {
        this.#mediaElement.addEventListener(event, listener);
      }
    }
  }

  /**
   * handles media `canplay` event
   */
  #onCanplay() {
    this.volume = this.#mediaElement?.volume || 0.5;
  }

  /**
   * handles media `canplaythrough` event
   */
  #onCanplaythrough() {
    this.requestUpdate();
  }

  #onCueseek(event: Event) {
    const target = event.target as unknown;
    const cue = target as RhAudioPlayerCue;
    const start = cue?.startTime;
    if (start) {
      this.seek(start);
    }
    this.#onTimeupdate();
  }

  /**
   * handles media `durationchange` event
   */
  #onDurationchange() {
    this.requestUpdate();
    this.#transcript?.setDuration(this.duration);
  }

  /**
   * handles media `ended` event
   */
  #onEnded() {
    this.#paused = true;
  }

  /**
   * handles media `loadeddata` event
   */
  #onLoadeddata() {
    this.requestUpdate();
  }

  /**
   * handles media `loadedmetadata` event
   */
  #onLoadedmetadata() {
    this.requestUpdate();
  }

  /**
   * handles mute button click to toggle mute
   */
  #onMuteButton() {
    !this.muted ? this.mute() : this.unmute();
  }

  /**
   * handles media `pause` event by updating component's `_paused` state
   */
  #onPause() {
    this.#paused = true;
    this.requestUpdate();
  }

  /**
   * handles media `play` event by updating component's `_paused` state
   */
  #onPlay() {
    this.#paused = false;
    this.requestUpdate();
  }

  /**
   * handles changes to media element playback rate
   * by updating component playbackRate property
   */
  #onPlaybackRateChange() {
    if (!this.#mediaElement || this.playbackRate !== this.#mediaElement.playbackRate) {
      this.playbackRate = this.#mediaElement?.playbackRate || 1;
    }
  }

  /**
   * handles changes to value of playback rate number input
   * by updating component playbackRate property
   */
  #onPlaybackRateSelect(event: Event) {
    if (this.#mediaElement) {
      const target = event?.target as HTMLSelectElement;
      const val = !target || !target.value ? 1.00 : parseFloat(target.value);
      const pbr = this.#validPlaybackRate(val);
      this.#mediaElement.playbackRate = this.playbackRate = pbr;
    }
  }

  /**
   * handles play button click by toggling play / pause
   */
  async #onPlayClick(event: Event) {
    const target = event?.target as HTMLElement;
    const tooltip = target?.parentElement?.closest('rh-tooltip') as RhTooltip | null;
    for (const instance of RhAudioPlayer.instances) {
      if (instance !== this) {
        instance.pause();
      }
    }
    if (this.#paused) {
      this.play();
    } else {
      this.pause();
    }
    setTimeout(() => tooltip?.show(), 10);
  }

  /**
   * handles play button click by toggling play / pause
   */
  #onPlayFocus() {
    type Scroller = RhAudioPlayerScrollingTextOverflow | RhAudioPlayerScrollingTextOverflow;
    for (const id of ['mediaseries', 'mediatitle']) {
      const scroller = this.shadowRoot?.querySelector<Scroller>(`#${id}`);
      scroller?.startScrolling();
    }
  }

  /**
   * handles media `playing` event by updating component's `_paused` state
   */
  #onPlaying() {
    this.#paused = false;
    this.requestUpdate();
  }

  /**
   * handles media `seeked` event by updating component's `_currentTime` state
   */
  #onSeeked() {
    this.requestUpdate();
  }

  /**
   * handles media `seeking` event by updating component's `_currentTime` state
   */
  #onSeeking() {
    this.requestUpdate();
  }

  /**
   * handles time input changes by seeking to input value
   */
  #onTimeSlider(event: Event & { target: HTMLInputElement }) {
    if (this.#mediaEnd) {
      const percent = parseFloat(event.target.value) ?? 0;
      const seconds = this.duration * (percent / 100);
      this.seek(seconds);
    }
  }

  /**
   * handles media `timeupdate` event by updating component's `_currentTime` state
   */
  #onTimeupdate() {
    this.#transcript?.setActiveCues(this.currentTime);
    this.requestUpdate();
  }

  /** updates panel text */
  #onPanelChange() {
    this.#updateMenuLabels();
    this.#updateTranscriptLabels();
    this.#onTitleChange();
  }

  /** updates about panel with title and series text */
  #onTitleChange() {
    const mediatitle = this._mediatitle?.[0]?.textContent ?? '';
    const mediaseries = this._mediaseries?.[0]?.textContent ?? '';
    if (mediatitle.length > 0) {
      this.mediatitle ||= mediatitle;
    }
    if (mediaseries.length > 0) {
      this.mediaseries ||= mediaseries;
    }
    if (this.#about && this.mediaseries) {
      this.#about.mediaseries = this.mediaseries;
    }
    if (this.#about && this.mediatitle) {
      this.#about.mediatitle = this.mediatitle;
    }
  }

  /**
   * handles media `volumechange` event by
   * updating component's `_muted` state and `volume` property
   */
  #onVolumechange() {
    if (this.#mediaElement) {
      const { volume } = this.#mediaElement;
      if (volume > 0) {
        this.#unmutedVolume = this.#mediaElement.volume;
      }
      this.volume = Math.max(0, Math.min(10, this.#mediaElement.volume));
    }
  }

  /**
   * handles volume input changes by setting media volume to input value
   */
  #onVolumeSlider(event: Event & { target: HTMLInputElement }) {
    const level = parseFloat(event.target.value || '-1');
    if (this.#mediaElement) {
      this.#mediaElement.volume = Math.max(0, Math.min(10, level / 100));
    }
  }

  /**
   * ensures playback rate value falls between 0.25 and 4
   */
  #validPlaybackRate(number: number) {
    const min = 0.2;
    const max = 4;
    const step = 0.2;
    // ensures number between min and maxk
    const inRange = Math.max(min, Math.min(max, number));
    // used to round number to nearest step
    const multiplier = 1 / step;
    return Math.round(inRange * multiplier) / multiplier;
  }

  /**
   * opens particular panel open or closes panels if none given
   */
  #selectOpenPanel(
    panel?: RhAudioPlayerAbout | RhAudioPlayerSubscribe | RhAudioPlayerTranscript
  ) {
    const panels = [this.#about, this.#subscribe, this.#transcript];
    panels.forEach(item => item?.toggleAttribute('hidden', panel !== item));
    this.expanded = !!panel && panels.includes(panel);
    const focusElement = this.expanded ? this.shadowRoot?.getElementById('close') : this.shadowRoot?.getElementById('menu-button');

    setTimeout(() => {
      setTimeout(() => {
        focusElement?.focus();
        if (panel === this.#transcript) {
          this.#transcript?.setActiveCues(this.currentTime);
        }
      }, 1);
      setTimeout(() => {
        if (panel?.scrollText) {
          panel.scrollText();
        }
      }, 1000);
    }, 1);
  }

  #lastActiveMenuItem?: HTMLElement;

  /**
   * hides panel with Escape key
   * @param event {KeyboardEvent}
   */
  async #onCloseKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.#selectOpenPanel();
    }
  }

  /**
   * hides menu with Escape key
   */
  async #onMenuKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      await this.#hideMenu();
    }
  }

  /**
   * hides menu when left without focus
   */
  #onMenuFocusout(event: FocusEvent) {
    const { relatedTarget } = event;
    if (
      relatedTarget instanceof HTMLElement &&
      relatedTarget.closest('rh-menu') !== this.shadowRoot?.getElementById('menu')
    ) {
      setTimeout(() => this.#hideMenu(), 300);
    }
  }

  async #showMenu() {
    await this.updateComplete;
    const menu = this.shadowRoot?.getElementById('menu') as RhMenu;
    const button = this.shadowRoot?.getElementById('menu-button') as HTMLElement;
    if (!menu || !button) { return; }
    if (this.#lastActiveMenuItem) {
      menu.activateItem(this.#lastActiveMenuItem);
    }
    const placement = 'bottom-start';
    const width = 0 - (button?.offsetWidth ?? 0) + (menu?.offsetWidth ?? 0);
    const height = 0 - (button?.offsetHeight ?? 0) + (menu?.offsetHeight ?? 0);
    const mainAxis = placement?.match(/left/) ? width : placement?.match(/top/) ? height : 0;
    const offset = { mainAxis: mainAxis, alignmentAxis: 0 };
    await this.#menufloat.show({ offset, placement });
    await this.updateComplete;
    menu.activateItem(menu.activeItem as HTMLElement);
    window.addEventListener('click', this.#onWindowClick);
  }

  #unsetTabindexFromMenuItems() {
    const menu = this.shadowRoot?.getElementById('menu') as RhMenu;
    this.#lastActiveMenuItem = menu?.activeItem;
    for (const item of menu?.querySelectorAll<HTMLElement>('[tabindex]') ?? []) {
      item.tabIndex = -1;
    }
  }

  async #hideMenu() {
    this.#unsetTabindexFromMenuItems();
    window.removeEventListener('click', this.#onWindowClick);
    await this.#menufloat.hide();
    this.shadowRoot?.getElementById('menu-button')?.focus();
  }

  #onTranscriptDownload() {
    const transcript = this.#transcript?.downloadText;
    const label = this.#transcript?.label;
    const a = document.createElement('a');
    const title = [this.mediaseries, this.mediatitle, label].join(' ');
    const filename = (this.mediatitle || this.mediaseries || label || 'transcript').replace(/[^\w^\d^-]/g, '');
    const contents = `${title}\n${transcript}`;
    a.setAttribute('href', `data:text/plain;charset=UTF-8,${encodeURIComponent(contents)}`);
    a.setAttribute('download', `${filename}.txt`);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  #onWindowClick = (event: MouseEvent) => {
    const menu = this.shadowRoot?.getElementById('menu-button');
    if (!menu || !event.composedPath().includes(menu)) {
      this.#hideMenu();
    }
  };

  /**
   * Mutes media volume
   */
  mute() {
    if (this.#mediaElement) {
      this.#unmutedVolume = Math.max(0.1, this.#mediaElement?.volume);
      this.#mediaElement.volume = 0;
    }
  }

  /**
   * Unmutes media volume
   */
  unmute() {
    if (this.#mediaElement) {
      this.#mediaElement.volume = Math.max(this.#unmutedVolume, 0.1);
    }
  }

  /**
   * Increases media playback rate by 0.25x
   */
  incrementPlaybackrate() {
    if (this.#mediaElement) {
      this.#mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(this.#mediaElement.playbackRate + 0.2);
    }
  }

  /**
   * Decreases media playback rate by 0.25x
   */
  decrementPlaybackrate() {
    if (this.#mediaElement) {
      this.#mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(this.#mediaElement.playbackRate - 0.2);
    }
  }

  /**
   * Pauses playback
   */
  pause() {
    return this.#mediaElement?.pause?.();
  }

  /**
   * Starts or resumes playback
   */
  async play() {
    return await this.#mediaElement?.play?.();
  }

  /**
   * Seeks media to a given point in seconds
   */
  seek(seconds: number) {
    this.#mediaElement?.setAttribute('seekable', 'seekable');
    if (this.#mediaElement) {
      const time = this.#mediaEnd ? Math.max(this.#mediaStart, Math.min(seconds, this.#mediaEnd)) : -1;
      if (time >= 0) {
        this.#mediaElement.currentTime = time;
        this.requestUpdate();
      }
    }
  }

  /**
   * Seeks media a given number of secons from current elapsed time
   */
  seekFromCurrentTime(seconds = 0) {
    const currentTime = this.#mediaElement?.currentTime || 0;
    const time = currentTime + seconds;
    this.seek(time);
  }

  /**
   * Rewinds media by 15 seconds (default)
   * @param by number of seconds to rewind
   */
  rewind(by = 15) {
    this.seekFromCurrentTime(-by);
  }

  /**
   * Advances media by 15 seconds (default)
   * @param by number of seconds to advance
   */
  forward(by = 15) {
    this.seekFromCurrentTime(by);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player': RhAudioPlayer;
  }
}
