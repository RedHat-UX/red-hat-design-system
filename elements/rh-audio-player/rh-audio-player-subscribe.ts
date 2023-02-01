import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
// import {msg} from '@lit/localize';
import panelStyles from './RhAudioPlayerPanelStyles.css';
import styles from './rh-audio-player-subscribe.css';


/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [panelStyles, styles];

  @property({ type: String, attribute: 'heading' }) heading!:string;
  @property({ type: String, attribute: 'label' }) label = 'Subscribe';
  @query('rh-audio-player-scrolling-text-overflow') _titleScroller?: RhAudioPlayerScrollingTextOverflow;

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.label)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <slot part="body"></slot>
      <slot name="link" part="links"></slot>`;
  }

  scrollText() {
    this._titleScroller?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
  }
}
