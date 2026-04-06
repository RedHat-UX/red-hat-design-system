import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-audio-player-scrolling-text-overflow.css' with { type: 'css' };

/**
 * Provides a scrolling text animation for `rh-audio-player` when content
 * overflows. Reveals full text on hover or focus with a trailing fade
 * effect. Animation duration scales with character count. Keyboard and
 * screen reader users can trigger scrolling via focus. Should not be
 * placed independently in user markup.
 *
 * @summary Scrolls overflowing text on hover or focus
 *
 */
@customElement('rh-audio-player-scrolling-text-overflow')
@themable
export class RhAudioPlayerScrollingTextOverflow extends LitElement {
  static readonly styles = [styles];

  #scrolling = false;

  #style?: CSSStyleDeclaration;

  get #isScrollable() {
    const outer = this.shadowRoot?.getElementById?.('outer');
    return (outer?.scrollWidth ?? 0) > (outer?.clientWidth ?? 0);
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.#style = getComputedStyle(this);
    }
  }

  firstUpdated() {
    const letters = this.textContent?.length || 0;
    const ms = Math.round(letters * 400);
    this.style.setProperty('--_animation-ms', `${ms / 1000}s`);
    this.requestUpdate();
  }

  render() {
    const direction = this.#style?.direction ?? 'auto';
    const scrolling = this.#scrolling;
    const scrollable = this.#isScrollable;
    return html`
      <div id="outer"
           class="${classMap({ [direction]: true })}"
           @mouseover=${this.startScrolling}
           @mouseout=${this.stopScrolling}
           @focus=${this.startScrolling}
           @blur=${this.stopScrolling}>
        <div id="inner">
          <!-- summary: Overflowing inline text
               description: |
                 Accepts inline text content such as a heading or title.
                 Screen readers announce the full text regardless of
                 whether the scroll animation is active. -->
          <slot class="${classMap({ scrolling, scrollable })}"></slot>
        </div>${!scrollable ? '' : html`
        <span id="fade"></span>`}
      </div>`;
  }

  /** Stops the scrolling text animation and resets to the initial position. */
  stopScrolling() {
    this.#scrolling = false;
    this.requestUpdate();
  }

  /** Starts the scrolling text animation if the content overflows the container. */
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
