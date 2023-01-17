import { LitElement, html, nothing } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { getFormattedTime, getSeconds } from './rh-audio-time.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-cue.css';

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

  updated(changedProperties: Map<string, any>) {
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
