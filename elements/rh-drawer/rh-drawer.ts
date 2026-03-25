import { LitElement, html, isServer, nothing, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';

import { observes } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-drawer.css' with { type: 'css' };

export class DrawerOpenEvent extends Event {
  constructor(
    public trigger: HTMLElement | null
  ) {
    super('open', { bubbles: true, cancelable: true });
  }
}

export class DrawerCloseEvent extends Event {
  constructor() {
    super('close', { bubbles: true, cancelable: true });
  }
}

/**
 * A drawer is a panel that slides in from the edge of its container, providing
 * supplementary content or navigation without leaving the current page.
 *
 * @summary Slides a panel in from the side for supplementary content or navigation
 *
 * @alias drawer
 *
 * @fires {DrawerOpenEvent} open - Fires when the drawer panel opens.
 * @fires {DrawerCloseEvent} close - Fires when the drawer panel closes.
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
  #fixedUserState: boolean | null = null;
  #userInteracted = false;
  #initialized = false;

  /** Controls the layout behavior of the drawer. */
  @property({ reflect: true }) variant: 'auto' | 'fixed' | 'flow' | 'overlay' | 'inline' = 'auto';

  /** Which side the panel appears on. */
  @property({ reflect: true }) position: 'inline-start' | 'inline-end' = 'inline-start';

  /** Whether the drawer panel is open. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Optional ID of the external trigger element. */
  @property({ attribute: 'trigger-id' }) triggerId?: string;

  /** Adds a full-screen toggle button to the panel actions via the Fullscreen API. */
  @property({ reflect: true }) expand?: 'full-screen';

  /**
   * Controls the panel edge interaction.
   * - `collapsible`: adds a collapse/expand toggle button (default for overlay/inline)
   * - `resizable`: adds a drag bar for manual resizing (fixed and overlay only)
   * Overlay and inline variants default to `collapsible` when not set.
   * Fixed variant ignores `collapsible`.
   */
  @property({ reflect: true }) panel?: 'collapsible' | 'resizable' | 'none';

  /** When set, persists open/closed state and panel width to sessionStorage under this key. */
  @property({ attribute: 'storage-key' }) storageKey?: string;

  /**
   * Container width breakpoint (as a t-shirt size) at which the auto variant
   * switches from overlay to inline layout. Defaults to 768px when not set.
   * Only applies to the `auto` variant.
   */
  @property({ attribute: 'overlay-threshold' })
  overlayThreshold?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  @state() private _isFullScreen = false;
  @state() private _panelWidth: number | null = null;
  @state() private _suppressTransition = false;

  @query('#container') private containerEl!: HTMLElement;
  @query('#close-button') private closeButton!: HTMLElement;
  @query('#collapse-toggle') private collapseToggle!: HTMLElement;
  @query('#panel') private panelEl!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#onKeyDown);
    if (!isServer) {
      document.addEventListener('fullscreenchange', this.#onFullScreenChange);
    }
  }

  protected override willUpdate(changed: PropertyValues<this>) {
    if (
      (changed.has('position') && changed.get('position') != null)
      || (changed.has('variant') && changed.get('variant') != null)
    ) {
      this._suppressTransition = true;
    }
  }

  protected override updated() {
    if (this._suppressTransition) {
      requestAnimationFrame(() => {
        this._suppressTransition = false;
      });
    }
    if (this.#initialized) {
      this.#saveState();
    }
  }

  protected override async firstUpdated() {
    await this.updateComplete;
    if (!isServer) {
      // Restore state after hydration to avoid a mismatch between
      // server-rendered HTML and client-rendered values
      this._suppressTransition = true;
      this.#restoreState();
      if (this.variant === 'auto' || this.variant === 'inline') {
        this.#resizeObserver = new ResizeObserver(this.#onContainerResize);
        this.#resizeObserver.observe(this);
      }
      if (this.variant === 'flow') {
        this.#mediaQuery = window.matchMedia('(min-width: 992px)');
        this.#mediaQuery.addEventListener('change', this.#onMediaChange);
        window.addEventListener('resize', this.#onWindowResize);
        this.#onMediaChange();
      }
      this.#initialized = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick);
    if (!isServer) {
      document.removeEventListener('pointermove', this.#onPointerMove);
      document.removeEventListener('pointerup', this.#onPointerUp);
      window.removeEventListener('resize', this.#onWindowResize);
      document.removeEventListener('fullscreenchange', this.#onFullScreenChange);
    }
    this.#mediaQuery?.removeEventListener('change', this.#onMediaChange);
    this.#resizeObserver?.disconnect();
    clearTimeout(this.#resizeTimer);
  }

  render() {
    const showCollapsible = !this.triggerId
      && (this.panel === 'collapsible' || (!this.panel
        && this.variant !== 'fixed' && this.variant !== 'flow'))
      && this.variant !== 'fixed' && this.variant !== 'flow';
    const isResizable = this.panel === 'resizable'
      && (this.variant === 'fixed' || this.variant === 'overlay');
    const hasHeader = this.#slots.hasSlotted('header');
    const hasBody = this.#slots.hasSlotted('body');
    const hasFooter = this.#slots.hasSlotted('footer');
    const panelStyle = this._panelWidth != null ? `--_panel-width: ${this._panelWidth}px;` : '';
    const hasContentSlot = this.variant !== 'fixed' && this.variant !== 'flow';
    const isAuto = this.variant === 'auto';
    const classes = {
      'open': this.open,
      'closed': !this.open,
      'auto': isAuto,
      'fixed': this.variant === 'fixed',
      'flow': this.variant === 'flow',
      'overlay': this.variant === 'overlay',
      'inline': this.variant === 'inline',
      'inline-start': this.position === 'inline-start',
      'inline-end': this.position === 'inline-end',
      'collapsible': showCollapsible,
      'resizable': isResizable,
      'no-transition': this._suppressTransition,
      'threshold-2xs': isAuto && this.overlayThreshold === '2xs',
      'threshold-xs': isAuto && this.overlayThreshold === 'xs',
      'threshold-sm': isAuto && this.overlayThreshold === 'sm',
      'threshold-md': isAuto && this.overlayThreshold === 'md',
      'threshold-lg': isAuto && this.overlayThreshold === 'lg',
      'threshold-xl': isAuto && this.overlayThreshold === 'xl',
      'threshold-2xl': isAuto && this.overlayThreshold === '2xl',
    };

    return html`
      <div id="container"
           class=${classMap(classes)}>
        <div id="panel"
             part="panel"
             style=${panelStyle}>
          <div id="panel-body">
            <div id="panel-content">
              <div id="actions" ?hidden="${!this.expand && showCollapsible}">
                ${this.expand ? html`
                  <button id="expand-button"
                          part="expand-button"
                          type="button"
                          aria-controls="panel"
                          aria-labelledby="expand-label"
                          @click=${this.#onFullScreenToggle}>
                    <rh-icon set="ui"
                             icon="${this._isFullScreen ? 'arrow-down-left-up-right-to-center' : 'expand-arrows'}"></rh-icon>
                  </button>
                  <span id="expand-label" class="visually-hidden">
                    <span ?hidden=${this._isFullScreen}><slot name="expand-label-expand">Enter full screen</slot></span>
                    <span ?hidden=${!this._isFullScreen}><slot name="expand-label-collapse">Exit full screen</slot></span>
                  </span>
                ` : nothing}
                ${!showCollapsible ? html`
                  <button id="close-button"
                          part="close-button"
                          type="button"
                          aria-controls="panel"
                          aria-expanded="true"
                          aria-labelledby="close-label"
                          @click=${this.close}>
                    <rh-icon set="microns" icon="close"></rh-icon>
                  </button>
                  <span id="close-label" class="visually-hidden">
                    <!-- Accessible label for the close button -->
                    <slot name="close-label">Close drawer</slot>
                  </span>
                ` : nothing}
              </div>
              <div id="header" part="header" ?hidden=${!hasHeader}>
                <!-- Header content for the panel -->
                <slot name="header"></slot>
              </div>
              <div id="body" part="body" ?hidden=${!hasBody}>
                <!-- Body content for the panel -->
                <slot name="body"></slot>
              </div>
              <div id="footer" part="footer" ?hidden=${!hasFooter}>
                <!-- Footer content for the panel -->
                <slot name="footer"></slot>
              </div>
            </div>
            ${isResizable ? html`
              <div id="resize-handle"
                   part="resize-handle"
                   role="separator"
                   tabindex="0"
                   aria-orientation="vertical"
                   aria-valuenow=${this.#getSplitterValue()}
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
          <div id="content-container" part="content">
            <div id="content">
              <!-- Page content displayed alongside the panel (not used with fixed variant) -->
              <slot></slot>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }

  @observes('open')
  protected async _openChanged(oldValue?: boolean, newValue?: boolean) {
    if (oldValue == null || newValue == null || oldValue === newValue) {
      return;
    }
    await this.updateComplete;
    if (newValue) {
      if (this.#userInteracted) {
        // TODO: use .focus({ focusVisible: true }) when Baseline
        (this.closeButton ?? this.collapseToggle)?.focus();
      }
      this.dispatchEvent(new DrawerOpenEvent(this.#triggerElement));
    } else {
      if (this.#userInteracted) {
        // TODO: use .focus({ focusVisible: true }) when Baseline
        this.#triggerElement?.focus();
      }
      this.dispatchEvent(new DrawerCloseEvent());
    }
    this.#userInteracted = false;
  }

  @observes('panel')
  protected _panelChanged(_old?: string, _new?: string) {
    if (_old === 'resizable' && _new !== 'resizable') {
      this._panelWidth = null;
    }
  }

  @observes('triggerId')
  protected _triggerChanged() {
    if (this.triggerId) {
      this.#triggerElement?.removeEventListener('click', this.#onTriggerClick);
      this.#triggerElement =
        (this.getRootNode() as Document | ShadowRoot).getElementById(this.triggerId);
      this.#triggerElement?.addEventListener('click', this.#onTriggerClick);
    }
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
    if (!this.#resizing || !this.panelEl) {
      return;
    }
    const isFixedPosition = this.variant === 'fixed';
    const panelOnLeft = (this.position === 'inline-start') !== this.matches(':dir(rtl)');
    const maxWidth = isFixedPosition ?
      window.innerWidth
      : this.panelEl.parentElement!.getBoundingClientRect().width;
    let newWidth: number;
    if (panelOnLeft) {
      newWidth = isFixedPosition ?
        event.clientX
        : event.clientX - this.panelEl.parentElement!.getBoundingClientRect().left;
    } else {
      newWidth = isFixedPosition ?
        window.innerWidth - event.clientX
        : this.panelEl.parentElement!.getBoundingClientRect().right - event.clientX;
    }
    this._panelWidth = Math.max(RhDrawer.minPanelWidth, Math.min(newWidth, maxWidth));
  };

  #onPointerUp = () => {
    this.#resizing = false;
    document.removeEventListener('pointermove', this.#onPointerMove);
    document.removeEventListener('pointerup', this.#onPointerUp);
    this.panelEl?.classList.remove('resizing');
  };

  #onResizeKeyDown = (event: KeyboardEvent) => {
    const step = 10;
    const panelOnLeft = (this.position === 'inline-start') !== this.matches(':dir(rtl)');
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.#adjustPanelWidth(panelOnLeft ? -step : step);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.#adjustPanelWidth(panelOnLeft ? step : -step);
        break;
      case 'Home':
        event.preventDefault();
        this._panelWidth = RhDrawer.minPanelWidth;
        break;
      case 'End':
        event.preventDefault();
        if (this.panelEl?.parentElement) {
          this._panelWidth = this.panelEl.parentElement.getBoundingClientRect().width;
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
  }

  #getSplitterValue(): number {
    if (isServer || !this.panelEl?.parentElement) {
      return 50;
    }
    const containerWidth = this.panelEl.parentElement.getBoundingClientRect().width;
    const panelWidth = this._panelWidth ?? RhDrawer.minPanelWidth;
    return Math.round((panelWidth / containerWidth) * 100);
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

  // Auto/inline variant: suppress transitions when the container crosses a
  // breakpoint so the layout swap between overlay and inline snaps instantly.
  #onContainerResize = () => {
    this.containerEl?.classList.add('no-transition');
    clearTimeout(this.#resizeTimer);
    this.#resizeTimer = setTimeout(() => {
      this.containerEl?.classList.remove('no-transition');
    }, 150);
  };

  #onMediaChange = () => {
    if (this.variant !== 'flow' || !this.#mediaQuery) {
      return;
    }
    const nextOpen = this.#mediaQuery.matches ? true : (this.#getStoredOpen() ?? false);
    if (nextOpen !== this.open) {
      this.open = nextOpen;
    }
  };

  #onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      this.close();
    }
  };

  #onFullScreenToggle = () => {
    if (this._isFullScreen) {
      document.exitFullscreen();
    } else {
      this.panelEl?.requestFullscreen();
    }
  };

  #onFullScreenChange = () => {
    this._isFullScreen = document.fullscreenElement === this;
  };

  #setFixedUserState(open: boolean) {
    if (this.variant === 'flow') {
      this.#fixedUserState = open;
    }
  }

  // sessionStorage access is wrapped in try-catch because storage may be
  // unavailable (private browsing, disabled by policy, quota exceeded, etc.)
  #saveState() {
    if (this.storageKey) {
      try {
        sessionStorage.setItem(this.storageKey, JSON.stringify({
          open: this.open,
          panel: this.panel,
          panelWidth: this._panelWidth,
        }));
      } catch { /* storage unavailable */ }
    }
  }

  #restoreState() {
    if (!this.storageKey) {
      return;
    }
    try {
      const stored = sessionStorage.getItem(this.storageKey);
      if (stored) {
        const s = JSON.parse(stored);
        if (typeof s.open === 'boolean') {
          this.open = s.open;
          this.#fixedUserState = s.open;
        }
        if (typeof s.panel === 'string') {
          this.panel = s.panel;
        }
        if (typeof s.panelWidth === 'number') {
          this._panelWidth = s.panelWidth;
        }
      }
    } catch {
      // ignore malformed storage
    }
  }

  #getStoredOpen(): boolean | null {
    if (this.storageKey) {
      try {
        const stored = sessionStorage.getItem(this.storageKey);
        if (stored) {
          const s = JSON.parse(stored);
          if (typeof s.open === 'boolean') {
            return s.open;
          }
        }
      } catch {
        // ignore
      }
    }
    return this.#fixedUserState;
  }

  /** Opens the drawer panel. */
  show() {
    this.#userInteracted = true;
    this.open = true;
    this.#setFixedUserState(true);
  }

  /** Closes the drawer panel. */
  close() {
    this.#userInteracted = true;
    this.open = false;
    this.#setFixedUserState(false);
  }

  /** Toggles the drawer panel open/closed. */
  toggle() {
    this.#userInteracted = true;
    this.open = !this.open;
    this.#setFixedUserState(this.open);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-drawer': RhDrawer;
  }
}
