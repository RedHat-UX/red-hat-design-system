import type { ColorTheme } from '@patternfly/pfe-core';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pfelement, colorContextConsumer } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-stat.css';
import { tabletLandscapeBreakpoint } from '../../lib/tokens.js';
import { MatchMediaController } from '../../lib/MatchMediaController.js';

/**
 * Stat
 * @slot - Place element content here
 */
@customElement('rh-stat') @pfelement()
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
    return html`
        <slot name="icon">
          ${this.icon.length > 0 ?
            html`
              <pfe-icon size=${this.size === 'default' ? 'md' : 'lg'} icon=${this.icon}></pfe-icon>
            ` : ''}
        </slot>
        <slot name="title"></slot>
        <slot name="statistic">Statistic Placeholder</slot>
        <slot name="description">Description Placeholder</slot>
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
