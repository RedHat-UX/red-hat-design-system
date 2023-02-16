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

  /** Start time, in seconds, of this transcript cue. Overridden by `start` slot */
  @property({ type: Number, attribute: 'start-time', reflect: true }) startTime?: number;

  /** End time, in seconds, of this transcript cue. Overridden by `end` slot */
  @property({ type: Number, attribute: 'end-time' }) endTime?: number;

  /** Text of this cue. Overridden by `text` slot */
  @property() text?: string;

  /** Name of the voice speaking this text. Overridden by `voice` slot */
  @property({ reflect: true }) voice?: string;

  /** Whether this cue is active right now */
  @property({ type: Boolean, reflect: true }) active = false;

  @queryAssignedElements({ slot: 'start' }) private _start!: HTMLElement[];

  @queryAssignedElements({ slot: 'end' }) private _end!: HTMLElement[];

  @queryAssignedElements({ slot: 'voice' }) private _voice!: HTMLElement[];

  @queryAssignedElements({ slot: 'text' }) private _text!: HTMLElement[];

  #headingLevelController = new HeadingController(this);

  get downloadText() {
    const [voice,] = this._voice;
    const [text,] = this._text;
    const voiceContent = voice?.textContent ? ` ${voice.textContent}: ` : '';
    const textContent = text?.textContent || '';
    return `
      ${getFormattedTime(this.startTime)} - ${getFormattedTime(this.endTime)}${voiceContent}${textContent}
    `;
  }

  render() {
    return html`
        ${this.#headingTemplate()}
        ${!this.#isTextLink ? '' : this.#linkTemplate(html`${this.text}`)}
        <slot name="start" @slotchange=${this.#handleStartchange} hidden>${getFormattedTime(this.startTime)}</slot>
        <slot name="end" @slotchange=${this.#handleEndchange} hidden>${getFormattedTime(this.endTime)}</slot>
        <slot name="voice" @slotchange=${this.#handleVoicechange} hidden>${this.voice}</slot>
        <slot name="text" @slotchange=${this.#handleTextchange} ?hidden=${this.#isTextLink}></slot>
    `;
  }

  get #isTextLink(): boolean {
    const [voice,] = this._voice;
    const voiceText = voice?.textContent || '';
    return (!this.voice || this.voice !== '') && (this._voice.length < 1 || !voice || voiceText?.trim().length < 0);
  }

  #headingTemplate() {
    const headingContent = html`
      <slot name="start" @slotchange=${this.#handleStartchange}>${getFormattedTime(this.startTime)}</slot> 
      -
      <slot name="voice" @slotchange=${this.#handleVoicechange}>${this.voice}</slot>`;
    const link = this.#linkTemplate(headingContent, true);
    return this.#headingLevelController.headingTemplate(link, { hidden: this.#isTextLink, classes: { 'cue-heading': true } });
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

  #handleTextchange() {
    const [text,] = this._text;
    if (!this.text && !!text?.textContent) { this.text = text?.textContent; }
  }

  #handleVoicechange() {
    const [voice,] = this._voice;
    if (!this.voice && !!voice?.textContent) { this.voice = voice?.textContent; }
  }

  #handleStartchange() {
    const [start,] = this._start;
    const seconds = getSeconds(start?.textContent);
    if (!this.startTime && !!seconds) { this.startTime = seconds; }
  }

  #handleEndchange() {
    const [end,] = this._end;
    const seconds = getSeconds(end?.textContent);
    if (!this.endTime && !!seconds) { this.endTime = seconds; }
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
