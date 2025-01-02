import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

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
 * @summary Communicates information requiring user input or action
 * @fires {DialogOpenEvent} open - Fires when a user clicks on the trigger or manually opens a dialog.
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel - Fires when a user clicks outside the dialog or hits ESC on their keyboard.
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart overlay - @deprecated in favor of the backdrop pseudo-element. The dialog overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} [--rh-dialog-video-aspect-ratio=16/9]
 *          Aspect ratio for the video inside the dialog
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *          Sets the dialog close button color.
 * @cssprop {<color>} [--rh-dialog-backdrop-background-color=rgba(3, 3, 3, 0.62)]
 *          Sets the background color for the native HTML dialog element's `backdrop` pseudo-element
 * @cssprop {<color>} [--rh-dialog-overlay-background-color=transparent] @deprecated
 *          Sets the background color for the `#overlay` `<div>`. Use `--rh-dialog-backdrop-background-color` instead.
 */
@customElement('rh-dialog')
export class RhDialog extends LitElement {
  static readonly styles = [styles];

  protected static closeOnOutsideClick = true;

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
  #lastTabbable: HTMLElement = this.closeButton;

  #slots = new SlotController(this, null, 'header', 'description', 'footer');

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#onKeyDown);
    this.addEventListener('click', this.onClick);
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
        <!-- @deprecated: 👇 use public vars for the backdrop pseudo-element instead. -->
        <div id="overlay"
             part="overlay"
             ?hidden=${!this.open}>
        </div>
        <rh-surface class=${classMap({ hasHeader, hasDescription, hasFooter })}
                    ?hidden=${!this.open}
                    color-palette="${ifDefined(this.type === 'video' ? undefined : 'lightest')}">
          <dialog id="dialog"
                  part="dialog"
                  aria-labelledby=${ifDefined(this.accessibleLabel ? undefined : headerId)}
                  aria-label=${ifDefined(this.accessibleLabel ? this.accessibleLabel : (!headerId ? triggerLabel : undefined))}>
            <rh-button variant="close"
                       id="close-button"
                       part="close-button"
                       type="button"
                       @click=${this.close}>
              <span class="visually-hidden">Close Dialog</span>
            </rh-button>
            <div id="content" part="content">
              <div id="header"
                   part="header"
                   ?hidden=${!hasHeader}>
                <slot name="header"></slot>
                <div part="description" ?hidden=${!hasDescription}>
                  <slot name="description"></slot>
                </div>
              </div>
              <div id="body" part="body">
                <slot></slot>
              </div>
              <div id="footer"
                   part="footer"
                   ?hidden=${!hasFooter}>
                <slot name="footer"></slot>
              </div>
            </div>
          </dialog>
        </rh-surface>
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

  @bound private onClick(event: MouseEvent) {
    const { open, content } = this;
    if (open) {
      const path = event.composedPath();
      const { closeOnOutsideClick } = this.constructor as typeof RhDialog;

      if (closeOnOutsideClick && !path.includes(content!)) {
        event.preventDefault();
        this.cancel();
      }
    }
  }

  #handleTab(event: KeyboardEvent) {
    // No focusable elements except close button:
    if (this.#lastTabbable === this.closeButton) {
      event.preventDefault();
      this.closeButton.focus();
      return;
    }
    // With focusable elements in dialog:
    if (document.activeElement === this.#lastTabbable) {
      event.preventDefault();
      this.closeButton.focus();
    }
  }

  #handleShiftTab(event: KeyboardEvent) {
    if (document.activeElement === this && this.shadowRoot?.activeElement === this.closeButton) {
      event.preventDefault();
      this.#lastTabbable.focus();
    }
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
      case 'Tab':
        if (event.shiftKey) {
          this.#handleShiftTab(event);
          return;
        }
        this.#handleTab(event);
    }
  }

  private async cancel() {
    this.#cancelling = true;
    this.close();
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
  @bound toggle() {
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
  @bound show() {
    this.dialog?.showModal();
    this.open = true;
  }

  @bound showModal() {
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
  @bound close(returnValue?: string) {
    if (typeof returnValue === 'string') {
      this.returnValue = returnValue;
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
