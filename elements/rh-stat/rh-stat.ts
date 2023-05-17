import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-stat.css';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 * @cssprop --pf-icon--size
 * @cssprop --rh-color-icon-secondary-on-dark
 * @cssprop --rh-color-icon-secondary-on-light
 * @cssprop --rh-color-text-brand-on-light
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-font-family-heading
 * @cssprop --rh-font-family-text
 * @cssprop --rh-font-size-body-text-lg
 * @cssprop --rh-font-size-body-text-xl
 * @cssprop --rh-font-size-heading-2xl
 * @cssprop --rh-font-size-heading-lg
 * @cssprop --rh-font-weight-regular
 * @cssprop --rh-size-icon-04
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-sm
 *
 */
@customElement('rh-stat')
export class RhStat extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @colorContextConsumer() private on?: ColorTheme;

  @property({ reflect: true, type: String }) icon?: string;

  @property({ reflect: true, type: String }) top: 'default' | 'statistic' = 'default';

  @property({ reflect: true, type: String }) size: 'default' | 'large' = 'default';

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
    const isMobile = !this.#screenSize.matches.has('sm');
    const { on = '' } = this;
    return html`
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta, [on]: !!on })}">
        <span id="icon">
          <slot name="icon" @slotchange="${this.#updateIcons}">${!this.icon ? '' : /* TODO: replace with rh-icon */html`
            <pf-icon size=${this.size === 'default' ? 'md' : 'lg'}
                     icon=${this.icon}
                     set="${ifDefined(this.getAttribute('icon-set') ?? undefined)}"></pf-icon>`}
          </slot>
        </span>
        <span id="title"><slot name="title"></slot></span>
        <span id="statistic"><slot name="statistic"></slot></span>
        <span id="content"><slot></slot></span>
        <span id="cta"><slot name="cta"></slot></span>
      </div>
    `;
  }

  #updateIcons(): void {
    this.querySelector('pf-icon[slot="icon"]')
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
