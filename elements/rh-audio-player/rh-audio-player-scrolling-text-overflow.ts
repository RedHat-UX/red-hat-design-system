import type { ColorTheme } from '../../lib/context/color/consumer.js';

import { LitElement, html } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './rh-audio-player-scrolling-text-overflow.css';


/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 * @cssprop --rh-audio-player-scrolling-text-overflow-background-color - color of the fade effect (shoudl match background) - {@default var(--rh-color-surface-lightest, #ffffff)}
 */
@customElement('rh-audio-player-scrolling-text-overflow')
export class RhAudioPlayerScrollingTextOverflow extends LitElement {
  static readonly styles = [styles];

  @property() on?:ColorTheme;

  /** whether menu is light or dark  */
  @state() private _scrolling = false;

  @query('#inner') private _inner?:HTMLElement;

  #style = getComputedStyle(this);

  get #isScrollable() {
    return (this._inner?.scrollWidth || 0) > (this._inner?.clientWidth || 0);
  }

  firstUpdated() {
    const letters = this.textContent?.length || 0;
    const ms = Math.round(letters * 400);
    this.style.setProperty('--_animation-ms', `${ms / 1000}s`);
    this.requestUpdate();
  }

  render() {
    const { on = '' } = this;
    const { direction } = this.#style;
    return html`
      <div id="outer"
        class="${classMap({ [on]: !!on, [direction || 'auto']: true })}"
        @mouseover=${this.startScrolling}
        @mouseout=${this.stopScrolling}
        @focus=${this.startScrolling}
        @blur=${this.stopScrolling}>
        <div id="inner">
          <slot class="${this._scrolling ? 'scrolling' : ''} ${this.#isScrollable ? 'scrollable' : ''}"></slot>
          ${this.#isScrollable ? html`<span id="fade"></span>` : ''}
        </div>
      </div>`;
  }

  stopScrolling() {
    this._scrolling = false;
  }

  startScrolling() {
    if (!this.#isScrollable) { return; }
    this._scrolling = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
  }
}
