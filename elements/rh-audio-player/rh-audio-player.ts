import { LitElement, html, svg } from 'lit';
import { HeadingController } from '../../lib/HeadingController.js';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../rh-tooltip/rh-tooltip.js';
import { RhAudioPlayerRange } from './rh-audio-player-range.js';
import { RhAudioPlayerMenu } from './rh-audio-player-menu.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';

const icons = {
  close:
    svg`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
      <path d="M14.3,12l3.4-3.4c0.4-0.4,0.4-1.1,0-1.5l-0.8-0.8c-0.4-0.4-1.1-0.4-1.5,0L12,9.7L8.6,6.3
      c-0.4-0.4-1.1-0.4-1.5,0L6.3,7.1c-0.4,0.4-0.4,1.1,0,1.5L9.7,12l-3.4,3.4c-0.4,0.4-0.4,1.1,0,1.5l0.8,0.8c0.4,0.4,1.1,0.4,1.5,0
      l3.4-3.4l3.4,3.4c0.4,0.4,1.1,0.4,1.5,0l0.8-0.8c0.4-0.4,0.4-1.1,0-1.5L14.3,12z"/>
    </svg>`,
  download: svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
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
@customElement('rh-audio-player')
export class RhAudioPlayer extends LitElement {
  static readonly styles = [styles];
  public headingLevelController = new HeadingController(this);

  @property({ type: String }) description = undefined;
  @property({ type: String }) mediatitle = undefined;
  @property({ reflect: true, type: String }) mode = 'full' || 'compact' || 'compact-wide' || 'mini';
  @property({ reflect: true, type: String }) on = 'light' || 'dark' || 'color';
  @property({ reflect: true, type: String }) poster = undefined;
  @property({ reflect: true, type: Number }) volume = 0.5;
  @property({ reflect: true, type: Number }) playbackRate = 1;
  @property({ reflect: true, type: Boolean }) expanded = false;
  @state() private _autoscroll = true;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _language = 'en';
  @state() private _readyState = 0;
  @state() private _paused = true;
  @state() private _muted = false;
  @state() private _cuesByTrack:{ [key:string]: Array<VTTCue> } = {};
  @state() private _unmutedVolume = this.volume;
  /** slotted title element */
  @state() private _title:HTMLElement | null | undefined = undefined;
  /** slotted description element  */
  @state() private _description:HTMLElement | null | undefined = undefined;
  /** whether there is an about section  */
  @state() private _hasAbout = false;
  /** whether there is a subscribe section  */
  @state() private _hasSubscribe = false;
  /** whether there is a subscribe section  */
  @state() private _expandedSection = '';


  get #close():HTMLButtonElement | undefined {
    const close = this.shadowRoot?.querySelector('#close') as HTMLButtonElement | undefined;
    return close;
  }

  get #isMini():boolean {
    return this.mode === 'mini';
  }

  get #isFull():boolean {
    return this.mode === 'full';
  }

  get #isCompact():boolean {
    return this.mode === 'compact' || this.mode === 'compact-wide';
  }

  get #isCompactWide():boolean {
    return this.mode === 'compact-wide';
  }

  get #menu():RhAudioPlayerMenu | undefined {
    const menu = this.shadowRoot?.querySelector('#menu') as RhAudioPlayerMenu | undefined;
    return menu;
  }

  get #showAboutButton() {
    return this._hasAbout || (this.#isCompact && this.#showTitleDesc);
  }

  get #showMenuButton() {
    return this.#showAboutButton || this.#showSubscribeButton || this.#showTranscriptButton;
  }

  get #showSubscribeButton() {
    return this._hasSubscribe;
  }

  get #showTranscriptButton() {
    return this.textTracks && this.textTracks.length > 0;
  }

  get #showTitleDesc() {
    return !!this._title || !!this._description;
  }

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
  getPlaybackRateSelect(id = 'playback-rate'):HTMLSelectElement {
    return this.shadowRoot?.querySelector(`#${id}`) as HTMLSelectElement;
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

  get timeSlider():RhAudioPlayerRange | null {
    return this.shadowRoot?.querySelector('#time') as RhAudioPlayerRange;
  }


  render() {
    const muteicon = !this.muted ? icons.volumeMax : icons.volumeMuted;
    const mutelabel = !this.muted ? 'Mute' : 'Unmute';
    const rewinddisabled = this._readyState < 1 || this._currentTime === 0;
    const forwarddisabled = this._readyState < 1 || this._currentTime === this.duration;
    const playlabel = !this._paused ? 'Pause' : 'Play';
    const playdisabled = this._readyState < 3;
    const playicon = !this._paused ? icons.pause : icons.play;

    return html`
      <br>
      <input type="hidden" value=${this._readyState}>
      <div id="media"><slot></slot></div>
      <div 
        id="${this.mode}-toolbar" 
        class="primary-toolbar${this.expanded ? ' expanded' : ''}" 
        aria-controls="media"
        aria-label="Media Controls">
          ${!this.poster ? '' : html`<div id="poster"><img .src="${this.poster}" aria-hidden="true"></div>`}
          ${this.buttonTemplate('play', playicon, playlabel, this.#handlePlayButton, playdisabled)}
          ${!this.#isFull ? '' : html`
            <div id="full-title">
              ${!this._description ? '' : html`<div id="description" class="scrolltext"><slot name="description"></slot></div>`}
              ${!this._title ? '' : html`<div id="title" class="scrolltext"><slot name="title"></slot></div>`}
            </div>
          `}
          ${this.timeSliderTemplate()}
          <span id="current"><span class="sr-only">Elapsed time: </span>${this.#getTimeString(this._currentTime)}</span>
          <div class="spacer"></div>
          ${this.#isMini ? '' : this.playbackRateTemplate()}
          ${this.buttonTemplate('mute', muteicon, mutelabel, this.#handleMuteButton)}
          ${this.#isMini ? '' : this.volumeSliderTemplate()}
          ${!this.#isFull ? '' : html`
            <span id="full-current"><span class="sr-only">Elapsed time: </span>${this.#getTimeString(this._currentTime)}</span>
            <span id="duration"><span class="sr-only">/ </span>${this.#getTimeString(this.duration)}</span>
            ${this.playbackRateTemplate('full-playback-rate')}
            ${this.buttonTemplate('rewind', icons.rewind, 'Rewind 15 seconds', this.rewind, rewinddisabled)}
            ${this.buttonTemplate('full-play', playicon, playlabel, this.#handlePlayButton, playdisabled)}
            ${this.buttonTemplate('forward', icons.forward, 'Advance 15 seconds', this.forward, forwarddisabled)}
          `}
          ${this.#isMini ? '' : html`
            ${this.buttonTemplate('close', icons.close, 'Close', this.closeMenu, false)}
            ${this.menuButtonTemplate()}
          `}
      </div>
      ${this.popupTemplate()}
      <slot name="about" hidden></slot>
      <slot name="subscribe" hidden></slot>
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
      this._title = this.querySelector('[slot="title"]') as HTMLElement;
      this._description = this.querySelector('[slot="description"]') as HTMLElement;
      this._hasSubscribe = !!this.querySelector('[slot="subscribe-link"]');
      this._hasAbout = !!this.querySelector('[slot="about"]');
      this._hasSubscribe = !!this.querySelector('[slot="subscribe-link"]');
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
    const target = event.target as RhAudioPlayerRange;
    const seconds = target?.value ? parseFloat(target?.value) as number : undefined;
    if (seconds) { this.seek(seconds); }
  }

  /**
   * handles media `timeupdate` event by updating component's `_currentTime` state
   */
  #handleTimeupdate():void {
    this._currentTime = this.mediaElement?.currentTime || 0;
    const cues = this.shadowRoot?.querySelectorAll(`.cue-text[data-start-time="${Math.round(this._currentTime)}"]`);
    const lastCue = cues ? [...cues][cues.length - 1] : false;
    if (lastCue && this._autoscroll) {
      lastCue.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
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
      const order = [
        'metadata',
        'description',
        'chapters',
      ];
      return a.startTime < b.startTime ?
        -1
        : a.startTime > b.startTime ?
        1
        : order.indexOf(a.track?.kind as string) > order.indexOf(b.track?.kind as string) ?
        -1
        : order.indexOf(a.track?.kind as string) < order.indexOf(b.track?.kind as string) ?
        1
        : 0;
    });
    return sortedCues;
  }

  #getPlaybackRates():Array<number> {
    const min = 0.2; const max = 4; const step = 0.2;
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
   * template for time slider
   * @returns {html}
   */
  timeSliderTemplate() {
    return html`
      <rh-tooltip 
        on="${this.on}"
        id="time-tooltip">
        <label for="time" class="sr-only">Seek</label>
        <rh-audio-player-range
          id="time" 
          class="toolbar-button"
          on="${this.on}"
          ?disabled="${this.duration === 0}"
          min="0" 
          max="${this.duration}" 
          @input="${this.#handleTimeSlider}"
          value="${this._currentTime as number || 0}">
        </rh-audio-player-range>
        <span slot="content">Seek</span>
      </rh-tooltip>`;
  }

  /**
   * tenplate for player buttons
   * @returns {html}
   */
  buttonTemplate(id = '', icon = svg``, label = '', callback = this.#handlePlay, disabled = false, expanded:boolean | undefined = undefined) {
    return html`
      <rh-tooltip id="${id}-tooltip" on="${this.on}">
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
   * template for volume slider
   * @returns {html}
   */
  volumeSliderTemplate() {
    const max = !this.mediaElement ? 0 : 100;
    return html`  
      <rh-tooltip id="volume-tooltip" on="${this.on}">
        <label for="volume" class="sr-only">Volume</label>
        <rh-audio-player-range 
          id="volume" 
          class="toolbar-button"
          on="${this.on}"
          ?disabled="${max === 0}"
          min="0" 
          max="${max}" 
          step="1" 
          @input="${this.#handleVolumeSlider}" 
          value="${this.sliderVolume}">
        </rh-audio-player-range>
        <span slot="content">Volume</span>
      </rh-tooltip>`;
  }


  /**
   * template for playback rate controls
   * @returns {html}
   */
  playbackRateTemplate(id = 'playback-rate') {
    return html`
      <rh-tooltip id="${id}-tooltip" on="${this.on}">
        <div id="${id}-stepper">
          <button id="${id}-stepdown"
            class="playback-rate-step"
            tabindex="-1"  
            ?disabled="${this.playbackRate < 0.4}" 
            aria-hidden="true" 
            @click="${()=>this.decrementPlaybackrate(id)}"
            tabindex="-1">
            ${icons.playbackRateSlower}
          </button>
          <label for="${id}" class="sr-only">Playback rate</label>
          <select id="${id}"
            @change="${this.#handleplaybackRateSelect}">
            ${this.#getPlaybackRates().map(step=>html`
              <option 
                value="${step}" 
                ?selected=${this.playbackRate === step}>
                ${(step).toFixed(1)}x
              </option>`)}
          </select>
          <button 
            id="${id}-stepup" 
            class="playback-rate-step"
            tabindex="-1" 
            ?disabled="${this.playbackRate > 3.8}" 
            aria-hidden="true" 
            @click="${()=>this.incrementPlaybackrate(id)}"
            tabindex="-1">
            ${icons.playbackRateFaster}
          </button>
        </div>
        <span slot="content">Playback rate</span>
      </rh-tooltip>`;
  }


  /**
   * template for menu button
   * @returns {html}
   */
  menuButtonTemplate() {
    const icon = this.#isCompact ?
      icons.menuKebab : icons.menuMeatball;
    return !this.#showMenuButton ?
      ''
      : html`<rh-audio-player-menu id="menu" on="${this.on}">
        <rh-tooltip id="menu-tooltip" on="${this.on}" slot="button">
          <button class="toolbar-button">
            ${icon}
          </button>
          <span slot="content">Menu</span>
        </rh-tooltip>
        ${!this.#showAboutButton ?
          ''
          : html`<button 
            aria-expanded="${ifDefined(this.expanded)}"
            id="about" 
            ?disabled=${false} 
            @click="${this.showAbout}"
            slot="menu">
            About the Episode
          </button>`}
        ${!this.#showSubscribeButton ?
          ''
          : html`<button 
            aria-expanded="${ifDefined(this.expanded)}"
            id="subscribe" 
            ?disabled=${false} 
            @click="${this.showSubscribe}"
            slot="menu">
            Subscribe
          </button>`}
        ${!this.#showTranscriptButton ? '' : html`<button 
            aria-expanded="${ifDefined(this.expanded)}"
            id="transcript" 
            ?disabled=${false} 
            @click="${this.showTranscript}"
            slot="menu">
            Transcript
          </button>`}
    </rh-audio-player-menu>`;
  }


  /**
   * template for panel
   * @returns {html}
   */
  popupTemplate() {
    return !this.textTracks || this.textTracks.length < 1 || this.mode === 'mini' ? '' : html`
      <div id="panel-outer" ?hidden=${!this.expanded}>
        <div id="panel">
          ${this._expandedSection === 'about' ?
            this.aboutTemplate()
            : this._expandedSection === 'subscribe' ?
            this.subscribeTemplate()
            : this._expandedSection === 'transcript' ?
            this.transcriptTemplate()
            : `-${this._expandedSection}-`
          }
        </div>
      </div>
    `;
  }

  aboutTemplate() {
    const heading = !(this.#isCompact && this.#showTitleDesc) ?
      this.headingTemplate(this.headingLevel + 1, html`About the Episode`, 'panel-title')
      : this.headingTemplate(this.headingLevel + 1, html`<slot name="description"></slot><slot class="panel-title" name="title"></slot>`);
    return html`
      ${heading}
      <slot name="about"></slot>
    `;
  }

  subscribeTemplate() {
    return html`
      ${this.headingTemplate(this.headingLevel + 1, html`Subscribe`, 'panel-title')}
      <slot name="subscribe-link"></slot>
    `;
  }


  transcriptTemplate() {
    return html`
      <div class="panel-toolbar">
        ${this.headingTemplate(this.headingLevel + 1, html`Transcript`, 'panel-title')}
        ${this.transcriptControlsTemmplate()}
      </div>
      ${this.transcriptCuesTemplate()}
    `;
  }

  transcriptControlsTemmplate() {
    const icon = icons.download;
    return html`<label>
        <input id="autoscroll" type="checkbox" @click="${this.toggleScroll}" ?checked="${this._autoscroll}"> Autoscroll
      </label>
      ${this.buttonTemplate('download', icon, 'Download', this.downloadTranscript, false, false)}`;
  }


  /**
   * template for transcript cues
   * @returns {html}
   */
  transcriptCuesTemplate() {
    const hasChapters = [...this.textTracks].some(track=>track.language === this._language && track.kind === 'chapters');
    const cues = this.#getTranscriptCues(this._language).map((cue, index)=>this.transcriptCueTemplate(cue, hasChapters, `cue-${index}`));
    return html`<div id="cues" lang="${this._language}">${cues}</div>`;
  }


  /**
   * template for a single transcript cue
   * @returns {html}
   */
  transcriptCueTemplate(cue:VTTCue, hasChapters:boolean, id = 'string') {
    const kind = cue?.track?.kind;
    return kind === 'captions' && !hasChapters ?
      this.transcriptOnlyCueTemplate(cue, id) : this.transcriptChaptersCueTemplate(cue, id);
  }

  /**
   * template for time heading on a single transcript cue
   * @returns {html}
   */
  transcriptCueHeadingTemplate(start:number, type:string, text:string, id:string) {
    return html`<a 
      id="${id}"
      href="#${id}"
      data-start-time="${Math.round(start)}" 
      class="cue-time" 
      @click=${()=>this.seek(start)}>${this.#getTimeString(start)}</a> - <span class="${type}">${text}</span>`;
  }

  /**
   * template for a single voice caption transcript cue
   * @returns {html}
   */
  transcriptChaptersCueTemplate(cue:VTTCue, id:string) {
    const { text } = cue;
    const kind = cue.track?.kind;
    const time = this.mediaElement?.currentTime;
    return kind === 'chapters' ?
    html`${this.headingTemplate(this.headingLevel + 2, this.transcriptCueHeadingTemplate(cue.startTime, 'cue-voice', text, id))}`
    : html`<a 
      id="${id}"
      href="#${id}"
      data-start-time="${Math.round(cue.startTime)}" 
      class="cue-text${time >= cue.startTime && time < cue.endTime ? ' active-cue' : ''}"
      @click=${()=>this.seek(cue.startTime)}>
      ${text.replace(/<v\s+[^>]+>/, '').replace(/<\/v>/, '')}
    </a>&nbsp;`;
  }

  /**
   * template for a single voice caption transcript cue
   * @returns {html}
   */
  transcriptOnlyCueTemplate(cue:VTTCue, id:string) {
    const { text } = cue;
    const voices = text.split(/<\/v>/);
    return html`${voices.map(str => {
        if (str.length < 1) { return ''; }
        const voiceMatch = str.match(/<v\s+([^>]+)>/);
          const dialog = str.replace(/<v\s+[^>]+>/, '');
          const voice = voiceMatch && voiceMatch.length > 0 ? voiceMatch[1] : '';
          return html`${this.headingTemplate(this.headingLevel + 2, this.transcriptCueHeadingTemplate(cue.startTime, 'cue-voice', voice, id))}
          <p data-start-time="${Math.round(cue.startTime)}" class="cue-text">${dialog}</p>`;
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
  incrementPlaybackrate(id = 'playback-rate'):void {
    const selector = this.getPlaybackRateSelect(id);
    if (selector) {
      this.mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(parseFloat(selector.value) + 0.2);
    }
  }

  /**
   * dencreases media playback rate by 0.25x
   */
  decrementPlaybackrate(id = 'playback-rate'):void {
    const selector = this.getPlaybackRateSelect(id);
    if (selector) {
      this.mediaElement.playbackRate = this.playbackRate = this.#validPlaybackRate(parseFloat(selector.value) - 0.2);
    }
  }

  /**
   * toggles the menu butotn
   */
  showAbout():void {
    this._expandedSection = 'about';
    this.expanded = true;
    setTimeout(()=>{ if (this.#close) { this.#close.focus(); } }, 1);
  }

  /**
   * toggles the menu butotn
   */
  showSubscribe():void {
    this._expandedSection = 'subscribe';
    this.expanded = true;
    setTimeout(()=>{ if (this.#close) { this.#close.focus(); } }, 1);
  }

  /**
   * toggles the menu butotn
   */
  showTranscript():void {
    this._expandedSection = 'transcript';
    this.expanded = true;
    setTimeout(()=>{ if (this.#close) { this.#close.focus(); } }, 1);
  }

  /**
   * toggles the menu butotn
   */
  closeMenu():void {
    this.expanded = false;
    setTimeout(()=>{ if (this.#menu) { this.#menu.focus(); } }, 1);
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
    const currentTime = this.mediaElement?.currentTime || 0;
    const time = currentTime + seconds;
    this.seek(time);
  }

  /**
   * rewinds media 15 seconds
   */
  rewind():void {
    this.seekFromCurrentTime(-15);
  }

  /**
   * advances media 15 seconds
   */
  forward() {
    this.seekFromCurrentTime(15);
  }

  downloadTranscript() {
    const rows = this.#getTranscriptCues(this._language).map(cue =>{
      const voice = cue.text.match(/<v\s+([^>]+)>/);
      const text = cue.text.replace(/<v\s+[^>]+>/, '').replace(/<\/v>/, '');
      return `

${this.#getTimeString(cue.startTime)} - ${this.#getTimeString(cue.endTime)} ${voice && voice[1] ? ` ${voice[1]}: ` : ''} ${text}
      `;
    });
    const transcript = rows.join('');
    const a = document.createElement('a');
    const title = this._title?.innerHTML || 'Transcript';
    const desc = `${this._description?.innerHTML}\n` || '';
    const filename = title.replace(/[^\w\d]/g, '');
    a.setAttribute(
      'href',
      `data:text/plain;charset=UTF-8,${encodeURIComponent(`${desc + title}\n${transcript}`)}`
    );
    a.setAttribute('download', `${filename}.txt`);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  toggleScroll() {
    this._autoscroll = !this._autoscroll;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player': RhAudioPlayer;
  }
}
