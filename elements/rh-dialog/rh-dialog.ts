import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-dialog.css';

import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';

export class DialogCancelEvent extends Event {
  constructor() {
    super('cancel', { bubbles: true, cancelable: true });
  }
}

export class DialogCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

export class DialogOpenEvent extends Event {
  constructor(
    /** The trigger element which triggered the dialog to open */
    public trigger: HTMLElement | null
  ) {
    super('open', { bubbles: true, cancelable: true });
  }
}

async function pauseYoutube(iframe: HTMLIFrameElement) {
  const { pauseVideo } = await import('./yt-api.js');
  await pauseVideo(iframe);
}

/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 *
 * @summary Communicates information requiring user input or action
 *
 * @alias dialog
 *
 * @fires {DialogOpenEvent} open - Fires when a user clicks on the trigger or manually opens a dialog.
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel - Fires when a user clicks outside the dialog or hits ESC on their keyboard.
 */
@customElement('rh-dialog')
@themable
export class RhDialog extends LitElement {
  static readonly styles = [styles];

  /**
   * The `variant` controls the width of the dialog.
   * There are three options: `small`, `medium` and `large`. The default is `large`.
   */
  @property({ reflect: true }) variant?: 'small' | 'medium' | 'large';

  /**
   * `position="top"` aligns the dialog with the top of the page
   */
  @property({ reflect: true }) position?: 'top';

  /**
   * Use `accessible-label="My custom label"` to specify the dialog's accessible name.
   * Defaults to the name of the dialog trigger if no attribute is set and no headings exist in the modal.
   * See Dialog's Accessibility page for more info.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * `open` / `open="open"` declaratively opens the dialog
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Optional ID of the trigger element */
  @property() trigger?: string;

  /** Use `type="video"` to embed a video player into a dialog. */
  @property({ reflect: true }) type?: 'video';

  /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
  public returnValue = '';

  #screenSize = new ScreenSizeController(this);

  @query('#dialog') private dialog!: HTMLDialogElement;
  @query('#content') private content!: HTMLElement;
  @query('#close-button') private closeButton!: HTMLElement;

  #headerId = getRandomId();
  #triggerElement: HTMLElement | null = null;
  #header: HTMLElement | null = null;
  #body: Element[] = [];
  #headings: Element[] = [];
  #cancelling = false;

  #slots = new SlotController(this, null, 'header', 'description', 'footer');

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#onKeyDown);
    this.addEventListener('click', this.#onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.onTriggerClick);
  }

