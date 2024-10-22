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
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart overlay - The dialog overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} --rh-dialog-video-aspect-ratio
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *           Sets the dialog close button color.
 */
@customElement('rh-dialog')
export class RhDialog extends LitElement {
  static readonly version = '{{version}}';

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

  @property({ type: Boolean, reflect: true }) open = false;

  /** Optional ID of the trigger element */
  @property() trigger?: string;

  @property({ reflect: true }) type?: 'video';

  /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
  public returnValue = '';

  #screenSize = new ScreenSizeController(this);

  @query('#overlay') private overlay?: HTMLElement | null;
  @query('#dialog') private dialog?: HTMLElement | null;
  @query('#close-button') private closeButton?: HTMLElement | null;

  #headerId = getRandomId();
  #triggerElement: HTMLElement | null = null;
  #header: HTMLElement | null = null;
  #body: Element[] = [];
  #headings: Element[] = [];
  #cancelling = false;

  #slots = new SlotController(this, null, 'header', 'description', 'footer');

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.onKeydown);
    this.addEventListener('click', this.onClick);
  }

  render() {
    const headerId = (this.#header || this.#headings.length) ? this.#headerId : undefined;
    const headerLabel = this.#triggerElement ? this.#triggerElement.innerText : undefined;
    const hasHeader = this.#slots.hasSlotted('header');
    const hasDescription = this.#slots.hasSlotted('description');
    const hasFooter = this.#slots.hasSlotted('footer');

    const { mobile } = this.#screenSize;
    return html`
      <rh-surface id="rhds-wrapper"
                           class="${classMap({ mobile })}"
                           color-palette="lightest">
        <section ?hidden=${!this.open}>
          <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
          <div id="dialog"
               part="dialog"
               tabindex="0"
               role="dialog"
               aria-labelledby=${ifDefined(headerId)}
               aria-label=${ifDefined(headerLabel)}
               ?hidden="${!this.open}">
            <div id="container">
              <div id="content" part="content" class=${classMap({ hasHeader, hasDescription, hasFooter })}>
                <header part="header">
                  <slot name="header"></slot>
                  <div part="description" ?hidden=${!hasDescription}>
                    <slot name="description"></slot>
                  </div>
                </header>
                <slot></slot>
                <footer ?hidden=${!hasFooter} part="footer">
                  <slot name="footer"></slot>
                </footer>
              </div>
              <button id="close-button"
                      part="close-button"
                      aria-label="Close dialog"
                      @keydown=${this.onKeydown}
                      @click=${this.close}>
                <svg fill="currentColor" viewBox="0 0 352 512">
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </rh-surface>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.onKeydown);
    this.#triggerElement?.removeEventListener('click', this.onTriggerClick);
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
      // Set the focus to the container
      this.dialog?.focus();
      this.dispatchEvent(new DialogOpenEvent(this.#triggerElement));
    } else {
      // Return scrollability
      document.body.style.overflow = 'auto';

      const event = this.#cancelling ? new DialogCancelEvent() : new DialogCloseEvent();

      await this.updateComplete;

      if (this.#triggerElement) {
        this.#triggerElement.focus();
      }

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

  @bound private onTriggerClick(event: MouseEvent) {
    event.preventDefault();
    this.showModal();
  }

  @bound private onClick(event: MouseEvent) {
    const { open, overlay, dialog } = this;
    if (open) {
      const path = event.composedPath();
      const { closeOnOutsideClick } = this.constructor as typeof RhDialog;

      if (closeOnOutsideClick && path.includes(overlay!) && !path.includes(dialog!)) {
        event.preventDefault();
        this.cancel();
      }
    }
  }

  @bound private onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
        if (event.target === this.closeButton) {
          event.preventDefault();
          this.dialog?.focus();
        }
        return;
      case 'Escape':
      case 'Esc':
        event.preventDefault();
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

  private async cancel() {
    this.#cancelling = true;
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
    this.open = !this.open;
  }

  /**
   * Manually opens the dialog.
   * ```js
   * dialog.show();
   * ```
   */
  @bound show() {
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

    this.open = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
