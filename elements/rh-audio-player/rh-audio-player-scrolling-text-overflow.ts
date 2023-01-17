import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


import styles from './rh-audio-player-scrolling-text-overflow.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-scrolling-text-overflow')
export class RhAudioPlayerScrollingTextOverflow extends LitElement {
  static readonly styles = [styles];


  render() {
    return html`<div id="scroller"><div id="content"><slot></slot></div></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-scrolling-text-overflow': RhAudioPlayerScrollingTextOverflow;
  }
}
