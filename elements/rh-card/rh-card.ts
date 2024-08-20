import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';

import styles from './rh-card.css';
/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 * @summary     Arranges content and interactive elements in a layout
 * @slot        header
 *              If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        image
 *              Use this slot for the promo variant of the card. Images & CTA's are most often slotted here.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        footer
 *              Use this slot for anything that you want to be stuck to the base of the card.
 * @csspart     container
 *              The container for the card. Contains the image, header, body, and footer.
 * @csspart     header
 *              The header for the card. Contains the header slot.
 * @csspart     image
 *              The image for the promo variant for the card. Contains the image slot.
 * @csspart     body
 *              The body for the card. Contains the default slot.
 * @csspart     footer
 *              The footer for the card. Contains the footer slot.
 * @cssprop     [--rh-card-heading-font-family=--rh-font-family-heading]
 *              The font family for headings in the header and body
 * @cssprop     [--rh-card-heading-font-size=--rh-font-size-heading-sm]
 *              The font size for headings in the header and body
 * @cssprop     [--rh-card-heading-font-weight=--rh-font-weight-body-text-medium]
 *              The font weight for headings in the header and body
 */
@customElement('rh-card')
export class RhCard extends LitElement {
  static readonly version = '{{version}}';

  static styles = [styles];

  private static slots = ['header', 'image', null, 'footer'] as const;

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
  @property(
    {
      reflect: true,
      attribute: 'color-palette',
    }
  ) colorPalette?: 'darkest' | 'lightest' | 'lighter';

  /**
   * Change the style of the card to be a "Promo"
   */
  @property({ reflect: true }) variant?: 'promo';

  /**
   * Change a promo with an image + body + footer to use the `full-width` style
   */
  @property({ reflect: true, attribute: 'full-width', type: Boolean }) fullWidth? = false;

  #slots = new SlotController(this, ...RhCard.slots);

  override render() {
    const { on = '', colorPalette = '', variant = '' } = this;
    const slots =
      Object.fromEntries(RhCard.slots.map(slot =>
        [slot ?? 'body', this.#slots.hasSlotted(slot)])) as Record<
          | 'header'
          | 'image'
          | 'body'
          | 'footer', boolean>;
    const promo = this.variant === 'promo';
    const standard = promo && slots.body && !slots.image && !slots.header;
    const computedPalette =
        !standard ? colorPalette
      : (colorPalette || 'lightest').replace('est', 'er');
    const header = html`
      <div id="header"
           part="header"
           class="${classMap({ empty: !slots.header })}">
        <slot name="header"></slot>
      </div>`;
    const footer = html`
      <div id="footer"
           part="footer"
           class="${classMap({ empty: !slots.footer })}">
        <slot name="footer"></slot>
      </div>`;
    return html`
     <div id="container"
          part="container"
          class="${classMap({
            [on]: !!on,
            [computedPalette]: !!computedPalette,
            [variant]: !!variant,
            standard,
            ...Object.fromEntries(Object.entries(slots).map(([k, v]) => [`has-${k}`, v])),
          })}">${promo ? '' : header}
        <div id="image"
             part="image"
             class="${classMap({ empty: !slots.image })}">
          <slot name="image"></slot>
        </div>
        <div id="body"
             part="body"
             class="${classMap({ empty: !slots.body })}">
          ${!promo ? '' : header}
          <slot></slot>
          ${!promo ? '' : footer}
        </div>
        ${promo ? '' : footer}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
  }
}
