import { LitElement, html } from 'lit';
import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerCue } from './rh-audio-player-cue.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
import buttonStyles from './RhAudioPlayerButtonStyles.css';
import panelStyles from './RhAudioPlayerPanelStyles.css';
import styles from './rh-audio-player-transcript.css';

const icon = html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
</svg>`;


/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-audio-player-cue` elements
 */
@customElement('rh-audio-player-transcript')
export class RhAudioPlayerTranscript extends LitElement {
  static readonly styles = [buttonStyles, panelStyles, styles];

  @queryAssignedElements({ selector: 'rh-audio-player-cue' }) private _cues!: RhAudioPlayerCue[];
  @query('rh-audio-player-scrolling-text-overflow') _titleScroller?: RhAudioPlayerScrollingTextOverflow;
  @property({ type: String, attribute: 'heading' }) heading!:string;
  @property({ type: String, attribute: 'label' }) label = 'Transcript';
  @property({ type: String, attribute: 'series' }) series!:string;
  @property({ type: String, attribute: 'title' }) title!:string;
  @state() private _autoscroll = true;

  #headingLevelController = new HeadingController(this);


  render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.label)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <div class="panel-toolbar" part="toolbar">
        ${this._cues.length < 0 ? '' : html`
          <label>
            <input id="autoscroll" type="checkbox" @click="${this.#onScrollClick}" ?checked="${this._autoscroll}"> Autoscroll
          </label>
          <rh-tooltip id="download-tooltip">
            <button 
              id="download" @click="${this.#onDownloadClick}">
              ${icon}
            </button>
            <span slot="content">Download</span>
          </rh-tooltip>
        `}
      </div>
      <div id="cues"><slot></slot></div>`;
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

  setDuration(mediaDuration?:number) {
    if (mediaDuration) {
      this._cues.forEach((cue, index)=>{
        const nextCue = this._cues[index + 1];
        const nextStart = nextCue?.startTime;
        const prevCue = this._cues[index - 1];
        const prevEnd = prevCue?.endTime;
        if (!prevCue || !!prevEnd) { cue.startTime = cue.startTime || prevEnd || 0; }
        if (!nextCue || !!nextStart) { cue.endTime = cue.endTime || nextStart || mediaDuration; }
      });
    }
  }

  #onScrollClick() {
    this._autoscroll = !this._autoscroll;
  }

  #onDownloadClick() {
    const transcript = this._cues.map(cue =>cue.downloadText).join('');
    const a = document.createElement('a');
    const title = [this.series, this.title].join(' ');
    const filename = title.replace(/[^\w\d]/g, '');
    const contents = `${title.length > 0 ? title : this.label}\n${transcript}`;
    a.setAttribute('href', `data:text/plain;charset=UTF-8,${encodeURIComponent(contents)}`);
    a.setAttribute('download', `${filename}.txt`);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  scrollText() {
    this._titleScroller?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-transcript': RhAudioPlayerTranscript;
  }
}
