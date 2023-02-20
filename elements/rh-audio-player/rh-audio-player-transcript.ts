import { LitElement, html } from 'lit';
import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerCue, getFormattedTime } from './rh-audio-player-cue.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
import buttonStyles from './rh-audio-player-button-styles.css';
import panelStyles from './rh-audio-player-panel-styles.css';
import styles from './rh-audio-player-transcript.css';

const icon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
  </svg>
`;

const defaultMicrocopy = {
  en: {
    autoscroll: 'Autoscroll',
    download: 'Download'
  },
  es: {
    autoscroll: 'Desplazamiento automático',
    download: 'Télécharger'
  }
};

/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-audio-player-cue` elements
 */
@customElement('rh-audio-player-transcript')
export class RhAudioPlayerTranscript extends LitElement {
  static readonly styles = [buttonStyles, panelStyles, styles];

  @property() heading?: string;

  @property() label = 'Transcript';

  @property() series?: string;

  @property() title: string = this.getAttribute('title') ?? '';

  @property({ type: Object }) microcopy = {};

  @state() private _autoscroll = true;

  @state() private _duration!:number;

  @queryAssignedElements({ selector: 'rh-audio-player-cue' })
  private _cues!: RhAudioPlayerCue[];

  @query('rh-audio-player-scrolling-text-overflow')
  private _titleScroller?: RhAudioPlayerScrollingTextOverflow;

  @query('#cues') private _cuesContainer?: HTMLElement;

  #headingLevelController = new HeadingController(this);

  get #microcopy() {
    const ancestor = this.getAttribute('lang') || this.closest('[lang]')?.getAttribute('lang') || 'en';
    const lang = defaultMicrocopy[ancestor as keyof typeof defaultMicrocopy] || defaultMicrocopy.en;
    return { ...lang, ...this.microcopy };
  }

  render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.label)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <div class="panel-toolbar" part="toolbar">${this._cues.length < 0 ? '' : html`
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${this._autoscroll}"
                 @click="${this.#onScrollClick}">
            ${this.#microcopy.autoscroll}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${this.#onDownloadClick}">${icon}</button>
          <span slot="content">${this.#microcopy.download}</span>
        </rh-tooltip>`}
      </div>
      <slot id="cues"></slot>
    `;
  }

  #updateCues(currentTime?:number) {
    let activeCue:RhAudioPlayerCue;
    this._cues.forEach((cue, index)=>{
      if (!cue.start) {
        const prevCue = this._cues[index - 1];
        const prevEnd = prevCue?.end;
        if (prevEnd) { cue.start = prevEnd || '0:00'; }
      }
      if (!cue.end) {
        const nextCue = this._cues[index + 1];
        const nextStart = nextCue?.start;
        const duration = getFormattedTime(this._duration);
        if (!!nextStart || !!duration) { cue.end = nextStart || duration; }
      }
      if (currentTime) {
        const started = !!cue.startTime && Math.round(cue.startTime) < Math.round(currentTime) ? true : false;
        const ended = !!cue.endTime && Math.round(cue.endTime) < Math.round(currentTime) ? true : false;
        const active = started && !ended;
        cue.active = active;
        if (active) { activeCue = cue; }
      }
      if (activeCue && this._autoscroll && !!this._cuesContainer) {
        const anchor = activeCue.offsetTop + (0.5 * activeCue.offsetHeight);
        const scroll = anchor - this._cuesContainer.offsetTop - (0.5 * this._cuesContainer?.offsetHeight);

        setTimeout(() => {
          if (this._cuesContainer) { this._cuesContainer.scrollTop = scroll; }
        }, 250);
      }
    });
  }

  #onScrollClick() {
    this._autoscroll = !this._autoscroll;
  }

  #onDownloadClick() {
    const transcript = this._cues.map(cue =>cue.downloadText).join('\n\n');
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

  setActiveCues(currentTime = 0) {
    this.#updateCues(currentTime);
  }

  setDuration(mediaDuration:number) {
    if (!!mediaDuration && this._duration !== mediaDuration) {
      this._duration = mediaDuration;
      this.#updateCues();
    }
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
