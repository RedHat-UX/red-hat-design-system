import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import './rh-audio-player-scrolling-text-overflow.js';

import panelStyles from './rh-audio-player-panel.css' with { type: 'css' };
import styles from './rh-audio-player-subscribe.css' with { type: 'css' };


/**
 * An expandable panel that provides subscription links for podcast platforms.
 * Use this when you need to allow users to subscribe from within the audio
 * player. Must be placed in the `subscribe` slot of `rh-audio-player`.
 * Authors should provide anchor elements in the `link` slot with alt text
 * so screen readers can identify each platform.
 *
 * @summary Displays podcast subscription links in an expandable panel
 *
 * @csspart heading - The panel heading with scrolling text overflow.
 * @csspart body - The default content area.
 * @csspart links - The container for subscription link elements.
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [panelStyles, styles];

  /** Custom heading text displayed at the top of the subscribe panel. Overridden by the `heading` slot. */
  @property() heading?: string;

  /** Accessible label for the panel, used as the menu item text when no heading slot is provided. */
  @property() label?: string;

  #headings = new HeadingLevelContextConsumer(this);

  #slots = new SlotController(this, 'heading', null, 'link');

  #label?: string;

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <!-- summary: Custom panel heading
             description: |
               Accepts a heading element for the subscribe panel title.
               Should use an appropriate heading level for the page so
               screen readers can navigate the panel hierarchy. -->
        <slot name="heading">${this.#headings.wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <!-- summary: Subscribe panel body content
           description: |
             Accepts descriptive text or rich content for the subscribe
             panel. Content is accessible to screen readers when the
             panel is expanded. -->
      <slot part="body" ?hidden="${this.#slots.isEmpty(null)}"></slot>
      <!--
        slot:
          summary: Subscription platform link
          description: |
            Accepts anchor elements linking to podcast platforms. Each
            link should include descriptive text or an image with alt
            text so screen readers can identify the platform.
        part:
          summary: subscribe links
      -->
      <slot name="link" part="links"></slot>`;
  }

  set menuLabel(label: string) {
    this.#label = label;
    this.requestUpdate();
  }

  get menuLabel(): string {
    return this.label || this.#label || 'Subscribe';
  }

  /** Triggers the scrolling text animation on the panel heading if it overflows its container. */
  scrollText() {
    this.shadowRoot?.querySelector('rh-audio-player-scrolling-text-overflow')?.startScrolling();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-subscribe': RhAudioPlayerSubscribe;
  }
}
