import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-card.css';
/**
 * Card
 * @slot        header
 *              If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        footer
 *              Use this slot for anything that you want to be stuck to the base of the card.
 * @cssprop     {<length>|<percentage>} --rh-border-width-lg
 *              Border radius for card
 *              {@default `3px`}
 * @cssprop     {<color>} --rh-color-border-subtle-on-dark
 *              Border color for card on dark background
 *              {@default `#707070`}
 * @cssprop     {<color>} --rh-color-border-subtle-on-light
 *              Border color for card on light background
 *              {@default `#c7c7c7`}
* @cssprop      {<color>} --rh-color-surface-dark
 *              Header background color for card on dark background
 *              {@default `#383838`}
 * @cssprop     {<color>} --rh-color-surface-darkest
 *              Content & footer background color for card on dark background
 *              {@default `#151515`}
 * @cssprop     {<color>} --rh-color-surface-light
 *              Content & header background color for card on light background
 *              {@default `#e0e0e0`}
 * @cssprop     {<color>} --rh-color-surface-lightest
 *              Alternative header color for card on lighter / lightest backgrounds
 *              {@default `#ffffff`}
 * @cssprop     {<color>} --rh-color-text-primary-on-dark
 *              Text color for card on dark background
 *              {@default `#ffffff`}
 * @cssprop     {<color>} --rh-color-text-primary-on-light
 *              Text color for card on light background
 *              {@default `#151515`}
 * @cssprop     {<color>} --rh-font-family-body-text
 *              Font family for card
 *              {@default `RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif`}
 * @cssprop     {<length>} --rh-font-size-heading-sm
 *              Font size for header on card
 *              {@default `1.5rem`}
 * @cssprop     {<number>} --rh-font-weight-body-text-medium
 *              Font weight for slotted header on card (expects h1-h6)
 *              {@default `500`}
 * @cssprop     {<number>} --rh-line-height-body-text
 *              Line height for card
 *              {@default `1.5`}
 * @cssprop     {<length>} --rh-space-lg
 *              Space for block padding in header on card
 *              {@default `16px`}
 * @cssprop     {<length>} --rh-space-xl
 *              Space for body, footer, and inline padding in header for card on resolution < 768px
 *              {@default `24px`}
 * @cssprop     {<length>} --rh-space-2xl
 *              Space for body, footer for card on resolution >= 768px
 *              {@default `32px`}
 *
 */
@customElement('rh-card')
export class RhCard extends LitElement {
  static readonly version = '{{version}}';

  static styles = [styles];

  protected slots = new SlotController(this, 'header', null, 'footer');

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


  override render() {
    const { on = '' } = this;
    return html`
     <article part="container" id="container" class="${classMap({ [on]: !!on })}">
        <header id="header"
                part="header"
                class="${classMap({ empty: !this.slots.hasSlotted('header') })}">
          <slot name="header"></slot>
        </header>
        <div id="body"
             part="body"
             class="${classMap({ empty: !this.querySelector(':not([slot])') })}">
          <slot></slot>
        </div>
        <footer id="footer"
                part="footer"
                class="${classMap({ empty: !this.slots.hasSlotted('footer') })}">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
