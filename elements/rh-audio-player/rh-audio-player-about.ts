import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-about.css';


/**
 * Audio Player About Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot profile - profile for attribution
 */
@customElement('rh-audio-player-about')
export class RhAudioPlayerAbout extends LitElement {
  static readonly styles = [styles];

  @property({ type: String, attribute: 'label' }) label = 'About the Episode';
  @property({ type: String, attribute: 'series' }) mediaseries!:string;
  @property({ type: String, attribute: 'mediatitle' }) mediatitle!:string;
  @query('.media-info') mediaInfo?:HTMLElement;
  @query('#mediaseries') _seriesScroller?: RhAudioPlayerScrollingTextOverflow;
  @query('#mediatitle') _mediatitleScroller?: RhAudioPlayerScrollingTextOverflow;
  @query('#title') _titleScroller?: RhAudioPlayerScrollingTextOverflow;
  @property({ reflect: true, type: String }) on = 'light' || 'dark' || 'color';

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <div class="panel-toolbar">
        <rh-audio-player-scrolling-text-overflow on="${this.on}" id="title">
          <slot name="heading">${this.label}</slot>
        </rh-audio-player-scrolling-text-overflow>
        ${this.#headingContent()}
      </div>
      <slot part="body"></slot>
      <slot part="profile" name="profile"></slot>`;
  }

  #headingContent() {
    const heading = this.#headingLevelController.headingTemplate(html`${this.mediatitle}`);

    return !this.mediatitle ? ``
      : !this.mediaseries ? heading
      : html`
        <hgroup class="media-info">
          ${!this.mediaseries ? '' : html`
            <rh-audio-player-scrolling-text-overflow id="mediaseries" on="${this.on}" >
              ${this.mediaseries}
            </rh-audio-player-scrolling-text-overflow>
          `}
          <rh-audio-player-scrolling-text-overflow id="mediatitle" on="${this.on}">
            ${heading}
          </rh-audio-player-scrolling-text-overflow>
        </hgroup>
      `;
  }

  scrollText() {
    [this._titleScroller, this._seriesScroller, this._mediatitleScroller].forEach(scroller=>scroller?.startScrolling());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
