import { LitElement, html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';


import styles from './rh-audio-player-scrolling-text-overflow.css';


/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 */
@customElement('rh-audio-player-scrolling-text-overflow')
export class RhAudioPlayerScrollingTextOverflow extends LitElement {
  static readonly styles = [styles];

  @state() _scrolling = false;
  @state() _reset = false;
  @state() _stopping = false;
  @state() _animationMs = 60;
  @query('slot') _slot?:HTMLSlotElement;
  @query('#outer') _outer?:HTMLElement;
  @query('#inner') _inner?:HTMLElement;

  firstUpdated() {
    this._animationMs = this.#animationMs;
  }

  render() {
    return html`
        <div id="outer" 
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
    this._stopping = false;
  }

  startScrolling() {
    if (!this.#isScrollable) { return; }
    this._scrolling = true;
  }

  get #isScrollable() {
    return (this._inner?.scrollWidth || 0) > (this._inner?.clientWidth || 0);
  }

  get #animationMs():number {
    const letters = this.textContent?.length || 0;
    const ms = Math.round(letters * 400);
    this.style.setProperty('--_animation-ms', `${ms / 1000}s`);
    return ms;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
  }
}
