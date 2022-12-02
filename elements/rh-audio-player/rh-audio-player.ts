import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';

/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player') @pfelement()
export class RhAudioPlayer extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property({ type: String }) description = undefined;
  @property({ type: String }) mediatitle = undefined;
  @property({ reflect: true, type: String }) mode = 'full';
  @property({ reflect: true, type: String }) poster = undefined;
  @property({ reflect: true, type: Boolean }) volume = 0.5;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _readyState = 0;
  @state() private _paused = true;
  @state() private _muted = false;
  @state() private _unmutedVolume = this.volume;


  get mediaElement() {
    return this.querySelector('audio');
  }

  get currentTime() {
    return this._currentTime;
  }

  get duration() {
    return this._duration;
  }

  get muted() {
    return this._muted;
  }

  get paused() {
    return this.mediaElement?.paused;
  }

  get playbackRate() {
    return this.mediaElement?.playbackRate || 1;
  }

  get sliderVolume() {
    this._unmutedVolume = this.mediaElement?.volume || this.volume;
    return this.muted || this.volume === 0 ? 0 : this._unmutedVolume * 100;
  }

  render() {
    return html`
    <div>${this._readyState}</div>
      <slot></slot>
      ${this.uiTemplate()}
      
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

  private _handlePause() {
    this._paused = true;
  }

  private _handlePlay() {
    this._paused = false;
  }

  private _handlePlaying() {
    this._paused = false;
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

  /**
   * template for player controls
   * @returns {object}
   */
  uiTemplate() {
    return html`<div id="ui">
      ${this.thumbnailTemplate()}
      ${this.descTitleTemplate()}
      ${this.controlsTemplate()}
    </div>`;
  }

  /**
   * template for thumbnail image
   * @returns {object}
   */
  thumbnailTemplate() {
    return !this.poster ? '' : html`<img .src="${this.poster}" alt="poster for media">`;
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
        <button id="rewind" ?disabled="${this._readyState < 1}" @click="${this.rewind}">
          Rewind
        </button>
        <button id="play" ?disabled="${this._readyState < 3}" @click="${this._paused ? this.pause : this.play}">
          ${!this._paused ? 'Pause' : 'Play'}
        </button>
        <button id="forward" ?disabled="${this._readyState < 1}" @click="${this.forward}">
          Rewind
        </button>
        <button id="menu">&hellip;</button>
      </div>
    </div>
    `;
  }

  timeTemplate() {
    return html`<div id="time-controls">
      <input 
        id="volume" 
        ?disabled="${this.duration === 0}"
        type="range" 
        min="0" 
        max="${this.duration}" 
        @input="${this._handleTimeSlider}"
        value="${this.currentTime}">
      <div id="time-labels">
        <span id="current">${this.currentTime}</span>
        <span id="duration">${this.duration}</span>
      </div>
    </div>`;
  }

  volumeTemplate() {
    const max = !this.mediaElement ? 0 : 100;
    return html`<div id="volume-controls">
      <button id="mute" @click="${!this.muted ? this.mute : this.unmute}">
        ${!this.muted ? 'Mute' : 'Unmute'}
      </button>
      <input 
        id="volume" 
        ?disabled="${max === 0}"
        type="range" 
        min="0" 
        max="${max}" 
        step="1" 
        @input="${this._handleVolumeSlider}"
        value="${this.sliderVolume}">
    </div>`;
  }

  playbackRateTemplate() {
    return html`<input id="playback-rate" type="number" step="0.25" min="0.5" max="2" value="${this.playbackRate}"/>x`;
  }

  _handleTimeSlider(event:Event) {
    const target = event?.target as HTMLInputElement;
    const seconds = target?.value || -1;
    if (seconds > 0) { this.seek(seconds as number); }
  }

  _handleVolumeSlider(event:Event) {
    const target = event?.target as HTMLInputElement;
    const level = (target?.value || -1) as number;
    if (this.mediaElement) {
      this.mediaElement.volume = level / 100;
    }
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

  toggleMenu() {
    alert('TODO');
  }

  pause() {
    if (this.mediaElement?.pause) { this.mediaElement.pause(); }
  }

  play() {
    this.volume = this.mediaElement?.volume || 0.5;
    if (this.mediaElement?.play) { this.mediaElement.play(); }
  }

  seek(seconds:number) {
    const time = Math.max(0, Math.min(seconds, this.duration));
    if (!!time && this.mediaElement) { this.mediaElement.currentTime = time; }
  }

  seekFromCurrentTime(seconds = 0) {
    const currentTime = this.mediaElement?.currentTime;
    if (!!currentTime && !!this.duration) {
      const time = currentTime + seconds;
      this.seek(time);
    }
  }

  rewind() {
    this.seekFromCurrentTime(-15);
  }

  forward() {
    this.seekFromCurrentTime(15);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player': RhAudioPlayer;
}
}
