import { LitElement, html, nothing } from 'lit';
import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { DirController } from '../../lib/DirController.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { MicrocopyController } from '../../lib/MicrocopyController.js';

import { RhRange } from '../rh-range/rh-range.js';
import { RhAudioPlayerCue, getFormattedTime } from './rh-audio-player-cue.js';
import { RhAudioPlayerAbout } from './rh-audio-player-about.js';
import { RhAudioPlayerSubscribe } from './rh-audio-player-subscribe.js';
import { RhAudioPlayerTranscript } from './rh-audio-player-transcript.js';
import { RhAudioPlayerMenu } from './rh-audio-player-menu.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';

import '../rh-tooltip/rh-tooltip.js';

import buttonStyles from './rh-audio-player-button-styles.css';
import styles from './rh-audio-player.css';

/**
 * Audio Player Scrolling Text Overflow
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot about - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-audio-player-transcript` panel with `rh-audio-player-cue` elements
 * @cssprop --rh-audio-player-background-color - color of the player background - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-audio-player-focus-background-color - color of focused items that use background color - {@default var(--rh-color-surface-light, #f0f0f0)}
 * @cssprop --rh-audio-player-border-color - color of the player border - {@default var(--rh-color-border-subtle-on-light, #d2d2d2)}
 * @cssprop --rh-audio-player-text-color - color of the player text - {@default var(--rh-color-text-primary-on-light, #151515)}
 */
@customElement('rh-audio-player')
export class RhAudioPlayer extends LitElement {
  static readonly styles = [buttonStyles, styles];

  static instances = new Set<RhAudioPlayer>();

  // TODO: use rh-icon
  static icons = {
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

  @property({ reflect: true }) mediaseries?: string;

  @property({ reflect: true }) mediatitle?: string;

  @property({ reflect: true }) mode?: 'full' | 'compact' | 'compact-wide';

  @property({ reflect: true, attribute: 'panels-always-light' }) panelsAlwaysLight = false;

  @property({ reflect: true }) poster?: string;

  @property({ reflect: true, type: Number }) volume = 0.5;

  @property({ reflect: true, type: Number }) playbackRate = 1;

  @property({ reflect: true, type: Boolean }) expanded = false;

  @property({ attribute: false }) microcopy = {};

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  @state() private _currentTime = 0;

  @state() private _duration = 0;

  @state() private _readyState = 0;

  @state() private _paused = true;

  @state() private _muted = false;

  #unmutedVolume = this.volume;

  @queryAssignedElements({ slot: 'series' }) private _mediaseries?: HTMLElement[];

  @queryAssignedElements({ slot: 'title' }) private _mediatitle?: HTMLElement[];

  @queryAssignedElements({ slot: 'media', selector: 'audio' })
  private _mediaElements?: HTMLMediaElement[];

  @queryAssignedElements({ slot: 'transcript', selector: 'rh-audio-player-transcript' })
  private _transcripts?: RhAudioPlayerTranscript[];

  @queryAssignedElements({ slot: 'about', selector: 'rh-audio-player-about' })
  private _abouts?: RhAudioPlayerAbout[];

  @queryAssignedElements({ slot: 'subscribe', selector: 'rh-audio-player-subscribe' })
  private _subscribes?: RhAudioPlayerSubscribe[];

  @query('#close') private _closeButton?: HTMLButtonElement;

  @query('_menu') private _menu?: RhAudioPlayerMenu;

  @query('rh-audio-player-transcript') private _transcript?: RhAudioPlayerTranscript;

  @query('rh-audio-player-about') private _about?: RhAudioPlayerAbout;

  @query('#mediaseries') private _seriesScroller?: RhAudioPlayerScrollingTextOverflow;

  @query('#mediatitle') private _mediatitleScroller?: RhAudioPlayerScrollingTextOverflow;

  #headingLevelController = new HeadingController(this);

  #dir = new DirController(this);

  #logger = new Logger(this);

  #lastMediaElements = [...this._mediaElements ?? []];

  #translation = new MicrocopyController(this, this.microcopy ?? {});

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
    return this.mode === 'full';
  }

