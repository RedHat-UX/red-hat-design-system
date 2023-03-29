import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { HeadingController } from '../../lib/HeadingController.js';

import { RhAudioPlayerCue, getFormattedTime } from './rh-audio-player-cue.js';

import './rh-audio-player-scrolling-text-overflow.js';

import buttonStyles from './rh-audio-player-button-styles.css';
import panelStyles from './rh-audio-player-panel-styles.css';
import styles from './rh-audio-player-transcript.css';
import { type Microcopy, I18nController } from '../../lib/I18nController.js';

const icon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
  </svg>
`;

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

  @property() mediaseries = '';

  @property() mediatitle = '';

  @property({ attribute: false }) microcopy?: Microcopy;

  @queryAssignedElements({ selector: 'rh-audio-player-cue' })
  private _cues!: RhAudioPlayerCue[];

  #autoscroll = true;

  #duration?: number;

  #headingLevelController = new HeadingController(this);

  #translation = new I18nController(this, {
    'en-US': {
      autoscroll: 'Autoscroll',
      download: 'Download'
    },
    'es': {
      autoscroll: 'Desplazamiento automático',
      download: 'Télécharger'
    },
    ...this.microcopy ?? {},
  });

  render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.label)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <div class="panel-toolbar" part="toolbar">${this._cues.length < 0 ? '' : html`
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${this.#autoscroll}"
                 @click="${this.#onScrollClick}">
            ${this.#translation.get('autoscroll')}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${this.#onDownloadClick}">${icon}</button>
          <span slot="content">${this.#translation.get('download')}</span>
        </rh-tooltip>`}
      </div>
      <slot id="cues"></slot>
    `;
  }

  #updateCues(currentTime?: number) {
    let activeCue: RhAudioPlayerCue;
    this._cues.forEach((cue, index)=>{
      if (!cue.start) {
        const prevCue = this._cues[index - 1];
        const prevEnd = prevCue?.end;
        if (prevEnd) { cue.start = prevEnd || '0:00'; }
      }
      if (!cue.end) {
        const nextCue = this._cues[index + 1];
        const nextStart = nextCue?.start;
        const duration = getFormattedTime(this.#duration);
        if (!!nextStart || !!duration) { cue.end = nextStart || duration; }
      }
      if (currentTime) {
        const started = !!cue.startTime && Math.round(cue.startTime) < Math.round(currentTime) ? true : false;
        const ended = !!cue.endTime && Math.round(cue.endTime) < Math.round(currentTime) ? true : false;
        const active = started && !ended;
        cue.active = active;
        if (active) { activeCue = cue; }
      }

      const cuesContainer = this.shadowRoot?.getElementById('cues');

      if (activeCue && this.#autoscroll && !!cuesContainer) {
        const anchor = activeCue.offsetTop + (0.5 * activeCue.offsetHeight);
        const scroll = anchor - cuesContainer.offsetTop - (0.5 * cuesContainer?.offsetHeight);

        setTimeout(() => {
          if (cuesContainer) {
            cuesContainer.scrollTop = scroll;
          }
        }, 250);
      }
    });
  }

  #onScrollClick() {
    this.#autoscroll = !this.#autoscroll;
    this.requestUpdate();
  }

  #onDownloadClick() {
    const transcript = this._cues.map(cue =>cue.downloadText).join('\n\n');
    const a = document.createElement('a');
    const title = [this.mediaseries, this.mediatitle].join(' ');
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

  setDuration(mediaDuration: number) {
    if (!!mediaDuration && this.#duration !== mediaDuration) {
      this.#duration = mediaDuration;
      this.requestUpdate();
      this.#updateCues();
    }
  }

  scrollText() {
    this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-transcript': RhAudioPlayerTranscript;
  }
}
