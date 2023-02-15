import { LitElement, html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
import './rh-audio-player-profile.js';
import panelStyles from './rh-audio-player-panel-styles.css';
import styles from './rh-audio-player-about.css';


/**
 * Audio Player About Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot profile - profile for attribution
 */
@customElement('rh-audio-player-about')
export class RhAudioPlayerAbout extends LitElement {
  static readonly styles = [panelStyles, styles];

  @property({ type: String }) label = 'About the Episode';
  @property({ type: String, attribute: 'series' }) mediaseries?:string;
  @property({ type: String, attribute: 'mediatitle' }) mediatitle?:string;
  @query('.media-info') mediaInfo?:HTMLElement;
  @query('#mediaseries') private _seriesScroller?: RhAudioPlayerScrollingTextOverflow;
  @query('#mediatitle') private _mediatitleScroller?: RhAudioPlayerScrollingTextOverflow;
  @query('#title') private _titleScroller?: RhAudioPlayerScrollingTextOverflow;
  @queryAssignedElements() private _body!: HTMLElement[];

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        <slot name="heading">${this.label}</slot>
      </rh-audio-player-scrolling-text-overflow>
      ${this.#headingContent()}
      <div part="body" ?hidden="${this._body.length < 1}"><slot></slot></div>
      <slot part="profile" name="profile"></slot>`;
  }

  #headingContent() {
    const heading = this.#headingLevelController.headingTemplate(html`${this.mediatitle}`, { level: this.#headingLevelController.headingLevel - 1 });

    return !this.mediatitle ? ``
      : !this.mediaseries ? heading
      : html`
        <hgroup class="media-info" part="heading">
          ${!this.mediaseries ? '' : html`
            <rh-audio-player-scrolling-text-overflow id="mediaseries">
              ${this.mediaseries}
            </rh-audio-player-scrolling-text-overflow>
          `}
          <rh-audio-player-scrolling-text-overflow id="mediatitle">
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
