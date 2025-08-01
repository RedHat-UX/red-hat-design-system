import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

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
 *
 * @alias announcement
 *
 * @fires   {AnnouncementCloseEvent} close
 *          When a user clicks the close/dismiss button on an announcement.
 */
@customElement('rh-announcement')
@colorPalettes
@themable
export class RhAnnouncement extends LitElement {
  static styles = [styles];

  /** Sets color context for child components, overrides parent context */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

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

  #slots = new SlotController(this, 'image', null, 'cta');

  render() {
    const { dismissable } = this;
    const imagePosInlineStart = this.imagePosition === 'inline-start';
    const imagePosBlockStart = this.imagePosition === 'block-start';

    return html`
      <div id="container"
           class="${classMap({
              dismissable,
              'inline-start': imagePosInlineStart,
              'block-start': imagePosBlockStart,
              'empty': this.#slots.isEmpty(null),
            })}">
        <!-- The row for the banner. Contains the image and content divs. -->
        <div id="row" part="row">
          <!-- The image for the banner. Contains the image slot. -->
          <div id="image"
               part="image"
               class="${classMap({ empty: !this.#slots.hasSlotted('image') })}">
            <!--
              If this slot is used, we expect an image tag with a width and height set.
              An icon, svg, or use of the icon component are also valid in this region.
            -->
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
              <!-- Any content that is not designated for the header or footer slot, will go to this slot. -->
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !this.#slots.hasSlotted('cta') })}">
              <!-- If this slot is used, we expect a rh-cta component. -->
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
