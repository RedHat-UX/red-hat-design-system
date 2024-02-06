import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { RhCue, getFormattedTime } from './rh-cue.js';

import './rh-audio-player-scrolling-text-overflow.js';
import '../rh-tooltip/rh-tooltip.js';

import buttonStyles from './rh-audio-player-button.css';
import panelStyles from './rh-audio-player-panel.css';
import styles from './rh-transcript.css';
import { state } from 'lit/decorators/state.js';

import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import { HeadingLevelContextProvider } from '../../lib/context/headings/provider.js';

const icon = html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M7.56 12.45a.63.63 0 0 0 .88 0l4-4a.63.63 0 1 0-.88-.89L8.63 10.5V2A.62.62 0 0 0 8 1.38a.63.63 0 0 0-.63.62v8.5L4.44 7.56a.63.63 0 1 0-.88.89ZM14 14.38H2a.63.63 0 1 0 0 1.25h12a.63.63 0 0 0 0-1.25Z"/>
  </svg>
`;

/**
 * Audio Player Transcript Panel
 * @slot heading - custom heading for panel
 * @slot - `rh-cue` elements
 * @csspart heading - scrolling text overflow
 * @csspart toolbar - toolbar area above cues list
 */
@customElement('rh-transcript')
export class RhTranscript extends LitElement {
  static readonly styles = [buttonStyles, panelStyles, styles];

  @property() heading?: string;

  @property() label?: string;

  @property({ reflect: true }) lang!: string;

  @state() private _label!: string;

  @state() private _autoscroll!: string;

  @state() private _download!: string;

  @queryAssignedElements({ selector: 'rh-cue' })
  private _cues!: RhCue[];

  #autoscroll = true;

  #duration?: number;

  #headings = new HeadingLevelContextProvider(this, {
    offset: 0,
    parent: new HeadingLevelContextConsumer(this),
  });

  render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headings.wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <div class="panel-toolbar" part="toolbar">${this._cues.length < 0 ? '' : html`
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${this.#autoscroll}"
                 @click="${this.#onScrollClick}">
            ${this.autoscrollLabel}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${this.#onDownloadClick}" aria-label="${this.downloadLabel}">${icon}</button>
          <span slot="content">${this.downloadLabel}</span>
        </rh-tooltip>`}
      </div>
      <slot id="cues"></slot>
    `;
  }

  set autoscrollLabel(label: string) {
    this._autoscroll = label;
  }

  get autoscrollLabel(): string {
    return this._autoscroll || 'Autoscroll';
  }

  set downloadLabel(label: string) {
    this._download = label;
  }

  get downloadLabel(): string {
    return this._download || 'Download';
  }

  set menuLabel(label: string) {
    this._label = label;
  }

  get menuLabel(): string {
    return this.label || this._label || 'About the episode';
  }

  #updateCues(currentTime?: number) {
    let activeCue: RhCue;
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
    this.dispatchEvent(new Event('transcriptdownload', { bubbles: true }));
  }

  get downloadText() {
    return this._cues.map(cue =>cue.downloadText).join('\n\n');
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
    'rh-transcript': RhTranscript;
  }
}