  get #isCompact() {
    return !!this.mode?.startsWith('compact');
  }

  get #panels() {
    return [this.about, this.subscribe, this.transcript].filter(panel => !!panel);
  }

  get #showMenu() {
    return (
      this.#panels.length > 1 ||
      !!this.mediaseries ||
      !!this.mediatitle ||
      (this._abouts?.length ?? 0) > 0
    );
  }

  /**
   * gets list of allowable playback rates
   */
  get #playbackRates() {
    const min = 0.2; const max = 4; const step = 0.2;
    return [...Array(Math.round(max / step)).keys()].map(k=>k * step + min);
  }

  /** media element */
  get #mediaElement() {
    return this._mediaElements?.[0];
  }

  /**
   * gets media media time if set
   */
  get #mediaEnd() {
    return this.#mediaElement?.seekable?.end(0) ?
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

  /** elapsed time in seconds */
  get currentTime() {
    return this._currentTime;
  }

  /** total time in seconds */
  get duration() {
    return this._duration;
  }

  /** whether audio is muted */
  get muted() {
    return this._muted || this.volume === 0;
  }

  /** whather media is paused */
  get paused() {
    return !this.#mediaElement || this.#mediaElement?.paused;
  }

  get transcript() {
    const [t = this._transcript] = this._transcripts ?? [];
    return t;
  }

  get about() {
    const [a = this._about] = this._abouts ?? [];
    return a;
  }

  get subscribe() {
    return this._subscribes?.[0];
  }

  protected override async getUpdateComplete(): Promise<boolean> {
    return Promise.all([
      super.getUpdateComplete(),
      ...Array.from(this.shadowRoot?.querySelectorAll('rh-range') ?? [], x => x.updateComplete)
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
    const muteicon = !this.muted ? RhAudioPlayer.icons.volumeMax : RhAudioPlayer.icons.volumeMuted;
    const mutelabel = !this.muted ? this.#translation.get('mute') : this.#translation.get('unmute');
    const rewinddisabled = this._readyState < 1 || this.currentTime === 0;
    const forwarddisabled = this._readyState < 1 || this.currentTime === this.duration;
    const playlabel = !this._paused ? this.#translation.get('pause') : this.#translation.get('play');
    const playdisabled = this._readyState < 3;
    const playicon = !this._paused ? RhAudioPlayer.icons.pause : RhAudioPlayer.icons.play;
    const menuButtonIcon =
        this.#isCompact ? RhAudioPlayer.icons.menuKebab
      : RhAudioPlayer.icons.menuMeatball;
    const darkPanels = this.on === 'dark' && !this.panelsAlwaysLight;

    return html`
      <div id="container" class="${classMap({ [on]: !!on, [dir]: true, 'dark-panels': darkPanels })}">
        <input type="hidden" value=${this._readyState}>
        <slot id="media" name="media" @slotchange="${this.#initMediaElement}"></slot>
        <div class="${this.expanded ? 'expanded' : ''}"
             part="toolbar"
             aria-controls="media"
             aria-label="Media Controls">${!this.poster ? '' : html`
          <div id="poster"><img .src="${this.poster}" aria-hidden="true"></div>`}
          <rh-tooltip id="play-tooltip">
            <button id="play"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement || playdisabled}
                    @click=${this.#onPlayClick}
                    @focus=${this.#onPlayFocus}>
              ${playicon}
              <span class="sr-only">${playlabel}</span>
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <div id="full-title">
            <rh-audio-player-scrolling-text-overflow id="mediaseries" 
              ?hidden=${!this.mediaseries}
              dir="${dir as 'rtl'|'auto'}"
              color-palette="${ifDefined(this.colorPalette)}">
              <slot name="series" @slotchange=${this.#onTitleChange}>${this.mediaseries}</slot>
            </rh-audio-player-scrolling-text-overflow>
            <rh-audio-player-scrolling-text-overflow id="mediatitle" 
              ?hidden=${!this.mediatitle}
              dir="${dir as 'rtl'|'auto'}"
              color-palette="${ifDefined(this.colorPalette)}">
              <slot name="title" @slotchange=${this.#onTitleChange}>${this.mediatitle}</slot>
            </rh-audio-player-scrolling-text-overflow>
          </div>

          <rh-tooltip id="time-tooltip">
            <label>
              <span class="sr-only">${this.#translation.get('seek')}</span>
              <rh-range id="time"
                  class="toolbar-button"
                  dir="${dir as 'rtl'|'auto'}"
                  color-palette="${ifDefined(this.colorPalette)}"
                  min=0
                  max=${this.duration}
                  step=5
                  value="${this.currentTime as number || 0}"
                  ?disabled="${!this.#mediaElement || this.duration === 0 || !this.#mediaEnd}"
                  @input=${this.#onTimeSlider}>
              </rh-range>
            </label>
            <span slot="content">${this.#translation.get('seek')}</span>
          </rh-tooltip>

          <span id="current">${this.#elapsedText}</span>

          <div class="spacer"></div>${this.#isMini ? '' : html`

          ${this.#playbackRateTemplate()}`}

          <rh-tooltip id="mute-tooltip">
            <button id="mute"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement}
                    @click=${this.#onMuteButton}>
              ${muteicon}
              <span class="sr-only">${mutelabel}</span>
            </button>
            <span slot="content">${mutelabel}</span>
          </rh-tooltip>${this.#isMini ? '' : html`

          <rh-tooltip id="volume-tooltip">
            <label>
              <span class="sr-only">${this.#translation.get('volume')}</span>
              <rh-range id="volume"
                  class="toolbar-button"
                  color-palette="${ifDefined(this.colorPalette)}"
                  dir="${dir as 'ltr'|'rtl'|'auto'}"
                  min=0
                  max=${!this.#mediaElement ? 0 : 100}
                  step=1
                  .value=${this.muted ? 0 : this.volume * 100}
                  ?disabled="${!this.#mediaElement}"
                  @input=${this.#onVolumeSlider}>
              </rh-range>
            </label>
            <span slot="content">${this.#translation.get('volume')}</span>
          </rh-tooltip>`}${!this.#isFull ? '' : html`

          <span id="full-current">${this.#elapsedText}</span>
          <span id="duration">
            <span class="sr-only">/</span>${getFormattedTime(this.duration)}
          </span>

          ${this.#playbackRateTemplate('full-playback-rate')}

          <rh-tooltip id="rewind-tooltip">
            <button id="rewind"
              class="toolbar-button"
              ?disabled=${!this.#mediaElement || rewinddisabled || !this.#mediaEnd}
              @click=${() => this.rewind()}>
              ${RhAudioPlayer.icons.rewind}
            </button>
            <span slot="content">${this.#translation.get('rewind')}<span class="sr-only">${this.#translation.get('rewind')}</span></span>
          </rh-tooltip>

          <rh-tooltip id="full-play-tooltip">
            <button 
              id="full-play"
              class="toolbar-button"
              ?disabled=${!this.#mediaElement || playdisabled}
              @click=${this.#onPlayClick}
              @focus=${this.#onPlayFocus}>
              ${playicon}
              <span class="sr-only">${playlabel}</span>
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <rh-tooltip id="forward-tooltip">
            <button id="forward"
              class="toolbar-button"
              ?disabled=${!this.#mediaElement || forwarddisabled || !this.#mediaEnd}
              @click=${() => this.forward()}>
              ${RhAudioPlayer.icons.forward}
              <span class="sr-only">${this.#translation.get('advance')}</span>
            </button>
            <span slot="content">${this.#translation.get('advance')}</span>
          </rh-tooltip>`}${!this.#showMenu ? '' : html`

          <rh-tooltip id="close-tooltip">
            <button 
              id="close"
              class="toolbar-button"
              ?disabled=${!this.#mediaElement}
              @click=${this.#selectOpenPanel}>
              ${RhAudioPlayer.icons.close}
              <span class="sr-only">${this.#translation.get('close')}</span>
            </button>
            <span slot="content">${this.#translation.get('close')}</span>
          </rh-tooltip>

          <rh-audio-player-menu id="menu" color-palette="${ifDefined(this.colorPalette)}">
            <rh-tooltip id="menu-tooltip" slot="button">
              <button class="toolbar-button">${menuButtonIcon}<span class="sr-only">${this.#translation.get('menu')}</span></button>
              <span slot="content">${this.#translation.get('menu')}</span>
            </rh-tooltip>${this.#panels.map(panel => !panel ? '' : html`
            <button slot="menu"
              aria-expanded="${this.expanded ?? nothing}"
              @click="${() => this.#selectOpenPanel(panel)}">
              ${panel.label}
            </button>`)}
          </rh-audio-player-menu>`}
        </div>

        <div part="panel" ?hidden=${!this.expanded || !this.#showMenu}>
          <slot name="about" part="about" @slotchange=${this.#onTitleChange}>
            <rh-audio-player-about heading-level="${this.#headingLevelController.headingLevel}"></rh-audio-player-about>
          </slot>
          <slot name="subscribe" part="subscribe" @slotchange=${this.#onTitleChange}></slot>
          <slot name="transcript" part="transcript"></slot>
        </div>
      </div>
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
          <label for="${id}" class="sr-only">${this.#translation.get('speed')}</label>
          <select id="${id}"
            ?disabled=${!this.#mediaElement}
            @keyup="${this.#onplaybackRateKeyup}"
            @change="${this.#onplaybackRateSelect}">${this.#playbackRates.map(step=>html`
            <option value=${step.toFixed(1)}
              ?selected=${this.playbackRate.toFixed(1) === step.toFixed(1)}>
              ${(step).toFixed(1)}x
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

  async #loadLanguage() {
    const lang = this.getAttribute('lang') || this.closest('[lang]')?.getAttribute('lang') || 'en';
    try {
      const url = new URL(`./i18n/${lang}.json`, import.meta.url);
      const file = await fetch(url).then(result => result.json());
      this.#translation.join(file);
    } catch (e) {
      this.#logger.error(`Could not load microcopy for ${lang}.`);
    }
  }

  #cleanUpListeners() {
    for (const [event, listener] of this.#listeners) {
      for (const el of this.#lastMediaElements) {
        el.removeEventListener(event, listener);
      }
    }
  }

  /**
   * sets initial values based media player metadata
   */
  #initMediaElement(slotchangeevent?: Event) {
    if (slotchangeevent) {
      this.#cleanUpListeners();
      this.#lastMediaElements = [...this._mediaElements ?? []];
    }

    this.#mediaElement?.removeAttribute('controls');
    this.#mediaElement?.setAttribute('seekable', 'seekable');
    this._duration = this.#mediaElement?.duration || 0;
    this._readyState = this.#mediaElement?.readyState || 0;
    this.volume = this.#mediaElement?.volume || 0.5;

    for (const [event, listener] of this.#listeners) {
      this.#mediaElement?.addEventListener(event, listener);
    }
  }

  /**
   * handles media `canplay` event
   */
  #onCanplay() {
    this._duration = this.#mediaElement?.duration || 0;
    this._readyState = this.#mediaElement?.readyState || 0;
    this.volume = this.#mediaElement?.volume || 0.5;
  }

  /**
   * handles media `canplaythrough` event
   */
  #onCanplaythrough() {
    this._duration = this.#mediaElement?.duration || 0;
    this._readyState = this.#mediaElement?.readyState || 0;
  }

  #onCueseek(event: Event) {
    const cue = event.target as RhAudioPlayerCue;
    const start = cue?.startTime;
    if (start) { this.seek(start); }
  }

  /**
   * handles media `durationchange` event
   */
  #onDurationchange() {
    this._duration = this.#mediaElement?.duration || 0;
    this.transcript?.setDuration(this.duration);
  }

  /**
   * handles media `ended` event
   */
  #onEnded() {
    this._paused = true;
  }

  /**
   * handles media `loadeddata` event
   */
  #onLoadeddata() {
    this._duration = this.#mediaElement?.duration || 0;
    this._readyState = this.#mediaElement?.readyState || 0;
  }

  /**
   * handles media `loadedmetadata` event
   */
  #onLoadedmetadata() {
    this._readyState = this.#mediaElement?.readyState || 0;
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
    this._paused = true;
  }

  /**
   * handles media `play` event by updating component's `_paused` state
   */
  #onPlay() {
    this._paused = false;
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

  #onplaybackRateKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight': return this.incrementPlaybackrate();
      case 'ArrowLeft': return this.decrementPlaybackrate();
    }
  }

  /**
   * handles changes to value of playback rate number input
   * by updating component playbackRate property
   */
  #onplaybackRateSelect(event: Event) {
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
  #onPlayClick() {
    for (const instance of RhAudioPlayer.instances) {
      if (instance !== this) { instance.pause(); }
    }
    !this._paused ? this.pause() : this.play();
  }

  /**
   * handles play button click by toggling play / pause
   */
  #onPlayFocus() {
    this._seriesScroller?.startScrolling();
    this._mediatitleScroller?.startScrolling();
  }

  /**
   * handles media `playing` event by updating component's `_paused` state
   */
  #onPlaying() {
    this._paused = false;
  }

  /**
   * handles media `seeked` event by updating component's `_currentTime` state
   */
  #onSeeked() {
    this._currentTime = this.#mediaElement?.currentTime || 0;
  }

  /**
   * handles media `seeking` event by updating component's `_currentTime` state
   */
  #onSeeking() {
    this._currentTime = this.#mediaElement?.currentTime || 0;
  }

  /**
   * handles time input changes by seeking to input value
   */
  #onTimeSlider(event: Event & { target: RhRange }) {
    const { target: { value: seconds } } = event;
    this.seek(seconds || 0);
  }

  /**
   * handles media `timeupdate` event by updating component's `_currentTime` state
   */
  #onTimeupdate() {
    this._currentTime = this.#mediaElement?.currentTime ?? 0;
    this.transcript?.setActiveCues(this.currentTime);
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
    if (this.about && this.mediaseries) {
      this.about.mediaseries = this.mediaseries;
    }
    if (this.about && this.mediatitle) {
      this.about.mediatitle = this.mediatitle;
    }
    this.toggleAttribute('show-menu', this.#showMenu);
  }

  /**
   * handles media `volumechange` event by
   * updating component's `_muted` state and `volume` property
   */
  #onVolumechange() {
    if (this.#mediaElement) {
      this._muted = this.#mediaElement.muted;
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
    const panels = [this.about, this.subscribe, this.transcript];
    panels.forEach(item => item?.toggleAttribute('hidden', panel !== item));
    this.expanded = !!panel && panels.includes(panel);
    if (panel === this.transcript) {
      this.transcript?.setActiveCues(this.currentTime);
    }
    setTimeout(() => {
      (this._menu ?? this._closeButton)?.focus();
      setTimeout(() => {
        if (panel?.scrollText) {
          panel.scrollText();
        }
      }, 1000);
    }, 1);
  }

  /**
   * Mutes media volume
   */
  mute() {
    if (this.#mediaElement) {
      this.#unmutedVolume = this.#mediaElement?.volume;
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
    if (this.#mediaElement?.pause) {
      this.#mediaElement.pause();
    }
  }

  /**
   * Starts or resumes playback
   */
  async play() {
    return this.#mediaElement?.play?.();
  }

  /**
   * Seeks media to a given point in seconds
   */
  seek(seconds: number) {
    this.#mediaElement?.setAttribute('seekable', 'seekable');
    if (this.#mediaElement) {
      const time = this.#mediaEnd ? Math.max(this.#mediaStart, Math.min(seconds, this.#mediaEnd)) : false;
      if (time) { this.#mediaElement.currentTime = time; }
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
