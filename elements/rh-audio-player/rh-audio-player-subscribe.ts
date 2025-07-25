import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import './rh-audio-player-scrolling-text-overflow.js';

import panelStyles from './rh-audio-player-panel.css';
import styles from './rh-audio-player-subscribe.css';


/**
 * Audio Player Subscribe Panel
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [panelStyles, styles];

  @property() heading?: string;

  @property() label?: string;

  #headings = new HeadingLevelContextConsumer(this);

  #slots = new SlotController(this, 'heading', null, 'link');

  #label?: string;

  override render() {
    return html`
      <!-- scrolling text overflow -->
      <rh-audio-player-scrolling-text-overflow part="heading">
        <!-- custom heading for panel -->
        <slot name="heading">${this.#headings.wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <!-- panel content -->
      <slot part="body" ?hidden="${this.#slots.isEmpty(null)}"></slot>
      <!-- slot:
             summary: link to subscribe to podcast
           part:
             summary: subscribe links -->
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
