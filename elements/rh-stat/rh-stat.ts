import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-stat.css' with { type: 'css' };

/**
 * A statistic showcases a data point or quick fact visually.
 * Elements must include a `statistic` slot and body text.
 * Icons, titles, and CTAs should be consistent when grouped.
 * Adapts color for WCAG contrast in light and dark contexts.
 * Only the CTA receives Tab focus; screen readers read DOM order.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @alias statistic
 */
@customElement('rh-stat')
@themable
export class RhStat extends LitElement {
  static readonly styles = [styles];

  /**
   * The icon name to display above the statistic.
   * When set, the component dynamically imports `rh-icon`
   * and renders it using the specified icon set.
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * The icon set from which to load the icon.
   * Only applies when the `icon` attribute is set.
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'standard';

  /**
   * Controls the visual ordering of the title and
   * statistic slots. When set to `statistic`, the data
   * value appears above the title text.
   */
  @property({ reflect: true, type: String }) top: 'default' | 'statistic' = 'default';

  /**
   * The size variant of the statistic. The `large` size
   * increases the data text font size and icon dimensions.
   */
  @property({ reflect: true, type: String }) size: 'default' | 'large' = 'default';

  /**
   * Whether the statistic renders in a mobile layout with
   * reduced font sizes. Managed internally via
   * ScreenSizeController but can be set explicitly.
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  /** Tracks viewport size to toggle mobile layout */
  #screenSize = new ScreenSizeController(this);

  /** Manages slot presence detection for conditional rendering */
  #slots = new SlotController(this, null, 'icon', 'title', 'statistic', 'cta');

  /** Observes child list changes to validate required content */
  #mo = new MutationObserver(() => this.#onMutation());

  /** Logs warnings when required slots are empty */
  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.#mo.observe(this, { childList: true });
    if (!isServer) {
      this.#onMutation();
    }
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
    const isMobile = this.isMobile || !this.#screenSize.matches.has('sm');
    const iconSize = this.size === 'default' ? 'md' : 'lg';
    return html`
      <div class="${classMap({ isMobile, hasIcon, hasTitle, hasStatistic, hasCta })}">
        <span id="icon" class="${classMap({ [iconSize]: !!iconSize })}">
          <!-- Optional decorative icon above the data value.
               Accepts an \`rh-icon\` or inline SVG. Decorative
               for screen readers; add aria-label to convey
               meaning not in text (WCAG 1.1.1). -->
          <slot name="icon">
            ${!this.icon ? '' : html`
              <rh-icon icon="${this.icon}" set="${this.iconSet}"></rh-icon>
            `}
          </slot>
        </span>
        <span id="title">
          <!-- Optional inline text title for context.
               Screen readers announce in DOM order;
               ARIA landmark not required. -->
          <slot name="title"></slot>
        </span>
        <span id="statistic">
          <!-- Required inline text data value (number or
               percentage). Screen readers read in DOM order;
               ensure value is meaningful without visual
               formatting (WCAG 1.3.1). -->
          <slot name="statistic"></slot>
        </span>
        <span id="content">
          <!-- Required block or inline body text describing
               the statistic. Gives screen reader users
               context for the data value. -->
          <slot></slot>
        </span>
        <span id="cta">
          <!-- Optional call to action (\`rh-cta\` element).
               Only focusable element; receives Tab focus
               and activates with Enter or Space. -->
          <slot name="cta"></slot>
        </span>
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
