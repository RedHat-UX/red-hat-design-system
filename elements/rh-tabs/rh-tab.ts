import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import {
  rhTabsActiveTabContext,
  rhTabsBoxContext,
  rhTabsFirstTabContext,
  rhTabsLastTabContext,
  rhTabsVerticalContext,
} from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tab.css';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

export class TabExpandEvent extends Event {
  constructor(
    public active: boolean,
    public tab: RhTab,
  ) {
    super('expand', { bubbles: true, cancelable: true });
  }
}

/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 * @slot icon - Can contain an `<svg>` or `<rh-icon>`
 * @slot - Tab title text
 * @csspart button - element that contains the interactive part of a tab
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 * @cssprop {<color>} [--rh-tabs-link-color=#4d4d4d] - Tab link text color
 * @cssprop {<color>} [--rh-tabs-active-border-color=#ff442b] - Tab active border color
 * @cssprop {<length>} [--rh-tabs-link-padding-inline-start=32px] - Tab padding inline start
 * @cssprop {<length>} [--rh-tabs-link-padding-block-start=16px] - Tab padding block start
 * @cssprop {<length>} [--rh-tabs-link-padding-inline-end=32px`] - Tab padding inline end
 * @cssprop {<length>} [--rh-tabs-link-padding-block-end=16px] - Tab padding block end
 * @fires { TabExpandEvent } expand - when a tab expands
 */
@customElement('rh-tab')
@themable
export class RhTab extends LitElement {
  static readonly styles = [styles];

  /** True when the tab is selected */
  @property({ reflect: true, type: Boolean }) active = false;

  /** True when the tab is disabled */
  @property({ reflect: true, type: Boolean }) disabled = false;

  @consume({ context: rhTabsBoxContext, subscribe: true })
  @state() private box = false;

  @consume({ context: rhTabsVerticalContext, subscribe: true })
  @state() private vertical = false;

  @consume({ context: rhTabsActiveTabContext, subscribe: true })
  @state() private activeTab: RhTab | null = null;

  @consume({ context: rhTabsFirstTabContext, subscribe: true })
  @state() private firstTab: RhTab | null = null;

  @consume({ context: rhTabsLastTabContext, subscribe: true })
  @state() private lastTab: RhTab | null = null;

  #slots = new SlotController(this, 'icon', null);

  #internals = InternalsController.of(this, { role: 'tab' });

  override connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId(this.localName);
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('focus', this.#onFocus);
  }

  render() {
    const { box = false, vertical = false, activeTab, firstTab, lastTab } = this;
    const active = isServer ? this.active : activeTab === this;
    const first = firstTab === this;
    const last = lastTab === this;
    return html`
      <div id="button"
           part="button"
           ?disabled="${this.disabled}"
           class="${classMap({ active, box, vertical, first, last })}">
        <slot name="icon"
              part="icon"
              ?hidden="${this.#slots.hasSlotted('icon')}"
              @slotchange="${() => this.requestUpdate()}"></slot>
        <slot part="text"></slot>
      </div>
    `;
  }

  #onClick() {
    if (!this.disabled && this.#internals.ariaDisabled !== 'true' && this.ariaDisabled !== 'true') {
      this.#activate();
      if (InternalsController.isSafari) {
        this.focus();
      }
    }
  }

  #onFocus() {
    if (!this.ctx?.manual && !this.disabled) {
      this.#activate();
    }
  }

  #onKeydown(event: KeyboardEvent) {
    if (!this.disabled) {
      switch (event.key) {
        case 'Enter':
          this.#activate();
      }
    }
  }

  #activate() {
    this.dispatchEvent(new TabExpandEvent(this.active, this));
  }

  @observes('active')
  private activeChanged(old: boolean) {
    this.#internals.ariaSelected = String(!!this.active);
    if (this.active && !old) {
      this.#activate();
    }
  }

  /**
   * if a tab is disabled, then it is also aria-disabled
   * if a tab is removed from disabled its not necessarily
   * not still aria-disabled so we don't remove the aria-disabled
   */
  @observes('disabled')
  private disabledChanged() {
    this.#internals.ariaDisabled = String(!!this.disabled);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tab': RhTab;
  }
}
