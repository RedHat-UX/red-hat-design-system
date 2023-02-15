import { LitElement, html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { HeadingController } from '../../lib/HeadingController.js';
import { RhAudioPlayerScrollingTextOverflow } from './rh-audio-player-scrolling-text-overflow.js';
import panelStyles from './rh-audio-player-panel-styles.css';
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

  @property() heading?:string;
  @property() label = 'Subscribe';
  @query('rh-audio-player-scrolling-text-overflow') private _titleScroller?: RhAudioPlayerScrollingTextOverflow;
  @queryAssignedElements({ slot: '' }) private _body!: HTMLElement[];

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.label)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <slot part="body" ?hidden="${this._body.length < 1}"></slot>
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
