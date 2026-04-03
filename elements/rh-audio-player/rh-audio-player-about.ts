import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import './rh-audio-player-scrolling-text-overflow.js';
import '@rhds/elements/rh-avatar/rh-avatar.js';

import panelStyles from './rh-audio-player-panel.css' with { type: 'css' };
import styles from './rh-audio-player-about.css' with { type: 'css' };

import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';

/**
 * Provides episode details and speaker attribution for `rh-audio-player`.
 * Use when you need show notes or speaker profiles. Must be placed in
 * the `about` slot. Authors should provide a heading and may include up
 * to two `rh-avatar` elements for attribution. Rendered inside an
 * ARIA dialog panel so screen readers can navigate its content.
 *
 * @summary Displays episode description and speaker attribution
 *
 * @csspart heading - The panel heading container with scrolling overflow.
 * @csspart body - The scrollable description content area.
 * @csspart profile - The speaker profile / avatar area.
 */
@customElement('rh-audio-player-about')
export class RhAudioPlayerAbout extends LitElement {
  static readonly styles = [panelStyles, styles];

  /** Default label content */
  @property() label?: string;

  /** Series this track belongs to, if applicable */
  @property({ attribute: 'series' }) mediaseries?: string;

  /** Title of audio track */
  @property({ attribute: 'mediatitle' }) mediatitle?: string;

  @queryAssignedElements() private content?: HTMLElement[];

  #headings = new HeadingLevelContextConsumer(this);

  #label?: string;

  override render() {
    const { label, mediaseries, mediatitle } = this;
    const hasContent = isServer || ((this.content?.length ?? 0) >= 1);
    const heading = this.#headings.wrap(mediatitle ?? '');

    return html`
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        <!-- summary: Panel heading
             description: |
               Accepts a heading block element like \`<h3>\` for the panel
               title. Should use an appropriate heading level for the page
               so screen readers can navigate the panel hierarchy. -->
        <slot name="heading">${label}</slot>
      </rh-audio-player-scrolling-text-overflow>${!mediatitle ? `` : !mediaseries ? heading : html`
      <hgroup class="media-info" part="heading">${!mediaseries ? '' : html`
        <rh-audio-player-scrolling-text-overflow id="mediaseries">
          ${mediaseries}
        </rh-audio-player-scrolling-text-overflow>`}
        <rh-audio-player-scrolling-text-overflow id="mediatitle">
          ${heading}
        </rh-audio-player-scrolling-text-overflow>
      </hgroup>`}
      <div part="body" ?hidden="${!hasContent}" tabindex=0>
        <!-- summary: Episode description
             description: |
               Accepts block elements like \`<p>\` for episode show notes
               or description text. Content is focusable and scrollable
               so keyboard and screen reader users can read it. -->
        <slot></slot>
      </div>
      <!--
        slot:
          summary: Speaker attribution
          description: |
            Accepts up to two \`<rh-avatar>\` block elements for speaker
            attribution. Additional elements beyond two are hidden.
        part:
          description: |
            panel profile / avatar
      -->
      <slot part="profile" name="profile"></slot>`;
  }

  set menuLabel(label: string) {
    this.#label = label;
    this.requestUpdate();
  }

  get menuLabel(): string {
    return this.label || this.#label || 'About the episode';
  }

  /** Triggers the scrolling text animation on all panel headings that overflow their container. */
  scrollText() {
    const scrollers = this.shadowRoot?.querySelectorAll('rh-audio-player-scrolling-text-overflow');
    for (const scroller of scrollers ?? []) {
      scroller?.startScrolling();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-about': RhAudioPlayerAbout;
  }
}
