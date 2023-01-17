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

  @queryAssignedElements({ slot: 'start' }) private _start!: HTMLElement;
  @queryAssignedElements({ slot: 'start' }) private _end!: HTMLElement;
  @queryAssignedElements({ slot: 'voice' }) private _voice!: HTMLElement;
  @queryAssignedElements({ slot: 'text' }) private _text!: HTMLElement;

  @property({ type: String, attribute: 'id', reflect: true }) id!:string;
  @property({ type: String, attribute: 'start-time' }) startTime!:number;
  @property({ type: String, attribute: 'end-time' }) endTime!:number;
  @property({ type: Boolean, attribute: 'active' }) active = false;

  #headingLevelController = new HeadingController(this);

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('_start') && !this.startTime) {
      const seconds = getSeconds(this._start.innerHTML);
      this.startTime === seconds;
    }
    if (changedProperties.has('_end') && !this.endTime) {
      const seconds = getSeconds(this._end.innerHTML);
      this.endTime === seconds;
    }
  }

  render() {
    return !this._text || !!this._voice ? html`
      ${this.#headingTemplate(html`
        <slot name="start">${getFormattedTime(this.startTime)}</slot> - 
        <slot name="voice" hidden></slot>
        <slot name="end" hidden>${getFormattedTime(this.endTime)}</slot>
      `)}
      <slot name="text"></slot>` : html`
        ${this.#linkTemplate(html`<slot name="text"></slot>`)}
        <slot name="start" hidden>${getFormattedTime(this.startTime)}</slot>
        <slot name="voice" hidden></slot>
        <slot name="end" hidden>${getFormattedTime(this.endTime)}</slot>
    `;
  }

  #headingTemplate(text = html``) {
    const link = this.#linkTemplate(text);
    return this.#headingLevelController.headingTemplate(link, { id: this.id });
  }

  #linkTemplate(text = html``) {
    return html`
      <a id="${this.id ?? nothing}" 
        href="#${this.id ?? nothing}" 
        @click=${this.#onClick}>${text}</a>`;
  }

  #onClick() {
    this.dispatchEvent(new Event('cue-seek', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-cue': RhAudioPlayerCue;
  }
}
