import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';

import styles from './rh-audio-player-scrolling-text-overflow.css';

/**
 * Audio Player Scrolling Text Overflow
 * @slot - inline text to scroll if wider than host
 * @cssprop --rh-audio-player-scrolling-text-overflow-background-color - color of fade effect (shoudl match background) - {@default var(--rh-color-surface-lightest, #ffffff)}
 */
@customElement('rh-audio-player-scrolling-text-overflow')
export class RhAudioPlayerScrollingTextOverflow extends LitElement {
  static readonly styles = [styles];

  @colorContextConsumer() private on?: ColorPalette;

  #scrolling = false;

  #style = getComputedStyle(this);

  get #isScrollable() {
    const outer = this.shadowRoot?.getElementById('outer');
    return (outer?.scrollWidth ?? 0) > (outer?.clientWidth ?? 0);
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
          <slot class="${this.#scrolling ? 'scrolling' : ''} ${this.#isScrollable ? 'scrollable' : ''}"></slot>
        </div>
        ${this.#isScrollable ? html`<span id="fade"></span>` : ''}
      </div>`;
  }

  stopScrolling() {
    this.#scrolling = false;
    this.requestUpdate();
  }

  startScrolling() {
    if (this.#isScrollable) {
      this.#scrolling = true;
      this.requestUpdate();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
  }
}