  render() {
    const headerId = (this.#header || this.#headings.length) ? this.#headerId : undefined;
    const triggerLabel = this.#triggerElement ? this.#triggerElement.innerText : undefined;
    const hasHeader = this.#slots.hasSlotted('header');
    const hasDescription = this.#slots.hasSlotted('description');
    const hasFooter = this.#slots.hasSlotted('footer');
    const { mobile } = this.#screenSize;
    return html`
      <div id="rhds-wrapper" class="${classMap({ mobile })}">
        <rh-surface class="${classMap({ hasHeader, hasDescription, hasFooter })}"
                    ?hidden="${!this.open}">
          <!-- The dialog element -->
          <dialog id="dialog"
                  part="dialog"
                  aria-labelledby=${ifDefined(this.accessibleLabel ? undefined : headerId)}
                  aria-label=${ifDefined(this.accessibleLabel ? this.accessibleLabel : (!headerId ? triggerLabel : undefined))}
                  @cancel=${this.#onNativeDialogCancel}>
            <!-- The dialog's close button -->
            <rh-button variant="close"
                       id="close-button"
                       part="close-button"
                       type="button"
                       @click=${this.close}>
              <span class="visually-hidden">Close Dialog</span>
            </rh-button>
            <!-- The container for the dialog content -->
            <div id="content" part="content">
              <!-- The container for the optional dialog header -->
              <div id="header"
                   part="header"
                   ?hidden=${!hasHeader}>
                <!-- The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6). -->
                <slot name="header"></slot>
                <!-- The container for the optional dialog description in the header -->
                <div part="description" ?hidden=${!hasDescription}>
                  <!-- summary: descriptive text providing additional context about the dialog
                       description: |
                         Contains supplementary text that provides additional context or instructions
                         for the dialog. Appears below the header and above the main content. This
                         slot is optional and should be used when users need more information to
                         understand the dialog's purpose or required actions.

                         **Usage guidelines:**
                         - Keep description text concise and informative
                         - Use to clarify the dialog's purpose or provide instructions
                         - Should complement, not duplicate, the dialog header
                         - Consider accessibility - description adds context for all users -->
                  <slot name="description"></slot>
                </div>
              </div>
              <div id="body" part="body">
                <!-- The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header. -->
                <slot></slot>
              </div>
              <!-- Actions footer container -->
              <div id="footer"
                   part="footer"
                   ?hidden=${!hasFooter}>
                <!-- Optional footer content. Good place to put action buttons. -->
                <slot name="footer"></slot>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    `;
  }

  @initializer()
  protected async _init() {
    await this.updateComplete;
    this.#header = this.querySelector(`[slot$="header"]`);
    this.#body = [...this.querySelectorAll(`*:not([slot])`)];
    this.#headings = this.#body.filter(el => el.tagName.slice(0, 1) === 'H');

    if (this.#triggerElement) {
      this.#triggerElement.addEventListener('click', this.onTriggerClick);
      this.removeAttribute('hidden');
    }

    if (this.#header) {
      this.#header.id = this.#headerId;
    } else if (this.#headings.length > 0) {
      // Get the first heading in the dialog if it exists
      this.#headings[0].id = this.#headerId;
    }
  }

  @observes('open')
  protected async _openChanged(oldValue?: boolean, open?: boolean) {
    if (this.type === 'video') {
      if (oldValue === true && this.open === false) {
        this.querySelector('video')?.pause?.();
        const iframe = this.querySelector('iframe');
        if (iframe?.src.match(/youtube/)) {
          pauseYoutube(iframe);
        }
      }
    } else if (oldValue == null
               || open == null
               // loosening types to prevent running these effects in unexpected circumstances
               // eslint-disable-next-line eqeqeq
               || oldValue == open) {
      return;
    } else if (open) {
      // This prevents background scroll
      document.body.style.overflow = 'hidden';
      await this.updateComplete;
      this.dispatchEvent(new DialogOpenEvent(this.#triggerElement));
    } else {
      // Return scrollability
      document.body.style.overflow = 'auto';

      const event = this.#cancelling ? new DialogCancelEvent() : new DialogCloseEvent();

      await this.updateComplete;

      this.dispatchEvent(event);
    }
  }

  @observes('trigger')
  protected _triggerChanged() {
    if (this.trigger) {
      this.#triggerElement =
        (this.getRootNode() as Document | ShadowRoot).getElementById(this.trigger);
      this.#triggerElement?.addEventListener('click', this.onTriggerClick);
    }
  }

  @bound private async onTriggerClick(event: MouseEvent) {
    event.preventDefault();
    this.showModal();
    await this.updateComplete;
    this.closeButton?.focus();
  }

  #onClick(event: MouseEvent) {
    const { open, content } = this;
    if (open) {
      const path = event.composedPath();

      if (!path.includes(content!)) {
        event.preventDefault();
        this.cancel();
      }
    }
  }

  #onNativeDialogCancel() {
    this.cancel();
  }

  #onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
      case 'Esc':
        this.cancel();
        return;
      case 'Enter':
        if (event.target === this.#triggerElement) {
          event.preventDefault();
          this.showModal();
        }
        return;
    }
  }

  /**
   * Cancels and closes the dialog, typically in response to user actions like
   * clicking outside the dialog or pressing ESC.
   *
   * This method fires a cancelable `cancel` event before closing. The dialog
   * will only close if the event is not prevented. After canceling, the dialog
   * fires a `close` event.
   *
   * ## Usage guidelines
   * - Called automatically when user presses ESC or clicks outside the dialog
   * - Can be called programmatically to cancel dialog programmatically
   * - Fires `cancel` event (cancelable) before closing
   * - Use `close()` instead for explicit user actions (like clicking a button)
   *
   * @param returnValue - Optional return value for the dialog
   *
   * @example
   * ```js
   * const dialog = document.querySelector('rh-dialog');
   * dialog.cancel(); // Cancels with no return value
   * dialog.cancel('user-cancelled'); // Cancels with return value
   * ```
   */
  async cancel(returnValue?: string) {
    this.#cancelling = true;
    this.close(returnValue);
    this.open = false;
    await this.updateComplete;
    this.#cancelling = false;
  }

  /**
   * Programmatically sets the trigger element for the dialog.
   *
   * This method assigns an element as the dialog's trigger and attaches click
   * event listeners. When the trigger is clicked, the dialog opens. Use this
   * when you need to dynamically change the trigger element or set a trigger
   * that isn't specified via the `trigger` attribute.
   *
   * ## Usage guidelines
   * - Use when trigger element is dynamically created or changed
   * - Automatically adds click listener to open dialog
   * - Replaces any previously set trigger element
   * - Useful for programmatic trigger management in dynamic UIs
   *
   * ## Accessibility
   * - Ensure trigger element has appropriate accessible name
   * - Trigger should clearly indicate it will open a dialog
   *
   * @param element - The HTML element that will trigger the dialog to open
   *
   * @example
   * ```js
   * const dialog = document.querySelector('rh-dialog');
   * const button = document.querySelector('#my-button');
   * dialog.setTrigger(button);
   * ```
   */
  setTrigger(element: HTMLElement) {
    this.#triggerElement = element;
    this.#triggerElement.addEventListener('click', this.onTriggerClick);
  }

  /**
   * Manually toggles the dialog.
   * ```js
   * dialog.toggle();
   * ```
   */
  toggle() {
    if (!this.open) {
      this.showModal();
      this.open = true;
    } else {
      this.close();
    }
  }

  /**
   * Manually opens the dialog.
   * ```js
   * dialog.show();
   * ```
   */
  show() {
    this.dialog?.showModal();
    this.open = true;
  }

  /**
   * Opens the dialog in modal mode.
   *
   * This method opens the dialog as a modal, which means it appears on top of other
   * content and prevents interaction with the rest of the page until closed. This is
   * the standard way to open a dialog.
   *
   * ## Usage guidelines
   * - Use for important dialogs requiring user action before continuing
   * - Modal dialogs block interaction with underlying content
   * - Automatically manages focus and prevents background scrolling
   * - Fires an `open` event when the dialog opens
   *
   * ## Accessibility
   * - Focus automatically moves to the dialog when opened
   * - Background content becomes inert (non-interactive)
   * - Users can close with ESC key or by clicking outside (if not prevented)
   *
   * @example
   * ```js
   * const dialog = document.querySelector('rh-dialog');
   * dialog.showModal();
   * ```
   */
  showModal() {
    // TODO: non-modal mode
    this.show();
  }

  /**
   * Manually closes the dialog.
   * @param [returnValue] dialog return value.
   * @example ```js
   *          dialog.close();
   *          ```
   */
  close(returnValue?: string) {
    if (typeof returnValue === 'string') {
      this.returnValue = returnValue;
    } else {
      this.returnValue = '';
    }

    this.dialog?.close();
    this.open = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
