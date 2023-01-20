import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
// import {msg} from '@lit/localize';

import styles from './RhAudioPlayerPanelStyles.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [styles];

  @property({ type: String, attribute: 'heading' }) heading!:string;
  @property({ type: String, attribute: 'label' }) label = 'Subscribe';

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <div class="panel-toolbar">
        <div>
          <slot name="heading" class="panel-title">${this.#headingLevelController.headingTemplate(this.label)}</slot>
        </div>
      </div>
      <slot></slot>
      <slot name="link"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
  }
}
