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
  rhTabsManualContext,
  rhTabsFirstTabContext,
  rhTabsLastTabContext,
  rhTabsVerticalContext,
} from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tab.css';

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

  @consume({ context: rhTabsManualContext, subscribe: true })
  @state() private manual = false;

  @consume({ context: rhTabsActiveTabContext, subscribe: true })
  @state() private activeTab: RhTab | null = null;

  @consume({ context: rhTabsFirstTabContext, subscribe: true })
  @state() private firstTab: RhTab | null = null;

  @consume({ context: rhTabsLastTabContext, subscribe: true })
  @state() private lastTab: RhTab | null = null;

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
      <!-- element that contains the interactive part of a tab -->
      <div id="button"
           part="button"
           ?disabled="${this.disabled}"
           class="${classMap({ active, box, vertical, first, last })}">
        <!-- Can contain an \`<svg>\` or \`<rh-icon>\` -->
        <slot name="icon"
              part="icon"></slot>
        <!-- Tab title text -->
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
    if (!this.manual && !this.disabled) {
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
