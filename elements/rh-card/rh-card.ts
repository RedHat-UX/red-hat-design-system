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
 * USE cards to group small previews of content with optional calls to action.
 * Cards SHOULD contain a header with a heading level tag (h1-h6) and MUST NOT
 * replace primary page content. Cards do not manage focus; interactive elements
 * inside (links, CTAs) MUST be keyboard-accessible via Tab and activated with
 * Enter. Screen readers announce card content in DOM order. The `promo` variant
 * SHOULD be used for promotional content separate from the main page flow.
 *
 * @summary Groups content previews with optional actions in a contained layout
 *
 * @alias card
 */
@customElement('rh-card')
@colorPalettes
@themable
export class RhCard extends LitElement {
  static styles = [styles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context. Accepts 'lightest' | 'lighter' | 'light' | 'dark' |
   * 'darker' | 'darkest'. Promo variants automatically compute palette: featured promos
   * USE the `-est` suffix, standard promos USE the `-er` suffix. Defaults to undefined
   * (inherits from parent context). See [CSS Custom Properties](#css-custom-properties)
   * for default values.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Controls the card's visual variant. Accepts 'promo' or undefined.
   * When set to 'promo', the card renders in a promotional layout with
   * grid-based positioning for image, body, and footer. Defaults to
   * undefined (standard card layout). AVOID mixing promo and standard
   * cards in the same group.
   */
  @property({ reflect: true }) variant?: 'promo';

  /**
   * When true, a promo card bleeds to the edges of its container with no border.
   * Only applies when `variant` is 'promo'. Requires the image slot to be populated
   * for the full-width grid layout. Defaults to false. Boolean attribute.
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
          summary: Card header content
          description: |
            MUST contain a heading level tag (h1-h6) for screen reader
            navigation. Icons, SVGs, or rh-icon are also valid. Screen
            readers announce this slot content first in the card.
        -->
        <slot name="header"></slot>
      </div>`;
    const footer = html`
      <!-- The footer for the card. Contains the footer slot. -->
      <div id="footer"
           part="footer"
           class="${classMap({ empty: !hasFooter })}">
        <!--
          summary: Card footer content
          description: |
            USE for calls to action or links anchored to the card bottom.
            Screen readers announce footer content last. Interactive
            elements MUST be focusable via Tab and activated with Enter.
        -->
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
          <!--
            summary: Promo variant image content
            description: |
              USE for images or CTAs in the promo variant. Images SHOULD
              include alt text for screen readers. Decorative images
              SHOULD use alt="" to be hidden from assistive technology.
          -->
          <slot name="image"></slot>
        </div>
        <!-- The body for the card. Contains the default slot. -->
        <div id="body"
             part="body"
             class="${classMap({ empty: !hasBody })}">
          ${!promo ? '' : header}
          <!--
            summary: Card body content (default slot)
            description: |
              Receives all content not assigned to named slots. SHOULD
              contain descriptive text, headings, or supporting elements.
              Screen readers announce this between header and footer.
          -->
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
