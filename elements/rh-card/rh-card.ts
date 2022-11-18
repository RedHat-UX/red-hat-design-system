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
   * Optional background image applied to the entire card container.
   * Alignment of this image can be managed using the `--pfe-card--BackgroundPosition`
   * variable which is set to `center center` by default.
   */
   @observed
   @property({ attribute: 'img-src', reflect: true }) imgSrc?: string;

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

   /** Optionally adjusts the padding on the container. Accepts: `small`. */
   @property({ reflect: true }) size?: 'small';

   /**
    * Optionally apply a border color and weight to the entire card container.
    * The default color and weight is `#d2d2d2` and `1px`, respectively.
    */
   @property({ type: Boolean, reflect: true }) border = false;

   /** Update the background image */
   protected _imgSrcChanged(_oldValue: unknown, newValue: unknown) {
     if (typeof this.imgSrc === 'string') {
       // Set the image as the background image
       this.styles.backgroundImage = newValue ? `url('${newValue}')` : ``;
     }
   }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
