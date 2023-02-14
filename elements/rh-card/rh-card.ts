import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseCard } from '@patternfly/elements/pf-card/BaseCard.js';
import { html } from 'lit';
import { LitElement, ReactiveElement } from 'lit';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-card.css';
/**
 * Card
 * @slot - Place element content here
 */
@customElement('rh-card')
export class RhCard extends BaseCard {
  static readonly version = '{{version}}';

  static styles = [...BaseCard.styles, styles];

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

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

  @property({ reflect: true }) alt?: boolean;

  @property({ reflect: true }) bar?: boolean;

  @property({ reflect: true }) alignment: 'start' | 'center' | 'end' = 'start';

  override render() {
    const { alignment = 'start', on = '' } = this;
    return html`
     <div id="container" class="${classMap({ [alignment]: !!alignment, [on]: !!on })}">
      ${super.render()}
     </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
