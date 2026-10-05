import { LitElement, html, isServer, type PropertyValues } from 'lit';
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
    /** Element from the `trigger` attribute or `setTrigger()`, or null if neither is set. */
    public trigger: HTMLElement | null
  ) {
    super('open', { bubbles: true, cancelable: true });
  }
}

async function pauseYoutube(iframe: HTMLIFrameElement) {
  const { pauseVideo } = await import('./yt-api.js');
  await pauseVideo(iframe);
}

const DOCUMENT_SCROLL_LOCK_CSS = `html[data-rh-dialog-scroll-lock] {
  overflow: hidden;
  scrollbar-gutter: stable;
}`;

interface DocumentScrollLock {
  sheet: CSSStyleSheet;
  count: number;
}

const documentScrollLocks = new WeakMap<Document, DocumentScrollLock>();

/**
 * Count one more open dialog in `doc` and turn the lock on if it is the first.
 * The sheet is installed once for that document. Later dialogs only bump the count.
 * @param doc document that owns the open dialog
 */
function retainScrollLock(doc: Document) {
  if (isServer) {
    return;
  }

  let entry = documentScrollLocks.get(doc);
  if (!entry) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(DOCUMENT_SCROLL_LOCK_CSS);
    doc.adoptedStyleSheets = [
      ...doc.adoptedStyleSheets ?? [],
      sheet,
    ];
    entry = { sheet, count: 0 };
    documentScrollLocks.set(doc, entry);
  }

  entry.count++;
  if (entry.count === 1) {
    doc.documentElement?.setAttribute('data-rh-dialog-scroll-lock', '');
  }
}

/**
 * Count one fewer open dialog in `doc` and turn the lock off at zero.
 * A release with no retained lock is ignored so close and disconnect can both run.
 * @param doc document that owned the dialog being closed or removed
 */
function releaseScrollLock(doc: Document) {
  const entry = documentScrollLocks.get(doc);
  if (!entry || entry.count === 0) {
    return;
  }

  entry.count--;
  if (entry.count === 0) {
    doc.documentElement?.removeAttribute('data-rh-dialog-scroll-lock');
  }
}

