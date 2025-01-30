import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { HeadingLevelContextConsumer, wrap } from '../../lib/context/headings/consumer.js';

import './rh-audio-player-scrolling-text-overflow.js';

import panelStyles from './rh-audio-player-panel.css';
import styles from './rh-audio-player-subscribe.css';


/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 * @csspart heading - scrolling text overflow
 * @csspart body - body content slot
 * @csspart links - subscribe links
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [panelStyles, styles];

  @property() heading?: string;

  @property() label?: string;

  @queryAssignedElements({ slot: '' }) private body?: HTMLElement[];

  #headings = new HeadingLevelContextConsumer(this);

  #label?: string;

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${wrap.call(this.#headings, this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <slot part="body" ?hidden="${(this.body?.length ?? 0) < 1}"></slot>
      <slot name="link" part="links"></slot>`;
  }

  set menuLabel(label: string) {
    this.#label = label;
    this.requestUpdate();
  }

  get menuLabel(): string {
    return this.label || this.#label || 'Subscribe';
  }

  scrollText() {
    this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
  }
}
