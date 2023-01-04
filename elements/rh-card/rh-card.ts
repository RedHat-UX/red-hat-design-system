import type { ColorPalette, ColorTheme } from '@patternfly/pfe-core/controllers/color-context.js';
import { BaseCard } from '@patternfly/pfe-card/BaseCard.js';
import { customElement, property, query } from 'lit/decorators.js';
import { LitElement, ReactiveElement } from 'lit';


import styles from './rh-card.css';
import { observed, colorContextConsumer, colorContextProvider } from '@patternfly/pfe-core/decorators.js';
/**
 * Card
 * @slot - Place element content here
 */
@customElement('rh-card')
export class RhCard extends BaseCard {
  static readonly version = '{{version}}';

  static styles = [...BaseCard.styles, styles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Card always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette = 'base';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer()
  @property({ reflect: true }) on?: ColorTheme;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