/**
 * Modal overlay for confirming decisions or collecting input. Traps focus and
 * blocks page interaction. Must have a heading or `accessible-label` for screen
 * readers. Uses native `<dialog>` with `aria-labelledby`. Escape closes the
 * dialog; Tab cycles focus within it. Use sparingly to avoid disrupting workflow.
 *
 * @summary Modal dialog for confirmations, errors, or required input
 *
 * @fires {DialogOpenEvent} open - Fired when the dialog opens. The `trigger`
 *   property is the element that opened the dialog, or null when no trigger
 *   is set. Listen for this when you should move focus inside the dialog; the
 *   close button takes focus by default. When the dialog closes, move focus
 *   back to `trigger` for keyboard and screen reader users. You must handle a
 *   null `trigger` when `show()` opens the dialog with no trigger set.
 * @fires {DialogCloseEvent} close - Fired when the dialog closes from the close
 *   button or `close()`. Use this when an action confirms a choice, and read
 *   `returnValue` on the dialog. Enter or Space on the close button fires this
 *   event; a screen reader announces that button as "Close Dialog". Escape
 *   fires `cancel` instead. `preventDefault()` does not keep the dialog open.
 * @fires {DialogCancelEvent} cancel - Fired when the user dismisses the dialog
 *   with the Escape key, a backdrop click, or `cancel()`. Listen for this when
 *   you should discard in-progress input. Screen reader and keyboard users both
 *   dismiss with Escape. The close button and `close()` fire `close` instead.
 *   `preventDefault()` does not keep the dialog open.
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

  /**
   * Native `<dialog>`. Null until the first render creates it.
   * `show()` must not set `open` or take the scroll lock while this is null,
   * or the page stays locked with no modal on screen.
   */
  @query('#dialog') private dialog!: HTMLDialogElement | null;
  @query('#content') private content!: HTMLElement;
  @query('#close-button') private closeButton!: HTMLElement;

  #headerId = getRandomId();
  #triggerElement: HTMLElement | null = null;
  #header: HTMLElement | null = null;
  #body: Element[] = [];
  #headings: Element[] = [];
  #cancelling = false;

  /**
   * True while `close()` is inside the native `dialog.close()` call.
   * That call fires `close` before `close()` sets `open` and releases the lock.
   * The native handler uses this so it does not treat that event as a second close.
   */
  #closing = false;

  /**
   * The document this instance currently holds a scroll lock for.
   * Stored so a second close or disconnect cannot decrement twice, and so a
   * dialog that moves documents unlocks the document it actually locked.
   */
  #lockedDocument: Document | null = null;

  /**
   * `show()` ran before the native `<dialog>` existed.
   * `firstUpdated` opens it once that element is in the shadow root.
   * `close()` clears it so a later render does not open a dialog the caller
   * already closed.
   */
  #pendingShow = false;

  #slots = new SlotController(this, null, 'header', 'description', 'footer');

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#onKeyDown);
    this.addEventListener('click', this.#onClick);
  }

  disconnectedCallback() {
    // Release before Lit teardown. Removing an open dialog is what a route
    // change does, and the lock must end without an inline body style.
    // Also drop a show() that is still waiting for the first render, so it
    // cannot call showModal() after the element is gone.
    this.#pendingShow = false;
    this.#unlockScroll();
    this.#triggerElement?.removeEventListener('click', this.onTriggerClick);
    super.disconnectedCallback();
  }

  /**
   * Finish a `show()` that ran before the native `<dialog>` existed.
   * The element is in the shadow root by this point. `show()` runs on the
   * next microtask so setting `open` is not inside this update. Lit warns
   * when a property changes in `firstUpdated`. The microtask still runs
   * before `updateComplete` resolves for the caller.
   * @param changedProperties properties changed on the first update
   */
  protected override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    if (!this.#pendingShow) {
      return;
    }

    queueMicrotask(() => {
      // `close()` and disconnect clear the flag. A canceled request must not open.
      if (!this.#pendingShow) {
        return;
      }
      this.#pendingShow = false;
      this.show();
    });
  }

  /**
   * Hold the document lock for this instance.
   * Called from `show()` only after `showModal()` succeeds, so a reflected
   * `open` attribute or an early `show()` does not lock the page until the
   * native modal is actually shown.
   */
  #lockScroll() {
    if (isServer || this.#lockedDocument) {
      return;
    }

    const doc = this.ownerDocument;
    retainScrollLock(doc);
    this.#lockedDocument = doc;
  }

  /** Drop this instance's hold on the document it locked. */
  #unlockScroll() {
    const doc = this.#lockedDocument;
    if (!doc) {
      return;
    }

    this.#lockedDocument = null;
    releaseScrollLock(doc);
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
                  @cancel=${this.#onNativeDialogCancel}
                  @close=${this.#onNativeDialogClose}>
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
      await this.updateComplete;
      this.dispatchEvent(new DialogOpenEvent(this.#triggerElement));
    } else {
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

  #onNativeDialogCancel(event: Event) {
    if (event.target !== this.dialog) {
      return;
    }

    this.cancel();
  }

  /**
   * Syncs open state and releases the scroll lock when the native dialog closes.
   * @param event close event from the inner dialog
   */
  #onNativeDialogClose(event: Event) {
    const { dialog } = this;
    // Ignore closes from nested dialogs, and a close that arrives before render.
    if (!dialog || event.target !== dialog) {
      return;
    }

    // `close()` already stored returnValue, cleared `open`, and released
    // the lock. This event is the queued echo of that call.
    if (!this.open && !this.#lockedDocument) {
      return;
    }

    // A synchronous `close` event inside `close()` still sees `#closing`.
    // Leave returnValue and `open` to that method. Still release the lock;
    // the later `#unlockScroll()` in `close()` no-ops.
    if (!this.#closing) {
      this.returnValue = dialog.returnValue;
      this.open = false;
    }

    this.#unlockScroll();
  }

  #onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
      case 'Esc':
        event.stopPropagation(); // For nested dialogs
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
    // `#pendingShow` is an open request that has not rendered yet.
    // A second toggle cancels it, same as toggling a dialog that is already open.
    // `open` is set only after `showModal()` succeeds, so it is not the signal here.
    if (!this.open && !this.#pendingShow) {
      this.showModal();
    } else {
      this.close();
    }
  }

  /**
   * Opens the dialog as a modal.
   * `open` and the document scroll lock are set only after the native dialog
   * exists and `showModal()` succeeds. A call before the first render is
   * applied from `firstUpdated`.
   */
  show() {
    const { dialog } = this;
    if (!dialog) {
      // `@query('#dialog')` is null until the first render. Optional chaining
      // would skip `showModal()` and still lock the page below.
      if (!isServer && !this.hasUpdated) {
        this.#pendingShow = true;
      }
      return;
    }

    this.#pendingShow = false;
    // Throws if the dialog is not connected or is already modal.
    // That throw skips `open` and the lock, so a failed show cannot stick.
    dialog.showModal();
    this.open = true;
    this.#lockScroll();
  }

  /** Opens the dialog as a modal. */
  showModal() {
    // TODO: non-modal mode
    this.show();
  }

  /**
   * Closes the dialog.
   * @param [returnValue] dialog return value
   */
  close(returnValue?: string) {
    // Drop a show() that is still waiting for the first render.
    this.#pendingShow = false;

    if (typeof returnValue === 'string') {
      this.returnValue = returnValue;
    } else {
      this.returnValue = '';
    }

    // `#closing` covers a browser that fires `close` inside `dialog.close()`.
    // Chromium queues that event instead, so the handler also ignores the
    // echo after `open` is false and the lock is already released.
    this.#closing = true;
    try {
      this.dialog?.close();
    } finally {
      this.#closing = false;
    }

    this.open = false;
    this.#unlockScroll();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
