import { LitElement, html, isServer, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-drawer.css' with { type: 'css' };

/**
 * Fired when the drawer panel opens. The `trigger` property provides a
 * reference to the HTMLElement that initiated the open action, or `null`
 * when opened programmatically via {@link RhDrawer.show}.
 */
export class DrawerOpenEvent extends Event {
  constructor(
    public trigger: HTMLElement | null,
    { cancelable = true } = {},
  ) {
    super('open', { bubbles: true, cancelable, composed: true });
  }
}

/** Fired when the drawer panel closes. */
export class DrawerCloseEvent extends Event {
  constructor(
    { cancelable = true } = {},
  ) {
    super('close', { bubbles: true, cancelable, composed: true });
  }
}

/**
 * A side panel that provides supplementary content or navigation.
 * The default slot holds all panel content and an `accessible-label`
 * should be set so screen readers can identify the panel per WCAG.
 *
 * By default the drawer is an overlay that slides over content. When
 * the parent element has `container-type: inline-size`, the drawer
 * responds to the container width — appearing inline at wide widths
 * and switching to overlay at narrow widths. Add `collapsible` to
 * enable a collapse toggle (push at wide, overlap at narrow).
 *
 * @summary Slides a panel in from the side for supplementary content or navigation
 *
 * @alias drawer
 *
 * @fires {DrawerOpenEvent} open - Fires when the drawer panel opens. The event's `trigger` property is the HTMLElement that initiated the action, or `null` when opened via `show()`.
 * @fires {DrawerCloseEvent} close - Fires when the drawer panel closes. No additional data.
 */
@customElement('rh-drawer')
@themable
export class RhDrawer extends LitElement {
  static readonly styles = [styles];

  #triggerElement: HTMLElement | null = null;
  /** When true, _openChanged moves focus. Prevents focus theft on programmatic changes. */
  #userInteracted = false;
  #reverting = false;
  #modeChange = false;
  #hasContainerContext = false;
  #resizeObserver?: ResizeObserver;
  #inertedElements = new Set<Element>();
  #internals = InternalsController.of(this);

  /** Which side the panel appears on. */
  @property({ reflect: true }) inline: 'start' | 'end' = 'start';

  /** CSS positioning mode for the overlay panel. */
  @property({ reflect: false }) position: 'absolute' | 'fixed' = 'absolute';

  /**
   * Adds a collapse toggle so the panel can be expanded and collapsed.
   * Without this attribute, the panel has no toggle.
   */
  @property({ type: Boolean, reflect: true }) collapsible = false;

  /** Whether the drawer panel is open. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * ID of the external trigger element that toggles the drawer open and
   * closed. The referenced element receives click handling automatically
   * and receives focus when the panel closes.
   */
  @property({ attribute: 'trigger-id' }) triggerId?: string;

  /**
   * Accessible label for the drawer panel. When set, used as `aria-label`
   * on the panel. When omitted, the panel uses `aria-labelledby` referencing
   * the first heading found in slotted content.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Label for the close button. Overridden by the `close-label` slot. */
  @property({ attribute: 'close-label' }) closeLabel?: string;

  /** Label for the collapse toggle. Overridden by the `collapse-label` slot. */
  @property({ attribute: 'collapse-label' }) collapseLabel?: string;

  @state() protected _suppressTransition = false;
  @state() protected _narrowContainer = false;

  @query('#close-button') private closeButton!: HTMLElement;
  @query('#collapse-toggle') private collapseToggle!: HTMLElement;

  @state() private _hasHeading = false;

  get #isEffectiveOverlay(): boolean {
    if (this.collapsible) {
      return false;
    }
    if (!this.#hasContainerContext) {
      return true;
    }
    return this._narrowContainer;
  }

  get #isCollapsibleOverlap(): boolean {
    return this.collapsible && this._narrowContainer;
  }


  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      document.addEventListener('keydown', this.#onDocumentKeyDown);
      let ancestor: Element | null = this.parentElement;
      while (ancestor) {
        const ct = getComputedStyle(ancestor).containerType;
        if (ct === 'inline-size' || ct === 'size') {
          this.#hasContainerContext = true;
          this.#resizeObserver = new ResizeObserver(entries => {
            const [entry] = entries;
            if (entry) {
              const narrow = entry.contentBoxSize[0].inlineSize < 992;
              if (narrow !== this._narrowContainer) {
                this._narrowContainer = narrow;
              }
            }
          });
          this.#resizeObserver.observe(ancestor);
          break;
        }
        ancestor = ancestor.parentElement;
      }
      this.#syncHostAria();
    }
  }

  @initializer()
  protected async _init() {
    await this.updateComplete;
    if (!isServer) {
      this.#suppressTransitionBriefly();
      this.#triggerElement?.setAttribute('aria-expanded', String(!!this.open));
      this.#syncOverlayState();
      this.#syncHostAria();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick);
    this.#resizeObserver?.disconnect();
    this.#restoreInertedContent();
    if (!isServer) {
      this.#unlockScroll();
      document.removeEventListener('keydown', this.#onDocumentKeyDown);
      this.#removeClickOutsideListener();
    }
  }

  render() {
    const isEffectiveOverlay = this.#isEffectiveOverlay;
    const isCollapsibleOverlap = this.#isCollapsibleOverlap;
    const classes = {
      'open': this.open,
      'overlay': isEffectiveOverlay,
      'collapsible': this.collapsible,
      'overlap': isCollapsibleOverlap,
      'inline-end': this.inline === 'end',
      'fixed': this.position === 'fixed',
      'no-transition': this._suppressTransition,
    };

    return html`
      <div id="container"
           class=${classMap(classes)}>
        <div id="panel"
             part="panel"
             ?inert=${!this.open && isEffectiveOverlay}>
          ${isEffectiveOverlay ? html`
            <button id="close-button"
                    part="close-button"
                    type="button"
                    aria-controls="panel"
                    aria-labelledby="close-label"
                    @click=${this.close}>
              <rh-icon set="microns" icon="close"></rh-icon>
            </button>
            <span id="close-label" class="visually-hidden">
              <!--
                summary: Close button label
                description: |
                  Inline text for the close button. Defaults to
                  "Close drawer". Should be localized for non-English
                  contexts. Also available as the \`close-label\` attribute.
              -->
              <slot name="close-label">${this.closeLabel ?? 'Close drawer'}</slot>
            </span>
          ` : nothing}
          <div id="content" ?inert=${!this.open && this.collapsible}>
            <!--
              summary: Panel content
              description: |
                Expects block elements for panel content such as
                \`div\`, \`nav\`, headings, or \`rh-navigation-vertical\`.
            -->
            <slot @slotchange=${this.#onDefaultSlotChange}></slot>
          </div>
          ${this.collapsible ? html`
            <button id="collapse-toggle"
                    part="collapse-toggle"
                    type="button"
                    aria-controls="panel"
                    aria-expanded="${this.open}"
                    aria-labelledby="collapse-label"
                    @click=${this.toggle}>
              <rh-icon set="ui" icon="caret-left"></rh-icon>
            </button>
            <span id="collapse-label" class="visually-hidden">
              <!--
                summary: Collapse toggle label
                description: |
                  Inline text for the collapse toggle button. Defaults to
                  "Toggle panel". Should be localized for non-English
                  contexts. Also available as the \`collapse-label\` attribute.
              -->
              <slot name="collapse-label">${this.collapseLabel ?? 'Toggle panel'}</slot>
            </span>
          ` : nothing}
        </div>
      </div>
    `;
  }

  @observes('open')
  protected async _openChanged(oldValue?: boolean, newValue?: boolean) {
    if (this.#reverting || oldValue == null || newValue == null || oldValue === newValue) {
      return;
    }
    await this.updateComplete;
    const cancelable = !this.#modeChange;
    const event = newValue ?
      new DrawerOpenEvent(this.#triggerElement, { cancelable })
      : new DrawerCloseEvent({ cancelable });
    if (!this.dispatchEvent(event)) {
      this.#reverting = true;
      this._suppressTransition = true;
      this.open = oldValue;
      await this.updateComplete;
      this.#reverting = false;
      this.#suppressTransitionBriefly();
      return;
    }
    this.#triggerElement?.setAttribute('aria-expanded', String(!!newValue));
    this.#syncOverlayState();
    if (newValue) {
      if (this.#userInteracted) {
        if (this.#isEffectiveOverlay) {
          this.closeButton?.focus();
        } else if (this.collapsible) {
          this.collapseToggle?.focus();
        }
      }
    } else {
      if (this.#userInteracted) {
        if (this.#triggerElement?.inert) {
          this.#triggerElement.inert = false;
        }
        this.#triggerElement?.focus();
      }
    }
    this.#userInteracted = false;
  }

  @observes('inline')
  protected _inlineChanged(old?: string) {
    if (old != null) {
      this.#suppressTransitionBriefly();
    }
  }

  @observes('accessibleLabel')
  protected _accessibleLabelChanged() {
    this.#syncHostAria();
  }

  @observes('_narrowContainer' as keyof RhDrawer)
  protected _narrowContainerChanged(old?: boolean, value?: boolean) {
    if (old == null || value == null || old === value) {
      return;
    }
    this.#suppressTransitionBriefly();
    this.#modeChange = true;
    this.open = !value;
    this.#modeChange = false;
    this.#syncHostAria();
  }

  @observes('triggerId')
  protected _triggerChanged() {
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick);
    this.#triggerElement = null;
    if (this.triggerId) {
      this.#triggerElement =
        (this.getRootNode() as Document | ShadowRoot).getElementById(this.triggerId);
      this.#triggerElement?.addEventListener('click', this.#onTriggerClick);
    }
  }

  #inertSurroundingContent() {
    const elements =
      this.position === 'fixed' ?
        this.#getDocumentSiblings()
        : Array.from(this.parentElement?.children ?? []);
    for (const el of elements) {
      if (el === this || (el as HTMLElement).inert) {
        continue;
      }
      (el as HTMLElement).inert = true;
      this.#inertedElements.add(el);
    }
  }

  #syncOverlayState() {
    if (this.open && (this.#isEffectiveOverlay || this.#isCollapsibleOverlap)) {
      this.#inertSurroundingContent();
      this.#lockScroll();
      this.#addClickOutsideListener();
    } else {
      this.#restoreInertedContent();
      this.#unlockScroll();
      this.#removeClickOutsideListener();
    }
  }

  #syncHostAria() {
    const isOverlay = this.#isEffectiveOverlay || this.#isCollapsibleOverlap;
    this.#internals.role = isOverlay ? 'dialog' : 'complementary';
    this.#internals.ariaModal = isOverlay ? 'true' : null;
    if (this.accessibleLabel) {
      this.#internals.ariaLabel = this.accessibleLabel;
      this.#internals.ariaLabelledByElements = null;
    } else if (this._hasHeading) {
      this.#internals.ariaLabel = null;
      const heading = this.querySelector(':is(h1,h2,h3,h4,h5,h6):not([slot])');
      this.#internals.ariaLabelledByElements = heading ? [heading] : null;
    } else {
      this.#internals.ariaLabel = 'Panel';
      this.#internals.ariaLabelledByElements = null;
    }
  }

  #lockScroll() {
    document.body.style.overflow = 'hidden';
  }

  #unlockScroll() {
    document.body.style.overflow = '';
  }

  #addClickOutsideListener() {
    document.addEventListener('pointerdown', this.#onDocumentPointerDown);
  }

  #removeClickOutsideListener() {
    document.removeEventListener('pointerdown', this.#onDocumentPointerDown);
  }

  #restoreInertedContent() {
    for (const el of this.#inertedElements) {
      (el as HTMLElement).inert = false;
    }
    this.#inertedElements.clear();
  }

  #getDocumentSiblings(): Element[] {
    const ancestors = new Set<Element>();
    ancestors.add(this);
    for (let node = this.parentElement; node; node = node.parentElement) {
      ancestors.add(node);
    }
    return Array.from(document.body.children).filter(el => !ancestors.has(el));
  }

  #onDocumentPointerDown = (event: PointerEvent) => {
    const path = event.composedPath();
    const panel = this.shadowRoot?.querySelector('#panel');
    if (panel && !path.includes(panel) && !path.includes(this.#triggerElement!)) {
      this.close();
    }
  };

  #suppressTransitionBriefly() {
    this._suppressTransition = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this._suppressTransition = false;
      });
    });
  }

  #onDefaultSlotChange() {
    const heading = this.querySelector(':is(h1,h2,h3,h4,h5,h6):not([slot])');
    this._hasHeading = !!heading;
    this.#syncHostAria();
  }

  #onTriggerClick = (event: MouseEvent) => {
    event.preventDefault();
    this.toggle();
  };

  #onDocumentKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === 'Escape'
      && this.open
      && (this.#isEffectiveOverlay || this.#isCollapsibleOverlap)
      && event.composedPath().includes(this)
    ) {
      event.preventDefault();
      this.close();
    }
  };

  /** Opens the drawer panel. */
  show() {
    this.#userInteracted = true;
    this.open = true;
  }

  /** Closes the drawer panel. */
  close() {
    this.#userInteracted = true;
    this.open = false;
  }

  /** Toggles the drawer panel open/closed. */
  toggle() {
    this.#userInteracted = true;
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-drawer': RhDrawer;
  }
}
