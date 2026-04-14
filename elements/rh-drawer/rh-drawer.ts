import { LitElement, html, isServer, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { initializer, observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import {
  BreakpointMd,
  BreakpointLg,
  BreakpointXl,
  Breakpoint2xl,
} from '@rhds/tokens/media.js';

import styles from './rh-drawer.css' with { type: 'css' };

/**
 * Fired when the drawer panel opens. The `trigger` property provides a
 * reference to the HTMLElement that initiated the open action, or `null`
 * when opened programmatically via {@link RhDrawer.show}.
 */
export class DrawerOpenEvent extends Event {
  constructor(
    public trigger: HTMLElement | null
  ) {
    super('open', { bubbles: true, cancelable: true, composed: true });
  }
}

/** Fired when the drawer panel closes. */
export class DrawerCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true, composed: true });
  }
}

/**
 * Fired when the auto variant crosses its breakpoint threshold and
 * switches between overlay and inline layout modes. Consumers can
 * listen for this event to show or hide an external trigger button.
 */
export class DrawerModeChangeEvent extends Event {
  constructor(
    /** The layout mode the drawer just entered. */
    public mode: 'overlay' | 'inline' | 'collapsible'
  ) {
    super('mode-change', { bubbles: true, composed: true });
  }
}

const thresholdBreakpoints: Record<string, number> = {
  'md': parseInt(BreakpointMd),
  'lg': parseInt(BreakpointLg),
  'xl': parseInt(BreakpointXl),
  '2xl': parseInt(Breakpoint2xl),
};

/**
 * A collapsible side panel that provides supplementary content or
 * navigation. The `body` slot must contain content and a header or
 * `accessible-label` should be set so screen readers can identify
 * the panel per WCAG. Escape closes the dialog when focused. A
 * closed panel must always allow reopening via `trigger-id` or
 * `panel="collapsible"`. Tab moves focus through panel controls.
 *
 * @summary Slides a panel in from the side for supplementary content or navigation
 *
 * @alias drawer
 *
 * @slot - Expects block elements such as `div`, `section`, or `article` for page content alongside the drawer panel. Not rendered for fixed or flow variants.
 * @slot header - Expects block elements for the panel header. May include a heading (`h1`–`h6`) so screen readers can identify the panel content.
 * @slot body - Expects block elements such as `div`, `nav`, or `rh-navigation-vertical` for panel content. Must not be left empty for accessibility.
 * @slot footer - Expects block elements for footer content pinned to the bottom of the panel. Content is visible to screen readers.
 * @slot expand-label-expand - Expects inline text for the expand button when collapsed. Defaults to "Enter full viewport". Should be localized for screen readers.
 * @slot expand-label-collapse - Expects inline text for the expand button when expanded. Defaults to "Exit full viewport". Should be localized for screen readers.
 * @slot close-label - Expects inline text for the close button. Defaults to "Close drawer". Should be localized for screen readers.
 * @slot resize-label - Expects inline text for the resize handle. Defaults to "Resize panel". Should be localized for screen readers.
 * @slot collapse-label-open - Expects inline text for the collapse toggle when open. Defaults to "Collapse panel". Should be localized for screen readers.
 * @slot collapse-label-closed - Expects inline text for the collapse toggle when closed. Defaults to "Expand panel". Should be localized for screen readers.
 *
 * @fires {DrawerOpenEvent} open - Fires when the drawer panel opens. The event's `trigger` property is the HTMLElement that initiated the action, or `null` when opened via `show()`.
 * @fires {DrawerCloseEvent} close - Fires when the drawer panel closes. No additional data.
 * @fires {DrawerModeChangeEvent} mode-change - Fires when the layout mode changes. For auto variant, `mode` is `'inline'` (above breakpoint, collapsible toggle visible) or `'overlay'` (below breakpoint, needs external trigger). For overlay variant with collapsible panel, `mode` is `'collapsible'` (above 768px, built-in toggle visible) or `'overlay'` (below 768px, needs external trigger).
 */
