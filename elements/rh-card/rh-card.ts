import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-card.css' with { type: 'css' };

const PALETTE_RE = /(er|est)+/g;

/**
 * Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
 *
 * @summary     Arranges content and interactive elements in a layout
 *
 * @alias card
 *
 */
@customElement('rh-card')
@colorPalettes
@themable
export class RhCard extends LitElement {
  static styles = [styles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Change the style of the card to be a "Promo"
   */
  @property({ reflect: true }) variant?: 'promo';

  /**
   * Change a promo with an image + body + footer to use the `full-width` style
   */
  @property({ reflect: true, attribute: 'full-width', type: Boolean }) fullWidth? = false;

  #slots = new SlotController(this, 'header', 'image', null, 'footer');

  override render() {
    const isPromo = this.variant === 'promo';
    const isStandardPromo =
         isPromo
      && this.#slots.hasSlotted(null)
      && this.#slots.isEmpty('image')
      && this.#slots.isEmpty('header');

    let computedPalette: ColorPalette | undefined;
    if (isStandardPromo) {
      computedPalette = `${`${this.colorPalette ?? 'lightest'}`.replace(PALETTE_RE, '')}er` as 'lighter' | 'darker';
    } else if (isPromo) {
      computedPalette = `${`${this.colorPalette ?? 'lightest'}`.replace(PALETTE_RE, '')}est` as 'lightest' | 'darkest';
    } else {
      computedPalette = this.colorPalette;
    }

    const promo = this.variant === 'promo';
    const standard = isStandardPromo;
    const { variant = '' } = this;
    const hasHeader = this.#slots.hasSlotted('header');
    const hasFooter = this.#slots.hasSlotted('footer');
    const hasImage = this.#slots.hasSlotted('image');
    const hasBody = this.#slots.hasSlotted(null);
    const header = html`
      <!-- The header for the card. Contains the header slot. -->
      <div id="header"
           part="header"
           class="${classMap({ empty: !hasHeader })}">
        <!--
          If this slot is used, we expect a heading level tag (h1, h2, h3, h4, h5, h6).
          An icon, svg, or use of the icon component are also valid in this region.
        -->
        <slot name="header"></slot>
      </div>`;
    const footer = html`
      <!-- The footer for the card. Contains the footer slot. -->
      <div id="footer"
           part="footer"
           class="${classMap({ empty: !hasFooter })}">
        <!-- Use this slot for anything that you want to be stuck to the base of the card. -->
        <slot name="footer"></slot>
      </div>`;
    return html`
     <!-- The container for the card. Contains the image, header, body, and footer. -->
     <div id="container"
          part="container"
          class="${classMap({
            standard,
            body: hasBody,
            header: hasHeader,
            footer: hasFooter,
            image: hasImage,
            [variant]: !!variant,
            [computedPalette ?? '']: !!computedPalette,
          })}">${promo ? '' : header}
        <!-- The image for the promo variant for the card. Contains the image slot. -->
        <div id="image"
             part="image"
             class="${classMap({ empty: !hasImage })}">
          <!-- Use this slot for the promo variant of the card. Images & CTA's are most often slotted here. -->
          <slot name="image"></slot>
        </div>
        <!-- The body for the card. Contains the default slot. -->
        <div id="body"
             part="body"
             class="${classMap({ empty: !hasBody })}">
          ${!promo ? '' : header}
          <!-- Any content that is not designated for the header or footer slot, will go to this slot. -->
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
