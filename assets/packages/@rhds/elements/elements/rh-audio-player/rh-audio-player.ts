import type { RhTooltip } from '@rhds/elements/rh-tooltip/rh-tooltip.js';

import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import { DirController } from '../../lib/DirController.js';
import { HeadingLevelContextProvider } from '../../lib/context/headings/provider.js';
import { I18nController } from '../../lib/I18nController.js';

import { RhMenu } from '../rh-menu/rh-menu.js';
import { RhCue, getFormattedTime } from './rh-cue.js';
import { RhAudioPlayerAbout } from './rh-audio-player-about.js';
import { RhAudioPlayerRateSelectEvent } from './rh-audio-player-rate-stepper.js';
import { RhAudioPlayerSubscribe } from './rh-audio-player-subscribe.js';
import { RhTranscript } from './rh-transcript.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';

import buttonStyles from './rh-audio-player-button.css';
import rangeStyles from './rh-audio-player-range-styles.css';
import styles from './rh-audio-player.css';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * An audio player plays audio clips in the browser and includes other features.
 * @summary Plays audio clips and includes other features
 * @slot series - optional, name of podcast series
 * @slot title - optional, title of episode
 * @slot media - html `audio` element
 * @slot about - optional `rh-audio-player-about` panel with attribution
 * @slot subscribe - optional `rh-audio-player-subscribe` panel with links to subscribe
 * @slot transcript - optional `rh-transcript` panel with `rh-cue` elements
 * @cssprop [--rh-audio-player-background-color=var(--rh-color-surface-lightest, #ffffff)] - color of player background -
 * @cssprop [--rh-audio-player-icon-background-color=var(--rh-audio-player-background-color)]
 * @cssprop [--rh-audio-player-border-color=var(--rh-color-border-subtle-on-light, #d2d2d2)] - color of player border -
 * @cssprop [--rh-audio-player-secondary-text-color=var(--rh-color-text-secondary-on-light, #6a6e73)] - player secondary text color -
 * @cssprop [--rh-audio-player-secondary-opacity=0.75] - player secondary opacity used for partially faded elements -
 * @cssprop [--rh-audio-player-range-thumb-color=var(--rh-color-accent-brand-on-light, #ee0000)] - color of time and volume range slider thumb -
 * @cssprop [--rh-tooltip-content-padding-block-start=var(--rh-space-md, 8px)] - padding top on tooltips -
 * @cssprop [--rh-tooltip-content-padding-block-end=var(--rh-space-md, 8px)] - padding bottom on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-start=var(--rh-space-md, 8px)] - padding left on tooltips -
 * @cssprop [--rh-tooltip-content-padding-inline-end=var(--rh-space-md, 8px)] - padding right on tooltips -
 * @csspart panel - expandable panel
 * @csspart toolbar - main controls
 * @csspart about - about the episode panel
 * @csspart subscribe - subscribe panel
 * @csspart transcript - transcript panel
 */
@customElement('rh-audio-player')
export class RhAudioPlayer extends LitElement {
  static readonly styles = [buttonStyles, styles, rangeStyles];

  private static instances = new Set<RhAudioPlayer>();

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
    'download': 'Download',
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
  @property({ reflect: true }) layout: 'mini' | 'compact' | 'compact-wide' | 'full' = 'mini';

  /** URL to audio's artwork */
  @property({ reflect: true }) poster?: string;

  /** Playback volume */
  @property({ reflect: true, type: Number }) volume = 0.5;

  /** Playback rate */
  @property({ reflect: true, type: Number }) playbackRate = 1;

  @property({ reflect: true, type: Boolean }) expanded = false;

  @property({ reflect: true }) lang!: string;

  @property({ attribute: false }) microcopy = {};

  /** Element's color palette */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  @queryAssignedElements({ slot: 'series' })
  private _mediaseries?: HTMLElement[];

  @queryAssignedElements({ slot: 'title' })
  private _mediatitle?: HTMLElement[];

  @queryAssignedElements({ slot: 'transcript', selector: 'rh-transcript' })
  private _transcripts?: RhTranscript[];

  @queryAssignedElements({ slot: 'about', selector: 'rh-audio-player-about' })
  private _abouts?: RhAudioPlayerAbout[];

  @queryAssignedElements({ slot: 'subscribe', selector: 'rh-audio-player-subscribe' })
  private _subscribe?: RhAudioPlayerSubscribe[];

  get #duration() {
    return this.#mediaElement?.duration ?? 0;
  }

  get #readyState() {
    return this.#mediaElement?.readyState ?? 0;
  }

  #isMobileSafari = window.navigator.userAgent.match(/(iPhone|iPad|Mobile).*(AppleWebkit|Safari)/i);

  #paused = true;

  #unmutedVolume = this.volume;

  #styles?: CSSStyleDeclaration;

  // this is used inasmuch as children receive the context,
  // but it doesn't need to be accessed outside the class
  // eslint-disable-next-line no-unused-private-class-members
  #headings = new HeadingLevelContextProvider(this);

  #mediaElement?: HTMLAudioElement;

  #lastMediaElement?: HTMLAudioElement;

  #dir = new DirController(this);

  #width = this.offsetWidth;

  #resizeObserver = new ResizeObserver(() => {
    if (this.#width !== this.offsetWidth) {
      this.#positionMenu();
    }
  });

  #translation = new I18nController(this, {
    'en': {
      ...RhAudioPlayer.enUS,
    },
    'en-US': {
      ...RhAudioPlayer.enUS,
    }, ...this.microcopy ?? {},
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

  get #panels(): (
    | { id: 'about'; panel: RhAudioPlayerAbout }
    | { id: 'subscribe'; panel: RhAudioPlayerSubscribe }
    | { id: 'transcript'; panel: RhTranscript }
  )[] {
    return [
      { id: 'about', panel: this.#about! } as const,
      { id: 'subscribe', panel: this.#subscribe! } as const,
      { id: 'transcript', panel: this.#transcript! } as const,
    ].filter(x => !!x.panel);
  }

  get #hasMenu() {
    return (
      this.#panels.length > 1
      || !!this.mediaseries
      || !!this.mediatitle
      || (this._abouts?.length ?? 0) > 0
    );
  }

  get #menuOpen() {
    return this.#menufloat.open;
  }

  set #menuOpen(open) {
    if (open) {
      this.#showMenu();
      this.#width = this.offsetWidth;
      this.#resizeObserver.observe(this);
    } else {
      this.#hideMenu();
      this.#resizeObserver.unobserve(this);
    }
  }

  /**
   * gets media media time if set
   */
  get #mediaEnd() {
    return (this.#mediaElement?.seekable?.end?.length || -1) > 0
    && this.#mediaElement?.seekable?.end(0) ?
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

  get #transcript(): RhTranscript | undefined {
    const [t] = this._transcripts ?? [];
    return t ?? this.shadowRoot?.querySelector('rh-transcript');
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
    this.#styles ??= window.getComputedStyle?.(this);
  }

  disconnectedCallback() {
    this.#cleanUpListeners();
    RhAudioPlayer.instances.delete(this);
    super.disconnectedCallback();
  }

  render() {
    const { expanded, mediatitle, on = 'light', layout, poster } = this;
    const { dir } = this.#dir;
    const { open, styles = {} } = this.#menufloat;
    const showMenu = this.#hasMenu;
    const mutelabel = !this.muted ? this.#translation.get('mute') : this.#translation.get('unmute');
    const rewinddisabled =
      !this.#mediaElement
      || this.#readyState < 1
      || this.currentTime === 0
      || !this.#mediaEnd;
    const forwarddisabled =
      !this.#mediaElement
      || this.#readyState < 1
      || this.currentTime === this.duration
      || !this.#mediaEnd;
    const playlabel =
        !this.paused ? this.#translation.get('pause')
      : this.#translation.get('play');
    const playdisabled = this.#readyState < 3 && this.duration < 1;

    const currentTimeQ = (this.currentTime / this.duration);
    const currentTimePct = (Number.isNaN(currentTimeQ) ? 0 : currentTimeQ) * 100;

    const accentColor = !!this.#styles?.getPropertyValue('--rh-audio-player-background-color');

    return html`
      <rh-surface id="container"
          color-palette="${ifDefined(this.colorPalette)}"
          class="${classMap({
              [on]: true,
              [dir]: true,
              [layout]: true,
              expanded,
              'on': true,
              'mediatitle': mediatitle !== undefined,
              'poster': poster !== undefined,
              'show-menu': showMenu,
              'has-accent-color': accentColor,
              'mobile-safari': !!this.#isMobileSafari,
            })}">
        <input type="hidden" value=${this.#readyState}>
        <slot id="media" name="media" @slotchange="${this.#initMediaElement}"></slot>
        <div id="toolbar"
             class="${this.expanded ? 'expanded' : ''}"
             part="toolbar"
             aria-controls="media"
             aria-label="Media Controls">${!poster ? '' : html`
          <div id="poster"><img .src="${poster}" aria-hidden="true"></div>`}
          <rh-tooltip id="play-tooltip">
            <button id="play"
                    aria-label="${playlabel}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement || playdisabled}
                    @click=${this.#onPlayClick}
                    @focus=${this.#onPlayFocus}>
              <rh-icon set="ui" icon="${this.paused ? 'play-fill' : 'pause-fill'}"></rh-icon>
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

          <div class="spacer"></div>

          <rh-audio-player-rate-stepper id="playback-rate"
                                        @playback-rate-select="${this.#onPlaybackRateSelect}"
                                        ?hidden="${this.#isFull || this.#isMini}"
                                        .disabled="${!this.#mediaElement}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${this.#translation.get('speed')}"></rh-audio-player-rate-stepper>

          ${this.#isMobileSafari ? '' : html`

          <rh-tooltip id="mute-tooltip">
            <button id="mute"
                    aria-label="${mutelabel}"
                    class="toolbar-button"
                    ?disabled=${!this.#mediaElement}
                    @click=${this.#onMuteButton}>
              <rh-icon set="ui" icon="${this.muted ? 'mute-fill' : 'volume-up-fill'}"></rh-icon>
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

          <rh-audio-player-rate-stepper id="full-playback-rate"
                                        @playback-rate-select="${this.#onPlaybackRateSelect}"
                                        ?hidden="${this.expanded || !this.#isFull}"
                                        .disabled="${!this.#mediaElement}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${this.#translation.get('speed')}"></rh-audio-player-rate-stepper>

          <rh-tooltip id="rewind-tooltip">
            <button id="rewind"
                    aria-label="${this.#translation.get('rewind')}"
                    class="toolbar-button"
                    ?disabled=${rewinddisabled}
                    @click=${() => this.rewind()}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 32 32"
                   class="scrubber"
                   role="presentation">
                <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
                <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3 c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4 C18,20.5,17.1,20.2,16.4,19.6z"/>
                <path d="M4,6.6L9.5,2v3.7h7.4c6.1,0,11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1H9.5V26h1.8h5.5 c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-5.5H9.5v3.7L4,6.6z"/>
              </svg>
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
              <rh-icon set="ui" icon="${this.paused ? 'play-fill' : 'pause-fill'}"></rh-icon>
            </button>
            <span slot="content">${playlabel}</span>
          </rh-tooltip>

          <rh-tooltip id="forward-tooltip">
            <button id="forward"
                    aria-label="${this.#translation.get('advance')}"
                    class="toolbar-button"
                    ?disabled=${forwarddisabled}
                    @click=${() => this.forward()}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 32 32"
                   class="scrubber"
                   role="presentation">
                <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
                <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3 c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4 C18,20.5,17.1,20.2,16.4,19.6z"/>
                <path d="M28,6.6L22.4,2v3.7h-7.4C9,5.7,4,10.6,4,16.7c0,6.1,5,11.1,11.1,11.1h7.4V26h-1.8h-5.5c-5.1,0-9.2-4.1-9.2-9.2 c0-5.1,4.1-9.2,9.2-9.2h5.5h1.8v3.7L28,6.6z"/>
              </svg>
            </button>
            <span slot="content">${this.#translation.get('advance')}</span>
          </rh-tooltip>`}${!this.#hasMenu ? '' : html`

          <rh-tooltip id="menu-tooltip"
                      slot="button"
                      position="${this.#menuOpen ? 'left' : 'top'}">
            <button id="menu-button"
                    class="toolbar-button"
                    aria-label="${this.#translation.get('menu')}"
                    aria-controls="menu"
                    aria-haspopup="true"
                    @click="${this.#onMenuToggle}">
              <rh-icon set="ui" icon="ellipsis-horizontal-fill"></rh-icon>
            </button>
            <span slot="content">${this.#translation.get('menu')}</span>
          </rh-tooltip>

          <rh-menu id="menu"
                   aria-labelledby="menu-button"
                   ?inert="${!this.#menuOpen}"
                   style="${styleMap(styles)}"
                   class="${classMap({ open })}"
                   .getItems="${(items: HTMLElement[]) => this.#getMenuItems(items)}"
                   @keydown="${this.#onMenuKeydown}"
                   @focusout="${this.#onMenuFocusout}">${this.#panels.map(x => !x.panel ? '' : html`
            <button id="${x.id}-menu-item"
                    aria-label="${x.panel.menuLabel}"
                    aria-controls="panel"
                    @click="${() => this.#selectOpenPanel(x.panel)}">
              ${x.panel.menuLabel}
            </button>`)}
            <rh-audio-player-rate-stepper id="mini-playback-rate"
                                          @playback-rate-select="${this.#onPlaybackRateSelect}"
                                          ?hidden="${!this.#isMini}"
                                          .disabled="${!this.#mediaElement}"
                                          .playbackRate="${this.playbackRate}"
                                          .label="${this.#translation.get('speed')}"></rh-audio-player-rate-stepper>
          </rh-menu>`}
          <rh-tooltip id="close-tooltip">
            <button id="close"
                    aria-label="${this.#translation.get('close')}"
                    class="toolbar-button"
                    ?disabled="${!this.#mediaElement}"
                    aria-controls="panel"
                    @click="${this.#selectOpenPanel}"
                    @keydown="${this.#onCloseKeydown}">
              <rh-icon set="ui" icon="close"></rh-icon>
            </button>
            <span slot="content">${this.#translation.get('close')}</span>
          </rh-tooltip>
          <div class="full-spacer"></div>
        </div>

        <div id="panel"
             role="dialog"
             aria-live="polite"
             aria-labelledby="about-menu-item"
             part="panel"
             ?hidden=${!this.expanded || !this.#hasMenu}>
          <slot id="about-slot"
                name="about"
                part="about"
                @slotchange=${this.#onPanelChange}>
            <rh-audio-player-about></rh-audio-player-about>
          </slot>
          <slot id="subscribe-slot"
                name="subscribe"
                part="subscribe"
                @slotchange=${this.#onPanelChange}>
          </slot>
          <slot id="transcribe-slot"
                name="transcript"
                part="transcript"
                @slotchange=${this.#onPanelChange}
                @transcriptdownload=${this.#onTranscriptDownload}>
          </slot>
        </div>
      </rh-surface>
    `;
  }

  async firstUpdated() {
    // waiting for next render so that rh-menu is present in shadow root
    await this.updateComplete;
    this.#unsetTabindexFromMenuItems();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('volume')
      && !!this.#mediaElement
      && this.volume !== this.#mediaElement.volume) {
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

  #getMenuItems(items: HTMLElement[]) {
    const ministepperid = 'mini-playback-rate';
    if (this.#isMini) {
      return [
        ...items.filter(x => x.id !== ministepperid),
        ...this.shadowRoot
            ?.getElementById(ministepperid)
            ?.shadowRoot
            ?.querySelectorAll('.tabbable') ?? [],
      ];
    } else {
      return items;
    }
  }

  #updateMenuLabels() {
    if (this.#about?.menuLabel) {
      this.#about.menuLabel = this.#translation.get('about');
    }
    if (this.#subscribe?.menuLabel) {
      this.#subscribe.menuLabel = this.#translation.get('subscribe');
    }
    if (this.#transcript?.menuLabel) {
      this.#transcript.menuLabel = this.#translation.get('transcript');
    }
  }

  #updateTranscriptLabels() {
    if (this.#transcript?.autoscrollLabel) {
      this.#transcript.autoscrollLabel = this.#translation.get('autoscroll');
    }
    if (this.#transcript?.downloadLabel) {
      this.#transcript.downloadLabel = this.#translation.get('download');
    }
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
    const cue = target as RhCue;
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
  #onEnded(): void {
    this.#paused = true;
  }

  /**
   * handles media `loadeddata` event
   */
  #onLoadeddata(): void {
    this.requestUpdate();
  }

  /**
   * handles media `loadedmetadata` event
   */
  #onLoadedmetadata(): void {
    this.requestUpdate();
  }

  /**
   * handles mute button click to toggle mute
   */
  #onMuteButton(): void {
    return !this.muted ? this.mute() : this.unmute();
  }

  /**
   * handles media `pause` event by updating component's `_paused` state
   */
  #onPause(): void {
    this.#paused = true;
    this.requestUpdate();
  }

  /**
   * handles media `play` event by updating component's `_paused` state
   */
  #onPlay(): void {
    this.#paused = false;
    this.requestUpdate();
  }

  /**
   * handles changes to media element playback rate
   * by updating component playbackRate property
   */
  #onPlaybackRateChange(): void {
    if (!this.#mediaElement || this.playbackRate !== this.#mediaElement.playbackRate) {
      this.playbackRate = this.#mediaElement?.playbackRate || 1;
    }
  }

  /**
   * handles changes to value of playback rate number input
   * by updating component playbackRate property
   */
  #onPlaybackRateSelect(event: Event) {
    if (event instanceof RhAudioPlayerRateSelectEvent && this.#mediaElement) {
      this.playbackRate = event.playbackRate;
      this.#mediaElement.playbackRate = event.playbackRate;
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

  /**
   * handles toggling the "More options" menu button
   */
  #onMenuToggle(event: Event) {
    event.preventDefault();
    this.#menuOpen = !this.#menuOpen;
    event.stopPropagation();
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
   * opens particular panel open or closes panels if none given
   */
  #selectOpenPanel(
    panel?: RhAudioPlayerAbout | RhAudioPlayerSubscribe | RhTranscript
  ) {
    const panels = [this.#about, this.#subscribe, this.#transcript];
    panels.forEach(item => item?.toggleAttribute('hidden', panel !== item));
    this.expanded = !!panel && panels.includes(panel);
    const focusElement = this.expanded ?
      this.shadowRoot?.getElementById('close')
      : this.shadowRoot?.getElementById('menu-button');

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
      this.shadowRoot?.querySelector<HTMLButtonElement>('#menu-button')?.focus();
    }
  }

  /**
   * hides menu when left without focus
   */
  #onMenuFocusout(event: FocusEvent) {
    const { relatedTarget } = event;
    if (
      relatedTarget instanceof HTMLElement
      && relatedTarget.closest('rh-menu') !== this.shadowRoot?.getElementById('menu')
    ) {
      setTimeout(() => this.#hideMenu(), 300);
    }
  }

  async #positionMenu() {
    await this.updateComplete;
    const placement = 'bottom-start';
    const mainAxis = 0;
    const offset = { mainAxis: mainAxis, alignmentAxis: 0 };
    await this.#menufloat.show({ offset: offset, placement: placement });
  }

  async #showMenu() {
    const menu = this.shadowRoot?.getElementById('menu') as RhMenu;
    const button = this.shadowRoot?.getElementById('menu-button') as HTMLElement;
    if (!menu || !button) {
      return;
    }
    await this.#positionMenu();
    await this.updateComplete;
    if (this.#lastActiveMenuItem) {
      menu.activateItem(this.#lastActiveMenuItem);
    }
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
  }

  #onTranscriptDownload() {
    const transcript = this.#transcript?.downloadText;
    const label = this.#transcript?.label;
    const a = document.createElement('a');
    const title = [this.mediaseries, this.mediatitle, label].join(' ');
    const filename = (
      this.mediatitle
      || this.mediaseries
      || label
      || 'transcript'
    ).replace(/[^\w^\d^-]/g, '');
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
    const path = event.composedPath();
    if (!menu || !path.includes(menu) && !path.some(x => x instanceof RhMenu)) {
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
      const time = this.#mediaEnd ?
        Math.max(this.#mediaStart, Math.min(seconds, this.#mediaEnd))
        : -1;
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