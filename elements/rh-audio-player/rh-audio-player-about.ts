import { LitElement, html } from 'lit';
import { customElement, property, queryAll, queryAssignedElements } from 'lit/decorators.js';

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

  /** Default label content */
  @property() label = 'About the Episode';

  /** Series this track belongs to, if applicable */
  @property({ attribute: 'series' }) mediaseries?: string;

  /** Title of the audio track */
  @property({ attribute: 'mediatitle' }) mediatitle?: string;

  @queryAll('rh-audio-player-scrolling-text-overflow')
  private scrollers?: NodeListOf<RhAudioPlayerScrollingTextOverflow>;

  @queryAssignedElements() private content?: HTMLElement[];

  #headingLevelController = new HeadingController(this);

  override render() {
    const { label, mediaseries, mediatitle } = this;
    const hasContent = (this.content?.length ?? 0) >= 1;
    const heading = this.#headingLevelController.headingTemplate(mediatitle ?? '', {
      level: this.#headingLevelController.headingLevel - 1
    });

    return html`
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        <slot name="heading">${label}</slot>
      </rh-audio-player-scrolling-text-overflow>${!mediatitle ? `` : !mediaseries ? heading : html`
      <hgroup class="media-info" part="heading">${!mediaseries ? '' : html`
        <rh-audio-player-scrolling-text-overflow id="mediaseries">
          ${mediaseries}
        </rh-audio-player-scrolling-text-overflow>`}
        <rh-audio-player-scrolling-text-overflow id="mediatitle">
          ${heading}
        </rh-audio-player-scrolling-text-overflow>
      </hgroup>`}
      <div part="body" ?hidden="${!hasContent}"><slot></slot></div>
      <slot part="profile" name="profile"></slot>`;
  }

  scrollText() {
    for (const scroller of this.scrollers ?? []) {
      scroller?.startScrolling();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
