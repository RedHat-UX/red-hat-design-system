import type { ColorTheme } from '../../lib/context/color.js';

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { colorContextConsumer } from '../../lib/context/color.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import styles from './rh-stat.css';
import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
import { MatchMediaController } from '../../lib/MatchMediaController.js';

/**
 * Stat
 * @slot - Place element content here
 */
@customElement('rh-stat')
export class RhStat extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  @property({ reflect: true, type: String }) icon;

  @property({ reflect: true, type: String }) top: 'default'|'statistic';

  @property({ reflect: true, type: String }) size: 'default'|'large';

  protected matchMedia = new MatchMediaController(this, `(max-width: ${tabletLandscapeBreakpoint})`, {
    onChange: ({ matches }) =>
      this.isMobile = matches,
  });

  @property({ type: Boolean, reflect: true, attribute: 'is-mobile' }) isMobile = false;

  private slots = new SlotController(this, {
    slots: ['icon'],
  });

  constructor() {
    super();
    this.icon = '';
    this.top = 'default';
    this.size = 'default';
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateIcons();
  }

  render() {
    const hasSlottedIcon = this.slots.hasSlotted('icon');
    return html`
          <slot class="${classMap({ hasIcon: hasSlottedIcon || this.icon.length > 0 })}" name="icon">
            ${this.icon.length > 0 ?
              html`
                <pfe-icon size=${this.size === 'default' ? 'md' : 'lg'} icon=${this.icon}></pfe-icon>
              ` : html``}
            </slot>
          <slot name="title"></slot>
          <slot name="statistic">Statistic Placeholder</slot>
          <slot name="description">Description Placeholder</slot>
          <slot name="cta"></slot>
    `;
  }

  public updateIcons(): void {
    if (this.querySelectorAll('pfe-icon')?.length > 0) {
      const pfeIcon = this.querySelectorAll('pfe-icon')?.[0];
      pfeIcon.setAttribute('size', this.size === 'default' ? 'md' : 'lg');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-stat': RhStat;
  }
}
