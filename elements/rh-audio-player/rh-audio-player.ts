import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player.css';
import '../rh-tooltip/rh-tooltip.js';

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
  @property({ reflect: true, type: Boolean }) playbackRate = 1;
  @state() private _currentTime = 0;
  @state() private _duration = 0;
  @state() private _readyState = 0;
  @state() private _paused = true;
  @state() private _muted = false;
  @state() private _unmutedVolume = this.volume;


  get mediaElement():HTMLMediaElement {
    return this.querySelector('audio') as HTMLMediaElement;
  }

  get currentTime() {
    return this._currentTime;
  }

  get duration() {
    return this._duration;
  }

  get muted() {
    return this._muted || this.volume === 0;
  }

  get paused() {
    return this.mediaElement?.paused;
  }

  get sliderVolume() {
    this._unmutedVolume = this.mediaElement?.volume || this.volume;
    return this.muted || this.volume === 0 ? 0 : this._unmutedVolume * 100;
  }

  render() {
    return html`
      <div id="ready-state">Ready State: ${this._readyState}</div>
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
        ${this.rewindButtonTemplate()}
        ${this.playButtonTemplate()}
        ${this.forwardButtonTemplate()}
        ${this.menuButtonTemplate()}
      </div>
    </div>
    `;
  }

  timeTemplate() {
    return html`<div id="time-controls">
      <rh-tooltip>
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
      </rh-tooltip>
      <div id="time-labels">
        <span class="sr-only">Elapsed time</span>
        <span id="current">${this._getTimeString(this._currentTime)}</span>
        <span class="sr-only">/</span>
        <span id="duration">${this._getTimeString(this.duration)}</span>
      </div>
    </div>`;
  }

  buttonTemplate(id = '', icon = html``, label = '', callback = this._handlePlay, disabled = false) {
    return html`
      <rh-tooltip>
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
    const icon = !this.muted ? html`&#128264;` : html`&#128263;`;
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
      <rh-tooltip>
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
      <rh-tooltip>
        <label for="playback-rate">Playback rate</label>
        <input id="playback-rate" 
          type="number" 
          step="0.25" 
          min="0.25" 
          max="2" 
          value="${this.playbackRate}" 
          @change="${this._handlePlaybackRateInput}"/>x
        <span slot="content">Playback rate</span>
      </rh-tooltip>`;
  }

  rewindButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === 0;
    return this.buttonTemplate('rewind', html`&#9194;`, 'Rewind 15 seconds', this.rewind, disabled);
  }

  playButtonTemplate() {
    const icon = !this._paused ? html`&#9208;` : html`&#9654;`;
    const label = !this._paused ? 'Pause' : 'Play';
    const disabled = this._readyState < 3;
    return this.buttonTemplate('play', icon, label, this._handlePlayButton, disabled);
  }

  forwardButtonTemplate() {
    const disabled = this._readyState < 1 || this._currentTime === this.duration;
    return this.buttonTemplate('forward', html`&#9193;`, 'Advance 15 seconds', this.forward, disabled);
  }

  menuButtonTemplate() {
    return this.buttonTemplate('menu', html`&hellip;`, 'Menu', this.toggleMenu);
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
