import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';

import styles from './rh-announcement.css';

import '@rhds/elements/rh-button/rh-button.js';
/**
 * Announcements are flexible surfaces used to group information in a full width banner layout, traditionally across the top of a page.
 * They are used to announce new features, promos, or news.
 * @summary     Arranges content and interactive elements in a layout
 * @slot        image
 *              If this slot is used, we expect an image tag with a width and height set.
 *              An icon, svg, or use of the icon component are also valid in this region.
 * @slot        Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot        cta
 *              If this slot is used, we expect a rh-cta component.
 * @csspart     container
 *              The container for the banner. Contains the image, body, and cta.
 * @csspart     image
 *              The image for the banner. Contains the image slot.
 * @csspart     body
 *              The body for the banner. Contains the default slot.
 * @csspart     footer
 *              The cta for the banner. Contains the cta slot.
 */

export class AnnouncementCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

@customElement('rh-announcement')
export class RhAnnouncement extends LitElement {
  static readonly version = '{{version}}';

  static styles = [styles];

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
  @property({ reflect: true, attribute: 'color-palette' })
    colorPalette?: 'dark' | 'light';

  @property({ reflect: true, type: Boolean }) dismissible = false;
  @property({ reflect: true, type: Boolean }) imgleft = false;

  #slots = new SlotController(this, 'image', null, 'cta');

  #closeHandler() {
    const event = new AnnouncementCloseEvent();
    if (this.dispatchEvent(event)) {
      this.remove();
    }
  }

  render() {
    const { on = '', colorPalette = '' } = this;
    return html`
  <div id="container"
        part="container"
        class="${classMap({ [on]: !!on, [colorPalette]: !!colorPalette, dismissible: !!this.dismissible, imgleft: !!this.imgleft })}">
      <div id="row">
        <div id="image"
          part="image"
          class="${classMap({ empty: !this.#slots.hasSlotted('image') })}">
        <slot name="image"></slot>
      </div>
      <div id="content">
        <div id="body"
            part="body"
            class="${classMap({ empty: !this.querySelector(':not([slot])') })}">
          <slot></slot>
        </div>
        <div id="cta"
            part="cta"
            class="${classMap({ empty: !this.#slots.hasSlotted('cta') })}">
          <slot name="cta"></slot>
        </div>
        </div>
      </div>
      ${!this.dismissible ? '' : html`
      <div id="header-actions">
        <rh-button id="close-button"
            aria-label="Close"
            variant="close"
            confirm
            @click=${this.#closeHandler}></rh-button>
      </div>`}
    </div>
  `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-announcement': RhAnnouncement;
  }
}
