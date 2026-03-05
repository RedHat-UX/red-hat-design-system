import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-button/rh-button.js';

import styles from './rh-announcement.css' with { type: 'css' };

/**
 * Event fired when a user dismisses an announcement by clicking the close
 * button. The event is cancelable; calling `preventDefault()` on it will
 * prevent the announcement from being removed from the DOM. The event
 * bubbles and carries no additional detail properties.
 */
export class AnnouncementCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

/**
 * Full-width banner for promoting events or important messages. SHOULD
 * be placed above primary navigation. USE `dismissable` to add a close
 * button. Supports `color-palette` for light/dark themes. Tab and
 * Enter MUST activate interactive elements. Slotted content provides
 * screen reader context; SHOULD include meaningful text.
 *
 * @summary Full-width promotional or informational banner
 *
 * @alias announcement
 *
 * @fires {AnnouncementCloseEvent} close - Fires when the user clicks the
 *        dismiss button. Cancelable: calling `preventDefault()` prevents
 *        the element from being removed. Bubbles. No additional detail
 *        properties.
 */
@customElement('rh-announcement')
@colorPalettes
@themable
export class RhAnnouncement extends LitElement {
  static styles = [styles];

  /**
   * Sets the color context for child components, overriding any inherited
   * parent context. Valid values include `light`, `dark`, and other
   * palette names defined by the design system. Determines surface and
   * text colors. SHOULD contrast with adjacent surfaces (e.g., AVOID
   * using a dark announcement above a dark navigation).
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * When true, renders a close button that allows the user to dismiss the
   * announcement. Pressing Enter or Space on the close button fires a
   * cancelable `close` event. If the event is not canceled, the element is
   * removed from the DOM. Defaults to `false`.
   */
  @property({ reflect: true, type: Boolean }) dismissable = false;

  /**
   * Controls the position of the slotted image on mobile viewports.
   * `inline-start` keeps the image beside the body text; `block-start`
   * places it above. On wider viewports (768px+), images always appear
   * inline. When unset, the image appears above content on mobile.
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
            <!-- summary: optional visual such as an icon, logo, or image
                 description: |
                   Accepts an \`<img>\`, \`<svg>\`, or \`<rh-icon>\` element. Images
                   MUST have explicit \`width\` and \`height\` attributes set.
                   SHOULD include \`role="img"\` and an \`aria-label\` for
                   accessibility. Max recommended height is 48px for icons
                   or 20-25px for text logos. -->
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
              <!-- summary: main body text content for the announcement
                   description: |
                     USE a \`<p>\` element for body text. Content SHOULD be
                     concise (65 characters max recommended). Screen readers
                     will read this content in DOM order. AVOID long or
                     multi-paragraph content. -->
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !this.#slots.hasSlotted('cta') })}">
              <!-- summary: call-to-action link for the announcement
                   description: |
                     MUST contain an \`<rh-cta>\` element with an \`href\`
                     attribute. CTA text SHOULD be 25 characters or fewer.
                     Keyboard users can Tab to the CTA and activate it
                     with Enter. -->
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