@customElement('rh-drawer')
@themable
export class RhDrawer extends LitElement {
  static readonly styles = [styles];

  static readonly minPanelWidth = 320;

  #slots = new SlotController(this, null, 'header', 'body', 'footer');
  #triggerElement: HTMLElement | null = null;
  #resizing = false;
  #mediaQuery?: MediaQueryList;
  #resizeObserver?: ResizeObserver;
  #resizeTimer?: ReturnType<typeof setTimeout>;
  #flowUserState: boolean | null = null;
  #userInteracted = false;
  #reverting = false;

  /** Controls the layout behavior of the drawer. */
  @property({ reflect: true }) variant: 'auto' | 'fixed' | 'flow' | 'overlay' = 'auto';

  /** Which side the panel appears on. */
  @property({ reflect: true }) position: 'inline-start' | 'inline-end' = 'inline-start';

  /** Whether the drawer panel is open. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * ID of the external trigger element that toggles the drawer open and
   * closed. Must be set when `panel` is `none` or `resizable` so the panel
   * can be reopened after closing. The referenced element receives click
   * handling automatically and receives focus when the panel closes.
   */
  @property({ attribute: 'trigger-id' }) triggerId?: string;

  /** Adds a full-viewport toggle button to the panel actions. */
  @property({ reflect: true }) expand?: 'full-viewport';

  /**
   * Accessible label for the drawer panel. When the header slot has content,
   * the panel uses `aria-labelledby` referencing the header. When no header
   * is present, falls back to this value as `aria-label`. Defaults to 'Panel'.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Panel';

  /**
   * Controls the panel edge interaction.
   * - `collapsible`: adds a collapse/expand toggle button (default for auto/overlay)
   * - `resizable`: adds a drag bar for manual resizing (fixed and overlay only)
   * Auto and overlay variants default to `collapsible` when not set.
   * Fixed variant ignores `collapsible`.
   * When set to `none` or `resizable`, `trigger-id` must reference a visible
   * trigger element so the panel can be reopened after closing.
   */
  @property({ reflect: true }) panel?: 'collapsible' | 'resizable' | 'none';

  /** When set, persists open/closed state and panel width to sessionStorage using this value as a key prefix */
  @property({ attribute: 'storage-key' }) storageKey?: string;

  /**
   * Breakpoint (as a t-shirt size) at which the layout switches.
   * For `auto`: container width at which overlay switches to inline.
   * For `flow`: viewport width at which fixed switches to inline.
   * Defaults to 768px when not set.
   */
  @property({ attribute: 'overlay-threshold' })
  overlayThreshold?: 'md' | 'lg' | 'xl' | '2xl';

  @state() private _isFullViewport = false;
  @state() private _isInlineMode = false;
  @state() private _isNarrowCollapsible = false;
  @state() private _panelWidth: number | null = null;
  @state() private _splitterValue = 0;
  @state() private _suppressTransition = false;

  @query('#container') private containerEl!: HTMLElement;
  @query('#close-button') private closeButton!: HTMLElement;
  @query('#collapse-toggle') private collapseToggle!: HTMLElement;
  @query('#panel') private panelEl!: HTMLElement;

  get #panelRole(): 'dialog' | 'complementary' {
    switch (this.variant) {
      case 'fixed':
      case 'overlay':
        return 'dialog';
      case 'auto':
      case 'flow':
      default:
        return this._isInlineMode ? 'complementary' : 'dialog';
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      document.addEventListener('keydown', this.#onDocumentKeyDown);
    }
  }

