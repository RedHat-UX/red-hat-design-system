import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '../../lib/context/color/consumer.js';

import styles from './rh-stat.css';

/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @summary Displays a statistic with an optional icon, title, statistic, and call to action.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 *
 */
@customElement('rh-stat')
@themable
export class RhStat extends LitElement {
  static readonly styles = [styles];

  /**
   * The icon to display in the statistic
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Icon set to display in the statistic
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'standard';

  /** Whether the title or statistic should be displayed on top in the statistic */
  @property({ reflect: true, type: String }) top: 'default' | 'statistic' = 'default';

  /** The size of the statistic */
  @property({ reflect: true, type: String }) size: 'default' | 'large' = 'default';

  /** Whether the statistic is in a mobile view or not for styling */
  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  #screenSize = new ScreenSizeController(this);

  #slots = new SlotController(this, null, 'icon', 'title', 'statistic', 'cta');

  #mo = new MutationObserver(() => this.#onMutation());

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.#mo.observe(this, { childList: true });
    this.#onMutation();
  }

  willUpdate() {
    if (this.icon) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
  }

  render() {
    const hasIcon = this.#slots.hasSlotted('icon') || !!this.icon;
    const hasTitle = this.#slots.hasSlotted('title');
    const hasStatistic = this.#slots.hasSlotted('statistic');
    const hasCta = this.#slots.hasSlotted('cta');
    const isMobile = !this.#screenSize.matches.has('sm');
    const iconSize = this.size === 'default' ? 'md' : 'lg';
    return html`
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta })}">
        <span id="icon" class="${classMap({ [iconSize]: !!iconSize })}">
          <slot name="icon">
            ${!this.icon ? '' : html`
              <rh-icon icon="${this.icon}" set="${this.iconSet}"></rh-icon>
            `}
          </slot>
        </span>
        <span id="title"><slot name="title"></slot></span>
        <span id="statistic"><slot name="statistic"></slot></span>
        <span id="content"><slot></slot></span>
        <span id="cta"><slot name="cta"></slot></span>
      </div>
    `;
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
