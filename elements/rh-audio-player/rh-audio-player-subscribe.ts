import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { HeadingController } from '../../lib/HeadingController.js';

import './rh-audio-player-scrolling-text-overflow.js';

import panelStyles from './rh-audio-player-panel-styles.css';
import styles from './rh-audio-player-subscribe.css';


/**
 * Audio Player Subscribe Panel
 * @slot heading - custom heading for panel
 * @slot - panel content
 * @slot link - link to subscribe to podcast
 * @cssprop --rh-space-lg - large space - {@default 16px}
 * @cssprop --rh-font-family-heading - heading font family - {@default RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif}
 * @cssprop --rh-font-size-heading-xs - extra small font-size for heading - {@default 1.25rem}
 * @cssprop --rh-font-weight-heading-medium - medium font-wieght for heading - {@default 500}
 * @cssprop --rh-line-height-medium - medium line height - {@default 1.3}
 */
@customElement('rh-audio-player-subscribe')
export class RhAudioPlayerSubscribe extends LitElement {
  static readonly styles = [panelStyles, styles];

  @property() heading?: string;

  @property() label?: string;

  @property() private _label!: string;

  @queryAssignedElements({ slot: '' }) private _body?: HTMLElement[];

  #headingLevelController = new HeadingController(this);

  override render() {
    return html`
      <rh-audio-player-scrolling-text-overflow part="heading">
        <slot name="heading">${this.#headingLevelController.headingTemplate(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      <slot part="body" ?hidden="${(this._body?.length ?? 0) < 1}"></slot>
      <slot name="link" part="links"></slot>`;
  }

  set menuLabel(label: string) {
    this._label = label;
  }

  get menuLabel(): string {
    return this.label || this._label || 'Subscribe';
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
