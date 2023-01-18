import { LitElement, html, svg } from 'lit';
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerCue } from './rh-audio-player-cue.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-transcript.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-transcript')
export class RhAudioPlayerTranscript extends LitElement {
  static readonly styles = [styles];

  @queryAssignedElements({ slot: 'heading' }) private _heading!: HTMLElement;
  @queryAssignedElements({ selector: 'rh-audio-player-cue', slot: 'footer' }) private _cues!: RhAudioPlayerCue[];
  @property({ type: String, attribute: 'hidden', reflect: true }) hidden!:boolean;
  @property({ type: String, attribute: 'heading' }) heading!:string;
  @property({ type: String, attribute: 'series' }) series!:string;
  @property({ type: String, attribute: 'description' }) description!:string;
  @state() private _autoscroll = true;

  #headingLevelController = new HeadingController(this);

  get #defaultHeading() {
    const defaultHeadings = {
      'about': 'About this Episode',
      'subscribe': 'Subscribe',
      'transcript': 'Transcript',
    };
    const slot = this.slot as keyof typeof defaultHeadings;
    return defaultHeadings[slot];
  }

  get #hideTitle() {
    return this.slot !== 'about' || !this.title;
  }

  get #title() {
    return this.#hideTitle ? undefined : html`<div class="panel-series">${this.series}</div><div class="panel-title">${this.title}</div>`;
  }

  get panelLabel() {
    return this._heading ? this._heading.textContent : this.heading ? this.heading : this.#defaultHeading;
  }

  transcriptControlsTemplate() {
    const icon = svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
  </svg>`;
    return this.slot !== 'transcript' || this._cues.length < 0 ? '' : html`<label>
        <input id="autoscroll" type="checkbox" @click="${this.#onScrollClick}" ?checked="${this._autoscroll}"> Autoscroll
      </label>
      <rh-tooltip id="download-tooltip" on="${this.parentElement?.getAttribute('on') || 'light'}">
        <button 
          id="download" @click="${this.#onDownloadClick}">
          ${icon}
        </button>
        <span slot="content">Download</span>
      </rh-tooltip>`;
  }

  setActiveCues(time = 0) {
    const activeCues = this._cues.filter(cue => {
      const active = cue.startTime && Math.round(cue.startTime) === Math.round(time) ? true : false;
      cue.active = active;
      return active;
    });

    const lastCue = this._cues ? [...activeCues][activeCues.length - 1] : false;
    if (lastCue && this._autoscroll) {
      lastCue.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  setDuration(time?:number) {
    if (time) {
      this._cues.forEach((cue, index)=>{
        cue.endTime = this._cues[index + 1].startTime - 0.25 || time;
        cue.startTime = Math.max(0, Math.min(cue.endTime - 0.25, this._cues[index - 1].startTime - 0.25));
      });
    }
  }

  render() {
    const slot = this.slot as string;
    return html`
      <div class="panel-toolbar">
        ${this.#title ? this.#headingLevelController.headingTemplate(this.#title, { id: slot }) : ''}
        <slot name="heading" ?hidden=${!!this.title}>
          ${this.#headingLevelController.headingTemplate(
    this.heading || this.#defaultHeading,
            {
              id: slot,
              classes: { 'panel-title': true }
            }
  )}
        </slot>
        ${!this.transcriptControlsTemplate ? '' : this.transcriptControlsTemplate}
      </div>
      <slot></slot>
      <slot name="items"></slot>`;
  }

  #onScrollClick() {
    this._autoscroll = !this._autoscroll;
  }

  #onDownloadClick() {
    const transcript = this._cues.map(cue =>cue.downloadText).join('');
    const a = document.createElement('a');
    const title = this.title || 'Transcript';
    const desc = this.title && this.description ? `${this.description}\n` : ``;
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
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-transcript': RhAudioPlayerTranscript;
  }
}
