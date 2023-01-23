import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import baseStyles from './RhAudioPlayerPanelStyles.css';
import titleStyles from './RhAudioPlayerTitleStyles.css';
import styles from './rh-audio-player-about.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-about')
export class RhAudioPlayerAbout extends LitElement {
  static readonly styles = [baseStyles, titleStyles, styles];

  @property({ type: String, attribute: 'label' }) label = 'About the Episode';
  @property({ type: String, attribute: 'series' }) mediaseries!:string;
  @property({ type: String, attribute: 'mediatitle' }) mediatitle!:string;
  @query('.media-info') mediaInfo?:HTMLElement;

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <div class="panel-toolbar">
        <slot name="heading">${this.label}</slot>
        ${this.#headingContent()}
      </div>
      <slot></slot>
      <slot name="profile"></slot>`;
  }

  #headingContent() {
    const heading = this.#headingLevelController.headingTemplate(
      html`${this.mediatitle}`,
      { id: 'mediatitle', classes: { 'media-info': true }
      });

    return !this.mediatitle ? ``
      : !this.mediaseries ? heading
      : html`
        <hgroup class="media-info">
          ${!this.mediaseries ? '' : html`<p id="mediaseries">${this.mediaseries}</p>`}
          ${heading}
        </hgroup>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
