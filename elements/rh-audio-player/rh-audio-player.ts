import { LitElement, html, svg } from 'lit';
import { HeadingController } from '../../lib/HeadingController.js';
import { RovingTabindexController } from '../../lib/RovingTabindexController.js';
import { customElement, property, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';
import rangestyles from './rh-audio-player-range-input.css';
import '../rh-tooltip/rh-tooltip.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player') @pfelement()
export class RhAudioPlayer extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles, rangestyles];
  public headingLevelController = new HeadingController(this);
  private rovingTabindexController = new RovingTabindexController(this, '.toolbar-button');

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
      <!--div id="ready-state">Ready State: ${this._readyState}</div-->
      <div id="media"><slot></slot></div>
      <div 
        id="${this.mode}-toolbar" 
        class="primary-toolbar" 
        role="toolbar" 
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
    this.rovingTabindexController.initToolbar();
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
        ${!this.description ? '' : html`<div id="description">${this.description}</div>`}
        ${!this.title ? '' : html`<div id="title">${this.title}</div>`}
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
            </svg>
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
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M13 7.37H4.51l2.93-2.93a.62.62 0 1 0-.88-.88l-4 4a.61.61 0 0 0 0 .88l4 4a.63.63 0 0 0 .88 0 .61.61 0 0 0 0-.88L4.51 8.63H13a.61.61 0 0 0 .62-.63.63.63 0 0 0-.62-.63Z"/>
    </svg>`;
    return this.buttonTemplate('rewind', icon, 'Rewind 15 seconds', this.rewind, disabled);
  }

  /**
   * template for play button
   * @returns {html}
   */
  playButtonTemplate() {
    const label = !this._paused ? 'Pause' : 'Play';
    const disabled = this._readyState < 3;
    const playIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
      <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
    </svg>`;
    const pauseIcon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M12 2.4H9.3c-.4 0-.6.3-.6.6v10c0 .3.3.6.6.6H12c.3 0 .6-.3.6-.6V3c0-.3-.3-.6-.6-.6zm-5.3 0H4c-.3 0-.6.3-.6.6v10c0 .3.3.6.6.6h2.8c.3 0 .6-.3.6-.6V3c-.1-.3-.3-.6-.7-.6z"/>
    </svg>`;
    const icon = !this._paused ? pauseIcon : playIcon;
    return this.buttonTemplate('play', icon, label, this.#handlePlayButton, disabled);
  }

  /**
   * template for forward button
   * @returns {html}
   */
  forwardButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === this.duration;
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="m13.44 7.56-4-4a.62.62 0 1 0-.88.88l2.93 2.93H3a.63.63 0 0 0-.63.63.63.63 0 0 0 .63.62h8.49l-2.93 2.94a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0l4-4a.61.61 0 0 0 0-.88Z"/>
    </svg>`;
    return this.buttonTemplate('forward', icon, 'Advance 15 seconds', this.forward, disabled);
  }


  /**
   * template for menu button
   * @returns {html}
   */
  menuButtonTemplate() {
    const menu = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M3.45 7a1.15 1.15 0 0 0-.38.26 1 1 0 0 0-.25.37 1.08 1.08 0 0 0-.08.37 1.17 1.17 0 0 0 .33.8 1.14 1.14 0 0 0 .8.32 1.07 1.07 0 0 0 .79-.33A1.13 1.13 0 0 0 3.45 7Zm0 4.14a1.15 1.15 0 0 0-.38.26 1 1 0 0 0-.25.37 1.08 1.08 0 0 0-.08.42 1.17 1.17 0 0 0 .33.8 1.13 1.13 0 0 0 .8.32 1.07 1.07 0 0 0 .79-.33 1.13 1.13 0 0 0-1.21-1.84ZM12.14 5a1.1 1.1 0 0 0 .79-.33 1.08 1.08 0 0 0 .33-.8 1.1 1.1 0 0 0-.26-.79 1.13 1.13 0 0 0-1.22-.27 1.14 1.14 0 0 0-.39.26 1.08 1.08 0 0 0-.25.38 1.24 1.24 0 0 0-.08.41A1.14 1.14 0 0 0 12.14 5ZM3.45 2.81a1.15 1.15 0 0 0-.38.26 1.08 1.08 0 0 0-.25.38 1 1 0 0 0-.08.41 1.15 1.15 0 0 0 .33.8 1.14 1.14 0 0 0 .8.33 1.11 1.11 0 0 0 .79-.33 1.14 1.14 0 0 0 .34-.8 1.1 1.1 0 0 0-.32-.78 1.13 1.13 0 0 0-1.23-.27ZM11.73 7a1.14 1.14 0 0 0-.39.26 1.13 1.13 0 0 0-.25.37A1.3 1.3 0 0 0 11 8a1.12 1.12 0 0 0 .34.8 1.1 1.1 0 0 0 .79.32A1.09 1.09 0 0 0 13.26 8a1.08 1.08 0 0 0-.26-.78A1.11 1.11 0 0 0 11.73 7Zm-4.14 4.09a1 1 0 0 0-.39.26 1 1 0 0 0-.25.37 1.3 1.3 0 0 0-.08.42 1.13 1.13 0 0 0 .33.79 1.09 1.09 0 0 0 .8.33 1.11 1.11 0 0 0 1.12-1.12 1.1 1.1 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27Zm0-8.28a1.1 1.1 0 0 0-.39.26 1.14 1.14 0 0 0-.2.38 1.24 1.24 0 0 0-.08.41A1.13 1.13 0 0 0 8 5a1.11 1.11 0 0 0 1.12-1.14 1.1 1.1 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27Zm4.14 8.28a1.14 1.14 0 0 0-.39.26 1.13 1.13 0 0 0-.25.37 1.3 1.3 0 0 0-.08.42 1.14 1.14 0 0 0 1.13 1.12 1.13 1.13 0 0 0 .8-.32 1.14 1.14 0 0 0 .32-.8 1.08 1.08 0 0 0-.31-.78 1.13 1.13 0 0 0-1.22-.27ZM7.59 7a1 1 0 0 0-.39.26 1 1 0 0 0-.2.32 1.3 1.3 0 0 0-.13.42 1.14 1.14 0 0 0 .34.8A1.12 1.12 0 1 0 7.59 7Z"/>
        </svg>`;
    const close = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
        </svg>`;
    const icon = !this.expanded ? menu : close;
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
