import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-cue.css';


export type Seconds = (number | null | undefined);
export type TimeString = (string | null | undefined);

/**
 * formats time in seconds as `mm:ss.ms` string
 */
export const getFormattedTime = (seconds:Seconds):string => {
  return seconds ? `${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}` : '';
};

/**
 * gets seconds from a stirng formatted as `mm:ss.ms`
 */
export const getSeconds = (str:TimeString):Seconds => {
  if (!str) { return undefined; }
  const hhTimeString = str.match(/(\d\d:)+\d\d(\.\d+)?/) || [];
  const msssmmhh = hhTimeString[0]?.split(':').reverse();
  return !msssmmhh ? undefined : parseFloat(msssmmhh[0] || '0') + parseFloat(msssmmhh[1] || '0') * 60 + parseFloat(msssmmhh[2] || '0') * 60;
};


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-cue')
export class RhAudioPlayerCue extends LitElement {
  static readonly styles = [styles];

  @queryAssignedElements({ slot: 'start' }) private _start!: HTMLElement[];
  @queryAssignedElements({ slot: 'start' }) private _end!: HTMLElement[];
  @queryAssignedElements({ slot: 'voice' }) private _voice!: HTMLElement[];
  @queryAssignedElements({ slot: 'text' }) private _text!: HTMLElement[];

  @property({ type: String, attribute: 'id', reflect: true }) id!:string;
  @property({ type: String, attribute: 'start-time' }) startTime!:number;
  @property({ type: String, attribute: 'end-time' }) endTime!:number;
  @property({ type: String, attribute: 'text' }) text!:string;
  @property({ type: String, attribute: 'voice' }) voice!:string;
  @property({ type: Boolean, attribute: 'active' }) active = false;

  #headingLevelController = new HeadingController(this);

  render() {
    return !this._text || !!this._voice ? html`
      ${this.#headingTemplate(html`
        <slot name="start" @slotchange=${this.#handleStartchange} >${getFormattedTime(this.startTime)}</slot> - 
        <slot name="end"  @slotchange=${this.#handleEndchange} hidden>${getFormattedTime(this.endTime)}</slot>
        <slot name="voice" @slotchange=${this.#handleVoicechange}></slot>
      `)}
      <slot name="text" @slotchange=${this.#handleTextchange} ></slot>` : html`
        ${this.#linkTemplate(html`<slot name="text" @slotchange=${this.#handleTextchange} ></slot>`)}
        <slot name="start" @slotchange=${this.#handleStartchange} hidden>${getFormattedTime(this.startTime)}</slot>
        <slot name="voice" @slotchange=${this.#handleVoicechange} hidden></slot>
        <slot name="end" @slotchange=${this.#handleEndchange} hidden>${getFormattedTime(this.endTime)}</slot>
    `;
  }

  #handleTextchange() {
    const [text,] = this._text;
    if (!this.text && !!text?.innerHTML) { this.text = text?.innerHTML; }
  }

  #handleVoicechange() {
    const [voice,] = this._voice;
    if (!this.voice && !!voice?.innerHTML) { this.voice = voice?.innerHTML; }
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

  #headingTemplate(text = html``) {
    const link = this.#linkTemplate(text);
    return this.#headingLevelController.headingTemplate(link, { classes: { 'cue-heading': true } });
  }

  #linkTemplate(text = html``) {
    return html`
      <a id="${this.id ?? nothing}" 
        href="#${this.id ?? nothing}" 
        @click=${this.#onClick}>${text}</a>`;
  }

  get downloadText() {
    const [voice,] = this._voice;
    const [text,] = this._text;
    const voiceContent = voice?.textContent ? ` ${voice.textContent}: ` : '';
    const textContent = text?.textContent || '';
    return `
      ${getFormattedTime(this.startTime)} - ${getFormattedTime(this.endTime)}${voiceContent}${textContent}
    `;
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
