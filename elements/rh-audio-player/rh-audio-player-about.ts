import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { HeadingController } from '../../lib/HeadingController.js';

import './rh-audio-player-scrolling-text-overflow.js';
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
  @property() label?: string;

  /** Series this track belongs to, if applicable */
  @property({ attribute: 'series' }) mediaseries?: string;

  /** Title of the audio track */
  @property({ attribute: 'mediatitle' }) mediatitle?: string;

  @property() private _label!: string;

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
      <div part="body" ?hidden="${!hasContent}" tabindex=0><slot></slot></div>
      <slot part="profile" name="profile"></slot>`;
  }

  set menuLabel(label: string) {
    this._label = label;
  }

  get menuLabel(): string {
    return this.label || this._label || 'About the episode';
  }

  scrollText() {
    const scrollers = this.shadowRoot?.querySelectorAll('rh-audio-player-scrolling-text-overflow');
    for (const scroller of scrollers ?? []) {
      scroller?.startScrolling();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
