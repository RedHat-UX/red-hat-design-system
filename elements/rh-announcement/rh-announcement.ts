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

  /**
   * Sets color palette theme for the announcement and its child components.
   *
   * Controls the visual theme (light or dark) of the announcement banner. When changing
   * the background color, ensure accessibility guidelines like color contrast are maintained.
   *
   * ## Usage guidelines
   * - Use a dark theme announcement **only if** it has a different background color than the navigation
   * - Do not use a dark theme if the announcement has the same background color as navigation
   * - Maintain proper color contrast ratios for text and interactive elements
   * - Theme choice should support visual hierarchy and content separation
   *
   * @see https://ux.redhat.com/theming/color-palettes/
   * @see [Theme](https://ux.redhat.com/elements/announcement/style/#theme) in Style documentation
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /**
   * Makes the announcement dismissable by adding a close button in the top right corner.
   *
   * When enabled, displays a close button that allows users to dismiss the announcement.
   * Clicking the close button fires a cancelable `close` event and removes the announcement from the DOM
   * (unless `event.preventDefault()` is called).
   *
   * ## Usage guidelines
   * - A close button is **required at minimum** and provides users control over their experience
   * - Only remove the close button if absolutely necessary for critical messaging
   * - Users who have dismissed an announcement typically should not see it again
   *
   * ## Accessibility
   * - The close button is the last focusable element in the announcement (after skip link and CTA)
   * - Keyboard users can dismiss with Tab + Enter on the close button
   *
   * @see [Close button](https://ux.redhat.com/elements/announcement/guidelines/#customizing) in Guidelines documentation
   */
  @property({ reflect: true, type: Boolean }) dismissable = false;

  /**
   * Sets the position of the inline image relative to body text on mobile viewports.
   *
   * Controls how the image slot content is positioned on small screens. This property
   * only affects mobile viewport sizes; desktop layouts position the image inline by default.
   *
   * - `inline-start` - Positions the image to the left of body text (default for LTR)
   * - `block-start` - Positions the image on top of body text
   *
   * ## Usage guidelines
   * - Use `inline-start` for square logos, icons, or compact images
   * - Use `block-start` for wider images or horizontal text logos that need more space
   *
   * ## Image sizing
   * - Logo or icon images: max height of 48px
   * - Horizontal text logos: approximately 20-25px tall
   *
   * @see [Layout](https://ux.redhat.com/elements/announcement/guidelines/#layout) in Guidelines documentation
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
        <!-- summary: main container row that holds the image and content sections
             description: |
               This part wraps the primary banner content layout, containing both the
               image slot and text content areas. Use this part to customize the overall
               row structure and spacing. -->
        <div id="row" part="row">
          <!-- summary: container for the inline image slot
               description: |
                 This part wraps the image slot and handles responsive positioning based
                 on the `image-position` attribute on mobile viewports. Use this part to
                 customize image container styling and dimensions. -->
          <div id="image"
               part="image"
               class="${classMap({ empty: !this.#slots.hasSlotted('image') })}">
            <!-- summary: inline image such as a logo, icon, or graphic
                 description: |
                   An optional inline image that adds context or visual interest to the announcement.
                   Accepts an `<img>` tag with width and height set, or an icon, SVG, or rh-icon component.

                   **Image sizing:**
                   - Logo or icon images: max height of 48px
                   - Horizontal text logos: approximately 20-25px tall

                   **Positioning:** Use the `image-position` attribute to control placement on mobile viewports
                   (inline-start positions to the left, block-start positions on top).

                   @example
                   <img slot="image" src="summit.png" alt="summit logo" width="48" height="48"> -->
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${classMap({ empty: this.#slots.isEmpty(null) })}">
              <!-- summary: body text for the announcement message (default slot)
                   description: |
                     **Required.** Contains the primary message text, typically within a paragraph element.
                     This is the main content that communicates the announcement, event, or important message.

                     **Content guidelines:**
                     - Maximum 65 characters
                     - 1 line on desktop (up to 2 lines on small viewports)
                     - Keep content short and to the point

                     **When to use:**
                     - Display a message to a specific audience or group
                     - Announce important messages or initiatives
                     - Support events or new product launches

                     **When NOT to use:**
                     - Very long content
                     - Multiple messages or announcements
                     - Secondary or less important content
                     - Messages without a call to action
                     - Alert feedback as result of user action

                     @example
                     <p>Join us at Red Hat Summit 2024 - Register today!</p> -->
              <slot></slot>
            </div>
            <div id="cta" class="${classMap({ empty: !this.#slots.hasSlotted('cta') })}">
              <!-- summary: call to action link or button
                   description: |
                     **Required.** Expects an `rh-cta` component that directs users to take action.
                     This is a critical element that works with the body text to drive user engagement.

                     **Content guidelines:**
                     - Maximum 25 characters
                     - Single line only
                     - Clear, action-oriented text

                     @example
                     <rh-cta slot="cta" href="/summit">Learn More</rh-cta> -->
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
