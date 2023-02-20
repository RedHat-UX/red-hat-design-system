import { LitElement, html, nothing } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import styles from './rh-audio-player-cue.css';

export type Seconds = (number | null | undefined);
export type TimeString = (string | null | undefined);

/**
 * formats time in seconds as `mm:ss.ms` string
 */
export const getFormattedTime = (seconds: Seconds): string => {
  const ss = seconds || 0;
  return typeof seconds !== typeof undefined ? `${Math.floor(ss % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(ss % 60).toString().padStart(2, '0')}` : '';
};

/**
 * gets seconds from a stirng formatted as `mm:ss.ms`
 */
export const getSeconds = (str:TimeString): Seconds => {
  if (!str) { return undefined; }
  const hhTimeString = str.match(/(\d\d:)+\d\d(\.\d+)?/) || [];
  const msssmmhh = hhTimeString[0]?.split(':').reverse();
  return !msssmmhh ? undefined : parseFloat(msssmmhh[0] || '0') + parseFloat(msssmmhh[1] || '0') * 60 + parseFloat(msssmmhh[2] || '0') * 60;
};


/**
 * Audio Player Transcript Cue
 * @slot start - cue start time in mm:ss.ms time format
 * @slot end - optional cue end time in mm:ss.ms time format
 * @slot voice - person speaking cue text
 * @slot text - text of cue
 */
@customElement('rh-audio-player-cue')
export class RhAudioPlayerCue extends LitElement {
  static readonly styles = [styles];

  /** Start time, in mm:ss.ms */
  @property() start?: string;

  /** End time, in mm:ss.ms */
  @property() end?: string;

  /** Text of this cue. Overridden by `text` slot */
  @property() text?: string;

  /** Name of the voice speaking this text. Overridden by `voice` slot */
  @property({ reflect: true }) voice?: string;

  /** Whether this cue is active right now */
  @property({ type: Boolean, reflect: true }) active = false;

  @queryAssignedElements({ slot: '' }) private _text!: HTMLElement[];


  #headingLevelController = new HeadingController(this);
  #hasText = false;

  get startTime() {
    return this.start ? getSeconds(this.start) : undefined;
  }

  get endTime() {
    return this.end ? getSeconds(this.end) : undefined;
  }

  get downloadText() {
    const { textContent } = this;
    const voiceContent = this.voice || '';
    const text = (textContent || '').trim();
    const voice = (voiceContent || '').trim();
    const time = this.end ? [this.start, this.end].join(' - ') : this.start;
    const heading = voice.length > 0 ? [time, voice].join(': ') : time;
    return text.length > 0 ? [heading, text].join('\n') : heading;
  }

  protected firstUpdated(): void {
    this.#updateHasText();
  }

  render() {
    const headingContent = html`
      <span id="start">${this.start}</span>
      -
      <span id="voice">${this.voice}</span>`;
    const link = this.#linkTemplate(headingContent, true);
    return html`
      ${!this.#hasVoice ?
        ''
        : this.#headingLevelController.headingTemplate(link, { classes: { 'cue-heading': true } })}
      ${!this.#hasText ?
        ''
        : this.#linkTemplate(html`<slot @slotchange=${this.#updateHasText}></slot>`)}`;
  }

  get #hasVoice() {
    return !!this.voice && this.voice.trim()?.length > 0;
  }

  #linkTemplate(text = html``, heading = false) {
    const id = this.id || `t${this.startTime || ''}-${this.endTime || ''}${heading ? 'heading' : 'text'}`;
    return html`
      <a id="${id ?? nothing}"
        href="#${id ?? nothing}"
        part="${heading ? 'headinglink' : 'textlink'}"
        ?active=${this.active && !heading}
        @click=${this.#onClick}>${text}</a>`;
  }

  #updateHasText() {
    this.#hasText = (this.textContent || '').trim().length > 0;
  }

  #onClick() {
    this.dispatchEvent(new Event('cueseek', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-cue': RhAudioPlayerCue;
  }
}
