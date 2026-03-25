import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-audio-player-scrolling-text-overflow.css' with { type: 'css' };

/**
 * A text container that detects when its content overflows the available
 * width and provides a scrolling animation on hover or focus to reveal the
 * full text. A fade effect is applied at the trailing edge when content
 * overflows. The scroll animation duration is calculated based on the
 * character count of the text content. This element is used internally by
 * `rh-audio-player` and its sub-components for titles, series names, and
 * panel headings.
 *
 * @summary Scrolls overflowing text on hover or focus
 *
 * @slot - Inline text content that scrolls when wider than the host.
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
          <!-- inline text to scroll if wider than host -->
          <slot class="${classMap({ scrolling, scrollable })}"></slot>
        </div>${!scrollable ? '' : html`
        <span id="fade"></span>`}
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
