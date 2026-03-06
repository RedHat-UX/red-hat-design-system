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
    /** The trigger element that caused the dialog to open, or null if opened programmatically. */
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
 * Modal overlay for confirming decisions or collecting input. Traps
 * focus and blocks page interaction. MUST have a heading or
 * `accessible-label` for screen readers. Uses native `<dialog>` with
 * ARIA `aria-labelledby`. Keyboard: Escape closes, Tab cycles focus.
 * USE sparingly to avoid disrupting user workflow.
 *
 * @summary Modal dialog for confirmations, errors, or required input
 *
 * @alias dialog
 *
 * @fires {DialogOpenEvent} open - Fires when the dialog opens, either via
 *   trigger click or programmatic `show()`/`showModal()` call.
 *   Event detail: `trigger` (HTMLElement | null) — the element that opened
 *   the dialog, or null if opened programmatically.
 * @fires {DialogCloseEvent} close - Fires when the dialog closes via the
 *   close button or a programmatic `close()` call. No event detail properties.
 * @fires {DialogCancelEvent} cancel - Fires when the user dismisses the
 *   dialog by clicking the backdrop or pressing Escape. No event detail
 *   properties.
 */
@customElement('rh-dialog')
@themable
export class RhDialog extends LitElement {
  static readonly styles = [styles];

  /**
   * Controls the fixed width of the dialog container. Valid values are
   * `small` (35rem), `medium` (52.5rem), or `large` (70rem). When unset
   * the dialog defaults to `min(90%, 1140px)`. USE `small` for brief
   * confirmations, `medium` for forms, and `large` for content-heavy dialogs.
   */
  @property({ reflect: true }) variant?: 'small' | 'medium' | 'large';

  /**
   * Controls the vertical placement of the dialog. When set to `top`, the
   * dialog aligns to the top of the viewport with a `--rh-space-2xl` margin.
   * When unset, the dialog is vertically and horizontally centered. USE
   * `top` for full-width layouts or when the dialog contains charts or
   * complex images that benefit from more horizontal space.
   */
  @property({ reflect: true }) position?: 'top';

  /**
   * Sets the ARIA accessible name for the dialog, used by screen readers to
   * announce the dialog's purpose. MUST be provided when no heading element
   * exists in the `header` or default slot. Fallback order: 1) this attribute,
   * 2) first heading found in slotted content, 3) trigger element text.
   * Maps to `aria-label` on the native `<dialog>` element.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Whether the dialog is currently open. Set declaratively to show the
   * dialog on load, or use `show()`/`showModal()` programmatically. When
   * `true`, the dialog traps focus and prevents interaction with background
   * content. Reflects to the `open` attribute. Defaults to `false`.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * ID of the element that opens this dialog when clicked. The trigger
   * element MUST exist in the same document or shadow root. When set, the
   * dialog automatically listens for click and Enter keypress events on the
   * trigger. The trigger's text content is used as a fallback accessible
   * name if no heading or `accessible-label` is provided.
   */
  @property() trigger?: string;

  /**
   * Sets the dialog to video mode. When set to `video`, the dialog uses a
   * 16:9 aspect ratio (customizable via `--rh-dialog-video-aspect-ratio`),
   * removes padding, and automatically pauses `<video>` or YouTube
   * `<iframe>` elements when the dialog closes. The close button overlays
   * the video content.
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
                <!-- summary: Optional heading displayed at the top of the dialog
                     description: |
                       SHOULD contain a heading element (h2-h6) that describes the
                       dialog's purpose. The heading automatically becomes the dialog's
                       ARIA accessible name via \`aria-labelledby\`. Sticks to the top
                       of the dialog when content overflows. AVOID using h1 to maintain
                       proper document heading hierarchy. -->
                <slot name="header"></slot>
                <!-- The container for the optional dialog description in the header -->
                <div part="description" ?hidden=${!hasDescription}>
                  <!-- summary: Supplementary text displayed below the header heading
                       description: |
                         USE for brief context that supports the header. SHOULD be
                         concise body text, not interactive elements. Hidden when
                         no content is slotted. -->
                  <slot name="description"></slot>
                </div>
              </div>
              <div id="body" part="body">
                <!-- summary: Primary dialog body content
                     description: |
                       Accepts any content including text, forms, images, or
                       interactive elements. When the header slot is empty, this
                       content appears at the top of the dialog. If a heading
                       element (h2-h6) is placed here without a header slot, it
                       automatically provides the dialog's accessible name via
                       \`aria-labelledby\`. For \`type="video"\`, USE a \`<video>\` or
                       YouTube \`<iframe>\` element. Content scrolls vertically when
                       it overflows the dialog container. -->
                <slot></slot>
              </div>
              <!-- Actions footer container -->
              <div id="footer"
                   part="footer"
                   ?hidden=${!hasFooter}>
                <!-- summary: Action buttons or links anchored to the bottom of the dialog
                     description: |
                       USE for primary and secondary action buttons (e.g., confirm,
                       cancel). SHOULD contain at most two buttons. Buttons are
                       laid out horizontally with \`--rh-space-md\` gap. Hidden when
                       no content is slotted. Focusable elements here are included
                       in the dialog's Tab key focus cycle. -->
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

  async cancel(returnValue?: string) {
    this.#cancelling = true;
    this.close(returnValue);
    this.open = false;
    await this.updateComplete;
    this.#cancelling = false;
  }

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
