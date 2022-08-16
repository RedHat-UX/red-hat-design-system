/* eslint-disable no-console */
import type { ColorTheme } from '@patternfly/pfe-core';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-stat.css';

/**
 * A statistic showcases a data point or quick fact in a way that visually stands out.
 * It consists of a number/percentage and body text in its simplest form.
 * It can also include an icon, title, and a call to action.
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 *
 */
@customElement('rh-stat')
export class RhStat extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  @property({ reflect: true, type: String }) icon?: string;

  @property({ reflect: true, type: String }) top: 'default'|'statistic' = 'default';

  @property({ reflect: true, type: String }) size: 'default'|'large' = 'default';

  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  #screenSize = new ScreenSizeController(this);

  #slots = new SlotController(this, null, 'icon', 'title', 'statistic', 'cta');

  #mo = new MutationObserver(() => this.#onMutation());

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.#updateIcons();
    this.#mo.observe(this, { childList: true });
    this.#onMutation();
  }

  render() {
    const hasIcon = this.#slots.hasSlotted('icon') || !!this.icon;
    const hasTitle = this.#slots.hasSlotted('title');
    const hasStatistic = this.#slots.hasSlotted('statistic');
    const hasCta = this.#slots.hasSlotted('cta');
    const isMobile = !this.#screenSize.matches.has('tabletPortrait');
    return html`
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta })}">
        <slot name="icon" @slotchange="${this.#updateIcons}">${!this.icon ? '' : html`
          <pfe-icon size=${this.size === 'default' ? 'md' : 'lg'} icon=${this.icon}></pfe-icon>`}
        </slot>
        <slot name="title"></slot>
        <slot name="statistic"></slot>
        <slot></slot>
        <slot name="cta"></slot>
      </div>
    `;
  }

  #updateIcons(): void {
    this.querySelector('pfe-icon[slot="icon"]')
      ?.setAttribute?.('size', this.size === 'default' ? 'md' : 'lg');
  }

  #onMutation() {
    if (!this.#slots.hasSlotted('stat')) {
      this.#logger.warn('Must contain stat content');
    }
    if (!this.querySelectorAll(':not([slot])').length) {
      this.#logger.warn('Must contain description content');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-stat': RhStat;
  }
}
