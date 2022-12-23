import { LitElement, html, svg } from 'lit';
import { HeadingController } from '../../lib/HeadingController.js';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import '../rh-tooltip/rh-tooltip.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';
import rangestyles from './rh-audio-player-range-input.css';

const icons = {
  close:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <path d="M14.3,12l3.4-3.4c0.4-0.4,0.4-1.1,0-1.5l-0.8-0.8c-0.4-0.4-1.1-0.4-1.5,0L12,9.7L8.6,6.3
      c-0.4-0.4-1.1-0.4-1.5,0L6.3,7.1c-0.4,0.4-0.4,1.1,0,1.5L9.7,12l-3.4,3.4c-0.4,0.4-0.4,1.1,0,1.5l0.8,0.8c0.4,0.4,1.1,0.4,1.5,0
      l3.4-3.4l3.4,3.4c0.4,0.4,1.1,0.4,1.5,0l0.8-0.8c0.4-0.4,0.4-1.1,0-1.5L14.3,12z"/>
    </svg>`,
  forward:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
      <path d="M28,6.6L22.4,2v3.7h-7.4C9,5.7,4,10.6,4,16.7c0,6.1,5,11.1,11.1,11.1h7.4V26h-1.8h-5.5c-5.1,0-9.2-4.1-9.2-9.2
        c0-5.1,4.1-9.2,9.2-9.2h5.5h1.8v3.7L28,6.6z"/>
      <g>
        <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
        <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3
          c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4
          C18,20.5,17.1,20.2,16.4,19.6z"/>
      </g>
    </svg>`,
  menuKebab:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <circle cx="12" cy="22" r="2"/>
      <circle cx="12" cy="12" r="2"/>
      <circle cx="12" cy="2" r="2"/>
    </svg>`,
  menuMeatball:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <circle cx="22" cy="12" r="2"/>
      <circle cx="12" cy="12" r="2"/>
      <circle cx="2" cy="12" r="2"/>
    </svg>`,
  pause:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <rect x="15.3" y="2.1" width="4.4" height="19.9"/>
      <rect x="4.3" y="2.1" width="4.4" height="19.9"/>
    </svg>`,
  play:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <path d="M23.2,12L5.6,20.8V3.2L23.2,12z"/>
    </svg>`,
  playbackRateFaster:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14">
      <path d="M11.2,7.7l-5.9,5.9c-0.4,0.4-1.1,0.4-1.5,0c0,0,0,0,0,0l-1-1c-0.4-0.4-0.4-1.1,0-1.5c0,0,0,0,0,0L7,7
        L2.8,2.8c-0.4-0.4-0.4-1.1,0-1.5c0,0,0,0,0,0l1-1c0.4-0.4,1.1-0.4,1.5,0c0,0,0,0,0,0l5.9,5.9C11.6,6.7,11.6,7.3,11.2,7.7
        C11.2,7.7,11.2,7.7,11.2,7.7z"/>
    </svg>`,
  playbackRateSlower:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14">
      <path d="M2.8,7.7l5.9,5.9c0.4,0.4,1.1,0.4,1.5,0c0,0,0,0,0,0l1-1c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0L7,7
        l4.2-4.2c0.4-0.4,0.4-1.1,0-1.5c0,0,0,0,0,0l-1-1c-0.4-0.4-1.1-0.4-1.5,0c0,0,0,0,0,0L2.8,6.3C2.4,6.7,2.4,7.3,2.8,7.7
        C2.8,7.7,2.8,7.7,2.8,7.7z"/>
    </svg>`,
  rewind:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32">
      <g>
        <path d="M10.4,19.5h1.8v-5l-1.8,0.8v-1l2.2-0.9h0.7v6.2h1.9v1h-4.8V19.5z"/>
        <path d="M16.4,19.6l0.7-0.8c0.6,0.5,1.2,0.8,1.9,0.8c0.9,0,1.5-0.6,1.5-1.4c0-0.8-0.6-1.3-1.5-1.3
          c-0.5,0-0.9,0.1-1.4,0.4L16.8,17l0.2-3.7h4.3v1h-3.3l-0.1,2c0.5-0.2,1-0.3,1.5-0.3c1.4,0,2.4,0.9,2.4,2.1c0,1.4-1.1,2.4-2.7,2.4
          C18,20.5,17.1,20.2,16.4,19.6z"/>
      </g>
      <path d="M4,6.6L9.5,2v3.7h7.4c6.1,0,11.1,5,11.1,11.1c0,6.1-5,11.1-11.1,11.1H9.5V26h1.8h5.5
        c5.1,0,9.2-4.1,9.2-9.2c0-5.1-4.1-9.2-9.2-9.2h-5.5H9.5v3.7L4,6.6z"/>
    </svg>`,
  volumeMax:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <path d="M14.2,2.2v2.2c4.3,0,7.6,3.4,7.6,7.6s-3.4,7.6-7.6,7.6v2.2c5.5,0,9.8-4.4,9.8-9.8S19.6,2.2,14.2,2.2z"/>
      <path d="M14.2,6.5v2.2c1.9,0,3.3,1.4,3.3,3.3s-1.4,3.3-3.3,3.3v2.2c3.1,0,5.5-2.4,5.5-5.5S17.2,6.5,14.2,6.5z"/>
      <path d="M12,2.2L5.3,7.6H2.2C1,7.6,0,8.6,0,9.8v4.4c0,1.2,1,2.2,2.2,2.2h3.2l6.7,5.5V2.2z"/>
    </svg>`,
  volumeMuted:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <polygon points="23.4,8.7 21.9,7.3 18.6,10.6 15.4,7.3 13.9,8.7 17.2,12 13.9,15.3 15.4,16.7 18.6,13.4 21.9,16.7 
        23.4,15.3 20.1,12 "/>
      <path d="M11.6,3L5.5,8H2.6c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h2.9l6.1,5V3z"/>
    </svg>`,

};

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
  @property({ reflect: true, type: String }) mode = 'full' || 'compact' || 'compact-wide' || 'mini';
  @property({ reflect: true, type: String }) on = 'light' || 'dark' || 'color';
  @property({ reflect: true, type: String }) poster = undefined;
  @property({ reflect: true, type: Number }) volume = 0.5;
  @property({ reflect: true, type: Number }) playbackRate = 1;
  @property({ reflect: true, type: Boolean }) expanded = false;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _language = 'en';
  @state() private _readyState = 0;
  @state() private _paused = true;
  @state() private _muted = false;
  @state() private _cuesByTrack:{ [key:string]: Array<VTTCue> } = {};
  @state() private _unmutedVolume = this.volume;

  /**
   * @readonly elapsed time in seconds
   * */
  get currentTime():number {
    return this._currentTime;
  }

  /**
   * @readonly total time in seconds
   * */
  get duration():number {
    return this._duration;
  }

  /**
   * @readonly heading level this component follows,
   * eg. '1' for `<h1>`, '2' for `<h2>`, etc
   * */
  get headingLevel():number {
    return this.headingLevelController.headingLevel;
  }

  /**
   * @readonly slotted html `<audio>`
   * */
  get mediaElement():HTMLMediaElement {
    return this.querySelector('audio') as HTMLMediaElement;
  }

  /**
   * @readonly whether audio is muted
   * */
  get muted():boolean {
    return this._muted || this.volume === 0;
  }

  /**
   * @readonly whather media is paused
   * */
  get paused():boolean {
    return this.mediaElement?.paused;
  }

  /**
   * @readonly input element for playback rate,
   * i.e. `<input id="playback-rate" type="number" step>`
   * */
  get playbackRateSelect():HTMLSelectElement {
    return this.shadowRoot?.querySelector('#playback-rate') as HTMLSelectElement;
  }

  /**
   * @readonly primary toolbar element for playback rate,
   * i.e. `<input id="playback-rate" type="number" step>`
   * */
  get primaryToolbar():HTMLElement {
    return this.shadowRoot?.querySelector('[role=toolbar].primary-toolbar') as HTMLElement;
  }

  /**
   * @readonly current volume level
   * */
  get sliderVolume():number {
    this._unmutedVolume = this.mediaElement?.volume || this.volume;
    return this.muted || this.volume === 0 ? 0 : this._unmutedVolume * 100;
  }

  /**
   * @readonly audio text tracks
   * */
  get textTracks():TextTrackList {
    return this.mediaElement?.textTracks || {};
  }

  render() {
    return html`
      <input type="hidden" value=${this._readyState}>
      <div id="media"><slot></slot></div>
      <div 
        id="${this.mode}-toolbar" 
        class="primary-toolbar" 
        aria-controls="media"
        aria-label="Media Controls">
        ${this.mode === 'mini' ?
          this.miniTemplate()
          : this.mode === 'compact' || this.mode === 'compact-wide' ?
          this.compactTemplate()
          : this.fullTemplate()}</div>
      </div>
      ${this.popupTemplate()}
    `;
  }

  firstUpdated() {
    // TODO account for media added dynamically
    if (this.mediaElement) {
      this.#initMediaElement();
      const handlers = {
        'canplay': this.#handleCanplay,
        'canplaythrough': this.#handleCanplaythrough,
        'durationchange': this.#handleDurationchange,
        'loadedmetadata': this.#handleLoadedmetadata,
        'loadeddata': this.#handleLoadeddata,
        'ended': this.#handleEnded,
        'pause': this.#handlePause,
        'play': this.#handlePlay,
        'playing': this.#handlePlaying,
        'ratechange': this.#handlePlaybackRateChange,
        'seeked': this.#handleSeeked,
        'seeking': this.#handleSeeking,
        'timeupdate': this.#handleTimeupdate,
        'volumechange': this.#handleVolumechange
      };
      this.#addEventHandlers(this.mediaElement, handlers);
    }
  }

  /**
   * sets initial values based media player metadata
   */
  #initMediaElement():void {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
    this.volume = this.mediaElement?.volume || 0.5;
    this.mediaElement.controls = false;
    if (this.textTracks) { ([...this.textTracks]).forEach(track => this.#setCues(track)); }
  }

  /**
   * adds all event handles to media element
   */
  #addEventHandlers(element:HTMLElement, handlers:object):void {
    if (!!element && !!handlers) {
      Object.keys(handlers).forEach(handler=>{
        const listener:() => void = handlers[handler as keyof typeof handlers];
        element.addEventListener(handler, listener.bind(this));
      });
    }
  }

  /**
   * handles media `canplay` event
   */
  #handleCanplay():void {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
    this.volume = this.mediaElement?.volume || 0.5;
  }

  /**
   * handles media `canplaythrough` event
   */
  #handleCanplaythrough():void {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
  }

  /**
   * handles media `durationchange` event
   */
  #handleDurationchange():void {
    this._duration = this.mediaElement?.duration || 0;
  }

  /**
   * handles media `ended` event
   */
  #handleEnded():void {
    this._paused = true;
  }

  /**
   * handles media `loadeddata` event
   */
  #handleLoadeddata():void {
    this._duration = this.mediaElement?.duration || 0;
    this._readyState = this.mediaElement?.readyState || 0;
    if (this.textTracks) { ([...this.textTracks]).forEach(track => this.#setCues(track)); }
  }

  /**
   * handles media `loadedmetadata` event
   */
  #handleLoadedmetadata():void {
    this._readyState = this.mediaElement?.readyState || 0;
    if (this.textTracks) { ([...this.textTracks]).forEach(track => this.#setCues(track)); }
  }

  /**
   * handles mute button click to toggle mute
   */
  #handleMuteButton():void {
    !this.muted ? this.mute() : this.unmute();
  }

  /**
   * handles media `pause` event by updating component's `_paused` state
   */
  #handlePause():void {
    this._paused = true;
  }

  /**
   * handles media `play` event by updating component's `_paused` state
   */
  #handlePlay():void {
    this._paused = false;
  }

  /**
   * handles changes to media element playback rate
   * by updating component playbackRate property
   */
  #handlePlaybackRateChange():void {
    if (!this.mediaElement || this.playbackRate !== this.mediaElement.playbackRate) { this.playbackRate = this.mediaElement?.playbackRate || 1; }
  }

  /**
   * handles changes to value of playback rate number input
   * by updating component playbackRate property
   */
  #handleplaybackRateSelect(event:Event):void {
    const target = event?.target as HTMLSelectElement;
    const val = !target || !target.value ? 1.00 : parseFloat(target.value);
    const pbr = this.#validPlaybackRate(val);
    this.mediaElement.playbackRate = this.playbackRate = pbr;
  }

  /**
   * handles play button click by toggling play / pause
   */
  #handlePlayButton():void {
    !this._paused ? this.pause() : this.play();
  }

  /**
   * handles media `playing` event by updating component's `_paused` state
   */
  #handlePlaying():void {
    this._paused = false;
  }

  /**
   * handles media `seeked` event by updating component's `_currentTime` state
   */
  #handleSeeked():void {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  /**
   * handles media `seeking` event by updating component's `_currentTime` state
   */
  #handleSeeking():void {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  /**
   * handles time input changes by seeking to input value
   */
  #handleTimeSlider(event:Event):void {
    const target = event?.target as HTMLInputElement;
    const seconds = target?.value || -1;
    if (seconds > 0) { this.seek(seconds as number); }
  }

  /**
   * handles media `timeupdate` event by updating component's `_currentTime` state
   */
  #handleTimeupdate():void {
    this._currentTime = this.mediaElement?.currentTime || 0;
  }

  /**
   * handles media `volumechange` event by
   * updating component's `_muted` state and `volume` property
   */
  #handleVolumechange():void {
    if (this.mediaElement) {
      this._muted = this.mediaElement?.muted;
      this.volume = this.mediaElement?.volume;
    }
  }

  /**
   * handles volume input changes by setting media volume to input value
   */
  #handleVolumeSlider(event:Event):void {
    const target = event?.target as HTMLInputElement;
    const level = (target?.value || -1) as number;
    if (this.mediaElement) {
      this.mediaElement.volume = level / 100;
    }
  }

  /**
   * formats time in seconds as `mm:ss.ms` string
   */
  #getTimeString(seconds = 0):string {
    return `${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  }

  /**
   * gets track label, or if none is given,
   * uses language and kind to make one
   */
  #getTrackLabel(track:TextTrack):string {
    return track.label.length > 0 ? track.label : [track.language, track.kind].join(' ');
  }

  /**
   * gets track id, or if none is given,
   * track label
   */
  #getTrackId(track:TextTrack):string {
    return track.id.length > 0 ? track.id : this.#getTrackLabel(track);
  }

  /**
   * adds a TextTrack's VTTCues to `_cuesByTrack` state directory
   */
  #setCues(track:TextTrack):void {
    const trackID = this.#getTrackId(track);
    if (!!trackID && !this._cuesByTrack[trackID]) {
      const { mode } = track;
      track.mode = 'showing';
      setTimeout(()=>{
        if (!track.cues || track.cues?.length < 1) { return []; }
        this._cuesByTrack[trackID] = [...track.cues].map(cue=>cue as VTTCue);
        this._cuesByTrack = { ...this._cuesByTrack };
        track.mode = mode;
      }, 500);
    }
  }

  /**
   * gets array of all VTT cues for a given language, collated and sorted
   */
  #getTranscriptCues(language = 'en'):Array<VTTCue> {
    const filteredTracks = [...this.textTracks].filter(track=>track.language === language).map(track=>this.#getTrackId(track));
    const filteredCues = Object.keys(this._cuesByTrack).filter(key=>filteredTracks.includes(key)).map(key=>this._cuesByTrack[key]);
    const sortedCues = filteredCues.flat().filter(cue=>!!cue).sort((a, b)=>{
      return a.startTime < b.startTime ? -1 : a.startTime > b.startTime ? 1 : 0;
    });
    return sortedCues;
  }

  #getPlaybackRates():Array<number> {
    const min = 0.25; const max = 4; const step = 0.25;
    return [...Array(max / step).keys()].map(k=>k * step + min);
  }

  /** ensures playback rate value falls between 0.25 and 4 */
  #validPlaybackRate(number:number):number {
    const min = 0.25;
    const max = 4;
    const step = 0.25;
    // ensures number between min and maxk
    const inRange = Math.max(min, Math.min(max, number));
    // used to round number to nearest step
    const multiplier = 1 / step;
    return Math.round(inRange * multiplier) / multiplier;
  }

  /**
   * template for full player controls
   * @returns {html}
   */
  fullTemplate() {
    return html`
      ${this.thumbnailTemplate()}
      ${this.descTitleTemplate()}
      ${this.controlsTemplate()}`;
  }

  /**
   * template for compact player controls
   * @returns {html}
   */
  compactTemplate() {
    return html`
      ${this.thumbnailTemplate()}
      ${this.playTemplate()}
      ${this.playbackRateTemplate()}
      ${this.volumeTemplate()}
      ${this.menuButtonTemplate()}`;
  }

  /**
   * template for mini player controls
   * @returns {html}
   */
  miniTemplate() {
    return html`
      ${this.playTemplate(true)}
      ${this.muteButtonTemplate()}`;
  }


  /**
   * template for thumbnail image
   * @returns {html | string}
   */
  thumbnailTemplate() {
    return !this.poster ? '' : html`<img id="poster" .src="${this.poster}" aria-hidden="true">`;
  }

  /**
   * template for description and title
   * @returns {html | string}
   */
  descTitleTemplate() {
    return !this.mediatitle &&
      !this.description ?
      ''
      : html`<div id="description-title">
        ${!this.description ? '' : html`<div id="description" class="scrolltext"><div>${this.description}</div></div>`}
        ${!this.title ? '' : html`<div id="title" class="scrolltext"><div>${this.title}</div></div>`}
      </div>`;
  }

  /**
   * template for full player controls
   * @returns {html}
   */
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

  /**
   * template for play controls group
   * @returns {html}
   */
  playTemplate(isMini = false) {
    return html`<div id="play-controls">
      ${this.playButtonTemplate()}
      ${this.timeSliderTemplate()}
      ${isMini ? '' : this.currentTimeTemplate()}
    </div>`;
  }

  /**
   * template for time controls group
   * @returns {html}
   */
  timeTemplate() {
    return html`<div id="time-controls">
      ${this.timeSliderTemplate()}
      ${this.timeLabelsTemplate()}
    </div>`;
  }


  /**
   * template for time slider
   * @returns {html}
   */
  timeSliderTemplate() {
    return html`
      <rh-tooltip 
        id="time-tooltip">
        <label for="time">Seek</label>
        <input
          id="time" 
          class="toolbar-button"
          on="${this.on}"
          ?disabled="${this.duration === 0}"
          type="range" 
          min="0" 
          max="${this.duration}" 
          step="${this.duration / 20}"
          @input="${this.#handleTimeSlider}"
          value="${this._currentTime}">
        <span slot="content">Seek</span>
      </rh-tooltip>`;
  }


  /**
   * template for time slider labels
   * @returns {html}
   */
  timeLabelsTemplate() {
    return html`
      <div id="time-labels">
        ${this.currentTimeTemplate()}
        <span class="sr-only">/</span>
        <span id="duration">${this.#getTimeString(this.duration)}</span>
      </div>`;
  }


  /**
   * template for current time as `mm:ss.ms`
   * @returns {html}
   */
  currentTimeTemplate() {
    return html`
      <span class="sr-only">Elapsed time: </span>
      <span id="current">${this.#getTimeString(this._currentTime)}</span>`;
  }


  /**
   * tenplate for player buttons
   * @returns {html}
   */
  buttonTemplate(id = '', icon = svg``, label = '', callback = this.#handlePlay, disabled = false, expanded:boolean | undefined = undefined) {
    return html`
      <rh-tooltip id="${id}-tooltip">
        <button 
          id="${id}" ?disabled=${disabled} @click="${callback}"
          class="toolbar-button"
          aria-expanded="${ifDefined(expanded)}">
          ${icon}
        </button>
        <span slot="content">${label}</span>
      </rh-tooltip>
    `;
  }


  /**
   * template for volume controls
   * @returns {html}
   */
  volumeTemplate() {
    return html`<div id="volume-controls">
      ${this.muteButtonTemplate()}
      ${this.volumeSliderTemplate()}
    </div>`;
  }


  /**
   * template for mute button
   * @returns {html}
   */
  muteButtonTemplate() {
    const icon = !this.muted ? icons.volumeMax : icons.volumeMuted;
    const label = !this.muted ? 'Mute' : 'Unmute';
    return this.buttonTemplate(
      'mute',
      icon,
      label,
      this.#handleMuteButton);
  }


  /**
   * template for volume slider
   * @returns {html}
   */
  volumeSliderTemplate() {
    const max = !this.mediaElement ? 0 : 100;
    return html`  
      <rh-tooltip id="volume-tooltip">
        <label for="volume">Volume</label>
        <input 
          id="volume" 
          class="toolbar-button"
          on="${this.on}"
          ?disabled="${max === 0}"
          type="range" 
          min="0" 
          max="${max}" 
          step="1" 
          @input="${this.#handleVolumeSlider}" 
          value="${this.sliderVolume}">
        <span slot="content">Volume</span>
      </rh-tooltip>`;
  }


  /**
   * template for playback rate controls
   * @returns {html}
   */
  playbackRateTemplate() {
    return html`
      <rh-tooltip id="playback-rate-tooltip">
        <div id="playback-rate-stepper">
          <button id="playback-rate-stepdown"
            class="playback-rate-step"
            ?disabled="${this.playbackRate < 0.5}" 
            aria-hidden="true" 
            @click="${this.decrementPlaybackrate}"
            tabindex="-1">
            ${icons.playbackRateSlower}
          </button>
          <label for="playback-rate">Playback rate</label>
          <select id="playback-rate"
            class="toolbar-button"
            @change="${this.#handleplaybackRateSelect}">
            ${this.#getPlaybackRates().map(step=>html`
              <option 
                value="${step}" 
                ?selected=${this.playbackRate === step}>
                ${(step).toFixed(2)}x
              </option>`)}
          </select>
          <button 
            id="playback-rate-stepup" 
            class="playback-rate-step"
            ?disabled="${this.playbackRate > 3.75}" 
            aria-hidden="true" 
            @click="${this.incrementPlaybackrate}"
            tabindex="-1">
            ${icons.playbackRateFaster}
          </button>
        </div>
        <span slot="content">Playback rate</span>
      </rh-tooltip>`;
  }

  /**
   * template for rewind button
   * @returns {html}
   */
  rewindButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === 0;
    return this.buttonTemplate('rewind', icons.rewind, 'Rewind 15 seconds', this.rewind, disabled);
  }

  /**
   * template for play button
   * @returns {html}
   */
  playButtonTemplate() {
    const label = !this._paused ? 'Pause' : 'Play';
    const disabled = this._readyState < 3;
    const icon = !this._paused ? icons.pause : icons.play;
    return this.buttonTemplate('play', icon, label, this.#handlePlayButton, disabled);
  }

  /**
   * template for forward button
   * @returns {html}
   */
  forwardButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === this.duration;
    return this.buttonTemplate('forward', icons.forward, 'Advance 15 seconds', this.forward, disabled);
  }


  /**
   * template for menu button
   * @returns {html}
   */
  menuButtonTemplate() {
    const icon = this.expanded ?
      icons.close
      : this.mode === 'compact' || this.mode === 'compact-wide' ?
      icons.menuKebab : icons.menuMeatball;
    const label = !this.expanded ? 'Menu' : 'Close';
    return this.buttonTemplate('menu', icon, label, this.toggleMenu, false, this.expanded);
  }


  /**
   * template for popover
   * @returns {html}
   */
  popupTemplate() {
    return !this.textTracks || this.textTracks.length < 1 || this.mode === 'mini' ? '' : html`
      <div id="popover-outer" ?hidden=${!this.expanded}>
        <div id="popover">
          ${this.headingTemplate(this.headingLevel + 1, html`Transcript`, 'popover-title')}
          ${this.transcriptCuesTemplate()}
        </div>
      </div>
    `;
  }


  /**
   * template for transcript cues
   * @returns {html}
   */
  transcriptCuesTemplate() {
    const cues = this.#getTranscriptCues(this._language).map(cue=>this.transcriptCueTemplate(cue));
    return html`<div id="cues" lang="${this._language}">${cues}</div>`;
  }


  /**
   * template for a single transcript cue
   * @returns {html}
   */
  transcriptCueTemplate(cue:VTTCue) {
    const kind = cue?.track?.kind;
    return kind === 'captions' ?
      this.transcriptCaptionCueTemplate(cue) : '';
  }

  /**
   * template for time heading on a single transcript cue
   * @returns {html}
   */
  transcriptCueHeadingTemplate(start:number, type:string, text:string) {
    return html`<span class="cue-time">${this.#getTimeString(start)}</span> - <span class="${type}">${text}</span>`;
  }

  /**
   * template for a single voice caption transcript cue
   * @returns {html}
   */
  transcriptCaptionCueTemplate(cue:VTTCue) {
    const { text } = cue;
    const voices = text.split(/<\/v>/);
    return html`${voices.map(str => {
        if (str.length < 1) { return ''; }
        const voiceMatch = str.match(/<v\s+([^>]+)>/);
          const dialog = str.replace(/<v\s+[^>]+>/, '');
          const voice = voiceMatch && voiceMatch.length > 0 ? voiceMatch[1] : '';
          return html`${this.headingTemplate(this.headingLevel + 2, this.transcriptCueHeadingTemplate(cue.startTime, 'cue-voice', voice))}<p class="cue-text">${dialog}</p>`;
      })}`;
  }


  /**
   * template for a heading based on heading level
   * @returns {html}
   */
  headingTemplate(level = 2, heading = html``, type = '') {
    return level === 1 ? html`<h1 id="${type}">${heading}</h1>`
      : level === 2 ? html`<h2 class="${type}">${heading}</h2>`
      : level === 3 ? html`<h3 class="${type}">${heading}</h3>`
      : level === 4 ? html`<h4 class="${type}">${heading}</h4>`
      : level === 5 ? html`<h5 class="${type}">${heading}</h5>`
      : html`<h6 class="${type}">${heading}</h6>`;
  }

  /**
   * mutes media volume
   */
  mute():void {
    if (this.mediaElement) {
      this._unmutedVolume = this.mediaElement?.volume as number;
      this.mediaElement.volume = 0;
    }
  }

  /**
   * unmutes media volume
   */
  unmute():void {
    if (this.mediaElement) {
      this.mediaElement.volume = Math.max(this._unmutedVolume, 0.1);
    }
  }

  /**
   * increases media playback rate by 0.25x
   */
  incrementPlaybackrate():void {
    if (this.playbackRateSelect) {
      this.mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(parseFloat(this.playbackRateSelect.value) + 0.25);
    }
  }

  /**
   * dencreases media playback rate by 0.25x
   */
  decrementPlaybackrate():void {
    if (this.playbackRateSelect) {
      this.mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(parseFloat(this.playbackRateSelect.value) - 0.25);
    }
  }

  /**
   * toggles the menu butotn
   */
  toggleMenu():void {
    this.expanded = !this.expanded;
  }

  /**
   * pauses media
   */
  pause():void {
    if (this.mediaElement?.pause) { this.mediaElement.pause(); }
  }

  /**
   * resumes media
   */
  play():void {
    if (this.mediaElement?.play) { this.mediaElement.play(); }
  }

  /**
   * seeks media to a given point in seconds
   */
  seek(seconds:number):void {
    const time = Math.max(0, Math.min(seconds, this.duration));
    if (this.mediaElement) { this.mediaElement.currentTime = time; }
  }

  /**
   * seeks media a given number of secons from current elapsed time
   */
  seekFromCurrentTime(seconds = 0):void {
    const currentTime = this.mediaElement?.currentTime;
    if (!!currentTime && !!this.duration) {
      const time = currentTime + seconds;
      this.seek(time);
    }
  }

  /**
   * rewinds media 15 seconds
   */
  rewind():void {
    this.seekFromCurrentTime(-150);
  }

  /**
   * advances media 15 seconds
   */
  forward() {
    this.seekFromCurrentTime(150);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player': RhAudioPlayer;
}
}
