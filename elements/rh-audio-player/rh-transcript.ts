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
 * Provides a synchronized transcript panel for `rh-audio-player`. Use this
 * when you need to display timed captions alongside audio playback. Must
 * be placed in the `transcript` slot. Authors should provide `rh-cue`
 * block elements with `start` and optionally `end` and `voice` attributes.
 * Active cues are highlighted for screen reader and sighted users alike.
 *
 * @summary Displays synchronized, scrollable transcript with download
 *
 * @csspart heading - The panel heading with scrolling text overflow.
 * @csspart toolbar - The toolbar area containing autoscroll and download.
 *
 * @fires transcriptdownload - Fired when the user clicks the download
 *        button. This is a plain `Event` with `bubbles: true` and no
 *        custom detail. The parent `rh-audio-player` handles it to
 *        generate a `.txt` file download of the full transcript.
 */
@customElement('rh-transcript')
export class RhTranscript extends LitElement {
  static readonly styles = [buttonStyles, panelStyles, styles];

  /** Custom heading text displayed at the top of the transcript panel. Overridden by the `heading` slot. */
  @property() heading?: string;

  /** Accessible label for the panel, used as the menu item text when no heading slot is provided. */
  @property() label?: string;

  /** Language code for transcript content, used for text direction and localization. */
  @property({ reflect: true }) lang!: string;

  /** Text label shown in the parent player's menu for this panel. */
  @property() menuLabel = 'About the episode';

  /** Text label for the download button and its tooltip. */
  @property() downloadLabel = 'Download';

  /** Text label for the autoscroll checkbox. */
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
      <rh-audio-player-scrolling-text-overflow part="heading">
        <!-- summary: Panel heading
             description: |
               Accepts a heading block element like \`<h3>\` for the panel
               title. Should use an appropriate heading level for the page
               so screen readers can navigate the panel hierarchy. -->
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
      <!-- summary: Transcript cue elements
           description: |
             Accepts \`<rh-cue>\` block elements with \`start\`, \`end\`, and
             \`voice\` attributes. Screen readers can navigate individual
             cues, and clicking a cue seeks the audio to that timestamp. -->
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

  /**
   * Updates cue active states based on the current playback time.
   * @param currentTime elapsed time in seconds
   */
  setActiveCues(currentTime = 0) {
    this.#updateCues(currentTime);
  }

  /**
   * Sets the total media duration and recalculates cue end times.
   * @param mediaDuration total duration in seconds
   */
  setDuration(mediaDuration: number) {
    if (!!mediaDuration && this.#duration !== mediaDuration) {
      this.#duration = mediaDuration;
      this.requestUpdate();
      this.#updateCues();
    }
  }

  /** Triggers the scrolling text animation on the panel heading if it overflows its container. */
  scrollText() {
    this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-transcript': RhTranscript;
  }
}
