import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-panel.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-panel')
export class RhAudioPlayerPanel extends LitElement {
  static readonly styles = [styles];

  @queryAssignedElements({ slot: 'heading' }) private _heading!: HTMLElement;
  @property({ type: String, attribute: 'hidden', reflect: true }) hidden!:boolean;
  @property({ type: String, attribute: 'heading' }) heading!:string;
  @property({ type: String, attribute: 'series' }) series!:string;
  @property({ type: String, attribute: 'description' }) description!:string;

  #headingLevelController = new HeadingController(this);

  get #defaultHeading() {
    return this.slot === 'about' ? 'About the Episode' : 'Subscribe';
  }

  get #title() {
    return this.slot !== 'about' || !this.title ? undefined : html`<div class="panel-series">${this.series}</div><div class="panel-title">${this.title}</div>`;
  }

  get panelLabel() {
    return this._heading ? this._heading.textContent : this.heading ? this.heading : this.#defaultHeading;
  }

  render() {
    const slot = this.slot as string;
    return html`
      <div class="panel-toolbar">
        ${this.#title ? this.#headingLevelController.headingTemplate(this.#title, { id: slot }) : ''}
        <slot name="heading" ?hidden=${!!this.title}>
          ${this.#headingLevelController.headingTemplate(
    this.heading || this.#defaultHeading,
            {
              id: slot,
              classes: { 'panel-title': true }
            }
  )}
        </slot>
      </div>
      <slot></slot>
      <slot name="detail"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-panel': RhAudioPlayerPanel;
  }
}
