import type { TemplateResult } from 'lit';
import type { ColorPalette, ColorTheme } from '../../lib/context/color.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseCard } from '@patternfly/pfe-card/BaseCard.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { LitElement, ReactiveElement } from 'lit';


import styles from './rh-card.css';
import { colorContextProvider, colorContextConsumer } from '../../lib/context/color.js';
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
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer()
  @property({ reflect: true }) on?: ColorTheme;

  @property({ reflect: true }) alt?: boolean;

  @property({ reflect: true }) bar?: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
