import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';

import { RhCue, getFormattedTime } from './rh-cue.js';

import { HeadingLevelContextConsumer } from '@rhds/elements/lib/context/headings/consumer.js';
import { HeadingLevelContextProvider } from '@rhds/elements/lib/context/headings/provider.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller-server.js';

import buttonStyles from './rh-audio-player-button.css' with { type: 'css' };
import panelStyles from './rh-audio-player-panel.css' with { type: 'css' };
import styles from './rh-transcript.css' with { type: 'css' };

import './rh-audio-player-scrolling-text-overflow.js';

import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * Audio Player Transcript Panel
 */
@customElement('rh-transcript')
export class RhTranscript extends LitElement {
  static readonly styles = [buttonStyles, panelStyles, styles];

  @property() heading?: string;

  @property() label?: string;

  @property({ reflect: true }) lang!: string;

  @property() menuLabel = 'About the episode';
  @property() downloadLabel = 'Download';
  @property() autoscrollLabel = 'Autoscroll';

  @state() private _autoscroll!: string;

  @state() private _download!: string;

  #autoscroll = true;

  #duration?: number;

  #slots = new SlotController(this, 'heading', null, 'cues');

  #headings = new HeadingLevelContextConsumer(this);

  get downloadText() {
    return this.#slots.getSlotted<RhCue>('cues').map(cue =>cue.downloadText).join('\n\n');
  }

  constructor() {
    super();
    new HeadingLevelContextProvider(this, { offset: 0 });
  }

  override render(): TemplateResult {
    return html`
      <!-- scrolling text overflow -->
      <rh-audio-player-scrolling-text-overflow part="heading">
        <!-- custom heading for panel -->
        <slot name="heading">${this.#headings.wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <!-- toolbar area above cues list -->
      <div class="panel-toolbar" part="toolbar">${this.#slots.isEmpty('cues') ? '' : html`
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${this.#autoscroll}"
                 @click="${this.#onScrollClick}">
            ${this.autoscrollLabel}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${this.#onDownloadClick}" aria-label="${this.downloadLabel}">
            <rh-icon set="ui" icon="download"></rh-icon>
          </button>
          <span slot="content">${this.downloadLabel}</span>
        </rh-tooltip>`}
      </div>
      <!-- \`rh-cue\` elements -->
      <slot id="cues"></slot>
    `;
  }

  #updateCues(currentTime?: number) {
    let activeCue: RhCue;
    this.#slots.getSlotted<RhCue>('cues').forEach((cue, index, a)=>{
      if (!cue.start) {
        const prevCue = a[index - 1];
        const prevEnd = prevCue?.end;
        if (prevEnd) {
          cue.start = prevEnd || '0:00';
        }
      }
      if (!cue.end) {
        const nextCue = a[index + 1];
        const nextStart = nextCue?.start;
        const duration = getFormattedTime(this.#duration);
        if (!!nextStart || !!duration) {
          cue.end = nextStart || duration;
        }
      }
      if (currentTime) {
        const started = !!cue.startTime
          && Math.round(cue.startTime) < Math.round(currentTime) ?
          true : false;
        const ended = !!cue.endTime
          && Math.round(cue.endTime) < Math.round(currentTime) ?
          true : false;
        const active = started && !ended;
        cue.active = active;
        if (active) {
          activeCue = cue;
        }
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
