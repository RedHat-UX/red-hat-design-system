import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import baseStyles from './RhAudioPlayerPanelStyles.css';
import styles from './rh-audio-player-about.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-about')
export class RhAudioPlayerAbout extends LitElement {
  static readonly styles = [baseStyles, styles];

  @property({ type: String, attribute: 'label' }) label = 'About the Episode';
  @property({ type: String, attribute: 'series' }) mediaseries!:string;
  @property({ type: String, attribute: 'mediatitle' }) mediatitle!:string;

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <div class="panel-toolbar">
        <slot name="heading" class="panel-title">${this.label}</slot>
        ${this.#headingLevelController.headingTemplate(this.#headingContent)}
      </div>
      <slot></slot>
      <slot name="profile"></slot>`;
  }

  get #headingContent() {
    return html`
      ${!this.mediaseries ? '' : html`<div class="media-info nedia-series">${this.mediaseries}</div>`}
      ${!this.mediatitle ? '' : html`<div class="media-info panel-title">${this.mediatitle}</div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
