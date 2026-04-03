import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-dialog.css' with { type: 'css' };

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
    /** The element that opened the dialog, or null if opened programmatically. */
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
 * Modal overlay for confirming decisions or collecting input. Traps focus and
 * blocks page interaction. Must have a heading or `accessible-label` for screen
 * readers. Uses native `<dialog>` with `aria-labelledby`. Escape closes the
 * dialog; Tab cycles focus within it. Use sparingly to avoid disrupting workflow.
 *
 * @summary Modal dialog for confirmations, errors, or required input
 *
 * @alias dialog
 *
 * @fires {DialogOpenEvent} open - Fires when the dialog opens. The event's `trigger`
 *   property (HTMLElement | null) holds the element that opened it.
 * @fires {DialogCloseEvent} close - Fires when the dialog closes via close button
 *   or programmatic `close()`. No detail properties.
 * @fires {DialogCancelEvent} cancel - Fires when the user dismisses via backdrop
 *   click or Escape. No detail properties.
 */
@customElement('rh-dialog')
@themable
export class RhDialog extends LitElement {
  static readonly styles = [styles];

  /**
   * Fixed width: `small` (35 rem), `medium` (52.5 rem), or `large` (70 rem).
   * Defaults to `min(90%, 1140px)` when unset.
   */
  @property({ reflect: true }) variant?: 'small' | 'medium' | 'large';

  /**
   * Vertical placement. Set to `top` to align to the top of the viewport
   * instead of center.
   */
  @property({ reflect: true }) position?: 'top';

  /**
   * Accessible name for the dialog. Must be provided when no heading
   * exists in the header or default slot. Maps to `aria-label` on the
   * native `<dialog>`.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Whether the dialog is currently open.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * ID of the element that opens the dialog on click. Should exist in
   * the same document or shadow root. Its text is used as a fallback
   * accessible name when no heading or `accessible-label` is present.
   */
  @property() trigger?: string;

  /**
   * Set to `video` for a 16:9 video dialog. Removes padding and pauses
   * `<video>` or YouTube `<iframe>` elements on close.
   */
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
                <!--
                  summary: Dialog heading
                  description: |
                    Should contain an h2-h6 describing the dialog's purpose. The heading becomes the
                    accessible name via aria-labelledby. Sticks to the top when content overflows.
                -->
                <slot name="header"></slot>
                <!-- The container for the optional dialog description in the header -->
                <div part="description" ?hidden=${!hasDescription}>
                  <!--
                    summary: Supplementary text below the heading
                    description: |
                      Brief context supporting the header. Hidden when empty.
                  -->
                  <slot name="description"></slot>
                </div>
              </div>
              <!-- The container for the dialog body content -->
              <div id="body" part="body">
                <!--
                  summary: Primary dialog content
                  description: |
                    Accepts text, forms, images, or interactive elements. Scrolls vertically on
                    overflow. For video dialogs, slot a video or YouTube iframe here.
                -->
                <slot></slot>
              </div>
              <!-- Actions footer container -->
              <div id="footer"
                   part="footer"
                   ?hidden=${!hasFooter}>
                <!--
                  summary: Action buttons at the bottom of the dialog
                  description: |
                    Primary and secondary action buttons (e.g. confirm, cancel). Hidden when empty.
                    Focusable elements here are part of the dialog's Tab focus cycle.
                -->
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
   * Cancels and closes the dialog, dispatching a cancel event.
   * @param [returnValue] dialog return value
   */
  async cancel(returnValue?: string) {
    this.#cancelling = true;
    this.close(returnValue);
    this.open = false;
    await this.updateComplete;
    this.#cancelling = false;
  }

  /**
   * Sets the trigger element programmatically.
   * @param element the element that should open the dialog on click
   */
  setTrigger(element: HTMLElement) {
    this.#triggerElement = element;
    this.#triggerElement.addEventListener('click', this.onTriggerClick);
  }

  /** Toggles the dialog open or closed. */
  toggle() {
    if (!this.open) {
      this.showModal();
      this.open = true;
    } else {
      this.close();
    }
  }

  /** Opens the dialog as a modal. */
  show() {
    this.dialog?.showModal();
    this.open = true;
  }

  showModal() {
    // TODO: non-modal mode
    this.show();
  }

  /**
   * Closes the dialog.
   * @param [returnValue] dialog return value
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
