import { LitElement, html, svg } from 'lit';
import { HeadingController } from '../../lib/HeadingController';
import { customElement, property, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';
import rangestyles from './rh-audio-player-range-input.css';
import '../rh-tooltip/rh-tooltip.js';

/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player') @pfelement()
export class RhAudioPlayer extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles, rangestyles];
  public headingLevelController = new HeadingController(this);

  @property({ type: String }) description = undefined;
  @property({ type: String }) mediatitle = undefined;
  @property({ reflect: true, type: String }) mode = 'full';
  @property({ reflect: true, type: String }) poster = undefined;
  @property({ reflect: true, type: Boolean }) volume = 0.5;
  @property({ reflect: true, type: Boolean }) playbackRate = 1;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _language = 'en';
  @state() private _readyState = 0;
  @state() private _paused = true;
  @state() private _muted = false;
  @state() private _transcriptCues:Array<VTTCue> = [];
  @state() private _unmutedVolume = this.volume;


  get currentTime() {
    return this._currentTime;
  }

  get duration() {
    return this._duration;
  }

  get headingLevel() {
    return this.headingLevelController.headingLevel;
  }

  get mediaElement():HTMLMediaElement {
    return this.querySelector('audio') as HTMLMediaElement;
  }

  get muted() {
    return this._muted || this.volume === 0;
  }

  get paused() {
    return this.mediaElement?.paused;
  }

  get playbackRateInput():HTMLInputElement {
    return this.shadowRoot?.querySelector('#playback-rate') as HTMLInputElement;
  }

  get sliderVolume() {
    this._unmutedVolume = this.mediaElement?.volume || this.volume;
    return this.muted || this.volume === 0 ? 0 : this._unmutedVolume * 100;
  }

  get textTracks() {
    return this.mediaElement?.textTracks || {};
  }

  get transcriptTracks():Array<TextTrack> {
    const transcript = this._getTracksByLanguage(this._language);
    return transcript;
  }

  private _getTracksByKind(kind = 'captions'):Array<TextTrack> {
    return Object.values(this.textTracks).filter(track=>track.kind === kind);
  }

  private _getTracksByLanguage(language = 'en'):Array<TextTrack> {
    return Object.values(this.textTracks).filter(track=>track.language === language);
  }

  render() {
    return html`
      <!--div id="ready-state">Ready State: ${this._readyState}</div-->
      <slot></slot>
      ${this.mode === 'mini' ?
        this.miniTemplate()
        : this.mode === 'compact' || this.mode === 'compact-wide' ?
        this.compactTemplate()
        : this.fullTemplate()}
    `;
  }

  firstUpdated() {
    // TODO account for media added dynamically
    if (this.mediaElement) {
      this.initMediaElement();
      const handlers = {
        'canplay': this._handleCanplay,
        'canplaythrough': this._handleCanplaythrough,
        'durationchange': this._handleDurationchange,
        'loadedmetadata': this._handleLoadedmetadata,
        'loadeddata': this._handleLoadeddata,
        'ended': this._handleEnded,
        'pause': this._handlePause,
        'play': this._handlePlay,
        'playing': this._handlePlaying,
        'ratechange': this._handleRatechange,
        'seeked': this._handleSeeked,
        'seeking': this._handleSeeking,
        'timeupdate': this._handleTimeupdate,
        'volumechange': this._handleVolumechange
      };
      this._addEventHandlers(this.mediaElement, handlers);
    }
  }

  initMediaElement() {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
    this.volume = this.mediaElement?.volume || 0.5;
  }

  private _addEventHandlers(element:HTMLElement, handlers:object) {
    if (!!element && !!handlers) {
      Object.keys(handlers).forEach(handler=>{
        const listener:() => void = handlers[handler as keyof typeof handlers];
        element.addEventListener(handler, listener.bind(this));
      });
    }
  }

  private _handleCanplay() {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
    this.volume = this.mediaElement?.volume || 0.5;
  }

  private _handleCanplaythrough() {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
  }

  private _handleDurationchange() {
    this._duration = this.mediaElement?.duration || 0;
  }

  private _handleEnded() {
    this._paused = true;
  }

  private _handleLoadeddata() {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
  }

  private _handleLoadedmetadata() {
    this._readyState = this.mediaElement?.readyState || 0;
  }

  private _handleMuteButton() {
    !this.muted ? this.mute() : this.unmute();
  }

  private _handlePause() {
    this._paused = true;
  }

  private _handlePlay() {
    this._paused = false;
  }

  private _handlePlaybackRateInput(event:Event) {
    const target = event?.target as HTMLInputElement;
    const val = !target || !target.value ? 1 : parseFloat(target.value);
    const pbr = Math.max(0, Math.min(val, 4));
    if (this.mediaElement) { this.mediaElement.playbackRate = pbr; }
  }

  private _handlePlayButton() {
    !this._paused ? this.pause() : this.play();
  }

  private _handlePlaying() {
    this._paused = false;
  }

  private _handleRatechange() {
    this.playbackRate = this.mediaElement?.playbackRate || 1;
  }

  private _handleSeeked() {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  private _handleSeeking() {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  private _handleTimeSlider(event:Event) {
    const target = event?.target as HTMLInputElement;
    const seconds = target?.value || -1;
    if (seconds > 0) { this.seek(seconds as number); }
  }

  private _handleTimeupdate() {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  private _handleVolumechange() {
    if (this.mediaElement) {
      this._muted = this.mediaElement?.muted;
      this.volume = this.mediaElement?.volume;
    }
  }

  private _handleVolumeSlider(event:Event) {
    const target = event?.target as HTMLInputElement;
    const level = (target?.value || -1) as number;
    if (this.mediaElement) {
      this.mediaElement.volume = level / 100;
    }
  }

  private _getTimeString(seconds = 0) {
    return `${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  }

  /**
   * template for full player controls
   * @returns {html}
   */
  fullTemplate() {
    return html`<div id="full-ui">
      ${this.thumbnailTemplate()}
      ${this.descTitleTemplate()}
      ${this.controlsTemplate()}
    </div>
    ${this.popupTemplate()}`;
  }

  /**
   * template for compactplayer controls
   * @returns {html}
   */
  compactTemplate() {
    return html`<div id="compact-ui">
      ${this.playTemplate()}
      ${this.playbackRateTemplate()}
      ${this.volumeTemplate()}
      ${this.menuButtonTemplate()}
    </div>
    ${this.popupTemplate()}`;
  }

  /**
   * template for compactplayer controls
   * @returns {html}
   */
  miniTemplate() {
    return html`<div id="mini-ui">
      ${this.playTemplate(true)}
      ${this.muteButtonTemplate()}
    </div>
    ${this.popupTemplate()}`;
  }


  /**
   * template for thumbnail image
   * @returns {object}
   */
  thumbnailTemplate() {
    return !this.poster ? '' : html`<img id="poster" .src="${this.poster}" aria-hidden="true">`;
  }

  /**
   * template for description and title
   * @returns {object}
   */
  descTitleTemplate() {
    return !this.mediatitle &&
      !this.description ?
      ''
      : html`<div id="description-title">
        ${!this.description ? '' : html`<div id="description">${this.description}</div>`}
        ${!this.title ? '' : html`<div id="title">${this.title}</div>`}
      </div>`;
  }


  controlsTemplate() {
    return html`<div id="controls">
      <div id="controls-sliders">
        ${this.timeTemplate()}
        ${this.volumeTemplate()}
      </div>
      <div id="controls-other">
        ${this.playbackRateTemplate()}
        ${this.rewindButtonTemplate()}
        ${this.playButtonTemplate()}
        ${this.forwardButtonTemplate()}
        ${this.menuButtonTemplate()}
      </div>
    </div>
    `;
  }

  playTemplate(isMini = false) {
    return html`<div id="play-controls">
      ${this.playButtonTemplate()}
      ${this.timeSliderTemplate()}
      ${isMini ? '' : this.currentTimeTemplate()}
    </div>`;
  }

  timeTemplate() {
    return html`<div id="time-controls">
      ${this.timeSliderTemplate()}
      ${this.timeLabelsTemplate()}
    </div>`;
  }

  timeSliderTemplate() {
    return html`
      <rh-tooltip id="time-tooltip">
        <label for="time">Seek</label>
        <input
          id="time" 
          ?disabled="${this.duration === 0}"
          type="range" 
          min="0" 
          max="${this.duration}" 
          @input="${this._handleTimeSlider}"
          value="${this._currentTime}">
        <span slot="content">Seek</span>
      </rh-tooltip>`;
  }

  timeLabelsTemplate() {
    return html`
      <div id="time-labels">
        ${this.currentTimeTemplate()}
        <span class="sr-only">/</span>
        <span id="duration">${this._getTimeString(this.duration)}</span>
      </div>`;
  }

  currentTimeTemplate() {
    return html`
      <span class="sr-only">Elapsed time: </span>
      <span id="current">${this._getTimeString(this._currentTime)}</span>`;
  }

  buttonTemplate(id = '', icon = svg``, label = '', callback = this._handlePlay, disabled = false) {
    return html`
      <rh-tooltip id="${id}-tooltip">
        <button id="${id}" ?disabled=${disabled} @click="${callback}">
          ${icon}
        </button>
        <span slot="content">${label}</span>
      </rh-tooltip>
    `;
  }

  volumeTemplate() {
    return html`<div id="volume-controls">
      ${this.muteButtonTemplate()}
      ${this.volumeSliderTemplate()}
    </div>`;
  }

  muteButtonTemplate() {
    const unmuteIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M9.3 2c-.2-.1-.5-.1-.6 0L4.8 4.9H2c-.3 0-.6.3-.6.6v5c0 .3.3.6.6.6h2.8L8.7 14c.1 0 .2.1.3.1.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5v-11c0-.2-.1-.4-.3-.5zm4 6 1.1-1.1c.2-.2.2-.6 0-.8s-.6-.2-.8 0l-1.1 1.1-1.1-1.1c-.2-.2-.6-.2-.8 0s-.2.6 0 .8L11.7 8l-1.1 1.1c-.2.2-.2.6 0 .8.1.1.3.2.4.2s.3-.1.4-.2l1.1-1.1 1.1 1.1c.1.1.3.2.4.2s.3-.1.4-.2c.2-.2.2-.6 0-.8L13.3 8z"/>
    </svg>`;
    const muteIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M9.3 2c-.2-.1-.5-.1-.7 0L4.8 4.9H2c-.3 0-.6.3-.6.6v5c0 .3.3.6.6.6h2.8L8.6 14c.2 0 .3.1.4.1.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5v-11c0-.2-.2-.4-.3-.5zm2.4 3.6c-.2-.2-.6-.3-.8 0-.2.2-.3.6 0 .8.4.4.6 1 .6 1.6 0 .6-.2 1.2-.6 1.6-.2.2-.2.6 0 .8.1.1.2.1.4.1s.3-.1.4-.2c.6-.7.9-1.5.9-2.4 0-.8-.4-1.6-.9-2.3zm1.8-.9c-.2-.3-.6-.3-.8-.1-.3.2-.3.6-.1.8.5.7.8 1.6.8 2.6s-.3 1.9-.9 2.7c-.2.3-.1.6.1.8.1.1.2.1.3.1.2 0 .3-.1.5-.2.7-1 1.1-2.1 1.1-3.3.1-1.3-.3-2.5-1-3.4z"/>
    </svg>`;
    const icon = !this.muted ? muteIcon : unmuteIcon;
    const label = !this.muted ? 'Mute' : 'Unmute';
    return this.buttonTemplate(
      'mute',
      icon,
      label,
      this._handleMuteButton);
  }

  volumeSliderTemplate() {
    const max = !this.mediaElement ? 0 : 100;
    return html`  
      <rh-tooltip id="volume-tooltip">
        <label for="volume">Volume</label>
        <input 
          id="volume" 
          ?disabled="${max === 0}"
          type="range" 
          min="0" 
          max="${max}" 
          step="1" 
          @input="${this._handleVolumeSlider}"
          value="${this.sliderVolume}">
        <span slot="content">Volume</span>
      </rh-tooltip>`;
  }

  playbackRateTemplate() {
    return html`
      <rh-tooltip id="playback-rate-tooltip">
        <button id="playback-rate-stepdown"
          class="playback-rate-step"
          tabindex="-1"  
          ?disabled="${this.playbackRate === 0.25}" 
          aria-hidden="true" 
          @click="${this.decrementPlaybackrate}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        </button>
        <label for="playback-rate">Playback rate</label>
        <input id="playback-rate" 
          class="playback-rate-step"
          aria-describedby="suffix"
          type="number" 
          step="0.25" 
          min="0.25" 
          max="2" 
          value="${this.playbackRate}" 
          @change="${this._handlePlaybackRateInput}"/>
          <span id="suffix">x</span>
        <button 
          id="playback-rate-stepup" 
          tabindex="-1" 
          ?disabled="${this.playbackRate === 4}" 
          aria-hidden="true" 
          @click="${this.incrementPlaybackrate}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        </button>
        <span slot="content">Playback rate</span>
      </rh-tooltip>`;
  }

  rewindButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === 0;
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M13 7.37H4.51l2.93-2.93a.62.62 0 1 0-.88-.88l-4 4a.61.61 0 0 0 0 .88l4 4a.63.63 0 0 0 .88 0 .61.61 0 0 0 0-.88L4.51 8.63H13a.61.61 0 0 0 .62-.63.63.63 0 0 0-.62-.63Z"/>
    </svg>`;
    return this.buttonTemplate('rewind', icon, 'Rewind 15 seconds', this.rewind, disabled);
  }

  playButtonTemplate() {
    const label = !this._paused ? 'Pause' : 'Play';
    const disabled = this._readyState < 3;
    const playIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
    </svg>`;
    const pauseIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M12 2.4H9.3c-.4 0-.6.3-.6.6v10c0 .3.3.6.6.6H12c.3 0 .6-.3.6-.6V3c0-.3-.3-.6-.6-.6zm-5.3 0H4c-.3 0-.6.3-.6.6v10c0 .3.3.6.6.6h2.8c.3 0 .6-.3.6-.6V3c-.1-.3-.3-.6-.7-.6z"/>
    </svg>`;
    const icon = !this._paused ? pauseIcon : playIcon;
    return this.buttonTemplate('play', icon, label, this._handlePlayButton, disabled);
  }

  forwardButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === this.duration;
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="m13.44 7.56-4-4a.62.62 0 1 0-.88.88l2.93 2.93H3a.63.63 0 0 0-.63.63.63.63 0 0 0 .63.62h8.49l-2.93 2.94a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0l4-4a.61.61 0 0 0 0-.88Z"/>
    </svg>`;
    return this.buttonTemplate('forward', icon, 'Advance 15 seconds', this.forward, disabled);
  }

  menuButtonTemplate() {
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M3.45 7a1.15 1.15 0 0 0-.38.26 1 1 0 0 0-.25.37 1.08 1.08 0 0 0-.08.37 1.17 1.17 0 0 0 .33.8 1.14 1.14 0 0 0 .8.32 1.07 1.07 0 0 0 .79-.33A1.13 1.13 0 0 0 3.45 7Zm0 4.14a1.15 1.15 0 0 0-.38.26 1 1 0 0 0-.25.37 1.08 1.08 0 0 0-.08.42 1.17 1.17 0 0 0 .33.8 1.13 1.13 0 0 0 .8.32 1.07 1.07 0 0 0 .79-.33 1.13 1.13 0 0 0-1.21-1.84ZM12.14 5a1.1 1.1 0 0 0 .79-.33 1.08 1.08 0 0 0 .33-.8 1.1 1.1 0 0 0-.26-.79 1.13 1.13 0 0 0-1.22-.27 1.14 1.14 0 0 0-.39.26 1.08 1.08 0 0 0-.25.38 1.24 1.24 0 0 0-.08.41A1.14 1.14 0 0 0 12.14 5ZM3.45 2.81a1.15 1.15 0 0 0-.38.26 1.08 1.08 0 0 0-.25.38 1 1 0 0 0-.08.41 1.15 1.15 0 0 0 .33.8 1.14 1.14 0 0 0 .8.33 1.11 1.11 0 0 0 .79-.33 1.14 1.14 0 0 0 .34-.8 1.1 1.1 0 0 0-.32-.78 1.13 1.13 0 0 0-1.23-.27ZM11.73 7a1.14 1.14 0 0 0-.39.26 1.13 1.13 0 0 0-.25.37A1.3 1.3 0 0 0 11 8a1.12 1.12 0 0 0 .34.8 1.1 1.1 0 0 0 .79.32A1.09 1.09 0 0 0 13.26 8a1.08 1.08 0 0 0-.26-.78A1.11 1.11 0 0 0 11.73 7Zm-4.14 4.09a1 1 0 0 0-.39.26 1 1 0 0 0-.25.37 1.3 1.3 0 0 0-.08.42 1.13 1.13 0 0 0 .33.79 1.09 1.09 0 0 0 .8.33 1.11 1.11 0 0 0 1.12-1.12 1.1 1.1 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27Zm0-8.28a1.1 1.1 0 0 0-.39.26 1.14 1.14 0 0 0-.2.38 1.24 1.24 0 0 0-.08.41A1.13 1.13 0 0 0 8 5a1.11 1.11 0 0 0 1.12-1.14 1.1 1.1 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27Zm4.14 8.28a1.14 1.14 0 0 0-.39.26 1.13 1.13 0 0 0-.25.37 1.3 1.3 0 0 0-.08.42 1.14 1.14 0 0 0 1.13 1.12 1.13 1.13 0 0 0 .8-.32 1.14 1.14 0 0 0 .32-.8 1.08 1.08 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27ZM7.59 7a1 1 0 0 0-.39.26 1 1 0 0 0-.2.32 1.3 1.3 0 0 0-.13.42 1.14 1.14 0 0 0 .34.8A1.12 1.12 0 1 0 7.59 7Z"/>
    </svg>`;
    return this.buttonTemplate('menu', icon, 'Menu', this.toggleMenu);
  }

  popupTemplate() {
    return !this.transcriptTracks ? '' : html`
      <div id="popover">
        ${this.headingTemplate(this.headingLevel + 1, html`Transcript`)}
        ${this.transcriptCuesTemplate()}
      </div>
    `;
  }

  transcriptCuesTemplate() {
    if (this._transcriptCues.length < 1) { this._setTrackCues(this.transcriptTracks); }
    return html`<div id="cues" lang="${this._language}">${this._transcriptCues.map(cue=>this.transcriptCueTemplate(cue))}</div>`;
  }

  transcriptCueTemplate(cue:VTTCue) {
    const { text } = cue;
    const voices = text.split(/<\/v>/);
    return html`${voices.map(str => {
        if (str.length < 1) { return ''; }
        const voiceMatch = str.match(/<v\s+([^>]+)>/);
          const dialog = str.replace(/<v\s+[^>]+>/, '');
          const voice = voiceMatch && voiceMatch.length > 0 ? voiceMatch[1] : '';
          return html`${this.headingTemplate(this.headingLevel + 2, this.transcriptCueHeadingTemplate(cue.startTime, voice))}<p class="cue-text">${dialog}</p>`;
      })}`;
  }

  transcriptCueHeadingTemplate(start:number, voice:string) {
    return html`<span class="cue-time">${this._getTimeString(start)}</span> - <span class="cue-voice">${voice}</span>`;
  }

  private _setTrackCues(tracks:Array<TextTrack>) {
    const cues:Array<VTTCue> = [];
    tracks.forEach(track=>{
      const { mode } = track;
      track.mode = 'showing';
      setTimeout(()=>{
        if (track.cues !== null) { [...track.cues].map(cue=>cues.push(cue as VTTCue)); }
        track.mode = mode;
      }, 500);
    });
    this._transcriptCues = cues.sort((a, b)=>a.startTime - b.startTime);
  }

  headingTemplate(level = 2, heading = html``) {
    return level === 1 ? html`<h1>${heading}</h1>`
      : level === 2 ? html`<h2>${heading}</h2>`
      : level === 3 ? html`<h3>${heading}</h3>`
      : level === 4 ? html`<h4>${heading}</h4>`
      : level === 5 ? html`<h5>${heading}</h5>`
      : html`<h6>${heading}</h6>`;
  }

  mute() {
    if (this.mediaElement) {
      this._unmutedVolume = this.mediaElement?.volume as number;
      this.mediaElement.volume = 0;
    }
  }

  unmute() {
    if (this.mediaElement) {
      this.mediaElement.volume = Math.max(this._unmutedVolume, 0.1);
    }
  }

  incrementPlaybackrate() {
    if (this.playbackRateInput) { this.playbackRateInput.stepUp(); }
  }

  decrementPlaybackrate() {
    if (this.playbackRateInput) { this.playbackRateInput.stepDown(); }
  }

  toggleMenu() {
    alert('TODO');
  }

  pause() {
    if (this.mediaElement?.pause) { this.mediaElement.pause(); }
  }

  play() {
    if (this.mediaElement?.play) { this.mediaElement.play(); }
  }

  seek(seconds:number) {
    const time = Math.max(0, Math.min(seconds, this.duration));
    if (this.mediaElement) { this.mediaElement.currentTime = time; }
  }

  seekFromCurrentTime(seconds = 0) {
    const currentTime = this.mediaElement?.currentTime;
    if (!!currentTime && !!this.duration) {
      const time = currentTime + seconds;
      this.seek(time);
    }
  }

  rewind() {
    this.seekFromCurrentTime(-150);
  }

  forward() {
    this.seekFromCurrentTime(150);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player': RhAudioPlayer;
}
}
