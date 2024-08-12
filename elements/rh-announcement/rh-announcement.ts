import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html, svg, type PropertyValues } from 'lit';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';

import styles from './rh-announcement.css';
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

const CLOSE_ICON_SVG = svg`
  <svg 
    aria-hidden="true" 
    fill="currentColor" 
    height="12px" width="12px" 
    viewBox="0 0 12 12">
    <path d="M 8.274 6 L 11.686 2.588 C 12.104 2.17 12.104 1.491 11.686 1.072 L 10.928 0.314 C 10.509 -0.105 9.83 -0.105 9.411 0.314 L 6 3.725 L 2.588 0.314 C 2.17 -0.105 1.491 -0.105 1.072 0.314 L 0.314 1.072 C -0.105 1.491 -0.105 2.169 0.314 2.588 L 3.725 6 L 0.314 9.411 C -0.105 9.83 -0.105 10.509 0.314 10.928 L 1.072 11.686 C 1.491 12.104 2.17 12.104 2.588 11.686 L 6 8.274 L 9.411 11.686 C 9.83 12.104 10.509 12.104 10.928 11.686 L 11.686 10.928 C 12.104 10.509 12.104 9.83 11.686 9.411 L 8.274 6 Z"></path>
  </svg>`;

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

  @property({ reflect: true, type: Boolean }) dismissable = false;
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
        class="${classMap({ [on]: !!on, [colorPalette]: !!colorPalette, dismissable: !!this.dismissable, imgleft: !!this.imgleft })}">
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
      ${!this.dismissable ? '' : html`
      <div id="header-actions">
        <button id="close-button"
            aria-label="Close"
            confirm
            @click=${this.#closeHandler}>${CLOSE_ICON_SVG}</button>
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