  @initializer()
  protected async _init() {
    await this.updateComplete;
    if (!isServer) {
      this._suppressTransition = true;
      this.#restoreState();
      this.#updateSplitterValue();
      this.#setupVariant();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick);
    if (!isServer) {
      document.removeEventListener('keydown', this.#onDocumentKeyDown);
      document.removeEventListener('pointermove', this.#onPointerMove);
      document.removeEventListener('pointerup', this.#onPointerUp);
      window.removeEventListener('resize', this.#onWindowResize);
    }
    this.#mediaQuery?.removeEventListener('change', this.#onMediaChange);
    this.#resizeObserver?.disconnect();
    clearTimeout(this.#resizeTimer);
  }

  render() {
    const wouldBeCollapsible =
      (this.panel === 'collapsible' || (!this.panel
        && this.variant !== 'fixed' && this.variant !== 'flow'))
      && this.variant !== 'fixed' && this.variant !== 'flow';
    const showCollapsible = wouldBeCollapsible
      && (this.variant !== 'auto' || this._isInlineMode)
      && !(this.variant === 'overlay' && this._isNarrowCollapsible);
    const isResizable = this.panel === 'resizable'
      && (this.variant === 'fixed' || this.variant === 'overlay');
    const hasHeader = this.#slots.hasSlotted('header');
    const hasBody = this.#slots.hasSlotted('body');
    const hasFooter = this.#slots.hasSlotted('footer');
    const panelStyles = this._panelWidth != null ?
        { '--_panel-width': `${this._panelWidth}px` }
      : {};
    const hasContentSlot = this.variant !== 'fixed' && this.variant !== 'flow';
    const isAuto = this.variant === 'auto';
    const isFlow = this.variant === 'flow';
    const hasThreshold = isAuto || isFlow;
    const classes = {
      'open': this.open,
      'closed': !this.open,
      'auto': isAuto,
      'fixed': this.variant === 'fixed',
      'flow': isFlow,
      'flow-wide': isFlow && this._isInlineMode,
      'overlay': this.variant === 'overlay',
      'inline-start': this.position === 'inline-start',
      'inline-end': this.position === 'inline-end',
      'collapsible': showCollapsible,
      'resizable': isResizable,
      'full-viewport': this._isFullViewport,
      'no-transition': this._suppressTransition,
      'threshold-md': hasThreshold && this.overlayThreshold === 'md',
      'threshold-lg': hasThreshold && this.overlayThreshold === 'lg',
      'threshold-xl': hasThreshold && this.overlayThreshold === 'xl',
      'threshold-2xl': hasThreshold && this.overlayThreshold === '2xl',
    };

    return html`
      <div id="container"
           class=${classMap(classes)}>
        <!-- csspart panel: The sliding panel container. Background adapts to light and dark themes. -->
        <div id="panel"
             part="panel"
             role="${this.#panelRole}"
             aria-label="${!hasHeader ? this.accessibleLabel : nothing}"
             aria-labelledby="${hasHeader ? 'header' : nothing}"
             ?inert=${!this.open && !showCollapsible}
             style=${styleMap(panelStyles)}>
          <div id="panel-body"
               ?inert=${!this.open && showCollapsible}>
            <div id="actions" ?hidden="${!this.expand && showCollapsible}">
              ${this.expand ? html`
                <!-- csspart expand-button: The full-viewport expand toggle button. -->
                <button id="expand-button"
                        part="expand-button"
                        type="button"
                        aria-controls="panel"
                        aria-labelledby="expand-label"
                        @click=${this.#onFullViewportToggle}>
                  <rh-icon set="ui"
                           icon="${this._isFullViewport ? 'arrow-down-left-up-right-to-center' : 'expand-arrows'}"></rh-icon>
                </button>
                <span id="expand-label" class="visually-hidden">
                  <span ?hidden=${this._isFullViewport}><slot name="expand-label-expand">Enter full viewport</slot></span>
                  <span ?hidden=${!this._isFullViewport}><slot name="expand-label-collapse">Exit full viewport</slot></span>
                </span>
              ` : nothing}
              ${!showCollapsible ? html`
                <!-- csspart close-button: The panel close button, visible when not collapsible. -->
                <button id="close-button"
                        part="close-button"
                        type="button"
                        aria-controls="panel"
                        aria-labelledby="close-label"
                        @click=${this.close}>
                  <rh-icon set="microns" icon="close"></rh-icon>
                </button>
                <span id="close-label" class="visually-hidden">
                  <slot name="close-label">Close drawer</slot>
                </span>
              ` : nothing}
            </div>
            <div id="panel-content">
              <!-- csspart header: The panel header area for slotted heading content. -->
              <div id="header" part="header" ?hidden=${!hasHeader}>
                <slot name="header"></slot>
              </div>
              <!-- csspart body: The panel body content area. -->
              <div id="body" part="body" ?hidden=${!hasBody}>
                <slot name="body"></slot>
              </div>
              <!-- csspart footer: The panel footer area, pinned to the bottom. -->
              <div id="footer" part="footer" ?hidden=${!hasFooter}>
                <slot name="footer"></slot>
              </div>
            </div>
            ${isResizable ? html`
              <!-- csspart resize-handle: The drag handle for resizing panel width. -->
              <div id="resize-handle"
                   part="resize-handle"
                   role="separator"
                   tabindex="0"
                   aria-orientation="vertical"
                   aria-valuenow=${this._splitterValue}
                   aria-valuemin="0"
                   aria-valuemax="100"
                   aria-controls="panel"
                   aria-labelledby="resize-label"
                   @pointerdown=${this.#onPointerDown}
                   @keydown=${this.#onResizeKeyDown}></div>
              <span id="resize-label" class="visually-hidden">
                <!-- Accessible label for the resize handle -->
                <slot name="resize-label">Resize panel</slot>
              </span>
            ` : nothing}
          </div>
          ${showCollapsible ? html`
            <!-- csspart collapse-toggle: The round collapse and expand toggle button. -->
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
              <span ?hidden=${!this.open}><!-- Accessible label for the collapse toggle when panel is open --><slot name="collapse-label-open">Collapse panel</slot></span>
              <span ?hidden=${this.open}><!-- Accessible label for the collapse toggle when panel is closed --><slot name="collapse-label-closed">Expand panel</slot></span>
            </span>
          ` : nothing}
        </div>
        ${hasContentSlot ? html`
          <div id="content-container">
            <!-- csspart content: The main content area adjacent to the panel. -->
            <div id="content" part="content">
              <slot></slot>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }

  @observes('open')
  protected async _openChanged(oldValue?: boolean, newValue?: boolean) {
    // Skip during revert to prevent re-entry when open is restored after cancellation
    if (this.#reverting || oldValue == null || newValue == null || oldValue === newValue) {
      return;
    }
    await this.updateComplete;
    const event = newValue ?
      new DrawerOpenEvent(this.#triggerElement)
      : new DrawerCloseEvent();
    // dispatchEvent returns false when a cancelable event had preventDefault() called.
    // In that case, revert the open property to its previous value so the drawer
    // stays in its prior state. The #reverting flag prevents the property change
    // from re-entering this observer, and _suppressTransition avoids any visual
    // flicker from the brief intermediate state.
    if (!this.dispatchEvent(event)) {
      this.#reverting = true;
      this._suppressTransition = true;
      this.open = oldValue;
      await this.updateComplete;
      this.#reverting = false;
      return;
    }
    this.#store('open', newValue);
    if (newValue) {
      if (this.#userInteracted) {
        // TODO: use .focus({ focusVisible: true }) when Baseline
        (this.closeButton ?? this.collapseToggle)?.focus();
      }
    } else {
      if (this.#userInteracted) {
        // TODO: use .focus({ focusVisible: true }) when Baseline
        this.#triggerElement?.focus();
      }
    }
    this.#userInteracted = false;
  }

  @observes('variant')
  protected _variantChanged(old?: string) {
    if (old != null) {
      this.#suppressTransitionBriefly();
    }
    if (this.hasUpdated) {
      this.#setupVariant();
    }
  }

  @observes('position')
  protected _positionChanged(old?: string) {
    if (old != null) {
      this.#suppressTransitionBriefly();
    }
  }

  @observes('panel')
  protected _panelChanged(_old?: string, _new?: string) {
    if (_old === 'resizable' && _new !== 'resizable') {
      this._panelWidth = null;
      this.#store('panelWidth', null);
    }
    this.#store('panel', _new ?? null);
    if ((this.variant === 'overlay' || this.variant === 'auto') && this.hasUpdated) {
      const effectivelyCollapsible = _new === 'collapsible' || !_new;
      if (effectivelyCollapsible) {
        if (this.variant === 'overlay') {
          this._isNarrowCollapsible = false;
          this.#updateInlineMode();
          this.dispatchEvent(
            new DrawerModeChangeEvent(this._isNarrowCollapsible ? 'overlay' : 'collapsible'),
          );
        } else {
          this.dispatchEvent(
            new DrawerModeChangeEvent(this._isInlineMode ? 'inline' : 'overlay'),
          );
        }
      } else {
        this._isNarrowCollapsible = false;
        this.dispatchEvent(new DrawerModeChangeEvent('overlay'));
      }
    }
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

  #suppressTransitionBriefly() {
    this._suppressTransition = true;
    requestAnimationFrame(() => {
      this._suppressTransition = false;
    });
  }

  #onTriggerClick = (event: MouseEvent) => {
    event.preventDefault();
    this.toggle();
  };

  #onPointerDown = (event: PointerEvent) => {
    event.preventDefault();
    this.#resizing = true;
    document.addEventListener('pointermove', this.#onPointerMove);
    document.addEventListener('pointerup', this.#onPointerUp);
    this.panelEl?.classList.add('resizing');
  };

  #onPointerMove = (event: PointerEvent) => {
    if (!this.#resizing || !this.panelEl?.parentElement) {
      return;
    }
    const isFixedPosition = this.variant === 'fixed';
    const isRtl = this.matches(':dir(rtl)');
    const panelOnLeft = (this.position === 'inline-start') !== isRtl;
    const containerRect = this.panelEl.parentElement.getBoundingClientRect();
    const maxWidth = isFixedPosition ? window.innerWidth : containerRect.width;
    let newWidth: number;
    if (panelOnLeft) {
      newWidth = isFixedPosition ?
        event.clientX
        : event.clientX - containerRect.left;
    } else {
      newWidth = isFixedPosition ?
        window.innerWidth - event.clientX
        : containerRect.right - event.clientX;
    }
    this._panelWidth = Math.max(RhDrawer.minPanelWidth, Math.min(newWidth, maxWidth));
    this.#updateSplitterValue();
  };

  #onPointerUp = () => {
    this.#resizing = false;
    document.removeEventListener('pointermove', this.#onPointerMove);
    document.removeEventListener('pointerup', this.#onPointerUp);
    this.panelEl?.classList.remove('resizing');
    this.#store('panelWidth', this._panelWidth);
  };

  #onResizeKeyDown = (event: KeyboardEvent) => {
    const step = 10;
    const isRtl = this.matches(':dir(rtl)');
    const panelOnLeft = (this.position === 'inline-start') !== isRtl;
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.#adjustPanelWidth(panelOnLeft ? -step : step);
        this.#store('panelWidth', this._panelWidth);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.#adjustPanelWidth(panelOnLeft ? step : -step);
        this.#store('panelWidth', this._panelWidth);
        break;
      case 'Home':
        event.preventDefault();
        this._panelWidth = RhDrawer.minPanelWidth;
        this.#updateSplitterValue();
        this.#store('panelWidth', this._panelWidth);
        break;
      case 'End':
        event.preventDefault();
        if (this.panelEl?.parentElement) {
          this._panelWidth = this.panelEl.parentElement.getBoundingClientRect().width;
          this.#updateSplitterValue();
          this.#store('panelWidth', this._panelWidth);
        }
        break;
      case 'Enter':
        event.preventDefault();
        this.toggle();
        break;
    }
  };

  #adjustPanelWidth(delta: number) {
    const current = this._panelWidth ?? RhDrawer.minPanelWidth;
    const maxWidth = this.panelEl?.parentElement?.getBoundingClientRect().width ?? current;
    this._panelWidth = Math.max(RhDrawer.minPanelWidth, Math.min(current + delta, maxWidth));
    this.#updateSplitterValue();
  }

  #updateSplitterValue() {
    if (!this.panelEl?.parentElement) {
      return;
    }
    const containerWidth = this.panelEl.parentElement.getBoundingClientRect().width;
    const panelWidth = this._panelWidth ?? RhDrawer.minPanelWidth;
    this._splitterValue = Math.round((panelWidth / containerWidth) * 100);
  }

  // Flow variant: when the window crosses the 992px breakpoint during a resize,
  // #onMediaChange toggles `open` which would trigger the panel's slide
  // transition. Suppress transitions for the duration of the resize so the
  // panel snaps instantly, then re-enable 150ms after the last event (debounced).
  #onWindowResize = () => {
    this.containerEl?.classList.add('no-transition');
    this.#onMediaChange();
    clearTimeout(this.#resizeTimer);
    this.#resizeTimer = setTimeout(() => {
      this.containerEl?.classList.remove('no-transition');
    }, 150);
  };

  // Auto variant: suppress transitions when the container crosses a
  // breakpoint so the layout swap between overlay and inline snaps instantly.
  #onContainerResize = () => {
    this.containerEl?.classList.add('no-transition');
    this.#updateInlineMode();
    clearTimeout(this.#resizeTimer);
    this.#resizeTimer = setTimeout(() => {
      this.containerEl?.classList.remove('no-transition');
    }, 150);
  };

  #updateInlineMode() {
    if (this.variant === 'auto' || this.variant === 'overlay') {
      const { width } = this.getBoundingClientRect();
      const effectivelyCollapsible = this.panel === 'collapsible' || !this.panel;
      const breakpoint = this.variant === 'auto' && this.overlayThreshold != null ?
        thresholdBreakpoints[this.overlayThreshold] ?? 768
        : 768;
      const nextInline = this.variant === 'auto' && width >= breakpoint;
      if (nextInline !== this._isInlineMode) {
        this._isInlineMode = nextInline;
        if (this.variant === 'auto' && effectivelyCollapsible) {
          this.dispatchEvent(
            new DrawerModeChangeEvent(nextInline ? 'inline' : 'overlay'),
          );
        }
      }
      if (this.variant === 'overlay') {
        if (effectivelyCollapsible) {
          const nextNarrow = width < 768;
          if (nextNarrow !== this._isNarrowCollapsible) {
            this._isNarrowCollapsible = nextNarrow;
            this.dispatchEvent(
              new DrawerModeChangeEvent(nextNarrow ? 'overlay' : 'collapsible'),
            );
          }
        }
      }
    }
  }

  #setupVariant() {
    if (isServer) {
      return;
    }
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = undefined;
    this.#mediaQuery?.removeEventListener('change', this.#onMediaChange);
    window.removeEventListener('resize', this.#onWindowResize);

    if (this.variant === 'auto' || this.variant === 'overlay') {
      this.#resizeObserver = new ResizeObserver(this.#onContainerResize);
      this.#resizeObserver.observe(this);
      this.#updateInlineMode();
      const effectivelyCollapsible = this.panel === 'collapsible' || !this.panel;
      if (this.variant === 'auto') {
        if (effectivelyCollapsible) {
          this.dispatchEvent(
            new DrawerModeChangeEvent(this._isInlineMode ? 'inline' : 'overlay'),
          );
        } else {
          this.dispatchEvent(new DrawerModeChangeEvent('overlay'));
        }
      } else if (this.variant === 'overlay') {
        if (effectivelyCollapsible) {
          this.dispatchEvent(
            new DrawerModeChangeEvent(this._isNarrowCollapsible ? 'overlay' : 'collapsible'),
          );
        } else {
          this.dispatchEvent(new DrawerModeChangeEvent('overlay'));
        }
      }
    } else if (this.variant === 'flow') {
      const bp = this.overlayThreshold != null ?
        thresholdBreakpoints[this.overlayThreshold] ?? 768
        : 768;
      this.#mediaQuery = window.matchMedia(`(min-width: ${bp}px)`);
      this.#mediaQuery.addEventListener('change', this.#onMediaChange);
      window.addEventListener('resize', this.#onWindowResize);
      this.#onMediaChange();
      this._isInlineMode = this.#mediaQuery.matches;
    } else {
      this._isInlineMode = false;
    }
  }

  #onMediaChange = () => {
    if (this.variant !== 'flow' || !this.#mediaQuery) {
      return;
    }
    this._isInlineMode = this.#mediaQuery.matches;
    const nextOpen = this.#mediaQuery.matches ? true : (this.#getStoredOpen() ?? false);
    if (nextOpen !== this.open) {
      this.open = nextOpen;
    }
  };

  #onDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open && this.#panelRole === 'dialog') {
      event.preventDefault();
      this.close();
    }
  };

  #onFullViewportToggle = () => {
    this._isFullViewport = !this._isFullViewport;
  };

  #setFlowUserState(open: boolean) {
    if (this.variant === 'flow') {
      this.#flowUserState = open;
    }
  }

  #store(key: string, value: string | number | boolean | null) {
    if (!this.storageKey) {
      return;
    }
    try {
      if (value == null) {
        sessionStorage.removeItem(`${this.storageKey}:${key}`);
      } else {
        sessionStorage.setItem(`${this.storageKey}:${key}`, String(value));
      }
    } catch { /* storage unavailable */ }
  }

  #restoreState() {
    if (!this.storageKey) {
      return;
    }
    try {
      const open = sessionStorage.getItem(`${this.storageKey}:open`);
      if (open != null) {
        this.open = open === 'true';
        this.#flowUserState = this.open;
      }
      const panel = sessionStorage.getItem(`${this.storageKey}:panel`);
      const validPanels: string[] = ['collapsible', 'resizable', 'none'];
      if (panel != null && validPanels.includes(panel)) {
        this.panel = panel as typeof this.panel;
      }
      const width = sessionStorage.getItem(`${this.storageKey}:panelWidth`);
      if (width != null) {
        const parsed = Number(width);
        if (Number.isFinite(parsed) && parsed >= RhDrawer.minPanelWidth) {
          this._panelWidth = parsed;
        }
      }
    } catch {
      // ignore — storage unavailable
    }
  }

  #getStoredOpen(): boolean | null {
    if (this.storageKey) {
      try {
        const v = sessionStorage.getItem(`${this.storageKey}:open`);
        if (v != null) {
          return v === 'true';
        }
      } catch {
        // ignore
      }
    }
    return this.#flowUserState;
  }

  /** Opens the drawer panel. */
  show() {
    this.#userInteracted = true;
    this.open = true;
    this.#setFlowUserState(true);
  }

  /** Closes the drawer panel. */
  close() {
    this.#userInteracted = true;
    this.open = false;
    this.#setFlowUserState(false);
  }

  /** Toggles the drawer panel open/closed. */
  toggle() {
    this.#userInteracted = true;
    this.open = !this.open;
    this.#setFlowUserState(this.open);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-drawer': RhDrawer;
  }
}
