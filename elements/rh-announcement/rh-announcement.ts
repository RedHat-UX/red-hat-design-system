import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';

import '@rhds/elements/rh-button/rh-button.js';

import styles from './rh-announcement.css';

export class AnnouncementCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

/**
 * Announcements are flexible surfaces used to group information in a full width banner layout, traditionally across the top of a page.
 * They are used to announce new features, promos, or news.
 * @summary Arranges content and interactive elements in a layout
 * @slot    image
 *          If this slot is used, we expect an image tag with a width and height set.
 *          An icon, svg, or use of the icon component are also valid in this region.
 * @slot    Any content that is not designated for the header or footer slot, will go to this slot.
 * @slot    cta
 *          If this slot is used, we expect a rh-cta component.
 * @csspart row
 *          The row for the banner. Contains the image and content divs.
 * @csspart image
 *          The image for the banner. Contains the image slot.
 * @csspart content
 *          The content container. Contains the body and cta slots.
 * @csspart body
 *          The body for the banner. Contains the default slot.
 * @csspart cta
 *          The cta for the banner. Contains the cta slot.
 */

@customElement('rh-announcement')
export class RhAnnouncement extends LitElement {
  static styles = [styles];

  /**
   * Make an announcement dismissable
   */
  @property({ reflect: true, type: Boolean }) dismissable = false;

  /**
   * Set the position of the image in the announcement on mobile viewports. Possible values are:
   * - `inline-start`
   * - `block-start`
   */
  @property({ reflect: true, attribute: 'image-position' })
  imagePosition?: 'inline-start' | 'block-start';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: 'dark' | 'light';

  #slots = new SlotController(this, 'image', null, 'cta');

  render() {
    const { dismissable, on = '' } = this;
    const imagePosInlineStart = this.imagePosition === 'inline-start';
    const imagePosBlockStart = this.imagePosition === 'block-start';

    return html`
      <div id="container"
           class="${classMap({
              on,
              [on]: !!on,
              dismissable,
              'inline-start': imagePosInlineStart,
              'block-start': imagePosBlockStart,
              'empty': this.#slots.isEmpty(null),
            })}">
        <div id="row" part="row">
          <div id="image"
               part="image"
               class="${classMap({ empty: !this.#slots.hasSlotted('image') })}">
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !this.#slots.hasSlotted('cta') })}">
              <slot name="cta"></slot>
            </div>
          </div>
        </div>
        <div id="header-actions"
             ?hidden="${!this.dismissable}"
             ?inert="${!this.dismissable}">
          <rh-button id="close-button"
                  label="Close"
                  confirm
                  variant="close"
                  @click=${this.#closeHandler}></rh-button>
        </div>
      </div>
    `;
  }

  #closeHandler() {
    const event = new AnnouncementCloseEvent();
    if (this.dispatchEvent(event)) {
      this.remove();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-announcement': RhAnnouncement;
  }
}
